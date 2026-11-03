/* ============================================================
   TEXTOS EDITORIAIS — POKER DE QUINTA 2027
   ------------------------------------------------------------
   Este é o arquivo principal para alterar os textos das páginas.
   Edite apenas os valores dentro de "values".
   - mode: "text"  -> texto simples (ícones são preservados)
   - mode: "html"  -> aceita marcação, como <br> e <span>
   - mode: "placeholder" -> placeholder de um campo
   Quando "values" tem mais de um item, cada item corresponde a um
   elemento encontrado pelo seletor, na ordem da página.
   Dados de jogadores, etapas, preços e fotos ficam em js/data.js.
   Textos gerados por código (modais, status de ranking etc.) ficam
   em js/app.js quando não listados aqui.
   ============================================================ */

window.PQ_TEXTOS = {
  "global": {
    "brandName": {
      "selector": ".brand__name",
      "mode": "text",
      "values": [
        "Poker de Quinta"
      ]
    },
    "brandSeason": {
      "selector": ".brand__season",
      "mode": "text",
      "values": [
        "Temporada 2027"
      ]
    },
    "liveLabel": {
      "selector": ".live-pill",
      "mode": "text",
      "values": [
        "Temporada em jogo"
      ]
    },
    "headerNextStage": {
      "selector": ".header-play span",
      "mode": "text",
      "values": [
        "Próxima etapa"
      ]
    },
    "menuLabel": {
      "selector": ".menu-toggle__text",
      "mode": "text",
      "values": [
        "Menu"
      ]
    },
    "navHome": {
      "selector": "[data-nav=\"inicio\"] > span:last-child",
      "mode": "text",
      "values": [
        "Início"
      ]
    },
    "navRanking": {
      "selector": "[data-nav=\"ranking\"] > span:last-child",
      "mode": "text",
      "values": [
        "Ranking"
      ]
    },
    "navRegulation": {
      "selector": "[data-nav=\"regulamento\"] > span:last-child",
      "mode": "text",
      "values": [
        "Regulamento"
      ]
    },
    "navHistory": {
      "selector": "[data-nav=\"historico\"] > span:last-child",
      "mode": "text",
      "values": [
        "Histórico"
      ]
    },
    "footerTagline": {
      "selector": ".site-footer__brand > p",
      "mode": "html",
      "values": [
        "Treze etapas. Duas Mesas. Um Reinado.<br>Uma comunidade que joga junto desde 2015."
      ]
    },
    "footerCredit": {
      "selector": ".site-footer__credit",
      "mode": "text",
      "values": [
        "Feito pelo Presida - Gapsar."
      ]
    },
    "footerLegalButtons": {
      "selector": ".site-footer__legal button",
      "mode": "text",
      "values": [
        "Privacidade",
        ""
      ]
    },
    "footerHeadings": {
      "selector": ".site-footer__nav h2",
      "mode": "text",
      "values": [
        "Navegue",
        "O Grupo",
        "Jogue com a gente"
      ]
    },
    "footerNavegue": {
      "selector": ".site-footer__nav > div:nth-child(1) a",
      "mode": "text",
      "values": [
        "Início",
        "Ranking",
        "Regulamento",
        "Histórico"
      ]
    },
    "footerCasa": {
      "selector": ".site-footer__nav > div:nth-child(2) a",
      "mode": "text",
      "values": [
        "Sobre o Grupo",
        "Loja",
        "Localização",
        "Contato"
      ]
    },
    "footerJogueLinks": {
      "selector": ".site-footer__nav > div:nth-child(3) a",
      "mode": "text",
      "values": [
        "Confirmar presença",
        "Reservar cadeira",
        "Calendário .ics"
      ]
    },
    "footerInstallButtons": {
      "selector": ".footer-install",
      "mode": "text",
      "values": [
        "Instalar o app",
        ""
      ]
    }
  },
  "home": {
    "heroEyebrow": {
      "selector": ".hero .eyebrow",
      "mode": "text",
      "values": [
        "Poker de Quinta · Desde 2015"
      ]
    },
    "heroTitle": {
      "selector": "#inicio-title",
      "mode": "html",
      "values": [
        "A quinta é nossa.<br>\n              <span class=\"text-gold\">As mesas também.</span>"
      ]
    },
    "heroLead": {
      "selector": ".hero__lead",
      "mode": "text",
      "values": [
        "Treze Etapas, Inúmeros Baralhoes e um Reinado. O Poker de Quinta é o ritual de toda Última Quinta do mês —  A melhor resenha do Poker que só a nossa turma tem."
      ]
    },
    "heroActions": {
      "selector": ".hero__actions .btn",
      "mode": "text",
      "values": [
        "Conhecer a próxima etapa",
        "Explorar a temporada"
      ]
    },
    "heroProof": {
      "selector": ".hero__proof p",
      "mode": "html",
      "values": [
        "<strong>Varios Baralhoes.</strong> Baralhoes que jogam juntos desde 2015."
      ]
    },
    "highlightsEyebrow": {
      "selector": "#page-inicio .highlights .eyebrow",
      "mode": "text",
      "values": [
        "Calendário 2027"
      ]
    },
    "highlightsTitle": {
      "selector": "#highlights-title",
      "mode": "text",
      "values": [
        "Cada etapa, uma história."
      ]
    },
    "highlightsDeck": {
      "selector": "#page-inicio .highlights .section-deck",
      "mode": "text",
      "values": [
        "Treze noites, treze atmosferas. Passeie pelos destaques e descubra o que preparamos para cada quinta."
      ]
    },
    "carouselHint": {
      "selector": "#page-inicio .carousel-hint",
      "mode": "text",
      "values": [
        "Deslize para navegar"
      ]
    },
    "nextEyebrow": {
      "selector": "#page-inicio .next-stage .eyebrow",
      "mode": "text",
      "values": [
        "Próxima Etapa"
      ]
    },
    "nextFactsLabels": {
      "selector": "#page-inicio .next-stage__facts dt",
      "mode": "text",
      "values": [
        "Onde",
        "Buy-in",
        "Horas"
      ]
    },
    "nextActions": {
      "selector": "#page-inicio .next-stage__actions .btn",
      "mode": "text",
      "values": [
        "Reservar minha vaga",
        "Salvar calendário"
      ]
    },
    "nextConfirm": {
      "selector": "#page-inicio .next-stage__confirm-link > span:nth-child(2)",
      "mode": "html",
      "values": [
        "<strong>Já é membro?</strong> Confirme sua presença na lista oficial"
      ]
    },
    "countdownEyebrow": {
      "selector": "#page-inicio .countdown-card__eyebrow",
      "mode": "text",
      "values": [
        "Faltam"
      ]
    },
    "countdownLabels": {
      "selector": "#page-inicio .countdown__unit span",
      "mode": "text",
      "values": [
        "dias",
        "horas",
        "min",
        "seg"
      ]
    },
    "countdownNote": {
      "selector": "#page-inicio .countdown-card__note",
      "mode": "text",
      "values": [
        "Apenas 20 Vagas. Confirme Sua Presença."
      ]
    },
    "statValues": {
      "selector": "#page-inicio .stat strong",
      "mode": "text",
      "values": [
        "13",
        "20",
        "R$ 120 30 60 50",
        "1"
      ]
    },
    "statLabels": {
      "selector": "#page-inicio .stat span",
      "mode": "text",
      "values": [
        "etapas na temporada",
        "jogadores por noite",
        "Buyin + Rebuy/Duplo + Addon",
        "Reinado em jogo"
      ]
    },
    "homeRankEyebrow": {
      "selector": "#page-inicio .home-ranking .eyebrow",
      "mode": "text",
      "values": [
        "A corrida pelo Reinado"
      ]
    },
    "homeRankTitle": {
      "selector": "#home-ranking-title",
      "mode": "text",
      "values": [
        "Quem está na frente?"
      ]
    },
    "homeRankDeck": {
      "selector": "#page-inicio .home-ranking .section-deck",
      "mode": "text",
      "values": [
        "Após oito etapas, a diferença no topo é de apenas 30 pontos. A temporada está longe de acabar."
      ]
    },
    "homeRankLink": {
      "selector": "#page-inicio .home-ranking .text-link",
      "mode": "text",
      "values": [
        "Ver ranking completo"
      ]
    },
    "experienceEyebrow": {
      "selector": "#page-inicio .experience .eyebrow",
      "mode": "text",
      "values": [
        "O ritual da casa"
      ]
    },
    "experienceTitle": {
      "selector": "#experience-title",
      "mode": "text",
      "values": [
        "Não é só poker. É quinta."
      ]
    },
    "featureTitles": {
      "selector": "#page-inicio .feature-card h3",
      "mode": "text",
      "values": [
        "Estrutura de torneio",
        "Mesa com história",
        "Ranking de verdade"
      ]
    },
    "featureTexts": {
      "selector": "#page-inicio .feature-card p",
      "mode": "text",
      "values": [
        "30.000 fichas iniciais, níveis de 20 minutos e uma mesa que recompensa decisão — não sorte.",
        "Uma casa, uma mesa e gente que joga junto há anos. Aqui todo mundo sabe o seu nome — e o seu estilo.",
        "Pontos, desempates e uma final entre os oito melhores. O título da temporada é conquistado, não sorteado."
      ]
    },
    "ctaEyebrow": {
      "selector": "#page-inicio .cta-banner .eyebrow",
      "mode": "text",
      "values": [
        "Temporada 2027"
      ]
    },
    "ctaTitle": {
      "selector": "#page-inicio #cta-title",
      "mode": "text",
      "values": [
        "Sua cadeira está esperando."
      ]
    },
    "ctaText": {
      "selector": "#page-inicio .cta-banner__content > p",
      "mode": "text",
      "values": [
        "Temporada 2027",
        "São 20 vagas por noite. Garanta a sua."
      ]
    },
    "ctaActions": {
      "selector": "#page-inicio .cta-banner__actions .btn",
      "mode": "text",
      "values": [
        "Reservar pelo WhatsApp",
        "Ler o regulamento"
      ]
    }
  },
  "ranking": {
    "eyebrow": {
      "selector": "#page-ranking .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Temporada 2027 · classificação geral"
      ]
    },
    "title": {
      "selector": "#ranking-title",
      "mode": "html",
      "values": [
        "Ranking <span class=\"text-gold\">2027</span>"
      ]
    },
    "deck": {
      "selector": "#page-ranking .page-deck",
      "mode": "text",
      "values": [
        "Cada mesa final vale pontos. Cada etapa muda a história. Acompanhe a disputa pelo título da temporada."
      ]
    },
    "searchPlaceholder": {
      "selector": "#ranking-search",
      "mode": "placeholder",
      "values": [
        "Buscar jogador ou cidade"
      ]
    },
    "sortLabel": {
      "selector": "#page-ranking .select-field span",
      "mode": "text",
      "values": [
        "Ordenar por"
      ]
    },
    "top8": {
      "selector": "#ranking-filter",
      "mode": "text",
      "values": [
        "Top 8"
      ]
    },
    "infoTitles": {
      "selector": "#page-ranking .info-card h3",
      "mode": "text",
      "values": [
        "Como pontuar",
        "A grande final",
        "Critérios de desempate"
      ]
    },
    "infoTexts": {
      "selector": "#page-ranking .info-card p",
      "mode": "text",
      "values": [
        "Só a posição final importa. O campeão leva 650 pontos; a mesa final pontua de 120 a 440. Todo jogador presente soma ao menos 30.",
        "Os oito primeiros colocados ao fim das 12 etapas disputam a Grande Final, em 20 de dezembro, com prize pool ampliado.",
        "Em caso de igualdade: mais vitórias, mais mesas finais e, por último, melhor colocação na etapa mais recente."
      ]
    },
    "infoLinks": {
      "selector": "#page-ranking .info-card .text-link",
      "mode": "text",
      "values": [
        "Ver tabela completa",
        "Ver calendário",
        "Ler critérios"
      ]
    },
    "hallEyebrow": {
      "selector": "#page-ranking .hall .eyebrow",
      "mode": "text",
      "values": [
        "Hall da fama"
      ]
    },
    "hallTitle": {
      "selector": "#hall-title",
      "mode": "text",
      "values": [
        "Os nomes na parede."
      ]
    },
    "hallDeck": {
      "selector": "#page-ranking .hall .section-deck",
      "mode": "text",
      "values": [
        "Toda temporada termina com um nome. Estes são os campeões que já levantaram o troféu da casa."
      ]
    }
  },
  "regulation": {
    "eyebrow": {
      "selector": "#page-regulamento .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Temporada 2027 · regras oficiais"
      ]
    },
    "title": {
      "selector": "#regulamento-title",
      "mode": "html",
      "values": [
        "Regras claras.<br><span class=\"text-gold\">Jogo limpo.</span>"
      ]
    },
    "deck": {
      "selector": "#page-regulamento .page-deck",
      "mode": "text",
      "values": [
        "Tudo o que você precisa saber para jogar, pontuar e chegar à Grande Final. Sem letras miúdas — só o combinado."
      ]
    },
    "downloadButton": {
      "selector": "#page-regulamento .rules-download .btn",
      "mode": "text",
      "values": [
        "Baixar regulamento"
      ]
    },
    "downloadNote": {
      "selector": "#page-regulamento .rules-download > span",
      "mode": "text",
      "values": [
        "PDF · 6 seções · atualizado em out/2026"
      ]
    },
    "quickLabels": {
      "selector": "#page-regulamento .quick-fact__label",
      "mode": "text",
      "values": [
        "Modalidade",
        "Stack inicial",
        "Buy-in",
        "Garantido"
      ]
    },
    "quickValues": {
      "selector": "#page-regulamento .quick-fact strong",
      "mode": "text",
      "values": [
        "NL Hold'em",
        "30.000",
        "R$ 650",
        "R$ 10.000"
      ]
    },
    "quickNotes": {
      "selector": "#page-regulamento .quick-fact > span:last-child",
      "mode": "text",
      "values": [
        "Torneio individual",
        "Níveis de 20 min",
        "R$ 600 + R$ 50 taxa",
        "Por etapa"
      ]
    },
    "asideTitle": {
      "selector": "#page-regulamento .rules-aside__card h2",
      "mode": "text",
      "values": [
        "Leve as regras com você"
      ]
    },
    "asideText": {
      "selector": "#page-regulamento .rules-aside__card p",
      "mode": "text",
      "values": [
        "Baixe o regulamento completo em PDF ou adicione todas as etapas ao seu calendário."
      ]
    },
    "asideButtons": {
      "selector": "#page-regulamento .rules-aside__card .btn",
      "mode": "text",
      "values": [
        "Baixar PDF",
        "Baixar calendário .ics"
      ]
    },
    "helpTitle": {
      "selector": "#page-regulamento .rules-aside__help h3",
      "mode": "text",
      "values": [
        "Ficou com dúvida?"
      ]
    },
    "helpText": {
      "selector": "#page-regulamento .rules-aside__help p",
      "mode": "text",
      "values": [
        "Fale com a organização antes da etapa. A casa responde em até 24h."
      ]
    },
    "helpLink": {
      "selector": "#page-regulamento .rules-aside__help .text-link",
      "mode": "text",
      "values": [
        "Falar com a organização"
      ]
    },
    "ruleTitles": {
      "selector": "#page-regulamento .rule__title",
      "mode": "html",
      "values": [
        "O torneio <small>Formato, estrutura e inscrições</small>",
        "Pontuação e ranking <small>Como a temporada é decidida</small>",
        "Premiação <small>O que está em jogo</small>",
        "Conduta na mesa <small>Etiqueta, fair play e decisões</small>",
        "Lista de espera e convidados <small>Como participar</small>",
        "Privacidade e imagem <small>Seus dados e a casa</small>"
      ]
    },
    "ruleBodies": {
      "selector": "#page-regulamento .rule__body",
      "mode": "html",
      "values": [
        "<p>O Poker de Quinta é um torneio individual de No Limit Texas Hold'em, destinado a maiores de 18 anos, com 20 cadeiras por etapa. A temporada 2027 tem 13 etapas e uma Grande Final entre os oito melhores do ranking.</p>\n                <ul class=\"rule-list\">\n                  <li><strong>Stack inicial:</strong> 30.000 fichas, sem add-on.</li>\n                  <li><strong>Blinds:</strong> níveis de 20 minutos; big blind ante a partir do nível 4.</li>\n                  <li><strong>Inscrições:</strong> confirmação pelo WhatsApp. O check-in fecha às 20h15; cadeiras não confirmadas até esse horário vão para a lista de espera.</li>\n                  <li><strong>Entrada única:</strong> não há re-entry. Em caso de desistência antes da primeira mão, a vaga é oferecida à lista de espera.</li>\n                  <li><strong>Start:</strong> 20h, com portas abertas a partir das 19h.</li>\n                </ul>\n                <div class=\"rule-callout\">\n                  <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-info\"></use></svg>\n                  <p>A casa pode ajustar a estrutura em caso de atraso excepcional, sempre informando os jogadores antes do início da primeira mão.</p>\n                </div>",
        "<p>Os pontos são atribuídos pela posição final de cada etapa, independentemente do número de participantes. Todas as primeiras 12 etapas contam para o ranking.</p>\n                <div class=\"table-wrap\">\n                  <table class=\"points-table\">\n                    <caption>Pontuação por colocação</caption>\n                    <thead><tr><th>Colocação</th><th>Pontos</th><th>Colocação</th><th>Pontos</th></tr></thead>\n                    <tbody id=\"rules-points-body\"><tr>\n        <td>1º</td><td>650 pts</td>\n        <td>9º</td><td>100 pts</td>\n      </tr><tr>\n        <td>2º</td><td>440 pts</td>\n        <td>10º</td><td>80 pts</td>\n      </tr><tr>\n        <td>3º</td><td>330 pts</td>\n        <td>11º</td><td>65 pts</td>\n      </tr><tr>\n        <td>4º</td><td>260 pts</td>\n        <td>12º</td><td>50 pts</td>\n      </tr><tr>\n        <td>5º</td><td>210 pts</td>\n        <td>13º</td><td>30 pts</td>\n      </tr><tr>\n        <td>6º</td><td>170 pts</td>\n        <td>14º</td><td>30 pts</td>\n      </tr><tr>\n        <td>7º</td><td>140 pts</td>\n        <td>15º</td><td>30 pts</td>\n      </tr><tr>\n        <td>8º</td><td>120 pts</td>\n        <td>20º</td><td>30 pts</td>\n      </tr></tbody>\n                  </table>\n                </div>\n                <p><strong>Desempate:</strong> em caso de igualdade na pontuação, vence quem tiver mais vitórias; depois, mais mesas finais; por último, a melhor colocação na etapa mais recente disputada.</p>\n                <p><strong>Grande Final:</strong> os oito primeiros do ranking ao término da Etapa 11 disputam a final. Se um classificado não puder jogar, a vaga passa ao nono colocado, e assim por diante.</p>",
        "<p>Cada etapa tem o dinheiro arreacadado e, distribuídos entre os cinco primeiros colocados. A premiação da Grande Final é ampliada e anunciada antes da etapa decisiva.</p>\n                <div class=\"table-wrap\">\n                  <table class=\"points-table points-table--prize\">\n                    <caption>Distribuição da premiação por etapa</caption>\n                    <thead><tr><th>Colocação</th><th>% do prize pool</th><th>Prêmio estimado</th></tr></thead>\n                    <tbody>\n                      <tr><td>1º</td><td>30%</td><td>R$ 3.000</td></tr>\n                      <tr><td>2º</td><td>20%</td><td>R$ 2.000</td></tr>\n                      <tr><td>3º</td><td>14%</td><td>R$ 1.400</td></tr>\n                      <tr><td>4º</td><td>10%</td><td>R$ 1.000</td></tr>\n                      <tr><td>5º</td><td>8%</td><td>R$ 800</td></tr>\n                      <tr><td>6º</td><td>7%</td><td>R$ 700</td></tr>\n                      <tr><td>7º</td><td>6%</td><td>R$ 600</td></tr>\n                      <tr><td>8º</td><td>5%</td><td>R$ 500</td></tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"rule-callout rule-callout--gold\">\n                  <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-trophy\"></use></svg>\n                  <p>O campeão da temporada recebe o troféu, a faixa da casa e vaga garantida na Temporada 2028.</p>\n                </div>",
        "<p>O Poker de Quinta é uma de jogo entre amigos. Respeito é regra, não diferencial. A organização espera de todos a mesma postura que se espera à mesa.</p>\n                <ul class=\"rule-list\">\n                  <li>É proibido soft play, combinação de resultados, chip dumping ou qualquer forma de conluio.</li>\n                  <li>String bets e ações fora de turno recebem advertência. Reincidência pode gerar penalidade de uma órbita.</li>\n                  <li>Celulares devem ficar fora da mesa durante a mão. Não é permitido filmar ou fotografar cartas em jogo.</li>\n                  <li>“Tanking” excessivo, discussão de mão em andamento e comportamento desrespeitoso estão sujeitos a penalidade.</li>\n                  <li>A decisão final e irrecorrível é do floor da casa. O floor nunca joga na mesma mesa em que toma decisões.</li>\n                  <li>É proibido jogar sob efeito de álcool em excesso ou qualquer substância que comprometa o jogo. A casa pode vetar a entrada.</li>\n                </ul>\n                <p>Penalidades possíveis: advertência verbal, penalidade de órbita, redução de stack, desclassificação sem devolução do buy-in e, em casos graves, suspensão da temporada.</p>",
        "<p>As Inscriçoes são limitadas a 20 lugares por noite. A reserva é feita antecipadamente pelo site oficial do Poker de Quinta e confirmada pela organização. Jogadores membros têm prioridade na reserva até 72h antes de cada etapa.</p>\n                <ul class=\"rule-list\">\n                  <li><strong>Lista de espera:</strong> se a etapa estiver cheia, o jogador entra na lista e é chamado em ordem, na presença física, até o fim do nível 3.</li>\n                  <li><strong>Convidados:</strong> cada membro pode indicar um convidado por etapa. A indicação precisa ser confirmada pela organização.</li>\n                  <li><strong>Cancelamento:</strong> avise com ao menos 24h de antecedência para liberar a vaga. Faltas sem aviso podem impactar a prioridade na etapa seguinte.</li>\n                  <li><strong>Menores de 18 anos:</strong> não é permitida a participação, mesmo acompanhados.</li>\n                </ul>",
        "<p>Os dados informados no cadastro e na lista de presença são usados apenas para organização do torneio, comunicação de etapas e gestão do ranking. Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.</p>\n                <p>Fotos e vídeos do evento podem ser publicados nas redes da casa. Ao frequentar o evento, o participante autoriza o uso de sua imagem em conteúdo editorial não publicitário. Para solicitar remoção, fale com a organização.</p>\n                <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pelo e-mail <a href=\"mailto:contato@pokerdequinta.com.br\">contato@pokerdequinta.com.br</a>.</p>"
      ]
    },
    "updated": {
      "selector": "#page-regulamento .rules-updated",
      "mode": "text",
      "values": [
        "Última atualização: 30 de outubro de 2026 · Versão 1.0"
      ]
    }
  },
  "history": {
    "eyebrow": {
      "selector": "#page-historico .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Memória da casa"
      ]
    },
    "title": {
      "selector": "#historico-title",
      "mode": "html",
      "values": [
        "Histórico das <span class=\"text-gold\">etapas.</span>"
      ]
    },
    "deck": {
      "selector": "#page-historico .page-deck",
      "mode": "text",
      "values": [
        "Cada etapa deixa uma mesa final, um campeão e uma história. Revisite a temporada atual ou abra o arquivo das temporadas anteriores."
      ]
    },
    "tabs": {
      "selector": "#page-historico .season-tab",
      "mode": "text",
      "values": [
        "Temporada 2027",
        "2026",
        "2025",
        "2024"
      ]
    },
    "filters": {
      "selector": "#page-historico [data-history-filter]",
      "mode": "text",
      "values": [
        "Todas",
        "Concluídas",
        "Próximas"
      ]
    }
  },
  "confirmation": {
    "eyebrow": {
      "selector": "#page-confirmar .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Presença · sistema oficial"
      ]
    },
    "title": {
      "selector": "#confirmar-title",
      "mode": "html",
      "values": [
        "Confirme sua <span class=\"text-gold\">presença.</span>"
      ]
    },
    "deck": {
      "selector": "#page-confirmar .page-deck",
      "mode": "text",
      "values": [
        "A lista oficial da próxima etapa é gerenciada no Firebase. Confirme somente se puder comparecer e acompanhe as vagas em tempo real."
      ]
    },
    "systemLabel": {
      "selector": "#page-confirmar .confirm-system-pill span:last-child",
      "mode": "text",
      "values": [
        "Firebase · sistema da casa"
      ]
    },
    "topButton": {
      "selector": "#confirm-open-top",
      "mode": "text",
      "values": [
        "Confirmar agora"
      ]
    },
    "factLabels": {
      "selector": "#page-confirmar .confirm-facts dt",
      "mode": "text",
      "values": [
        "Abertura das inscrições",
        "Onde confirmar",
        "Origem dos dados"
      ]
    },
    "factStatic": {
      "selector": "#page-confirmar .confirm-facts div:nth-child(2) dd, #page-confirmar .confirm-facts div:nth-child(3) dd",
      "mode": "text",
      "values": [
        "Lista oficial da casa",
        "Firebase Realtime Database"
      ]
    },
    "actions": {
      "selector": "#page-confirmar .confirm-actions .btn",
      "mode": "text",
      "values": [
        "Confirmar no sistema oficial",
        "Falar com a organização"
      ]
    },
    "note": {
      "selector": "#page-confirmar .confirm-note",
      "mode": "text",
      "values": [
        "A confirmação é registrada diretamente na lista oficial da casa. Se a etapa estiver cheia, o sistema encaminha para a lista de espera."
      ]
    },
    "embedLabel": {
      "selector": "#page-confirmar .confirm-embed__live span:last-child",
      "mode": "text",
      "values": [
        "Lista oficial de presença"
      ]
    },
    "embedLink": {
      "selector": "#page-confirmar .confirm-embed__bar .text-link",
      "mode": "text",
      "values": [
        "Abrir em nova aba"
      ]
    },
    "offlineTitle": {
      "selector": "#page-confirmar .confirm-offline h2",
      "mode": "text",
      "values": [
        "Confirmação indisponível offline"
      ]
    },
    "offlineText": {
      "selector": "#page-confirmar .confirm-offline p",
      "mode": "text",
      "values": [
        "A lista oficial precisa de conexão com a internet. Reconecte e recarregue a página para confirmar sua presença."
      ]
    },
    "offlineButton": {
      "selector": "#page-confirmar .confirm-offline .btn",
      "mode": "text",
      "values": [
        "Abrir quando estiver online"
      ]
    },
    "helpTitles": {
      "selector": "#page-confirmar .confirm-help h2",
      "mode": "text",
      "values": [
        "Confirme só se puder ir",
        "Lista de espera",
        "Tudo em um só lugar"
      ]
    },
    "helpTexts": {
      "selector": "#page-confirmar .confirm-help p",
      "mode": "text",
      "values": [
        "A vaga é limitada. Se surgir um imprevisto, cancele pelo WhatsApp para liberar sua cadeira para a lista de espera.",
        "Quando as vagas acabam, novas confirmações entram na lista de espera. Membros têm prioridade sobre convidados.",
        "O sistema oficial registra confirmados, espera, cancelamentos e a etapa vigente no Firebase do Poker de Quinta."
      ]
    }
  },
  "shop": {
    "eyebrow": {
      "selector": "#page-loja .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Objetos da casa"
      ]
    },
    "title": {
      "selector": "#loja-title",
      "mode": "html",
      "values": [
        "Loja <span class=\"text-gold\">Poker de Quinta.</span>"
      ]
    },
    "deck": {
      "selector": "#page-loja .page-deck",
      "mode": "text",
      "values": [
        "Peças feitas para quem entende que a quinta começa muito antes do primeiro shuffle. Produção limitada, identidade da temporada."
      ]
    },
    "storeNote": {
      "selector": "#page-loja .store-note > span",
      "mode": "html",
      "values": [
        "<strong>Frete grátis</strong> em pedidos acima de R$ 250"
      ]
    },
    "perks": {
      "selector": "#page-loja .store-perks div span",
      "mode": "text",
      "values": [
        "Envio para todo o Brasil",
        "Retirada gratuita na casa",
        "Peças numeradas e limitadas"
      ]
    },
    "filters": {
      "selector": "#page-loja .shop-filters .filter-chip",
      "mode": "text",
      "values": [
        "Todos",
        "Vestuário",
        "Acessórios",
        "Casa"
      ]
    },
    "stepsEyebrow": {
      "selector": "#page-loja .store-steps .eyebrow",
      "mode": "text",
      "values": [
        "Como funciona"
      ]
    },
    "stepsTitle": {
      "selector": "#store-steps-title",
      "mode": "text",
      "values": [
        "Da sacola para a sua casa."
      ]
    },
    "stepTitles": {
      "selector": "#page-loja .step-card h3",
      "mode": "text",
      "values": [
        "Escolha suas peças",
        "Finalize no WhatsApp",
        "Receba ou retire"
      ]
    },
    "stepTexts": {
      "selector": "#page-loja .step-card p",
      "mode": "text",
      "values": [
        "Adicione os produtos à sacola e revise o pedido no painel lateral.",
        "Envie o resumo para a organização. Confirmamos disponibilidade, frete e pagamento.",
        "Enviamos para todo o Brasil ou separamos para retirada na Luck Bar."
      ]
    }
  },
  "location": {
    "eyebrow": {
      "selector": "#page-localizacao .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "A casa"
      ]
    },
    "title": {
      "selector": "#localizacao-title",
      "mode": "html",
      "values": [
        "Onde a quinta <span class=\"text-gold\">acontece.</span>"
      ]
    },
    "deck": {
      "selector": "#page-localizacao .page-deck",
      "mode": "text",
      "values": [
        "Uma casa escondida na Vila Madalena, uma mesa no centro de tudo. Chegue cedo, pegue sua cadeira e fique à vontade."
      ]
    },
    "mapLabel": {
      "selector": "#page-localizacao .map-card__label",
      "mode": "text",
      "values": [
        "MAPA ILUSTRATIVO"
      ]
    },
    "mapLink": {
      "selector": "#page-localizacao .map-card__link",
      "mode": "text",
      "values": [
        "Abrir no Google Maps"
      ]
    },
    "mapEyebrow": {
      "selector": "#page-localizacao .map-card__eyebrow",
      "mode": "text",
      "values": [
        "Endereço"
      ]
    },
    "mapAddress": {
      "selector": "#page-localizacao .map-card__footer strong",
      "mode": "text",
      "values": [
        "Rua Prof Sebastião Paraná 765 - Vila Izabel - Curitiba PR"
      ]
    },
    "mapCity": {
      "selector": "#page-localizacao .map-card__footer span:last-child",
      "mode": "text",
      "values": [
        "Curitiba — PR · CEP 80320-070"
      ]
    },
    "cardTitles": {
      "selector": "#page-localizacao .location-card h2",
      "mode": "text",
      "values": [
        "Horários",
        "Como chegar",
        "",
        "Vista-se para a casa"
      ]
    },
    "cardTexts": {
      "selector": "#page-localizacao .location-card p",
      "mode": "text",
      "values": [
        "Chegue cedo, garanta seu Bonus e venha para resenha jogar uma locurinha ou uma aposta de corrida de cavalo. O torneio começa impreterivelmente às 20h.",
        "Tem vaga na frente do Luck, se chegar cedo.",
        "Apresente seu ticket ao delaer antes das 20h e ganhe 3K de Bonus.",
        "Não esqueca de pagar sua conta no Luck."
      ]
    },
    "ctaEyebrow": {
      "selector": "#page-localizacao .location-cta .eyebrow",
      "mode": "text",
      "values": [
        "A próxima quinta é logo ali"
      ]
    },
    "ctaTitle": {
      "selector": "#page-localizacao .location-cta h2",
      "mode": "text",
      "values": [
        "Reserve sua cadeira antes que a mesa encha."
      ]
    },
    "ctaButton": {
      "selector": "#page-localizacao .location-cta .btn",
      "mode": "text",
      "values": [
        "Fale com o Presida"
      ]
    }
  },
  "about": {
    "eyebrow": {
      "selector": "#page-sobre .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Desde 2015"
      ]
    },
    "title": {
      "selector": "#sobre-title",
      "mode": "html",
      "values": [
        "Um Home Game construído<br><span class=\"text-gold\">em volta de uma mesa.</span>"
      ]
    },
    "deck": {
      "selector": "#page-sobre .page-deck",
      "mode": "text",
      "values": [
        "O Poker de Quinta nasceu de um grupo de amigos que queria tomar uma cerveja e dar uma baralhada sem perder a leveza. 11 anos depois, virou tradição."
      ]
    },
    "paragraphs": {
      "selector": "#page-sobre .about-copy p",
      "mode": "text",
      "values": [
        "A gente acredita que poker é, antes de tudo, um encontro. É a pausa da semana, o olhar atravessado, a piada que só quem estava na mesa entende.",
        "Em 2015, éramos cinco pessoas, fichas do paraguai e um baralho que já tinha visto dias melhores. A regra era simples: jogar com respeito, sem pressa e com vontade de voltar na semana seguinte. O nome veio fácil — a quinta era o único dia em que todo mundo conseguia.",
        "Hoje nosso home game tem 20 cadeiras, um ranking oficial, uma temporada inteira e uma comunidade que cresceu junto. Mas a essência não mudou: uma noite por mês, duas mesas, e a certeza de que o importante é jogar bem — e receber melhor."
      ]
    },
    "caption": {
      "selector": "#page-sobre .about-visual__caption",
      "mode": "text",
      "values": [
        "“Toda Última quinta tem uma nova história.”"
      ]
    },
    "statValues": {
      "selector": "#page-sobre .stat-strip--about .stat strong",
      "mode": "text",
      "values": [
        "08",
        "96",
        "20",
        "4"
      ]
    },
    "statLabels": {
      "selector": "#page-sobre .stat-strip--about .stat span",
      "mode": "text",
      "values": [
        "anos de casa",
        "etapas disputadas",
        "cadeiras por noite",
        "campeões de temporada"
      ]
    },
    "valuesEyebrow": {
      "selector": "#page-sobre .values .eyebrow",
      "mode": "text",
      "values": [
        "O que nos move"
      ]
    },
    "valuesTitle": {
      "selector": "#values-title",
      "mode": "text",
      "values": [
        "Nossas regras não estão só no papel."
      ]
    },
    "valueTitles": {
      "selector": "#page-sobre .value-card h3",
      "mode": "text",
      "values": [
        "Respeito à mesa",
        "Jogo limpo",
        "Pertencimento"
      ]
    },
    "valueTexts": {
      "selector": "#page-sobre .value-card p",
      "mode": "text",
      "values": [
        "Sem arrogância, sem clima pesado. A rivalidade fica nas fichas e termina no abraço depois do showdown.",
        "Regras claras, O Dealer decide e tolerância zero a conluio. Aqui, vencer sem integridade não é vencer.",
        "Uma cadeira é um convite para fazer parte. O nosso home game cresce devagar, de propósito, para continuar sendo casa de todos."
      ]
    },
    "timelineEyebrow": {
      "selector": "#page-sobre .about-timeline .eyebrow",
      "mode": "text",
      "values": [
        "Linha do tempo"
      ]
    },
    "timelineTitle": {
      "selector": "#about-timeline-title",
      "mode": "text",
      "values": [
        "A casa, ano a ano."
      ]
    },
    "milestoneTitles": {
      "selector": "#page-sobre .milestones h3",
      "mode": "text",
      "values": [
        "A primeira mesa",
        "A primeira temporada",
        "Casa cheia",
        "A nova era"
      ]
    },
    "milestoneTexts": {
      "selector": "#page-sobre .milestones p",
      "mode": "text",
      "values": [
        "Cinco amigos, uma mesa de sinuca e a primeira quinta oficial. O nome nasceu antes das regras.",
        "O ranking ganhou forma, as etapas viraram calendário e o Tatu passou a ser nossa casa",
        "A temporada mais disputada até então consagrou Robson como o mais baralhao de todos.",
       
      ]
    },
    "ctaEyebrow": {
      "selector": "#page-sobre .cta-banner--simple .eyebrow",
      "mode": "text",
      "values": [
        "Faça parte"
      ]
    },
    "ctaTitle": {
      "selector": "#about-cta-title",
      "mode": "text",
      "values": [
        "A próxima cadeira pode ser sua."
      ]
    },
    "ctaText": {
      "selector": "#page-sobre .cta-banner--simple .cta-banner__content > p",
      "mode": "text",
      "values": [
        "Faça parte",
        "A Nossa turma abre as portas toda Ultima quinta do mês. Se você joga com respeito e vontade, já tem lugar."
      ]
    },
    "ctaActions": {
      "selector": "#page-sobre .cta-banner--simple .cta-banner__actions .btn",
      "mode": "text",
      "values": [
        "Quero jogar",
        "Falar com o Presida"
      ]
    }
  },
  "contact": {
    "eyebrow": {
      "selector": "#page-contato .page-heading .eyebrow",
      "mode": "text",
      "values": [
        "Fale com o Presida"
      ]
    },
    "title": {
      "selector": "#contato-title",
      "mode": "html",
      "values": [
        "A mesa está aberta.<br><span class=\"text-gold\">A conversa também.</span>"
      ]
    },
    "deck": {
      "selector": "#page-contato .page-deck",
      "mode": "text",
      "values": [
        , dúvidas, patrocínios ou só um oi. Escolha o canal e a gente responde."
      ]
    },
    "formEyebrow": {
      "selector": "#page-contato .contact-card .eyebrow",
      "mode": "text",
      "values": [
        "Envie uma mensagem"
      ]
    },
    "formTitle": {
      "selector": "#page-contato .contact-card h2",
      "mode": "text",
      "values": [
        "Vamos conversar?"
      ]
    },
    "labels": {
      "selector": "#page-contato .contact-form .field > label",
      "mode": "text",
      "values": [
        "Seu nome",
        "E-mail",
        "Assunto",
        "Mensagem"
      ]
    },
    "placeholders": {
      "selector": "#contact-name, #contact-email, #contact-message",
      "mode": "placeholder",
      "values": [
        "Como podemos te chamar seu Baralhão?",
        "voce@email.com",
        "Conte um pouco mais..."
      ]
    },
    "options": {
      "selector": "#contact-subject option",
      "mode": "text",
      "values": [
        "Selecione um assunto",
        "Reserva para a próxima etapa",
        "Dúvidas sobre o regulamento",
        "Pedido da loja",
        "Patrocínio e parcerias",
        "Imprensa",
        "Outro assunto"
      ]
    },
    "consent": {
      "selector": "#page-contato .checkbox-field__main > span:last-child",
      "mode": "text",
      "values": [
        "Li e concordo em ser contatado pela organização."
      ]
    },
    "policy": {
      "selector": "#page-contato .checkbox-field__policy",
      "mode": "text",
      "values": [
        "Política de privacidade"
      ]
    },
    "submit": {
      "selector": "#page-contato .contact-form button[type=submit]",
      "mode": "text",
      "values": [
        "Enviar pelo WhatsApp"
      ]
    },
    "note": {
      "selector": "#page-contato .form-note",
      "mode": "text",
      "values": [
        "Ao enviar, abriremos o WhatsApp da casa com sua mensagem preenchida."
      ]
    },
    "channelLabels": {
      "selector": "#page-contato .contact-channel span",
      "mode": "text",
      "values": [
        "",
        "WhatsApp",
        "",
        "E-mail",
        "",
        "Instagram"
      ]
    },
    "channelValues": {
      "selector": "#page-contato .contact-channel strong",
      "mode": "text",
      "values": [
        "(41) 98721-0685",
        "contato@pokerdequinta.com.br",
        "@pokerdequinta"
      ]
    },
    "channelNotes": {
      "selector": "#page-contato .contact-channel small",
      "mode": "text",
      "values": [
        "Resposta em até 24h",
        "Para assuntos oficiais",
        "Bastidores e avisos de etapa"
      ]
    },
    "locationLabel": {
      "selector": "#page-contato .contact-location__label",
      "mode": "text",
      "values": [
        "A casa"
      ]
    },
    "locationName": {
      "selector": "#page-contato .contact-location strong",
      "mode": "text",
      "values": [
        "Luck Bar"
      ]
    },
    "locationText": {
      "selector": "#page-contato .contact-location p",
      "mode": "text",
      "values": [
        "Rua Prof Sebastião Paraná 765 - Vilza Izabel - Curitiba PR"
      ]
    },
    "locationLink": {
      "selector": "#page-contato .contact-location .text-link",
      "mode": "text",
      "values": [
        "Ver no mapa"
      ]
    },
    "faqEyebrow": {
      "selector": "#page-contato .faq .eyebrow",
      "mode": "text",
      "values": [
        "Perguntas frequentes"
      ]
    },
    "faqTitle": {
      "selector": "#faq-title",
      "mode": "text",
      "values": [
        "Antes de sentar à mesa."
      ]
    },
    "faqQuestions": {
      "selector": "#page-contato .faq-item summary",
      "mode": "text",
      "values": [
        "Preciso saber jogar poker para participar?",
        "Como faço para reservar uma cadeira?",
        "Posso levar um convidado?",
        "O que está incluso no buy-in?"
      ]
    },
    "faqAnswers": {
      "selector": "#page-contato .faq-item p",
      "mode": "text",
      "values": [
        "Não. A casa recebe jogadores de todos os níveis, do iniciante ao experiente. O importante é conhecer as regras básicas e jogar com respeito. Antes da primeira mão, a organização faz um rápido alinhamento de etiqueta.",
        "Envie uma mensagem pelo WhatsApp. A organização confirma a disponibilidade e registra seu nome. A cadeira fica garantida até as 20h15; depois disso, pode ser liberada para a lista de espera.",
        "Sim. Cada membro pode indicar um convidado por etapa, desde que haja vaga. A indicação precisa ser confirmada pela organização antes da noite do jogo.",
        "O buy-in de R$ 650 inclui R$ 600 para o prize pool e R$ 50 de taxa da casa. Água, café e o drink de boas-vindas estão inclusos. A premiação garante R$ 10.000 por etapa."
      ]
    }
  },
  "menu": {
    "drawerLabels": {
      "selector": ".drawer--menu .drawer__label",
      "mode": "text",
      "values": [
        "Sua cadeira",
        "Atalhos"
      ]
    },
    "menuNames": {
      "selector": ".menu-list a > span",
      "mode": "text",
      "values": [
        "Confirmar presença",
        "Loja",
        "Localização",
        "Sobre o clube",
        "Contato"
      ]
    },
    "menuDescriptions": {
      "selector": ".menu-list a small",
      "mode": "text",
      "values": [
        "Lista oficial da próxima etapa",
        "Objetos da casa",
        "Como chegar",
        "Nossa história",
        "Fale com a organização"
      ]
    },
    "shortcuts": {
      "selector": ".drawer-shortcuts a",
      "mode": "text",
      "values": [
        "Ranking",
        "Regulamento",
        "Histórico"
      ]
    },
    "installTitle": {
      "selector": ".install-card strong",
      "mode": "text",
      "values": [
        "Instalar o Poker de Quinta"
      ]
    },
    "installText": {
      "selector": ".install-card small",
      "mode": "text",
      "values": [
        "Acesso rápido, direto da tela inicial."
      ]
    },
    "nextEyebrow": {
      "selector": ".drawer-next__eyebrow",
      "mode": "text",
      "values": [
        "Próxima etapa"
      ]
    },
    "social": {
      "selector": ".drawer__social a",
      "mode": "text",
      "values": [
        "Instagram",
        "WhatsApp",
        "E-mail"
      ]
    },
    "legal": {
      "selector": ".drawer__legal",
      "mode": "text",
      "values": [
        "© 2027 Poker de Quinta · +18 · Jogue com responsabilidade."
      ]
    }
  },
  "cart": {
    "eyebrow": {
      "selector": ".drawer--cart .eyebrow",
      "mode": "text",
      "values": [
        "Sua sacola"
      ]
    },
    "title": {
      "selector": "#cart-title",
      "mode": "text",
      "values": [
        "Pedido da casa"
      ]
    },
    "emptyTitle": {
      "selector": ".cart-empty h3",
      "mode": "text",
      "values": [
        "Sua sacola está vazia"
      ]
    },
    "emptyText": {
      "selector": ".cart-empty p",
      "mode": "text",
      "values": [
        "Escolha uma peça da casa para começar."
      ]
    },
    "emptyLink": {
      "selector": ".cart-empty .btn",
      "mode": "text",
      "values": [
        "Ir para a loja"
      ]
    },
    "subtotalLabel": {
      "selector": ".cart-subtotal span",
      "mode": "text",
      "values": [
        "Subtotal"
      ]
    },
    "note": {
      "selector": ".cart-note",
      "mode": "text",
      "values": [
        "Frete e disponibilidade confirmados no atendimento. Retirada gratuita na Luck Bar."
      ]
    },
    "checkout": {
      "selector": "#cart-checkout",
      "mode": "text",
      "values": [
        "Finalizar no WhatsApp"
      ]
    },
    "continue": {
      "selector": ".cart-continue",
      "mode": "text",
      "values": [
        "Continuar comprando"
      ]
    }
  }
};
