// i18n.js
// Globální překlady: STR.cs + STR.en
// app.js si bere překlady přes useLang() -> t = STR[lang]

window.STR = {
  cs: {
    brand1: "Jana Segelberg",
    brand2: "Stínění s esencí",

    // Header nav
  nav: ["Jak pracujeme", "Kolik zaplatíte", "Galerie", "Esence", "Kontakt"],

    // Hero
 // Hero
heroSub: "Záclony · Závěsy · Rolety · Garnýže na míru",
cta: "Domluvit konzultaci",

heroSlides: [
  { h1: "Záclony, závěsy, rolety a garnýže podle vašeho prostoru", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
  { h1: "Navrhujeme stínění, které dává interiéru klid, soukromí a atmosféru", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
  { h1: "Kompletní realizace od konzultace po finální montáž", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
],

homeAboutH: "Navrhujeme a realizujeme vnitřní stínění",

homeAbout: [
  "Stínění není samostatný prvek. Vybíráme ho v návaznosti na prostor, materiály i způsob používání tak, aby celek působil klidně a jistě."
],

    serviceCardCta: "Zobrazit orientační ceny →",
services: [
  { name: "Záclony", note: "Zjemní denní světlo, zútulní a odlehčí prostor." },
  { name: "Závěsy", note: "Pomohou se zatemněním, akustikou i pocitem tepla a klidu." },
  { name: "Rolety", note: "Praktické řešení pro přesnou regulaci světla a čistý vzhled." },
  { name: "Technické systémy", note: "Kolejnice, garnýže a řešení navržená podle prostoru." },
  { name: "Servis", note: "Sundání, vyčištění, vyžehlení a opětovné zavěšení našich realizací." }
],
serviceCardCta: "Zobrazit orientační ceny →",

    inspH: "Atmosféra prostoru",
inspLead:
  "Správně navržené stínění mění víc než jen okno.\nOvlivňuje světlo během dne, soukromí večer i celkový dojem z interiéru. Rozdíl mezi prostorem bez stínění a promyšleným řešením bývá větší, než čekáte.",
    inspTags: [
      "Světlo · Prostor · Svoboda",
      "Měkkost · Pohyb · Soukromí",
      "Funkčnost · Ticho · Domov"
    ],

    benefitsH: "Proč si klienti vybírají nás",
benefits: [
  { name: "Individuální návrh", note: "Každý prostor má jiné světlo, proporce i potřeby. Návrh proto vzniká vždy podle konkrétního interiéru." },
  { name: "20 let zkušeností", note: "Známe materiály, technická řešení i detaily, které rozhodují o výsledku." },
  { name: "Kompletní realizace", note: "Od první konzultace přes zaměření a výrobu až po montáž a finální zavěšení." }
],

benefitCardCta: "Zjistit víc →",

    faqH: "Často se ptáte",
faq: [
  { q: "Jak probíhá konzultace?", a: "Přijedeme k vám, podíváme se na prostor, probereme vaše potřeby a doporučíme vhodné řešení stínění." },
  { q: "Jak dlouho trvá realizace?", a: "Obvykle 2–8 týdnů podle rozsahu zakázky, zvolených materiálů a dostupnosti." },
  { q: "Přivezete vzorky látek k nám domů?", a: "Ano, vzorky látek vozíme na osobní konzultaci přímo do vašeho prostoru, aby bylo možné vybírat v reálném světle a kontextu interiéru." },
  { q: "Dodáváte i kolejnice a garnýže?", a: "Ano, zajišťujeme kompletní dodání včetně kolejnic, garnýží, technických systémů a montáže." },
  { q: "Je možné řešit i jen jednu místnost?", a: "Ano. Navrhujeme jak celé interiéry, tak jednotlivé místnosti podle konkrétních potřeb klienta." }
],

    homeCtaNote: "Praha a okolí. Konzultace přímo ve vašem interiéru. Návrh, výroba i montáž na míru.",

homeTrust: [
  { value: "20+", label: "let zkušeností" },
  { value: "Individuální návrh", label: "podle prostoru a způsobu využití" },
  { value: "Kompletní servis", label: "od návrhu po montáž" },
  { value: "Spolupráce", label: "s architekty a designéry" }
],



    // Process
    processH: "Jak pracujeme",
    steps: ["Konzultace", "Návrh a cena", "Výroba", "Realizace"],
     stepsTxt: [
      "Přijedeme za vámi, prostor si projdeme přímo na místě a vše přesně zaměříme.\n\nProbereme zda od stínění očekáváte soukromí, zatemnění nebo čistě dekorativní funkci.\n\nUkážeme vám vzorky látek a doporučíme řešení, která dávají v prostoru smysl po technické i vizuální stránce.\n\nPo konzultaci budete mít jasno, jaké možnosti připadají v úvahu a jakým směrem se návrh bude ubírat.",
      "Na základě vybraných materiálů a technického řešení připravíme cenovou nabídku.\n\nTa slouží jako výchozí bod. Pokud je potřeba cenu upravit, hledáme společně alternativy v materiálech, technice nebo skladbě řešení.\n\nCílem je najít rovnováhu mezi funkčností, estetikou a rozpočtem.\n\nPřed zahájením výroby přesně víte, co bude realizováno a v jaké ceně.",
      "Po schválení nabídky a složení zálohy zahajujeme výrobu.\n\nV této fázi probíhá zpracování textilu a příprava všech technických prvků.\n\nSoučasně domlouváme termín realizace tak, aby navazoval na dokončení výroby.\n\nVýroba obvykle trvá několik týdnů podle rozsahu zakázky a zvolených materiálů.",
       "Hotové stínění přivezeme, odborně namontujeme a textil pečlivě pověsíme.\n\nZáclony i závěsy vyžehlíme, nadekorujeme a doladíme tak, aby vše fungovalo vizuálně i technicky.\n\nPo dokončení práce prostor uklidíme a předáme vám ho připravený k používání.\n\nNa místě vám vysvětlíme ovládání a doporučíme vhodnou údržbu, aby stínění dlouhodobě fungovalo tak, jak má."
    ],
    processImgs: [
      "assets/img/process/process-01.webp",
      "assets/img/process/process-02.webp",
      "assets/img/process/process-03.webp",
      "assets/img/process/process-04.webp"
    ],
    processBridges: ["Z pozorování vzniká směr.", "Návrh se mění v realitu.", "Detail rozhoduje o výsledku."],
    processMicroByStep: [
      "Světlo, proporce, rytmus dne.",
      "Materiál, technika, harmonie.",
      "Řemeslo, přesnost, trpělivost.",
      "Montáž, doladění, klid."
    ],
    processBehindH: "Co stojí za naší prací",
    processBehindCards: [
      {
        id: "individualni-navrh",
        title: "Individuální návrh",
        p1: "Každý prostor má jiné světlo, jiné proporce a jiný rytmus dne.",
        p2: "Návrh vzniká přímo na místě z pozorování světla, dispozice prostoru a způsobu, jak interiér používáte.",
        p3: "Individuální návrh pro nás znamená společně najít správnou volbu."
      },
      {
        id: "zkusenosti",
        title: "20 let zkušeností",
        p1: "Zkušenosti nám dávají nadhled a jistotu při rozhodování.",
        p2: "Pomáháme vám se zorientovat v možnostech a sladit funkčnost s estetikou.",
        p3: "Výsledkem je řešení, které dává smysl nejen vizuálně, ale i funkčně a dlouhodobě.",
      },
      {
        id: "detail",
        title: "Preciznost a jemnost v detailu",
        p1: "Kvalita zpracování a technické provedení rozhodují o tom, jestli stínění bude dlouhodobě fungovat a dobře vypadat i po letech.",
        p2: "V detailech se ukazuje rozdíl mezi řešením, které jen dobře vypadá, a řešením, které obstojí v čase.",
        p3: "Preciznost a detail jsou viditelné na první pohled, právě v nich se potkává vaše očekávání s naší zkušeností.",
      }
    ],
    processEnding: "Cílem je, abyste se v prostoru cítili přirozeně a dobře.",

    // Pricing
   priceH: "Kolik stojí stínění od nás",
    
    
    pricingIntro: [
  "Cena stínění na míru se liší podle velikosti oken, typu materiálu a zvoleného řešení.",
  "Na této stránce najdete orientační ceny záclon, závěsů, rolet, kolejnic a garnýží, abyste si mohli udělat představu ještě před konzultací.",
  "Každý návrh připravujeme individuálně podle prostoru, světla a způsobu využití interiéru."
],


    pricingDisclaimer:
      "Uvedené částky jsou orientační scénáře pro představu. Konkrétní návrh a rozpočet vždy upřesníme po konzultaci na místě podle rozměrů, zvolených materiálů a technického řešení.",
    openDetail: "Otevřít detail",
    writeMe: "Nezávazná konzultace",
    close: "Zavřít",


   pricingItems: [
  {
    key: "zaclon",
    title: "Záclony",
    img: "assets/img/pricing/pricing-01.webp",
    vibe: "Světlo zůstává. Prostor se zjemní a zútulní.",
    micro: "Světlo, proporce, jemnost.",
    intro: "Záclony propouští denní světlo a zároveň vytváří základní soukromí v interiéru. Ideální řešení pro obývací pokoje, ložnice i velká francouzská okna.",
    rangesTitle: "Orientačně (pro představu)",
    ranges: [
      { label: "malé okno (200 x 270cm)", value: "cca 3–16 tis. Kč" },
      { label: "velké okno (500 x 290cm)", value: "cca 8–42 tis. Kč" }
    ],
    rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
    tiersTitle: "Typy",
    tiers: [
      { name: "Základní lehké voály", note: "Vzdušné látky s nižší pořizovací cenou." },
      { name: "Střední kategorie", note: "Vyvážený poměr ceny, vzhledu a funkce." },
      { name: "Prémiové tkaniny", note: "Exkluzivní textura, přírodní materiály." }
    ]
  },
  {
    key: "zaves",
    title: "Závěsy",
    img: "assets/img/pricing/pricing-02.webp",
    vibe: "Vytvoří soukromí. Večer zklidní. Ráno ochrání.",
    micro: "Materiál, ticho, komfort.",
    intro: "Závěsy zajišťují soukromí, zatemnění a pomáhají regulovat světlo i teplotu v prostoru. Vhodné do ložnic, obývacích pokojů i interiérů, kde chcete dosáhnout maximálního klidu.",
    rangesTitle: "Orientačně (pro představu)",
    ranges: [
      { label: "malé okno (200 x 270cm)", value: "cca 6–21 tis. Kč" },
      { label: "velké okno (500 x 290cm)", value: "cca 15–49 tis. Kč" }
    ],
    rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
    tiersTitle: "Typy",
    tiers: [
      { name: "Dekorativní závěs", note: "Primárně vzhled a soukromí." },
      { name: "Dim-out", note: "Ztlumí světlo, ale úplnou tmu neudělá." },
      { name: "Blackout", note: "Maximální zatemnění, částečná tepelná izolace." }
    ]
  },
  {
    key: "roleta",
    title: "Rolety",
    img: "assets/img/pricing/roleta-latkova.webp",
    vibe: "Čisté linie. Funkce bez kompromisu.",
    micro: "Regulace světla, jednoduchost.",
    intro: "Rolety umožňují přesnou regulaci světla a čisté, minimalistické řešení bez závěsů. Vhodné pro kuchyně, koupelny, pracovny i moderní interiéry.",
    subtypes: [
      {
        key: "latkova",
        label: "Látková roleta",
        img: "assets/img/pricing/roleta-latkova.webp",
        micro: "Regulace světla, jednoduchost.",
        intro: "Látkové rolety umožňují regulaci světla podle zvoleného materiálu od lehkého zastínění po výraznější zatemnění. Praktické řešení pro každodenní používání.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (130 x 200cm)", value: "cca 10–35 tis. Kč / ks" },
          { label: "velké okno (350 x 300cm)", value: "cca 32–85 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Screen / denní", note: "Regulace světla, vzdušnost." },
          { name: "Zatemňovací", note: "Větší soukromí a tlumení světla." },
          { name: "Motor", note: "Komfort, vyšší náklady." }
        ]
      },
      {
        key: "rimska",
        label: "Římská roleta",
        img: "assets/img/pricing/roleta-rimska.webp",
        micro: "Měkká textilní vrstva, dekor a klid.",
        intro: "Římské rolety kombinují funkčnost rolety a vzhled závěsu. Vhodné do interiérů, kde chcete zachovat měkkost textilu bez klasických závěsů.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (110 x 150cm)", value: "cca 6–11 tis. Kč / ks" },
          { label: "velké okno (180 x 250cm)", value: "cca 14–19 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Ze záclonových látek", note: "Vzdušnost, praktičnost." },
          { name: "Ze závěsových látek", note: "Soukromí, zatemnění." },
          { name: "Motor", note: "Komfort, vyšší náklady." }
        ]
      },
      {
        key: "plisse",
        label: "Plissé roleta",
        img: "assets/img/pricing/roleta-plisse.webp",
        micro: "Přesné dávkování světla. Skvělé i na atypy.",
        intro: "Plissé rolety umožňují stínění shora i zdola a umožňuje přesně regulovat světlo. Ideální řešení pro atypická okna a specifické situace.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (80 x 100cm)", value: "cca 3,3–6 tis. Kč / ks" },
          { label: "velké okno (120 x 220cm)", value: "cca 7–16 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Screen / denní", note: "Regulace světla, vzdušnost." },
          { name: "Zatemňovací", note: "Větší soukromí a tlumení světla." }
        ]
      }
    ]
  },
  {
    key: "systemy",
    title: "Kolejnice a garnýže",
    img: "assets/img/pricing/systemy-kolejnice.webp",
    vibe: "Základ který vše drží a řídí.",
    micro: "Funkční i dekorativní.",
    intro: "Kolejnice a garnýže zajišťují správnou funkci i vzhled stínění. Navrhujeme je podle prostoru a typu textilu.",
    subtypes: [
      {
        key: "kolejnice",
        label: "Kolejnice",
        img: "assets/img/pricing/systemy-kolejnice.webp",
        micro: "Čistá linie. Funkce a přesnost.",
        intro: "Kolejnice na závěsy a záclony umožňují čisté a funkční řešení stínění. Vhodné pro stropy, stěny a atypické prostory včetně ohýbaných variant.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (200 x 270cm)", value: "cca 1–13 tis. Kč" },
          { label: "velké okno (500 x 290cm)", value: "cca 2.5–18 tis. Kč" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Rovná", note: "Jednoduché, čisté řešení." },
          { name: "Ohýbaná", note: "Podle dispozice a vedení prostoru." },
          { name: "Motor", note: "Komfort a automatizace." }
        ]
      },
      {
        key: "garnyze",
        label: "Garnýže",
        img: "assets/img/pricing/systemy-garnyze.webp",
        micro: "Dekor. Detail, který je vidět.",
        intro: "Garnýže tvoří viditelný prvek interiéru. Volíme materiály, barvy i detaily tak, aby ladily s textilem a celkovým stylem prostoru.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (200 x 270cm)", value: "cca 1–13 tis. Kč" },
          { label: "velké okno (500 x 290cm)", value: "cca 2.5–18 tis. Kč" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Klasická", note: "Dekorativní řešení do bytů i domů." },
          { name: "Designová", note: "Výraznější materiál, povrch, detail." },
          { name: "Individuální řešení", note: "Specifické uchycení, délky, rohy." }
        ]
      }
    ]
  },

      {
        key: "servis",
        title: "Servis a údržba stínění",
        img: "assets/img/pricing/pricing-05.webp",
        vibe: "Profesionální údržba ve třech krocích.",
        micro: "Znovu jako nové.",
       intro: "Zajišťujeme servis záclon a závěsů od sundání přes praní nebo čištění až po opětovné zavěšení a finální úpravu.",
        rangesTitle: "Orientačně podle rozsahu",
        ranges: [
          { label: "malé okno (200 x 270cm)", value: "cca 6–8 tis. Kč" },
          { label: "velké okno (500 x 290cm)", value: "cca 17–20 tis. Kč" }
        ],
        rangesNote: "Orientační cena zahrnuje obě vrstvy textilu, tedy záclonu i závěs.",
        tiersTitle: "Typy",
        tiers: [
          { name: "Běžná údržba", note: "Sundání, praní/čištění, žehlení a pověšení." },
          { name: "Velké plochy", note: "Více dílů, větší náročnost manipulace." },
          { name: "Atyp / výšky", note: "Speciální přístup, lešení/plošina dle situace." }
        ],
        serviceOnlyNote: "Servis poskytujeme pouze na naše realizace."
      }
    ],

   // Gallery
