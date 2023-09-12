const verbs = [
  {
    "infinitive": "abide",
    "pastSimple": "abode / abided",
    "pastParticiple": "abode / abided",
    "infinitivePronunciation": "[əˈbaɪd]",
    "pastSimplePronunciation": "[abode]",
    "pastParticiplePronunciation": "[əˈbəʊd]",
    "translation": "терпіти; дотримуватися чогось, бути вірним"
  },
  {
    "infinitive": "arise",
    "pastSimple": "arose",
    "pastParticiple": "arisen",
    "infinitivePronunciation": "[əˈraɪz]",
    "pastSimplePronunciation": "[əˈrəʊz]",
    "pastParticiplePronunciation": "[əˈrɪzn]",
    "translation": "виникати, підніматися"
  },
  {
    "infinitive": "awake",
    "pastSimple": "awaked / awoke",
    "pastParticiple": "awaked / awoken",
    "infinitivePronunciation": "[əˈweɪk]",
    "pastSimplePronunciation": "[əˈweɪkt / əˈwəʊk]",
    "pastParticiplePronunciation": "[əˈweɪkt / əˈwəʊkən]",
    "translation": "будити, викликати, прокидатися, розуміти"
  },
  {
    "infinitive": "backslide",
    "pastSimple": "backslid",
    "pastParticiple": "backslidden / backslid",
    "infinitivePronunciation": "[ˌbækˈslaɪd]",
    "pastSimplePronunciation": "[ˈbækˌslɪd]",
    "pastParticiplePronunciation": "[backslidden / ˈbækˌslɪd]",
    "translation": "відступатися від віри, знову вдаватися до пороку"
  },
  {
    "infinitive": "be",
    "pastSimple": "was, were",
    "pastParticiple": "been",
    "infinitivePronunciation": "[biː]",
    "pastSimplePronunciation": "[wɒz, wɜː]",
    "pastParticiplePronunciation": "[biːn]",
    "translation": "бути, існувати"
  },
  {
    "infinitive": "bear",
    "pastSimple": "bore / beared",
    "pastParticiple": "born / borne / beared",
    "infinitivePronunciation": "[beə]",
    "pastSimplePronunciation": "[bɔː / beəd]",
    "pastParticiplePronunciation": "[bɔːn / bɔːn / beəd]",
    "translation": "нести, виносити, тримати, мати почуття"
  },
  {
    "infinitive": "beat",
    "pastSimple": "beat",
    "pastParticiple": "beaten / beat",
    "infinitivePronunciation": "[biːt]",
    "pastSimplePronunciation": "[biːt]",
    "pastParticiplePronunciation": "[ˈbiːtn / biːt]",
    "translation": "бити, перемагати"
  },
  {
    "infinitive": "become",
    "pastSimple": "became",
    "pastParticiple": "become",
    "infinitivePronunciation": "[bɪˈkʌm]",
    "pastSimplePronunciation": "[bɪˈkeɪm]",
    "pastParticiplePronunciation": "[bɪˈkʌm]",
    "translation": "ставати, робитись"
  },
  {
    "infinitive": "befall",
    "pastSimple": "befell",
    "pastParticiple": "befallen",
    "infinitivePronunciation": "[bɪˈfɔːl]",
    "pastSimplePronunciation": "[bɪˈfɛl]",
    "pastParticiplePronunciation": "[bɪˈfɔːlən]",
    "translation": "траплятися, видаватися, випадати на долю"
  },
  {
    "infinitive": "begin",
    "pastSimple": "began",
    "pastParticiple": "begun",
    "infinitivePronunciation": "[bɪˈgɪn]",
    "pastSimplePronunciation": "[bɪˈgæn]",
    "pastParticiplePronunciation": "[bɪˈgʌn]",
    "translation": "починати"
  },
  {
    "infinitive": "behold",
    "pastSimple": "beheld",
    "pastParticiple": "beheld",
    "infinitivePronunciation": "[bɪˈhəʊld]",
    "pastSimplePronunciation": "[bɪˈhɛld]",
    "pastParticiplePronunciation": "[bɪˈhɛld]",
    "translation": "побачити, помітити, споглядати, спостерігати"
  },
  {
    "infinitive": "bend",
    "pastSimple": "bent",
    "pastParticiple": "bent",
    "infinitivePronunciation": "[bɛnd]",
    "pastSimplePronunciation": "[bɛnt]",
    "pastParticiplePronunciation": "[bɛnt]",
    "translation": "гнути, згинати"
  },
  {
    "infinitive": "bereave",
    "pastSimple": "bereft / bereaved",
    "pastParticiple": "bereft / bereaved",
    "infinitivePronunciation": "[bɪˈriːv]",
    "pastSimplePronunciation": "[bɪˈrɛft / bɪˈriːvd]",
    "pastParticiplePronunciation": "[bɪˈrɛft / bɪˈriːvd]",
    "translation": "позбавляти, віднімати, відбирати"
  },
  {
    "infinitive": "beseech",
    "pastSimple": "besought / beseeched",
    "pastParticiple": "besought / beseeched",
    "infinitivePronunciation": "[bɪˈsiːʧ]",
    "pastSimplePronunciation": "[bɪˈsɔːt]",
    "pastParticiplePronunciation": "[bɪˈsɔːt]",
    "translation": "просити, благати"
  },
  {
    "infinitive": "beset",
    "pastSimple": "beset ",
    "pastParticiple": "beset ",
    "infinitivePronunciation": "[bɪˈsɛt]",
    "pastSimplePronunciation": "[bɪˈsɛt]",
    "pastParticiplePronunciation": "[bɪˈsɛt]",
    "translation": "оточувати, осаджувати, перегороджувати"
  },
  {
    "infinitive": "bet",
    "pastSimple": "bet / betted ",
    "pastParticiple": "bet / betted ",
    "infinitivePronunciation": "[bɛt]",
    "pastSimplePronunciation": "[bɛt / ˈbɛtɪd]",
    "pastParticiplePronunciation": "[bɛt / ˈbɛtɪd]",
    "translation": "битися об заклад, бути впевненим"
  },
  {
    "infinitive": "bid",
    "pastSimple": "bid / bade",
    "pastParticiple": "bidden",
    "infinitivePronunciation": "[bɪd]",
    "pastSimplePronunciation": "[bɪd / beɪd]",
    "pastParticiplePronunciation": "[ˈbɪdn]",
    "translation": "запрошувати, вітати, прощатися"
  },
  {
    "infinitive": "bid",
    "pastSimple": "bid",
    "pastParticiple": "bid",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "пропонувати ціну, брати участь, просити"
  },
  {
    "infinitive": "bide",
    "pastSimple": "bode / bided",
    "pastParticiple": "bided",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "вичікувати, терпіти, проживати, знаходитися"
  },
  {
    "infinitive": "bind",
    "pastSimple": "bound",
    "pastParticiple": "bound",
    "infinitivePronunciation": "[baɪnd]",
    "pastSimplePronunciation": "[baʊnd]",
    "pastParticiplePronunciation": "[baʊnd]",
    "translation": "зв\\'язувати, пов\\'язувати, скріплювати"
  },
  {
    "infinitive": "bite",
    "pastSimple": "bit",
    "pastParticiple": "bitten",
    "infinitivePronunciation": "[baɪt]",
    "pastSimplePronunciation": "[bɪt]",
    "pastParticiplePronunciation": "[ˈbɪtn]",
    "translation": "кусати, клювати, жалити"
  },
  {
    "infinitive": "bleed",
    "pastSimple": "bled",
    "pastParticiple": "bled",
    "infinitivePronunciation": "[bliːd]",
    "pastSimplePronunciation": "[blɛd]",
    "pastParticiplePronunciation": "[blɛd]",
    "translation": "кровоточити, спливати кров\\'ю"
  },
  {
    "infinitive": "bless",
    "pastSimple": "blessed / blest",
    "pastParticiple": "blessed / blest",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "благословляти, освячувати, перехрестити"
  },
  {
    "infinitive": "blow",
    "pastSimple": "blew",
    "pastParticiple": "blown",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "дути, видувати, віяти, вибухати"
  },
  {
    "infinitive": "break",
    "pastSimple": "broke",
    "pastParticiple": "broken",
    "infinitivePronunciation": "[breɪk]",
    "pastSimplePronunciation": "[brəʊk]",
    "pastParticiplePronunciation": "[ˈbrəʊkən]",
    "translation": "ламати, переривати, розбивати"
  },
  {
    "infinitive": "breed",
    "pastSimple": "bred",
    "pastParticiple": "bred",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "розводити, виховувати, розмножуватися, плодитися"
  },
  {
    "infinitive": "bring",
    "pastSimple": "brought",
    "pastParticiple": "brought",
    "infinitivePronunciation": "[brɪŋ]",
    "pastSimplePronunciation": "[brɔːt]",
    "pastParticiplePronunciation": "[brɔːt]",
    "translation": "приносити, приводити, доводити"
  },
  {
    "infinitive": "broadcast",
    "pastSimple": "broadcast / broadcasted",
    "pastParticiple": "broadcast / broadcasted",
    "infinitivePronunciation": "[ˈbrɔːdkɑːst]",
    "pastSimplePronunciation": "[ˈbrɔːdkɑːst / ˈbrɔːdkɑːstɪd]",
    "pastParticiplePronunciation": "[ˈbrɔːdkɑːst / ˈbrɔːdkɑːstɪd]",
    "translation": "віщати, поширювати, передавати по радіо / телебаченню"
  },
  {
    "infinitive": "build",
    "pastSimple": "built",
    "pastParticiple": "built",
    "infinitivePronunciation": "[bɪld]",
    "pastSimplePronunciation": "[bɪlt]",
    "pastParticiplePronunciation": "[bɪlt]",
    "translation": "будувати, споруджувати"
  },
  {
    "infinitive": "burn",
    "pastSimple": "burned / burnt",
    "pastParticiple": "burned / burnt",
    "infinitivePronunciation": "[bɜːn]",
    "pastSimplePronunciation": "[ bɜːnd / bɜːnt]",
    "pastParticiplePronunciation": "[bɜːnd / bɜːnt]",
    "translation": "горіти, спалювати"
  },
  {
    "infinitive": "burst",
    "pastSimple": "burst",
    "pastParticiple": "burst",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "вибухати, розриватися, виникати, бути переповненим"
  },
  {
    "infinitive": "bust",
    "pastSimple": "busted / bust",
    "pastParticiple": "busted / bust",
    "infinitivePronunciation": "[bʌst]",
    "pastSimplePronunciation": "[ˈbʌstɪd / bʌst]",
    "pastParticiplePronunciation": "[ˈbʌstɪd / bʌst]",
    "translation": "зламати, руйнувати, розоритися, бити"
  },
  {
    "infinitive": "buy",
    "pastSimple": "bought",
    "pastParticiple": "bought",
    "infinitivePronunciation": "[baɪ]",
    "pastSimplePronunciation": "[bɔːt]",
    "pastParticiplePronunciation": "[bɔːt]",
    "translation": "купувати"
  },
  {
    "infinitive": "cast",
    "pastSimple": "cast",
    "pastParticiple": "cast",
    "infinitivePronunciation": "[kɑːst]",
    "pastSimplePronunciation": "[kɑːst]",
    "pastParticiplePronunciation": "[kɑːst]",
    "translation": "кидати, відкидати, звільнити, відливати метал"
  },
  {
    "infinitive": "catch",
    "pastSimple": "caught",
    "pastParticiple": "caught",
    "infinitivePronunciation": "[kæʧ]",
    "pastSimplePronunciation": "[kɔːt]",
    "pastParticiplePronunciation": "[kɔːt]",
    "translation": "зловити, ловити, наздогнати"
  },
  {
    "infinitive": "chide",
    "pastSimple": "chided / chid",
    "pastParticiple": "chided / chid / chidden",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "сварити, дорікати, бурчати, ревіти"
  },
  {
    "infinitive": "choose",
    "pastSimple": "chose",
    "pastParticiple": "chosen",
    "infinitivePronunciation": "[ʧuːz]",
    "pastSimplePronunciation": "[ʧəʊz]",
    "pastParticiplePronunciation": "[ˈʧəʊzn]",
    "translation": "вибирати"
  },
  {
    "infinitive": "cleave",
    "pastSimple": "klɛft / kləʊv",
    "pastParticiple": "klɛft / ˈkləʊvn",
    "infinitivePronunciation": "[cleft / clove]",
    "pastSimplePronunciation": "[cleft / cloven ]",
    "pastParticiplePronunciation": "[klɛft / ˈkləʊvn]",
    "translation": "розколювати, розсікати"
  },
  {
    "infinitive": "cling",
    "pastSimple": "clung",
    "pastParticiple": "clung",
    "infinitivePronunciation": "[klɪŋ]",
    "pastSimplePronunciation": "[klʌŋ]",
    "pastParticiplePronunciation": "[klʌŋ]",
    "translation": "чіплятися, триматися, липнути"
  },
  {
    "infinitive": "clothe",
    "pastSimple": "clothed / clad",
    "pastParticiple": "clothed / clad",
    "infinitivePronunciation": "[kləʊð]",
    "pastSimplePronunciation": "[kləʊðd / klæd]",
    "pastParticiplePronunciation": "[kləʊðd / klæd]",
    "translation": "одягнути, одягати, висловлювати, обдаровувати"
  },
  {
    "infinitive": "come",
    "pastSimple": "came",
    "pastParticiple": "come",
    "infinitivePronunciation": "[kʌm]",
    "pastSimplePronunciation": "[keɪm]",
    "pastParticiplePronunciation": "[kʌm]",
    "translation": "приходити"
  },
  {
    "infinitive": "cost",
    "pastSimple": "cost",
    "pastParticiple": "cost",
    "infinitivePronunciation": "[kɒst]",
    "pastSimplePronunciation": "[kɒst]",
    "pastParticiplePronunciation": "[kɒst]",
    "translation": "оцінювати, коштувати"
  },
  {
    "infinitive": "creep",
    "pastSimple": "crept",
    "pastParticiple": "crept",
    "infinitivePronunciation": "[kriːp]",
    "pastSimplePronunciation": "[krɛpt]",
    "pastParticiplePronunciation": "[krɛpt]",
    "translation": "повзати, крастися, охоплювати, наводити жах"
  },
  {
    "infinitive": "crossbreed",
    "pastSimple": "crossbred",
    "pastParticiple": "crossbred",
    "infinitivePronunciation": "[ˈkrɒsbriːd]",
    "pastSimplePronunciation": "[ˈkrɒsbrɛd]",
    "pastParticiplePronunciation": "[ˈkrɒsbrɛd]",
    "translation": "схрещувати"
  },
  {
    "infinitive": "cut",
    "pastSimple": "cut",
    "pastParticiple": "cut",
    "infinitivePronunciation": "[kʌt]",
    "pastSimplePronunciation": "[kʌt]",
    "pastParticiplePronunciation": "[kʌt]",
    "translation": "різати, обрізати"
  },
  {
    "infinitive": "dare",
    "pastSimple": "durst ",
    "pastParticiple": "dared ",
    "infinitivePronunciation": "[deə]",
    "pastSimplePronunciation": "[dɜːst]",
    "pastParticiplePronunciation": "[deəd]",
    "translation": "сміти, кидати виклик, ризикувати"
  },
  {
    "infinitive": "daydream",
    "pastSimple": "daydreamed / daydreamt",
    "pastParticiple": "daydreamed / daydreamt",
    "infinitivePronunciation": "[ˈdeɪˌdriːm]",
    "pastSimplePronunciation": "[ˈdeɪˌdriːmd / daydreamt]",
    "pastParticiplePronunciation": "[ˈdeɪˌdriːmd / daydreamt]",
    "translation": "марити, мріяти, фантазувати"
  },
  {
    "infinitive": "deal",
    "pastSimple": "dealt ",
    "pastParticiple": "dealt",
    "infinitivePronunciation": "[diːl ]",
    "pastSimplePronunciation": "[dɛlt]",
    "pastParticiplePronunciation": "[dɛlt]",
    "translation": "мати справу, торгувати, розглядати питання"
  },
  {
    "infinitive": "dig",
    "pastSimple": "dug",
    "pastParticiple": "dug",
    "infinitivePronunciation": "[dɪg]",
    "pastSimplePronunciation": "[dʌg]",
    "pastParticiplePronunciation": "[dʌg]",
    "translation": "копати, рити, шукати"
  },
  {
    "infinitive": "disprove",
    "pastSimple": "disproved",
    "pastParticiple": "disproved / disproven",
    "infinitivePronunciation": "[ˌdɪsˈpruːv]",
    "pastSimplePronunciation": "[ˌdɪsˈpruːvd]",
    "pastParticiplePronunciation": "[ˌdɪsˈpruːvd / disproven]",
    "translation": "спростовувати, доводити хибність"
  },
  {
    "infinitive": "dive",
    "pastSimple": "dove / dived",
    "pastParticiple": "dived",
    "infinitivePronunciation": "[daɪv]",
    "pastSimplePronunciation": "[dʌv / daɪvd]",
    "pastParticiplePronunciation": "[daɪvd]",
    "translation": "пірнати, стрибати вниз, занурюватися"
  },
  {
    "infinitive": "do",
    "pastSimple": "did",
    "pastParticiple": "done",
    "infinitivePronunciation": "[duː]",
    "pastSimplePronunciation": "[dɪd]",
    "pastParticiplePronunciation": "[dʌn]",
    "translation": "робити, виконувати"
  },
  {
    "infinitive": "draw",
    "pastSimple": "drew",
    "pastParticiple": "drawn",
    "infinitivePronunciation": "[drɔː]",
    "pastSimplePronunciation": "[druː]",
    "pastParticiplePronunciation": "[drɔːn]",
    "translation": "креслити, малювати, уявляти; тягти, волочити"
  },
  {
    "infinitive": "dream",
    "pastSimple": "dreamed / dreamt",
    "pastParticiple": "dreamed / dreamt",
    "infinitivePronunciation": "[driːm]",
    "pastSimplePronunciation": "[driːmd / drɛmt]",
    "pastParticiplePronunciation": "[driːmd / drɛmt]",
    "translation": "бачити сни, мріяти"
  },
  {
    "infinitive": "drink",
    "pastSimple": "drank",
    "pastParticiple": "drunk",
    "infinitivePronunciation": "[drɪŋk]",
    "pastSimplePronunciation": "[dræŋk]",
    "pastParticiplePronunciation": "[drunk]",
    "translation": "пити, випивати"
  },
  {
    "infinitive": "drive",
    "pastSimple": "drove",
    "pastParticiple": "driven",
    "infinitivePronunciation": "[draɪv]",
    "pastSimplePronunciation": "[drəʊv]",
    "pastParticiplePronunciation": "[ˈdrɪvn]",
    "translation": "водити (машину), управляти, їздити"
  },
  {
    "infinitive": "dwell",
    "pastSimple": "dwelt / dwelled",
    "pastParticiple": "dwelt / dwelled",
    "infinitivePronunciation": "[dwɛl]",
    "pastSimplePronunciation": "[dwɛlt / dwɛld]",
    "pastParticiplePronunciation": "[dwɛlt / dwɛld]",
    "translation": "жити, мешкати, перебувати, зупинятися (десь)"
  },
  {
    "infinitive": "eat",
    "pastSimple": "ate",
    "pastParticiple": "eaten",
    "infinitivePronunciation": "[iːt]",
    "pastSimplePronunciation": "[ɛt]",
    "pastParticiplePronunciation": "[ˈiːtn]",
    "translation": "їсти, харчуватися, роз\\'їдати"
  },
  {
    "infinitive": "fall",
    "pastSimple": "fell",
    "pastParticiple": "fallen",
    "infinitivePronunciation": "[fɔːl]",
    "pastSimplePronunciation": "[fɛl]",
    "pastParticiplePronunciation": "[ˈfɔːlən]",
    "translation": "падати, опадати, опускатися"
  },
  {
    "infinitive": "feed",
    "pastSimple": "fed",
    "pastParticiple": "fed",
    "infinitivePronunciation": "[fiːd]",
    "pastSimplePronunciation": "[fɛd]",
    "pastParticiplePronunciation": "[fɛd]",
    "translation": "годувати"
  },
  {
    "infinitive": "feel",
    "pastSimple": "felt",
    "pastParticiple": "felt",
    "infinitivePronunciation": "[fiːl]",
    "pastSimplePronunciation": "[fɛlt]",
    "pastParticiplePronunciation": "[fɛlt]",
    "translation": "відчувати"
  },
  {
    "infinitive": "fight",
    "pastSimple": "fought",
    "pastParticiple": "fought",
    "infinitivePronunciation": "[faɪt]",
    "pastSimplePronunciation": "[fɔːt]",
    "pastParticiplePronunciation": "[fɔːt]",
    "translation": "боротися, битися"
  },
  {
    "infinitive": "find",
    "pastSimple": "found",
    "pastParticiple": "found",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "знаходити, натрапити, виявляти"
  },
  {
    "infinitive": "fit",
    "pastSimple": "fitted / fit",
    "pastParticiple": "fitted / fit",
    "infinitivePronunciation": "[fɪt]",
    "pastSimplePronunciation": "[ˈfɪtɪd / fɪt]",
    "pastParticiplePronunciation": "[ˈfɪtɪd / fɪt]",
    "translation": "підганяти, прилаштовувати, пристосовувати, оснащувати"
  },
  {
    "infinitive": "flee",
    "pastSimple": "fled",
    "pastParticiple": "fled",
    "infinitivePronunciation": "[fliː]",
    "pastSimplePronunciation": "[flɛd]",
    "pastParticiplePronunciation": "[flɛd]",
    "translation": "бігти, тікати, рятуватися втечею"
  },
  {
    "infinitive": "fling",
    "pastSimple": "flung",
    "pastParticiple": "flung",
    "infinitivePronunciation": "[flɪŋ]",
    "pastSimplePronunciation": "[flʌŋ]",
    "pastParticiplePronunciation": "[flʌŋ]",
    "translation": "кидати, кидати"
  },
  {
    "infinitive": "fly",
    "pastSimple": "flew",
    "pastParticiple": "flown",
    "infinitivePronunciation": "[flaɪ]",
    "pastSimplePronunciation": "[fluː]",
    "pastParticiplePronunciation": "[fləʊn]",
    "translation": "літати, пролітати"
  },
  {
    "infinitive": "forbear",
    "pastSimple": "forbore",
    "pastParticiple": "forborne",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "утримуватися, терпіти, переносити"
  },
  {
    "infinitive": "forbid",
    "pastSimple": "forbade",
    "pastParticiple": "forbidden",
    "infinitivePronunciation": "[fəˈbɪd]",
    "pastSimplePronunciation": "[fəˈbeɪd]",
    "pastParticiplePronunciation": "[fəˈbɪdn]",
    "translation": "забороняти"
  },
  {
    "infinitive": "forecast",
    "pastSimple": "forecast",
    "pastParticiple": "forecast",
    "infinitivePronunciation": "[ˈfɔːkɑːst]",
    "pastSimplePronunciation": "[ˈfɔːkɑːst]",
    "pastParticiplePronunciation": "[ˈfɔːkɑːst]",
    "translation": "прогнозувати, передбачати"
  },
  {
    "infinitive": "forego",
    "pastSimple": "forewent",
    "pastParticiple": "foregone",
    "infinitivePronunciation": "[fɔːˈgəʊ]",
    "pastSimplePronunciation": "[fɔːˈwɛnt]",
    "pastParticiplePronunciation": "[fɔːˈgɒn]",
    "translation": "передувати, йти попереду"
  },
  {
    "infinitive": "foresee",
    "pastSimple": "foresaw",
    "pastParticiple": "foreseen",
    "infinitivePronunciation": "[fɔːˈsiː]",
    "pastSimplePronunciation": "[fɔːˈsɔː]",
    "pastParticiplePronunciation": "[fɔːˈsiːn]",
    "translation": "передбачати, знати заздалегідь"
  },
  {
    "infinitive": "foretell",
    "pastSimple": "foretold",
    "pastParticiple": "foretold",
    "infinitivePronunciation": "[fɔːˈtɛl]",
    "pastSimplePronunciation": "[fɔːˈtəʊld]",
    "pastParticiplePronunciation": "[fɔːˈtəʊld]",
    "translation": "передбачати, прогнозувати"
  },
  {
    "infinitive": "forget",
    "pastSimple": "forgot",
    "pastParticiple": "forgotten / forgot",
    "infinitivePronunciation": "[fəˈgɛt]",
    "pastSimplePronunciation": "[fəˈgɒt]",
    "pastParticiplePronunciation": "[fəˈgɒtn / fəˈgɒt]",
    "translation": "забувати"
  },
  {
    "infinitive": "forgive",
    "pastSimple": "forgave",
    "pastParticiple": "forgiven",
    "infinitivePronunciation": "[fəˈgɪv]",
    "pastSimplePronunciation": "[fəˈgeɪv]",
    "pastParticiplePronunciation": "[fəˈgɪvn]",
    "translation": "прощати, забути (борг)"
  },
  {
    "infinitive": "forgo",
    "pastSimple": "forwent",
    "pastParticiple": "forgone",
    "infinitivePronunciation": "[fɔːˈgəʊ]",
    "pastSimplePronunciation": "[fɔːˈwɛnt]",
    "pastParticiplePronunciation": "[fɔːˈgɒn]",
    "translation": "відмовлятися, утримуватися"
  },
  {
    "infinitive": "forsake",
    "pastSimple": "forsook",
    "pastParticiple": "forsaken",
    "infinitivePronunciation": "[fəˈseɪk]",
    "pastSimplePronunciation": "[fəˈsʊk]",
    "pastParticiplePronunciation": "[fəˈseɪkən]",
    "translation": "кидати, залишати, відмовлятися"
  },
  {
    "infinitive": "forswear",
    "pastSimple": "forswore",
    "pastParticiple": "forsworn",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "зрікатися, відмовлятися, відкидати"
  },
  {
    "infinitive": "freeze",
    "pastSimple": "froze",
    "pastParticiple": "frozen",
    "infinitivePronunciation": "[friːz]",
    "pastSimplePronunciation": "[frəʊz]",
    "pastParticiplePronunciation": "[ˈfrəʊzn]",
    "translation": "замерзати, заморожувати"
  },
  {
    "infinitive": "frostbite",
    "pastSimple": "frostbit",
    "pastParticiple": "frostbitten",
    "infinitivePronunciation": "[ˈfrɒstbaɪt]",
    "pastSimplePronunciation": "[frostbit]",
    "pastParticiplePronunciation": "[ˈfrɒstˌbɪtn]",
    "translation": "обморозити, відморозити"
  },
  {
    "infinitive": "get",
    "pastSimple": "got",
    "pastParticiple": "gotten / got",
    "infinitivePronunciation": "[gɛt]",
    "pastSimplePronunciation": "[gɒt]",
    "pastParticiplePronunciation": "[ˈgɒtn / gɒt]",
    "translation": "отримувати, ставати"
  },
  {
    "infinitive": "gild",
    "pastSimple": "gilded / gilt",
    "pastParticiple": "gilded / gilt",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "золотити, покривати позолотою, прикрашати"
  },
  {
    "infinitive": "give",
    "pastSimple": "gave",
    "pastParticiple": "given",
    "infinitivePronunciation": "[gɪv]",
    "pastSimplePronunciation": "[geɪv]",
    "pastParticiplePronunciation": "[ˈgɪvn]",
    "translation": "давати"
  },
  {
    "infinitive": "go",
    "pastSimple": "went",
    "pastParticiple": "gone",
    "infinitivePronunciation": "[gəʊ]",
    "pastSimplePronunciation": "[wɛnt]",
    "pastParticiplePronunciation": "[gɒn]",
    "translation": "йти, їхати"
  },
  {
    "infinitive": "grind",
    "pastSimple": "ground",
    "pastParticiple": "ground",
    "infinitivePronunciation": "[graɪnd]",
    "pastSimplePronunciation": "[graʊnd]",
    "pastParticiplePronunciation": "[graʊnd]",
    "translation": "молоти, розтерти, шліфувати, точити"
  },
  {
    "infinitive": "grow",
    "pastSimple": "grew",
    "pastParticiple": "grown",
    "infinitivePronunciation": "[ grəʊ]",
    "pastSimplePronunciation": "[gruː]",
    "pastParticiplePronunciation": "[grəʊn]",
    "translation": "рости, вирощувати"
  },
  {
    "infinitive": "hand-feed",
    "pastSimple": "hand-fed",
    "pastParticiple": "hand-fed",
    "infinitivePronunciation": "[hænd-fiːd]",
    "pastSimplePronunciation": "[hænd-fɛd]",
    "pastParticiplePronunciation": "[hænd-fɛd]",
    "translation": "годувати, давати з рук"
  },
  {
    "infinitive": "handwrite",
    "pastSimple": "handwrote",
    "pastParticiple": "handwritten",
    "infinitivePronunciation": "[handwrite]",
    "pastSimplePronunciation": "[handwrote]",
    "pastParticiplePronunciation": "[ˌhændˈrɪt(ə)n]",
    "translation": "писати від руки"
  },
  {
    "infinitive": "hang",
    "pastSimple": "hung",
    "pastParticiple": "hung",
    "infinitivePronunciation": "[hang]",
    "pastSimplePronunciation": "[hʌŋ]",
    "pastParticiplePronunciation": "[hʌŋ]",
    "translation": "висіти, вішати"
  },
  {
    "infinitive": "have",
    "pastSimple": "had",
    "pastParticiple": "had",
    "infinitivePronunciation": "[hæv]",
    "pastSimplePronunciation": "[hæd]",
    "pastParticiplePronunciation": "[hæd]",
    "translation": "мати, володіти"
  },
  {
    "infinitive": "hear",
    "pastSimple": "heard",
    "pastParticiple": "heard",
    "infinitivePronunciation": "[hɪə]",
    "pastSimplePronunciation": "[hɜːd]",
    "pastParticiplePronunciation": "[hɜːd]",
    "translation": "чути, слухати"
  },
  {
    "infinitive": "heave",
    "pastSimple": "heaved / hove",
    "pastParticiple": "heaved / hove",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "піднімати, кидати, рухати, випускати, здійматися"
  },
  {
    "infinitive": "hew",
    "pastSimple": "hewed",
    "pastParticiple": "hewn / hewed",
    "infinitivePronunciation": "[hjuː]",
    "pastSimplePronunciation": "[hjuːd]",
    "pastParticiplePronunciation": "[hjuːn / hjuːd]",
    "translation": "рубати, тесати, відбувати, узгоджуватися, дотримуватися"
  },
  {
    "infinitive": "hide",
    "pastSimple": "hid",
    "pastParticiple": "hidden",
    "infinitivePronunciation": "[haɪd]",
    "pastSimplePronunciation": "[hɪd]",
    "pastParticiplePronunciation": "[ˈhɪdn]",
    "translation": "ховати, ховатися"
  },
  {
    "infinitive": "hit",
    "pastSimple": "hit",
    "pastParticiple": "hit",
    "infinitivePronunciation": "[hɪt]",
    "pastSimplePronunciation": "[hɪt]",
    "pastParticiplePronunciation": "[hɪt]",
    "translation": "ударяти, вражати, попадати, натрапити, досягати"
  },
  {
    "infinitive": "hold",
    "pastSimple": "held",
    "pastParticiple": "held",
    "infinitivePronunciation": "[həʊld]",
    "pastSimplePronunciation": "[hɛld]",
    "pastParticiplePronunciation": "[hɛld]",
    "translation": "займати, тримати, утримувати"
  },
  {
    "infinitive": "hurt",
    "pastSimple": "hurt",
    "pastParticiple": "hurt",
    "infinitivePronunciation": "[hɜːt]",
    "pastSimplePronunciation": "[hɜːt]",
    "pastParticiplePronunciation": "[hɜːt]",
    "translation": "пошкодити, заподіювати біль, кривдити, поранити"
  },
  {
    "infinitive": "inbreed",
    "pastSimple": "inbred",
    "pastParticiple": "inbred",
    "infinitivePronunciation": "[inbreed]",
    "pastSimplePronunciation": "[ˌɪnˈbrɛd]",
    "pastParticiplePronunciation": "[ˌɪnˈbrɛd]",
    "translation": "вирощувати, виховувати щось в когось"
  },
  {
    "infinitive": "inlay",
    "pastSimple": "inlaid",
    "pastParticiple": "inlaid",
    "infinitivePronunciation": "[ˈɪnleɪ]",
    "pastSimplePronunciation": "[ɪnˈleɪd]",
    "pastParticiplePronunciation": "[ɪnˈleɪd]",
    "translation": "інкрустувати, робити вставку"
  },
  {
    "infinitive": "input",
    "pastSimple": " input / inputted",
    "pastParticiple": "input / inputted",
    "infinitivePronunciation": "[ˈɪnpʊt]",
    "pastSimplePronunciation": "[ˈɪnpʊt / ˈɪnpʊtɪd]",
    "pastParticiplePronunciation": "[ˈɪnpʊt / ˈɪnpʊtɪd]",
    "translation": "ввести, вводити (дані), вкладати (гроші)"
  },
  {
    "infinitive": "interbreed",
    "pastSimple": "interbred",
    "pastParticiple": "interbred",
    "infinitivePronunciation": "[ˌɪntə(ː)ˈbriːd]",
    "pastSimplePronunciation": "[interbred]",
    "pastParticiplePronunciation": "[interbred]",
    "translation": "схрещувати, схрещуватися"
  },
  {
    "infinitive": "interweave",
    "pastSimple": "interwove / interweaved",
    "pastParticiple": "interwoven / interweaved",
    "infinitivePronunciation": "[ˌɪntə(ː)ˈwiːv]",
    "pastSimplePronunciation": "[ˌɪntə(ː)ˈwəʊv / ˌɪntə(ː)ˈwiːvd]",
    "pastParticiplePronunciation": "[ˌɪntə(ː)ˈwəʊən / ˌɪntə(ː)ˈwiːvd]",
    "translation": "заткати, вплітати, переплітати, змішувати"
  },
  {
    "infinitive": "interwind",
    "pastSimple": "interwound",
    "pastParticiple": "interwound",
    "infinitivePronunciation": "[interwind]",
    "pastSimplePronunciation": "[interwound]",
    "pastParticiplePronunciation": "[interwound]",
    "translation": "переплітати, перемотувати"
  },
  {
    "infinitive": "jerry-build",
    "pastSimple": "jerry-built",
    "pastParticiple": "jerry-built",
    "infinitivePronunciation": "[ˈʤɛri-bɪld]",
    "pastSimplePronunciation": "[ˈʤɛrɪbɪlt]",
    "pastParticiplePronunciation": "[ˈʤɛrɪbɪlt]",
    "translation": "будувати халтурно, нашвидкуруч"
  },
  {
    "infinitive": "keep",
    "pastSimple": "kept",
    "pastParticiple": "kept",
    "infinitivePronunciation": "[kiːp]",
    "pastSimplePronunciation": "[kɛpt]",
    "pastParticiplePronunciation": "[kɛpt]",
    "translation": "тримати, зберігати, залишати, утримувати"
  },
  {
    "infinitive": "kneel",
    "pastSimple": "knelt / kneeled",
    "pastParticiple": "knelt / kneeled",
    "infinitivePronunciation": "[niːl]",
    "pastSimplePronunciation": "[nɛlt / niːld]",
    "pastParticiplePronunciation": "[nɛlt / niːld]",
    "translation": "ставати на коліна, схиляти коліна"
  },
  {
    "infinitive": "knit",
    "pastSimple": "knitted / knit",
    "pastParticiple": "knitted / knit",
    "infinitivePronunciation": "[nɪt]",
    "pastSimplePronunciation": "[ˈnɪtɪd / nɪt]",
    "pastParticiplePronunciation": "[ˈnɪtɪd / nɪt]",
    "translation": "в\\'язати, штопати"
  },
  {
    "infinitive": "know",
    "pastSimple": "knew",
    "pastParticiple": "known",
    "infinitivePronunciation": "[nəʊ]",
    "pastSimplePronunciation": "[njuː]",
    "pastParticiplePronunciation": "[nəʊn]",
    "translation": "знати, вміти, бути знайомим"
  },
  {
    "infinitive": "lay",
    "pastSimple": "laid",
    "pastParticiple": "laid",
    "infinitivePronunciation": "[leɪ]",
    "pastSimplePronunciation": "[leɪd]",
    "pastParticiplePronunciation": "[leɪd]",
    "translation": "класти, валити, накривати"
  },
  {
    "infinitive": "lead",
    "pastSimple": "led",
    "pastParticiple": "led",
    "infinitivePronunciation": "[liːd]",
    "pastSimplePronunciation": "[lɛd]",
    "pastParticiplePronunciation": "[lɛd]",
    "translation": "вести, очолювати, супроводжувати"
  },
  {
    "infinitive": "lean",
    "pastSimple": "leaned / leant ",
    "pastParticiple": " leaned / leant ",
    "infinitivePronunciation": "[liːn]",
    "pastSimplePronunciation": "[liːnd / lɛnt]",
    "pastParticiplePronunciation": "[liːnd / lɛnt]",
    "translation": "спиратися, нахилятися, притулятися"
  },
  {
    "infinitive": "leap",
    "pastSimple": "leaped / leapt",
    "pastParticiple": "leaped / leapt",
    "infinitivePronunciation": "[liːp]",
    "pastSimplePronunciation": "[liːpt / lɛpt]",
    "pastParticiplePronunciation": "[liːpt / lɛpt]",
    "translation": "стрибати, скакати"
  },
  {
    "infinitive": "learn",
    "pastSimple": "learned / learnt",
    "pastParticiple": "learned / learnt",
    "infinitivePronunciation": "[lɜːn]",
    "pastSimplePronunciation": "[lɜːnt / lɜːnt]",
    "pastParticiplePronunciation": "[lɜːnt / lɜːnt]",
    "translation": "вчитися, дізнаватися"
  },
  {
    "infinitive": "leave",
    "pastSimple": "left",
    "pastParticiple": "left",
    "infinitivePronunciation": "[liːv]",
    "pastSimplePronunciation": "[lɛft]",
    "pastParticiplePronunciation": "[lɛft]",
    "translation": "залишати, кидати, лишити, піти їхати"
  },
  {
    "infinitive": "lend",
    "pastSimple": "lent",
    "pastParticiple": "lent",
    "infinitivePronunciation": "[lɛnd]",
    "pastSimplePronunciation": "[lɛnt]",
    "pastParticiplePronunciation": "[lɛnt]",
    "translation": "позичати, давати на час"
  },
  {
    "infinitive": "let",
    "pastSimple": "let",
    "pastParticiple": "let",
    "infinitivePronunciation": "[lɛt]",
    "pastSimplePronunciation": "[lɛt]",
    "pastParticiplePronunciation": "[lɛt]",
    "translation": "дозволяти, допускати, випускати, проливати"
  },
  {
    "infinitive": "lie",
    "pastSimple": "lay",
    "pastParticiple": "lain",
    "infinitivePronunciation": "[laɪ]",
    "pastSimplePronunciation": "[leɪ]",
    "pastParticiplePronunciation": "[leɪn]",
    "translation": "лежати, розташуватися, перебувати, знаходитися"
  },
  {
    "infinitive": "light",
    "pastSimple": "lit / lighted",
    "pastParticiple": "lit / lighted",
    "infinitivePronunciation": "[laɪt]",
    "pastSimplePronunciation": "[lɪt / ˈlaɪtɪd]",
    "pastParticiplePronunciation": "[lɪt / ˈlaɪtɪd]",
    "translation": "світити, запалювати, світитися, опромінювати, натрапити, обрушитися"
  },
  {
    "infinitive": "lip-read",
    "pastSimple": "lip-read",
    "pastParticiple": "lip-read",
    "infinitivePronunciation": "[ˈlɪpriːd]",
    "pastSimplePronunciation": "[ˈlɪpriːd]",
    "pastParticiplePronunciation": "[ˈlɪpriːd]",
    "translation": "читати з губ, розуміти по губах"
  },
  {
    "infinitive": "lose",
    "pastSimple": "lost",
    "pastParticiple": "lost",
    "infinitivePronunciation": "[luːz]",
    "pastSimplePronunciation": "[lɒst]",
    "pastParticiplePronunciation": "[lɒst]",
    "translation": "втрачати, губити, позбавлятися, пропадати"
  },
  {
    "infinitive": "make",
    "pastSimple": "made",
    "pastParticiple": "made",
    "infinitivePronunciation": "[ meɪk]",
    "pastSimplePronunciation": "[meɪd]",
    "pastParticiplePronunciation": "[meɪd]",
    "translation": "робити, виробляти, здійснювати"
  },
  {
    "infinitive": "mean",
    "pastSimple": "meant",
    "pastParticiple": "meant",
    "infinitivePronunciation": "[miːn]",
    "pastSimplePronunciation": "[mɛnt]",
    "pastParticiplePronunciation": "[mɛnt]",
    "translation": "означати, мати на увазі"
  },
  {
    "infinitive": "meet",
    "pastSimple": "met",
    "pastParticiple": "met",
    "infinitivePronunciation": "[miːt]",
    "pastSimplePronunciation": "[mɛt]",
    "pastParticiplePronunciation": "[mɛt]",
    "translation": "зустрічати, знайомитися"
  },
  {
    "infinitive": "miscast",
    "pastSimple": "miscast",
    "pastParticiple": "miscast",
    "infinitivePronunciation": "[mɪsˈkɑːst]",
    "pastSimplePronunciation": "[mɪsˈkɑːst]",
    "pastParticiplePronunciation": "[mɪsˈkɑːst]",
    "translation": "неправильно розподіляти ролі"
  },
  {
    "infinitive": "misdeal",
    "pastSimple": "misdealt",
    "pastParticiple": "misdealt",
    "infinitivePronunciation": "[ˌmɪsˈdiːl]",
    "pastSimplePronunciation": "[ˌmɪsˈdɛlt]",
    "pastParticiplePronunciation": "[ˌmɪsˈdɛlt]",
    "translation": "чинити, поводитися неправильно, помилятися при здачі (карт)"
  },
  {
    "infinitive": "misdo",
    "pastSimple": "misdid",
    "pastParticiple": "misdone",
    "infinitivePronunciation": "[misdo]",
    "pastSimplePronunciation": "[misdid]",
    "pastParticiplePronunciation": "[misdone]",
    "translation": "робити неправильно, недбало, помилятися"
  },
  {
    "infinitive": "mishear",
    "pastSimple": "misheard",
    "pastParticiple": "misheard",
    "infinitivePronunciation": "[ˌmɪsˈhɪə]",
    "pastSimplePronunciation": "[ˌmɪsˈhɜːd]",
    "pastParticiplePronunciation": "[ˌmɪsˈhɜːd]",
    "translation": "недочути, погано почути"
  },
  {
    "infinitive": "mislay",
    "pastSimple": "mislaid",
    "pastParticiple": "mislaid",
    "infinitivePronunciation": "[mɪsˈleɪ]",
    "pastSimplePronunciation": "[mɪsˈleɪd]",
    "pastParticiplePronunciation": "[mɪsˈleɪd]",
    "translation": "покласти не на місце, загубити"
  },
  {
    "infinitive": "mislead",
    "pastSimple": "misled",
    "pastParticiple": "misled",
    "infinitivePronunciation": "[mɪsˈliːd]",
    "pastSimplePronunciation": "[mɪsˈlɛd]",
    "pastParticiplePronunciation": "[mɪsˈlɛd]",
    "translation": "вводити в оману, обманювати, збивати зі шляху"
  },
  {
    "infinitive": "mislearn",
    "pastSimple": "mislearned / mislearnt",
    "pastParticiple": "mislearned / mislearnt",
    "infinitivePronunciation": "[mislearn]",
    "pastSimplePronunciation": "[mislearned / mislearnt]",
    "pastParticiplePronunciation": "[mislearned / mislearnt]",
    "translation": "навчатися, вчити неправильно"
  },
  {
    "infinitive": "misread",
    "pastSimple": "misread",
    "pastParticiple": "misread",
    "infinitivePronunciation": "[mɪsˈriːd]",
    "pastSimplePronunciation": "[mɪsˈriːd]",
    "pastParticiplePronunciation": "[mɪsˈriːd]",
    "translation": "прочитати неправильно, неправильно тлумачити"
  },
  {
    "infinitive": "missay",
    "pastSimple": "missaid",
    "pastParticiple": "missaid",
    "infinitivePronunciation": "[missay]",
    "pastSimplePronunciation": "[missaid]",
    "pastParticiplePronunciation": "[missaid]",
    "translation": "обмовитися, сказати неправильно"
  },
  {
    "infinitive": "misset",
    "pastSimple": "misset",
    "pastParticiple": "misset",
    "infinitivePronunciation": "[misset]",
    "pastSimplePronunciation": "[misset]",
    "pastParticiplePronunciation": "[misset]",
    "translation": "неправильно встановити"
  },
  {
    "infinitive": "misspeak",
    "pastSimple": "misspoke",
    "pastParticiple": "misspoken",
    "infinitivePronunciation": "[misspeak]",
    "pastSimplePronunciation": "[misspoke]",
    "pastParticiplePronunciation": "[misspoken]",
    "translation": "говорити, вимовляти неправильно"
  },
  {
    "infinitive": "misspell",
    "pastSimple": "misspelled / misspelt",
    "pastParticiple": "misspelled / misspelt",
    "infinitivePronunciation": "[ˈmɪsˈspɛl]",
    "pastSimplePronunciation": "[ˈmɪsˈspɛld / ˈmɪsˈspɛlt]",
    "pastParticiplePronunciation": "[ˈmɪsˈspɛld / ˈmɪsˈspɛlt]",
    "translation": "писати з помилками, робити орфографічні помилки"
  },
  {
    "infinitive": "misspend",
    "pastSimple": "misspent",
    "pastParticiple": "misspent",
    "infinitivePronunciation": "[ˈmɪsˈspɛnd]",
    "pastSimplePronunciation": "[ˈmɪsˈspɛnt]",
    "pastParticiplePronunciation": "[ˈmɪsˈspɛnt]",
    "translation": "нерозумно, марно витрачати, розтринькати"
  },
  {
    "infinitive": "misswear",
    "pastSimple": "misswore",
    "pastParticiple": "missworn",
    "infinitivePronunciation": "[misswear]",
    "pastSimplePronunciation": "[misswore]",
    "pastParticiplePronunciation": "[missworn]",
    "translation": "давати неправдиву клятву"
  },
  {
    "infinitive": "mistake",
    "pastSimple": "mistook",
    "pastParticiple": "mistaken",
    "infinitivePronunciation": "[mɪsˈteɪk]",
    "pastSimplePronunciation": "[mɪsˈtʊk]",
    "pastParticiplePronunciation": "[mɪsˈteɪkən]",
    "translation": "помилятися, помилитися у виборі"
  },
  {
    "infinitive": "misteach",
    "pastSimple": "mistaught",
    "pastParticiple": "mistaught",
    "infinitivePronunciation": "[misteach]",
    "pastSimplePronunciation": "[mistaught]",
    "pastParticiplePronunciation": "[mistaught]",
    "translation": "неправильно навчати"
  },
  {
    "infinitive": "misunderstand",
    "pastSimple": "misunderstood",
    "pastParticiple": "misunderstood",
    "infinitivePronunciation": "[ˌmɪsʌndəˈstænd]",
    "pastSimplePronunciation": "[ˌmɪsʌndəˈstʊd]",
    "pastParticiplePronunciation": "[ˌmɪsʌndəˈstʊd]",
    "translation": "не розуміти, зрозуміти неправильно"
  },
  {
    "infinitive": "miswrite",
    "pastSimple": "miswrote",
    "pastParticiple": "miswritten",
    "infinitivePronunciation": "[miswrite]",
    "pastSimplePronunciation": "[miswrote]",
    "pastParticiplePronunciation": "[miswritten]",
    "translation": "неправильно написати"
  },
  {
    "infinitive": "mow",
    "pastSimple": "mowed",
    "pastParticiple": "mowed / mown",
    "infinitivePronunciation": "[maʊ]",
    "pastSimplePronunciation": "[maʊd]",
    "pastParticiplePronunciation": "[maʊd / məʊn]",
    "translation": "косити, стригти (газон), жати"
  },
  {
    "infinitive": "offset",
    "pastSimple": "offset",
    "pastParticiple": "offset",
    "infinitivePronunciation": "[ˈɒfsɛt]",
    "pastSimplePronunciation": "[ˈɒfsɛt]",
    "pastParticiplePronunciation": "[ˈɒfsɛt]",
    "translation": "відшкодовувати, компенсувати, відгалужуватися, відступати"
  },
  {
    "infinitive": "outbid",
    "pastSimple": "outbid",
    "pastParticiple": "outbid",
    "infinitivePronunciation": "[aʊtˈbɪd]",
    "pastSimplePronunciation": "[aʊtˈbɪd]",
    "pastParticiplePronunciation": "[aʊtˈbɪd]",
    "translation": "перебивати ціну, перевершити, затьмарити"
  },
  {
    "infinitive": "outdo",
    "pastSimple": "outdid",
    "pastParticiple": "outdone",
    "infinitivePronunciation": "[aʊtˈduː]",
    "pastSimplePronunciation": "[aʊtˈdɪd]",
    "pastParticiplePronunciation": "[aʊtˈdʌn]",
    "translation": "перевершити, вражати, побороти"
  },
  {
    "infinitive": "outdraw",
    "pastSimple": "outdrew",
    "pastParticiple": "outdrawn",
    "infinitivePronunciation": "[ˌaʊtˈdrɔː]",
    "pastSimplePronunciation": "[ˌaʊtˈdruː]",
    "pastParticiplePronunciation": "[outdrawn]",
    "translation": "домогтися більшої популярності, перевершити конкурентів"
  },
  {
    "infinitive": "outdrink",
    "pastSimple": "outdrank",
    "pastParticiple": "outdrunk",
    "infinitivePronunciation": "[outdrink]",
    "pastSimplePronunciation": "[outdrank]",
    "pastParticiplePronunciation": "[outdrunk]",
    "translation": "перепити (когось), випити більше, ніж хтось інший"
  },
  {
    "infinitive": "outdrive",
    "pastSimple": "outdrove",
    "pastParticiple": "outdriven",
    "infinitivePronunciation": "[aʊtˈdraɪv]",
    "pastSimplePronunciation": "[aʊtˈdrəʊv]",
    "pastParticiplePronunciation": "[aʊtˈdrɪvn]",
    "translation": "обігнати, випередити"
  },
  {
    "infinitive": "outfight",
    "pastSimple": "outfought",
    "pastParticiple": "outfought",
    "infinitivePronunciation": "[aʊtˈfaɪt]",
    "pastSimplePronunciation": "[outfought]",
    "pastParticiplePronunciation": "[outfought]",
    "translation": "мати перевагу над супротивником, перемагати"
  },
  {
    "infinitive": "outfly",
    "pastSimple": "outflew",
    "pastParticiple": "outflown",
    "infinitivePronunciation": "[outfly]",
    "pastSimplePronunciation": "[outflew]",
    "pastParticiplePronunciation": "[outflown]",
    "translation": "вилітати, літати швидше, далі (ніж будь-хто)"
  },
  {
    "infinitive": "outgrow",
    "pastSimple": "outgrew",
    "pastParticiple": "outgrown",
    "infinitivePronunciation": "[aʊtˈgrəʊ]",
    "pastSimplePronunciation": "[aʊtˈgruː]",
    "pastParticiplePronunciation": "[aʊtˈgrəʊn]",
    "translation": "випереджати в рості, переростати, позбавлятися з віком"
  },
  {
    "infinitive": "outleap",
    "pastSimple": "outleaped / outleapt",
    "pastParticiple": "outleaped / outleapt",
    "infinitivePronunciation": "[outleap]",
    "pastSimplePronunciation": "[outleaped / outleapt]",
    "pastParticiplePronunciation": "[outleaped / outleapt]",
    "translation": "перестрибувати, вистрибувати, стрибати краще"
  },
  {
    "infinitive": "outlie",
    "pastSimple": "outlay",
    "pastParticiple": "outlain",
    "infinitivePronunciation": "[outlie]",
    "pastSimplePronunciation": "[ˈaʊtleɪ]",
    "pastParticiplePronunciation": "[outlain]",
    "translation": "знаходитися назовні, поза чимось, жити в наметі"
  },
  {
    "infinitive": "outrun",
    "pastSimple": "outran",
    "pastParticiple": "outrun",
    "infinitivePronunciation": "[aʊtˈrʌn]",
    "pastSimplePronunciation": "[aʊtˈræn]",
    "pastParticiplePronunciation": "[aʊtˈrʌn]",
    "translation": "випереджати, обігнати, втекти (від когось)"
  },
  {
    "infinitive": "outsell",
    "pastSimple": "outsold",
    "pastParticiple": "outsold",
    "infinitivePronunciation": "[aʊtˈsɛl]",
    "pastSimplePronunciation": "[aʊtˈsəʊld]",
    "pastParticiplePronunciation": "[aʊtˈsəʊld]",
    "translation": "продавати, продаватися краще, перевершувати в ціні"
  },
  {
    "infinitive": "outshine",
    "pastSimple": "outshined / outshone",
    "pastParticiple": "outshined / outshone",
    "infinitivePronunciation": "[aʊtˈʃaɪn]",
    "pastSimplePronunciation": "[aʊtˈʃaɪnd / aʊtˈʃɒn]",
    "pastParticiplePronunciation": "[aʊtˈʃaɪnd / aʊtˈʃɒn]",
    "translation": "затьмарити"
  },
  {
    "infinitive": "outshoot",
    "pastSimple": "outshot",
    "pastParticiple": "outshot",
    "infinitivePronunciation": "[outshoot]",
    "pastSimplePronunciation": "[outshot]",
    "pastParticiplePronunciation": "[outshot]",
    "translation": "вистрілити, стріляти краще, відкидати, викидати"
  },
  {
    "infinitive": "outsing",
    "pastSimple": "outsang",
    "pastParticiple": "outsung",
    "infinitivePronunciation": "[outsing]",
    "pastSimplePronunciation": "[outsang]",
    "pastParticiplePronunciation": "[outsung]",
    "translation": "перевершити в співі, співати краще"
  },
  {
    "infinitive": "outsit",
    "pastSimple": "outsat",
    "pastParticiple": "outsat",
    "infinitivePronunciation": "[aʊtˈsɪt]",
    "pastSimplePronunciation": "[aʊtˈsæt]",
    "pastParticiplePronunciation": "[aʊtˈsæt]",
    "translation": "пересидіти, засидітися"
  },
  {
    "infinitive": "outsleep",
    "pastSimple": "outslept",
    "pastParticiple": "outslept",
    "infinitivePronunciation": "[outsleep]",
    "pastSimplePronunciation": "[outslept]",
    "pastParticiplePronunciation": "[outslept]",
    "translation": "проспати, прогавити"
  },
  {
    "infinitive": "outsmell",
    "pastSimple": "outsmelled / outsmelt",
    "pastParticiple": "outsmelled / outsmelt",
    "infinitivePronunciation": "[outsmell]",
    "pastSimplePronunciation": "[outsmelled / outsmelt]",
    "pastParticiplePronunciation": "[ outsmelled / outsmelt]",
    "translation": "пахнути сильніше, ніж щось"
  },
  {
    "infinitive": "outspeak",
    "pastSimple": "outspoke",
    "pastParticiple": "outspoken",
    "infinitivePronunciation": "[aʊtˈspiːk]",
    "pastSimplePronunciation": "[aʊtˈspəʊk]",
    "pastParticiplePronunciation": "[aʊtˈspəʊkən]",
    "translation": "говорити краще, висловитися, заявити"
  },
  {
    "infinitive": "outspeed",
    "pastSimple": "outsped / outspeeded",
    "pastParticiple": "outsped / outspeeded",
    "infinitivePronunciation": "[outspeed]",
    "pastSimplePronunciation": "[outsped / outspeeded]",
    "pastParticiplePronunciation": "[outsped / outspeeded]",
    "translation": "переганяти, бути швидшим, діяти швидше"
  },
  {
    "infinitive": "outspend",
    "pastSimple": "outspent",
    "pastParticiple": "outspent",
    "infinitivePronunciation": "[outspend]",
    "pastSimplePronunciation": "[outspent]",
    "pastParticiplePronunciation": "[outspent]",
    "translation": "перевершити за видатками, витрачати більше"
  },
  {
    "infinitive": "outstand",
    "pastSimple": "outstood",
    "pastParticiple": "outstood",
    "infinitivePronunciation": "[outstand]",
    "pastSimplePronunciation": "[outstood]",
    "pastParticiplePronunciation": "[outstood]",
    "translation": "виділятися, кидатися в очі, витримати"
  },
  {
    "infinitive": "outswear",
    "pastSimple": "outswore",
    "pastParticiple": "outsworn",
    "infinitivePronunciation": "[outswear]",
    "pastSimplePronunciation": "[outswore]",
    "pastParticiplePronunciation": "[outsworn]",
    "translation": "перевершувати в лихослів\\'ї"
  },
  {
    "infinitive": "outswim",
    "pastSimple": "outswam",
    "pastParticiple": "outswum",
    "infinitivePronunciation": "[outswim]",
    "pastSimplePronunciation": "[outswam]",
    "pastParticiplePronunciation": "[outswum]",
    "translation": "перевершувати в плаванні, плавати краще"
  },
  {
    "infinitive": "outthink",
    "pastSimple": "outthought",
    "pastParticiple": "outthought",
    "infinitivePronunciation": "[outthink]",
    "pastSimplePronunciation": "[outthought]",
    "pastParticiplePronunciation": "[outthought]",
    "translation": "перевершувати у кмітливості, перехитрити, виявитися розумнішим"
  },
  {
    "infinitive": "outthrow",
    "pastSimple": "outthrew",
    "pastParticiple": "outthrown",
    "infinitivePronunciation": "[outthrow]",
    "pastSimplePronunciation": "[outthrew]",
    "pastParticiplePronunciation": "[outthrown]",
    "translation": "викидати, виділяти; кидати краще, точніше"
  },
  {
    "infinitive": "outwear",
    "pastSimple": "outwore",
    "pastParticiple": "worn",
    "infinitivePronunciation": "[aʊtˈweə]",
    "pastSimplePronunciation": "[aʊtˈwɔː]",
    "pastParticiplePronunciation": "[wɔːn]",
    "translation": "зношувати, вичерпувати, служити довше, ніж (що-небудь)"
  },
  {
    "infinitive": "outwrite",
    "pastSimple": "outwrote",
    "pastParticiple": "outwritten",
    "infinitivePronunciation": "[outwrite]",
    "pastSimplePronunciation": "[outwrote]",
    "pastParticiplePronunciation": "[outwritten]",
    "translation": "писати краще"
  },
  {
    "infinitive": "overbid",
    "pastSimple": "overbid",
    "pastParticiple": "overbid",
    "infinitivePronunciation": "[ˌəʊvəˈbɪd]",
    "pastSimplePronunciation": "[ˌəʊvəˈbɪd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈbɪd]",
    "translation": "перебивати ціну; перевершити"
  },
  {
    "infinitive": "overbreed",
    "pastSimple": "overbred",
    "pastParticiple": "overbred",
    "infinitivePronunciation": "[ˌəʊvəˈbriːd]",
    "pastSimplePronunciation": "[ˌəʊvəˈbrɛd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈbrɛd]",
    "translation": "розводити, вирощувати тварин в надмірній кількості"
  },
  {
    "infinitive": "overbuild",
    "pastSimple": "overbuilt",
    "pastParticiple": "overbuilt",
    "infinitivePronunciation": "[ˌəʊvəˈbɪld]",
    "pastSimplePronunciation": "[ˌəʊvəˈbɪlt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈbɪlt]",
    "translation": "надбудовувати, надмірно забудовувати, будувати занадто багато / вишукано"
  },
  {
    "infinitive": "overbuy",
    "pastSimple": "overbought",
    "pastParticiple": "overbought",
    "infinitivePronunciation": "[ˌəʊvəˈbaɪ]",
    "pastSimplePronunciation": "[ˌəʊvəˈbɔːt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈbɔːt]",
    "translation": "купувати занадто багато, занадто дорого"
  },
  {
    "infinitive": "overcome",
    "pastSimple": "overcame",
    "pastParticiple": "overcome",
    "infinitivePronunciation": "[ˌəʊvəˈkʌm]",
    "pastSimplePronunciation": "[ˌəʊvəˈkeɪm]",
    "pastParticiplePronunciation": "[ˌəʊvəˈkʌm]",
    "translation": "подолати, побороти"
  },
  {
    "infinitive": "overdo",
    "pastSimple": "overdid",
    "pastParticiple": "overdone",
    "infinitivePronunciation": "[ˌəʊvəˈduː]",
    "pastSimplePronunciation": "[ˌəʊvəˈdɪd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈdʌn]",
    "translation": "перестаратися, переборщити, перебільшувати, перевтомлюватися"
  },
  {
    "infinitive": "overdraw",
    "pastSimple": "overdrew",
    "pastParticiple": "overdrawn",
    "infinitivePronunciation": "[ˌəʊvəˈdrɔː]",
    "pastSimplePronunciation": "[ˌəʊvəˈdruː]",
    "pastParticiplePronunciation": "[ˌəʊvəˈdrɔːn]",
    "translation": "перевищити кредит, перебільшувати"
  },
  {
    "infinitive": "overdrink",
    "pastSimple": " overdrank",
    "pastParticiple": " overdrunk",
    "infinitivePronunciation": "[ˌəʊvəˈdrɪŋk]",
    "pastSimplePronunciation": "[ ˌəʊvəˈdræŋk]",
    "pastParticiplePronunciation": "[ ˌəʊvəˈdrʌŋk]",
    "translation": "перепитися, занадто багато пити"
  },
  {
    "infinitive": "overeat",
    "pastSimple": "overate",
    "pastParticiple": "overeaten",
    "infinitivePronunciation": "[ˌəʊvəˈriːt]",
    "pastSimplePronunciation": "[ˌəʊvəˈrɛt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈriːtn]",
    "translation": "переїсти, з\\'їсти занадто багато"
  },
  {
    "infinitive": "overfeed",
    "pastSimple": "overfed",
    "pastParticiple": "overfed",
    "infinitivePronunciation": "[ˌəʊvəˈfiːd]",
    "pastSimplePronunciation": "[ˌəʊvəˈfɛd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈfɛd]",
    "translation": "перегодовувати, об\\'їдатися"
  },
  {
    "infinitive": "overfly",
    "pastSimple": "overflew",
    "pastParticiple": "overflown",
    "infinitivePronunciation": "[ˌəʊvəˈflaɪ]",
    "pastSimplePronunciation": "[ˌəʊvəˈfluː]",
    "pastParticiplePronunciation": "[ˌəʊvəˈfləʊn]",
    "translation": "перелітати, пролітати над чимось, вилітати за межі"
  },
  {
    "infinitive": "overhang",
    "pastSimple": "overhung",
    "pastParticiple": "overhung",
    "infinitivePronunciation": "[ˈəʊvəhæŋ]",
    "pastSimplePronunciation": "[ˌəʊvəˈhʌŋ]",
    "pastParticiplePronunciation": "[ˌəʊvəˈhʌŋ]",
    "translation": "виступати, нависати, погрожувати, завішувати прикрасами"
  },
  {
    "infinitive": "overhear",
    "pastSimple": "overheard",
    "pastParticiple": "overheard",
    "infinitivePronunciation": "[ˌəʊvəˈhɪə]",
    "pastSimplePronunciation": "[ˌəʊvəˈhɜːd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈhɜːd]",
    "translation": "підслуховувати, ненавмисно почути"
  },
  {
    "infinitive": "overlay",
    "pastSimple": "overlaid",
    "pastParticiple": "overlaid",
    "infinitivePronunciation": "[ˈəʊvəleɪ]",
    "pastSimplePronunciation": "[ˌəʊvəˈleɪd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈleɪd]",
    "translation": "покривати, перекривати, навантажувати"
  },
  {
    "infinitive": "overlie",
    "pastSimple": "overlay",
    "pastParticiple": "overlain",
    "infinitivePronunciation": "[ˌəʊvəˈlaɪ]",
    "pastSimplePronunciation": "[ˈəʊvəleɪ]",
    "pastParticiplePronunciation": "[ˌəʊvəˈleɪn]",
    "translation": "лежати над чимось / на чомусь, перекривати"
  },
  {
    "infinitive": "overpay",
    "pastSimple": "overpaid",
    "pastParticiple": "overpaid",
    "infinitivePronunciation": "[ˌəʊvəˈpeɪ]",
    "pastSimplePronunciation": "[ˌəʊvəˈpeɪd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈpeɪd]",
    "translation": "переплачувати, відшкодовувати з надлишком"
  },
  {
    "infinitive": "override",
    "pastSimple": "overrode",
    "pastParticiple": "overridden",
    "infinitivePronunciation": "[ˌəʊvəˈraɪd]",
    "pastSimplePronunciation": "[ˌəʊvəˈrəʊd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈrɪdn]",
    "translation": "переїхати, задавити; зневажати, відкидати, скасовувати"
  },
  {
    "infinitive": "overrun",
    "pastSimple": "overran",
    "pastParticiple": "overrun",
    "infinitivePronunciation": "[ˌəʊvəˈrʌn]",
    "pastSimplePronunciation": "[ˌəʊvəˈræn]",
    "pastParticiplePronunciation": "[ˌəʊvəˈrʌn]",
    "translation": "заповнювати, охоплювати, переходити межі, захоплювати, грабувати"
  },
  {
    "infinitive": "oversee",
    "pastSimple": "oversaw",
    "pastParticiple": "overseen",
    "infinitivePronunciation": "[ˌəʊvəˈsiː]",
    "pastSimplePronunciation": "[ˌəʊvəˈsɔː]",
    "pastParticiplePronunciation": "[ˌəʊvəˈsiːn]",
    "translation": "спостерігати, наглядати, стежити, підглянути"
  },
  {
    "infinitive": "oversell",
    "pastSimple": "oversold",
    "pastParticiple": "oversold",
    "infinitivePronunciation": "[ˌəʊvəˈsɛl]",
    "pastSimplePronunciation": "[ˌəʊvəˈsəʊld]",
    "pastParticiplePronunciation": "[ˌəʊvəˈsəʊld]",
    "translation": "нав\\'язувати продукцію, розпродати, продати повністю / більше своїх запасів"
  },
  {
    "infinitive": "overset",
    "pastSimple": "overset",
    "pastParticiple": "overset",
    "infinitivePronunciation": "[ˌəʊvəˈsɛt]",
    "pastSimplePronunciation": "[ˌəʊvəˈsɛt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈsɛt]",
    "translation": "порушувати порядок, засмучувати, перекидатися"
  },
  {
    "infinitive": "oversew",
    "pastSimple": "oversewed",
    "pastParticiple": "oversewn / oversewed",
    "infinitivePronunciation": "[ˌəʊvəˈsəʊ]",
    "pastSimplePronunciation": "[ˌəʊvəˈsəʊd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈsəʊn / ˌəʊvəˈsəʊd]",
    "translation": "зшивати через край"
  },
  {
    "infinitive": "overshoot",
    "pastSimple": "overshot",
    "pastParticiple": "overshot",
    "infinitivePronunciation": "[ˌəʊvəˈʃuːt]",
    "pastSimplePronunciation": "[ˌəʊvəˈʃɒt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈʃɒt]",
    "translation": "промахнутися, перейти кордони, стріляти до знемоги"
  },
  {
    "infinitive": "oversleep",
    "pastSimple": "overslept",
    "pastParticiple": "overslept",
    "infinitivePronunciation": "[ˌəʊvəˈsliːp]",
    "pastSimplePronunciation": "[ˌəʊvəˈslɛpt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈslɛpt]",
    "translation": "проспати, заспатися"
  },
  {
    "infinitive": "overspeak",
    "pastSimple": "overspoke",
    "pastParticiple": "overspoken",
    "infinitivePronunciation": "[ˌəʊvəˈspiːk]",
    "pastSimplePronunciation": "[ˌəʊvəˈspəʊk]",
    "pastParticiplePronunciation": "[ˌəʊvəˈspəʊkən]",
    "translation": "забагато розмовляти"
  },
  {
    "infinitive": "overspend",
    "pastSimple": "overspent",
    "pastParticiple": "overspent",
    "infinitivePronunciation": "[ˌəʊvəˈspɛnd]",
    "pastSimplePronunciation": "[ˌəʊvəˈspɛnt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈspɛnt]",
    "translation": "витрачати занадто багато, смітити грошима, розладнувати своє здоров\\'я"
  },
  {
    "infinitive": "overspill",
    "pastSimple": "overspilled / overspilt",
    "pastParticiple": "overspilled / overspilt",
    "infinitivePronunciation": "[ˈəʊvəspɪl]",
    "pastSimplePronunciation": "[ˈəʊvəspɪld / ˌəʊvəˈspɪlt]",
    "pastParticiplePronunciation": "[ˈəʊvəspɪld / ˌəʊvəˈspɪlt]",
    "translation": "проливати, переповнювати, перенаселяти"
  },
  {
    "infinitive": "overtake",
    "pastSimple": "overtook",
    "pastParticiple": "overtaken",
    "infinitivePronunciation": "[ˌəʊvəˈteɪk]",
    "pastSimplePronunciation": "[ˌəʊvəˈtʊk]",
    "pastParticiplePronunciation": "[ˌəʊvəˈteɪkən]",
    "translation": "наздогнати, наздоганяти, опановувати, обігнати"
  },
  {
    "infinitive": "overthink",
    "pastSimple": "overthought",
    "pastParticiple": "overthought",
    "infinitivePronunciation": "[ˌəʊvəˈθɪŋk]",
    "pastSimplePronunciation": "[ˌəʊvəˈθɔːt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈθɔːt]",
    "translation": "надумати зайвого, занадто багато думати"
  },
  {
    "infinitive": "overthrow",
    "pastSimple": "overthrew",
    "pastParticiple": "overthrown",
    "infinitivePronunciation": "[ˈəʊvəθrəʊ]",
    "pastSimplePronunciation": "[ˌəʊvəˈθruː]",
    "pastParticiplePronunciation": "[ˌəʊvəˈθrəʊn]",
    "translation": "кидати занадто далеко, скидати, руйнувати"
  },
  {
    "infinitive": "overwind",
    "pastSimple": "overwound",
    "pastParticiple": "overwound",
    "infinitivePronunciation": "[ˌəʊvəˈwaɪnd]",
    "pastSimplePronunciation": "[ˌəʊvəˈwuːnd]",
    "pastParticiplePronunciation": "[ˌəʊvəˈwuːnd]",
    "translation": "перекрутити, крутити занадто сильно, швидко"
  },
  {
    "infinitive": "overwrite",
    "pastSimple": "overwrote",
    "pastParticiple": "overwritten",
    "infinitivePronunciation": "[ˌəʊvəˈraɪt]",
    "pastSimplePronunciation": "[ˌəʊvəˈrəʊt]",
    "pastParticiplePronunciation": "[ˌəʊvəˈrɪtn]",
    "translation": "переписувати, писати поверх тексту, багато писати"
  },
  {
    "infinitive": "partake",
    "pastSimple": "partook",
    "pastParticiple": "partaken",
    "infinitivePronunciation": "[pɑːˈteɪk]",
    "pastSimplePronunciation": "[pɑːˈtʊk]",
    "pastParticiplePronunciation": "[pɑːˈteɪkən]",
    "translation": "брати участь, розділяти, покуштувати, скористатися"
  },
  {
    "infinitive": "pay",
    "pastSimple": "paid",
    "pastParticiple": "paid",
    "infinitivePronunciation": "[peɪ]",
    "pastSimplePronunciation": "[peɪd]",
    "pastParticiplePronunciation": "[peɪd]",
    "translation": "платити, винагороджувати, помститися"
  },
  {
    "infinitive": "plead",
    "pastSimple": "pleaded / pled",
    "pastParticiple": "pleaded / pled",
    "infinitivePronunciation": "[pliːd]",
    "pastSimplePronunciation": "[ˈpliːdɪd / plɛd]",
    "pastParticiplePronunciation": "[ˈpliːdɪd / plɛd]",
    "translation": "захищати підсудного, клопотати, просити"
  },
  {
    "infinitive": "prebuild",
    "pastSimple": "prebuilt",
    "pastParticiple": "prebuilt",
    "infinitivePronunciation": "[prebuild]",
    "pastSimplePronunciation": "[prebuilt]",
    "pastParticiplePronunciation": "[prebuilt]",
    "translation": "попередньо зібрати, вибудувати"
  },
  {
    "infinitive": "predo",
    "pastSimple": "predid",
    "pastParticiple": "predone",
    "infinitivePronunciation": "[predo]",
    "pastSimplePronunciation": "[predid]",
    "pastParticiplePronunciation": "[predone]",
    "translation": "зробити заздалегідь, підготувати"
  },
  {
    "infinitive": "premake",
    "pastSimple": "premade",
    "pastParticiple": "premade",
    "infinitivePronunciation": "[premake]",
    "pastSimplePronunciation": "[premade]",
    "pastParticiplePronunciation": "[premade]",
    "translation": "підготувати, зробити наперед, заздалегідь"
  },
  {
    "infinitive": "prepay",
    "pastSimple": "prepaid",
    "pastParticiple": "prepaid",
    "infinitivePronunciation": "[priːˈpeɪ]",
    "pastSimplePronunciation": "[ˌpriːˈpeɪd]",
    "pastParticiplePronunciation": "[ˌpriːˈpeɪd]",
    "translation": "передплачувати, платити наперед"
  },
  {
    "infinitive": "presell",
    "pastSimple": "presoldpreset",
    "pastParticiple": "prespresetold",
    "infinitivePronunciation": "[preseprɪˈsɛtll]",
    "pastSimplePronunciation": "[prɪˈsɛtprepresetsold]",
    "pastParticiplePronunciation": "[presoldprɪˈsɛt]",
    "translation": "рекламувати продукт до його появи в продажу, продавати наперед"
  },
  {
    "infinitive": "preshrink",
    "pastSimple": " preshrink",
    "pastParticiple": "preshrunk",
    "infinitivePronunciation": "[preshrink]",
    "pastSimplePronunciation": "[preshrank]",
    "pastParticiplePronunciation": "[preshrunk]",
    "translation": "обробляти тканину для запобігання її стяжки"
  },
  {
    "infinitive": "proofread",
    "pastSimple": "proofread",
    "pastParticiple": "proofread",
    "infinitivePronunciation": "[ˈpruːfriːd]",
    "pastSimplePronunciation": "[ˈpruːfriːd]",
    "pastParticiplePronunciation": "[ˈpruːfriːd]",
    "translation": "читати коректуру, корегувати"
  },
  {
    "infinitive": "prove",
    "pastSimple": "proved",
    "pastParticiple": "pruːvd",
    "infinitivePronunciation": "[pruːv]",
    "pastSimplePronunciation": "[pruːvd]",
    "pastParticiplePronunciation": "[ˈpruːvən / pruːvd]",
    "translation": "доводити, засвідчувати"
  },
  {
    "infinitive": "put",
    "pastSimple": "put",
    "pastParticiple": "put",
    "infinitivePronunciation": "[pʊt]",
    "pastSimplePronunciation": "[pʊt]",
    "pastParticiplePronunciation": "[pʊt]",
    "translation": "класти, покласти"
  },
  {
    "infinitive": "quick-freeze",
    "pastSimple": "quick-froze",
    "pastParticiple": "quick-frozen",
    "infinitivePronunciation": "[ˈkwɪkfriːz]",
    "pastSimplePronunciation": "[kwɪk-frəʊz]",
    "pastParticiplePronunciation": "[kwɪk-ˈfrəʊzn]",
    "translation": "швидко заморожувати, замерзати"
  },
  {
    "infinitive": "quit",
    "pastSimple": "quit / quitted ",
    "pastParticiple": "quit / quitted",
    "infinitivePronunciation": "[kwɪt]",
    "pastSimplePronunciation": "[kwɪt / ˈkwɪtɪd]",
    "pastParticiplePronunciation": "[kwɪt / ˈkwɪtɪd]",
    "translation": "залишати, покидати, виходити"
  },
  {
    "infinitive": "read",
    "pastSimple": "read [red]",
    "pastParticiple": "read [red]",
    "infinitivePronunciation": "[riːd]",
    "pastSimplePronunciation": "[riːd [rɛd]]",
    "pastParticiplePronunciation": "[riːd [rɛd]]",
    "translation": "читати"
  },
  {
    "infinitive": "reawake",
    "pastSimple": "reawoke",
    "pastParticiple": "reawaken",
    "infinitivePronunciation": "[ˌriːəˈweɪk]",
    "pastSimplePronunciation": "[ˌriːəˈwəʊk]",
    "pastParticiplePronunciation": "[ˌriːəˈweɪkən]",
    "translation": "знову будити"
  },
  {
    "infinitive": "rebid",
    "pastSimple": "rebid",
    "pastParticiple": "rebid",
    "infinitivePronunciation": "[ˌriːˈbɪd]",
    "pastSimplePronunciation": "[ˌriːˈbɪd]",
    "pastParticiplePronunciation": "[ˌriːˈbɪd]",
    "translation": "робити повторну ставку"
  },
  {
    "infinitive": "rebind",
    "pastSimple": "rebound",
    "pastParticiple": "rebound",
    "infinitivePronunciation": "[ˌriːˈbaɪnd]",
    "pastSimplePronunciation": "[rɪˈbaʊnd]",
    "pastParticiplePronunciation": "[rɪˈbaʊnd]",
    "translation": "знову переплітати (книгу), робити нову палітурку"
  },
  {
    "infinitive": "rebroadcast",
    "pastSimple": "rebroadcast / rebroadcasted",
    "pastParticiple": "rebroadcast / rebroadcasted",
    "infinitivePronunciation": "[ˌriːˈbrɔːdkɑːst]",
    "pastSimplePronunciation": "[ˌriːˈbrɔːdkɑːst / ˌriːˈbrɔːdkɑːstɪd]",
    "pastParticiplePronunciation": "[ˌriːˈbrɔːdkɑːst / ˌriːˈbrɔːdkɑːstɪd]",
    "translation": "ретранслювати, знову показувати (передачу)"
  },
  {
    "infinitive": "rebuild",
    "pastSimple": "rebuilt",
    "pastParticiple": "rebuilt",
    "infinitivePronunciation": "[ˌriːˈbɪld]",
    "pastSimplePronunciation": "[ˌriːˈbɪlt]",
    "pastParticiplePronunciation": "[ˌriːˈbɪlt]",
    "translation": "перебудовувати"
  },
  {
    "infinitive": "recast",
    "pastSimple": "recast",
    "pastParticiple": "recast",
    "infinitivePronunciation": "[ˌriːˈkɑːst]",
    "pastSimplePronunciation": "[ˌriːˈkɑːst]",
    "pastParticiplePronunciation": "[ˌriːˈkɑːst]",
    "translation": "переробляти, змінювати, перераховувати"
  },
  {
    "infinitive": "recut",
    "pastSimple": "recut",
    "pastParticiple": "recut",
    "infinitivePronunciation": "[ˌriːˈkʌt]",
    "pastSimplePronunciation": "[ˌriːˈkʌt]",
    "pastParticiplePronunciation": "[ˌriːˈkʌt]",
    "translation": "вдруге нарізати, повторно вирізати (сцени з фільму)"
  },
  {
    "infinitive": "redeal",
    "pastSimple": "redealt",
    "pastParticiple": "redealt",
    "infinitivePronunciation": "[ˌriːˈdiːl]",
    "pastSimplePronunciation": "[ˌriːˈdɛlt]",
    "pastParticiplePronunciation": "[ˌriːˈdɛlt]",
    "translation": "роздати знову карти в грі"
  },
  {
    "infinitive": "redo",
    "pastSimple": "redid",
    "pastParticiple": "redone",
    "infinitivePronunciation": "[ˌriːˈduː]",
    "pastSimplePronunciation": "[ˌriːˈdɪd]",
    "pastParticiplePronunciation": "[ˌriːˈdʌn]",
    "translation": "переробляти, робити ремонт"
  },
  {
    "infinitive": "redraw",
    "pastSimple": "redrew",
    "pastParticiple": "redrawn",
    "infinitivePronunciation": "[ˌriːˈdrɔː]",
    "pastSimplePronunciation": "[ˌriːˈdruː]",
    "pastParticiplePronunciation": "[ˌriːˈdrɔːn]",
    "translation": "перемальовувати, оновлювати малюнок, виставляти зворотний вексель"
  },
  {
    "infinitive": "refit",
    "pastSimple": "refitted / refit",
    "pastParticiple": "refitted / refit",
    "infinitivePronunciation": "[ˌriːˈfɪt]",
    "pastSimplePronunciation": "[ˌriːˈfɪtɪd / ˌriːˈfɪt]",
    "pastParticiplePronunciation": "[ˌriːˈfɪtɪd / ˌriːˈfɪt]",
    "translation": "переустатковувати, лагодити, знову підганяти (за розміром)"
  },
  {
    "infinitive": "regrind",
    "pastSimple": "reground",
    "pastParticiple": "reground",
    "infinitivePronunciation": "[ˌriːˈgraɪnd]",
    "pastSimplePronunciation": "[ˌriːˈgraʊnd]",
    "pastParticiplePronunciation": "[ˌriːˈgraʊnd]",
    "translation": "перешліфовувати, переточувати, притирати"
  },
  {
    "infinitive": "regrow",
    "pastSimple": "regrew",
    "pastParticiple": "regrown",
    "infinitivePronunciation": "[ˌriːˈgrəʊ]",
    "pastSimplePronunciation": "[ˌriːˈgruː]",
    "pastParticiplePronunciation": "[ˌriːˈgrəʊn]",
    "translation": "відростати знову"
  },
  {
    "infinitive": "rehang",
    "pastSimple": "rehung",
    "pastParticiple": "rehung",
    "infinitivePronunciation": "[ˌriːˈhæŋ]",
    "pastSimplePronunciation": "[ˌriːˈhʌŋ]",
    "pastParticiplePronunciation": "[ˌriːˈhʌŋ]",
    "translation": "переважувати"
  },
  {
    "infinitive": "rehear",
    "pastSimple": "reheard",
    "pastParticiple": "reheard",
    "infinitivePronunciation": "[ˌriːˈhɪə]",
    "pastSimplePronunciation": "[ˌriːˈhɜːd]",
    "pastParticiplePronunciation": "[ˌriːˈhɜːd]",
    "translation": "почути знову, розглядати справу повторно"
  },
  {
    "infinitive": "reknit",
    "pastSimple": "reknitted / reknit",
    "pastParticiple": "reknitted / reknit",
    "infinitivePronunciation": "[ˌriːˈnɪt]",
    "pastSimplePronunciation": "[ˌriːˈnɪtɪd / ˌriːˈnɪt]",
    "pastParticiplePronunciation": "[ˌriːˈnɪtɪd / ˌriːˈnɪt]",
    "translation": "в\\'язати заново, з\\'єднувати заново"
  },
  {
    "infinitive": "relay",
    "pastSimple": "relaid",
    "pastParticiple": "relaid",
    "infinitivePronunciation": "[riːˈleɪ]",
    "pastSimplePronunciation": "[ˌriːˈleɪd]",
    "pastParticiplePronunciation": "[ˌriːˈleɪd]",
    "translation": "класти заново, замінювати (черепицю, кахель)"
  },
  {
    "infinitive": "relearn",
    "pastSimple": "relearned / relearnt",
    "pastParticiple": "relearned / relearnt",
    "infinitivePronunciation": "[ˌriːˈlɜːn]",
    "pastSimplePronunciation": "[ˌriːˈlɜːnt / ˌriːˈlɜːnt]",
    "pastParticiplePronunciation": "[ˌriːˈlɜːnt / ˌriːˈlɜːnt]",
    "translation": "вчитися заново, переучуватися"
  },
  {
    "infinitive": "relight",
    "pastSimple": "relit / relighted",
    "pastParticiple": "relit / relighted",
    "infinitivePronunciation": "[ˌriːˈlaɪt]",
    "pastSimplePronunciation": "[relit / ˌriːˈlaɪtɪd]",
    "pastParticiplePronunciation": "[relit / ˌriːˈlaɪtɪd]",
    "translation": "запалити, запалитися знову, спалахнути"
  },
  {
    "infinitive": "remake",
    "pastSimple": "remade",
    "pastParticiple": "remade",
    "infinitivePronunciation": "[ˌriːˈmeɪk]",
    "pastSimplePronunciation": "[ˌriːˈmeɪd]",
    "pastParticiplePronunciation": "[ˌriːˈmeɪd]",
    "translation": "переробляти, робити заново"
  },
  {
    "infinitive": "rend",
    "pastSimple": "rent / rended",
    "pastParticiple": "rent / rended",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "відривати, роздирати, розщеплювати"
  },
  {
    "infinitive": "repay",
    "pastSimple": "repaid",
    "pastParticiple": "repaid",
    "infinitivePronunciation": "[rɪˈpeɪ]",
    "pastSimplePronunciation": "[riːˈpeɪd]",
    "pastParticiplePronunciation": "[riːˈpeɪd]",
    "translation": "віддавати, повертати, відшкодовувати, відплачувати"
  },
  {
    "infinitive": "reread",
    "pastSimple": "reread",
    "pastParticiple": "reread",
    "infinitivePronunciation": "[ˌriːˈriːd]",
    "pastSimplePronunciation": "[ˌriːˈriːd]",
    "pastParticiplePronunciation": "[ˌriːˈriːd]",
    "translation": "перечитувати"
  },
  {
    "infinitive": "rerun",
    "pastSimple": "reran",
    "pastParticiple": "rerun",
    "infinitivePronunciation": "[ˌriːˈrʌn]",
    "pastSimplePronunciation": "[reran]",
    "pastParticiplePronunciation": "[ˌriːˈrʌn]",
    "translation": "перезапускати, повторно проводити, показувати"
  },
  {
    "infinitive": "resell",
    "pastSimple": "resold",
    "pastParticiple": "resold",
    "infinitivePronunciation": "[ˌriːˈsɛl]",
    "pastSimplePronunciation": "[ˌriːˈsəʊld]",
    "pastParticiplePronunciation": "[ˌriːˈsəʊld]",
    "translation": "перепродавати"
  },
  {
    "infinitive": "resend",
    "pastSimple": "resent",
    "pastParticiple": "resent",
    "infinitivePronunciation": "[ˌriːˈsɛnd]",
    "pastSimplePronunciation": "[rɪˈzɛnt]",
    "pastParticiplePronunciation": "[rɪˈzɛnt]",
    "translation": "посилати, відправляти знову"
  },
  {
    "infinitive": "reset",
    "pastSimple": "reset",
    "pastParticiple": "reset",
    "infinitivePronunciation": "[ˌriːˈsɛt]",
    "pastSimplePronunciation": "[ˌriːˈsɛt]",
    "pastParticiplePronunciation": "[ˌriːˈsɛt]",
    "translation": "знову налаштовувати, встановлювати, скидати (налаштування)"
  },
  {
    "infinitive": "resew",
    "pastSimple": "resewed",
    "pastParticiple": "resewn / resewed",
    "infinitivePronunciation": "[ˌriːˈsəʊ]",
    "pastSimplePronunciation": "[ˌriːˈsəʊd]",
    "pastParticiplePronunciation": "[ˌriːˈsəʊn / ˌriːˈsəʊd]",
    "translation": "пришивати заново, перешивати"
  },
  {
    "infinitive": "retake",
    "pastSimple": "retook",
    "pastParticiple": "retaken",
    "infinitivePronunciation": "[riːˈteɪk]",
    "pastSimplePronunciation": "[ˌriːˈtʊk]",
    "pastParticiplePronunciation": "[ˌriːˈteɪkən]",
    "translation": "знову взяти, перезнімати, перездавати (іспит)"
  },
  {
    "infinitive": "reteach",
    "pastSimple": "retaught",
    "pastParticiple": "retaught",
    "infinitivePronunciation": "[ˌriːˈtiːʧ]",
    "pastSimplePronunciation": "[ˌriːˈtɔːt]",
    "pastParticiplePronunciation": "[ˌriːˈtɔːt]",
    "translation": "переучувати, вчити заново"
  },
  {
    "infinitive": "retear",
    "pastSimple": "retore",
    "pastParticiple": "retorn",
    "infinitivePronunciation": "[ˌriːˈteə]",
    "pastSimplePronunciation": "[ˌriːˈtɔː]",
    "pastParticiplePronunciation": "[ˌriːˈtɔːn]",
    "translation": "знову розривати, відривати"
  },
  {
    "infinitive": "retell",
    "pastSimple": "retold",
    "pastParticiple": "retold",
    "infinitivePronunciation": "[ˌriːˈtɛl]",
    "pastSimplePronunciation": "[ˌriːˈtəʊld]",
    "pastParticiplePronunciation": "[ˌriːˈtəʊld]",
    "translation": "переказувати, розповідати знову"
  },
  {
    "infinitive": "rethink",
    "pastSimple": "rethought",
    "pastParticiple": "rethought",
    "infinitivePronunciation": "[riːˈθɪŋk]",
    "pastSimplePronunciation": "[ˌriːˈθɔːt]",
    "pastParticiplePronunciation": "[ˌriːˈθɔːt]",
    "translation": "переглядати свою думку, заново осмислити"
  },
  {
    "infinitive": "retread",
    "pastSimple": "retread",
    "pastParticiple": "retread",
    "infinitivePronunciation": "[ˌriːˈtrɛd]",
    "pastSimplePronunciation": "[ˌriːˈtrɛd]",
    "pastParticiplePronunciation": "[ˌriːˈtrɛd]",
    "translation": "змінити покришку, перенавчати, заново давати роботу"
  },
  {
    "infinitive": "retrofit",
    "pastSimple": "retrofitted / retrofit",
    "pastParticiple": "retrofitted / retrofit",
    "infinitivePronunciation": "[ˈrɛtrəʊˌfɪt]",
    "pastSimplePronunciation": "[ˈrɛtrəʊˌfɪtɪd / ˈrɛtrəʊˌfɪt]",
    "pastParticiplePronunciation": "[ˈrɛtrəʊˌfɪtɪd / ˈrɛtrəʊˌfɪt]",
    "translation": "модифікувати, підганяти, налаштовувати"
  },
  {
    "infinitive": "rewake",
    "pastSimple": "rewoke / rewaked",
    "pastParticiple": "rewaken / rewaked",
    "infinitivePronunciation": "[ˌriːˈweɪk]",
    "pastSimplePronunciation": "[ˌriːˈwəʊk / ˌriːˈweɪkt]",
    "pastParticiplePronunciation": "[ˌriːˈweɪkən / ˌriːˈweɪkt]",
    "translation": "будити, пробуджуватися заново"
  },
  {
    "infinitive": "rewear",
    "pastSimple": "rewore",
    "pastParticiple": "reworn",
    "infinitivePronunciation": "[ˌriːˈweə]",
    "pastSimplePronunciation": "[ˌriːˈwɔː]",
    "pastParticiplePronunciation": "[ˌriːˈwɔːn]",
    "translation": "носити заново"
  },
  {
    "infinitive": "reweave",
    "pastSimple": "rewove / reweaved",
    "pastParticiple": "rewoven / reweaved",
    "infinitivePronunciation": "[ˌriːˈwiːv]",
    "pastSimplePronunciation": "[ˌriːˈwəʊv / ˌriːˈwiːvd]",
    "pastParticiplePronunciation": "[ˌriːˈwəʊvən / ˌriːˈwiːvd]",
    "translation": "переткати, плести, ткати заново, знову з\\'єднуватися"
  },
  {
    "infinitive": "rewed",
    "pastSimple": "rewed / rewedded",
    "pastParticiple": "rewed / rewedded",
    "infinitivePronunciation": "[ˌriːˈwɛd]",
    "pastSimplePronunciation": "[ˌriːˈwɛd / ˌriːˈwɛdɪd]",
    "pastParticiplePronunciation": "[ˌriːˈwɛd / ˌriːˈwɛdɪd]",
    "translation": "одружитися вдруге"
  },
  {
    "infinitive": "rewet",
    "pastSimple": "rewet / rewetted",
    "pastParticiple": "rewet / rewetted",
    "infinitivePronunciation": "[ˌriːˈwɛt]",
    "pastSimplePronunciation": "[ˌriːˈwɛt / ˌriːˈwɛtɪd]",
    "pastParticiplePronunciation": "[ˌriːˈwɛt / ˌriːˈwɛtɪd]",
    "translation": "повторно зволожувати, мочити знову"
  },
  {
    "infinitive": "rewin",
    "pastSimple": "rewon",
    "pastParticiple": "rewon",
    "infinitivePronunciation": "[ˌriːˈwɪn]",
    "pastSimplePronunciation": "[rewon]",
    "pastParticiplePronunciation": "[rewon]",
    "translation": "знову перемогти, перемогти після програшу"
  },
  {
    "infinitive": "rewind",
    "pastSimple": "rewound",
    "pastParticiple": "rewound",
    "infinitivePronunciation": "[riːˈwaɪnd]",
    "pastSimplePronunciation": "[ˌriːˈwuːnd]",
    "pastParticiplePronunciation": "[ˌriːˈwuːnd]",
    "translation": "перемотувати (назад)"
  },
  {
    "infinitive": "rewrite",
    "pastSimple": "rewrote",
    "pastParticiple": "rewritten",
    "infinitivePronunciation": "[ˌriːˈraɪt]",
    "pastSimplePronunciation": "[ˌriːˈrəʊt]",
    "pastParticiplePronunciation": "[ˌriːˈrɪtn]",
    "translation": "переписувати, редагувати, відповідати письмово"
  },
  {
    "infinitive": "rid",
    "pastSimple": "rid",
    "pastParticiple": "rid",
    "infinitivePronunciation": "[rɪd]",
    "pastSimplePronunciation": "[rɪd]",
    "pastParticiplePronunciation": "[ rɪd]",
    "translation": "звільняти, рятувати"
  },
  {
    "infinitive": "ride",
    "pastSimple": "rode",
    "pastParticiple": "ridden",
    "infinitivePronunciation": "[raɪd]",
    "pastSimplePronunciation": "[rəʊd]",
    "pastParticiplePronunciation": "[ˈrɪdn]",
    "translation": "їхати верхи, кататися, їхати (в транспорті)"
  },
  {
    "infinitive": "ring",
    "pastSimple": "rang",
    "pastParticiple": "rung",
    "infinitivePronunciation": "[rɪŋ]",
    "pastSimplePronunciation": "[ræŋ]",
    "pastParticiplePronunciation": "[rʌŋ]",
    "translation": "дзвонити, дзвеніти"
  },
  {
    "infinitive": "rise",
    "pastSimple": "rose",
    "pastParticiple": "risen",
    "infinitivePronunciation": "[raɪz]",
    "pastSimplePronunciation": "[rəʊz]",
    "pastParticiplePronunciation": "[ˈrɪzn]",
    "translation": "підніматися, сходити"
  },
  {
    "infinitive": "roughcast",
    "pastSimple": "roughcast",
    "pastParticiple": "roughcast",
    "infinitivePronunciation": "[ˈrʌfkɑːst]",
    "pastSimplePronunciation": "[ˈrʌfkɑːst]",
    "pastParticiplePronunciation": "[ˈrʌfkɑːst]",
    "translation": "накидати план, намічати, грубо штукатурити"
  },
  {
    "infinitive": "run",
    "pastSimple": "ran",
    "pastParticiple": "run",
    "infinitivePronunciation": "[rʌn]",
    "pastSimplePronunciation": "[ræn]",
    "pastParticiplePronunciation": "[rʌn]",
    "translation": "бігти, гнати, управляти, текти"
  },
  {
    "infinitive": "sand-cast",
    "pastSimple": "sand-cast",
    "pastParticiple": "sand-cast",
    "infinitivePronunciation": "[sænd-kɑːst]",
    "pastSimplePronunciation": "[sænd-kɑːst]",
    "pastParticiplePronunciation": "[sænd-kɑːst]",
    "translation": "відливати метал в піщану форму"
  },
  {
    "infinitive": "saw",
    "pastSimple": "sawed",
    "pastParticiple": "sawed / sawn",
    "infinitivePronunciation": "[sɔː]",
    "pastSimplePronunciation": "[sɔːd]",
    "pastParticiplePronunciation": "[sɔːd / sɔːn]",
    "translation": "пиляти, розпиляти"
  },
  {
    "infinitive": "say",
    "pastSimple": "said",
    "pastParticiple": "said",
    "infinitivePronunciation": "[seɪ]",
    "pastSimplePronunciation": "[sɛd]",
    "pastParticiplePronunciation": "[sɛd]",
    "translation": "говорити, сказати"
  },
  {
    "infinitive": "see",
    "pastSimple": "saw",
    "pastParticiple": "seen",
    "infinitivePronunciation": "[siː]",
    "pastSimplePronunciation": "[sɔː]",
    "pastParticiplePronunciation": "[siːn]",
    "translation": "бачити, дивитися"
  },
  {
    "infinitive": "seek",
    "pastSimple": "sought",
    "pastParticiple": "sought",
    "infinitivePronunciation": "[siːk]",
    "pastSimplePronunciation": "[sɔːt]",
    "pastParticiplePronunciation": "[sɔːt]",
    "translation": "шукати, домагатися"
  },
  {
    "infinitive": "sell",
    "pastSimple": "sold",
    "pastParticiple": "sold",
    "infinitivePronunciation": "[sɛl]",
    "pastSimplePronunciation": "[səʊld]",
    "pastParticiplePronunciation": "[səʊld]",
    "translation": "продавати"
  },
  {
    "infinitive": "send",
    "pastSimple": "sent",
    "pastParticiple": "sent",
    "infinitivePronunciation": "[sɛnd]",
    "pastSimplePronunciation": "[sɛnt]",
    "pastParticiplePronunciation": "[sɛnt]",
    "translation": "посилати, відправляти"
  },
  {
    "infinitive": "set",
    "pastSimple": "set",
    "pastParticiple": "set",
    "infinitivePronunciation": "[sɛt]",
    "pastSimplePronunciation": "[sɛt]",
    "pastParticiplePronunciation": "[sɛt]",
    "translation": "поміщати, ставити"
  },
  {
    "infinitive": "sew",
    "pastSimple": "sewed",
    "pastParticiple": "sewn / sewed",
    "infinitivePronunciation": "[səʊ]",
    "pastSimplePronunciation": "[səʊd]",
    "pastParticiplePronunciation": "[səʊn / səʊd]",
    "translation": "шити, штопати"
  },
  {
    "infinitive": "shake",
    "pastSimple": "shook",
    "pastParticiple": "shaken",
    "infinitivePronunciation": "[ʃeɪk]",
    "pastSimplePronunciation": "[ʃʊk]",
    "pastParticiplePronunciation": "[ˈʃeɪkən]",
    "translation": "трясти, струшувати"
  },
  {
    "infinitive": "shave",
    "pastSimple": "shaved",
    "pastParticiple": "shaved / shaven",
    "infinitivePronunciation": "[ʃeɪv]",
    "pastSimplePronunciation": "[ʃeɪvd]",
    "pastParticiplePronunciation": "[ʃeɪvd / ˈʃeɪvn]",
    "translation": "голитися"
  },
  {
    "infinitive": "shear",
    "pastSimple": "sheared",
    "pastParticiple": "sheared / shorn",
    "infinitivePronunciation": "[ʃɪə]",
    "pastSimplePronunciation": "[ʃɪəd]",
    "pastParticiplePronunciation": "[ʃɪəd / ʃɔːn]",
    "translation": "різати, вистригати, розсікати"
  },
  {
    "infinitive": "shed",
    "pastSimple": "shed",
    "pastParticiple": "shed",
    "infinitivePronunciation": "[ʃɛd]",
    "pastSimplePronunciation": "[ʃɛd]",
    "pastParticiplePronunciation": "[ʃɛd]",
    "translation": "проливати, втрачати, скидати"
  },
  {
    "infinitive": "shine",
    "pastSimple": "shined / shone",
    "pastParticiple": "shined / shone",
    "infinitivePronunciation": "[ʃaɪn]",
    "pastSimplePronunciation": "[ʃaɪnd / ʃɒn]",
    "pastParticiplePronunciation": "[ʃaɪnd / ʃɒn]",
    "translation": "сяяти, світити"
  },
  {
    "infinitive": "shit",
    "pastSimple": "shit / shat / shitted",
    "pastParticiple": "shit/ shat / shitted",
    "infinitivePronunciation": "[ʃɪt]",
    "pastSimplePronunciation": "[ʃɪt / ʃæt / ˈʃɪtɪd]",
    "pastParticiplePronunciation": "[ʃɪt/ ʃæt / ˈʃɪtɪd]",
    "translation": "какати, гадити, срати"
  },
  {
    "infinitive": "shoe",
    "pastSimple": "shod",
    "pastParticiple": "shod",
    "infinitivePronunciation": "[ʃuː]",
    "pastSimplePronunciation": "[ʃɒd]",
    "pastParticiplePronunciation": "[ʃɒd]",
    "translation": "взувати, підкувати, підбивати"
  },
  {
    "infinitive": "shoot",
    "pastSimple": "shot",
    "pastParticiple": "shot",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "стріляти, полювати"
  },
  {
    "infinitive": "show",
    "pastSimple": "showed",
    "pastParticiple": "shown / showed",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "показувати, показуватися, виставляти"
  },
  {
    "infinitive": "shrink",
    "pastSimple": "shrank / shrunk",
    "pastParticiple": "shrunk / shrunken",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "сідати, давати усадку, стискатися"
  },
  {
    "infinitive": "shut",
    "pastSimple": "shut",
    "pastParticiple": "shut",
    "infinitivePronunciation": "[ʃʌt]",
    "pastSimplePronunciation": "[ʃʌt]",
    "pastParticiplePronunciation": "[ʃʌt]",
    "translation": "закривати"
  },
  {
    "infinitive": "sight-read",
    "pastSimple": "sight-read",
    "pastParticiple": "sight-read",
    "infinitivePronunciation": "[saɪt-riːd]",
    "pastSimplePronunciation": "[saɪt-riːd]",
    "pastParticiplePronunciation": "[saɪt-riːd]",
    "translation": "грати, співати з листа, читати ноти, текст з листа"
  },
  {
    "infinitive": "sing",
    "pastSimple": "sang",
    "pastParticiple": "sung",
    "infinitivePronunciation": "[sɪŋ]",
    "pastSimplePronunciation": "[sæŋ]",
    "pastParticiplePronunciation": "[sʌŋ]",
    "translation": "співати"
  },
  {
    "infinitive": "sink",
    "pastSimple": "sank / sunk",
    "pastParticiple": "sunk",
    "infinitivePronunciation": "[sɪŋk]",
    "pastSimplePronunciation": "[sæŋk / sʌŋk]",
    "pastParticiplePronunciation": "[sʌŋk]",
    "translation": "тонути, опускатися, занурюватися"
  },
  {
    "infinitive": "sit",
    "pastSimple": "sat",
    "pastParticiple": "sat",
    "infinitivePronunciation": "[sɪt]",
    "pastSimplePronunciation": "[sæt]",
    "pastParticiplePronunciation": "[sæt]",
    "translation": "сидіти, садити, перебувати"
  },
  {
    "infinitive": "slay",
    "pastSimple": "slew / slayed",
    "pastParticiple": "slain / slayed",
    "infinitivePronunciation": "[sleɪ]",
    "pastSimplePronunciation": "[sluː / sleɪd]",
    "pastParticiplePronunciation": "[sleɪn / sleɪd]",
    "translation": "вбивати, знищувати"
  },
  {
    "infinitive": "sleep",
    "pastSimple": "slept",
    "pastParticiple": "slept",
    "infinitivePronunciation": "[sliːp]",
    "pastSimplePronunciation": "[slɛpt]",
    "pastParticiplePronunciation": "[slɛpt]",
    "translation": "спати"
  },
  {
    "infinitive": "slide",
    "pastSimple": "slid",
    "pastParticiple": "slid",
    "infinitivePronunciation": "[slaɪd]",
    "pastSimplePronunciation": "[slɪd]",
    "pastParticiplePronunciation": "[slɪd]",
    "translation": "ковзати, повзати, кататися"
  },
  {
    "infinitive": "sling",
    "pastSimple": "slung",
    "pastParticiple": "slung",
    "infinitivePronunciation": "[slɪŋ]",
    "pastSimplePronunciation": "[slʌŋ]",
    "pastParticiplePronunciation": "[slʌŋ]",
    "translation": "жбурляти, вішати через плече, підвішувати"
  },
  {
    "infinitive": "slink",
    "pastSimple": "slinked / slunk",
    "pastParticiple": "slinked / slunk",
    "infinitivePronunciation": "[slɪŋk]",
    "pastSimplePronunciation": "[slɪŋkt / slʌŋk]",
    "pastParticiplePronunciation": "[slɪŋkt / slʌŋk]",
    "translation": "крастися, підкрадатися, народжувати передчасно"
  },
  {
    "infinitive": "slit",
    "pastSimple": "slit",
    "pastParticiple": "slit",
    "infinitivePronunciation": "[slɪt]",
    "pastSimplePronunciation": "[slɪt]",
    "pastParticiplePronunciation": "[slɪt]",
    "translation": "розрізати, перерізати"
  },
  {
    "infinitive": "smell",
    "pastSimple": "smelled / smelt",
    "pastParticiple": "smelled / smelt",
    "infinitivePronunciation": "[smɛl]",
    "pastSimplePronunciation": "[smɛld / smɛlt]",
    "pastParticiplePronunciation": "[smɛld / smɛlt]",
    "translation": "пахнути, нюхати"
  },
  {
    "infinitive": "smite",
    "pastSimple": "smote",
    "pastParticiple": "smitten",
    "infinitivePronunciation": "[smaɪt]",
    "pastSimplePronunciation": "[sməʊt]",
    "pastParticiplePronunciation": "[ˈsmɪtn]",
    "translation": "вражати, бити, мучити"
  },
  {
    "infinitive": "sneak",
    "pastSimple": "sneaked / snuck",
    "pastParticiple": "sneaked / snuck",
    "infinitivePronunciation": "[sniːk]",
    "pastSimplePronunciation": "[sniːkt / snʌk]",
    "pastParticiplePronunciation": "[sniːkt / snʌk]",
    "translation": "крастися, підкрадатися, красти, вислизати"
  },
  {
    "infinitive": "sow",
    "pastSimple": "sowed",
    "pastParticiple": "sown / sowed",
    "infinitivePronunciation": "[səʊ]",
    "pastSimplePronunciation": "[səʊd]",
    "pastParticiplePronunciation": "[səʊn / səʊd]",
    "translation": "сіяти, засівати, поширювати"
  },
  {
    "infinitive": "speak",
    "pastSimple": "spoke",
    "pastParticiple": "spoken",
    "infinitivePronunciation": "[spiːk]",
    "pastSimplePronunciation": "[spəʊk]",
    "pastParticiplePronunciation": "[ˈspəʊkən]",
    "translation": "говорити"
  },
  {
    "infinitive": "speed",
    "pastSimple": "sped / speeded",
    "pastParticiple": "sped / speeded",
    "infinitivePronunciation": "[spiːd]",
    "pastSimplePronunciation": "[spɛd / ˈspiːdɪd]",
    "pastParticiplePronunciation": "[spɛd / ˈspiːdɪd]",
    "translation": "поспішати, прискорювати, квапити"
  },
  {
    "infinitive": "spell",
    "pastSimple": "spelled / spelt",
    "pastParticiple": "spelled / spelt",
    "infinitivePronunciation": "[spɛl]",
    "pastSimplePronunciation": "[spɛld / spɛlt]",
    "pastParticiplePronunciation": "[spɛld / spɛlt]",
    "translation": "замовляти, зачаровувати; змінити, дати відпочинок; писати, вимовляти слово по буквах"
  },
  {
    "infinitive": "spend",
    "pastSimple": "spent",
    "pastParticiple": "spent",
    "infinitivePronunciation": "[spɛnd]",
    "pastSimplePronunciation": "[spɛnt]",
    "pastParticiplePronunciation": "[spɛnt]",
    "translation": "витрачати, виснажувати"
  },
  {
    "infinitive": "spill",
    "pastSimple": "spilled / spilt",
    "pastParticiple": "spilled / spilt",
    "infinitivePronunciation": "[spɪl]",
    "pastSimplePronunciation": "[spɪld / ˈspɪlt]",
    "pastParticiplePronunciation": "[spɪld / ˈspɪlt]",
    "translation": "проливати, розливатися"
  },
  {
    "infinitive": "spin",
    "pastSimple": "spun",
    "pastParticiple": "spun",
    "infinitivePronunciation": "[spɪn]",
    "pastSimplePronunciation": "[spʌn]",
    "pastParticiplePronunciation": "[spʌn]",
    "translation": "прясти, крутити, вертіти, плести"
  },
  {
    "infinitive": "spit",
    "pastSimple": "spit / spat",
    "pastParticiple": "spit / spat",
    "infinitivePronunciation": "[spɪt]",
    "pastSimplePronunciation": "[spɪt / spæt]",
    "pastParticiplePronunciation": "[spɪt / spæt]",
    "translation": "плювати, пронизувати, насаджувати, бризкати, капати"
  },
  {
    "infinitive": "spoil",
    "pastSimple": "spoiled / spoilt",
    "pastParticiple": "spoiled / spoilt",
    "infinitivePronunciation": "[spɔːɪl]",
    "pastSimplePronunciation": "[spɔːɪld / spɔɪlt]",
    "pastParticiplePronunciation": "[spɔːɪld / spɔɪlt]",
    "translation": "псувати, балувати"
  },
  {
    "infinitive": "spread",
    "pastSimple": "spread",
    "pastParticiple": "spread",
    "infinitivePronunciation": "[sprɛd]",
    "pastSimplePronunciation": "[sprɛd]",
    "pastParticiplePronunciation": "[sprɛd]",
    "translation": "поширюватися, розстеляти"
  },
  {
    "infinitive": "spring",
    "pastSimple": "sprang / sprung",
    "pastParticiple": "sprung",
    "infinitivePronunciation": "[sprɪŋ]",
    "pastSimplePronunciation": "[spræŋ / sprʌŋ]",
    "pastParticiplePronunciation": "[sprʌŋ]",
    "translation": "стрибати, вскочити"
  },
  {
    "infinitive": "stand",
    "pastSimple": "stood",
    "pastParticiple": "stood",
    "infinitivePronunciation": "[stænd]",
    "pastSimplePronunciation": "[stʊd]",
    "pastParticiplePronunciation": "[stood]",
    "translation": "стояти, бути розташованим"
  },
  {
    "infinitive": "stave",
    "pastSimple": "staved / stove",
    "pastParticiple": "staved / stove",
    "infinitivePronunciation": "[steɪv]",
    "pastSimplePronunciation": "[steɪvd / stəʊv]",
    "pastParticiplePronunciation": "[steɪvd / stəʊv]",
    "translation": "пробивати, розбивати"
  },
  {
    "infinitive": "steal",
    "pastSimple": "stole",
    "pastParticiple": "stolen",
    "infinitivePronunciation": "[stiːl]",
    "pastSimplePronunciation": "[stəʊl]",
    "pastParticiplePronunciation": "[ˈstəʊlən]",
    "translation": "красти, викрадати, домагатися"
  },
  {
    "infinitive": "stick",
    "pastSimple": "stuck",
    "pastParticiple": "stuck",
    "infinitivePronunciation": "[stɪk]",
    "pastSimplePronunciation": "[ stʌk]",
    "pastParticiplePronunciation": "[stʌk]",
    "translation": "встромляти, колоти, приклеювати, липнути"
  },
  {
    "infinitive": "sting",
    "pastSimple": "stung",
    "pastParticiple": "stung",
    "infinitivePronunciation": "[stɪŋ]",
    "pastSimplePronunciation": "[stʌŋ]",
    "pastParticiplePronunciation": "[stʌŋ]",
    "translation": "жалити, заподіювати біль, обманювати"
  },
  {
    "infinitive": "stink",
    "pastSimple": "stunk / stank",
    "pastParticiple": "stunk",
    "infinitivePronunciation": "[stɪŋk]",
    "pastSimplePronunciation": "[stʌŋk / stæŋk]",
    "pastParticiplePronunciation": "[stʌŋk]",
    "translation": "смердіти, погано пахнути; бути поганим"
  },
  {
    "infinitive": "strew",
    "pastSimple": "strewed",
    "pastParticiple": "strewn / strewed",
    "infinitivePronunciation": "[struː]",
    "pastSimplePronunciation": "[struːd]",
    "pastParticiplePronunciation": "[struːn / struːd]",
    "translation": "усіяти, розкидати, посипати"
  },
  {
    "infinitive": "stride",
    "pastSimple": "strode",
    "pastParticiple": "stridden",
    "infinitivePronunciation": "[straɪd]",
    "pastSimplePronunciation": "[strəʊd]",
    "pastParticiplePronunciation": "[ˈstrɪdn]",
    "translation": "крокувати, сидіти верхи"
  },
  {
    "infinitive": "strike",
    "pastSimple": "struck",
    "pastParticiple": "struck / stricken",
    "infinitivePronunciation": "[straɪk (hɪt)]",
    "pastSimplePronunciation": "[strʌk]",
    "pastParticiplePronunciation": "[strʌk / ˈstrɪkən]",
    "translation": "ударяти, вражати, страйкувати"
  },
  {
    "infinitive": "string",
    "pastSimple": "strung",
    "pastParticiple": "strung",
    "infinitivePronunciation": "[strɪŋ]",
    "pastSimplePronunciation": "[strʌŋ]",
    "pastParticiplePronunciation": "[strʌŋ]",
    "translation": "пов\\'язувати, натягувати, нанизувати"
  },
  {
    "infinitive": "strive",
    "pastSimple": "strove / strived",
    "pastParticiple": "striven / strived",
    "infinitivePronunciation": "[straɪv]",
    "pastSimplePronunciation": "[strəʊv / straɪvd]",
    "pastParticiplePronunciation": "[ˈstrɪvn / straɪvd]",
    "translation": "прагнути, намагатися, докладати зусилля, боротися"
  },
  {
    "infinitive": "sublet",
    "pastSimple": "sublet",
    "pastParticiple": "sublet",
    "infinitivePronunciation": "[ˌsʌbˈlɛt]",
    "pastSimplePronunciation": "[ˌsʌbˈlɛt]",
    "pastParticiplePronunciation": "[ˌsʌbˈlɛt]",
    "translation": "передавати в суборенду"
  },
  {
    "infinitive": "sunburn",
    "pastSimple": "sunburned / sunburnt",
    "pastParticiple": "sunburned / sunburnt",
    "infinitivePronunciation": "[ˈsʌnbɜːn]",
    "pastSimplePronunciation": "[ˈsʌnbɜːnd / ˈsʌnbɜːnt]",
    "pastParticiplePronunciation": "[ˈsʌnbɜːnd / ˈsʌnbɜːnt]",
    "translation": "обгорати на сонці"
  },
  {
    "infinitive": "swear",
    "pastSimple": "swore",
    "pastParticiple": "sworn",
    "infinitivePronunciation": "[sweə]",
    "pastSimplePronunciation": "[swɔː]",
    "pastParticiplePronunciation": "[swɔːn]",
    "translation": "клястися, присягати, лаятися"
  },
  {
    "infinitive": "sweat",
    "pastSimple": "sweat / sweated",
    "pastParticiple": "sweat / sweated",
    "infinitivePronunciation": "[swɛt]",
    "pastSimplePronunciation": "[swɛt / ˈswɛtɪd]",
    "pastParticiplePronunciation": "[swɛt / ˈswɛtɪd]",
    "translation": "потіти, сиріти, пітніти"
  },
  {
    "infinitive": "sweep",
    "pastSimple": "swept",
    "pastParticiple": "swept",
    "infinitivePronunciation": "[swiːp]",
    "pastSimplePronunciation": "[swɛpt]",
    "pastParticiplePronunciation": "[swɛpt]",
    "translation": "мести, прочищати, змітати, мчати"
  },
  {
    "infinitive": "swell",
    "pastSimple": "swelled",
    "pastParticiple": "swollen / swelled",
    "infinitivePronunciation": "[swɛl]",
    "pastSimplePronunciation": "[swɛld]",
    "pastParticiplePronunciation": "[ˈswəʊlən / swɛld]",
    "translation": "пухнути, роздуватися, набухати"
  },
  {
    "infinitive": "swim",
    "pastSimple": "swam",
    "pastParticiple": "swum",
    "infinitivePronunciation": "[swɪm]",
    "pastSimplePronunciation": "[swæm]",
    "pastParticiplePronunciation": "[swʌm]",
    "translation": "плавати, плисти"
  },
  {
    "infinitive": "swing",
    "pastSimple": "swung",
    "pastParticiple": "swung",
    "infinitivePronunciation": "[swɪŋ]",
    "pastSimplePronunciation": "[swʌŋ]",
    "pastParticiplePronunciation": "[swʌŋ]",
    "translation": "качати, хитатися, розгойдувати, висіти"
  },
  {
    "infinitive": "take",
    "pastSimple": "took",
    "pastParticiple": "taken",
    "infinitivePronunciation": "[teɪk]",
    "pastSimplePronunciation": "[tʊk]",
    "pastParticiplePronunciation": "[ˈteɪkən]",
    "translation": "брати, взяти"
  },
  {
    "infinitive": "teach",
    "pastSimple": "taught",
    "pastParticiple": "taught",
    "infinitivePronunciation": "[teach]",
    "pastSimplePronunciation": "[tɔːt]",
    "pastParticiplePronunciation": "[tɔːt]",
    "translation": "навчати, вчити"
  },
  {
    "infinitive": "tear",
    "pastSimple": "tore",
    "pastParticiple": "torn",
    "infinitivePronunciation": "[teə]",
    "pastSimplePronunciation": "[tɔː]",
    "pastParticiplePronunciation": "[tɔːn]",
    "translation": "рвати, зірвати, розірвати"
  },
  {
    "infinitive": "telecast",
    "pastSimple": "telecast",
    "pastParticiple": "telecast",
    "infinitivePronunciation": "[ˈtɛlɪkɑːst]",
    "pastSimplePronunciation": "[ˈtɛlɪkɑːst]",
    "pastParticiplePronunciation": "[ˈtɛlɪkɑːst]",
    "translation": "передавати по телебаченню"
  },
  {
    "infinitive": "tell",
    "pastSimple": "told",
    "pastParticiple": "told",
    "infinitivePronunciation": "[tɛl]",
    "pastSimplePronunciation": "[təʊld]",
    "pastParticiplePronunciation": "[təʊld]",
    "translation": "говорити, розповідати, повідомляти"
  },
  {
    "infinitive": "test-drive",
    "pastSimple": "test-drove",
    "pastParticiple": "test-driven",
    "infinitivePronunciation": "[tɛst-draɪv]",
    "pastSimplePronunciation": "[tɛst-drəʊv]",
    "pastParticiplePronunciation": "[tɛst-ˈdrɪvn]",
    "translation": "робити пробну поїздку, тестувати"
  },
  {
    "infinitive": "test-fly",
    "pastSimple": "test-flew",
    "pastParticiple": "test-flown",
    "infinitivePronunciation": "[tɛst-flaɪ]",
    "pastSimplePronunciation": "[tɛst-fluː]",
    "pastParticiplePronunciation": "[tɛst-fləʊn]",
    "translation": "випробовувати в літних умовах (літак)"
  },
  {
    "infinitive": "think",
    "pastSimple": "thought",
    "pastParticiple": "thought",
    "infinitivePronunciation": "[θɪŋk]",
    "pastSimplePronunciation": "[θɔːt]",
    "pastParticiplePronunciation": "[θɔːt]",
    "translation": "думати, розмірковувати"
  },
  {
    "infinitive": "thrive",
    "pastSimple": "throve / thrived",
    "pastParticiple": "thrived / thriven",
    "infinitivePronunciation": "[]",
    "pastSimplePronunciation": "[]",
    "pastParticiplePronunciation": "[]",
    "translation": "процвітати, цвісти, розростатися"
  },
  {
    "infinitive": "throw",
    "pastSimple": "threw",
    "pastParticiple": "thrown",
    "infinitivePronunciation": "[θrəʊ]",
    "pastSimplePronunciation": "[θruː]",
    "pastParticiplePronunciation": "[θrəʊn]",
    "translation": "кидати, жбурляти"
  },
  {
    "infinitive": "thrust",
    "pastSimple": "thrust",
    "pastParticiple": "thrust",
    "infinitivePronunciation": "[θrʌst]",
    "pastSimplePronunciation": "[θrʌst]",
    "pastParticiplePronunciation": "[θrʌst]",
    "translation": "колоти, засовувати, штовхати, лізти"
  },
  {
    "infinitive": "tread",
    "pastSimple": "trod",
    "pastParticiple": "trodden / trod",
    "infinitivePronunciation": "[trɛd]",
    "pastSimplePronunciation": "[trɒd]",
    "pastParticiplePronunciation": "[ˈtrɒdn / trɒd]",
    "translation": "йти, ступати, топтати, давити"
  },
  {
    "infinitive": "typecast",
    "pastSimple": "typecast",
    "pastParticiple": "typecast",
    "infinitivePronunciation": "[typecast]",
    "pastSimplePronunciation": "[typecast]",
    "pastParticiplePronunciation": "[typecast]",
    "translation": "підбирати акторів по типажності"
  },
  {
    "infinitive": "typeset",
    "pastSimple": "typeset",
    "pastParticiple": "typeset",
    "infinitivePronunciation": "[typeset]",
    "pastSimplePronunciation": "[typeset]",
    "pastParticiplePronunciation": "[typeset]",
    "translation": "набирати текст для друку, визначати тип"
  },
  {
    "infinitive": "typewrite",
    "pastSimple": "typewrote",
    "pastParticiple": "typewritten",
    "infinitivePronunciation": "[ˈtaɪpraɪt]",
    "pastSimplePronunciation": "[typewrote]",
    "pastParticiplePronunciation": "[ˈtaɪpˌrɪtn]",
    "translation": "друкувати на друкарській машинці, набирати текст"
  },
  {
    "infinitive": "unbend",
    "pastSimple": "unbent",
    "pastParticiple": "unbent",
    "infinitivePronunciation": "[ʌnˈbɛnd]",
    "pastSimplePronunciation": "[ʌnˈbɛnt]",
    "pastParticiplePronunciation": "[ʌnˈbɛnt]",
    "translation": "розгинатися, випростатися, пом\\'якшуватися"
  },
  {
    "infinitive": "unbind",
    "pastSimple": "unbound",
    "pastParticiple": "unbound",
    "infinitivePronunciation": "[ʌnˈbaɪnd]",
    "pastSimplePronunciation": "[ʌnˈbaʊnd]",
    "pastParticiplePronunciation": "[ʌnˈbaʊnd]",
    "translation": "розв\\'язати, розпускати, послаблювати"
  },
  {
    "infinitive": "unclothe",
    "pastSimple": "unclothed / unclad",
    "pastParticiple": "unclothed / unclad",
    "infinitivePronunciation": "[ʌnˈkləʊð]",
    "pastSimplePronunciation": "[ʌnˈkləʊðd / ʌnˈklæd]",
    "pastParticiplePronunciation": "[ʌnˈkləʊðd / ʌnˈklæd]",
    "translation": "роздягатися, роздягати, оголювати"
  },
  {
    "infinitive": "underbid",
    "pastSimple": "underbid",
    "pastParticiple": "underbid",
    "infinitivePronunciation": "[ˌʌndəˈbɪd]",
    "pastSimplePronunciation": "[ˌʌndəˈbɪd]",
    "pastParticiplePronunciation": "[ˌʌndəˈbɪd]",
    "translation": "перебивати ціну, призначати нижчу ціну"
  },
  {
    "infinitive": "undercut",
    "pastSimple": "undercut",
    "pastParticiple": "undercut",
    "infinitivePronunciation": "[ˈʌndəkʌt]",
    "pastSimplePronunciation": "[ˈʌndəkʌt]",
    "pastParticiplePronunciation": "[ˈʌndəkʌt]",
    "translation": "підрізати, збивати ціни, робити підсічку"
  },
  {
    "infinitive": "underfeed",
    "pastSimple": "underfed",
    "pastParticiple": "underfed",
    "infinitivePronunciation": "[ˌʌndəˈfiːd]",
    "pastSimplePronunciation": "[ˌʌndəˈfɛd]",
    "pastParticiplePronunciation": "[ˌʌndəˈfɛd]",
    "translation": "недогодовувати, недоїдати"
  },
  {
    "infinitive": "undergo",
    "pastSimple": "underwent",
    "pastParticiple": "undergone",
    "infinitivePronunciation": "[ˌʌndəˈgəʊ]",
    "pastSimplePronunciation": "[ˌʌndəˈwɛnt]",
    "pastParticiplePronunciation": "[ˌʌndəˈgɒn]",
    "translation": "відчувати, переносити"
  },
  {
    "infinitive": "underlie",
    "pastSimple": "underlay",
    "pastParticiple": "underlain",
    "infinitivePronunciation": "[ˌʌndəˈlaɪ]",
    "pastSimplePronunciation": "[ˌʌndəˈleɪ]",
    "pastParticiplePronunciation": "[ˌʌndəˈleɪn]",
    "translation": "підкреслювати, виділяти"
  },
  {
    "infinitive": "undersell",
    "pastSimple": "undersold",
    "pastParticiple": "undersold",
    "infinitivePronunciation": "[ˌʌndəˈsɛl]",
    "pastSimplePronunciation": "[ˌʌndəˈsəʊld]",
    "pastParticiplePronunciation": "[ˌʌndəˈsəʊld]",
    "translation": "продавати дешевше інших"
  },
  {
    "infinitive": "underspend",
    "pastSimple": "underspent",
    "pastParticiple": "underspent",
    "infinitivePronunciation": "[underspend]",
    "pastSimplePronunciation": "[underspent]",
    "pastParticiplePronunciation": "[underspent]",
    "translation": "витрачати недостатньо, дуже мало"
  },
  {
    "infinitive": "understand",
    "pastSimple": "understood",
    "pastParticiple": "understood",
    "infinitivePronunciation": "[ˌʌndəˈstænd]",
    "pastSimplePronunciation": "[ˌʌndəˈstʊd]",
    "pastParticiplePronunciation": "[ˌʌndəˈstʊd]",
    "translation": "розуміти, усвідомлювати"
  },
  {
    "infinitive": "undertake",
    "pastSimple": "undertook",
    "pastParticiple": "undertaken",
    "infinitivePronunciation": "[ˌʌndəˈteɪk]",
    "pastSimplePronunciation": "[ˌʌndəˈtʊk]",
    "pastParticiplePronunciation": "[ˌʌndəˈteɪkən]",
    "translation": "робити, гарантувати, здійснювати"
  },
  {
    "infinitive": "underwrite",
    "pastSimple": "underwrote",
    "pastParticiple": "underwritten",
    "infinitivePronunciation": "[ˈʌndəraɪt]",
    "pastSimplePronunciation": "[ˈʌndərəʊt]",
    "pastParticiplePronunciation": "[ˈʌndəˌrɪtn]",
    "translation": "підписувати, гарантувати, ручатися"
  },
  {
    "infinitive": "undo",
    "pastSimple": "undid",
    "pastParticiple": "undone",
    "infinitivePronunciation": "[ʌnˈduː]",
    "pastSimplePronunciation": "[ʌnˈdɪd]",
    "pastParticiplePronunciation": "[ʌnˈdʌn]",
    "translation": "розстібати, знищувати, скасовувати, розбирати"
  },
  {
    "infinitive": "unfreeze",
    "pastSimple": "unfroze",
    "pastParticiple": "unfrozen",
    "infinitivePronunciation": "[ʌnˈfriːz]",
    "pastSimplePronunciation": "[ˌʌnˈfrəʊz]",
    "pastParticiplePronunciation": "[ˌʌnˈfrəʊzn]",
    "translation": "розморозити, розморожувати"
  },
  {
    "infinitive": "unhang",
    "pastSimple": "unhung",
    "pastParticiple": "unhung",
    "infinitivePronunciation": "[ʌnˈhæŋ]",
    "pastSimplePronunciation": "[ʌnˈhʌŋ]",
    "pastParticiplePronunciation": "[ʌnˈhʌŋ]",
    "translation": "знімати (щось, що висить)"
  },
  {
    "infinitive": "unhide",
    "pastSimple": "unhid",
    "pastParticiple": "unhidden",
    "infinitivePronunciation": "[ˌʌnˈhaɪd]",
    "pastSimplePronunciation": "[unhid]",
    "pastParticiplePronunciation": "[ˌʌnˈhɪdn]",
    "translation": "показувати приховані елементи"
  },
  {
    "infinitive": "unknit",
    "pastSimple": "unknitted / unknit",
    "pastParticiple": "unknitted / unknit",
    "infinitivePronunciation": "[ˌʌnˈnɪt]",
    "pastSimplePronunciation": "[ˌʌnˈnɪtɪd / ˌʌnˈnɪt]",
    "pastParticiplePronunciation": "[ˌʌnˈnɪtɪd / ˌʌnˈnɪt]",
    "translation": "розпускати (в\\'язання), розплутувати, роз\\'єднувати"
  },
  {
    "infinitive": "unlearn",
    "pastSimple": "unlearned / unlearnt",
    "pastParticiple": "unlearned / unlearnt",
    "infinitivePronunciation": "[ʌnˈlɜːn]",
    "pastSimplePronunciation": "[ʌnˈlɜːnd / ʌnˈlɜːnt]",
    "pastParticiplePronunciation": "[ʌnˈlɜːnd / ʌnˈlɜːnt]",
    "translation": "розучитися, забути те, що знав"
  },
  {
    "infinitive": "unsew",
    "pastSimple": "unsewed",
    "pastParticiple": "unsewn / unsewed",
    "infinitivePronunciation": "[ˌʌnˈsəʊ]",
    "pastSimplePronunciation": "[ˌʌnˈsəʊd]",
    "pastParticiplePronunciation": "[ˌʌnˈsəʊn / ˌʌnˈsəʊd]",
    "translation": "розпорювати щось зшите"
  },
  {
    "infinitive": "unsling",
    "pastSimple": "unslung",
    "pastParticiple": "unslung",
    "infinitivePronunciation": "[ˌʌnˈslɪŋ]",
    "pastSimplePronunciation": "[ˌʌnˈslʌŋ]",
    "pastParticiplePronunciation": "[ˌʌnˈslʌŋ]",
    "translation": "відв\\'язувати, знімати, звільнити від ременя"
  },
  {
    "infinitive": "unspin",
    "pastSimple": "unspun",
    "pastParticiple": "unspun",
    "infinitivePronunciation": "[ˌʌnˈspɪn]",
    "pastSimplePronunciation": "[ˌʌnˈspʌn]",
    "pastParticiplePronunciation": "[ˌʌnˈspʌn]",
    "translation": "розпускати, розплітати, розплутувати"
  },
  {
    "infinitive": "unstick",
    "pastSimple": "unstuck",
    "pastParticiple": "unstuck",
    "infinitivePronunciation": "[ʌnˈstɪk]",
    "pastSimplePronunciation": "[ʌnˈstʌk]",
    "pastParticiplePronunciation": "[ʌnˈstʌk]",
    "translation": "віддирати, відклеювати, злетіти"
  },
  {
    "infinitive": "unstring",
    "pastSimple": "unstrung",
    "pastParticiple": "unstrung",
    "infinitivePronunciation": "[ʌnˈstrɪŋ]",
    "pastSimplePronunciation": "[ʌnˈstrʌŋ]",
    "pastParticiplePronunciation": "[ʌnˈstrʌŋ]",
    "translation": "знімати, послаблювати, розпускати, розплітати, розхитувати"
  },
  {
    "infinitive": "unweave",
    "pastSimple": "unwove / unweaved",
    "pastParticiple": "unwoven / unweaved",
    "infinitivePronunciation": "[ʌnˈwiːv]",
    "pastSimplePronunciation": "[ʌnˈwəʊv / ʌnˈwiːvd]",
    "pastParticiplePronunciation": "[ʌnˈwəʊvən / ʌnˈwiːvd]",
    "translation": "розпускати, розплітати (тканину)"
  },
  {
    "infinitive": "unwind",
    "pastSimple": "unwound",
    "pastParticiple": "unwound",
    "infinitivePronunciation": "[ʌnˈwaɪnd]",
    "pastSimplePronunciation": "[ʌnˈwaʊnd]",
    "pastParticiplePronunciation": "[ʌnˈwaʊnd]",
    "translation": "расмативать, розкручувати, розвивати"
  },
  {
    "infinitive": "uphold",
    "pastSimple": "upheld",
    "pastParticiple": "upheld",
    "infinitivePronunciation": "[ʌpˈhəʊld]",
    "pastSimplePronunciation": "[ʌpˈhɛld]",
    "pastParticiplePronunciation": "[ʌpˈhɛld]",
    "translation": "підтримувати, допомагати, утримувати"
  },
  {
    "infinitive": "upset",
    "pastSimple": "upset",
    "pastParticiple": "upset",
    "infinitivePronunciation": "[ʌpˈsɛt]",
    "pastSimplePronunciation": "[ʌpˈsɛt]",
    "pastParticiplePronunciation": "[ʌpˈsɛt]",
    "translation": "перекидати, засмучувати, засмучувати"
  },
  {
    "infinitive": "wake",
    "pastSimple": "woke / waked",
    "pastParticiple": "woken / waked",
    "infinitivePronunciation": "[weɪk]",
    "pastSimplePronunciation": "[wəʊk / weɪkt]",
    "pastParticiplePronunciation": "[ˈwəʊkən / weɪkt]",
    "translation": "будити, пробуджуватися"
  },
  {
    "infinitive": "waylay",
    "pastSimple": "waylaid",
    "pastParticiple": "waylaid",
    "infinitivePronunciation": "[weɪˈleɪ]",
    "pastSimplePronunciation": "[waylaid]",
    "pastParticiplePronunciation": "[waylaid]",
    "translation": "підстерігати, влаштовувати засідку"
  },
  {
    "infinitive": "wear",
    "pastSimple": "wore",
    "pastParticiple": "worn",
    "infinitivePronunciation": "[weə]",
    "pastSimplePronunciation": "[wɔː]",
    "pastParticiplePronunciation": "[wɔːn]",
    "translation": "носити одяг"
  },
  {
    "infinitive": "weave",
    "pastSimple": "wove / weaved",
    "pastParticiple": "woven / weaved",
    "infinitivePronunciation": "[wiːv]",
    "pastSimplePronunciation": "[wəʊv / wiːvd]",
    "pastParticiplePronunciation": "[ ˈwəʊvən / wiːvd]",
    "translation": "ткати, плести"
  },
  {
    "infinitive": "wed",
    "pastSimple": "wed / wedded",
    "pastParticiple": "wed / wedded",
    "infinitivePronunciation": "[wɛd]",
    "pastSimplePronunciation": "[wɛd / ˈwɛdɪd]",
    "pastParticiplePronunciation": "[wɛd / ˈwɛdɪd]",
    "translation": "вінчати, видавати заміж, одружуватися, виходити заміж"
  },
  {
    "infinitive": "weep",
    "pastSimple": "wept",
    "pastParticiple": "wept",
    "infinitivePronunciation": "[wiːp]",
    "pastSimplePronunciation": "[wɛpt]",
    "pastParticiplePronunciation": "[wɛpt]",
    "translation": "плакати, тужити, пітніти"
  },
  {
    "infinitive": "wet",
    "pastSimple": "wet / wetted",
    "pastParticiple": "wet / wetted",
    "infinitivePronunciation": "[wɛt]",
    "pastSimplePronunciation": "[wɛt / ˈwɛtɪd]",
    "pastParticiplePronunciation": "[wɛt / ˈwɛtɪd]",
    "translation": "мочити, промочити, мокнути"
  },
  {
    "infinitive": "win",
    "pastSimple": "won",
    "pastParticiple": "won",
    "infinitivePronunciation": "[wɪn]",
    "pastSimplePronunciation": "[wʌn]",
    "pastParticiplePronunciation": "[wʌn]",
    "translation": "вигравати, перемагати"
  },
  {
    "infinitive": "wind",
    "pastSimple": "wound",
    "pastParticiple": "wound",
    "infinitivePronunciation": "[wɪnd]",
    "pastSimplePronunciation": "[wuːnd]",
    "pastParticiplePronunciation": "[ wuːnd]",
    "translation": "чуяти, дути, намотувати, заводити (механізм), звиватися"
  },
  {
    "infinitive": "withdraw",
    "pastSimple": "withdrew",
    "pastParticiple": "withdrawn",
    "infinitivePronunciation": "[wɪðˈdrɔː]",
    "pastSimplePronunciation": "[wɪðˈdruː]",
    "pastParticiplePronunciation": "[wɪðˈdrɔːn]",
    "translation": "брати назад, віднімати, відкликати, витягувати"
  },
  {
    "infinitive": "withhold",
    "pastSimple": "withheld",
    "pastParticiple": "withheld",
    "infinitivePronunciation": "[wɪðˈhəʊld]",
    "pastSimplePronunciation": "[wɪðˈhɛld]",
    "pastParticiplePronunciation": "[wɪðˈhɛld]",
    "translation": "утримуватися, утримувати, приховувати"
  },
  {
    "infinitive": "withstand",
    "pastSimple": "withstood",
    "pastParticiple": "withstood",
    "infinitivePronunciation": "[wɪðˈstænd]",
    "pastSimplePronunciation": "[wɪðˈstʊd]",
    "pastParticiplePronunciation": "[wɪðˈstʊd]",
    "translation": "встояти, витримувати, чинити опір"
  },
  {
    "infinitive": "wring",
    "pastSimple": "wrung",
    "pastParticiple": "wrung",
    "infinitivePronunciation": "[rɪŋ]",
    "pastSimplePronunciation": "[rʌŋ]",
    "pastParticiplePronunciation": "[rʌŋ]",
    "translation": "викручувати, вижимати, звиватися, мучити"
  },
  {
    "infinitive": "write",
    "pastSimple": "wrote",
    "pastParticiple": "written",
    "infinitivePronunciation": "[raɪt]",
    "pastSimplePronunciation": "[rəʊt]",
    "pastParticiplePronunciation": "[ˈrɪtn]",
    "translation": "писати"
  }
];

module.exports = verbs;