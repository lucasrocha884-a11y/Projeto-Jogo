// ==================== STORY DATA ====================
const STORY_DATA = {
    start: {
        id: 'start',
        title: '📖 Capítulo 01 — A Mensagem Perdida',
        text: [
            'O vento da tarde sopra frio quando você e João caminham pela rua estreita que leva até o bairro de vocês. O céu, antes azul, começa a se tingir de tons alaranjados e violetas, anunciando o fim do dia.',
            'O cheiro de pão fresco vindo do mercado se mistura com o som distante de buzinas e conversas apressadas. João ri de alguma piada que fez, mas logo seu celular vibra. Ele pega o aparelho e franze o cenho:',
            '— Hm… é mensagem da minha mãe.',
            'Você se aproxima para olhar e sente um arrepio. O texto é direto e estranho:',
            '"Vá imediatamente ao beco perto do mercado."',
            '"É importante, não fale com ninguém sobre isso."',
            'O jeito seco da mensagem deixa vocês em silêncio por alguns segundos. João parece confuso, mas não demonstra medo. Ele fala que iria ter que ir até lá de qualquer forma, fazer compras para o amanhã.',
            'Você, por outro lado, sente um desconforto imediato sobre a mensagem, mas não sabe se deve falar…',
        ],
        choices: [
            { id: 'p1', text: 'Ir com João até ao mercado', nextScene: 'p1_mercado' },
            { id: 'p2', text: 'Se despedir e ir direto para casa', nextScene: 'p2_casa' },
            { id: 'p3', text: 'Falar com João sobre a mensagem', nextScene: 'p3_conversa' },
        ],
    },

    // CAMINHO P1 - MERCADO
    p1_mercado: {
        id: 'p1_mercado',
        title: 'Caminho P1 — O Mercado e o Beco',
        text: [
            'Vocês seguem lado a lado até o mercado. O sol já se esconde parcialmente atrás dos prédios. A rua ganha sombras longas e inquietantes.',
            'Ao chegar, João comentou casualmente:',
            '— Vou comprar umas coisas para minha mãe antes de irmos ao tal lugar.',
            'Ele sorri, tentando quebrar o clima estranho...',
            'Enquanto isso, seus olhos captam algo perturbador: ao lado do mercado, um beco estreito, coberto por uma cerca enferrujada. Dentro dele, um carro preto está estacionado, seus vidros são escuros, os faróis apagados.',
            'Parece abandonado, mas, você consegue reparar alguns vultos pretos no interior do carro, pessoas, como se esperassem algo, ou alguém…?!',
            'Seu instinto alerta que o perigo iminente se aproxima.',
            'João entra no mercado, distraído, pensando no que compraria, sem perceber o que lhe aguarda.',
        ],
        choices: [
            { id: 'nao_comentar', text: 'Não comentar', nextScene: 'p1_morte_tiroteio' },
            { id: 'alertar', text: 'Alertar João sobre o carro', nextScene: 'p1_alertar' },
        ],
    },

    p1_morte_tiroteio: {
        id: 'p1_morte_tiroteio',
        text: [
            'Você decide ignorar seu instinto, pensa ser algo vago demais para comentar. E então segue João mercado adentro.',
            'Vocês vão concluir sua tarefa no recinto, para entender aquela mensagem da mãe de João, ambos receosos com relação a mensagem, mas você não pergunta a João sobre isso, pode ser algo privado, assuntos de família, mas continua com uma pulga atrás da orelha.',
            'Após vasculharem o mercado, e encontrarem o que a lista pedia, pães, carne para o amanhã, vão ao caixa para pagar.',
            'Entretanto, enquanto você ajudava João a por as compras na esteira do caixa, aparecem 2 homens vestindo casaco preto, calças escuras e botas estranhas, estão eufóricos, mas decididos.',
            'Eles imediatamente sacam armas e apontam em sua direção, você vê que possivelmente eram pistolas 9 milímetros…',
            'É tudo que consegue reparar antes de ouvir aquele som ensurdecedor, junto com aquele clarão saindo do cano da arma, eles atiraram na atendente do caixa, sangue respinga no seu rosto, você fica paralisado.',
            'Você olha para João, ele está aparentemente bem, inteiro, você sai do seu transe, e decide tentar fugir, pega a mão de João, mas as pistolas são mais rápidas.',
            'Em questão de segundos, mais 2 tiros são ouvidos no mercado. Para você e João, o que lhes resta é a escuridão e o esquecimento, vocês nunca mais foram vistos.',
        ],
        ending: {
            type: 'death',
            title: 'MORTE',
            message: 'Ignorar sinais de perigo pode ser fatal.',
        },
    },

    p1_alertar: {
        id: 'p1_alertar',
        text: [
            'Você adentra ao mercado, e pede para João te seguir por um momento; logo você relata a situação vista no beco anteriormente.',
            'João goza de sua cara, por ficar criando cenários fictícios. Você insiste no assunto, mas ele não te dá atenção.',
            'Em seguida, repara que um homem de vestimentas estranhas, totalmente encapuzado, entrou no mercado; você pensa que poderia ser algo relacionado ao beco.',
            'Relutante sobre se o que João falou seria plausível, fica indeciso sobre o que fazer a seguir, mas fica receoso.',
        ],
        choices: [
            { id: 'padaria', text: 'Ir ao setor da padaria com João', nextScene: 'p1_padaria_morte' },
            { id: 'investigar', text: 'Investigar o encapuzado', nextScene: 'p1_investigar' },
        ],
    },

    p1_padaria_morte: {
        id: 'p1_padaria_morte',
        text: [
            'João te chama para ir terminar logo a lista de compras, você se dirige ao setor da padaria.',
            'Possui alguns pães na vitrine e algumas guloseimas feitas da padaria, como sonhos, pão de milho, palitinhos de chocolate, croissants e outros parecem estar fora de estoque no momento.',
            'João começa a pedir os itens listados, você apenas olha e espera o pedido de João ser concluído.',
            'Ainda receoso com relação ao homem misterioso, tenta analisar o horizonte, procurando achar o homem encapuzado; você vê ele de relance, se escondendo atrás de uma prateleira.',
            'Você viu ele, percebeu ele… e ele reparou isso. Não há mais o que duvidar, não eram cenários fictícios, João estava errado, e você mais ainda por duvidar de sua perspicácia.',
            'Logo após a troca de olhares, você chama João, fala para irem embora imediatamente. Ele fica totalmente incrédulo do que você falou, pensa que está fazendo apenas passarem vergonha em público.',
            'Contudo, ao olhar ao redor, e ver um homem vindo na direção de vocês, com a mão suspeitamente no bolso, como se fosse tirar uma arma de sua vestimenta, começa a acreditar, e entender o perigo iminente.',
            'Os clientes ao redor, também repararam o encapuzado, criando alvoroço, você chama João para fugir, aproveitando a algazarra, entretanto, já é tarde demais.',
            'A saída de emergência do mercado foi barrada com outros 2 encapuzados, vocês foram cercados, sem escapatória.',
            'Os outros clientes foram liberados, saíram pela porta da frente, desesperados; enquanto isso, você e João eram barrados na saída de emergência, para nunca mais serem vistos em vida…',
        ],
        ending: {
            type: 'death',
            title: 'MORTE',
            message: 'Confiar nos seus instintos pode mudar destinos trágicos.',
        },
    },

    p1_investigar: {
        id: 'p1_investigar',
        text: [
            'Você disfarça. Diz a João que vai conferir o preço de alguns produtos específicos enquanto ele vai até a padaria. Uma desculpa simples, prática.',
            'Ele acena com a cabeça e segue seu caminho, despreocupado. Mas você tem outro plano. Aquela pessoa encapuzada que viu de relance, parada ao longe, observando vocês… algo não está certo.',
            'Seu instinto fala mais alto. Há algo na postura daquele homem, na forma como se mantém sempre a poucos metros de distância, mas nunca perto o suficiente para parecer um cliente comum.',
            'Você sabe que pode estar se deixando levar pela paranoia, mas mesmo assim, decide investigar por conta própria.',
            'Sem parecer suspeito, percorre os corredores do mercado com atenção disfarçada. Passa pela seção de frios, bebidas, hortifrúti… Nada. A figura parece ter desaparecido.',
            'Por um momento, você duvida de si mesmo. Talvez estivesse mesmo imaginando coisas. Mas, então, uma ideia surge.',
            'E se o perseguidor não estivesse atrás de você… e sim de João?',
            'O pensamento te deixa ansioso. Você se vira e apressa o passo rumo à padaria. Lá fora, já vê João saindo com um saquinho de pão nas mãos, andando em direção à fila dos caixas.',
            'Você decide segui-lo discretamente, agora em busca do verdadeiro objetivo: o homem encapuzado. E então, você o vê; a poucos metros atrás de João, fingindo procurar itens de uma lista.',
            'Ele não olha diretamente, mas você percebe, ele está seguindo João.',
            'João logo começa a olhar em volta, notando sua ausência. Ele olha ao redor, te procurando.',
            'Seu movimento involuntário desencadeia uma reação em cadeia: o encapuzado, tentando não ser notado, muda de direção com pressa, cruzando um corredor estreito e bagunçado, e acaba esbarrando em uma idosa.',
            'O impacto é sutil, mas suficiente para gerar um descuido do encapuzado. Ele deixa algo cair do bolso do casaco — um objeto metálico, pesado… um tipo de arma, pequena, mas claramente uma arma.',
            'O homem, em um movimento rápido e desesperado, abaixa-se e recolhe o objeto antes que alguém perceba. A senhora segue seu caminho, alheia ao ocorrido.',
            'Mas você viu. Você sabe o que viu…',
            'Após ver a arma do indivíduo, você já assimila tudo, o homem encapuzado quer matar vocês. Obviamente você não sabe o motivo, mas não quer ser morto.',
            'Você tem que se encontrar com João, rápido. Em uma tentativa desesperada de ir até João, você esbarra em uma pilha de produtos de limpeza, organizados no meio do corredor.',
        ],
        qte: {
            prompt: 'SEGURE OS GALÕES!',
            timeLimit: 3000,
            successScene: 'p1_qte_sucesso',
            failScene: 'p1_qte_falha',
        },
    },

    p1_qte_falha: {
        id: 'p1_qte_falha',
        text: [
            'Você não consegue agarrar os galões da pilha, e isso faz o encapuzado te perceber, ele te conhece, e pela reação que você esboça, ele percebe que você viu a situação toda.',
            'Não há mais escapatória, o encapuzado está alerta da sua presença agora, e sem perder tempo ele dá uma investida em sua direção.',
            'Você tenta correr mas suas pernas paralisaram, e antes de você ter chance de fazer mais alguma coisa, sente a pancada que veio por trás, rápida e certeira.',
            'Uma coronhada silenciosa que lhe rouba o equilíbrio e a luz dos olhos, você e João nunca mais foram vistos após isto.',
        ],
        ending: {
            type: 'death',
            title: 'MORTE',
            message: 'Melhore.',
        },
    },

    p1_qte_sucesso: {
        id: 'p1_qte_sucesso',
        text: [
            'Você pega os galões no ar, evitando ser reparado, o encapuzado não te viu, mas você o viu.',
            'Seria burrice entrar no campo de visão dele agora, então você decide pensar em alguma forma de distrair o encapuzado e conseguir fugir com João.',
        ],
        choices: [
            { id: 'seguranca', text: 'Chamar o segurança', nextScene: 'p1_seguranca' },
            { id: 'alarme', text: 'Ativar o alarme de incêndio', nextScene: 'p1_alarme' },
        ],
    },

    p1_seguranca: {
        id: 'p1_seguranca',
        text: [
            'Você, tomado pelo desespero, se dirige rapidamente até o segurança do mercado, que está parado próximo à entrada, aparentemente alheio ao que acontece dentro do recinto.',
            'Com urgência, tentou chamar sua atenção e apontou discretamente para o homem encapuzado que você viu rondando entre as prateleiras.',
            'No entanto, o segurança não parece acreditar na gravidade da situação. Sua expressão é de ceticismo, e ele demora a reagir, hesitando entre ignorar o alerta ou agir.',
            'Enquanto isso, o homem encapuzado percebe que está sendo observado, mas usa a distração a seu favor.',
            'Movimenta-se com rapidez silenciosa, aproximando-se de João, que ainda está distraído entre os corredores, conferindo os produtos com tranquilidade, alheio ao perigo crescente.',
            'A demora do segurança em agir dá tempo suficiente para o sequestrador agarrar João e levá-lo pela porta lateral do mercado, que está parcialmente aberta, desaparecendo rapidamente na escuridão do beco.',
            'Você tenta correr atrás, seu coração disparado, mas o tumulto que começa a se formar por conta do rapto de João, bloqueia sua visão.',
            'O mercado se torna um caos, vozes confundidas, passos apressados, o segurança, agora consciente do que aconteceu, tenta entender o que houve, mas já é tarde, o segurança é ineficiente agora.',
            'Você permanece ali, impotente, olhando para o beco vazio e sentindo o peso esmagador da perda. João desapareceu sem deixar rastros, e você não sabe se algum dia o verá novamente.',
        ],
        ending: {
            type: 'bad',
            title: 'FINAL RUIM',
            message: 'A demora do segurança custou caro. João foi sequestrado e o destino dele permanece um mistério.',
        },
    },

    p1_alarme: {
        id: 'p1_alarme',
        text: [
            'A alavanca vermelha foi puxada com força. O alarme disparou, estridente, preenchendo cada canto do mercado.',
            'As luzes de emergência piscam em vermelho, transformando os corredores em um cenário de desordem. Clientes correram em todas as direções, empurrando-se em busca de saída, enquanto o encapuzado, pego de surpresa, perdia espaço em meio à multidão.',
            'No centro da confusão, João parecia desorientado. O som agressivo, a correria ao redor e a pressão da massa de pessoas o deixaram paralisado por alguns instantes.',
            'Foi nesse momento que você, empurrando clientes e desviando dos corredores, avançou até ele.',
            'Entre sacolas caídas e pessoas em movimento, você surgiu ofegante. Estendeu a mão no meio do tumulto, firme, agarrando João pelo braço antes que ele fosse arrastado para outra direção.',
            'Juntos, abriram caminho contra a correnteza humana. Você desesperado guiava a fuga, enquanto João, ainda atordoado, se deixava conduzir.',
            'Cada passo era uma luta contra a massa de pessoas, mas se mantiveram firmes.',
            'Vocês finalmente saem do tumultuoso mercado. Do lado de fora, o ar frio da noite trouxe o primeiro alívio. João, desorientado, recuperava o equilíbrio pouco a pouco.',
            'No momento seu foco era estarem seguros, e nem mesmo fora do mercado, estariam, precisavam ir embora dali de imediato.',
            'Na pressa você decide explicar a situação pro João depois…',
            'Atrás, o encapuzado ainda tentava se recompor dentro do mercado, mas a oportunidade havia se perdido. O caos, dessa vez, havia servido como proteção.',
            'Na rua escura, longe do som ensurdecedor, os dois seguiram juntos, cada passo marcado pela incerteza se haviam realmente escapado do pior.',
        ],
        ending: {
            type: 'good',
            title: 'GOOD ENDING',
            message: 'TO BE CONTINUED… PT.2',
        },
    },

    // CAMINHO P2 - CASA
    p2_casa: {
        id: 'p2_casa',
        title: 'Caminho P2 — O Pressentimento Ignorado',
        text: [
            'Você não dá atenção a mensagem da Mãe de João, não é problema seu, tem coisas mais importantes para fazer, do que achar que aquilo seria algo verdadeiramente preocupante.',
            'Você ignora seus pressentimentos e se despede de João.',
            'Em casa, jogando um novo jogo da Steam que lançaram recentemente, passando raiva desde que chegou em casa, por ser ruim em passar fases e escolher boas rotas.',
            'Você escuta sua Mãe te chamar para jantar, pausa o jogo por não ter mais paciência restante para gastar no bendito jogo, desce as escadas, apreciando o bom e velho cheiro de comida de Mãe.',
            'Isso te faz lembrar daquela mensagem mais cedo, com João, mas ainda reluta em dar preocupação ao ocorrido.',
            'Após o jantar, decidiu criar forças o bastante para voltar a apanhar no seu novo jogo, contudo, sua Mãe te chama até a sala, para ver algo que passa na TV.',
            'A televisão mostra uma reportagem do dia de hoje, um confronto armado em um mercado do bairro.',
        ],
        nextScene: 'p2_reportagem',
    },

    p2_reportagem: {
        id: 'p2_reportagem',
        text: [
            '"- Confronto em bairro da Grande São Paulo gera tumulto e medo entre moradores -"',
            '"Um segurança de supermercado foi baleado duas vezes por um homem encapuzado, após uma tentativa de sequestro registrada na noite desta segunda-feira (09/05/2025)."',
            '"Segundo informações preliminares, um jovem — ainda não identificado — teria sido abordado dentro do estabelecimento pelo suspeito."',
            '"Desesperado, o rapaz buscou ajuda junto ao segurança do mercado. Durante a ação criminosa, o funcionário acabou sendo atingido por dois disparos e foi socorrido em estado grave. Ele permanece internado na UTI."',
            '"A Polícia Civil abriu investigação para identificar tanto o jovem raptado quanto o homem responsável pelo crime. Imagens das câmeras de segurança do local devem auxiliar no trabalho dos investigadores."',
            'Ao fim da reportagem, você já deduziu tudo, alarmado, volta ao seu quarto para mandar mensagem para João imediatamente.',
            'Sua mãe acha estranha sua movimentação após ver a reportagem, mas releva. Você tenta mandar mensagens a João, mas ele aparenta não ter internet, tenta ligar, mas cai tudo na caixa postal.',
            'Não consegue entrar em contato com ele.',
            'Da janela de seu quarto, é capaz de ver os reflexos das sirenes policiais, no local do crime e rapto, você parece entrar em transe, completamente imerso em pensamentos.',
            '"Será que foi mesmo o João? - Estou pirando? - Não é possível…"',
            'O céu, antes com tons alaranjados agora escuro, não é possível ver estrelas, apenas a lua que está em sua fase cheia. A lua ilumina os céus escuros, como se iluminasse em sua direção.',
            'Um arrepio percorreu sua espinha. O mundo parece tentar se comunicar com você, tudo parece tonto e vago, você sente um gosto amargo na boca, esquisito.',
            'Você escuta um som abafado, parece que alguém bateu a porta de trás da sua casa com muita força.',
        ],
        nextScene: 'p2_final',
    },

    p2_final: {
        id: 'p2_final',
        text: [
            'Você tem a impressão de ter escutado sua mãe falar algo em voz alta, mas não tem noção do que, tudo está tonto, parece que está prestes a desmaiar.',
            'Você abre a porta do seu quarto, cambaleando desce as escadas, degrau por degrau.',
            'Sua mãe está estirada no chão, um homem estranho, desconhecido, está em pé ao lado dela, você cogita ser seu pai, mas a essa hora, ele não teria chegado do trabalho.',
            'Quem é esse homem?',
            'Antes mesmo de compreender seus próprios pensamentos você apaga, para nunca mais abrir os olhos…',
        ],
        ending: {
            type: 'bad',
            title: 'BAD ENDING',
            message: 'Naquela trágica noite do dia 09/05/2025. João não foi o único do bairro a sumir. Uma casa foi incendiada no mesmo bairro, moradores vizinhos alegam ter ouvido gritos de uma mulher desesperada. Em questão de minutos a casa estava em chamas. Foram encontrados restos mortais de uma mulher no recinto. O filho da família nunca foi encontrado. O pai do garoto foi preso, julgado como incendiário e possível culpado pela morte de um segurança, sua esposa, e o desaparecimento de 2 jovens garotos. Semanas depois, o prisioneiro se suicidou na cadeia. O caso nunca foi resolvido.',
        },
    },

    // CAMINHO P3 - CONVERSA
    p3_conversa: {
        id: 'p3_conversa',
        title: 'Caminho P3 — A Noite Estranha',
        text: [
            'Você acha estranho a mensagem da mãe de João, mas quer tentar ajudar de alguma forma, João é meio desleixado, essa mensagem parece muito suspeita aos seus olhos de quem assiste séries de true crime.',
            'Mesmo receoso se tinha direito, contesta João por sua decisão.',
            '— Não acha errado querer aproveitar o embalo da mensagem para passar no mercado? Parece algo muito sério para ser leviano com o assunto.',
            'João a princípio, não gostou muito de sua fala, mas ele sabe que você tem razão.',
            'Vocês decidem tentar retornar a mensagem, questionando o porquê daquilo, dessa mensagem extremamente vaga e misteriosa, beirando o sombrio.',
            'Sem respostas, o número parece não ter mais qualquer forma de sinal ou internet, não recebe nada, nem ligações e SMS.',
            'Parece que você e João não têm mais opções, terão que ir até ao enigmático beco ao lado do mercado.',
            'Se aproximando do fim da tarde, prestes a anoitecer, vocês chegam na rua do mercado, ele brilha demais a noite, e emana um cheiro vindo da padaria, é quase irresistível de não entrar nele.',
            'Mas vocês querem descobrir o desfecho dessa história: porque tanto mistério nisso?',
            'Chegando perto do beco, sem entrar ainda, vocês percebem movimentação no beco, a princípio não parece ser nada demais, um homem encapuzado entrou no beco, parece mexer em alguma coisa.',
            'Você fica receoso, pede para João deixar isso de lado, parece estranho… Ele zomba da sua cara.',
            '— Cara, fala sério, você tá com medo de um cara entrando num beco escuro? Isso é totalmente normal onde a gente vem, ele só deve tar indo fumar sei lá…',
            'Isso não é o bastante para tirar sua preocupação, aquela mensagem foi estranha demais para não duvidar, e não deu para ver nenhuma luz de isqueiro ou cigarro ali.',
            'Ele pode estar esperando vocês. Você fala para João confiar em você e irem embora dali, mas logo ao terminar a frase, o encapuzado saiu do beco, junto de uma mulher, também encapuzada.',
            'Você consegue ver alguns relances do que seria o rosto deles, parecem estranhos, diferentes..',
        ],
        nextScene: 'p3_perseguicao',
    },

    p3_perseguicao: {
        id: 'p3_perseguicao',
        text: [
            'Eles se aproximam de vocês, um mal pressentimento faz você se arrepiar, eles estão se aproximando.',
            'Você fala para João o seguir, precisavam ir embora, ele concorda, mesmo sendo teimoso sabe o que tem que fazer nessas horas, a TV ensina muita coisa.',
            'Contudo, poucos metros depois, você percebe que eles estão seguindo vocês, a rua está deserta, a essa hora da noite é meio perigoso sair nas ruas, mesmo assim vocês estão lá.',
            'Andando apressadamente para se safar de um perigo que nem mesmo sabem o que é.',
            'Em meio a essa euforia, você percebe uma van se aproximando, é uma van preta, nada suspeito.',
            '— Eu não preciso nem dizer o que precisamos fazer, preciso? — disse João.',
            'Logo em seguida, vocês correm desesperadamente até o outro lado da rua, visando entrar em um beco, qualquer coisa.',
            'A van ligou assim que vocês começaram a correr, os encapuzados atrás de vocês começaram a correr, já não havia suspeitas, aquela mensagem era uma emboscada.',
            'Vocês adentram ao beco, os encapuzados também, é euforia demais para tentar compreender o porquê daquilo, mas vocês continuam correndo, até se depararem com o final do maldito beco.',
            '— Cara fala sério, isso é o que, um filme? Justo o único beco que tínhamos para entrar era sem saída, fala sério. — Disse João.',
            '— O que iremos fazer??',
            '— Reza para ser apenas um roubo normal…',
        ],
        nextScene: 'p3_captura',
    },

    p3_captura: {
        id: 'p3_captura',
        text: [
            'Os encapuzados alcançam vocês, eles estão mascarados e aparentemente armados, apontam armas na direção de vocês.',
            '— Entrem na van, sem gracinhas. Vamos. — diz a mulher encapuzada.',
            'Você e João sem opção, acompanham eles, um encapuzado segue a frente, e o outro vai atrás, eles continuam ameaçando atirar em vocês.',
            'Vão em direção a van na rua, ela já está aberta, outro encapuzado espera vocês na porta da van, junto com mais um no volante.',
            'Chegando na porta o encapuzado a espera de vocês algema vocês, e antes mesmo de João poder perguntar o que aquelas pessoas estranhas queriam, vocês são recebidos com coronhadas na nuca.',
            'Caem antes mesmo de entrar na van.',
            'Confuso se aquilo era realidade ou imaginação sua, você parece estar tendo flashes visuais…',
            'Você vê o interior da van, consegue ver 2 encapuzados conversando, e a voz de mais atrás de você, percebe que o veículo segue em movimento.',
            'Logo volta a apagar, mas tem mais flashes, vê cenas do veículo estacionar, e a porta de trás abrindo. Vê um encapuzado pegar João da van e se retirar.',
            'Logo em seguida sendo você, saindo da van, tem mais visões do que seria um lugar escuro com algumas construções espalhadas…',
            'Você sente muita dor na nuca para compreender e raciocionar tudo, tudo está muito turvo.',
            'Você apaga novamente.',
        ],
        nextScene: 'p3_despertar',
    },

    p3_despertar: {
        id: 'p3_despertar',
        text: [
            'Você desperta, tonto, com a visão turva, amarrado a uma pilastra fria. O corpo está pesado, e o ar cheira a umidade e ferro.',
            'Ao seu lado, João também está preso, respirando com dificuldade.',
            'À frente, uma fileira de figuras encapuzadas o observa em silêncio. O ambiente é escuro demais para distinguir o fundo, mas uma luz vermelha pulsa, distante, como o batimento de um coração.',
            'Você não entende o motivo de estar ali, nem o que eles pretendem fazer. Mas, no fundo, já sabe: não há escapatória.',
            'O destino foi selado no instante em que você foi ao beco sem pensar, sem plano, sem cautela.',
            'Uma escolha tola que agora cobra o preço mais alto.',
            'E então, na penumbra, com a respiração falhando e a presença dos encapuzados se aproximando, a certeza o atravessa como uma lâmina: nunca mais verá a luz do sol.',
        ],
        nextScene: 'p3_revelacao',
    },

    p3_revelacao: {
        id: 'p3_revelacao',
        text: [
            'Um cheiro estranho invade suas narinas, fortes, úmidas, desagradáveis, como mofo entranhado em paredes antigas.',
            'Você força a visão turva e percebe que os encapuzados à sua frente não são comuns. Mesmo escondidos sob capuzes e máscaras, há algo de errado em suas faces.',
            'Em meio às sombras, pedaços de pele se revelam: contornos tortos, marcas deformadas, quase inumanas.',
            'Por um instante, você tenta se convencer de que é apenas a tontura, um efeito do desmaio anterior. Mas não. Quanto mais observa, mais claro fica que aquilo não é ilusão.',
            'Um dos encapuzados se aproxima. Os passos ecoam no chão úmido até parar diante de você.',
            'Ele ergue o capuz apenas o suficiente para mostrar o rosto — e, dessa vez, não há como negar a verdade.',
            'O rosto não parecia mais humano, parecia ter acabado de sair de The Last Of Us.',
            'O cheiro de mofo e bolor se intensifica, enjoativo, sufocante.',
            'Antes que consiga reagir, a mão deformada o toca, e a escuridão o engole outra vez.',
            'Você desperta por um instante, sendo arrastado até a origem do brilho vermelho. Um círculo se revela diante de você, a estrela no centro pulsando como fogo.',
            'Gravando em chamas sua última lembrança. O cheiro de mofo, as vozes distantes, tudo se mistura na certeza amarga..',
            'Este é o fim. Sua vida se apaga junto àquele brilho, para nunca mais voltar…',
        ],
        ending: {
            type: 'secret',
            title: 'BAD - SECRET - ENDING',
            message: 'Você descobriu o segredo sombrio. Algumas verdades são melhor deixadas nas sombras.',
        },
    },
};

