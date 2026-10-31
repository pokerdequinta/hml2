/* ============================================================
   DADOS — POKER DE QUINTA 2027
   Jogadores e pontos baseados no ranking oficial
   ============================================================ */

const site = {
  whatsapp: "5511999999999", // troque pelo número real
  instagram: "https://www.instagram.com/pokerdequinta",
  email: "contato@pokerdequinta.com.br",
  address: "Rua Harmonia, 321 — Vila Madalena, São Paulo/SP",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Harmonia+321+Vila+Madalena+Sao+Paulo"
};

/* ------------------------------------------------------------
   JOGADORES (ordem do ranking oficial)
   ------------------------------------------------------------ */
const players = [
  { id: "p01", name: "Sergio",          photo: "", nickname: "Sergio",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p02", name: "Gaspar",          photo: "", nickname: "Gaspar",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p03", name: "Cleversson",      photo: "", nickname: "Cleversson",      city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p04", name: "Robson",          photo: "", nickname: "Robson",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p05", name: "Loreto",          photo: "", nickname: "Loreto",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p06", name: "Solano",          photo: "", nickname: "Solano",          city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p07", name: "Jean",            photo: "", nickname: "Jean",            city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p08", name: "Van Van",         photo: "", nickname: "Van Van",         city: "São Paulo", uf: "SP", since: 2022, bio: "", best: "" },
  { id: "p09", name: "Neto",            photo: "", nickname: "Neto",            city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p10", name: "Matheus",         photo: "", nickname: "Matheus",         city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p11", name: "Ricardo Matoso",  photo: "", nickname: "R. Matoso",       city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p12", name: "Maykon",          photo: "", nickname: "Maykon",          city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p13", name: "Guti",            photo: "", nickname: "Guti",            city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p14", name: "Rafael",          photo: "", nickname: "Rafael",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p15", name: "Izidio",          photo: "", nickname: "Izidio",          city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p16", name: "Diego",           photo: "", nickname: "Diego",           city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p17", name: "Jean Rebuy",      photo: "", nickname: "Jean R.",         city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p18", name: "Buiu",            photo: "", nickname: "Buiu",            city: "São Paulo", uf: "SP", since: 2022, bio: "", best: "" },
  { id: "p19", name: "Ricardo Linhares",photo: "", nickname: "R. Linhares",     city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p20", name: "Amarildo",        photo: "", nickname: "Amarildo",        city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p21", name: "Daniel",          photo: "", nickname: "Daniel",          city: "São Paulo", uf: "SP", since: 2023, bio: "", best: "" },
  { id: "p22", name: "Boy",             photo: "", nickname: "Boy",             city: "São Paulo", uf: "SP", since: 2019, bio: "", best: "" },
  { id: "p23", name: "Marcelo",         photo: "", nickname: "Marcelo",         city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p24", name: "Gera",            photo: "", nickname: "Gera",            city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p25", name: "Ricardo Amarante",photo: "", nickname: "R. Amarante",     city: "São Paulo", uf: "SP", since: 2020, bio: "", best: "" },
  { id: "p26", name: "Tonimar",         photo: "", nickname: "Tonimar",         city: "São Paulo", uf: "SP", since: 2023, bio: "", best: "" },
  { id: "p27", name: "Tigre",           photo: "", nickname: "Tigre",           city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p28", name: "Dos Anjos",       photo: "", nickname: "Dos Anjos",       city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" },
  { id: "p29", name: "Michel",          photo: "", nickname: "Michel",          city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p30", name: "Roberto",         photo: "", nickname: "Roberto",         city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p31", name: "Matheus Cunha",   photo: "", nickname: "M. Cunha",        city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p32", name: "Rafael Rosa",     photo: "", nickname: "R. Rosa",         city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p33", name: "Junior",          photo: "", nickname: "Junior",          city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p34", name: "Deko",            photo: "", nickname: "Deko",            city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p35", name: "Denir",           photo: "", nickname: "Denir",           city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p36", name: "Gregory",         photo: "", nickname: "Gregory",         city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p37", name: "Michel (2)",      photo: "", nickname: "Michel",          city: "São Paulo", uf: "SP", since: 2024, bio: "", best: "" },
  { id: "p38", name: "Kastelo",         photo: "", nickname: "Kastelo",         city: "São Paulo", uf: "SP", since: 2021, bio: "", best: "" }
];

/* ------------------------------------------------------------
   PONTOS POR ETAPA (extraídos do ranking-live.json)
   Cada linha = array de 12 posições (etapas 1 a 12).
   "NJ" e "-" → 0 pontos. Valores negativos = penalidade.
   ------------------------------------------------------------ */
const stagePoints = {
  p01: [31, 28, 7, 31, 22, 5, 34, 5, 5, 28, 26, 0],      // Sergio
  p02: [5, 5, 5, 7, 6, 32, 15, 13, 22, 38, 33, 0],        // Gaspar
  p03: [5, 23, 5, 5, 20, 28, 5, 29, 31, 22, 7, 0],        // Cleversson
  p04: [26, 20, 31, 13, 5, 5, 27, 6, 11, 17, 16, 0],      // Robson
  p05: [0, 33, 23, 18, 7, 5, 21, 22, 16, 5, 14, 0],       // Loreto
  p06: [28, 18, 24, 0, 0, 22, 19, 9, 29, 5, 0, 0],        // Solano
  p07: [5, 19, 5, 28, 15, 7, 5, 32, 0, 25, 6, 0],         // Jean
  p08: [13, 5, 23, 19, 14, 5, 6, 16, 17, 12, 5, 0],       // Van Van
  p09: [22, 5, 31, 22, 16, 6, 0, 5, 7, 15, 5, 0],         // Neto
  p10: [20, 0, 18, 5, 18, 15, 9, 5, 26, 7, 5, 0],         // Matheus
  p11: [7, 6, 9, 9, 28, 21, 26, 5, 5, 5, 0, 0],           // Ricardo Matoso
  p12: [11, 25, 5, 5, 5, 20, 5, 5, 14, 0, 17, 0],         // Maykon
  p13: [5, 5, 5, 27, 5, 9, 7, 12, 0, 22, 5, 0],           // Guti
  p14: [0, 0, 5, 5, 33, 12, 5, 25, 6, 5, 0, 0],           // Rafael
  p15: [9, 6, 8, 5, 5, 6, 5, 19, 21, 5, 0, 0],            // Izidio
  p16: [0, 0, 0, 7, 27, 27, 5, 0, 5, 13, 0, 0],           // Diego
  p17: [5, 8, 13, 14, 5, 0, 16, 8, 8, 0, 5, 0],           // Jean Rebuy
  p18: [0, 0, 0, 5, 11, 15, 0, 23, 0, 0, 22, 0],          // Buiu
  p19: [5, 12, 5, 5, 5, 5, 0, 0, 5, 10, 10, 0],           // Ricardo Linhares
  p20: [22, 5, 0, 0, 5, 0, 0, 0, 0, 0, 27, 0],            // Amarildo
  p21: [0, 0, 0, 0, 0, 0, 13, 0, 5, 0, 25, 0],            // Daniel
  p22: [7, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0],            // Boy
  p23: [0, 0, 16, 0, 0, 0, 0, 5, 0, 0, 5, 0],             // Marcelo
  p24: [0, 5, 0, 0, 0, 5, 5, 0, 0, 5, 5, 0],              // Gera
  p25: [5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0],              // Ricardo Amarante
  p26: [0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0],             // Tonimar
  p27: [0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0],             // Tigre
  p28: [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Dos Anjos
  p29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0],             // Michel
  p30: [0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0],             // Roberto
  p31: [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0],              // Matheus Cunha
  p32: [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0],              // Rafael Rosa
  p33: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0],              // Junior
  p34: [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],              // Deko
  p35: [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],              // Denir
  p36: [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],              // Gregory
  p37: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],              // Michel (2)
  p38: [5, 9, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0]             // Kastelo
};

