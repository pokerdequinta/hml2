const DEBUG_HOST = process.env.CDP_HOST || "http://127.0.0.1:9242";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const target = await (await fetch(`${DEBUG_HOST}/json/new?about:blank`, { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const m = JSON.parse(event.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    }
  });
  const send = (method, params = {}) => {
    id += 1;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.navigate", { url: "https://pokerdequinta.github.io/ranking/" });
  await sleep(9000);
  const result = await send("Runtime.evaluate", {
    expression: `(() => {
      const rows = [...document.querySelectorAll('#rankingTableBody tr')];
      return {
        title: document.title,
        rows: rows.map((row) => ({
          rank: row.querySelector('.rank-number')?.textContent.trim(),
          name: row.querySelector('.player-name')?.textContent.trim(),
          points: row.querySelector('.points')?.textContent.trim(),
          photo: row.querySelector('.player-avatar')?.getAttribute('src'),
          stageCells: [...row.querySelectorAll('.etapa-pill')].map((el) => el.textContent.trim())
        })),
        status: document.querySelector('#statusIndicator')?.textContent.trim(),
        debug: typeof jogadores !== 'undefined' ? jogadores.map((j) => ({ id: j.id, nome: j.nome, foto: j.foto })) : null
      };
    })()`,
    returnByValue: true,
    awaitPromise: true,
  });
  console.log(JSON.stringify(result.result.value, null, 2));
  ws.close();
  fetch(`${DEBUG_HOST}/json/close/${target.id}`).catch(() => {});
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
