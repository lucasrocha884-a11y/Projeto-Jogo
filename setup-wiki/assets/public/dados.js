const WIKI_DATA = {

  home: {
    pageTitle: "The Sinister Factory Wiki",
    welcome: {
      title: "Bem-vindo à The Sinister Factory Wiki",
      description: "Um compêndio de conhecimento sobre o universo obscuro de horror cósmico, entidades anômalas e os segredos ocultos que espreitam nas sombras da realidade."
    },
    about: {
      title: "Sobre esta Wiki",
      content: "Esta enciclopédia documenta os eventos, personagens e fenômenos relacionados ao universo de The Sinister Factory. Aqui você encontrará informações detalhadas sobre o Culto da Fenda, as entidades fungoides, e os indivíduos que habitam este mundo de horror e mistério."
    },
    featuredArticles: {
      title: "Artigos em Destaque",
      articles: [
        {
          id: "cult",
          category: "Culto",
          title: "O Culto da Fenda",
          description: "Um culto esotérico de origens obscuras. Seus membros praticam rituais capazes de abrir portais para dimensões paralelas e comungar com a Carne Primordial...",
          status: "Ativo"
        },
        {
          id: "creatures",
          category: "Entidades",
          title: "Entidades Fungoides",
          description: "Organismos anômalos híbridos entre fungos e tecidos animais. Emergem em ambientes subterrâneos extremos com capacidade regenerativa extraordinária...",
          biologia: "anômala",
          regeneracao: "completa"
        }
      ]
    },
    characters: {
      title: "Personagens Principais",
      list: [
        {
          id: "player",
          name: "Player",
          age: "18 anos",
          description: "Protagonista introvertido com traumas familiares profundos",
          status: "Ativo"
        },
        {
          id: "joao",
          name: "João",
          role: "Antagonista",
          description: "Membro de alto escalão do Culto da Fenda",
          status: "Ativo"
        }
      ]
    },
    recentUpdates: {
      title: "Atualizações Recentes",
      updates: [
        {
          page: "Tipos de Criaturas",
          description: "Nova página catalogando 5 tipos distintos de entidades",
          date: "Recente"
        },
        {
          page: "Entidades Fungoides",
          description: "Informações expandidas sobre habitat e regeneração",
          date: "Recente"
        },
        {
          page: "O Culto da Fenda",
          description: "Atualização da hierarquia e práticas ritualísticas",
          date: "Recente"
        }
      ]
    }
  },

  cult: {
    pageTitle: "O Culto da Fenda",
    alertBanner: {
      title: "Aviso de Conteúdo:",
      message: "Este texto é ficcional e contém descrições de crenças e rituais imaginários. Não deve ser interpretado como incentivo a práticas reais."
    },
    introduction: "O Culto da Fenda é descrito em registros ficcionais como uma seita subterrânea que acredita que o mundo está sendo transformado por forças ancestrais invisíveis. Fundado em 1547 nas regiões montanhosas de Carpathia, seus membros dedicam-se a rituais simbólicos e práticas de isolamento para se conectar com entidades primordiais.",
    beliefs: {
      title: "Natureza e Filosofia",
      sections: [
        {
          title: "Matéria em Transição",
          content: "Para o culto, a matéria é sagrada não como símbolo de vida, mas como elemento em constante transformação. Seus rituais buscam representar essa transição, acreditando que o mundo está em processo de renascimento."
        },
        {
          title: "Doutrina Central",
          content: "O grupo acredita que a humanidade se afastou de sua essência ao valorizar apenas razão e tecnologia. Seus fiéis buscam reconectar-se ao \"chamado interno\" por meio de práticas meditativas e simbólicas.",
          highlight: true
        },
        {
          title: "Rejeição ao Progresso Humano",
          content: "O culto rejeita a ideia de progresso material, defendendo que apenas através da entrega ao silêncio e ao isolamento é possível ouvir os \"sussurros da origem\". Para eles, o sofrimento é entendido de forma metafórica: como uma etapa de aprendizado e transformação espiritual."
        },
        {
          title: "Isolamento Total",
          content: "O culto é retratado como vivendo em locais esquecidos — cavernas, ruínas e túneis abandonados. Seus membros se afastam do mundo exterior e vivem em ciclos ritualísticos contínuos, perdendo a noção do tempo. Relatos ficcionais descrevem ambientes que parecem vivos, emitindo sons e induzindo visões."
        }
      ]
    },
    practices: {
      title: "Rituais e Práticas",
      intro: "Os rituais não são descritos como violentos, mas como experiências de metamorfose simbólica.",
      rituals: [
        {
          title: "Uso de Máscaras",
          description: "Máscaras representando entidades internas são utilizadas em cerimônias, simbolizando a transformação da identidade individual."
        },
        {
          title: "Cânticos Ancestrais",
          description: "Cânticos em línguas inventadas ou esquecidas são entoados durante os rituais, criando uma atmosfera de conexão com o passado primordial."
        },
        {
          title: "Isolamento no Escuro",
          description: "Períodos de isolamento no escuro são praticados para induzir estados de transe e visões, permitindo aos membros acessar camadas mais profundas de consciência."
        }
      ]
    },
    hierarchy: {
      title: "Hierarquia",
      intro: "A estrutura é dividida em níveis que representam graus de abandono da identidade humana:",
      levels: [
        { name: "Observadores", description: "Iniciados que coletam relatos do mundo exterior." },
        { name: "Voluntários", description: "Membros que se dedicam ao isolamento e ao transe." },
        { name: "Tecedores da Matéria", description: "Responsáveis por criar artefatos e símbolos." },
        { name: "Portadores da Fenda", description: "Sacerdotes que interpretam sinais e conduzem rituais." },
        { name: "O Fendido", description: "Líder espiritual, visto como a voz da carne simbólica." }
      ]
    },
    finalObjective: {
      title: "Objetivo Final",
      content: "O culto acredita que seu destino é abrir a \"Fenda Final\", um evento simbólico em que matéria, consciência e divindade se tornam uma única entidade. Para eles, isso representa o retorno ao início primordial, onde tudo era fluxo eterno."
    },
    historicalRecords: {
      title: "Contexto Histórico",
      intro: "Em narrativas ficcionais, o culto é mencionado em diversos períodos históricos, sempre como uma organização misteriosa e isolada.",
      events: [
        { year: "1547", event: "Fundação do culto nas regiões montanhosas de Carpathia." },
        { year: "1621", event: "Primeira menção documentada em textos inquisitoriais." },
        { year: "1889", event: "Relatos de desaparecimentos em aldeias próximas a suas localizações." },
        { year: "1943", event: "Supostas atividades em zonas de guerra abandonadas." },
        { year: "Presente", event: "Atividade recente detectada em túneis subterrâneos." }
      ]
    },
    infoBox: {
      title: "O Culto da Fenda",
      data: [
        { label: "Fundação", value: "1547 (ficcional)" },
        { label: "Localização Original", value: "Carpathia" },
        { label: "Membros Conhecidos", value: "Desconhecido" },
        { label: "Status", value: "Ativo (narrativa ficcional)" },
        { label: "Natureza", value: "Seita simbólica" }
      ]
    }
  },

  player: {
    pageTitle: "Player",
    alertBanner: {
      title: "Aviso de Conteúdo:",
      message: "Este perfil contém referências a trauma familiar, isolamento social e horror psicológico. Recomenda-se discrição ao leitor."
    },
    introduction: "Player (nome verdadeiro desconhecido ou não revelado) é o protagonista central desta narrativa. Aos 18 anos, ele vive isolado do mundo exterior, refugiando-se em jogos online e em um universo digital que oferece controle e previsibilidade — luxos que a vida real jamais lhe proporcionou. Marcado por traumas familiares profundos e por uma crescente desconexão com a realidade, Player representa o arquétipo do indivíduo à beira do colapso psicológico, preso entre dois mundos: o digital e o carnal.",
    sections: {
      backgroundAndOrigins: {
        title: "Contexto e Origens",
        content: "Player cresceu em um ambiente doméstico marcado pela negligência emocional, violência psicológica e um silêncio sufocante. Seus pais, presos em ciclos de disfuncionalidade, nunca conseguiram oferecer suporte afetivo ou estrutura emocional. Desde cedo, ele aprendeu que expressar vulnerabilidade era perigoso — e que a única segurança estava em se tornar invisível.",
        highlight: "Essa necessidade de invisibilidade moldou sua personalidade: introspectivo, hipervigilante e emocionalmente entorpecido."
      },
      psychologicalProfile: {
        title: "Perfil Psicológico",
        intro: "Player apresenta sinais clássicos de trauma complexo e dissociação emocional:",
        traits: [
          { name: "Introversão Extrema", description: "Evita interações sociais a todo custo. Mesmo online, prefere jogos solo ou interações mínimas com outros jogadores." },
          { name: "Hipervigilância", description: "Sempre em estado de alerta, antecipando ameaças (reais ou imaginárias). Isso se manifesta tanto em sua vida cotidiana quanto em seu comportamento dentro dos jogos." },
          { name: "Desconexão Emocional", description: "Dificuldade extrema em processar ou expressar emoções. Muitas vezes, sente-se como um observador de sua própria vida, como se estivesse assistindo a tudo de fora." },
          { name: "Culpa Internalizada", description: "Carrega uma sensação persistente de que é responsável pelos problemas ao seu redor, mesmo quando isso não faz sentido lógico." },
          { name: "Fragmentação de Identidade", description: "Possui dificuldade em definir quem realmente é. Online, assume personas diferentes; offline, sente-se vazio e sem propósito." }
        ]
      },
      connectionToTheCult: {
        title: "Conexão com o Culto",
        intro: "Player não sabe conscientemente sobre o Culto da Fenda — pelo menos não no início. Mas há indícios de que ele está sendo observado, ou mesmo preparado.",
        signs: [
          "Ele encontra símbolos estranhos em fóruns de jogos obscuros — marcas que parecem familiares, mas que ele não consegue identificar.",
          "Recebe mensagens privadas de contas anônimas, com frases enigmáticas como: \"Você já ouviu a carne cantar?\" ou \"Quando você parar de resistir, tudo fará sentido.\"",
          "Seus pesadelos começam a incluir imagens de cavernas, massas pulsantes e rostos sem olhos que sussurram seu nome."
        ]
      }
    },
    infoBox: {
      title: "Player",
      data: [
        { label: "Nome Real", value: "Desconhecido" },
        { label: "Idade", value: "18 anos" },
        { label: "Localização", value: "Isolado (urbano)" },
        { label: "Status Mental", value: "Instável" },
        { label: "Ocupação", value: "Gamer" },
        { label: "Condição", value: "Dissociação / Trauma Complexo" },
        { label: "Nível de Risco", value: "Alto" }
      ]
    }
  },

  joao: {
    pageTitle: "João",
    alertBanner: {
      title: "Aviso de Conteúdo:",
      message: "Este perfil contém referências a violência, cultismo, manipulação psicológica e horror existencial. Recomenda-se discrição ao leitor."
    },
    introduction: "João é o antagonista central desta narrativa — ou, dependendo da perspectiva, o guia inevitável para uma verdade que Player não quer aceitar. Carismático, perspicaz e profundamente perturbador, João ocupa um papel ambíguo: ele não é um vilão tradicional, movido por malícia gratuita, mas sim um crente fervoroso em uma filosofia que desafia os limites da sanidade e da moralidade humana. Ele é o rosto humano do Culto da Fenda, e sua relação com Player é ao mesmo tempo de mentor, predador e espelho distorcido.",
    sections: {
      appearanceAndPresence: {
        title: "Aparência e Presença",
        description: "João possui uma presença magnética que imediatamente chama atenção, mas de forma desconcertante. Ele não é intimidador no sentido físico — na verdade, sua aparência é quase comum:",
        traits: [
          { feature: "Aparência Física", description: "Homem de estatura média, cabelos escuros e desgrenhados, olhos profundos que parecem sempre observar algo além da superfície." },
          { feature: "Vestimenta", description: "Roupas simples, muitas vezes gastas, mas sempre com um detalhe peculiar — uma cicatriz exposta, um símbolo discreto bordado, uma textura estranha no tecido." },
          { feature: "Voz", description: "Suave, quase hipnótica. Ele fala devagar, escolhendo cada palavra com cuidado, como se estivesse revelando segredos antigos." },
          { feature: "Presença", description: "Há algo profundamente errado nele, mas é difícil apontar exatamente o quê. Ele parece estar sempre levemente fora de sincronia com o ambiente ao redor — como se ocupasse um espaço que não deveria existir." }
        ]
      },
      psychologicalProfile: {
        title: "Perfil Psicológico",
        intro: "João é um indivíduo complexo, moldado por anos de devoção ao Culto da Fenda e por experiências que transcendem a compreensão humana convencional:",
        traits: [
          { name: "Carisma Perturbador", description: "Ele possui uma habilidade inata de ler pessoas e manipulá-las emocionalmente. Não de forma cruel, mas quase clínica — como se entendesse os padrões que governam o comportamento humano e soubesse exatamente quais fios puxar." },
          { name: "Crença Inabalável", description: "João não vê o Culto como uma organização — ele o vê como a verdade fundamental do universo. Para ele, a \"Carne Primordial\" não é uma metáfora, mas uma realidade tangível, viva e consciente." },
          { name: "Empatia Distorcida", description: "Ele genuinamente se importa com Player — mas sua forma de cuidado é profundamente tóxica. João acredita que está salvando Player ao guiá-lo para o Culto, libertando-o das ilusões da identidade individual." }
        ]
      },
      roleInTheCult: {
        title: "Papel no Culto",
        intro: "João ocupa uma posição elevada dentro da hierarquia do Culto da Fenda, embora ele próprio rejeite títulos formais. Dentro da estrutura informal do culto, ele seria classificado como um dos Ecos da Fenda — indivíduos que perderam quase toda identidade individual e se tornaram extensões do \"Fluxo\".",
        responsibilities: [
          { title: "Recrutador e Mentor", description: "João identifica indivíduos vulneráveis — especialmente aqueles à beira do colapso psicológico — e os guia gentilmente em direção ao Culto." },
          { title: "Guardião de Conhecimento", description: "Ele possui acesso a textos antigos, rituais esquecidos e segredos que poucos membros conhecem." },
          { title: "Ponte entre Mundos", description: "João afirma ter \"ouvido\" a Carne Primordial diretamente. Alguns acreditam que ele já passou por transformações físicas que o tornaram parcialmente não-humano." }
        ]
      }
    },
    infoBox: {
      title: "João",
      data: [
        { label: "Nome Completo", value: "João (sobrenome desconhecido)" },
        { label: "Idade", value: "~30 anos" },
        { label: "Afiliação", value: "O Culto da Fenda" },
        { label: "Posição", value: "Eco da Fenda" },
        { label: "Status", value: "Ativo" },
        { label: "Nível de Perigo", value: "Extremo" }
      ]
    }
  },

  creatures: {
    pageTitle: "Entidades Fungoides",
    alertBanner: {
      title: "Aviso de Conteúdo:",
      message: "Este artigo contém descrições de horror biológico, organismos anômalos e transformações corporais. Recomenda-se discrição ao leitor."
    },
    introduction: "As chamadas entidades fungoides são organismos anômalos que apresentam características híbridas entre colônias fúngicas e tecidos animais. Embora não reconhecidas por classificações taxonômicas convencionais, essas formas de vida parecem ter emergido em ambientes subterrâneos extremos, onde a matéria orgânica se acumula em estado de decomposição avançada e o tempo parece perder significado.",
    sections: {
      origin: {
        title: "Origem e Desenvolvimento",
        content: "Estudos especulativos sugerem que tais organismos podem ter se desenvolvido por meio de mutações aceleradas, favorecidas por condições de isolamento absoluto, umidade constante e ausência de luz. Há também indícios de que interferências humanas — como experimentos biotecnológicos abandonados ou contaminações industriais — possam ter contribuído para sua origem.",
        highlight: "No entanto, há quem defenda que essas criaturas são manifestações naturais de uma biologia ancestral, anterior à linguagem e à razão, que persiste em silêncio sob a crosta terrestre."
      },
      physicalStructure: {
        title: "Estrutura Corpórea",
        intro: "A estrutura corpórea dessas entidades é altamente variável. Algumas apresentam formas vagamente humanoides, enquanto outras se assemelham a massas amorfas de tecido pulsante.",
        characteristics: [
          "Formas variáveis: de humanoides a massas amorfas",
          "Incorporação de matéria orgânica do ambiente (folhas, ossos, peles)",
          "Assimilação degenerativa com replicação caótica",
          "Partes de animais integradas à estrutura corporal"
        ]
      },
      regeneration: {
        title: "Regeneração e Resiliência",
        content: "Fragmentos mínimos dessas entidades são capazes de regenerar o organismo completo, tornando qualquer tentativa de erradicação extremamente difícil. Esse processo de recomposição pode ocorrer em questão de horas, dependendo da disponibilidade de biomassa e da estabilidade bioenergética do espécime.",
        warning: {
          title: "Aviso de Contenção:",
          text: "A capacidade regenerativa torna essas entidades praticamente indestrutíveis por métodos convencionais. Mesmo fragmentos microscópicos podem originar novos organismos completos."
        }
      },
      habitat: {
        title: "Habitat e Ambiente",
        intro: "Essas entidades são encontradas em locais esquecidos: túneis abandonados, cavernas profundas, ruínas industriais e zonas de guerra desativadas.",
        locations: [
          "Túneis abandonados",
          "Cavernas profundas",
          "Ruínas industriais",
          "Zonas de guerra desativadas"
        ]
      }
    },
    infoBox: {
      title: "Entidades Fungoides",
      data: [
        { label: "Classificação", value: "Organismo anômalo" },
        { label: "Habitat", value: "Subterrâneo" },
        { label: "Regeneração", value: "Completa" },
        { label: "Nível de Perigo", value: "Extremo" },
        { label: "Status", value: "Ativo" }
      ]
    }
  },

  team: {
    pageTitle: "Integrantes do Projeto",
    introduction: "Conheça a equipe por trás da The Sinister Factory Wiki. Aqui estão listados todos os contribuidores que trabalham na criação e manutenção deste universo de horror cósmico.",
    members: [
      {
        name: "Lucas de Almeida Rocha",
        role: "Criador e Desenvolvedor do jogo The Sinister Factory",
        description: "Responsável pela criação do universo, desenvolvimento do jogo e o controle de grupo.",
        ra: "2200875",
        contact: {
          email: "lucasrocha884@uni9.edu.br",
        }
      }
      ,
      {
        name: "Eugénio Kafuma António Nobrega",
        role: "Criador da Interface Gráfica do jogo The Sinister Factory e do video de apresentação",
        description: "Responsável pela criação da interface gráfica do jogo e da wiki e do vídeo de apresentação.",
        ra: "2200875",
        contact: {
          email: "Eugenionobrega91@uni9.edu.br",
        }
      }
      ,
      {
        name: "Henrique Luciano Pires",
        role: "Ajudante na criação do roteiro do jogo The Sinister Factory e do video de apresentação",
        description: "Responsável pela ajuda na criação do roteiro do jogo.",
        ra: "2200875",
        contact: {
          email: "henrique.luciano.pires@uni9.edu.br",
        }
      }
      ,
      {
        name: "Henrique Luciano Pires",
        role: "Ajudante na criação do roteiro do jogo",
        description: "Responsável pela ajuda na criação do roteiro do jogo The Sinister Factory.",
        ra: "2200875",
        contact: {
          email: "henrique.luciano.pires@uni9.edu.br",
        }
      }
      ,
      {
        name: "Jhonatan Souza Barbosa",
        role: "Analista de concorrencia e encarregado pela criação do arquivo escrito final",
        description: "Responsável pela análise de concorrência e pela elaboração do arquivo de apresentação do trabalho.",
        ra: "2200875",
        contact: {
          email: "barbosa.jhonatan@uni9.edu.br",
        }
      }
      ,
      {
        name: "Lucas Tatsuo Shima Fávaro",
        role: "Designer Gráfico do jogo The Sinister Factory",
        description: "Responsável pelo design de todos os elementos gráficos do jogo The Sinister Factory.",
        ra: "2200875",
        contact: {
          email: "lucas.shima@uni9.edu.br",
        }
      }
      ,
      {
        name: "Rhuan Machado",
        role: "Desvolvedor da wiki The Sinister Factory",
        description: "O responsável pelo desenvolvimento da wiki The Sinister Factory.",
        ra: "2200875",
        contact: {
          email: "Rhuan.m@uni9.edu.br",
        }
      }
      ,
      {
        name: " João Pedro Souza Nunes",
        role: "Analista de concorrencia e criação do roteiro do video de apresentação",
        description: "O encarregado pela análise de concorrência e pela criação do roteiro do vídeo de apresentação.",
        ra: "2200875",
        contact: {
          email: "joao.pedro@uni9.edu.br",
        }
      }
      ,
      {
        name: "Luis Felipe",
        role: "Analista de concorrencia e criaçao do arquivo escrito final",
        description: "Responsável pela análise de concorrência e pela elaboração do arquivo de apresentação do trabalho.",
        ra: "2200875",
        contact: {
          email: "luis.anjos@uni9.edu.br",
        }
      }
      ,
      {
        name: "Maria Eduarda",
        role: "Descrição da wiki",
        description: "A encarregada pela descrição e organização do conteúdo da wiki.",
        ra: "2200875",
        contact: {
          email: "maria.eduarda@uni9.edu.br",
        }
      }
      ,
      {
        name: "João Gabriel Oliveira Botelho",
        role: "Designer de Personagens e criação do arquivo escrito final",
        description: "Responsável pela criação e design dos personagens do jogo e pela elaboração do documento final para entrega.",
        ra: "2200875",
        contact: {
          email: "gabriel.botelho@uni9.edu.br",
        }
      }
    ]
  },

  creatureTypes: {
    pageTitle: "Tipos de Criaturas",
    introduction: "As entidades fungoides manifestam-se em diversas formas, cada uma adaptada a diferentes ambientes e estágios de desenvolvimento biológico. Este documento cataloga as principais variantes conhecidas, suas características distintivas e métodos de contenção.",
    creatures: [
      {
        name: "Protoformas",
        threatLevel: "Médio",
        appearance: "Massa orgânica semi-autônoma, com textura semelhante a carne crua entrelaçada com filamentos fúngicos. Possui coloração variável entre vermelho escuro e marrom esverdeado, dependendo do ambiente e estágio de maturação.",
        habitat: "Crescem em locais com alta umidade, pouca luz e presença de matéria orgânica em decomposição: porões abandonados, cavernas profundas, tanques industriais, sistemas de esgoto.",
        behavior: "São organismos de estágio inicial, que não possuem membros ou olhos, mas reagem a vibrações e calor. Quando encontram outro organismo vivo, podem se fundir com ele, iniciando um processo de assimilação que altera o hospedeiro biologicamente.",
        vulnerabilities: ["Luz Solar", "Calor Elevado", "Químicos (Cal virgem, ácido sulfúrico)"]
      },
      {
        name: "Cardioide",
        threatLevel: "Alto",
        appearance: "Criatura quadrúpede com músculos expostos e placas ósseas externas que funcionam como armadura. Possui um órgão central pulsante visível através de lacunas no tecido, que bate como um coração gigante.",
        habitat: "Cavernas profundas, túneis de minas abandonadas, e porões de hospitais desativados.",
        behavior: "Extremamente territorial e agressivo. Ataca qualquer intruso com ferocidade brutal, usando garras afiadas e uma mordida poderosa. O órgão central parece regular suas funções vitais e pode emitir pulsos eletromagnéticos que causam náusea e desorientação em humanos.",
        vulnerabilities: ["Destruição do órgão central", "Armamento pesado"]
      },
      {
        name: "Fragmentado",
        threatLevel: "Alto",
        appearance: "Entidade composta por múltiplos fragmentos corporais (braços, pernas, cabeças) de diferentes criaturas e humanos, fundidos de forma caótica. Não possui uma forma definida e pode se reorganizar constantemente.",
        habitat: "Zonas de descarte de resíduos biológicos, laboratórios abandonados, cemitérios profanados.",
        behavior: "Move-se de forma errática e imprevisível. Pode separar partes de si mesmo para atacar de múltiplas direções ou criar iscas. Extremamente resistente a danos físicos devido à sua natureza fragmentada.",
        vulnerabilities: ["Fogo intenso", "Explosivos", "Separação completa dos fragmentos"]
      },
      {
        name: "Veias Rastejantes",
        threatLevel: "Médio",
        appearance: "Redes de veias e artérias que se estendem por paredes, tetos e pisos. Pulsam com líquido escuro e podem formar nódulos que atuam como 'olhos' ou sensores.",
        habitat: "Hospitais abandonados, frigoríficos desativados, porões úmidos.",
        behavior: "Organismos parasitários que se espalham lentamente, criando uma rede de vigilância. Podem detectar movimento e temperatura, e alertar outras entidades fungoides da presença de intrusos. Em estágios avançados, podem estrangular ou perfurar vítimas.",
        vulnerabilities: ["Corte preciso dos nódulos centrais", "Desidratação química", "Fogo"]
      },
      {
        name: "Sussurrante",
        threatLevel: "Extremo",
        appearance: "Figura humanoide esguia, com pele translúcida que revela músculos e órgãos pulsantes. Possui múltiplas bocas ao longo do corpo que sussurram constantemente frases incompreensíveis.",
        habitat: "Câmaras rituais do Culto da Fenda, catacumbas antigas, salas de interrogatório abandonadas.",
        behavior: "Não ataca fisicamente de imediato. Em vez disso, persegue a vítima lentamente, sussurrando frases que causam paranoia, alucinações e colapso mental. Vítimas expostas por tempo prolongado desenvolvem sintomas de psicose severa e podem ser assimiladas mentalmente.",
        vulnerabilities: ["Isolamento acústico", "Trauma craniano severo", "Exorcismo ritualístico (não confirmado)"]
      }
    ]
  }
};