/* ------------------------------------------------------------
   ETAPAS (12 etapas, a primeira em 28/01/2027)
   ------------------------------------------------------------ */
const stages = [
  { n: 1,  date: "2027-01-28T20:00:00-03:00", name: "Etapa 01 — Abertura",        kicker: "O pontapé da temporada",        description: "A primeira quinta de 2027 abre a corrida pelo trono.", status: "completed", championId: "p01" },
  { n: 2,  date: "2027-02-25T20:00:00-03:00", name: "Etapa 02 — Noite de Reis",    kicker: "Estratégia e blefe",             description: "A mesa esquenta no segundo encontro do ano.",       status: "completed", championId: "p05" },
  { n: 3,  date: "2027-03-25T20:00:00-03:00", name: "Etapa 03 — Mesa Cheia",       kicker: "Casa lotada",                    description: "16 cadeiras, 16 histórias. A temporada ganha corpo.", status: "completed", championId: "p09" },
  { n: 4,  date: "2027-04-29T20:00:00-03:00", name: "Etapa 04 — Virada de Chave",  kicker: "O jogo vira",                    description: "Quem estava atrás começa a reagir.",               status: "completed", championId: "p01" },
  { n: 5,  date: "2027-05-27T20:00:00-03:00", name: "Etapa 05 — All-In",           kicker: "Decisões radicais",              description: "A etapa dos all-ins históricos.",                  status: "completed", championId: "p14" },
  { n: 6,  date: "2027-06-24T20:00:00-03:00", name: "Etapa 06 — Meio de Temporada", kicker: "Balanço da corrida",            description: "Metade do caminho, ranking embolado.",            status: "completed", championId: "p02" },
  { n: 7,  date: "2027-07-29T20:00:00-03:00", name: "Etapa 07 — Noite dos Tubarões", kicker: "Os favoritos aparecem",        description: "A elite da casa mostra por que está no topo.",     status: "completed", championId: "p01" },
  { n: 8,  date: "2027-08-26T20:00:00-03:00", name: "Etapa 08 — Reta Final",       kicker: "Cada ponto importa",             description: "A pressão aumenta a cada mão.",                    status: "completed", championId: "p07" },
  { n: 9,  date: "2027-09-30T20:00:00-03:00", name: "Etapa 09 — Mesa dos Campeões", kicker: "Confronto de gigantes",        description: "Os campeões da temporada se enfrentam.",           status: "completed", championId: "p03" },
  { n: 10, date: "2027-10-28T20:00:00-03:00", name: "Etapa 10 — Sprint Final",     kicker: "Rumo à Grande Final",            description: "A disputa por uma vaga na final esquenta.",        status: "completed", championId: "p02" },
  { n: 11, date: "2027-11-25T20:00:00-03:00", name: "Etapa 11 — Última Chance",    kicker: "Tudo ou nada",                   description: "A última etapa antes da grande decisão.",          status: "completed", championId: "p02" },
  { n: 12, date: "2027-12-16T20:00:00-03:00", name: "Etapa 12 — Grande Final",     kicker: "O trono em jogo",                description: "Os oito melhores disputam o título da temporada.", status: "upcoming",  championId: null }
];