galleryH: "Realizace stínění",
galleryOurWorkH: "Ukázky našich realizací",
galleryOurWorkP: "Prohlédněte si realizace záclon, závěsů, rolet, kolejnic a garnýží v různých typech interiérů. Každé řešení navrhujeme na míru podle prostoru, světla a způsobu využití místnosti.",
galleryShowAll: "Zobrazit všechny realizace →",
galleryModalH: "Realizace stínění na míru",
galleryModalSub: "Prohlédněte si detaily našich realizací záclon, závěsů, rolet a technických systémů.",
galleryPartnersH: "Spolupracujeme s architekty a designéry",
galleryPartnersP: "Na realizacích často spolupracujeme s architekty a interiérovými designéry, se kterými ladíme finální podobu stínění tak, aby odpovídala prostoru i celkovému konceptu interiéru.",
galleryVisitWeb: "Navštívit web →",

galleryPartnersNotes: {
  onoje: "Architektura s citem pro atmosféru, materiál a detail. Dáváme tomu finální vrstvu.",
  richter: "Spolupráce na interiérech, kde hraje roli čistota linií, funkce a klid prostoru.",
  epic: "Interiérové studio se zaměřením na atmosféru, funkci a detail. Společně ladíme finální vrstvu stínění tak, aby prostor působil přirozeně a harmonicky.",
  broda: "Interiérový design zaměřený na nadčasovost, práci s prostorem a materiály. Spolupracujeme na projektech, kde stínění dotváří klid a charakter interiéru."
},

    // Essences
    essenceH: "Esence",
    essenceLead:
      "Vůně jemně doplňuje vizuální dojem z prostoru. Pomáhá dotvořit atmosféru, která se pojí se světlem, látkou i rytmem dne. Vybrané esence používáme jako nenápadný, ale účinný prvek celkového vnímání interiéru.",
    essenceBoxH: "Esence připravujeme",
    essenceBoxP:
      "Vůně budou samostatnou kapitolou navázanou na prostor a atmosféru v něm.\n\nEsence budou laděny tak, aby odpovídaly potřebám a aktivitám vykonávaným v daném prostoru.",
    essenceBoxFoot: "Připravujeme pro vás",

    // Contact
    contactH: "Kontakt",
    name: "Jméno",
    email: "E-mail",
    message: "Zpráva",
    send: "Odeslat",
    contactHowH: "Jak to probíhá",
    contactHow: [
      "Pošlete krátkou zprávu a případně fotografie oken či prostoru.",
      "Ozvu se vám s návrhem termínu konzultace.",
      "Na místě společně doladíme řešení, které pro vás připravím."
    ],
   contactNote: "",
