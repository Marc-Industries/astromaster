export interface TheorySection {
  title: string;
  emoji: string;
  paragraphs: string[]; // supports simple bullet-like strings, formulas included inline
}

export interface FlashCard {
  question: string;
  answer: string;
}

// Foundational definitions, formulas and concepts distilled from the course
// notes (Teoria/Formulario). This is meant to build real understanding,
// complementary to the trap-spotting tips in "Ripasso Lampo".
export const theorySections: TheorySection[] = [
  {
    title: 'Sistemi di riferimento',
    emoji: '📐',
    paragraphs: [
      "SISTEMA ALTAZIMUTALE (locale): origine = l'osservatore, piano fondamentale = orizzonte locale, riferimento = Nord cardinale. Coordinate: Altezza (h, da −90° a +90°; +90° = Zenit, −90° = Nadir) e Azimut (A, da Nord verso Est, 0°–360°). Difetto: cambia continuamente con la rotazione terrestre e dipende dall'osservatore.",
      "SISTEMA EQUATORIALE URANOGRAFICO (assoluto): origine = centro della Terra, piano fondamentale = Equatore Celeste, riferimento = Punto Gamma (γ). Coordinate: Declinazione (δ, −90°/+90°) e Ascensione Retta (α, verso Est dal Punto Gamma, in ore 0h–24h, NON in gradi). Vantaggio: fisso per le stelle.",
      "SISTEMA EQUATORIALE LOCALE (orario): usa la Declinazione (δ) ma sostituisce l'AR con l'Angolo Orario (H): distanza dal Meridiano Locale, misurata verso OVEST, in ore 0h–24h.",
      "PUNTO VERNALE (γ, o Punto d'Ariete): punto geometrico immaginario, intersezione tra Equatore Celeste ed Eclittica, dove si trova il Sole all'equinozio di primavera (~20-21 marzo), quando passa dall'emisfero australe a quello boreale. È lo \"zero\" dell'Ascensione Retta (AR del Punto Vernale = 0h0m0s). Si chiama \"Punto d'Ariete\" perché ~2000 anni fa l'equinozio cadeva in quella costellazione; oggi, per la precessione (~50 arcsec/anno verso Ovest), si trova nei Pesci.",
      "COLURO EQUINOZIALE: cerchio massimo passante per i poli celesti e per i punti equinoziali (Ariete e Bilancia).",
      "COORDINATE GALATTICHE (l, b): piano fondamentale = piano galattico. Origine della longitudine (l=0°) = direzione del centro della Via Lattea (Sagittario).",
    ],
  },
  {
    title: 'Tempo',
    emoji: '⏱️',
    paragraphs: [
      "GIORNO SIDEREO (Ts): tra due passaggi consecutivi di una stella (o del Punto Vernale) sullo stesso meridiano. ~23h 56m 4s. È il vero periodo di rotazione della Terra rispetto alle stelle fisse.",
      "GIORNO SOLARE VERO (Tv): tra due transiti consecutivi del Sole vero sullo stesso meridiano. Durata NON costante (eccentricità dell'orbita + inclinazione dell'eclittica).",
      "GIORNO SOLARE MEDIO (Tm): media dei giorni solari veri, basato su un \"Sole medio\" fittizio a moto uniforme sull'equatore celeste. Esattamente 24h.",
      "EQUAZIONE DEL TEMPO (ET): ET = Tv − Tm. Si annulla 4 volte all'anno; causata dalla combinazione di inclinazione dell'asse terrestre + orbita ellittica (Keplero).",
      "Anno Tropico: tra due passaggi del Sole sul Punto Vernale.",
      "TEMPO SIDEREO LOCALE (TSL): definito come l'angolo orario del Punto Vernale rispetto al meridiano locale. Regola chiave: TSL = α + t (α = ascensione retta dell'astro, t = suo angolo orario). Quando una stella transita sul meridiano (t=0): TSL = α.",
    ],
  },
  {
    title: 'Dinamica e meccanica celeste',
    emoji: '🛰️',
    paragraphs: [
      "SISTEMA INERZIALE ECI (Earth-Centered Inertial): origine = centro della Terra, asse Z = asse di rotazione terrestre, asse X = verso il Punto d'Ariete. Non rotante rispetto alle stelle lontane → si applica F=ma senza forze apparenti.",
      "TERZA LEGGE DI KEPLERO (forma Newtoniana): P² = 4π² · a³ / [G·(M₁+M₂)] — lega periodo orbitale (P), semiasse maggiore (a) e somma delle masse.",
      "TEOREMA DEL VIRIALE: per sistemi stellari in equilibrio idrostatico/gravitazionale: 2K + U = 0 (l'energia cinetica totale K è pari a metà dell'energia potenziale gravitazionale U cambiata di segno).",
    ],
  },
  {
    title: 'Equilibri e limiti strutturali',
    emoji: '⚖️',
    paragraphs: [
      "LIMITE DI CHANDRASEKHAR (1.44 M☉): massa massima teorica sostenibile dalla pressione di degenerazione elettronica. Oltre questo valore, una nana bianca collassa (o esplode come Supernova Ia).",
      "PRESSIONE DI DEGENERAZIONE NON-RELATIVISTICA: nelle nane bianche NON dipende dalla temperatura, scala solo con la densità: Pₑ ∝ ρ^(5/3).",
      "RAGGIO DI SCHWARZSCHILD (Rₛ): Rₛ = 2GM / c² — orizzonte degli eventi di un buco nero statico, oltre il quale la velocità di fuga eguaglia quella della luce.",
      "LIMITE DI TOLMAN-OPPENHEIMER-VOLKOFF (TOV, ~3 M☉): oltre questa massa residua, nemmeno la pressione di degenerazione neutronica regge → Buco Nero.",
    ],
  },
  {
    title: 'Fotometria',
    emoji: '💡',
    paragraphs: [
      "GRANDEZZE FONDAMENTALI: intensità specifica (Iν) = radiazione in una direzione specifica. Flusso (L) = potenza totale attraverso una superficie (Watt). Densità di flusso (Fν) = potenza per unità di area (W/m²). Se isotropa: L = 4πr²F.",
      "MAGNITUDINE: scala logaritmica INVERSA (più bassa = più brillante), basata sulla percezione umana (formula di Pogson).",
      "SISTEMI DI MAGNITUDINE: storici (visiva, fotografica, fotovisiva) e moderni — UBV di Johnson-Morgan (Ultravioletto, Blu, Visibile), esteso nell'IR col sistema Johnson-Cousins-Glass (per i CCD). La magnitudine bolometrica (mbol) applica una correzione bolometrica (BC) alla visiva.",
      "INDICE DI COLORE: differenza tra magnitudini a due lunghezze d'onda della STESSA stella; stima la temperatura superficiale ed è indipendente dalla distanza.",
      "MAGNITUDINE ASSOLUTA (M): magnitudine apparente che una stella avrebbe a 10 parsec di distanza.",
      "LUMINOSITÀ SUPERFICIALE: densità di flusso per unità di angolo solido — rimane costante con la distanza (a differenza del flusso).",
    ],
  },
  {
    title: 'Spettroscopia',
    emoji: '🌈',
    paragraphs: [
      "RISOLUZIONE: potere risolutivo R = λ / Δλ (Δλ = minima differenza di lunghezza d'onda rilevabile).",
      "DISPERSORI: prismi (rifrazione, risoluzione limitata) — reticoli di diffrazione (interferenza, risoluzione maggiore, ma perdono intensità agli ordini alti) — grismi (prisma + reticolo, per spettroscopia a largo campo).",
      "SPETTROGRAFI: a fenditura (slit) — risoluzione peggiora aumentando la larghezza della fenditura. Echelle — angoli/ordini elevati, massima risoluzione, dispersore incrociato per separare gli ordini. IFU (Integral Field Unit) — datacube 3D (2D immagine + 1D spettro). Multi-oggetto — fibre ottiche per più sorgenti isolate insieme.",
      "CLASSIFICAZIONE DI HARVARD: temperatura decrescente O-B-A-F-G-K-M-L-T. Early-type (O,B,A: calde, righe di He/H) — solar-type (F,G,K: righe metalliche/molecolari) — late-type (M,L,T: fredde, bande molecolari). Esistono anche le peculiari C, S.",
      "CLASSIFICAZIONE DI YERKES (MKK): seconda dimensione = luminosità, da I (supergiganti) a V (sequenza principale/nane). Il Sole è G2V.",
      "DIAGRAMMI H-R e CMD: relazione magnitudine/luminosità vs tipo spettrale/colore — strumento chiave per l'evoluzione stellare.",
      "EQUAZIONE DI SAHA: quantifica lo stato di ionizzazione di un gas in equilibrio termodinamico locale, in funzione di temperatura e densità.",
    ],
  },
  {
    title: 'Struttura stellare',
    emoji: '⭐',
    paragraphs: [
      "4 EQUAZIONI DI EQUILIBRIO: (1) Equilibrio idrostatico — gravità bilanciata dalla pressione del gas; (2) Continuità della massa — distribuzione radiale della densità; (3) Conservazione dell'energia — tutta l'energia del nucleo va irradiata senza accumuli; (4) Gradiente di temperatura — determina il meccanismo di trasporto (conduzione, radiazione, convezione).",
      "TEOREMA DI VOGT-RUSSELL: la struttura di una stella in equilibrio è determinata univocamente da massa e composizione chimica.",
      "STATO DEL GAS: legge dei gas perfetti + pressione di radiazione (alte T). A densità estreme: degenerazione elettronica (principio di esclusione di Pauli) — pressione dipende SOLO dalla densità, non dalla temperatura (nane bianche).",
      "REAZIONI NUCLEARI (fino al Ferro, l'elemento più stabile): catena protone-protone (pp) — converte H in He, domina nelle stelle piccole/nel Sole. Ciclo CNO — catalizzato da C-N-O, domina per M>1.3 M☉, molto sensibile a T (∝T^16-17 contro T^4 della pp). Processo tre-alfa — 3 nuclei di He → Carbonio-12, a T~10⁸ K (fasi avanzate).",
    ],
  },
  {
    title: 'Il ciclo CNO in dettaglio',
    emoji: '🔄',
    paragraphs: [
      "Ciclo catalitico: Carbonio-12, Azoto-14 e Ossigeno-16 NON vengono consumati, restano invariati a fine ciclo: 4 protoni → 1 nucleo di Elio (particella alfa) + fotoni gamma + neutrini.",
      "Sequenza principale (CNO-1 / ciclo CN): ¹²C+¹H→¹³N+γ  →  ¹³N→¹³C+e⁺+νₑ  →  ¹³C+¹H→¹⁴N+γ  →  ¹⁴N+¹H→¹⁵O+γ (passo più LENTO, determina il ritmo)  →  ¹⁵O→¹⁵N+e⁺+νₑ  →  ¹⁵N+¹H→¹²C+⁴He (si chiude il ciclo).",
      "Soglia di temperatura: diventa efficiente sopra ~15 milioni di K. Dipendenza fortissima dalla temperatura (∝T^16-17, contro T^4 della catena pp): piccole variazioni di T causano enormi variazioni di energia prodotta.",
      "Punto di svolta: per M ≲ 1.3 M☉ domina la catena pp (nel Sole il CNO contribuisce solo ~1%). Per M > 1.3 M☉ il CNO diventa dominante.",
      "Impatto strutturale: la produzione di energia fortemente concentrata nel nucleo crea un core CONVETTIVO con inviluppo RADIATIVO nelle stelle massicce — l'esatto opposto del Sole (core radiativo, inviluppo convettivo).",
      "Conseguenza chimica: la reazione ¹⁴N+¹H→¹⁵O+γ è la più lenta → l'Azoto-14 si accumula (C e O diminuiscono, N aumenta). Nei fenomeni di dredge-up (giganti rosse) questo materiale ricco di Azoto risale in superficie, alterando lo spettro osservato.",
    ],
  },
  {
    title: "L'evoluzione stellare passo per passo",
    emoji: '🌠',
    paragraphs: [
      "1. NASCITA: nubi molecolari giganti (H₂, He, polveri, 10-20K) collassano per instabilità/onde d'urto → protostella (fase otticamente sottile poi spessa, stelle T-Tauri) → pre-sequenza principale lungo la linea di Hayashi → a ~4×10⁶ K si accende l'idrogeno → ZAMS (Zero-Age Main Sequence).",
      "2. SEQUENZA PRINCIPALE (~90% della vita della stella): fusione H→He nel nucleo, equilibrio idrostatico stabile. Limite inferiore 0.08 M☉ (sotto: nane brune); limite superiore ~120 M☉ (instabilità da pressione di radiazione).",
      "3. STRUTTURA PER MASSA in Sequenza Principale: alta massa → core convettivo + inviluppo radiativo (ciclo CNO), vita breve. Massa intermedia → core radiativo + inviluppo convettivo (catena pp). Piccola massa (<0.35 M☉) → completamente convettive, vita fino a trilioni di anni.",
      "4A. STELLE PICCOLE/MEDIE (<8 M☉ — es. il Sole): fine H nel nucleo → Gigante Rossa (H-shell burning) → Helium Flash esplosivo (per 0.5<M<2 M☉, degenerazione del nucleo di elio) → Ramo Orizzontale (He-core burning stabile) → Ramo Asintotico delle Giganti (AGB, nucleo C-O degenerato) → espulsione dell'inviluppo (Nebulosa Planetaria) → Nana Bianca C-O (limite 1.44 M☉).",
      "4B. STELLE MASSICCE (>8 M☉): fondono elementi via via più pesanti in gusci concentrici (\"a cipolla\"): H→He→C→Ne→O→Si→Fe. Il Ferro non produce energia fondendo (endotermico) → il nucleo collassa → rimbalzo violento → Supernova (qui si creano gli elementi oltre il Ferro). Residuo: 1.4–3 M☉ → Stella di Neutroni/Pulsar; >3 M☉ (limite TOV) → Buco Nero.",
      "REGOLA D'ORO: più una stella è massiccia, più vive poco (consuma il combustibile molto più rapidamente). La struttura \"a cipolla\" è tipica solo delle stelle massicce.",
    ],
  },
];

