import { firebaseConfig } from "./firebase-config.js";

import {
  initializeApp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const $ = (selector) => document.querySelector(selector);

const loginCard = $("#admin-login-card");
const adminContent = $("#admin-content");
const logoutButton = $("#admin-logout");
const loginForm = $("#admin-login-form");
const loginMessage = $("#admin-login-message");

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let auth = null;
let db = null;

if (hasFirebaseConfig) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      showAdmin();
    } else {
      showLogin();
    }
  });
} else {
  loginMessage.textContent =
    "Firebase ainda não configurado. Preencha js/firebase-config.js para ativar o acesso.";
}

function showLogin() {
  loginCard.hidden = false;
  adminContent.hidden = true;
  logoutButton.hidden = true;
}

function showAdmin() {
  loginCard.hidden = true;
  adminContent.hidden = false;
  logoutButton.hidden = false;
}

function showMessage(selector, message, type = "") {
  const element = $(selector);
  if (!element) return;

  element.textContent = message;
  element.dataset.type = type;

  window.setTimeout(() => {
    element.textContent = "";
    element.dataset.type = "";
  }, 5000);
}

function value(selector) {
  return $(selector)?.value?.trim() || "";
}

function numberValue(selector) {
  const parsed = Number($(selector)?.value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function splitIds(text) {
  return String(text || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function localDateTimeToISO(valueToConvert) {
  if (!valueToConvert) return "";

  const date = new Date(valueToConvert);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString();
}

function parseRoulette(valueToParse) {
  if (!valueToParse.trim()) return [];

  try {
    const parsed = JSON.parse(valueToParse);

    if (!Array.isArray(parsed)) {
      throw new Error("A Roleta precisa ser uma lista.");
    }

    return parsed.map((entry) => ({
      playerId: String(entry.playerId || "").trim(),
      motivo: String(entry.motivo || "").trim(),
      giros: Math.max(1, Number(entry.giros) || 1),
    }));
  } catch (error) {
    throw new Error(
      "O campo da Roleta precisa conter um JSON válido."
    );
  }
}

async function saveDocument(path, id, data) {
  if (!db) {
    throw new Error("Firebase ainda não foi configurado.");
  }

  await setDoc(
    doc(db, path, id),
    {
      ...data,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!auth) {
    loginMessage.textContent =
      "Configure o Firebase antes de tentar entrar.";
    return;
  }

  const email = value("#admin-email");
  const password = $("#admin-password")?.value || "";

  loginMessage.textContent = "Entrando...";

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginMessage.textContent = "";
  } catch (error) {
    loginMessage.textContent =
      "Não foi possível entrar. Verifique o e-mail e a senha.";
  }
});

logoutButton?.addEventListener("click", async () => {
  if (auth) {
    await signOut(auth);
  }
});

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-admin-tab]");
  if (!tab) return;

  const target = tab.dataset.adminTab;

  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    const active = button === tab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll("[data-admin-panel]").forEach((panel) => {
    const active = panel.dataset.adminPanel === target;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
});

$("#season-config-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await saveDocument("season2027", "config", {
      proximaEtapa: numberValue("#config-next-stage"),
      rankingUpdatedAfter: numberValue("#config-ranking-stage"),
      dataEvento: localDateTimeToISO(value("#config-event-date")),
      inscricoesAbertas: $("#config-open").checked,
    });

    showMessage(
      "#admin-login-message",
      "Configurações salvas.",
      "success"
    );
  } catch (error) {
    showMessage(
      "#admin-login-message",
      error.message || "Erro ao salvar configurações.",
      "error"
    );
  }
});

$("#player-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const playerId = value("#player-id");

  if (!playerId) {
    showMessage(
      "#player-message",
      "Informe um ID único para o jogador.",
      "error"
    );
    return;
  }

  try {
    await saveDocument("season2027/players", playerId, {
      id: playerId,
      name: value("#player-name"),
      nickname: value("#player-nickname"),
      city: value("#player-city"),
      uf: value("#player-uf").toUpperCase(),
      photo: value("#player-photo"),
      bio: value("#player-bio"),
      notes: value("#player-notes"),
    });

    await saveDocument("season2027/privatePlayers", playerId, {
      playerId,
      pixKey: value("#player-pix"),
      notes: value("#player-notes"),
    });

    showMessage(
      "#player-message",
      "Jogador salvo com sucesso.",
      "success"
    );

    event.target.reset();
  } catch (error) {
    showMessage(
      "#player-message",
      error.message || "Erro ao salvar jogador.",
      "error"
    );
  }
});

$("#stage-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const stageId = String(numberValue("#stage-id"));

  if (stageId === "0") {
    showMessage(
      "#stage-message",
      "Informe o número da etapa.",
      "error"
    );
    return;
  }

  let roulette;

  try {
    roulette = parseRoulette(value("#stage-roulette"));
  } catch (error) {
    showMessage("#stage-message", error.message, "error");
    return;
  }

  const stageData = {
    id: Number(stageId),
    date: localDateTimeToISO(value("#stage-date")),
    status: value("#stage-status"),
    results: splitIds(value("#stage-results")),

    winnerId: value("#stage-champion"),
    koKillerId: value("#stage-ko-killer"),

    maoDaEtapa: {
      descricao: value("#stage-hand-of-stage"),
      vencedorId: value("#stage-hand-winner"),
      definidaPorVotacao: true,
    },

    melhorMaoDaNoite: {
      descricao: value("#stage-best-hand"),
      vencedorId: value("#stage-best-hand-winner"),
      addonGratis: true,
    },

    roletaDaSorte: roulette,

    desafioJJ: {
      bolhaId: value("#stage-jj-bubble"),
      resultado: value("#stage-jj-result"),
      acumuladoProximaEtapa: numberValue("#stage-jj-amount"),
    },
  };

  try {
    await saveDocument("season2027/stages", stageId, stageData);

    showMessage(
      "#stage-message",
      "Informações da etapa salvas com sucesso.",
      "success"
    );
  } catch (error) {
    showMessage(
      "#stage-message",
      error.message || "Erro ao salvar etapa.",
      "error"
    );
  }
});