contactFullName: "Jméno a příjmení",
contactPhone: "Kontakt (telefon)",
contactPhotos: "Fotografie (volitelné)",
    

    // Footer
    footerContactH: "Kontakt",
    footerLegalH: "Práva a informace",
    footerTerms: "Obchodní podmínky",
    footerPrivacy: "Ochrana osobních údajů",
    footerCookies: "Cookies",
    footerCta: "Napište mi →",
    footerBlurb: "Návrh a realizace vnitřního stínění na míru.\nZáclony · Závěsy · Rolety · Garnýže · Technické systémy",
    rights: "Všechna práva vyhrazena.",

    // Terms / Privacy / Cookies pages
    termsH: "Obchodní podmínky",
    termsIntro:
      "Tyto obchodní podmínky upravují vztah mezi prodávajícím a zákazníkem při nákupu zboží a služeb prostřednictvím těchto webových stránek. Doporučuji vám je před dokončením objednávky pročíst.",
    termsSections: [
      {
        h: "I. Úvodní ustanovení",
        p:
          "Prodávajícím je podnikatel působící pod jménem nebo obchodní firmou uvedenou na této stránce a v patičce webu (včetně IČO, DIČ a kontaktních údajů). Zákazníkem je fyzická nebo právnická osoba, která uzavírá smlouvu s prodávajícím na dálku, prostřednictvím těchto webových stránek, e-mailu nebo telefonu."
      },
      {
        h: "II. Nabídka zboží a služeb",
        p:
          "Na webu jsou prezentovány zejména hotové nebo zakázkově vyráběné prvky vnitřního stínění, doplňkové produkty (např. esence a vůně) a související služby, jako jsou konzultace, návrh řešení a montáž. U zakázek na míru je cena stanovována individuálně podle konkrétních parametrů zakázky."
      },
      {
        h: "III. Objednávka a uzavření smlouvy",
        p:
          "Zboží nebo služby lze objednat prostřednictvím objednávkového formuláře, e-mailem nebo telefonicky. Smlouva je uzavřena okamžikem potvrzení objednávky ze strany prodávajícího, a to zpravidla e-mailem. U zakázek na míru dochází k uzavření smlouvy až po schválení konkrétní cenové nabídky zákazníkem."
      },
      {
        h: "IV. Cena a platební podmínky",
        p:
          "Ceny jsou uvedeny včetně DPH, je-li prodávající plátcem DPH, a včetně případných zákonných poplatků, není-li uvedeno jinak. Cena může být uhrazena převodem na účet prodávajícího nebo jiným způsobem uvedeným v objednávce. U zakázek na míru si prodávající může vyžádat zálohu, jejíž výše a splatnost jsou uvedeny v nabídce."
      },
      {
        h: "V. Dodací podmínky",
        p:
          "Dodací lhůta hotového zboží je uvedena orientačně u jednotlivých produktů nebo v potvrzení objednávky. U zakázek na míru závisí na povaze zakázky, zvolených materiálech a domluveném harmonogramu. Zboží je doručováno dopravcem nebo předáno při osobní montáži."
      },
      {
        h: "VI. Práva z vadného plnění (reklamace)",
        p:
          "Zákazník je povinen po převzetí zboží zkontrolovat jeho stav a případné zjevné vady bez zbytečného odkladu reklamovat. Reklamace může být uplatněna písemně nebo e-mailem na kontakty uvedené na webu. Prodávající vyřídí reklamaci bez zbytečného odkladu, nejpozději do 30 dnů od jejího uplatnění, pokud se se zákazníkem nedohodne jinak."
      },
      {
        h: "VII. Odstoupení od smlouvy u spotřebitelů",
        p:
          "Je-li zákazník spotřebitelem, má při nákupu na dálku právo odstoupit od smlouvy do 14 dnů od převzetí zboží, není-li zákonem stanovena výjimka. Toto právo se nevztahuje zejména na zboží vyrobené podle přání zákazníka nebo pro jeho osobní potřebu (například závěsy, záclony a stínění šité na konkrétní míru a dle schváleného návrhu)."
      },
      {
        h: "VIII. Mimosoudní řešení sporů",
        p:
          "V případě sporu mezi prodávajícím a spotřebitelem se může spotřebitel obrátit na Českou obchodní inspekci (www.coi.cz) jako subjekt mimosoudního řešení sporů."
      },
      {
        h: "IX. Závěrečná ustanovení",
        p:
          "Právní vztahy mezi prodávajícím a zákazníkem se řídí právním řádem České republiky. Aktuální znění těchto obchodních podmínek je zveřejněno na webových stránkách prodávajícího a může být průběžně aktualizováno."
      }
    ],

    privacyH: "Ochrana osobních údajů",
    privacyIntro:
      "Na této stránce najdete informace o tom, jak zpracovávám osobní údaje v souvislosti s poptávkami, objednávkami a fungováním těchto webových stránek.",
    privacySections: [
      { h: "Správce osobních údajů", p: "Správcem osobních údajů je podnikatel uvedený v kontaktních údajích na těchto stránkách (jméno / název, adresa, IČO, DIČ, e-mail, telefon)." },
      {
        h: "Jaké údaje zpracovávám a za jakým účelem",
        p:
          "Zpracovávám zejména identifikační a kontaktní údaje (jméno, příjmení, název firmy, e-mail, telefon, adresu), dále údaje o poptávce a zakázce (např. rozměry, fotografie oken a interiéru, vaše požadavky na řešení) a fakturační údaje včetně platebních údajů.\n\nÚdaje zpracovávám za účelem vyřízení poptávky, uzavření smlouvy, dodání zboží a služeb, vedení účetnictví a plnění zákonných povinností, případně ochrany svých právních nároků (např. při reklamaci nebo sporu)."
      },
      {
        h: "Právní základ zpracování",
        p:
          "Právním základem je zejména plnění smlouvy nebo jednání před uzavřením smlouvy, splnění právních povinností v oblasti účetnictví a daní a oprávněný zájem na ochraně právních nároků. Pro případný marketing (např. zasílání newsletteru) bych osobní údaje používala pouze s vaším souhlasem nebo na základě oprávněného zájmu, pokud jste mým zákazníkem, a vždy s možností jednoduchého odhlášení."
      },
      {
        h: "Doba uchování osobních údajů",
        p:
          "Údaje související se smlouvou a fakturací uchovávám po dobu stanovenou právními předpisy (typicky 10 let). Údaje z nezávazných poptávek uchovávám po dobu nezbytně nutnou k vyřízení komunikace, obvykle nejdéle 1 rok, pokud z poptávky nevznikne smluvní vztah."
      },
      {
        h: "Předávání osobních údajů třetím stranám",
        p:
          "Osobní údaje mohu předat pouze v nezbytném rozsahu účetnímu nebo daňovému poradci, poskytovatelům IT a hostingových služeb, dopravcům nebo montážním partnerům, pokud je to nutné pro realizaci zakázky, a orgánům veřejné moci, pokud to vyžaduje zákon. S těmito subjekty mám uzavřeny odpovídající smlouvy o zpracování osobních údajů."
      },
      {
        h: "Vaše práva",
        p:
          "Máte právo na přístup k osobním údajům, jejich opravu nebo doplnění, omezení zpracování, výmaz (pokud jsou splněny zákonné podmínky), přenositelnost údajů a právo vznést námitku proti zpracování založenému na oprávněném zájmu.\n\nPokud se domníváte, že dochází k neoprávněnému zpracování osobních údajů, máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz)."
      },
      {
        h: "Fotografie interiéru a referenční snímky",
        p:
          "Fotografie vašeho interiéru, oken a realizovaného stínění slouží primárně k návrhu a realizaci zakázky. Pro použití fotografií jako referencí (např. v galerii realizací) vždy požádám o váš výslovný souhlas nebo fotografie používám tak, aby nebylo možné vás jednoznačně identifikovat."
      }
    ],

    cookiesH: "Cookies",
    cookiesP: [
      "Tyto webové stránky používají soubory cookies, které slouží k zajištění jejich základní funkčnosti, případně k anonymnímu měření návštěvnosti a zlepšování uživatelského prostředí.",
      "Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče. V nastavení prohlížeče můžete používání cookies kdykoli omezit nebo zcela zakázat. Pokud cookies vypnete, může dojít k omezení některých funkcí webu.",
      "Pokud na webu používám cookies pro marketingové účely nebo pokročilou analytiku, informuji vás o tom při první návštěvě pomocí lišty a mám možnost získat váš souhlas. Souhlas můžete kdykoli odvolat úpravou nastavení nebo změnou nastavení prohlížeče."
    ]
  },

 en: {
  brand1: "Jana Segelberg",
  brand2: "Shade & Scent",

  // Header nav
  nav: ["How We Work", "Pricing", "Projects", "Essences", "Contact"],

  // Hero
  heroSub: "Sheers · Curtains · Blinds · Curtain Rods",
  cta: "Book a Consultation",

  heroSlides: [
    { h1: "Sheers, curtains, blinds and curtain rods shaped around your space", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
    { h1: "We design window treatments that bring calm, privacy and balance into the interior", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
    { h1: "Complete service from consultation to final installation", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
  ],

  // Home
  homeAboutH: "We design and deliver interior window treatments",

  homeAbout: [
    "Window treatments are not an isolated element. We select them in relation to the space, materials and the way the interior is used, so the result feels calm, natural and well balanced."
  ],

  services: [
    { name: "Sheers", note: "Soften daylight, bring lightness and create a sense of ease." },
    { name: "Curtains", note: "Provide privacy, soften sound and bring warmth into the space." },
    { name: "Blinds", note: "A precise and practical way to control light with a clean look." },
    { name: "Technical systems", note: "Tracks, curtain rods and solutions designed for the space." },
    { name: "Service", note: "Taking down, cleaning, steaming and rehanging our installations." }
  ],

  serviceCardCta: "View guide prices →",

  inspH: "Atmosphere",
  inspLead:
    "Well-designed window treatments influence more than just the window.\nThey shape light during the day, privacy in the evening and the overall feeling of the space. The difference is often more noticeable than expected.",

  inspTags: [
    "Light · Space · Freedom",
    "Softness · Movement · Privacy",
    "Function · Quiet · Home"
  ],

  benefitsH: "Why clients choose us",
  benefits: [
    {
      name: "Individual approach",
      note: "Every space has its own light, proportions and rhythm. The design always responds to that."
    },
    {
      name: "20 years of experience",
      note: "We understand materials, technical solutions and details that define the final result."
    },
    {
      name: "Complete service",
      note: "From consultation and measuring to production, installation and final styling."
    }
  ],

  benefitCardCta: "Learn more →",

  faqH: "Frequently asked",
  faq: [
    {
      q: "How does the consultation work?",
      a: "We visit your space, understand your needs and suggest a solution that fits both technically and visually."
    },
    {
      q: "How long does the process take?",
      a: "Typically 2–8 weeks depending on scope, materials and availability."
    },
    {
      q: "Do you bring fabric samples?",
      a: "Yes, we bring samples directly to your space so you can choose in real light and context."
    },
    {
      q: "Do you supply tracks and curtain rods?",
      a: "Yes, we provide complete solutions including systems and installation."
    },
    {
      q: "Can you do just one room?",
      a: "Yes. We work on both full interiors and individual rooms."
    }
  ],

  homeCtaNote:
    "Prague and surrounding areas. Consultation directly in your interior. Design, production and installation tailored to the space.",

  homeTrust: [
    { value: "20+", label: "years of experience" },
    { value: "Individual design", label: "based on the space and how it is used" },
    { value: "Complete service", label: "from design to installation" },
    { value: "Collaboration", label: "with architects and designers" }
  ],

  // Process
  processH: "How we work",
  steps: ["Consultation", "Design & pricing", "Production", "Installation"],

  stepsTxt: [
    "We visit you, go through the space and take precise measurements.\n\nWe discuss whether you are looking for privacy, blackout or a purely aesthetic layer.\n\nWe show fabric samples and suggest solutions that make sense both technically and visually.\n\nAfter the consultation, you have a clear direction.",
    
    "Based on the selected materials and solution, we prepare a quotation.\n\nIf needed, we adjust it together to find the right balance between aesthetics, function and budget.\n\nBefore production starts, everything is clearly defined.",
    
    "After approval and deposit, production begins.\n\nTextiles are prepared and all technical elements are arranged.\n\nAt the same time, we plan installation timing.\n\nProduction usually takes several weeks depending on scope.",
    
    "We install everything, carefully hang the textiles and adjust the final look.\n\nEverything is cleaned, styled and prepared for use.\n\nWe explain operation and recommend maintenance so the result lasts."
  ],

  processBridges: [
    "Observation shapes direction.",
    "Design becomes reality.",
    "Detail defines the result."
  ],

  processMicroByStep: [
    "Light, proportions, rhythm.",
    "Material, technique, balance.",
    "Craft, precision, patience.",
    "Installation, detail, calm."
  ],

  processEnding:
    "The goal is simple — for you to feel naturally well in the space.",

  // Pricing
  priceH: "Pricing",

  pricingIntro: [
    "Pricing depends on window size, materials and the chosen solution.",
    "Here you can find guide prices to get an initial idea before consultation.",
    "Each proposal is always prepared individually."
  ],

  pricingDisclaimer:
    "All prices are indicative. The final quotation is always based on an on-site consultation.",

  openDetail: "View detail",
  writeMe: "Book a consultation",
  close: "Close",

  // Gallery
  galleryH: "Projects",
  galleryOurWorkH: "Selected projects",
  galleryOurWorkP:
    "Explore our work across different types of interiors. Each solution is designed in relation to the space and its use.",
  galleryShowAll: "View all →",
  galleryModalH: "Our work",
  galleryModalSub:
    "Details of sheers, curtains, blinds and technical systems.",

  galleryPartnersH: "Collaboration",
  galleryPartnersP:
    "We often work together with architects and designers to fine-tune the final result.",

  galleryVisitWeb: "Visit →",

  // Essences
  essenceH: "Essences",
  essenceLead:
    "Scent completes the atmosphere of a space. It connects with light, textiles and the rhythm of the day.",

  essenceBoxH: "Essences in preparation",
  essenceBoxP:
    "Scents will form a separate layer connected to the atmosphere of each space.\n\nThey will be selected according to how the space is used.",
  essenceBoxFoot: "Coming soon",

  // Contact
  contactH: "Contact",
  name: "Name",
  email: "Email",
  message: "Message",
  send: "Send",

  contactHowH: "How it works",
  contactHow: [
    "Send a short message and optionally photos.",
    "We agree on a consultation date.",
    "We refine the solution together on site."
  ],

  contactFullName: "Full name",
  contactPhone: "Phone",
  contactPhotos: "Photos (optional)",

  // Footer
  footerContactH: "Contact",
  footerLegalH: "Legal",
  footerTerms: "Terms",
  footerPrivacy: "Privacy",
  footerCookies: "Cookies",
  footerCta: "Get in touch →",

  footerBlurb:
    "Interior window treatments.\nSheers · Curtains · Blinds · Curtain rods",

  rights: "All rights reserved."
}