// The "must-know" question/answer pairs from the study notes — great as
// self-test flashcards (question first, tap to reveal the answer).
export const mustKnowFlashcards: FlashCard[] = [
  {
    question: 'Nel sistema di coordinate equatoriali, qual è la definizione corretta di ascensione retta (RA)?',
    answer: 'Distanza angolare dal Punto Vernale, misurata in senso ANTI-orario lungo l\'equatore celeste.',
  },
  {
    question: 'Quale fenomeno causa la rotazione di campo nelle immagini acquisite con una montatura altazimutale?',
    answer: "L'asse principale (azimut) è perpendicolare al suolo e non parallelo all'asse di rotazione terrestre (a differenza di una montatura equatoriale).",
  },
  {
    question: "Secondo la legge di Wien, se la temperatura di una stella raddoppia, come cambia la lunghezza d'onda di picco della sua emissione di corpo nero?",
    answer: 'Si dimezza (λ_picco · T = costante).',
  },
  {
    question: 'Nella classificazione spettrale di Harvard, quali sono le caratteristiche principali delle stelle di tipo O?',
    answer: 'Stelle blu molto calde, con righe di atomi multipli ionizzati e di Elio. Temperatura tra ~28.000K e 50.000K.',
  },
  {
    question: "Qual è la condizione fondamentale per l'equilibrio idrostatico all'interno di una stella?",
    answer: 'Il bilanciamento tra la forza di gravità e il gradiente di pressione del gas.',
  },
  {
    question: 'Quale reazione di fusione nucleare richiede temperature più elevate e utilizza nuclei come catalizzatori?',
    answer: 'Il ciclo CNO (Carbonio-Azoto-Ossigeno).',
  },
  {
    question: 'Nel sistema di coordinate galattiche, quali sono i riferimenti fondamentali per latitudine e longitudine galattica?',
    answer: 'Il piano equatoriale della Via Lattea (piano galattico) e la direzione del Centro Galattico.',
  },
  {
    question: 'Qual è il valore teorico approssimativo del limite di Chandrasekhar?',
    answer: '1.44 masse solari.',
  },
  {
    question: 'Qual è la principale fonte di energia che sostiene una stella stabile nella Sequenza Principale?',
    answer: "La fusione nucleare dell'idrogeno in Elio nel nucleo stellare.",
  },
  {
    question: 'Nella classificazione di luminosità di Yerkes (MKK), a quale tipologia di stelle corrisponde la classe V?',
    answer: 'Stelle di sequenza principale (nane).',
  },
  {
    question: 'Durante il processo tre-alfa, quale nucleo instabile si forma temporaneamente dalla fusione dei primi due nuclei di Elio-4?',
    answer: 'Berillio-8.',
  },
  {
    question: "L'equazione di Saha permette di quantificare quale fenomeno fisico?",
    answer: 'Lo stato di ionizzazione degli atomi in un gas in equilibrio termodinamico locale, in funzione di temperatura e densità.',
  },
];
