export type VerticalData = {
  id: string;
  label: string;
  iconName: string;
  accentColor: string;
  accentColorHex: string;
  accentBg: string;
  accentBorder: string;
  buttonBg: string;
  buttonHover: string;
  tagline: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; description: string }[];
  features: { iconName: string; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faq: { q: string; a: string }[];
  roiLine: string;
  ctaText: string;
};

export const verticals: Record<string, VerticalData> = {
  therapeut: {
    id: "therapeut",
    label: "Therapeut",
    iconName: "Brain",
    accentColor: "text-rose-600",
    accentColorHex: "#e11d48",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-200",
    buttonBg: "bg-rose-600",
    buttonHover: "hover:bg-rose-700",
    tagline: "Voor therapeuten en psychologen",
    headline:
      "Je agenda, berichten en administratie.\nAidy regelt het.",
    subheadline:
      "Je werkt solo of met een kleine groep. Elke werkdag begint met een volle agenda en eindigt met een stapel berichten die je nog moet beantwoorden. Geen secretaresse, geen buffer. Aidy neemt dat werk over.",
    painPoints: [
      {
        title: "Afspraken kosten je meer tijd dan de sessie zelf.",
        description:
          "Een cli\u00ebnt stuurt een WhatsApp om te annuleren. Een andere vraagt een nieuwe afspraak via email. Een derde staat op de wachtlijst en wil weten wanneer er een plek vrijkomt. Elk berichtje is klein, maar samen kosten ze uren per week.",
      },
      {
        title: "Na de sessie begint het papierwerk.",
        description:
          "Verslagen schrijven, attesten opstellen voor de mutualiteit, doorverwijsbrieven opmaken voor de huisarts. Het werk stopt niet als de cli\u00ebnt de deur uitloopt.",
      },
      {
        title: "Cli\u00ebnten verwachten snel antwoord.",
        description:
          "Vragen over facturen, terugbetalingsprocedures, attesten voor arbeidsongeschiktheid. Cli\u00ebnten sturen ze doorheen de dag. Elk bericht dat je niet meteen beantwoordt, stapelt op.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title:
          "Aidy plant, verplaatst en volgt op, zonder dat jij ertussen moet.",
        description:
          "Cli\u00ebnten kunnen via WhatsApp of email een afspraak aanvragen, annuleren of verplaatsen. Aidy regelt de agenda, stuurt bevestigingen en houdt je wachtlijst bij. Als er een plek vrijkomt, neemt Aidy contact op met de volgende persoon.",
      },
      {
        iconName: "FileText",
        title: "Attesten en brieven in minuten, niet na een avond typen.",
        description:
          "Je geeft Aidy de informatie: naam, periode, diagnose, reden. Aidy stelt het document op in de juiste vorm. Attest voor de mutualiteit, doorverwijsbrief, bevestiging van arbeidsongeschiktheid. Jij leest na en stuurt door.",
      },
      {
        iconName: "MessageSquare",
        title: "Cli\u00ebntvragen beantwoord, ook als jij in sessie bent.",
        description:
          "Aidy weet wanneer je beschikbaar bent en wat de antwoorden zijn op veelgestelde vragen over facturen, terugbetalingen en afspraken. Cli\u00ebnten krijgen een antwoord, ook als jij er niet bij bent.",
      },
      {
        iconName: "Shield",
        title: "Cli\u00ebntgegevens op Europese servers. GDPR ingebakken.",
        description:
          "Gegevens worden niet gedeeld met derden en niet gebruikt voor AI-training. Volledige data-isolatie per gebruiker. Geen Amerikaans bedrijf dat meeleest.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Verbind je agenda en WhatsApp",
        description:
          "Google Calendar of Outlook. Duurt minder dan een uur. Je krijgt hulp bij de onboarding.",
      },
      {
        step: 2,
        title: "Stel in wat Aidy mag afhandelen",
        description:
          "Welke vragen Aidy zelf mag beantwoorden en welke aan jou worden doorgestuurd. Jij bepaalt de grenzen.",
      },
      {
        step: 3,
        title: "Aidy werkt, jij behandelt",
        description:
          "Afspraken worden ingepland, berichten beantwoord, attesten klaargezet. Jij ziet alleen wat jouw aandacht vraagt.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy met mijn bestaande agenda?",
        a: "Ja. Aidy koppelt met Google Calendar en Outlook. Je hoeft niets te veranderen aan hoe je nu werkt.",
      },
      {
        q: "Hoe weet Aidy wat het mag zeggen tegen cli\u00ebnten?",
        a: "Jij bepaalt dat. Bij de start stel je in welke vragen Aidy zelf mag beantwoorden en welke aan jou worden doorgestuurd. Je houdt altijd de controle.",
      },
      {
        q: "Is dit GDPR-conform? Cli\u00ebntgegevens zijn gevoelig.",
        a: "Aidy verwerkt gegevens op Europese servers en werkt conform de GDPR-vereisten. Gegevens worden niet gedeeld met derden en niet gebruikt voor AI-training.",
      },
      {
        q: "Moet ik technisch onderlegd zijn om dit te gebruiken?",
        a: "Nee. Als je WhatsApp gebruikt, kun je met Aidy werken. De setup duurt minder dan een uur, en je krijgt hulp bij de onboarding.",
      },
      {
        q: "Wat als een cli\u00ebnt iets vraagt dat Aidy niet aankan?",
        a: "Aidy geeft het door aan jou. Je krijgt een melding met de vraag en de context. Niets valt tussen de mazen.",
      },
      {
        q: "Wat kost het?",
        a: "Aidy kost een vast bedrag per maand, zonder verborgen kosten per bericht of per actie. Je begint met een gratis proefperiode van 14 dagen.",
      },
    ],
    roiLine:
      "Drie uur per week bespaard op admin. Dat is \u00e9\u00e9n extra sessie per dag. Aidy kost minder dan \u00e9\u00e9n gemiste afspraak.",
    ctaText: "Minder administratie. Zelfde zorg.",
  },

  advocaat: {
    id: "advocaat",
    label: "Advocaat",
    iconName: "Scale",
    accentColor: "text-amber-700",
    accentColorHex: "#b45309",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    buttonBg: "bg-amber-700",
    buttonHover: "hover:bg-amber-800",
    tagline: "Voor advocaten en kantoren",
    headline:
      "Uw administratie loopt.\nUw cli\u00ebnten ook.",
    subheadline:
      "Elke dag gaan er uren verloren aan intake-mails beantwoorden, documenten najagen en dossiers samenvatten. Uren die u niet kan factureren. Aidy neemt die taken over, via WhatsApp, Outlook en uw bestaande tools.",
    painPoints: [
      {
        title: "Intake is een bottleneck.",
        description:
          "Inbound komt via mail, WhatsApp, portalen en telefoon door elkaar. Elk nieuw dossier vraagt manueel werk: conflict check, KYC, intakegesprek inplannen, eerste briefing. Er is geen systeem. U bent het systeem.",
      },
      {
        title: "Opvolging eet uw agenda op.",
        description:
          "Cli\u00ebnten leveren documenten te laat aan. Facturen blijven onbetaald. Deadlines naderen. U stuurt reminders die genegeerd worden, en u stuurt ze nog een keer. Dit is geen advocatenwerk, maar u doet het toch.",
      },
      {
        title: "Communicatie kost meer tijd dan de inhoud.",
        description:
          "Een partnerbrief samenvatten. Een cli\u00ebnt bijpraten na een zitting. Een lang e-maildossier omzetten in drie zinnen voor een collega die het overneemt. Elk van die taken duurt langer dan ze zou mogen.",
      },
    ],
    features: [
      {
        iconName: "MessageSquare",
        title:
          "Intake gaat vanzelf, van eerste contact tot gepland gesprek.",
        description:
          "Een nieuwe cli\u00ebnt stuurt een bericht. Aidy herkent de aanvraag, vraagt de nodige informatie op, voert een eerste conflict check uit en plant het intakegesprek in uw agenda. U ziet het resultaat, u hoeft het proces niet te begeleiden.",
      },
      {
        iconName: "Clock",
        title:
          "Documenten en betalingen achtervolgen zonder er zelf achteraan te gaan.",
        description:
          "Aidy houdt bij wat ontbreekt per dossier. Ontbrekend uittreksel, onbetaalde provisienota, nog te tekenen volmacht. Het stuurt automatisch reminders, escaleert als er geen reactie komt, en rapporteert aan u als er actie nodig is.",
      },
      {
        iconName: "FileText",
        title: "Dossiers samenvatten in seconden, niet in een half uur.",
        description:
          "Een cli\u00ebnt belt voor een update. Een collega neemt een zaak over. Aidy trekt de relevante informatie samen uit uw DMS, mails en notities, en geeft u een heldere samenvatting. U leest, u praat, klaar.",
      },
      {
        iconName: "Shield",
        title: "Beroepsgeheim. Technisch afgedwongen.",
        description:
          "Europese hosting. Data-isolatie per gebruiker. Uw dossiers zijn onzichtbaar voor andere gebruikers, voor ons, voor iedereen. Geen training op uw data. GDPR-compliant met verwerkersovereenkomst.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Koppel uw tools",
        description:
          "Outlook, WhatsApp en uw DMS. Duurt een tot twee weken van onboarding, afhankelijk van de integraties.",
      },
      {
        step: 2,
        title: "Configureer de grenzen",
        description:
          "Wat doet Aidy zelf, wat legt het u voor? Operationele taken voert Aidy uit. Juridisch oordeel blijft bij u.",
      },
      {
        step: 3,
        title: "Aidy handelt af, u factureert",
        description:
          "Intake, opvolging, reminders, samenvattingen. Alles wat geen juridisch oordeel vereist, doet Aidy.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy met mijn bestaande tools?",
        a: "Aidy integreert met Outlook, WhatsApp en gangbare DMS-systemen die in Belgische kantoren gebruikt worden. Bij onboarding kijken we samen welke koppelingen relevant zijn voor uw werkwijze.",
      },
      {
        q: "Wie heeft toegang tot mijn dossierdata?",
        a: "Uw data blijft bij u. Aidy werkt met de toegangsrechten die u instelt en slaat geen dossierinhoud op buiten uw eigen systemen.",
      },
      {
        q: "Wat doet Aidy wel en wat niet?",
        a: "Aidy voert operationele taken uit: communiceren, opvolgen, samenvatten, inplannen. Aidy schrijft geen juridische conclusies, geeft geen advies en vervangt geen inhoudelijk oordeel.",
      },
      {
        q: "Moet ik mijn manier van werken aanpassen?",
        a: "Nee. Aidy past zich aan uw kanalen en gewoontes aan. Als u WhatsApp gebruikt voor cli\u00ebntcommunicatie en Outlook voor intern, blijft dat zo.",
      },
      {
        q: "Is dit GDPR-conform voor een advocatenkantoor?",
        a: "Ja. We werken met een verwerkersovereenkomst en de opzet voldoet aan de vereisten voor vertrouwelijke beroepsgegevens. Uw stafhouder hoeft niet wakker te liggen van Aidy.",
      },
      {
        q: "Wat kost het?",
        a: "Neem contact op voor een demo. We laten zien wat Aidy concreet afhandelt in uw kantoor, op basis van uw werkwijze.",
      },
    ],
    roiLine:
      "Een advocaat met een tarief van \u20ac250/uur die 3 uur per dag aan admin verliest, laat \u20ac150.000 per jaar liggen. Aidy wint die uren terug.",
    ctaText: "Elke dag wachten kost u uren die u niet terugkrijgt.",
  },

  accountant: {
    id: "accountant",
    label: "Accountant",
    iconName: "Calculator",
    accentColor: "text-emerald-600",
    accentColorHex: "#059669",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    buttonBg: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-700",
    tagline: "Voor accountants en fiduciaires",
    headline:
      "Aidy handelt de cli\u00ebntco\u00f6rdinatie af.\nZodat jij kan boekhouden.",
    subheadline:
      "Facturen opvolgen, afspraken inplannen, documenten opvragen, deadlines communiceren. Voor een gemiddeld kantoor kost dit uren per dag. Aidy doet het over WhatsApp, email en je agenda, zonder dat jij ertussen moet zitten.",
    painPoints: [
      {
        title: "Per-cli\u00ebnt opvolging schaalt niet.",
        description:
          "Een kantoor van tien medewerkers beheert honderden dossiers tegelijk. Elk dossier heeft zijn eigen ritme: ontbrekende facturen, UBO-updates, handtekeningen die maanden op zich laten wachten. De opvolging is repetitief, maar elke cli\u00ebnt verwacht persoonlijk contact.",
      },
      {
        title: "Cli\u00ebnten bereik je op tien verschillende plekken.",
        description:
          "Sommige cli\u00ebnten mailen. Anderen sturen berichten via WhatsApp. Documenten staan verspreid over drives, portalen en emailbijlagen. Elke dag spend je tijd aan het samenrapen van informatie die verspreid staat over kanalen die nooit met elkaar praten.",
      },
      {
        title: "BTW-kwartalen en jaarafsluiting drukken alles dubbel.",
        description:
          "Twee keer per jaar verveelvoudigt het co\u00f6rdinatiewerk precies op het moment dat de boekhoudkundige druk ook piekt. Cli\u00ebnten reageren traag. Documenten zijn onvolledig. En de deadlines wachten niet.",
      },
    ],
    features: [
      {
        iconName: "Clock",
        title:
          "Aidy volgt ontbrekende documenten op, zonder dat jij eraan denkt.",
        description:
          "Je geeft eenmalig aan wat je nodig hebt per dossier. Aidy stuurt reminders op het juiste moment, via het kanaal dat de cli\u00ebnt gebruikt. Als een cli\u00ebnt niet reageert, escaleert Aidy. Jij ziet alleen de uitzonderingen.",
      },
      {
        iconName: "MessageSquare",
        title: "Cli\u00ebntvragen over BTW en deadlines beantwoordt Aidy zelf.",
        description:
          "\"Wanneer is mijn BTW-aangifte?\" \"Wat moet ik aanleveren voor de jaarafsluiting?\" Dat zijn vragen die geen boekhoudkundige expertise vragen, maar wel tijd kosten. Aidy beantwoordt ze direct via WhatsApp of email.",
      },
      {
        iconName: "Users",
        title:
          "Tijdens piekperiodes schaalt Aidy mee zonder extra personeel.",
        description:
          "In het eerste kwartaal verdubbelt het volume aan cli\u00ebntcontact. Aidy verwerkt dat zonder dat het kantoor hoeft op te schalen. Herinneringen gaan op tijd. Vragen worden beantwoord. Afspraken worden ingepland.",
      },
      {
        iconName: "Shield",
        title: "GDPR-compliant. Alle data in Europa.",
        description:
          "Je bepaalt zelf welke informatie Aidy kan inzien en gebruiken. Alle data blijft in je eigen omgeving. Geen data wordt gedeeld met derden.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Verbind email, WhatsApp en kalender",
        description:
          "Gmail, Outlook, WhatsApp Business, Google Calendar. Een basisconfiguratie staat in een dag.",
      },
      {
        step: 2,
        title: "Geef instructies in gewone taal",
        description:
          "Configureer werkstromen via gewone taal, niet via technische instellingen. Geen IT-team nodig.",
      },
      {
        step: 3,
        title: "Aidy voert uit, jij boekhoudt",
        description:
          "Cli\u00ebnten opvolgen, documenten opvragen, afspraken inplannen, vragen beantwoorden. Aidy handelt het af.",
      },
    ],
    faq: [
      {
        q: "Past Aidy in de tools die mijn kantoor al gebruikt?",
        a: "Aidy verbindt zich met Gmail, Outlook, WhatsApp Business en Google Calendar. Bestaande drives en portalen kun je koppelen via integraties. Er is geen migratie nodig.",
      },
      {
        q: "Heeft Aidy toegang tot mijn cli\u00ebntgegevens?",
        a: "Je bepaalt zelf welke informatie Aidy kan inzien en gebruiken. Aidy werkt conform GDPR. Alle data blijft in je eigen omgeving.",
      },
      {
        q: "Wat als een cli\u00ebnt een vraag stelt die Aidy niet kan beantwoorden?",
        a: "Aidy geeft de vraag door aan de juiste medewerker, met de context erbij. Aidy handelt niet af wat buiten zijn bevoegdheid valt.",
      },
      {
        q: "Hoe lang duurt de implementatie?",
        a: "Een basisconfiguratie staat in een dag. Aidy heeft geen IT-team nodig. Je configureert werkstromen via gewone taal, niet via technische instellingen.",
      },
      {
        q: "Is Aidy bruikbaar voor een solo-kantoor?",
        a: "Ja. De meerwaarde is het grootst voor wie weinig tijd heeft voor opvolging maar toch veel cli\u00ebnten bedient.",
      },
      {
        q: "Wat kost Aidy?",
        a: "Aidy werkt op abonnementsbasis per kantoor, niet per seat. Neem contact op voor een offerte op maat.",
      },
    ],
    roiLine:
      "180 dossiers, vier medewerkers. De helft van de tijd ging naar opvolging. Aidy draait dat om.",
    ctaText: "Minder co\u00f6rdinatie. Meer boekhouden.",
  },

  tandarts: {
    id: "tandarts",
    label: "Tandarts",
    iconName: "Smile",
    accentColor: "text-sky-600",
    accentColorHex: "#0284c7",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    buttonBg: "bg-sky-600",
    buttonHover: "hover:bg-sky-700",
    tagline: "Voor tandartspraktijken",
    headline:
      "Je agenda vol houden kost je meer tijd\ndan tandartswerk doen.",
    subheadline:
      "Je praktijk draait op afspraken. Maar het beheren ervan, de no-show opvolging, de wachtlijst bijhouden, de herinneringen sturen, dat doet niemand systematisch. Aidy neemt dat werk over via WhatsApp, email en je agenda.",
    painPoints: [
      {
        title: "Afsprakenbeheer is handwerk geworden.",
        description:
          "Een pati\u00ebnt zegt af via WhatsApp. Je assistente ziet het bericht tussen twee consultaties. Ze probeert iemand van de wachtlijst te bellen. Die neemt niet op. De stoel blijft leeg. Dit scenario speelt zich meerdere keren per week af.",
      },
      {
        title: "Recalls en preventie vallen tussen de plooien.",
        description:
          "Je weet dat mevrouw Janssen al anderhalf jaar niet meer is langsgekomen. Maar haar opbellen staat nooit bovenaan de lijst. Resultaat: pati\u00ebnten verdwijnen langzaam uit je praktijk zonder dat je het merkt.",
      },
      {
        title: "Administratieve opvolging stopt bij de consultatie.",
        description:
          "Een behandelplan uitleggen duurt vijf minuten. Het daarna schriftelijk bevestigen, de kostenraming doorsturen, het attest opmaken en de factuur opvolgen, dat duurt veel langer. En het wordt te vaak uitgesteld.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title: "No-shows worden automatisch opgevuld.",
        description:
          "Wanneer een pati\u00ebnt afzegt via WhatsApp of email, reageert Aidy meteen. Het bekijkt de wachtlijst, neemt contact op met de volgende pati\u00ebnt en herplaatst de afspraak. De stoel blijft gevuld.",
      },
      {
        iconName: "Clock",
        title: "Recalls lopen zonder dat jij eraan denkt.",
        description:
          "Zes maanden na een behandeling stuurt Aidy automatisch een herinnering. Pati\u00ebnten die niet reageren krijgen een follow-up. Wie al lang niet meer is langsgekomen, wordt persoonlijk aangeschreven. In jouw naam, in jouw toon.",
      },
      {
        iconName: "FileText",
        title:
          "Administratieve opvolging stopt niet meer na de consultatie.",
        description:
          "Na een behandeling kan Aidy de kostenraming versturen, het behandelplan samenvatten en herinneringen sturen voor openstaande facturen. Attesten en mutualiteitsformulieren worden klaargezet. Jij bevestigt waar nodig.",
      },
      {
        iconName: "Shield",
        title: "GDPR-conform. Pati\u00ebntdata blijft in Europa.",
        description:
          "Alle data wordt verwerkt conform Europese regelgeving. Pati\u00ebntgegevens worden niet gedeeld met derden en blijven binnen beveiligde Europese infrastructuur.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Koppel je agenda",
        description:
          "Verbind je bestaande praktijkagenda. De meeste praktijken zijn binnen \u00e9\u00e9n werkdag operationeel.",
      },
      {
        step: 2,
        title: "Stel in hoe Aidy werkt",
        description:
          "Welke berichten Aidy beantwoordt, wanneer recalls verstuurd worden, hoe de wachtlijst werkt. Eenmalige setup.",
      },
      {
        step: 3,
        title: "Aidy draait, de stoel blijft vol",
        description:
          "No-shows worden opgevuld, recalls verstuurd, opvolging loopt. Jij en je assistente focussen op klinisch werk.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy met mijn bestaande agenda?",
        a: "Ja. Aidy koppelt met de meest gebruikte agenda's in Belgische tandartspraktijken. Je hoeft je werkwijze niet aan te passen.",
      },
      {
        q: "Wie beantwoordt de berichten, AI of een mens?",
        a: "Aidy is volledig AI. Voor standaardvragen en afsprakenbeheer werkt het autonoom. Voor uitzonderingen of complexe situaties schakelt het je of je assistente in.",
      },
      {
        q: "Wat als een pati\u00ebnt een vraag stelt die Aidy niet kan beantwoorden?",
        a: "Aidy herkent wanneer een vraag buiten zijn scope valt. Je assistente of jijzelf wordt ingeschakeld voor alles wat medisch oordeel vereist.",
      },
      {
        q: "Is dit GDPR-conform?",
        a: "Ja. Alle data wordt verwerkt conform Europese regelgeving. Pati\u00ebntgegevens worden niet gedeeld met derden en blijven binnen beveiligde Europese infrastructuur.",
      },
      {
        q: "Hoeveel tijd kost de opstart?",
        a: "De meeste praktijken zijn binnen \u00e9\u00e9n werkdag operationeel. We begeleiden de setup en passen Aidy aan op jouw situatie.",
      },
      {
        q: "Wat kost het?",
        a: "Aidy werkt op maandbasis, zonder jaarcontract. De eerste maand is gratis. Geen verborgen kosten.",
      },
    ],
    roiLine:
      "Een lege stoel kost je \u20ac80-150. Aidy vult no-shows automatisch op. De eerste maand is gratis.",
    ctaText: "Elke week die je wacht, zijn er no-shows die je had kunnen vermijden.",
  },

  kinesist: {
    id: "kinesist",
    label: "Kinesist",
    iconName: "Activity",
    accentColor: "text-teal-600",
    accentColorHex: "#0d9488",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    buttonBg: "bg-teal-600",
    buttonHover: "hover:bg-teal-700",
    tagline: "Voor kinesisten en kinesitherapeuten",
    headline:
      "Aidy beheert je agenda, WhatsApp\nen administratie. Jij behandelt.",
    subheadline:
      "Je werkt in blokken van 30 minuten. Elke onderbreking kost je een sessie. Maar de berichten stoppen niet. Aidy neemt het communicatiewerk over dat nu tussen je sessies lekt.",
    painPoints: [
      {
        title: "Afspraken verschuiven nooit op een handig moment.",
        description:
          "Iemand stuurt om 7u18 een berichtje dat ze niet kunnen komen. Je zit dan al bij je eerste pati\u00ebnt. Tegen de tijd dat je reageert, is je gat in de agenda al verloren. En de wachtlijst? Die staat ergens in een notitie.",
      },
      {
        title: "Elke reeks is een planningspuzzel.",
        description:
          "Een arts stuurt een doorverwijzing voor 18 sessies. Dat betekent 18 aparte tijdslots inplannen, rekening houden met het schema van de pati\u00ebnt, en daarna nog opvolgen of het voorschrift nog geldig is. Administratie die niets oplevert.",
      },
      {
        title: "Pati\u00ebnten sturen vragen die je pas 's avonds ziet.",
        description:
          "\"Mag ik de oefening ook staand doen?\" \"Wanneer is mijn volgende afspraak?\" \"Heb je het attest al doorgestuurd?\" Elk bericht is onschuldig. Allemaal samen eten ze een uur van je avond.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title:
          "Reeksen worden ingepland zonder dat jij erbij hoeft.",
        description:
          "Een nieuwe doorverwijzing komt binnen. Aidy leest de informatie, contacteert de pati\u00ebnt, stelt tijdslots voor op basis van jouw agenda en boekt de volledige reeks. Als het voorschrift een vervaldatum heeft, houdt Aidy dat bij.",
      },
      {
        iconName: "Clock",
        title: "Annulaties vullen zichzelf op.",
        description:
          "Iemand zegt een afspraak af. Aidy kijkt in de wachtlijst, stuurt de eerste persoon een bericht, wacht op bevestiging en past de agenda aan. Als die niet kan, gaat het bericht naar de volgende.",
      },
      {
        iconName: "MessageSquare",
        title:
          "Vragen van pati\u00ebnten beantwoordt Aidy op basis van wat jij hebt ingesteld.",
        description:
          "Oefeningen, nabehandelingsinstructies, attestaanvragen, agendavragen: Aidy beantwoordt ze via WhatsApp of email met de informatie die jij hebt opgegeven. Wat Aidy niet zeker weet, legt het voor aan jou.",
      },
      {
        iconName: "Shield",
        title: "GDPR-conform. Geen medische dossiers opgeslagen.",
        description:
          "Pati\u00ebntgegevens worden verwerkt conform de GDPR. Aidy slaat geen medische dossiers op en werkt enkel met de informatie die nodig is voor communicatie en planning.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Verbind je agenda",
        description:
          "Google Calendar of Outlook. De meeste gangbare agenda-tools worden ondersteund.",
      },
      {
        step: 2,
        title: "Stel de regels in",
        description:
          "Welke oefeningen Aidy mag doorsturen, hoe het annulaties afhandelt, welke vragen het moet escaleren.",
      },
      {
        step: 3,
        title: "Aidy handelt af, jij behandelt",
        description:
          "Reeksen worden ingepland, annulaties opgevuld, vragen beantwoord. Jij ziet je agenda gevuld en je berichten afgehandeld.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy met mijn huidige agenda?",
        a: "Aidy integreert met Google Calendar en Outlook. De meeste gangbare agenda-tools worden ondersteund.",
      },
      {
        q: "Wat als een pati\u00ebnt een vraag stelt die Aidy niet kan beantwoorden?",
        a: "Aidy stuurt je de vraag door met de context, zodat jij snel kunt reageren. Pati\u00ebnten krijgen altijd een antwoord.",
      },
      {
        q: "Hoe weet Aidy wat het wel en niet mag zeggen?",
        a: "Jij stelt dat in bij de start. Welke oefeningen het mag doorsturen, hoe het annulaties moet afhandelen, welke vragen het moet escaleren. Je blijft in controle.",
      },
      {
        q: "Is dit conform de GDPR-regels voor medische praktijken?",
        a: "Ja. Pati\u00ebntgegevens worden verwerkt conform de GDPR. Aidy slaat geen medische dossiers op en werkt enkel met de informatie die nodig is voor communicatie en planning.",
      },
      {
        q: "Moet ik mijn pati\u00ebnten iets uitleggen?",
        a: "Weinig. Pati\u00ebnten krijgen een kort bericht dat je met een digitale assistent werkt voor planning en communicatie. De meeste vinden het sneller dan een voicemail.",
      },
      {
        q: "Wat kost het?",
        a: "Aidy werkt op abonnementsbasis. Voor een solo-praktijk starten we aan een tarief dat lager ligt dan een halve dag freelance administratieve hulp per maand. Eerste maand gratis.",
      },
    ],
    roiLine:
      "E\u00e9n annulatie per week opgevuld = \u20ac160/maand terug. Aidy kost minder dan dat.",
    ctaText: "Minder berichten. Meer sessies. Zelfde werkdag.",
  },
};

export const verticalOrder = [
  "therapeut",
  "advocaat",
  "accountant",
  "tandarts",
  "kinesist",
];