/* ------------------------------------------------------------
   LOJA (mantida como estava — ajuste se necessário)
   ------------------------------------------------------------ */
const shop = [
  { id: "s01", name: "Camisa oficial 2027", category: "Vestuário", price: 129, description: "Malha Dry-Fit com escudo bordado. Tamanhos P ao GG.", image: "" },
  { id: "s02", name: "Baralho personalizado", category: "Acessórios", price: 79, description: "Baralho duplo 100% plástico com arte exclusiva da temporada.", image: "" },
  { id: "s03", name: "Copo térmico", category: "Casa", price: 89, description: "Aço inox 500ml, mantém a bebida gelada por até 8 horas.", image: "" },
  { id: "s04", name: "Kit de fichas (300)", category: "Casa", price: 349, description: "Maleta com 300 fichas de cerâmica numeradas e 2 baralhos.", image: "" },
  { id: "s05", name: "Boné da casa", category: "Vestuário", price: 69, description: "Aba curva, bordado dourado. Tamanho único.", image: "" },
  { id: "s06", name: "Porta-cartas de couro", category: "Acessórios", price: 99, description: "Couro legítimo, capacidade para 2 baralhos.", image: "" }
];

/* ------------------------------------------------------------
   TEMPORADAS ANTERIORES (resumo)
   ------------------------------------------------------------ */
const pastSeasons = {
  "2026": { champion: "Rafa", points: 210 },
  "2025": { champion: "Camila", points: 198 },
  "2024": { champion: "Diego", points: 185 }
};

/* ------------------------------------------------------------
   EXPORTAÇÃO (caso use módulos)
   ------------------------------------------------------------ */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { site, players, stagePoints, stages, shop, pastSeasons };
}