// Mapa de conquistas por ending
const ENDING_ACHIEVEMENTS = {
    'p1_morte_tiroteio': 'ending_tiroteio',
    'p1_padaria_morte': 'ending_padaria',
    'p1_qte_falha': 'ending_qte_fail',
    'p1_seguranca': 'ending_sequestro',
    'p1_alarme': 'ending_escape',
    'p2_final': 'ending_p2_bad',
    'p3_revelacao': 'ending_p3_secret',
};

// Definições de conquistas
const ACHIEVEMENTS = [
    {
        id: 'ending_tiroteio',
        title: '☠️ Vítima do Tiroteio',
        description: 'Morreu no tiroteio do mercado',
        unlocked: false
    },
    {
        id: 'ending_padaria',
        title: '🍞 Encontro Fatal na Padaria',
        description: 'Descobriu o segredo da padaria',
        unlocked: false
    },
    {
        id: 'ending_qte_fail',
        title: '⚠️ Reflexos Lentos',
        description: 'Falhou no momento crucial',
        unlocked: false
    },
    {
        id: 'ending_sequestro',
        title: '🚨 João Sequestrado',
        description: 'João foi capturado pelos encapuzados',
        unlocked: false
    },
    {
        id: 'ending_escape',
        title: '🏃 Fuga Bem-Sucedida',
        description: 'Escapou do mercado com João',
        unlocked: false
    },
    {
        id: 'ending_p2_bad',
        title: '🏠 Isolamento Fatal',
        description: 'O mal chegou até sua casa',
        unlocked: false
    },
    {
        id: 'ending_p3_secret',
        title: '👁️ A Verdade Oculta',
        description: 'Descobriu o segredo das criaturas',
        unlocked: false
    },
];
