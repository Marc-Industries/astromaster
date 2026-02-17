import { Question } from '../types';

export const questionBank: Question[] = [
  {
    id: 1,
    text: "Mark the element that is NOT part of World Geodetic System",
    options: [
      "A parallel plane defined on the surface",
      "A gravitational equipotential surface",
      "A standard coordinate system",
      "A standard spheroidal reference surface"
    ],
    correctAnswerIndex: 0,
    explanation: "A parallel plane is not a fundamental component of a global geodetic system like WGS84.",
    translation: {
      text: "Segna l'elemento che NON fa parte del World Geodetic System",
      options: [
        "Un piano parallelo definito sulla superficie",
        "Una superficie equipotenziale gravitazionale",
        "Un sistema di coordinate standard",
        "Una superficie di riferimento sferoidale standard"
      ],
      explanation: "Un piano parallelo non è un componente fondamentale di un sistema geodetico globale come il WGS84."
    }
  },
  {
    id: 2,
    text: "Two reference systems have the East-West axis in common",
    options: [
      "Horizontal and Ecliptic systems",
      "Horizontal and Equatorial systems",
      "Equatorial and Ecliptic systems",
      "Galactic and Equatorial systems"
    ],
    correctAnswerIndex: 1,
    explanation: "The Horizontal and Equatorial systems share the East-West axis relative to the observer.",
    translation: {
      text: "Due sistemi di riferimento hanno l'asse Est-Ovest in comune",
      options: [
        "Sistemi Orizzontale ed Eclittico",
        "Sistemi Orizzontale ed Equatoriale",
        "Sistemi Equatoriale ed Eclittico",
        "Sistemi Galattico ed Equatoriale"
      ],
      explanation: "I sistemi Orizzontale ed Equatoriale condividono l'asse Est-Ovest relativo all'osservatore."
    }
  },
  {
    id: 3,
    text: "Mark the correct definition of Vernal Point",
    options: [
      "intersection between the Horizon and the Equator",
      "intersection between the Ecliptic and the Horizon",
      "intersection between the Equator and the Ecliptic",
      "intersection between the Local Meridian and the Horizon"
    ],
    correctAnswerIndex: 2,
    explanation: "The Vernal Point (Spring Equinox) is one of the two intersections between the Celestial Equator and the Ecliptic.",
    translation: {
      text: "Segna la definizione corretta di Punto Vernale",
      options: [
        "intersezione tra l'Orizzonte e l'Equatore",
        "intersezione tra l'Eclittica e l'Orizzonte",
        "intersezione tra l'Equatore e l'Eclittica",
        "intersezione tra il Meridiano Locale e l'Orizzonte"
      ],
      explanation: "Il Punto Vernale (Equinozio di Primavera) è una delle due intersezioni tra l'Equatore Celeste e l'Eclittica."
    }
  },
  {
    id: 4,
    text: "Mark the correct definition of",
    options: [
      "distance at which Earth's radius subtends an angle of one arc minute",
      "distance at which one astronomical unit subtends an angle of one arc second",
      "distance travelled by the light in one year, in vacuum conditions",
      "displacement of the Sun in one century along its orbit around the Galaxy"
    ],
    correctAnswerIndex: 1,
    explanation: "A parsec is defined as the distance at which 1 AU subtends an angle of 1 arcsecond.",
    translation: {
      text: "Segna la definizione corretta di",
      options: [
        "distanza alla quale il raggio terrestre sottende un angolo di un minuto d'arco",
        "distanza alla quale un'unità astronomica sottende un angolo di un secondo d'arco",
        "distanza percorsa dalla luce in un anno, nel vuoto",
        "spostamento del Sole in un secolo lungo la sua orbita attorno alla Galassia"
      ],
      explanation: "Un parsec è definito come la distanza alla quale 1 UA sottende un angolo di 1 secondo d'arco."
    }
  },
  {
    id: 5,
    text: "Mark the WRONG sentence",
    options: [
      "The motion of the Sun on the sky is not uniform due to Earth eccentricity",
      "The motion of the Sun on the Equator is not uniform because it moves on the Ecliptic",
      "The Mean Solar Time is equal to the Hour Angle of the Mean Equinox, plus 12 hours",
      "The Mean Sun moves at constant angular velocity on the equator, with period of one tropical year"
    ],
    correctAnswerIndex: 2,
    explanation: "Mean Solar Time relates to the Mean Sun, not the Mean Equinox. Sidereal time relates to the Equinox.",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "Il moto del Sole nel cielo non è uniforme a causa dell'eccentricità della Terra",
        "Il moto del Sole sull'Equatore non è uniforme perché si muove sull'Eclittica",
        "Il Tempo Solare Medio è uguale all'Angolo Orario dell'Equinozio Medio, più 12 ore",
        "Il Sole Medio si muove a velocità angolare costante sull'equatore, con periodo di un anno tropico"
      ],
      explanation: "Il Tempo Solare Medio si riferisce al Sole Medio, non all'Equinozio Medio. Il tempo siderale si riferisce all'Equinozio."
    }
  },
  {
    id: 6,
    text: "Mark the WRONG definition among the proposed ones",
    options: [
      "Draconic year: time between two consecutive passages of the Moon on the Vernal Point",
      "Solar Day: time between two consecutive passages of the Sun through the Local Meridian",
      "Sidereal Day: time between two consecutive passages of Vernal Point through the Local Meridian",
      "Tropical Year: time between two consecutive passages of the Sun on the Vernal Point"
    ],
    correctAnswerIndex: 0,
    explanation: "A Draconic year relates to the Moon's nodes (ascending node), not the Vernal Point.",
    translation: {
      text: "Segna la definizione ERRATA tra quelle proposte",
      options: [
        "Anno Draconico: tempo tra due passaggi consecutivi della Luna sul Punto Vernale",
        "Giorno Solare: tempo tra due passaggi consecutivi del Sole attraverso il Meridiano Locale",
        "Giorno Siderale: tempo tra due passaggi consecutivi del Punto Vernale attraverso il Meridiano Locale",
        "Anno Tropico: tempo tra due passaggi consecutivi del Sole sul Punto Vernale"
      ],
      explanation: "Un anno Draconico si riferisce ai nodi lunari (nodo ascendente), non al Punto Vernale."
    }
  },
  {
    id: 7,
    text: "Mark the WRONG sentence regarding the formation of spectral lines",
    options: [
      "Chemical elements absorb or emit at specific wavelengths, depending on their electronic structure",
      "Emission lines are formed when atoms in an excited state go back to the ground state",
      "Absorption lines are formed when photons from a cold source pass through a hotter one",
      "A continuous spectrum can be produced by heated-up material or hot gas at high pressure"
    ],
    correctAnswerIndex: 2,
    explanation: "Absorption lines form when light from a HOT source passes through a COLDER gas, not vice-versa.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla formazione delle righe spettrali",
      options: [
        "Gli elementi chimici assorbono o emettono a specifiche lunghezze d'onda, a seconda della loro struttura elettronica",
        "Le righe di emissione si formano quando gli atomi in uno stato eccitato tornano allo stato fondamentale",
        "Le righe di assorbimento si formano quando i fotoni da una sorgente fredda passano attraverso una più calda",
        "Uno spettro continuo può essere prodotto da materiale riscaldato o gas caldo ad alta pressione"
      ],
      explanation: "Le righe di assorbimento si formano quando la luce da una sorgente CALDA passa attraverso un gas più FREDDO, non viceversa."
    }
  },
  {
    id: 8,
    text: "Mark the correct sentence regarding the electromagnetic spectrum.",
    options: [
      "The energy associated with a photon decreases with increasing wavelength.",
      "The wavelength of a photon is equal to its frequency multiplied by the speed of light",
      "A Gamma ray photon is less energetic than an UltraViolet photon",
      "The Visible range is the main component of the electromagnetic spectrum"
    ],
    correctAnswerIndex: 0,
    explanation: "Energy is inversely proportional to wavelength (E = hc/lambda).",
    translation: {
      text: "Segna la frase corretta riguardo allo spettro elettromagnetico.",
      options: [
        "L'energia associata a un fotone diminuisce all'aumentare della lunghezza d'onda.",
        "La lunghezza d'onda di un fotone è uguale alla sua frequenza moltiplicata per la velocità della luce",
        "Un fotone Raggio Gamma è meno energetico di un fotone Ultravioletto",
        "Il range Visibile è il componente principale dello spettro elettromagnetico"
      ],
      explanation: "L'energia è inversamente proporzionale alla lunghezza d'onda (E = hc/lambda)."
    }
  },
  {
    id: 9,
    text: "Mark the WRONG sentence regarding the photometric color index of a star",
    options: [
      "The color index is a good observational estimate for the effective temperature of the star",
      "The color index is not affected by the stellar radius or the distance of the star",
      "The color index is obtained by comparing the flux density ina two different wavelengths",
      "The color index can be computed as the difference in magnitude between two stars"
    ],
    correctAnswerIndex: 3,
    explanation: "Color index is the difference in magnitude of the SAME star at different wavelengths, not between two stars.",
    translation: {
      text: "Segna la frase ERRATA riguardo all'indice di colore fotometrico di una stella",
      options: [
        "L'indice di colore è una buona stima osservativa per la temperatura efficace della stella",
        "L'indice di colore non è influenzato dal raggio stellare o dalla distanza della stella",
        "L'indice di colore è ottenuto confrontando la densità di flusso in due diverse lunghezze d'onda",
        "L'indice di colore può essere calcolato come la differenza di magnitudine tra due stelle"
      ],
      explanation: "L'indice di colore è la differenza di magnitudine della STESSA stella a diverse lunghezze d'onda."
    }
  },
  {
    id: 10,
    text: "Mark the WRONG sentence regarding the measurement of radiation",
    options: [
      "A source emitting radiation is isotropic if its intensity is independent of the angle",
      "The total intensity is obtained by integrating the specific density over a solid angle",
      "A radiation field is isotropic if the intensity is independent of direction",
      "The specific intensity emitted from a depends on its frequency and direction"
    ],
    correctAnswerIndex: 1,
    explanation: "Intensity is not obtained by integrating density; Flux is obtained by integrating intensity.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla misura della radiazione",
      options: [
        "Una sorgente che emette radiazione è isotropa se la sua intensità è indipendente dall'angolo",
        "L'intensità totale è ottenuta integrando la densità specifica su un angolo solido",
        "Un campo di radiazione è isotropo se l'intensità è indipendente dalla direzione",
        "L'intensità specifica emessa da un dipende dalla sua frequenza e direzione"
      ],
      explanation: "L'intensità non si ottiene integrando la densità; il Flusso si ottiene integrando l'intensità."
    }
  },
  {
    id: 11,
    text: "Mark the WRONG sentence regarding different types of spectrographs",
    options: [
      "Multi-Object spectrographs can take spectra of several objects in the focal plane at the same time",
      "Echelle spectrographs allow for extremely high resolution, but only for ground instruments",
      "Slit spectrographs can only be used for point-like sources and not for extended objects",
      "Unit spectrographs split the image in several parts, a spectrum is obtained for each one"
    ],
    correctAnswerIndex: 1,
    explanation: "Echelle spectrographs are used in space instruments as well (e.g., HST STIS).",
    translation: {
      text: "Segna la frase ERRATA riguardo ai diversi tipi di spettrografi",
      options: [
        "Gli spettrografi Multi-Object possono prendere spettri di diversi oggetti nel piano focale contemporaneamente",
        "Gli spettrografi Echelle permettono una risoluzione estremamente alta, ma solo per strumenti a terra",
        "Gli spettrografi a fenditura possono essere usati solo per sorgenti puntiformi e non per oggetti estesi",
        "Gli spettrografi Unit dividono l'immagine in diverse parti, uno spettro è ottenuto per ognuna"
      ],
      explanation: "Gli spettrografi Echelle sono usati anche negli strumenti spaziali."
    }
  },
  {
    id: 12,
    text: "Mark the WRONG sentence regarding slit spectroscopy",
    options: [
      "The dispersive element is parallel to a slit, placed on the focal plane of the telescope",
      "Spectrum can be regarded as an infinite number of monochromatic images of the entrance slit",
      "Increasing the width of the slit causes a degradation (reduction) of the spectral resolution",
      "It allows high spectral resolution but its complexity makes it not suitable for space telescopes"
    ],
    correctAnswerIndex: 3,
    explanation: "Slit spectroscopy is standard on space telescopes (e.g., Hubble, JWST).",
    translation: {
      text: "Segna la frase ERRATA riguardo alla spettroscopia a fenditura",
      options: [
        "L'elemento dispersivo è parallelo a una fenditura, posta sul piano focale del telescopio",
        "Lo spettro può essere considerato come un numero infinito di immagini monocromatiche della fenditura d'ingresso",
        "Aumentare la larghezza della fenditura causa un degrado (riduzione) della risoluzione spettrale",
        "Permette un'alta risoluzione spettrale ma la sua complessità lo rende non adatto per i telescopi spaziali"
      ],
      explanation: "La spettroscopia a fenditura è standard sui telescopi spaziali."
    }
  },
  {
    id: 13,
    text: "What is the percentage of the main components of the primordial solar nebula?",
    options: [
      "Hydrogen and Helium 98%",
      "Hydrogen and Helium 88%",
      "Hydrogen and Helium 92%",
      "Hydrogen and Helium 75%"
    ],
    correctAnswerIndex: 0,
    explanation: "The primordial nebula was almost entirely Hydrogen and Helium (approx 98-99%).",
    translation: {
      text: "Qual è la percentuale dei componenti principali della nebulosa solare primordiale?",
      options: [
        "Idrogeno ed Elio 98%",
        "Idrogeno ed Elio 88%",
        "Idrogeno ed Elio 92%",
        "Idrogeno ed Elio 75%"
      ],
      explanation: "La nebulosa primordiale era quasi interamente Idrogeno ed Elio (circa 98-99%)."
    }
  },
  {
    id: 14,
    text: "Main differences between and outer planets",
    options: [
      "planets have higher than the outer planets",
      "planets have primitive atmospheres, outer planets have secondary atmospheres",
      "Outer planets atmosphere is primarily composed of CO2, planets atmosphere of H",
      "planets are made of rocks and metals, outer planets of gas (He,H) and ice"
    ],
    correctAnswerIndex: 3,
    explanation: "Inner (terrestrial) planets are rock/metal; Outer (jovian) are gas/ice.",
    translation: {
      text: "Principali differenze tra pianeti [interni] ed esterni",
      options: [
        "i pianeti hanno [densità] più alta dei pianeti esterni",
        "i pianeti hanno atmosfere primitive, i pianeti esterni hanno atmosfere secondarie",
        "L'atmosfera dei pianeti esterni è composta principalmente da CO2, quella dei pianeti da H",
        "i pianeti sono fatti di rocce e metalli, i pianeti esterni di gas (He,H) e ghiaccio"
      ],
      explanation: "I pianeti interni sono roccia/metallo; quelli esterni sono gas/ghiaccio."
    }
  },
  {
    id: 15,
    text: "What is the main component of the Earth atmosphere?",
    options: [
      "Oxygen",
      "Water",
      "Nitrogen",
      "Carbon dioxide"
    ],
    correctAnswerIndex: 2,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    translation: {
      text: "Qual è il componente principale dell'atmosfera terrestre?",
      options: [
        "Ossigeno",
        "Acqua",
        "Azoto",
        "Anidride Carbonica"
      ],
      explanation: "L'azoto costituisce circa il 78% dell'atmosfera terrestre."
    }
  },
  {
    id: 16,
    text: "What does the depend on?",
    options: [
      "The radius of the main planet times the cubic root of the ratio of the densities of the two bodies",
      "The ratio between the mass and the radius of the satellite approaching the planet",
      "The cubic root of the ratio between the mass of the planet and the radius of the satellite",
      "The distance between the two bodies times the square root of the mass of the planet times the mass of the satellite"
    ],
    correctAnswerIndex: 0,
    explanation: "Refers to the Roche Limit formula.",
    translation: {
      text: "Da cosa dipende il [limite di Roche]?",
      options: [
        "Il raggio del pianeta principale per la radice cubica del rapporto delle densità dei due corpi",
        "Il rapporto tra la massa e il raggio del satellite che si avvicina al pianeta",
        "La radice cubica del rapporto tra la massa del pianeta e il raggio del satellite",
        "La distanza tra i due corpi per la radice quadrata della massa del pianeta per la massa del satellite"
      ],
      explanation: "Si riferisce alla formula del Limite di Roche."
    }
  },
  {
    id: 17,
    text: "What are the shepherd satellites?",
    options: [
      "Small satellites orbiting among the rings of Saturn and also among the rings of other Giant planets",
      "Small objects orbiting in the Kuiper Belt",
      "Small objects orbiting in the Main Belt",
      "Small asteroids in the Jupiter's Lagrangian points L4 and L5"
    ],
    correctAnswerIndex: 0,
    explanation: "Shepherd moons confine planetary rings.",
    translation: {
      text: "Cosa sono i satelliti pastore?",
      options: [
        "Piccoli satelliti che orbitano tra gli anelli di Saturno e anche tra gli anelli di altri pianeti Giganti",
        "Piccoli oggetti che orbitano nella Fascia di Kuiper",
        "Piccoli oggetti che orbitano nella Fascia Principale",
        "Piccoli asteroidi nei punti lagrangiani L4 e L5 di Giove"
      ],
      explanation: "I lune pastore confinano gli anelli planetari."
    }
  },
  {
    id: 18,
    text: "How much bigger is the mass of Jupiter compared to that of the Earth?",
    options: [
      "280 times",
      "200 times",
      "348 times",
      "317 times"
    ],
    correctAnswerIndex: 3,
    explanation: "Jupiter is approximately 317-318 times more massive than Earth.",
    translation: {
      text: "Quanto è più grande la massa di Giove rispetto a quella della Terra?",
      options: [
        "280 volte",
        "200 volte",
        "348 volte",
        "317 volte"
      ],
      explanation: "Giove è circa 317-318 volte più massiccio della Terra."
    }
  },
  {
    id: 19,
    text: "What is the main component of the Jovian planets?",
    options: [
      "Hydrocarbons",
      "Ammonia and Methane",
      "Methane",
      "Helium and Hydrogen"
    ],
    correctAnswerIndex: 3,
    explanation: "Jovian planets are Gas Giants composed mostly of H and He.",
    translation: {
      text: "Qual è il componente principale dei pianeti gioviani?",
      options: [
        "Idrocarburi",
        "Ammoniaca e Metano",
        "Metano",
        "Elio e Idrogeno"
      ],
      explanation: "I pianeti gioviani sono Giganti Gassosi composti principalmente da H e He."
    }
  },
  {
    id: 20,
    text: "How does the cometary ion tail form?",
    options: [
      "Interaction between neutral molecules and solar wind",
      "Interaction between cometary ions and solar wind",
      "Interaction between cometary dust and ions",
      "Interaction between cometary ions and solar radiation pressure"
    ],
    correctAnswerIndex: 1,
    explanation: "The ion tail is shaped by the solar wind interacting with ions.",
    translation: {
      text: "Come si forma la coda di ioni di una cometa?",
      options: [
        "Interazione tra molecole neutre e vento solare",
        "Interazione tra ioni cometari e vento solare",
        "Interazione tra polvere cometaria e ioni",
        "Interazione tra ioni cometari e pressione di radiazione solare"
      ],
      explanation: "La coda di ioni è modellata dal vento solare che interagisce con gli ioni."
    }
  },
  {
    id: 21,
    text: "Which satellite in the Solar System has a thick atmosphere?",
    options: [
      "Triton",
      "Europa",
      "Titan",
      "Ganymede"
    ],
    correctAnswerIndex: 2,
    explanation: "Titan is the only moon with a dense atmosphere.",
    translation: {
      text: "Quale satellite nel Sistema Solare ha un'atmosfera densa?",
      options: [
        "Tritone",
        "Europa",
        "Titano",
        "Ganimede"
      ],
      explanation: "Titano è l'unica luna con un'atmosfera densa."
    }
  },
  {
    id: 22,
    text: "Mark the WRONG sentence regarding the Main Sequence phase",
    options: [
      "In the colour-magnitude diagram, Main Sequence stars are randomly scattered all across the diagram",
      "Stars more massive than 120 solar masses are predicted to be unstable, although exceptions have been observed",
      "Objects with mass smaller than 0.08 solar masses are not massive enough to start Hydrogen fusion",
      "The energy to sustain the hydrostatic equilibrium of the star is provided by Hydrogen fusion in the core"
    ],
    correctAnswerIndex: 0,
    explanation: "Main Sequence stars lie on a specific band in the HR diagram, they are NOT randomly scattered.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla fase di Sequenza Principale",
      options: [
        "Nel diagramma colore-magnitudine, le stelle di Sequenza Principale sono sparse casualmente in tutto il diagramma",
        "Si prevede che le stelle più massicce di 120 masse solari siano instabili, sebbene siano state osservate eccezioni",
        "Gli oggetti con massa inferiore a 0.08 masse solari non sono abbastanza massicci per avviare la fusione dell'Idrogeno",
        "L'energia per sostenere l'equilibrio idrostatico della stella è fornita dalla fusione dell'Idrogeno nel nucleo"
      ],
      explanation: "Le stelle di Sequenza Principale giacciono su una banda specifica nel diagramma HR, NON sono sparse casualmente."
    }
  },
  {
    id: 23,
    text: "Mark the WRONG sentence regarding the lifetime of a star radiating as the Sun",
    options: [
      "By radiating its gravitational potential energy, a star could only survive a few millions of years",
      "Nuclear reactions keep a star in balance for billions of years only if all of its mass is converted to energy",
      "Without any internal pressure to counterbalance gravity, a star would collapse in about half an hour",
      "Chemical reactions or radioactivity are not efficient enough to justify the luminosity of the Sun"
    ],
    correctAnswerIndex: 1,
    explanation: "Only a small fraction (core) of mass is fused, and only 0.7% of that mass becomes energy.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla vita di una stella che irradia come il Sole",
      options: [
        "Irradiando la sua energia potenziale gravitazionale, una stella potrebbe sopravvivere solo pochi milioni di anni",
        "Le reazioni nucleari mantengono una stella in equilibrio per miliardi di anni solo se tutta la sua massa viene convertita in energia",
        "Senza alcuna pressione interna per controbilanciare la gravità, una stella collasserebbe in circa mezz'ora",
        "Le reazioni chimiche o la radioattività non sono abbastanza efficienti da giustificare la luminosità del Sole"
      ],
      explanation: "Solo una piccola frazione della massa viene fusa."
    }
  },
  {
    id: 24,
    text: "Mark the WRONG sentence regarding the Carbon burning phase and beyond in stellar evolution (massive stars)",
    options: [
      "After Carbon ignition, the star goes through a series of alternating nuclear burning / core contraction cycles",
      "Carbon fusion in the core starts if the Carbon-Oxygen core has a mass greater than 1.06 solar masses",
      "Each nuclear burning phase is much quicker than the previous one, with Silicon-burning lasting only a few weeks",
      "Each nuclear burning phase converts the totality of the mass of the star in an element with higher atomic numbe"
    ],
    correctAnswerIndex: 3,
    explanation: "Nuclear burning occurs in shells and the core, leaving layers of different elements, not converting the *totality* of the star's mass.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla fase di combustione del Carbonio e oltre nell'evoluzione stellare (stelle massicce)",
      options: [
        "Dopo l'accensione del Carbonio, la stella attraversa una serie di cicli alternati di combustione nucleare / contrazione del nucleo",
        "La fusione del Carbonio nel nucleo inizia se il nucleo Carbonio-Ossigeno ha una massa maggiore di 1.06 masse solari",
        "Ogni fase di combustione nucleare è molto più rapida della precedente, con la combustione del Silicio che dura solo poche settimane",
        "Ogni fase di combustione nucleare converte la totalità della massa della stella in un elemento con numero atomico superiore"
      ],
      explanation: "La combustione nucleare avviene a strati, non converte l'intera stella."
    }
  },
  {
    id: 25,
    text: "Mark the WRONG sentence regarding the nuclear fusion reactions in stars",
    options: [
      "In the Sun 99% of the energy is produced by the proton-proton chain, and 91% by the ppl chain",
      "The proton-proton IlI chain, even CNOfi marginal, explains the very high energy neutrinos from the Sun",
      "The Carbon-Nitrogen-Oxygen cycle is predominant only for stars more massive than the Sun",
      "The CNO cycle causes a noticeable variation in the abundance of \"metals\" in the core of the star"
    ],
    correctAnswerIndex: 3,
    explanation: "The CNO cycle uses C, N, O as catalysts; their total abundance doesn't change significantly, just their relative proportions.",
    translation: {
      text: "Segna la frase ERRATA riguardo alle reazioni di fusione nucleare nelle stelle",
      options: [
        "Nel Sole il 99% dell'energia è prodotto dalla catena protone-protone, e il 91% dalla catena ppI",
        "La catena protone-protone III, anche se marginale, spiega i neutrini ad altissima energia dal Sole",
        "Il ciclo Carbonio-Azoto-Ossigeno è predominante solo per le stelle più massicce del Sole",
        "Il ciclo CNO causa una variazione evidente nell'abbondanza di \"metalli\" nel nucleo della stella"
      ],
      explanation: "Il ciclo CNO usa C, N, O come catalizzatori; la loro abbondanza totale non cambia."
    }
  },
  {
    id: 26,
    text: "Mark the WRONG sentence regarding white dwarfs",
    options: [
      "Compression does not lead to heating and expansion as in regular stars: increasing the mass causes smaller radius",
      "The electron degeneracy pressure is independent of temperature, but it depends only on the density of matter",
      "Electron degeneracy pressure can support a white dwarf of any mass, regardless of its origin",
      "White dwarfs are mainly composed % of Carbon and Oxygen, with a thin Hydrogen or Helium atmosphere"
    ],
    correctAnswerIndex: 2,
    explanation: "Electron degeneracy pressure has a limit (Chandrasekhar limit, ~1.4 solar masses).",
    translation: {
      text: "Segna la frase ERRATA riguardo alle nane bianche",
      options: [
        "La compressione non porta a riscaldamento ed espansione come nelle stelle normali: aumentare la massa causa un raggio minore",
        "La pressione di degenerazione elettronica è indipendente dalla temperatura, ma dipende solo dalla densità della materia",
        "La pressione di degenerazione elettronica può sostenere una nana bianca di qualsiasi massa, indipendentemente dalla sua origine",
        "Le nane bianche sono composte principalmente % di Carbonio e Ossigeno, con una sottile atmosfera di Idrogeno o Elio"
      ],
      explanation: "La pressione di degenerazione ha un limite (limite di Chandrasekhar)."
    }
  },
  {
    id: 27,
    text: "Mark the WRONG sentence regarding black holes and compact objects",
    options: [
      "The interaction between two compact objects, or a compact object and star, will cause emission of very energetic photons",
      "A black hole can be identified by observing the orbit of the material in the accretion disk or of the stars around it",
      "From the outside, we would see the local clock of someone falling into a black hole increasing its speed exponentially",
      "The merging of compact objects is so energetic that creates ripples in the space-time continuum, called gravitational waves"
    ],
    correctAnswerIndex: 2,
    explanation: "Time dilation makes the clock appear to slow down (stop) at the horizon, not increase speed.",
    translation: {
      text: "Segna la frase ERRATA riguardo ai buchi neri e oggetti compatti",
      options: [
        "L'interazione tra due oggetti compatti, o un oggetto compatto e una stella, causerà l'emissione di fotoni molto energetici",
        "Un buco nero può essere identificato osservando l'orbita del materiale nel disco di accrescimento o delle stelle attorno ad esso",
        "Dall'esterno, vedremmo l'orologio locale di qualcuno che cade in un buco nero aumentare la sua velocità esponenzialmente",
        "La fusione di oggetti compatti è così energetica che crea increspature nel continuum spazio-tempo, chiamate onde gravitazionali"
      ],
      explanation: "La dilatazione temporale fa sembrare che l'orologio rallenti."
    }
  },
  {
    id: 28,
    text: "Mark the WRONG sentence regarding the rotation of the Sun",
    options: [
      "Inside the convective zone, the angular velocity is similar to that of the surface. The radiative core rotates as a rigid body",
      "The transition zone between the radiative zone and the convective one is called tachocline",
      "The Sun rotates at the same angular velocity from its equator the poles, and it can be approximated to a rotating rigid body",
      "The rotational period of the Sun, at a given latitude, can be expressed as sidereal or synodic (slightly longer than synodic)"
    ],
    correctAnswerIndex: 2,
    explanation: "The Sun has differential rotation; it rotates faster at the equator than at the poles.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla rotazione del Sole",
      options: [
        "All'interno della zona convettiva, la velocità angolare è simile a quella della superficie. Il nucleo radiativo ruota come un corpo rigido",
        "La zona di transizione tra la zona radiativa e quella convettiva è chiamata tachocline",
        "Il Sole ruota alla stessa velocità angolare dall'equatore ai poli, e può essere approssimato a un corpo rigido rotante",
        "Il periodo di rotazione del Sole, a una data latitudine, può essere espresso come siderale o sinodico"
      ],
      explanation: "Il Sole ha una rotazione differenziale."
    }
  },
  {
    id: 29,
    text: "Mark the WRONG sentence regarding the atmosphere of the Sun",
    options: [
      "The photosphere can be observed & using a telescope with an H-alpha filter, while the corona can be observed only during an eclipse",
      "The solar atmosphere is divided into the corona (300-500 km thick) and the photosphere (over 500 km). The chromosphere extends much further out",
      "The chromosphere is characterized by an inversion of the temperature gradient, increasing outward, and very small densities",
      "In the photosphere, the temperature rapidly increases inwards, from 4500 K to 8000 K. This is the origin of the limb darkening effect"
    ],
    correctAnswerIndex: 1,
    explanation: "The photosphere is thin (~500km), Chromosphere is above it, and Corona is the outermost, extended layer.",
    translation: {
      text: "Segna la frase ERRATA riguardo all'atmosfera del Sole",
      options: [
        "La fotosfera può essere osservata usando un telescopio con filtro H-alfa, mentre la corona solo durante un'eclissi",
        "L'atmosfera solare è divisa in corona (spessa 300-500 km) e fotosfera (oltre 500 km). La cromosfera si estende molto più in fuori",
        "La cromosfera è caratterizzata da un'inversione del gradiente di temperatura, aumentando verso l'esterno, e densità molto basse",
        "Nella fotosfera, la temperatura aumenta rapidamente verso l'interno, da 4500 K a 8000 K. Questa è l'origine dell'oscuramento al bordo"
      ],
      explanation: "La descrizione degli strati e spessori è errata."
    }
  },
  {
    id: 30,
    text: "Mark the WRONG sentence regarding the definition of planet/exoplanet",
    options: [
      "A planet/exoplanet can orbit another planet or float free in space",
      "A planet/exoplanet has \"cleared the neighbourhood\" around its orbit",
      "A planet/exoplanet has sufficient mass to assume hydrostatic equilibrium a nearly round shape)",
      "A planet/exoplanet is in orbit around the Sun/star"
    ],
    correctAnswerIndex: 0,
    explanation: "By definition, a planet must orbit a star/Sun.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla definizione di pianeta/esopianeta",
      options: [
        "Un pianeta/esopianeta può orbitare attorno a un altro pianeta o fluttuare libero nello spazio",
        "Un pianeta/esopianeta ha \"ripulito il vicinato\" attorno alla sua orbita",
        "Un pianeta/esopianeta ha massa sufficiente per assumere l'equilibrio idrostatico (forma quasi sferica)",
        "Un pianeta/esopianeta è in orbita attorno al Sole/stella"
      ],
      explanation: "Per definizione, un pianeta deve orbitare attorno a una stella."
    }
  },
  {
    id: 31,
    text: "Mark the WRONG sentence regarding the classification of exoplanet discoveries",
    options: [
      "Object of Interest: a star showing a planet-like signal of unknown origin",
      "Validated planet: a candidate planet with a very small probability of being a false positive",
      "Confirmed planet: the planet has been detected or characterized using an independent technique",
      "Candidate planet: a planet selected by the International Astronomical Union as a possible Earth 2.0"
    ],
    correctAnswerIndex: 3,
    explanation: "Candidate planet is just a signal that passes probability thresholds, not selected by IAU as Earth 2.0.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla classificazione delle scoperte di esopianeti",
      options: [
        "Oggetto di Interesse: una stella che mostra un segnale simile a un pianeta di origine sconosciuta",
        "Pianeta convalidato: un pianeta candidato con una probabilità molto piccola di essere un falso positivo",
        "Pianeta confermato: il pianeta è stato rilevato o caratterizzato usando una tecnica indipendente",
        "Pianeta candidato: un pianeta selezionato dall'Unione Astronomica Internazionale come possibile Terra 2.0"
      ],
      explanation: "Un pianeta candidato è solo un segnale probabile, non una selezione IAU."
    }
  },
  {
    id: 32,
    text: "Mark the WRONG sentence regarding these properties of galaxies",
    options: [
      "Galaxy formation theories can be divided into two main groups: \"Hierarchical\" and \"Monolithic\"",
      "Elliptical galaxies are mainly composed of old low-mass stars, sparse interstellar medium and minimal star formation",
      "It is nearly impossible for galaxies to collide or merge. Structural properties are preserved since their formation.",
      "The constant velocity of the gas in the outskirts of galaxies led to the discovery of dark matter"
    ],
    correctAnswerIndex: 2,
    explanation: "Galaxies frequently collide and merge.",
    translation: {
      text: "Segna la frase ERRATA riguardo a queste proprietà delle galassie",
      options: [
        "Le teorie di formazione galattica possono essere divise in due gruppi principali: \"Gerarchica\" e \"Monolitica\"",
        "Le galassie ellittiche sono composte principalmente da vecchie stelle di piccola massa, scarso mezzo interstellare e minima formazione stellare",
        "È quasi impossibile per le galassie scontrarsi o fondersi. Le proprietà strutturali sono preservate dalla loro formazione.",
        "La velocità costante del gas nella periferia delle galassie ha portato alla scoperta della materia oscura"
      ],
      explanation: "Le galassie si scontrano e si fondono frequentemente."
    }
  },
  {
    id: 33,
    text: "Mark the WRONG sentence regarding stellar clusters and association",
    options: [
      "The Messier and NGC catalogues include a careful selection of open and globular clusters, with all possible constellations and asterisms cleaned out",
      "A Group of young stars, with a few tens of members, is called an association. It will dissolve very quickly, forming stellar streams and moving groups",
      "Open clusters can contain up to thousands of stars. They are more gravitationally bounded than associations and they will dissolve on longer timescales",
      "Stars in clusters formed from the same giant molecular cloud, have similar distance and kinematics, have roughly the same age and chemical abundances"
    ],
    correctAnswerIndex: 0,
    explanation: "Messier/NGC contain many objects including asterisms and non-physical groupings initially.",
    translation: {
      text: "Segna la frase ERRATA riguardo agli ammassi stellari e associazioni",
      options: [
        "I cataloghi Messier e NGC includono un'attenta selezione di ammassi aperti e globulari, con tutte le possibili costellazioni e asterismi ripuliti",
        "Un gruppo di stelle giovani, con poche decine di membri, è chiamato associazione. Si dissolverà molto velocemente",
        "Gli ammassi aperti possono contenere fino a migliaia di stelle. Sono più legati gravitazionalmente delle associazioni",
        "Le stelle negli ammassi formati dalla stessa nuvola molecolare gigante, hanno distanza e cinematica simili"
      ],
      explanation: "I cataloghi storici contengono vari oggetti, inclusi asterismi."
    }
  },
  {
    id: 34,
    text: "Mark the WRONG sentence regarding the properties of galaxies",
    options: [
      "Galaxies are not randomly distributed in space, but they aggregate in groups and cluster",
      "A Galaxy is a gravitationally bound system formed of stars, stellar remnants, dust, interstellar gas, and dark matter",
      "The Andromeda Galaxy would look much larger than the Moon if it was bright enough for our eye",
      "Small galaxies do exist isolated from other galaxies, and they never orbit larger galaxies"
    ],
    correctAnswerIndex: 3,
    explanation: "Small galaxies (dwarfs) often orbit larger galaxies (satellites).",
    translation: {
      text: "Segna la frase ERRATA riguardo alle proprietà delle galassie",
      options: [
        "Le galassie non sono distribuite casualmente nello spazio, ma si aggregano in gruppi e ammassi",
        "Una galassia è un sistema legato gravitazionalmente formato da stelle, resti stellari, polvere, gas e materia oscura",
        "La Galassia di Andromeda apparirebbe molto più grande della Luna se fosse abbastanza luminosa per il nostro occhio",
        "Esistono piccole galassie isolate da altre galassie, e non orbitano mai attorno a galassie più grandi"
      ],
      explanation: "Le piccole galassie spesso orbitano attorno a quelle più grandi."
    }
  },
  {
    id: 35,
    text: "Mark the WRONG sentence regarding the classification of exoplanets",
    options: [
      "Mini-Neptunes: gas and ice planets larger than Earth but smaller than Neptune",
      "Hot Jupiter/Neptunes: gas and ice giants with orbital periods shorter than 10 days",
      "Super-Earths: planets slightly larger than Earth, rocky with a thin atmosphere",
      "Warm Jupiter/Neptunes: gas giants with temperature adequate to host liquid water"
    ],
    correctAnswerIndex: 3,
    explanation: "Gas giants don't have liquid water surfaces in the traditional sense of habitability.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla classificazione degli esopianeti",
      options: [
        "Mini-Nettuni: pianeti di gas e ghiaccio più grandi della Terra ma più piccoli di Nettuno",
        "Hot Jupiter/Neptunes: giganti di gas e ghiaccio con periodi orbitali inferiori a 10 giorni",
        "Super-Terre: pianeti leggermente più grandi della Terra, rocciosi con un'atmosfera sottile",
        "Warm Jupiter/Neptunes: giganti gassosi con temperatura adeguata per ospitare acqua liquida"
      ],
      explanation: "I giganti gassosi non ospitano acqua liquida in superficie."
    }
  },
  {
    id: 36,
    text: "Mark the WRONG sentence regarding white dwarfs",
    options: [
      "When they cool down, carbon assumes a crystalline configuration similar (but not exactly) to that of diamonds",
      "White dwarfs are very cold, so they are dim (low luminosity) despite their large size (several solar radii)",
      "Observed Hydrogen-Helium white dwarfs can only be the result of stellar evolution in binary systems",
      "White dwarfs have no energy source: they will gradually cool as they radiate their energy, becoming black dwarfs"
    ],
    correctAnswerIndex: 1,
    explanation: "White dwarfs are small (Earth size), not large.",
    translation: {
      text: "Segna la frase ERRATA riguardo alle nane bianche",
      options: [
        "Quando si raffreddano, il carbonio assume una configurazione cristallina simile a quella dei diamanti",
        "Le nane bianche sono molto fredde, quindi sono deboli nonostante la loro grande dimensione (diversi raggi solari)",
        "Le nane bianche Idrogeno-Elio osservate possono essere solo il risultato dell'evoluzione stellare in sistemi binari",
        "Le nane bianche non hanno fonte di energia: si raffredderanno gradualmente diventando nane nere"
      ],
      explanation: "Le nane bianche sono piccole (dimensioni terrestri)."
    }
  },
  {
    id: 37,
    text: "What is a mean motion resonance?",
    options: [
      "It is the synchronization of the rotational and orbital period for the same object",
      "The rotational periods of two objects are related by a ratio of small integers",
      "The orbital periods of two (or more) objects are related by a ratio of small integers",
      "It is the synchronization of the perihelion precession and of the ascending node"
    ],
    correctAnswerIndex: 2,
    explanation: "Mean motion resonance involves orbital periods.",
    translation: {
      text: "Cos'è una risonanza di moto medio?",
      options: [
        "È la sincronizzazione del periodo rotazionale e orbitale per lo stesso oggetto",
        "I periodi rotazionali di due oggetti sono legati da un rapporto di piccoli interi",
        "I periodi orbitali di due (o più) oggetti sono legati da un rapporto di piccoli interi",
        "È la sincronizzazione della precessione del perielio e del nodo ascendente"
      ],
      explanation: "La risonanza di moto medio coinvolge i periodi orbitali."
    }
  },
  {
    id: 38,
    text: "Mark the WRONG sentence regarding the Sun",
    options: [
      "The Sun has a radiative core, extended up to 0.7 solar radii from the center, surrounded by a convective envelope",
      "In the Sun, only 19% of the energy is produced within 0.25 solar radii. Every second four tonnes of mass are converted into energy",
      "The observation of neutrinos from the core of the Sun has permitted their mass determination, awarded with several Nobel prizes",
      "composition has not changed since formation. In the core, 5% of the primordial Hydrogen has been converted to Helium"
    ],
    correctAnswerIndex: 3,
    explanation: "About half of the core hydrogen has been converted, not 5%.",
    translation: {
      text: "Segna la frase ERRATA riguardo al Sole",
      options: [
        "Il Sole ha un nucleo radiativo, esteso fino a 0.7 raggi solari, circondato da un inviluppo convettivo",
        "Nel Sole, solo il 19% dell'energia è prodotto entro 0.25 raggi solari. Ogni secondo 4 tonnellate di massa sono convertite",
        "L'osservazione dei neutrini dal nucleo ha permesso la determinazione della loro massa",
        "la composizione non è cambiata dalla formazione. Nel nucleo, il 5% dell'Idrogeno primordiale è stato convertito in Elio"
      ],
      explanation: "Circa metà dell'idrogeno del nucleo è stato convertito."
    }
  },
  {
    id: 39,
    text: "Mark the WRONG sentence regarding the magnetic activity of the Sun",
    options: [
      "We have a prominence when the magnetic lines rise above the solar into a loop, and hot gas streams through the loop",
      "Sunspots are large regions (10000 km) in the photosphere that are around 1500K colder than the surroundings, appearing darker",
      "Differential rotation will cause the magnetic field to get wrapped and emerge from the surface, causing solar activity phenomena",
      "The lifetime of a single spot can be of several years. Spots appear and disappear randomly on the of the Sun"
    ],
    correctAnswerIndex: 3,
    explanation: "Sunspots last days to months, not years, and follow the solar cycle pattern.",
    translation: {
      text: "Segna la frase ERRATA riguardo all'attività magnetica del Sole",
      options: [
        "Abbiamo una protuberanza quando le linee magnetiche si alzano sopra il sole in un anello",
        "Le macchie solari sono grandi regioni nella fotosfera circa 1500K più fredde dell'ambiente circostante",
        "La rotazione differenziale causa l'avvolgimento del campo magnetico e l'emersione dalla superficie",
        "La vita di una singola macchia può essere di diversi anni. Le macchie appaiono e scompaiono casualmente"
      ],
      explanation: "Le macchie durano giorni o mesi, non anni."
    }
  },
  {
    id: 40,
    text: "Mark the WRONG sentence regarding neutron stars and pulsars",
    options: [
      "Neutron stars have a strong (compressed) magnetic field, because they preserved the magnetic field of the progenitors",
      "Only a small number of neutron stars emits a radio beam sweeping the sky regularly, and all of them take the name of pulsars",
      "Most neutron stars emit a radio beam, sweeping the sky regularly if the magnetic poles are not aligned with the rotation axis",
      "During the collapse the angular momentum of the core is preserved, so the emerging neutron star will spin extremely fast"
    ],
    correctAnswerIndex: 1,
    explanation: "Not all are pulsars; only those beaming at us.",
    translation: {
      text: "Segna la frase ERRATA riguardo alle stelle di neutroni e pulsar",
      options: [
        "Le stelle di neutroni hanno un forte campo magnetico, perché hanno preservato quello dei progenitori",
        "Solo un piccolo numero di stelle di neutroni emette un fascio radio che spazza il cielo regolarmente, e tutte prendono il nome di pulsar",
        "La maggior parte delle stelle di neutroni emette un fascio radio se i poli non sono allineati",
        "Durante il collasso il momento angolare è conservato, quindi la stella di neutroni ruota velocemente"
      ],
      explanation: "Non tutte sono pulsar."
    }
  },
  {
    id: 41,
    text: "Mark the WRONG sentence regarding the mass-temperature relationship in stars",
    options: [
      "Stars become brighter, hotter (on surface) and less dense with increasing mass, but only for Main Sequence stars",
      "The CNO cycle is less sensitive to temperature, so in massive stars nuclear reactions occur at a much slower rate",
      "Massive stars need higher core temperatures to be stable, so that pressure can balance the higher gravitational compression",
      "Mass, luminosity and temperature are tightly correlated, with luminosity and temperature increasing with the mass"
    ],
    correctAnswerIndex: 1,
    explanation: "CNO cycle is highly temperature sensitive.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla relazione massa-temperatura nelle stelle",
      options: [
        "Le stelle diventano più luminose, più calde e meno dense all'aumentare della massa (Sequenza Principale)",
        "Il ciclo CNO è meno sensibile alla temperatura, quindi nelle stelle massicce le reazioni avvengono più lentamente",
        "Le stelle massicce necessitano di temperature centrali più alte per essere stabili",
        "Massa, luminosità e temperatura sono strettamente correlate"
      ],
      explanation: "Il ciclo CNO è molto sensibile alla temperatura."
    }
  },
  {
    id: 42,
    text: "Mark the WRONG sentence regarding white dwarfs",
    options: [
      "Electron degeneracy pressure can support a white dwarf of any mass, regardless of its origin",
      "The electron degeneracy pressure is independent of temperature, but it depends only on the density of matter",
      "White dwarfs are mainly composed of Carbon andOxygen, with a thin Hydrogen or Helium atmosphere",
      "Compression does not lead to heating and expansion as in regular stars: increasing the mass causes smaller radius"
    ],
    correctAnswerIndex: 0,
    explanation: "Chandrasekhar limit exists.",
    translation: {
      text: "Segna la frase ERRATA riguardo alle nane bianche",
      options: [
        "La pressione di degenerazione elettronica può sostenere una nana bianca di qualsiasi massa",
        "La pressione di degenerazione è indipendente dalla temperatura, dipende solo dalla densità",
        "Le nane bianche sono composte principalmente da Carbonio e Ossigeno",
        "La compressione non porta a riscaldamento; aumentare la massa riduce il raggio"
      ],
      explanation: "Esiste il limite di Chandrasekhar."
    }
  },
  {
    id: 43,
    text: "Mark the WRONG sentence regarding the lifetime of a star radiating as the Sun",
    options: [
      "By radiating its gravitational potential energy, a star could only survive a few millions of years",
      "Chemical reactions or radioactivity are not efficient enough to justify the luminosity of the Sun",
      "Without any internal pressure to counterbalance gravity, a star would collapse in about half an hour",
      "Nuclear reactions keep a star in balance for billions of years only if all of its mass is converted to energy"
    ],
    correctAnswerIndex: 3,
    explanation: "Only a fraction of mass is converted.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla vita di una stella che irradia come il Sole",
      options: [
        "Irradiando energia potenziale, una stella vivrebbe solo pochi milioni di anni",
        "Le reazioni chimiche non sono abbastanza efficienti",
        "Senza pressione interna, una stella collasserebbe in circa mezz'ora",
        "Le reazioni nucleari mantengono l'equilibrio per miliardi di anni solo se tutta la massa è convertita in energia"
      ],
      explanation: "Solo una frazione della massa viene convertita."
    }
  },
  {
    id: 44,
    text: "Mark the WRONG sentence regarding hydrostatic equilibrium in stars",
    options: [
      "Gravity of the underlying mass pulls the stellar material towards the center",
      "Gas pressure due to the thermal motions of the gas tends to expand the star outward",
      "In hydrostatic equilibrium, gravity and pressure counterbalance each other everywhere",
      "Hydrostatic equilibrium is naturally realized without requiring any source of energy"
    ],
    correctAnswerIndex: 3,
    explanation: "Energy source is required to maintain pressure against cooling.",
    translation: {
      text: "Segna la frase ERRATA riguardo all'equilibrio idrostatico nelle stelle",
      options: [
        "La gravità attira il materiale stellare verso il centro",
        "La pressione del gas tende ad espandere la stella verso l'esterno",
        "In equilibrio idrostatico, gravità e pressione si controbilanciano ovunque",
        "L'equilibrio idrostatico si realizza naturalmente senza richiedere alcuna fonte di energia"
      ],
      explanation: "Serve energia per mantenere la pressione."
    }
  },
  {
    id: 45,
    text: "Mark the correct definition of the Vogt-Russell theorem",
    options: [
      "Time it takes for the object to radiate away a significant amount of its gravitational potential energy",
      "The structure of a star, under given approximations, is uniquely determined by its mass and composition",
      "Luminosity and temperature of an ensemble of stars with the same age and chemical composition, over a wide range of mass",
      "A single star with a given mass and chemical composition is followed during its evolutionary stages"
    ],
    correctAnswerIndex: 1,
    explanation: "Vogt-Russell theorem states mass and composition determine structure.",
    translation: {
      text: "Segna la definizione corretta del teorema di Vogt-Russell",
      options: [
        "Tempo necessario per irradiare una quantità significativa di energia potenziale",
        "La struttura di una stella è univocamente determinata da massa e composizione",
        "Luminosità e temperatura di un insieme di stelle con stessa età e composizione",
        "Una singola stella seguita durante i suoi stadi evolutivi"
      ],
      explanation: "Il teorema afferma che massa e composizione determinano la struttura."
    }
  },
  {
    id: 46,
    text: "Mark the WRONG sentence regarding the horizontal branch phase in stellar evolution (intermediate-mass stars)",
    options: [
      "During this phase, nuclear reactions are happening only in the core, and the rest of the star is unaffected",
      "The horizontal branch phase is characterized by Helium burning in the core of the star",
      "Triple-alpha reactions in the core require temperatures above 100 MK and produce Carbon and Oxygen",
      "The morphology of the Horizontal Branch in the colour-magnitude diagram depends on many parameters"
    ],
    correctAnswerIndex: 0,
    explanation: "Hydrogen burning often continues in a shell.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla fase di ramo orizzontale",
      options: [
        "Durante questa fase, le reazioni nucleari avvengono solo nel nucleo, e il resto della stella non è influenzato",
        "La fase è caratterizzata dalla combustione dell'Elio nel nucleo",
        "Le reazioni tre-alfa richiedono temperature sopra 100 MK",
        "La morfologia del Ramo Orizzontale dipende da molti parametri"
      ],
      explanation: "La combustione dell'idrogeno spesso continua in un guscio."
    }
  },
  {
    id: 47,
    text: "Which is the main gaseous component of Titan atmosphere?",
    options: [
      "Oxigen",
      "Hydrogen",
      "Nitrogen",
      "Carbon dioxide"
    ],
    correctAnswerIndex: 2,
    explanation: "Titan's atmosphere is mostly Nitrogen.",
    translation: {
      text: "Qual è il principale componente gassoso dell'atmosfera di Titano?",
      options: [
        "Ossigeno",
        "Idrogeno",
        "Azoto",
        "Anidride carbonica"
      ],
      explanation: "L'atmosfera di Titano è principalmente Azoto."
    }
  },
  {
    id: 48,
    text: "Why are the outer planets bigger than the planets?",
    options: [
      "In the outer region also He and H condensed, so there was more material then in the region",
      "Outer planets formed in a region in which more material condensed",
      "planets formed in a region with low content of material",
      "There was only rocky material in the region"
    ],
    correctAnswerIndex: 1,
    explanation: "More material condensed (ices) in the outer region.",
    translation: {
      text: "Perché i pianeti esterni sono più grandi?",
      options: [
        "Nella regione esterna anche He e H si sono condensati",
        "I pianeti esterni si sono formati in una regione in cui si è condensato più materiale",
        "i pianeti formati in una regione con basso contenuto di materiale",
        "C'era solo materiale roccioso nella regione"
      ],
      explanation: "Più materiale condensato (ghiacci) nella regione esterna."
    }
  },
  {
    id: 49,
    text: "The strong magnetic field of Jupiter has its origin from",
    options: [
      "A wide layer of liquid molecular hydrogen in its interior",
      "A wide layer of liquid metallic hydrogen in its interior",
      "A wide layer of liquid Fe-Ni in its interior",
      "A wide layer of melted ices in its interior"
    ],
    correctAnswerIndex: 1,
    explanation: "Metallic hydrogen layer.",
    translation: {
      text: "Il forte campo magnetico di Giove ha origine da",
      options: [
        "Un ampio strato di idrogeno molecolare liquido",
        "Un ampio strato di idrogeno metallico liquido",
        "Un ampio strato di Fe-Ni liquido",
        "Un ampio strato di ghiacci fusi"
      ],
      explanation: "Strato di idrogeno metallico."
    }
  },
  {
    id: 50,
    text: "Where do short period comets come from?",
    options: [
      "The Kuiper Belt region",
      "The Main Belt regionca",
      "The Oort Cloud",
      "The Near Earth region"
    ],
    correctAnswerIndex: 0,
    explanation: "Short period comets come from Kuiper Belt.",
    translation: {
      text: "Da dove vengono le comete di breve periodo?",
      options: [
        "Regione della Fascia di Kuiper",
        "Regione della Fascia Principale",
        "Nube di Oort",
        "Regione Near Earth"
      ],
      explanation: "Le comete di breve periodo vengono dalla Fascia di Kuiper."
    }
  },
  {
    id: 51,
    text: "Where is the Main Belt",
    options: [
      "Beyond the orbit of Neptune",
      "Beyond the Kuiper Belt",
      "Between the orbit of Mars and Jupiter",
      "Between the orbit of Jupiter and Saturn"
    ],
    correctAnswerIndex: 2,
    explanation: "Between Mars and Jupiter.",
    translation: {
      text: "Dov'è la Fascia Principale",
      options: [
        "Oltre l'orbita di Nettuno",
        "Oltre la Fascia di Kuiper",
        "Tra l'orbita di Marte e Giove",
        "Tra l'orbita di Giove e Saturno"
      ],
      explanation: "Tra Marte e Giove."
    }
  },
  {
    id: 52,
    text: "Which is the most abundant ice in a comet?",
    options: [
      "CO",
      "CO2",
      "H20",
      "CH4"
    ],
    correctAnswerIndex: 2,
    explanation: "Water ice is the most abundant.",
    translation: {
      text: "Qual è il ghiaccio più abbondante in una cometa?",
      options: [
        "CO",
        "CO2",
        "H20",
        "CH4"
      ],
      explanation: "Il ghiaccio d'acqua è il più abbondante."
    }
  },
  {
    id: 53,
    text: "How does the cometary dust tail form?",
    options: [
      "Interaction between cometary dust and solar radiation pressure",
      "Interaction between cometary dust and ions",
      "Interaction between cometary dust and cometary gas",
      "Interaction between cometary dust and solar wind"
    ],
    correctAnswerIndex: 0,
    explanation: "Radiation pressure pushes dust.",
    translation: {
      text: "Come si forma la coda di polvere cometaria?",
      options: [
        "Interazione tra polvere cometaria e pressione di radiazione solare",
        "Interazione tra polvere cometaria e ioni",
        "Interazione tra polvere e gas cometario",
        "Interazione tra polvere cometaria e vento solare"
      ],
      explanation: "La pressione di radiazione spinge la polvere."
    }
  },
  {
    id: 54,
    text: "Which planet among the eight ones of the SS has the lowest density?",
    options: [
      "Neptune",
      "Mars",
      "Saturns",
      "Mercury"
    ],
    correctAnswerIndex: 2,
    explanation: "Saturn has the lowest density.",
    translation: {
      text: "Quale pianeta ha la densità più bassa?",
      options: [
        "Nettuno",
        "Marte",
        "Saturno",
        "Mercurio"
      ],
      explanation: "Saturno ha la densità più bassa."
    }
  },
  {
    id: 55,
    text: "Mark the WRONG sentence regarding the information stored by spectral lines",
    options: [
      "Temperature and gravity can be iteratively determined when many lines of a given element are available",
      "In some conditions, it is possible to perform a direct comparison of the observed spectrum with theoretical models",
      "There is no relationship between the wavelength of the spectral lines and the relative velocity of the target",
      "Equivalent widths and shapes of spectral lines will depend on the abundance of the chemical elements in the photosphere"
    ],
    correctAnswerIndex: 2,
    explanation: "Doppler shift relates wavelength and velocity.",
    translation: {
      text: "Segna la frase ERRATA riguardo alle informazioni nelle righe spettrali",
      options: [
        "Temperatura e gravità possono essere determinate iterativamente",
        "È possibile confrontare direttamente lo spettro con modelli teorici",
        "Non c'è relazione tra la lunghezza d'onda e la velocità relativa del target",
        "Larghezze equivalenti e forme dipendono dall'abbondanza chimica"
      ],
      explanation: "L'effetto Doppler lega lunghezza d'onda e velocità."
    }
  },
  {
    id: 56,
    text: "Mark the WRONG sentence regarding stellar spectral classification",
    options: [
      "The Harvard classification introduced numbers to indicate intermediate type between spectral classes",
      "In the Revised Harvard classification, spectral types are now ordered by decreasing temperature",
      "The original classification by Secchi was based on distance, color, and luminosity of the stars",
      "The Draper Catalogue of Stellar Spectra rearranged the classes introduced by Secchi in letters."
    ],
    correctAnswerIndex: 2,
    explanation: "Secchi classification was based on spectral lines, not distance.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla classificazione spettrale stellare",
      options: [
        "La classificazione di Harvard ha introdotto numeri per i tipi intermedi",
        "Nella classificazione Harvard rivista, i tipi sono ordinati per temperatura decrescente",
        "La classificazione originale di Secchi era basata su distanza, colore e luminosità",
        "Il catalogo Draper ha riorganizzato le classi di Secchi in lettere"
      ],
      explanation: "La classificazione di Secchi era basata sulle righe spettrali."
    }
  },
  {
    id: 57,
    text: "Mark the WRONG sentence regarding the magnitude of a star",
    options: [
      "The apparent magnitude alone can be used to derive the true brightness of the star",
      "The absorption caused by material between the star and the observer affects the magnitude",
      "The absolute magnitude is defined as the magnitude measured at a distance of 10 s from the star",
      "The difference between apparent and absolute magnitude is called distance modulus"
    ],
    correctAnswerIndex: 0,
    explanation: "Apparent magnitude needs distance to derive true brightness.",
    translation: {
      text: "Segna la frase ERRATA riguardo alla magnitudine di una stella",
      options: [
        "La magnitudine apparente da sola può derivare la vera luminosità",
        "L'assorbimento influenza la magnitudine",
        "La magnitudine assoluta è misurata a 10 parsec",
        "La differenza è il modulo di distanza"
      ],
      explanation: "Serve la distanza per la luminosità vera."
    }
  },
  {
    id: 58,
    text: "Mark the correct sentence regarding the apparent and bolometric magnitude of a star",
    options: [
      "The apparent magnitude can be obtained by knowing the flux density of a star, without the need of a second star",
      "The apparent magnitude is obtained by comparing the flux density of different stars at the same wavelength",
      "The bolometric magnitude can be easily measured with a single instrument from the ground.",
      "The apparent magnitude is obtained & by comparing the flux density of the same star at different wavelength"
    ],
    correctAnswerIndex: 1,
    explanation: "Magnitude is relative.",
    translation: {
      text: "Segna la frase corretta sulla magnitudine apparente e bolometrica",
      options: [
        "La magnitudine apparente si ottiene dal flusso senza una seconda stella",
        "La magnitudine apparente si ottiene confrontando il flusso di diverse stelle alla stessa lunghezza d'onda",
        "La magnitudine bolometrica si misura facilmente da terra",
        "La magnitudine apparente si ottiene confrontando il flusso della stessa stella a diverse lunghezze d'onda"
      ],
      explanation: "La magnitudine è relativa."
    }
  },
  {
    id: 59,
    text: "Mark the WRONG sentence regarding molecular spectra",
    options: [
      "Vibrational transitions are less energetic than rotational ones",
      "Each electronic level is split in many additional levels of different origin",
      "Molecular bands are due to the blending of numerous spectral lines",
      "Energy levels can have rotational, vibrational or electronic origin"
    ],
    correctAnswerIndex: 0,
    explanation: "Rotational transitions are usually the least energetic.",
    translation: {
      text: "Segna la frase ERRATA riguardo agli spettri molecolari",
      options: [
        "Le transizioni vibrazionali sono meno energetiche di quelle rotazionali",
        "Ogni livello elettronico è diviso in molti livelli addizionali",
        "Le bande molecolari sono dovute alla fusione di numerose linee",
        "I livelli energetici possono avere origine rotazionale, vibrazionale o elettronica"
      ],
      explanation: "Le transizioni rotazionali sono solitamente le meno energetiche."
    }
  },
  {
    id: 60,
    text: "Mark the WRONG sentence regarding the different definitions of temperature of a gas or surface",
    options: [
      "Brightness Temperature: temperature corresponding to a star with the same flux density of the Sun",
      "Kinetic Temperature: the temperature % of a gas defined by the average velocity of its particle"
    ],
    correctAnswerIndex: 0,
    explanation: "Brightness temp corresponds to blackbody, not necessarily the Sun.",
    translation: {
      text: "Segna la frase ERRATA sulle definizioni di temperatura",
      options: [
        "Temperatura di Brillanza: temperatura corrispondente a una stella con lo stesso flusso del Sole",
        "Temperatura Cinetica: definita dalla velocità media delle particelle"
      ],
      explanation: "La temperatura di brillanza si riferisce a un corpo nero."
    }
  },
  {
    id: 61,
    text: "Mark the only sentence that correctly describes the effect of annual aberration for a star with ecliptic latitude equal to 45 degrees",
    options: [
      "The amplitude of the aberration depends on the ecliptic longitude of the star",
      "The star will move along a line perpendicular to the Ecliptic",
      "The star describes an ellipsis with one axis perpendicular to the Ecliptic",
      "The star will move along a line parallel to the Ecliptic"
    ],
    correctAnswerIndex: 2,
    explanation: "Ellipse at intermediate latitudes.",
    translation: {
      text: "Effetto dell'aberrazione annua a 45 gradi di latitudine",
      options: [
        "L'ampiezza dipende dalla longitudine eclittica",
        "La stella si muove perpendicolarmente all'Eclittica",
        "La stella descrive un'ellisse con un asse perpendicolare all'Eclittica",
        "La stella si muove parallelamente all'Eclittica"
      ],
      explanation: "Ellisse a latitudini intermedie."
    }
  },
  {
    id: 62,
    text: "Mark the only sentence that correctly describes the effect of annual aberration for a star with ecliptic latitude equal to zero degrees",
    options: [
      "The amplitude of the aberration depends on the ecliptic longitude of the star",
      "The star will move along a line perpendicular to the Ecliptic",
      "The star describes an ellipsis with one axis perpendicular to the Ecliptic",
      "The star will move along a line parallel to the Ecliptic"
    ],
    correctAnswerIndex: 3,
    explanation: "Line parallel to ecliptic at equator.",
    translation: {
      text: "Effetto dell'aberrazione annua a 0 gradi di latitudine",
      options: [
        "L'ampiezza dipende dalla longitudine",
        "La stella si muove perpendicolarmente",
        "La stella descrive un'ellisse",
        "La stella si muove lungo una linea parallela all'Eclittica"
      ],
      explanation: "Linea parallela all'eclittica all'equatore."
    }
  },
  {
    id: 63,
    text: "Mark the WRONG sentence regarding the Sidereal Time",
    options: [
      "The Sidereal Time is equal to the sum & of Hour Angle and Right Ascension of a star",
      "The Sidereal Time is equal to the Hour Angle of the Vernal Point",
      "When the Vernal Point is crossing the Local Meridian, the Sidereal Time is equal to 0:00",
      "When a star is crossing the Local Meridian, the Sidereal Time is equal to 0:00"
    ],
    correctAnswerIndex: 3,
    explanation: "When a star crosses meridian, ST = RA.",
    translation: {
      text: "Segna la frase ERRATA riguardo al Tempo Siderale",
      options: [
        "Il Tempo Siderale è la somma dell'Angolo Orario e Ascensione Retta",
        "Il Tempo Siderale è l'Angolo Orario del Punto Vernale",
        "Quando il Punto Vernale attraversa il meridiano, ST è 0:00",
        "Quando una stella attraversa il meridiano, il Tempo Siderale è 0:00"
      ],
      explanation: "Quando una stella attraversa il meridiano, ST = AR."
    }
  },
  {
    id: 64,
    text: "What are the Near Earth Objects?",
    options: [
      "Objects (asteroids and/or comets) orbiting in a particular region of the Main Belt",
      "Objects (asteroids and/or comets) with high probability to impact the Earth",
      "Objects (asteroids and/or comets) with orbits close to the terrestrial one or that intersect it",
      "Objects (asteroids and/or comets) with orbits that intersect the terrestrial one"
    ],
    correctAnswerIndex: 2,
    explanation: "Orbits close to or intersecting Earth's.",
    translation: {
      text: "Cosa sono i Near Earth Objects?",
      options: [
        "Oggetti in una regione particolare della Fascia Principale",
        "Oggetti con alta probabilità di impatto",
        "Oggetti con orbite vicine a quella terrestre o che la intersecano",
        "Oggetti con orbite che intersecano quella terrestre"
      ],
      explanation: "Orbite vicine o che intersecano quella terrestre."
    }
  },
  {
    id: 65,
    text: "Mark the WRONG sentence, assuming that we are in the North hemisphere",
    options: [
      "A star is always observable if its declination is smaller than the latitude of the observer",
      "A star is circumpolar if its declination is higher than the zenith angle of the North Pole",
      "A star reaches the maximum altitude when passing through the Local Meridian, in the South direction",
      "Only equatorial stars (declination=0) rise and set exactly at East and West, respectively"
    ],
    correctAnswerIndex: 0,
    explanation: "If declination < latitude, observability depends on horizon.",
    translation: {
      text: "Segna la frase ERRATA (Emisfero Nord)",
      options: [
        "Una stella è sempre osservabile se declinazione < latitudine",
        "Una stella è circumpolare se declinazione > angolo zenitale del Polo Nord",
        "Massima altezza al Meridiano Locale, direzione Sud",
        "Solo stelle equatoriali sorgono/tramontano esattamente a Est/Ovest"
      ],
      explanation: "Se declinazione < latitudine, l'osservabilità dipende dall'orizzonte."
    }
  },
  {
    id: 66,
    text: "Mark the WRONG sentence, assuming that we are in the North hemisphere",
    options: [
      "Every day Sun risse/sets in a different direction and at different time",
      "During the winter the Sun rise/sets closer to North than during the summer",
      "The Sun rise at East and sets at western exactly only during the equinoxes",
      "When the Sun crosses the Vernal Point, its declination chances significato from negative to’ positive"
    ],
    correctAnswerIndex: 1,
    explanation: "In winter, Sun rises closer to South, not North.",
    translation: {
      text: "Segna la frase ERRATA (Emisfero Nord)",
      options: [
        "Ogni giorno il Sole sorge/tramonta in direzione/tempo diversi",
        "Durante l'inverno il Sole sorge/tramonta più vicino al Nord rispetto all'estate",
        "Il Sole sorge a Est ed Ovest esattamente solo agli equinozi",
        "Quando il Sole passa il Punto Vernale, la declinazione diventa positiva"
      ],
      explanation: "In inverno, il Sole sorge più vicino al Sud."
    }
  },
  {
    id: 67,
    text: "Mark the WRONG sentence regarding the classification of exoplanets",
    options: [
      "Super-Earths: planets slightly larger than Earth, rocky with a thin atmosphere",
      "Hot Jupiter/Neptunes: gas and ice giants with orbital periods shorter than 10 days",
      "Mini-Neptunes: gas and ice planets larger than Earth but smaller than Neptune",
      "Warm Jupiter/Neptunes: gas giants with temperature adequate to host liquid water"
    ],
    correctAnswerIndex: 3,
    explanation: "Gas giants with liquid water? Unlikely surface.",
    translation: {
      text: "Segna la frase ERRATA sulla classificazione degli esopianeti",
      options: [
        "Super-Terre: rocciose, poco più grandi della Terra",
        "Hot Jupiter: giganti con periodi < 10 giorni",
        "Mini-Nettuni: gas/ghiaccio tra Terra e Nettuno",
        "Warm Jupiter: giganti con temperatura per acqua liquida"
      ],
      explanation: "Giganti gassosi con acqua liquida in superficie è improbabile."
    }
  },
  {
    id: 68,
    text: "Mark the WRONG sentence regarding the Habitable Zone.",
    options: [
      "Greenhouse effect and irradiation from a gas giant (in case of moon) are not taken into account in its definition.",
      "A Planet in the Habitable zone can support liquid water on the surface, given sufficient atmospheric pressure",
      "The size of the Habitable Zone depends on the stellar type and effective temperature of the star",
      "A planet in the Habitable Zone most certainly will have liquid water and life on its surface"
    ],
    correctAnswerIndex: 3,
    explanation: "Habitable zone does NOT guarantee life or water.",
    translation: {
      text: "Segna la frase ERRATA sulla Zona Abitabile",
      options: [
        "Effetto serra e irradiazione non sono considerati nella definizione",
        "Un pianeta in zona abitabile può supportare acqua liquida",
        "La dimensione dipende dal tipo stellare",
        "Un pianeta in Zona Abitabile avrà quasi certamente acqua e vita"
      ],
      explanation: "La zona abitabile NON garantisce vita o acqua."
    }
  },
  {
    id: 69,
    text: "Mark the WRONG sentence regarding the magnetic activity of the Sun",
    options: [
      "The lifetime of a single spot can be of several years. Spots appear and disappear randomly on the of the Sun",
      "Sunspots are large regions (10000 km) in the photosphere that are around 1500 K colder than the surroundings, appearing darker",
      "We have a prominence when the magnetic lines rise above the solar into a loop, and hot gas streams through the loop",
      "Differential rotation will cause the magnetic field to get wrapped and emerge from the surface, causing solar activity phenomena"
    ],
    correctAnswerIndex: 0,
    explanation: "Spots don't last years.",
    translation: {
      text: "Segna la frase ERRATA sull'attività magnetica del Sole",
      options: [
        "La vita di una macchia può essere di anni. Appaiono casualmente",
        "Le macchie solari sono regioni più fredde",
        "Protuberanza: linee magnetiche a cappio con gas",
        "Rotazione differenziale causa attività solare"
      ],
      explanation: "Le macchie non durano anni."
    }
  },
  {
    id: 70,
    text: "Mark the WRONG sentence regarding the magnetic activity of the Sun",
    options: [
      "Flares consist of a sudden increase & of energy stored in the magnetic field. They are among the most energetic events on the Sun",
      "Faculae are dark regions produced by an attenuation of the magnetic field. They are not associated to sunspots or distributed in a network",
      "Prominences and flares can accelerate particles in the corona. They can reach Earth within a few days and cause problems in communication systems",
      "Plages are the chromospheric counterparts of faculae associated to sunspots, and can be studied by observing the emission of specific spectral lines"
    ],
    correctAnswerIndex: 1,
    explanation: "Faculae are BRIGHT regions, not dark.",
    translation: {
      text: "Segna la frase ERRATA sull'attività magnetica del Sole",
      options: [
        "I brillamenti sono rilasci improvvisi di energia",
        "Le facole sono regioni scure prodotte dall'attenuazione del campo magnetico",
        "Protuberanze e brillamenti accelerano particelle verso la Terra",
        "Le plages sono controparti cromosferiche delle facole"
      ],
      explanation: "Le facole sono regioni LUMINOSE, non scure."
    }
  },
  {
    id: 71,
    text: "Mark the WRONG sentence regarding neutron stars and pulsars",
    options: [
      "Only a small number of neutron stars emits a radio beam sweeping the sky regularly, and all of them take the name of pulsars",
      "Neutron stars have a strong (compressed) magnetic field, because they preserved the magnetic field of the progenitors",
      "During the collapse the angular momentum of the core is preserved, so the emerging neutron star will spin extremely fast",
      "Most neutron stars emit a radio beam, sweeping the sky regularly if the magnetic poles are not aligned with the rotation axis"
    ],
    correctAnswerIndex: 0,
    explanation: "Not only a small number emit; we only see a small number.",
    translation: {
      text: "Segna la frase ERRATA su stelle di neutroni e pulsar",
      options: [
        "Solo un piccolo numero emette un fascio radio e si chiamano pulsar",
        "Hanno forte campo magnetico preservato dai progenitori",
        "Il momento angolare è conservato, rotazione veloce",
        "La maggior parte emette fasci radio se i poli non sono allineati"
      ],
      explanation: "Non solo un piccolo numero emette; ne vediamo poche."
    }
  },
  {
    id: 72,
    text: "Mark the WRONG sentence regarding the Chandrasekar limit",
    options: [
      "Passed the limit, electron degeneracy pressure is insufficient to balance the star's own gravitational compression",
      "Stellar remnants will become white dwarfs if below the limit, otherwise neutron stars or black holes if above the limit",
      "A star with mass around 8 solar masses will evolve to a stellar remnant with a mass close to the limit",
      "Photo-disintegration and neutronization provide pressure to the core and allow white dwarfs to be above this limit"
    ],
    correctAnswerIndex: 3,
    explanation: "They trigger collapse, they don't provide support.",
    translation: {
      text: "Segna la frase ERRATA sul limite di Chandrasekar",
      options: [
        "Oltre il limite, la pressione di degenerazione è insufficiente",
        "I resti diventano nane bianche sotto il limite, altrimenti stelle di neutroni/buchi neri",
        "Una stella di 8 masse solari evolve in un resto vicino al limite",
        "Foto-disintegrazione e neutronizzazione forniscono pressione per superare il limite"
      ],
      explanation: "Causano il collasso, non forniscono supporto."
    }
  },
  {
    id: 73,
    text: "Mark the WRONG sentence regarding the structure and lifetime of intermediate-mass stars",
    options: [
      "In intermediate-mass stars, a radiative core is surrounded by a convective envelope",
      "A small transfer of material from the convective zone to the core allows an extended lifetime of the star",
      "Energy in the core is produced by proton-proton cycle and Carbon- Nitrogen-Oxygen cycle in equal parts",
      "These stars have lifetime of several billions of years. The Sun is 5 Gyrs old, and halfway its evolution"
    ],
    correctAnswerIndex: 2,
    explanation: "CNO cycle dominates in intermediate mass stars.",
    translation: {
      text: "Segna la frase ERRATA su stelle di massa intermedia",
      options: [
        "Nucleo radiativo circondato da inviluppo convettivo",
        "Il trasferimento di materiale estende la vita",
        "Energia prodotta da pp e CNO in parti uguali",
        "Vita di miliardi di anni. Il Sole è a metà strada"
      ],
      explanation: "Il ciclo CNO domina nelle stelle di massa intermedia."
    }
  },
  {
    id: 74,
    text: "Mark the WRONG sentence regarding the transport of energy in a star",
    options: [
      "Radiative transfer consists of energy transportation in the form of electromagnetic radiation",
      "Conduction is very inefficient because electrons (carrying energy) can travel only a short distance",
      "Convection starts when energy transport through radiative transfer (radiation) becomes inefficient",
      "In a star radiative and convective Zones can co-exist in the same region, acting simultaneously on the same material"
    ],
    correctAnswerIndex: 3,
    explanation: "Usually zones are distinct.",
    translation: {
      text: "Segna la frase ERRATA sul trasporto di energia",
      options: [
        "Trasferimento radiativo è radiazione elettromagnetica",
        "Conduzione inefficiente",
        "Convezione inizia quando radiazione è inefficiente",
        "Zone radiative e convettive coesistono nella stessa regione"
      ],
      explanation: "Solitamente le zone sono distinte."
    }
  },
  {
    id: 75,
    text: "Mark the WRONG sentence regarding the giant phase in stellar evolution",
    options: [
      "Giant stars are colder on the surface, but hey are brighter because they have a larger than Main Sequence stars",
      "When Hydrogen is exhausted in the core, the star starts burning it in a shell surrounding an inert Helium core",
      "Stars in the giant phase have the same size and luminosity, regardless of their mass during the Main Sequence phase",
      "The Turn-Off is the point in the colour- magnitude diagram where the star leaves the Main Sequence to enter the Giant phase"
    ],
    correctAnswerIndex: 2,
    explanation: "Size and luminosity depend on mass.",
    translation: {
      text: "Segna la frase ERRATA sulla fase gigante",
      options: [
        "Le giganti sono più fredde ma più luminose perché più grandi",
        "Esaurito H nel nucleo, brucia in un guscio",
        "Le stelle giganti hanno stesse dimensioni e luminosità indipendentemente dalla massa",
        "Il Turn-Off è il punto di uscita dalla Sequenza Principale"
      ],
      explanation: "Dimensioni e luminosità dipendono dalla massa."
    }
  },
  {
    id: 76,
    text: "Why are Venus and an exception in the Solar System?",
    options: [
      "They do not have a magnetic field",
      "They have a thick atmosphere made of H",
      "They have a very slow rotation",
      "They have a retrograde rotation"
    ],
    correctAnswerIndex: 3,
    explanation: "Venus has retrograde rotation.",
    translation: {
      text: "Perché Venere è un'eccezione?",
      options: [
        "Niente campo magnetico",
        "Atmosfera spessa di H",
        "Rotazione lenta",
        "Rotazione retrograda"
      ],
      explanation: "Venere ha rotazione retrograda."
    }
  },
  {
    id: 77,
    text: "How long is the orbital period of Jupiter?",
    options: [
      "about 22 terrestrial years",
      "About 7 terrestrial years",
      "about 12 terrestrial years",
      "about 3 terrestrial years"
    ],
    correctAnswerIndex: 2,
    explanation: "Jupiter's period is ~12 years.",
    translation: {
      text: "Quanto dura il periodo orbitale di Giove?",
      options: [
        "circa 22 anni terrestri",
        "circa 7 anni terrestri",
        "circa 12 anni terrestri",
        "circa 3 anni terrestri"
      ],
      explanation: "Il periodo di Giove è ~12 anni."
    }
  },
  {
    id: 78,
    text: "What is the main component of Mars atmosphere?",
    options: [
      "Nitrogen",
      "Carbon dioxide CO2",
      "Carbon monoxide",
      "Methane"
    ],
    correctAnswerIndex: 1,
    explanation: "Mars atmosphere is mostly CO2.",
    translation: {
      text: "Componente principale dell'atmosfera di Marte?",
      options: [
        "Azoto",
        "Anidride carbonica CO2",
        "Monossido di carbonio",
        "Metano"
      ],
      explanation: "L'atmosfera di Marte è principalmente CO2."
    }
  },
  {
    id: 79,
    text: "Why does Venus have no magnetic field?",
    options: [
      "Because it is too close to the Sun",
      "Because its interior is completely solid",
      "Because of its slow rotation",
      "It has a magnetic field"
    ],
    correctAnswerIndex: 2,
    explanation: "Slow rotation prevents dynamo effect.",
    translation: {
      text: "Perché Venere non ha campo magnetico?",
      options: [
        "Troppo vicino al Sole",
        "Interno solido",
        "A causa della rotazione lenta",
        "Ha un campo magnetico"
      ],
      explanation: "La rotazione lenta impedisce l'effetto dinamo."
    }
  },
  {
    id: 80,
    text: "The strong magnetic field of Jupiter has its origin from",
    options: [
      "A wide layer of melted ices in its interior",
      "A wide layer of liquid Fe-Ni in its interior",
      "A wide layer of liquid molecular hydrogen in its interior",
      "A wide layer of liquid metallic hydrogen in its interior"
    ],
    correctAnswerIndex: 3,
    explanation: "Metallic hydrogen.",
    translation: {
      text: "Il forte campo magnetico di Giove ha origine da",
      options: [
        "Ghiacci fusi",
        "Fe-Ni liquido",
        "Idrogeno molecolare liquido",
        "Idrogeno metallico liquido"
      ],
      explanation: "Idrogeno metallico."
    }
  },
  {
    id: 81,
    text: "The difference between primary and secondary planetary atmosphere is:",
    options: [
      "The secondary atmosphere is made of methane and Hydrogen",
      "The primary atmosphere is made of Hydrogen",
      "The primary atmosphere is made of Hydrogen and Helium",
      "The secondary atmosphere is made of Oxygen and Hydrocarbons"
    ],
    correctAnswerIndex: 2,
    explanation: "Primary = H + He.",
    translation: {
      text: "Differenza tra atmosfera primaria e secondaria:",
      options: [
        "Secondaria fatta di metano e idrogeno",
        "Primaria fatta di Idrogeno",
        "Primaria fatta di Idrogeno ed Elio",
        "Secondaria fatta di Ossigeno e Idrocarburi"
      ],
      explanation: "Primaria = H + He."
    }
  },
  {
    id: 82,
    text: "Mark the WRONG sentence regarding the information stored by spectral lines",
    options: [
      "There is no relationship between the wavelength of the spectral lines and the relative velocity of the target",
      "Equivalent widths and shapes of spectral lines will depend on the abundance of the chemical elements in the photosphere",
      "In some conditions, it is possible to perform a direct comparison of the observed spectrum with theoretical models",
      "Temperature and gravity can be iteratively determined when many lines of a given element are available"
    ],
    correctAnswerIndex: 0,
    explanation: "Wavelength and velocity are related (Doppler).",
    translation: {
      text: "Segna la frase ERRATA sulle righe spettrali",
      options: [
        "Non c'è relazione tra lunghezza d'onda e velocità relativa",
        "Larghezze equivalenti dipendono dall'abbondanza chimica",
        "Possibile confronto diretto con modelli teorici",
        "Temperatura e gravità determinate iterativamente"
      ],
      explanation: "Lunghezza d'onda e velocità sono legate (Doppler)."
    }
  },
  {
    id: 83,
    text: "Mark the WRONG sentence regarding the measurement of radiation",
    options: [
      "A radiation field is isotropic if the intensity is independent of direction",
      "The total intensity is obtained by integrating the specific density over a solid angle",
      "A source emitting radiation is isotropic fi its intensity is independent of the angle",
      "The specific intensity emitted from a depends on its frequency and direction"
    ],
    correctAnswerIndex: 1,
    explanation: "Integrate specific intensity, not density.",
    translation: {
      text: "Segna la frase ERRATA sulla misura della radiazione",
      options: [
        "Campo isotropo se intensità indipendente dalla direzione",
        "Intensità totale ottenuta integrando la densità specifica",
        "Sorgente isotropa se intensità indipendente dall'angolo",
        "Intensità specifica dipende da frequenza e direzione"
      ],
      explanation: "Si integra l'intensità specifica, non la densità."
    }
  },
  {
    id: 84,
    text: "Mark the WRONG sentence regarding the measurement of radiation",
    options: [
      "The flux density is the total amount of energy that crosses a unit area per unit time",
      "The luminosity is proportional to the inverse of the square of the distance of the source",
      "The total flux density is obtained by integrating the flux density over all frequencies",
      "The flux density of the Sun as measured on Earth is not constant during the year"
    ],
    correctAnswerIndex: 1,
    explanation: "Flux density (brightness) is inverse square; Luminosity is intrinsic.",
    translation: {
      text: "Segna la frase ERRATA sulla misura della radiazione",
      options: [
        "Densità di flusso è energia per unità d'area e tempo",
        "Luminosità è proporzionale all'inverso del quadrato della distanza",
        "Densità di flusso totale integrando su tutte le frequenze",
        "Flusso del Sole sulla Terra non costante durante l'anno"
      ],
      explanation: "La luminosità è intrinseca."
    }
  },
  {
    id: 85,
    text: "Mark the WRONG sentence regarding the propagation of radiation in a medium (radiative transfer)",
    options: [
      "The intensity at a given optical depth is independent of the emission by the medium",
      "If a cloud is optically thin, the source is attenuated but spectral properties are preserved",
      "If the cloud is optically thick, emission and absorption processes are in equilibrium",
      "There may be some conditions for which the radiation of a medium is equal to the blackbody radiation"
    ],
    correctAnswerIndex: 0,
    explanation: "Intensity depends on emission.",
    translation: {
      text: "Segna la frase ERRATA sulla propagazione della radiazione",
      options: [
        "L'intensità a una data profondità ottica è indipendente dall'emissione del mezzo",
        "Se nube otticamente sottile, sorgente attenuata ma proprietà conservate",
        "Se nube otticamente spessa, emissione/assorbimento in equilibrio",
        "La radiazione del mezzo può eguagliare il corpo nero"
      ],
      explanation: "L'intensità dipende dall'emissione."
    }
  },
  {
    id: 86,
    text: "Mark the WRONG sentence regarding blackbody radiation",
    options: [
      "Both the intensity and the peak frequency of a blackbody increase with decreasing temperature",
      "Spectral distribution, total intensity, and flux of a blackbody only depend on its temperature",
      "A blackbody in thermal equilibrium emits electromagnetic radiation following the Planck's law",
      "A blackbody absorbs all incident electromagnetic radiation, and re-emits it completely"
    ],
    correctAnswerIndex: 0,
    explanation: "Increase with INCREASING temperature.",
    translation: {
      text: "Segna la frase ERRATA sulla radiazione di corpo nero",
      options: [
        "Intensità e frequenza di picco aumentano al diminuire della temperatura",
        "Dipendono solo dalla temperatura",
        "Emette secondo la legge di Planck",
        "Assorbe tutto e riemette completamente"
      ],
      explanation: "Aumentano all'AUMENTARE della temperatura."
    }
  },
  {
    id: 87,
    text: "The calendar actually in use",
    options: [
      "Is the Julian calendar",
      "Is the Proleptic calendar",
      "Is the Besselian calendar",
      "Is the Gregorian calendar"
    ],
    correctAnswerIndex: 3,
    explanation: "We use the Gregorian calendar.",
    translation: {
      text: "Il calendario attualmente in uso",
      options: [
        "È il calendario Giuliano",
        "È il calendario Prolettico",
        "È il calendario Besseliano",
        "È il calendario Gregoriano"
      ],
      explanation: "Usiamo il calendario Gregoriano."
    }
  },
  {
    id: 88,
    text: "Mark the WRONG sentence",
    options: [
      "UTC has the pace of TAI but origin always coincident, within 900 ms, with that of UT1",
      "UT1, TAI and UTC are all continuous time standards, without discontinuities",
      "TAI is independent of astronomical effects and it flows at a constant rate",
      "UT1 is affected by the secular slowing down and by the non-uniformities of Earth rotation"
    ],
    correctAnswerIndex: 1,
    explanation: "UTC has leap seconds, so it has discontinuities.",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "UTC ha il passo di TAI ma origine coincidente con UT1",
        "UT1, TAI e UTC sono tutti standard continui, senza discontinuità",
        "TAI indipendente da effetti astronomici",
        "UT1 influenzato dal rallentamento terrestre"
      ],
      explanation: "UTC ha secondi intercalari."
    }
  },
  {
    id: 89,
    text: "Mark the element that is NOT required to define a celestial coordinate system",
    options: [
      "The direction of one axis on the plane passing through the centre of the sphere",
      "The location of the centre of the reference system (e.g. or centre of Earth)",
      "The direction of the perpendicular of a plane passing through the centre of the sphere",
      "The radius of the sphere where the celestial objects are projected"
    ],
    correctAnswerIndex: 3,
    explanation: "Radius is arbitrary in projection.",
    translation: {
      text: "Segna l'elemento NON richiesto per definire un sistema di coordinate celesti",
      options: [
        "Direzione di un asse sul piano centrale",
        "Posizione del centro del sistema",
        "Direzione della perpendicolare al piano",
        "Raggio della sfera di proiezione"
      ],
      explanation: "Il raggio è arbitrario."
    }
  },
  {
    id: 90,
    text: "Mark the WRONG sentence",
    options: [
      "The difference between Apparent and Mean Sidereal Times is called Equation of Equinoxes",
      "The Apparent Sidereal Time can only be determined by mathematical approximations",
      "The Mean Equinox is the point where the vernal equinox would be if there was no nutation",
      "The Mean Sidereal Time is equal to the Hour Angle of the Mean Equinox"
    ],
    correctAnswerIndex: 1,
    explanation: "Apparent Sidereal Time can be measured/calculated precisely.",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "Differenza tra ST Apparente e Medio è Equazione degli Equinozi",
        "Il Tempo Siderale Apparente può essere determinato solo da approssimazioni matematiche",
        "Equinozio Medio è dove sarebbe senza nutazione",
        "Tempo Siderale Medio è l'Angolo Orario dell'Equinozio Medio"
      ],
      explanation: "Il Tempo Siderale Apparente può essere calcolato con precisione."
    }
  },
  {
    id: 91,
    text: "Mark the WRONG sentence regarding the core collapse of a massive star",
    options: [
      "Right before the supernova explosion, the entirety of the mass of the star has been converted into Iron",
      "The star collapses on its core and then material bounces back in a very energetic supernova explosion",
      "Iron has the highest binding energy per nucleon, so its fusion cannot produce any energy",
      "Pre-supernova structure is formed by an Iron core surrounded by shells of progressively lighter elements"
    ],
    correctAnswerIndex: 0,
    explanation: "Not the ENTIRETY of mass, only the core is Iron.",
    translation: {
      text: "Segna la frase ERRATA sul collasso del nucleo",
      options: [
        "Subito prima dell'esplosione, l'intera massa è convertita in Ferro",
        "La stella collassa sul nucleo e rimbalza in supernova",
        "Il Ferro ha la massima energia di legame",
        "Struttura pre-supernova: nucleo di Ferro e gusci di elementi leggeri"
      ],
      explanation: "Solo il nucleo è Ferro, non l'intera stella."
    }
  },
  {
    id: 92,
    text: "Mark the WRONG sentence regarding the structure and lifetime of high-mass stars",
    options: [
      "On first approximation, massive stars live shorter because they need to burn more hydrogen to oppose gravity",
      "During its lifetime, a massive star is able to burn all the hydrogen in the core and outside the core",
      "Massive stars may become supernovae while other stars are still forming inside the same giant molecular gas",
      "In massive stars, a convective core is surrounded by a radiative envelope, with no exchange of material"
    ],
    correctAnswerIndex: 1,
    explanation: "Does not burn ALL hydrogen.",
    translation: {
      text: "Segna la frase ERRATA su stelle di alta massa",
      options: [
        "Vivono meno perché bruciano più idrogeno",
        "Durante la vita, brucia tutto l'idrogeno dentro e fuori il nucleo",
        "Possono diventare supernove mentre altre stelle si stanno formando",
        "Nucleo convettivo circondato da inviluppo radiativo"
      ],
      explanation: "Non brucia TUTTO l'idrogeno."
    }
  },
  {
    id: 93,
    text: "Mark the correct definition of Right Ascension:",
    options: [
      "distance of the star from the Local Meridian along the Equator, measured anti-clockwise",
      "distance of the star from the Local Meridian along the Equator, measured clockwise",
      "distance of the star from the Vernal Point along the Equator, measured clockwise",
      "distance of the star from the Vernal Point along the Equator, measured anti-clockwise"
    ],
    correctAnswerIndex: 3,
    explanation: "From Vernal Point, anti-clockwise (Eastward).",
    translation: {
      text: "Segna la definizione corretta di Ascensione Retta:",
      options: [
        "distanza dal Meridiano Locale, antiorario",
        "distanza dal Meridiano Locale, orario",
        "distanza dal Punto Vernale, orario",
        "distanza dal Punto Vernale lungo l'Equatore, misurata in senso antiorario"
      ],
      explanation: "Dal Punto Vernale, verso Est."
    }
  },
  {
    id: 94,
    text: "Mark the only sentence that can be referred to alt-azimuthal mounts",
    options: [
      "You necessarily need two engines to follow the stars during the night",
      "No restrictions in pointing, except for the North pole",
      "The dome may be much larger than the telescope structure",
      "No field rotation during long exposures"
    ],
    correctAnswerIndex: 0,
    explanation: "Needs 2 engines (Alt+Az) to track.",
    translation: {
      text: "Frase riferita a montature altazimutali",
      options: [
        "Servono necessariamente due motori per seguire le stelle",
        "Nessuna restrizione di puntamento",
        "La cupola può essere molto più grande",
        "Nessuna rotazione di campo"
      ],
      explanation: "Servono 2 motori per inseguire."
    }
  },
  {
    id: 95,
    text: "Mark the WRONG sentence",
    options: [
      "The average temperature of the whole Earth at aphelion is higher than at perihelion",
      "The perihelion happens during the Northern summer, precisely the 3rd of July",
      "Warm seasons in the Northern hemisphere last 7 days longer than the Southern one",
      "At aphelion Earth receives approximately 7% less energy than at perihelion"
    ],
    correctAnswerIndex: 1,
    explanation: "Perihelion is in January (Winter).",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "Temperatura media all'afelio è più alta che al perielio",
        "Il perielio avviene durante l'estate boreale, il 3 luglio",
        "Le stagioni calde al Nord durano 7 giorni in più",
        "All'afelio la Terra riceve il 7% in meno di energia"
      ],
      explanation: "Il perielio è a Gennaio."
    }
  },
  {
    id: 96,
    text: "Mark the WRONG sentence regarding the definition of magnitude +",
    options: [
      "The magnitude of a star increases logarithmically with the decrease in its flux density",
      "Hipparchus introduced the concept of magnitudes by dividing the naked-eye stars into six groups",
      "Pogson determined that stars of 6th magnitude are 10000 times brighter than those of 1st magnitude",
      "Magnitudes are based on the relationship between the perceived change and the actual stimulus"
    ],
    correctAnswerIndex: 2,
    explanation: "1st magnitude is brighter than 6th. 100x factor, not 10000x inverted.",
    translation: {
      text: "Segna la frase ERRATA sulla definizione di magnitudine",
      options: [
        "La magnitudine aumenta logaritmicamente col diminuire del flusso",
        "Ipparco divise le stelle in 6 gruppi",
        "Pogson determinò che stelle di 6a sono 10000 volte più luminose di quelle di 1a",
        "Magnitudini basate su percezione vs stimolo"
      ],
      explanation: "La 1a magnitudine è più luminosa."
    }
  },
  {
    id: 97,
    text: "Mark the WRONG sentence regarding the different spectroscopic techniques",
    options: [
      "Gratings rely on the constructive and destructive interferences of light beams",
      "A grism allows low-resolution spectroscopy of a large number of objects at the same time",
      "Prism can produce spectra thanks to the dependency of the refractive index with wavelength",
      "In gratings, both the spectral resolution and the intensity decrease with increasing order"
    ],
    correctAnswerIndex: 3,
    explanation: "Resolution increases with order.",
    translation: {
      text: "Segna la frase ERRATA sulle tecniche spettroscopiche",
      options: [
        "Reticoli basati su interferenza",
        "Grism permette spettroscopia a bassa risoluzione multi-oggetto",
        "Prisma usa indice di rifrazione",
        "Nei reticoli, risoluzione e intensità diminuiscono con l'ordine"
      ],
      explanation: "La risoluzione aumenta con l'ordine."
    }
  },
  {
    id: 98,
    text: "Mark the WRONG sentence regarding stellar spectral classification",
    options: [
      "A. O-B-A classes include blue-white stars with temperatures between 50.000 and 7.500 K",
      "b. M-L-T classes include red and brown stars with temperatures above 50.000 K",
      "c Classes are grouped into early-solar- and late type according to their temperature X",
      "d. F-G-K classes include yellow-orange stars with temperatures between 7.500 and 3.500 K"
    ],
    correctAnswerIndex: 1,
    explanation: "M-L-T are cool stars, not > 50,000 K.",
    translation: {
      text: "Segna la frase ERRATA sulla classificazione spettrale",
      options: [
        "O-B-A: stelle blu-bianche 50.000-7.500 K",
        "M-L-T: stelle rosse/brune sopra 50.000 K",
        "Classi raggruppate in early/late",
        "F-G-K: stelle giallo-arancio 7.500-3.500 K"
      ],
      explanation: "M-L-T sono stelle fredde."
    }
  },
  {
    id: 99,
    text: "Mark the WRONG sentence regarding stellar spectral classification",
    options: [
      "a. C-S stars show peculiar absorption lines in their spectra",
      "b. M-L-T stars do not show any feature in their spectra",
      "c. O-B-A stars are characterized by strong and/or He lines due to their high temperatures",
      "d. F-G-K stars have spectra very similar to the to the one of the Sun"
    ],
    correctAnswerIndex: 1,
    explanation: "Cool stars show many features (molecules).",
    translation: {
      text: "Segna la frase ERRATA sulla classificazione spettrale",
      options: [
        "Stelle C-S mostrano linee peculiari",
        "Stelle M-L-T non mostrano caratteristiche",
        "Stelle O-B-A caratterizzate da linee forti di He",
        "Stelle F-G-K simili al Sole"
      ],
      explanation: "Le stelle fredde mostrano molte caratteristiche."
    }
  },
  {
    id: 100,
    text: "What is the most unusual property of :",
    options: [
      "a. the inclination of its axis",
      "b. Its ice composition",
      "c. the presence of methane in its atmosphere",
      "d. Its prograde orbital motion"
    ],
    correctAnswerIndex: 0,
    explanation: "Likely refers to Uranus (axis inclination).",
    translation: {
      text: "Qual è la proprietà più insolita di :",
      options: [
        "l'inclinazione del suo asse",
        "La composizione del ghiaccio",
        "la presenza di metano",
        "Il moto orbitale progrado"
      ],
      explanation: "Probabilmente si riferisce a Urano."
    }
  },
  {
    id: 101,
    text: "Mark the WRONG sentence regarding the asymptotic giant phase in stellar evolution (intermediate-mass stars)",
    options: [
      "a. The star becomes unstable due to the presence of two shells with fusion reactions, Hydrogen and Helium respectively",
      "b. The star will lose the outer envelope into space, the expelled material take the name of planetary Nebula",
      "c. The outcome of this phase will be a White Dwarf either made of Carbon and Oxygen, or just exclusively Helium",
      "d. When the Helium in the core is exhausted, Helium keeps burning in a shell leaving behind a Carbon and Oxygen core"
    ],
    correctAnswerIndex: 2,
    explanation: "Outcome is CO White Dwarf, not exclusively Helium (that's low mass).",
    translation: {
      text: "Segna la frase ERRATA sulla fase asintotica gigante",
      options: [
        "Instabilità dovuta a due gusci di fusione",
        "Espulsione inviluppo -> Nebulosa Planetaria",
        "Risultato: Nana Bianca CO o solo Elio",
        "Elio brucia in guscio lasciando nucleo CO"
      ],
      explanation: "Il risultato è Nana Bianca CO."
    }
  },
  {
    id: 102,
    text: "Mark the WRONG sentence regarding neutron stars",
    options: [
      "a. A newly formed neutron star has a temperature of one billion degrees, a strong magnetic field and it spins extremely fast",
      "b. A neutron star with mass 1.44 solar masses has a radius of just 10 km and a density similar to those of atomic nuclei",
      "c. During the final collapse of a star, the totality of its mass is converted to neutrons, with no ejection of matter",
      "d. Further collapse of neutron stars is avoided by the neutron degeneracy pressure, if the mass is below the TOV limit"
    ],
    correctAnswerIndex: 2,
    explanation: "Matter IS ejected.",
    translation: {
      text: "Segna la frase ERRATA sulle stelle di neutroni",
      options: [
        "Appena formata: calda, magnetica, veloce",
        "Raggio 10km, densità nucleare",
        "Totalità della massa convertita in neutroni, nessuna espulsione",
        "Collasso evitato da degenerazione neutronica"
      ],
      explanation: "La materia VIENE espulsa."
    }
  },
  {
    id: 103,
    text: "Mark the WRONG sentence regarding black holes",
    options: [
      "a. If a mass is contained within its Schwarzschild radius, its gravitational field is so strong that light cannot escape, regardless of its density",
      "b. The event horizon is a boundary at the Schwarzschild radius beyond which events cannot affect an observer outside",
      "c. If a neutron star is more massive than the Tolman-Oppenheimer-Volkoff limit, the neutron degeneracy pressure is insufficient to stop the collapse",
      "d. A supernova remnant will always become a black hole, regardless of the ejected mass during the supernova explosion"
    ],
    correctAnswerIndex: 3,
    explanation: "Depends on mass (can be NS or WD).",
    translation: {
      text: "Segna la frase ERRATA sui buchi neri",
      options: [
        "Se massa entro raggio Schwarzschild, luce non scappa",
        "Orizzonte eventi è confine",
        "Se massa > limite TOV, collasso",
        "Un resto di supernova diventerà sempre un buco nero"
      ],
      explanation: "Dipende dalla massa."
    }
  },
  {
    id: 104,
    text: "Mark the WRONG sentence regarding stellar clusters and association",
    options: [
      "a. Open clusters and associations are randomly distributed in the galactic disk, so they do not provide any information on the shape of the Milky Way",
      "b. The distances of stars in a cluster are much easier to measure than for single stars, allowing the computation of their absolute luminosity",
      "c. Globular clusters are spherically distributed around Galactic centre, so their distance can be obtained by studying their apparent distribution around Earth",
      "d. Stars belonging to a cluster have the same age but different masses, so they will naturally draw an isochrone in the Hertzsprung-Russel diagram"
    ],
    correctAnswerIndex: 0,
    explanation: "They trace spiral arms.",
    translation: {
      text: "Segna la frase ERRATA su ammassi e associazioni",
      options: [
        "Ammassi aperti distribuiti a caso, nessuna info sulla Via Lattea",
        "Distanze più facili da misurare",
        "Ammassi globulari distribuiti sfericamente",
        "Stelle del cluster formano isocrona"
      ],
      explanation: "Tracciano i bracci a spirale."
    }
  },
  {
    id: 105,
    text: "Mark the WRONG sentence regarding photometric systems",
    options: [
      "a. The magnitude of a photometric system depends strongly on the wavelength intervals where the flux density is measured",
      "b. In the post a photometric system was defined by a strict combination of optics, instruments and photometric filters",
      "c. A modern photometric system is completely defined by the description of the filter response as a function of wavelength",
      "d. The first photometric systems were defined according to the response of the naked eye and/or photographic plates"
    ],
    correctAnswerIndex: 2,
    explanation: "Needs detector + atmosphere info too.",
    translation: {
      text: "Segna la frase ERRATA sui sistemi fotometrici",
      options: [
        "Magnitudine dipende da intervalli di lunghezza d'onda",
        "In passato definito da ottiche/strumenti/filtri",
        "Sistema moderno definito completamente dalla risposta del filtro",
        "Primi sistemi basati su occhio/lastre"
      ],
      explanation: "Serve anche info su rivelatore e atmosfera."
    }
  },
  {
    id: 106,
    text: "Mark the WRONG sentence regarding modern photometric systems",
    options: [
      "a. The Johnson-Cousins-Glass system includes bands in the infrared due to the higher sensitivity of CCDs",
      "b. Some photometric systems are characterized by vera narrow bands,...",
      "c. The original Johnson-Morgan system only included three bands: ultraviolet U, blue B, visual V",
      "d. Photometric measurements from different observatories can be mixed, even if filters are slightly different"
    ],
    correctAnswerIndex: 3,
    explanation: "Cannot simply mix without transformation/calibration.",
    translation: {
      text: "Segna la frase ERRATA sui sistemi fotometrici moderni",
      options: [
        "Sistema Johnson-Cousins-Glass include bande IR",
        "Alcuni sistemi hanno bande molto strette",
        "Sistema originale Johnson-Morgan aveva U, B, V",
        "Misure da osservatori diversi possono essere mescolate anche se filtri diversi"
      ],
      explanation: "Non si possono mescolare senza calibrazione."
    }
  },
  {
    id: 107,
    text: "What is the main component of Venus atmosphere?",
    options: [
      "a. Nitrogen",
      "b. Carbon dioxide",
      "c. Carbon monoxide",
      "d. Methane"
    ],
    correctAnswerIndex: 1,
    explanation: "CO2.",
    translation: {
      text: "Componente principale atmosfera di Venere?",
      options: [
        "Azoto",
        "Anidride carbonica",
        "Monossido di carbonio",
        "Metano"
      ],
      explanation: "CO2."
    }
  },
  {
    id: 108,
    text: "Mark the WRONG sentence regarding the detection techniques of exoplanets",
    options: [
      "a. The Transit technique is the least successful method for planet detection",
      "b. The true mass of the planet can be optai ed only if its orbital inclination is known",
      "c. The Radial Velocity technique allows the ssmeasurement of the minimum mass of a planet",
      "d. It is possible to observe a planet with both the transit and the radial velocity"
    ],
    correctAnswerIndex: 0,
    explanation: "Transit is very successful (Kepler/TESS).",
    translation: {
      text: "Segna la frase ERRATA sulle tecniche di rilevamento",
      options: [
        "Il transito è il metodo meno efficace",
        "Massa vera ottenibile solo se inclinazione nota",
        "Velocità radiale misura massa minima",
        "Possibile osservare con entrambi i metodi"
      ],
      explanation: "Il transito è molto efficace."
    }
  },
  {
    id: 109,
    text: "Mark the WRONG sentence regarding the meridian telescope",
    options: [
      "a. The right ascension and declination of a star can be precisely measured",
      "b. The concept of meridian telescope can be extended to radio observation as well",
      "c. A meridian telescope is fixed in right ascension and can be moved only in declination",
      "d. A star with known right ascension can be used to directly measure the Universal time"
    ],
    correctAnswerIndex: 3,
    explanation: "Measures Sidereal Time, which relates to UT.",
    translation: {
      text: "Segna la frase ERRATA sul telescopio meridiano",
      options: [
        "AR e Dec misurabili precisamente",
        "Concetto estendibile alle onde radio",
        "Fisso in AR, mobile in Dec",
        "Stella con AR nota misura direttamente il Tempo Universale"
      ],
      explanation: "Misura il Tempo Siderale."
    }
  },
  {
    id: 110,
    text: "Mark the only cause of perturbation of coordinate that is not related to the movements of Earth",
    options: [
      "a. Refraction",
      "b. Parallax",
      "c. Aberration",
      "d. Precession"
    ],
    correctAnswerIndex: 0,
    explanation: "Refraction is atmospheric.",
    translation: {
      text: "Unica causa di perturbazione non legata ai movimenti della Terra",
      options: [
        "Rifrazione",
        "Parallasse",
        "Aberrazione",
        "Precessione"
      ],
      explanation: "La rifrazione è atmosferica."
    }
  },
  {
    id: 111,
    text: "Mark the correct sentence regarding the transition between energy levels",
    options: [
      "a. Emission is a bonus-free transition",
      "b. Recombination is a free-bound transition",
      "c. Ionization is a free-bound transition",
      "d. Absorption is a bound-bound transition"
    ],
    correctAnswerIndex: 3,
    explanation: "Absorption is bound-bound (usually). Recombination is free-bound.",
    translation: {
      text: "Segna la frase corretta sulle transizioni",
      options: [
        "Emissione è bonus-free",
        "Ricombinazione è free-bound",
        "Ionizzazione è free-bound",
        "Assorbimento è bound-bound"
      ],
      explanation: "L'assorbimento è bound-bound."
    }
  },
  {
    id: 112,
    text: "Venus has",
    options: [
      "a. Two rings",
      "b. A thick atmosphere that ...",
      "c. two small satellites",
      "d. A mass similar to that of the Earth"
    ],
    correctAnswerIndex: 3,
    explanation: "Similar mass/size to Earth.",
    translation: {
      text: "Venere ha",
      options: [
        "Due anelli",
        "Un'atmosfera spessa che...",
        "due piccoli satelliti",
        "Una massa simile a quella della Terra"
      ],
      explanation: "Massa simile alla Terra."
    }
  },
  {
    id: 113,
    text: "Which mission is not dedicated to the detection or characterization of exoplanets?",
    options: [
      "a. EUCLID - EUropean Constellation for exoLife Detection, NASA",
      "b. TESS - Transiting Exoplanet Survey Satellite, NASA",
      "c. PLATO - PLAnetary Transits and Oscillations of stars, ESA",
      "d. CHEOPS - CHaracterising ExOPlanet Satellite, ESA"
    ],
    correctAnswerIndex: 0,
    explanation: "Euclid is for Dark Energy/Matter (Cosmology).",
    translation: {
      text: "Quale missione non è dedicata agli esopianeti?",
      options: [
        "EUCLID",
        "TESS",
        "PLATO",
        "CHEOPS"
      ],
      explanation: "Euclid è per la Cosmologia."
    }
  },
  {
    id: 114,
    text: "Mark the system that is exclusively topocentric",
    options: [
      "a. Equatorial system",
      "b. Ecliptic system",
      "c. Horizontal system",
      "d. Galactic system"
    ],
    correctAnswerIndex: 2,
    explanation: "Horizontal depends on observer location.",
    translation: {
      text: "Segna il sistema esclusivamente topocentrico",
      options: [
        "Equatoriale",
        "Eclittico",
        "Orizzontale",
        "Galattico"
      ],
      explanation: "L'orizzontale dipende dalla posizione dell'osservatore."
    }
  },
  {
    id: 115,
    text: "Mark the wrong sentence regarding the Bohr model of an atom",
    options: [
      "a. The energy level of electrons can not assume arbitrary values",
      "b. If an electron is not in the ground state, the atom is in an excited state",
      "c. Electrons orbit around a nucleus composed of protons and neutrons",
      "d. Electrons jumps from the ground state are the less energetic ones"
    ],
    correctAnswerIndex: 3,
    explanation: "Ground state jumps are high energy.",
    translation: {
      text: "Segna la frase errata sul modello di Bohr",
      options: [
        "Livelli energetici discreti",
        "Se non stato fondamentale, eccitato",
        "Elettroni orbitano nucleo",
        "Salti dallo stato fondamentale sono i meno energetici"
      ],
      explanation: "I salti dallo stato fondamentale sono ad alta energia."
    }
  },
  {
    id: 116,
    text: "Mark the wrong sentence regarding flux and luminosity",
    options: [
      "a. The flux is the power going through some and it is measured in Watt",
      "b. The flux passing through a closed encompassing the source is called luminosity",
      "c. The flux density and the Solar constant do not depend on the distance of the source",
      "d. In the absence of absorption, the luminosity is constant regardless of the distance of the source"
    ],
    correctAnswerIndex: 2,
    explanation: "Flux density depends on distance (inverse square).",
    translation: {
      text: "Segna la frase errata su flusso e luminosità",
      options: [
        "Flusso è potenza (Watt)",
        "Flusso attraverso superficie chiusa è luminosità",
        "Densità di flusso non dipende dalla distanza",
        "Senza assorbimento, luminosità costante"
      ],
      explanation: "La densità di flusso dipende dalla distanza."
    }
  },
  {
    id: 117,
    text: "Mark the WRONG sentence regarding the structural properties of galaxies",
    options: [
      "a. Dust is concentrated in the thin disk, this is why the Milky Way’s bulge appears split in two",
      "b. The Halo is mostly composed of neutral gas, visible only in the radio range, and old stars",
      "c. Bars are thought to be streams of gas from the spirals to the centre of the galaxy",
      "d. Spirals are fixed structures that revolve rigidly around the bugle of a galaxy"
    ],
    correctAnswerIndex: 3,
    explanation: "Spirals are density waves, not rigid structures.",
    translation: {
      text: "Segna la frase ERRATA sulle proprietà strutturali delle galassie",
      options: [
        "Polvere nel disco sottile divide il bulge",
        "Alone composto da gas neutro e stelle vecchie",
        "Barre sono flussi di gas",
        "Spirali sono strutture rigide che ruotano attorno al bulge"
      ],
      explanation: "Le spirali sono onde di densità."
    }
  },
  {
    id: 118,
    text: "Mark the WRONG sentence regarding the giant phase in stellar evolution",
    options: [
      "a. Giant stars are colder on the surface, but hey are brighter because they have a larger than Main Sequence stars",
      "b. The Turn-Off is the point in the colour-magnitude diagram where the star leaves the Main Sequence to enter the Giant phase",
      "c. When Hydrogen is exhausted in the core, the star starts burning it in a shell surrounding an inert Helium core",
      "d. Stars in the giant phase have the same size and luminosity,regardless of their mass during the Main Sequence phase"
    ],
    correctAnswerIndex: 3,
    explanation: "Size/Luminosity depends on mass.",
    translation: {
      text: "Segna la frase ERRATA sulla fase gigante",
      options: [
        "Giganti più fredde ma più luminose",
        "Turn-Off punto di uscita",
        "Idrogeno brucia in guscio",
        "Stelle giganti hanno stessa dimensione/luminosità a prescindere dalla massa"
      ],
      explanation: "Dipende dalla massa."
    }
  },
  {
    id: 119,
    text: "Mark the WRONG sentence regarding neutron stars",
    options: [
      "a. During the final collapse of a star, the totality of its mass is converted to neutrons, with no ejection of matter",
      "b. A newly formed neutron star has a temperature of one billion degrees, a strong magnetic field and it spins extremely fast",
      "c. A neutron star with mass 1.44 solar masses has a radius of just 10 km and a density similar to those of atomic nuclei",
      "d. Further collapse of neutron stars is avoided by the neutron degeneracy pressure, if the mass is below the TOV limit"
    ],
    correctAnswerIndex: 0,
    explanation: "Matter is ejected.",
    translation: {
      text: "Segna la frase ERRATA sulle stelle di neutroni",
      options: [
        "Totalità massa convertita in neutroni, no espulsione",
        "Appena formata: calda, magnetica, veloce",
        "Raggio 10km, densità nucleare",
        "Collasso evitato da pressione degenerazione"
      ],
      explanation: "La materia viene espulsa."
    }
  },
  {
    id: 120,
    text: "Mark the WRONG sentence regarding the asymptotic giant phase in stellar evolution (intermediate-mass stars)",
    options: [
      "a. When the Helium in the core is exhausted, Helium keeps burning in a shell leaving behind a Carbon and Oxygen core",
      "b. The outcome of this phase will be a White Dwarf either made of Carbon and Oxygen, or just exclusively Helium",
      "c. The star becomes unstable due to the presence of two shells with fusion reactions, Hydrogen and Helium respectively",
      "d. The star will lose the outer envelope into space, the expelled material take the name of Planetary Nebula"
    ],
    correctAnswerIndex: 1,
    explanation: "Outcome is CO WD.",
    translation: {
      text: "Segna la frase ERRATA sulla fase asintotica gigante",
      options: [
        "Elio brucia in guscio attorno a nucleo CO",
        "Risultato Nana Bianca CO o solo Elio",
        "Instabilità due gusci fusione",
        "Espulsione inviluppo -> Nebulosa Planetaria"
      ],
      explanation: "Risultato è Nana Bianca CO."
    }
  },
  {
    id: 121,
    text: "What is the frost line?",
    options: [
      "a. The boundary between Neptune and the Kuiper Belt",
      "b. The boundary between inner and outer planets",
      "c. The boundary between the Kuiper Belt and the Oort Cloud",
      "d. The boundary between the Sun and the present orbit of Mercury where no material could condense"
    ],
    correctAnswerIndex: 1,
    explanation: "Divides rock/metal planets from gas/ice planets.",
    translation: {
      text: "Cos'è la frost line?",
      options: [
        "Confine Nettuno/Kuiper",
        "Confine tra pianeti interni ed esterni",
        "Confine Kuiper/Oort",
        "Confine Sole/Mercurio"
      ],
      explanation: "Divide pianeti rocciosi da gassosi."
    }
  },
  {
    id: 122,
    text: "Mark the element that is not required for the operational definition of an apparent magnitude",
    options: [
      "a. Spectral energy distribution of the star (flux density as a function of wavelength)",
      "b. Properties of calibration stars (position, proper motion and parallax of each star)",
      "c. Detector and instrumental characteristics (reflectivity of the optics and CCD efficiency)",
      "d. Filter to select a specific wavelength range (transmission curve)"
    ],
    correctAnswerIndex: 1,
    explanation: "Parallax/proper motion not strictly required for magnitude def.",
    translation: {
      text: "Elemento non richiesto per definire magnitudine apparente",
      options: [
        "Distribuzione energia spettrale",
        "Proprietà stelle calibrazione (parallasse, moto)",
        "Caratteristiche detector",
        "Filtro"
      ],
      explanation: "Parallasse/moto non strettamente richiesti."
    }
  },
  {
    id: 123,
    text: "Mark the WRONG sentence",
    options: [
      "a. The Apparent Sidereal Time can only be determined by mathematical approximations",
      "b. The difference between Apparent and Mean Sidereal Times is called Equation of Equinoxes",
      "c. The Mean Equinox is the point where the vernal equinox would be if there was no nutation",
      "d. The Mean Sidereal Time is equal to the Hour Angle of the Mean Equinox"
    ],
    correctAnswerIndex: 0,
    explanation: "Apparent Sidereal Time is determinable.",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "Tempo Siderale Apparente solo approssimazioni",
        "Differenza è Equazione degli Equinozi",
        "Equinozio Medio senza nutazione",
        "Tempo Siderale Medio è Angolo Orario Equinozio Medio"
      ],
      explanation: "Il Tempo Siderale Apparente è determinabile."
    }
  },
  {
    id: 124,
    text: "Mark the correct definition of Hour Angle",
    options: [
      "a. distance of the star from the Vernal point along the Equator,measured anti-clockwise",
      "b. distance of the star from the vernal point,along the Equator measured clockwise",
      "c. distance of the star from the Local Meridian along the Equator, measured clockwise",
      "d. distance of the star from the Local Meridian along the Equator, measured anti-clockwise"
    ],
    correctAnswerIndex: 2,
    explanation: "Measured clockwise (westwards) from Meridian.",
    translation: {
      text: "Segna la definizione corretta di Angolo Orario",
      options: [
        "Distanza dal Punto Vernale, antiorario",
        "Distanza dal Punto Vernale, orario",
        "Distanza dal Meridiano Locale lungo l'Equatore, misurata in senso orario",
        "Distanza dal Meridiano Locale, antiorario"
      ],
      explanation: "Misurato in senso orario dal Meridiano."
    }
  },
  {
    id: 125,
    text: "Mark the WRONG sentence regarding instrumentations to characterize exoplanets",
    options: [
      "a.Synergy (collaboration) between ground and space-based observatories is nearly impossible to obtain",
      "b. Most of the small transiting planets have been discovered by space observatories",
      "c. Radial velocity technique requires extremely well-calibrated instruments, usually from the ground",
      "d. Atmosphere characterization can be performed either from ground (spectroscopy) or space (photometry)"
    ],
    correctAnswerIndex: 0,
    explanation: "Synergy is common and essential.",
    translation: {
      text: "Segna la frase ERRATA su strumentazione esopianeti",
      options: [
        "Sinergia terra-spazio quasi impossibile",
        "Piccoli pianeti transitanti scoperti da spazio",
        "Velocità radiale richiede strumenti calibrati a terra",
        "Caratterizzazione atmosfera da terra o spazio"
      ],
      explanation: "La sinergia è comune."
    }
  },
  {
    id: 126,
    text: "Mark the WRONG sentence",
    options: [
      "a. The orbital eccentricity of Earth greatly influences the Equation of Time",
      "b. The equation of Time is the difference between the Mean Equinox and the Mean Solar Time",
      "c. The analemma can be thought as a visual representation of The Equation of Time",
      "d. There is a strong dependency of The Equation of Time on the obliquity of the Ecliptic"
    ],
    correctAnswerIndex: 1,
    explanation: "Eq of Time = Apparent Solar Time - Mean Solar Time.",
    translation: {
      text: "Segna la frase ERRATA",
      options: [
        "Eccentricità influenza Equazione del Tempo",
        "Equazione del Tempo è differenza tra Equinozio Medio e Tempo Solare Medio",
        "Analemma è rappresentazione visiva",
        "Forte dipendenza dall'obliquità"
      ],
      explanation: "Eq del Tempo = Tempo Solare Apparente - Medio."
    }
  },
  {
    id: 127,
    text: "Mark the WRONG sentence regarding the structure and lifetime of low-mass stars",
    options: [
      "a. At the end of their life, low-mass stars will evolve into Carbon-Oxygen white dwarfs and slowly cool down",
      "b. The lifetime of low-mass stars can be extended up to trillion of years, i.e., longer than the age of the universe",
      "c. These stars are fully convective, so the entirety of its mass can be used as fuel for fusion reactions",
      "d. At some point the universe will consist only of low-mass, cold stars, since they are also favoured in stellar formation"
    ],
    correctAnswerIndex: 0,
    explanation: "Very low mass stars (red dwarfs) become Helium white dwarfs, not CO.",
    translation: {
      text: "Segna la frase ERRATA su stelle di bassa massa",
      options: [
        "Alla fine evolvono in nane bianche CO",
        "Vita estesa a trilioni di anni",
        "Interamente convettive, usano tutta la massa",
        "L'universo consisterà solo di stelle fredde"
      ],
      explanation: "Diventano nane bianche di Elio."
    }
  },
  {
    id: 128,
    text: "Mark the WRONG sentence regarding the properties of light",
    options: [
      "a.Electromagnetic radiation propagates as both electrical and magnetic waves",
      "b.Photons are packets, or quanta, of continuos and variable amounts of energy",
      "c.Light can be described simultaneously as a wave and as a particle",
      "d.A photon has energy and momentum, but no mass and electric charge"
    ],
    correctAnswerIndex: 1,
    explanation: "Photons are discrete packets (quanta), not continuous/variable arbitrary amounts (E=hf).",
    translation: {
      text: "Segna la frase ERRATA sulle proprietà della luce",
      options: [
        "Propagazione come onde elettriche e magnetiche",
        "Fotoni sono pacchetti di quantità continue e variabili",
        "Luce descritta come onda e particella",
        "Fotone ha energia/momento ma no massa/carica"
      ],
      explanation: "I fotoni sono discreti."
    }
  },
  {
    id: 129,
    text: "Mark the correct definition of an isochrone",
    options: [
      "a.Time it takes for the object to radiate away a significant amount of its gravitational potential energy",
      "b.A single star with a given mass and chemical composition is followed during its evolutionary stages",
      "c.The structure of a star, under given approximations, is uniquely determined by its mass and composition",
      "d.Luminosity and temperature of an ensemble of stars with same age and chemical composition, over a wide range of mass"
    ],
    correctAnswerIndex: 3,
    explanation: "Isochrone = line of same age.",
    translation: {
      text: "Segna la definizione corretta di isocrona",
      options: [
        "Tempo per irradiare energia potenziale",
        "Singola stella seguita nell'evoluzione",
        "Struttura determinata da massa/composizione",
        "Luminosità/temp di insieme di stelle stessa età/composizione"
      ],
      explanation: "Isocrona = linea di stessa età."
    }
  },
  {
    id: 130,
    text: "Mark the WRONG sentence regarding the formation of protostars",
    options: [
      "a. In the first phase of protostar formation, the gas is optically thin and the gas collapses in a free fall regime",
      "b. The actual protostar phase begins when the hydrostatic equilibrium settles in",
      "c. Perturbations in molecular clouds will form overdensities (Bok Globules or Dark Nebulae) that will become protostars",
      "d. During the protostar phase, the central temperature in the core is high enough for Hydrogen fusion"
    ],
    correctAnswerIndex: 3,
    explanation: "Fusion starts on Main Sequence, not protostar phase.",
    translation: {
      text: "Segna la frase ERRATA sulla formazione di protostelle",
      options: [
        "Prima fase: gas otticamente sottile, collasso caduta libera",
        "Fase protostella inizia con equilibrio idrostatico",
        "Perturbazioni formano sovradensità (Globuli di Bok)",
        "Durante fase protostella, temperatura centrale alta per fusione H"
      ],
      explanation: "La fusione inizia nella Sequenza Principale."
    }
  },
  {
    id: 131,
    text: "Mark the wrong sentence regardin spherical trigonometry",
    options: [
      "a.the shortest path between two point on a sphere is always along a great circle",
      "b. a great circle divide a sphere into two hemispheres",
      "c. a plane passing through the center of the phere identifies a great circle on it",
      "d.the intersection between any plane and the sphere is called great circle"
    ],
    correctAnswerIndex: 3,
    explanation: "Only planes passing through the center form great circles.",
    translation: {
      text: "Segna la frase errata sulla trigonometria sferica",
      options: [
        "percorso più breve è cerchio massimo",
        "cerchio massimo divide sfera in due",
        "piano per il centro identifica cerchio massimo",
        "intersezione tra qualsiasi piano e sfera è cerchio massimo"
      ],
      explanation: "Solo piani per il centro formano cerchi massimi."
    }
  },
  {
    id: 132,
    text: "Mark the physical effect that is not concurring to luni-solar precession and nutatiion",
    options: [
      "a.the distribution of terrestrial masses is not spherical",
      "b.the distribution of emerged land and oceans on earth’s surface",
      "c. inclination of the earth’s axis whit respect to the ecliptic",
      "d. inclination of moon’s orbit whit respect to the ecliptic"
    ],
    correctAnswerIndex: 1,
    explanation: "Land/ocean distribution has negligible effect compared to oblateness/gravity.",
    translation: {
      text: "Effetto fisico non concorrente a precessione/nutazione",
      options: [
        "distribuzione masse non sferica",
        "distribuzione terre emerse e oceani",
        "inclinazione asse terrestre",
        "inclinazione orbita lunare"
      ],
      explanation: "Distribuzione terre/oceani trascurabile."
    }
  },
  {
    id: 133,
    text: "Mark the wrong sentence regarding the velocity of stars:",
    options: [
      "a.the proper motion is the velocity on the plane of the sky",
      "b. the radial velocity is the velocity in the direction of the observer",
      "c. the observed proper motion is not affected by the annual parallax",
      "d. for some stars, it is possible to measure the proper motion from the ground"
    ],
    correctAnswerIndex: 0,
    explanation: "Proper motion is angular change, not velocity itself.",
    translation: {
      text: "Segna la frase errata sulla velocità delle stelle:",
      options: [
        "moto proprio è la velocità sul piano del cielo",
        "velocità radiale è in direzione osservatore",
        "moto proprio osservato non affetto da parallasse",
        "possibile misurare moto proprio da terra"
      ],
      explanation: "Il moto proprio è un cambiamento angolare."
    }
  },
  {
    id: 134,
    text: "Mark the wrong sentence regarding the sun and the solar time",
    options: [
      "a.the mean solar time is equal to the hour angle of the mean equinox, plus 12 hours",
      "b.the motion of the sun on the sky is not uniform due ti earth eccentricity",
      "c. the mean sun moves at equator, with period of one tropical years",
      "d. the motion is not uniform because it moves on the ecliptic"
    ],
    correctAnswerIndex: 0,
    explanation: "Mean Solar Time relates to Mean Sun.",
    translation: {
      text: "Segna la frase errata su sole e tempo solare",
      options: [
        "tempo solare medio = angolo orario equinozio medio + 12h",
        "moto sole non uniforme per eccentricità",
        "sole medio muove all'equatore",
        "moto non uniforme perché su eclittica"
      ],
      explanation: "Il tempo solare medio si riferisce al Sole Medio."
    }
  },
  {
    id: 135,
    text: "Mark the wrong sentence regarding the mesurement of time",
    options: [
      "a.the mean equinox is the point where the veneral equinox would be if there was no nautation",
      "b. the apparen sideral time can only be determined by mathematical approximations",
      "c. the mean sideral time is the equal to the hour angle of th mean equinox",
      "d. the difference between apparent and mean sideral times is called equation of equinoxes"
    ],
    correctAnswerIndex: 1,
    explanation: "Apparent sidereal time is determinable.",
    translation: {
      text: "Segna la frase errata sulla misura del tempo",
      options: [
        "equinozio medio punto senza nutazione",
        "tempo siderale apparente solo approssimazioni",
        "tempo siderale medio = angolo orario equinozio medio",
        "differenza è equazione degli equinozi"
      ],
      explanation: "Il tempo siderale apparente è determinabile."
    }
  },
  {
    id: 136,
    text: "where are located the jupiter trojan asteroid",
    options: [
      "a.they are in the mean motion reason 3:2 whit jupiter",
      "b.they are in the L2 and L3 lagrangian points alienated with the sun and jupiter",
      "c. they are in the L4 and L5 Lagrangian points formin an equilateral triangle whit jupiters and the sun",
      "d. they are located in the main belt between 2.1 and 3.5 AU"
    ],
    correctAnswerIndex: 2,
    explanation: "L4 and L5.",
    translation: {
      text: "dove si trovano gli asteroidi troiani di giove",
      options: [
        "risonanza 3:2 con giove",
        "punti L2 e L3",
        "punti L4 e L5 triangolo equilatero",
        "fascia principale"
      ],
      explanation: "L4 e L5."
    }
  },
  {
    id: 137,
    text: "what is the yarkowsky effect on asteroid:7",
    options: [
      "a.it is the force generated by the collisino of solar wind particles with the surface of an asteroid",
      "b.the yarkowsky effect is the small force exerted on a rotating body due to the asymmetrical emission of thermal radiation after absorbing sunlight",
      "c. it is the effect of the sun’s gravity pulling small celestial bodies closer to the sun over time",
      "d. it is the acceleration caused by the steroid’s magnetic field interactin with the earth’s magnetosphere"
    ],
    correctAnswerIndex: 1,
    explanation: "Thermal radiation force.",
    translation: {
      text: "cos'è l'effetto yarkowsky",
      options: [
        "forza collisione vento solare",
        "forza da emissione termica asimmetrica",
        "effetto gravità solare nel tempo",
        "accelerazione campo magnetico"
      ],
      explanation: "Forza da radiazione termica."
    }
  },
  {
    id: 138,
    text: "mark the wrong sentenc regarding the lifetime of a star radiating as the sun",
    options: [
      "a. nuclear reactions keep a star in balance for billions of yeas only if all of its mass is converted to energy",
      "b.chemical reaction or radioactivity are not efficient enough to justify the luminosity of the sun",
      "c. without any internal pressure to counterbalance gravity, a star would collapse in about half an hour",
      "d. by radiating its gravitational potential energy, a star could only survive a few millions of years"
    ],
    correctAnswerIndex: 0,
    explanation: "Only fraction of mass converted.",
    translation: {
      text: "segna frase errata vita stella come sole",
      options: [
        "reazioni nucleari ok solo se tutta massa convertita",
        "reazioni chimiche non efficienti",
        "senza pressione collasso in mezz'ora",
        "energia gravitazionale dura pochi milioni anni"
      ],
      explanation: "Solo una frazione della massa è convertita."
    }
  },
  {
    id: 139,
    text: "mark the wrong sentence regarding neutron stars",
    options: [
      ".a. during the final collapse of a star, the totally of its mass is converted to neurons, with no ejection of matter",
      "b.the neutron degeneracy pressure avoids further collapse of neutron star, if the mass is below the TOV limit",
      "c. a newly formed neutrons star hs a temperature of one billion degrees, a strong magnetic field and it spins extremely fast",
      "d. a neutron star with mass 1.44 solar masses has a radius of just 10 km and a density similar to those of atomic nuclei"
    ],
    correctAnswerIndex: 0,
    explanation: "Matter is ejected.",
    translation: {
      text: "segna frase errata stelle neutroni",
      options: [
        "tutta massa convertita in neutroni, no espulsione",
        "pressione degenerazione evita collasso",
        "nuova stella calda, magnetica, veloce",
        "raggio 10km densità nucleare"
      ],
      explanation: "La materia viene espulsa."
    }
  },
  {
    id: 140,
    text: "mark the dynamic effect with incorrect amplitude and period:",
    options: [
      "a.Lunisolar precession, amplitude 23.5 degrees, period 26000 years",
      "b. Nutation,amplitude 9.2 arcseconds, period 18.6 years",
      "c.polar motion, amplitude 0.3 arcseconds, 12 and 14 months",
      "d. planetary precession, amplitude 5.67 arcminutes, period 15.5 years"
    ],
    correctAnswerIndex: 3,
    explanation: "Planetary precession values seem incorrect here.",
    translation: {
      text: "effetto dinamico con ampiezza/periodo errati:",
      options: [
        "Precessione lunisolare",
        "Nutazione",
        "Moto polare",
        "Precessione planetaria"
      ],
      explanation: "Valori precessione planetaria errati."
    }
  },
  {
    id: 141,
    text: "Mark the dynamical effect with incorrect amplitude and period",
    options: [
      "a.Planetary precession, amplitude 0.47 -arcseconds/year, secular",
      "b.Nutation, amplitude 9.2 arcseconds, period 18.6 years",
      "c.Polar motion, amplitude 0.3 arcseconds, 12 and 14 months",
      "d.Lunisolar precession, amplitude 23.5 arcminutes, period 2500 years"
    ],
    correctAnswerIndex: 3,
    explanation: "Lunisolar is 26000 years, not 2500.",
    translation: {
      text: "Segna effetto dinamico errato",
      options: [
        "Precessione planetaria",
        "Nutazione",
        "Moto polare",
        "Precessione lunisolare"
      ],
      explanation: "Lunisolare è 26000 anni."
    }
  },
  {
    id: 142,
    text: "mark the wrong sentence regarding the parallax:",
    options: [
      "a.in the annual parallax, the baseline is the radius of earth’s orbit",
      "b.in the standard diurnal parallax, the baseline is earth’s equatorial radius",
      "c.the observant during parallax depends on the latitude of the observant",
      "d. in the secular parallax, the baseline is the radius of moon’s orbit"
    ],
    correctAnswerIndex: 3,
    explanation: "Secular parallax uses solar system motion.",
    translation: {
      text: "frase errata sulla parallasse:",
      options: [
        "annuale: base raggio orbita terra",
        "diurna: base raggio equatoriale terra",
        "dipende da latitudine",
        "secolare: base raggio orbita luna"
      ],
      explanation: "Parallasse secolare usa moto sistema solare."
    }
  },
  {
    id: 143,
    text: "mark the wrong sentence regarding the apparent movement of the stars:",
    options: [
      "a.stars move parallel to the celestial equator",
      "b. a star will always rise at the same azimuth during the year",
      "c. a star culminates when crossin the oca mridian",
      "d. the azimuthal velocity of a star does not depend on its elevation"
    ],
    correctAnswerIndex: 3,
    explanation: "Azimuthal velocity depends on elevation.",
    translation: {
      text: "frase errata movimento apparente stelle:",
      options: [
        "muovono parallele equatore",
        "sorgono stesso azimut",
        "culminano al meridiano",
        "velocità azimutale non dipende da elevazione"
      ],
      explanation: "Velocità azimutale dipende dall'elevazione."
    }
  },
  {
    id: 144,
    text: "which of the following is a recognized taxonomic class of asteroid",
    options: [
      "a.Gaseous (G-type)",
      "b. Crystalline (K-type)",
      "c. Carbonaceous (C-type)",
      "d.  Basaltic (B-type)"
    ],
    correctAnswerIndex: 2,
    explanation: "C-type (Carbonaceous) is standard.",
    translation: {
      text: "classe tassonomica asteroide riconosciuta",
      options: [
        "Gassoso",
        "Cristallino",
        "Carbonaceo",
        "Basaltico"
      ],
      explanation: "C-type (Carbonaceo) è standard."
    }
  },
  {
    id: 145,
    text: "mark the wrong sentence regarding the mathematical treatment of the movements of the Earth",
    options: [
      "a.instantaneus elements, icluding all the possible effects, are called “true elements “",
      "b. an element corrected from the effect of nutation takes the name of “ mean element”",
      "c. elements are mathematiclly described by a “secular” term and a periodic term",
      "d. an astronomical catalogue can contai coordinates taken at any random moment in time"
    ],
    correctAnswerIndex: 3,
    explanation: "Catalogues use specific epochs (e.g. J2000).",
    translation: {
      text: "frase errata trattazione matematica movimenti Terra",
      options: [
        "elementi istantanei = veri",
        "corretto da nutazione = medio",
        "termini secolari e periodici",
        "catalogo contiene coordinate momento casuale"
      ],
      explanation: "Cataloghi usano epoche specifiche."
    }
  },
  {
    id: 146,
    text: "mark the wrong sentence regarding reference systems:",
    options: [
      "a.The galactic longitude is measured counter-clockwise from the center of Andromrda galaxy",
      "b. the veneral point is the intersection between the equator and the ecliptic",
      "c. the geocentric coordinates of a point may be different from geodetic coordinates",
      "d. the ecliptic is the projection of the orbbital plane of the earth on the celestial sphere"
    ],
    correctAnswerIndex: 0,
    explanation: "Galactic longitude measured from Galactic Center (Sgr A*).",
    translation: {
      text: "frase errata sistemi riferimento:",
      options: [
        "longitudine galattica misurata da Andromeda",
        "punto vernale intersezione equatore/eclittica",
        "coordinate geocentriche diverse da geodetiche",
        "eclittica proiezione piano orbitale"
      ],
      explanation: "Longitudine galattica misurata dal Centro Galattico."
    }
  },
  {
    id: 147,
    text: "mark the wrong sentence regarding moon",
    options: [
      "a. synodic month or lunation: time between two new moon",
      "b. blue moon: thee instant when the equatorial coordinates of the sun and the moon are equal",
      "c. new moon: the instant when the geocentric ecliptic longitudes of the sun and moon are equal",
      "d. sideral month: the lunar orbital period with respect to the star"
    ],
    correctAnswerIndex: 1,
    explanation: "Blue moon is 2nd full moon in month.",
    translation: {
      text: "frase errata luna",
      options: [
        "mese sinodico: tra due lune nuove",
        "luna blu: coordinate equatoriali uguali",
        "luna nuova: longitudini eclittiche uguali",
        "mese siderale: rispetto alle stelle"
      ],
      explanation: "Luna blu è la seconda luna piena."
    }
  },
  {
    id: 148,
    text: "mark the wrong sentence regarding solar and sideral times",
    options: [
      "a. the solar time runs faster than the sideral time",
      "b. the time between two consecutive passages of a star across the meridian is called sideral day",
      "c. the time between two consecutive passages of the sun across the meridian is called synodic day",
      "d. a sideral day has a duration of 23 hours 56 minutes 4 seconds in solar time"
    ],
    correctAnswerIndex: 0,
    explanation: "Sidereal time runs faster (gains ~4 min/day).",
    translation: {
      text: "frase errata tempi solari e siderali",
      options: [
        "tempo solare corre più veloce del siderale",
        "passaggi stella = giorno siderale",
        "passaggi sole = giorno sinodico",
        "giorno siderale 23h 56m 4s"
      ],
      explanation: "Il tempo siderale corre più veloce."
    }
  },
  {
    id: 149,
    text: "mark the wrong sentence regardingthe movement of the earth",
    options: [
      "a. planetary precession is included by the oblateness of other planets, especially saturn",
      "b. precession is due to the moon and sun pulling o the oblateness of the earth",
      "c. nutation is called by the moon’s orbit begin eccentric and inclined with respect to the ecliptic",
      "d. the celestial pole is always on a point of the small circle 23.5 from the ecliptic pole"
    ],
    correctAnswerIndex: 3,
    explanation: "Pole moves along the circle, implies movement.",
    translation: {
      text: "frase errata movimento terra",
      options: [
        "precessione planetaria inclusa da schiacciamento",
        "precessione dovuta a luna/sole",
        "nutazione da orbita luna",
        "polo celeste sempre su un punto del cerchio"
      ],
      explanation: "Il polo si muove."
    }
  },
  {
    id: 150,
    text: "mark the wrong sentence regarding the equation of time",
    options: [
      "a. there is a stron dependecy of the equations of time on the obliquity of the ecliptic",
      "b. the analemma can be thought as a visual representation of the equation of time",
      "c. the equation of time is the difference between the mean equinox and mean solar time",
      "d. the orbital eccentricity of earth greatly influences the equation of time"
    ],
    correctAnswerIndex: 2,
    explanation: "EqT = Apparent - Mean Solar Time.",
    translation: {
      text: "frase errata equazione del tempo",
      options: [
        "forte dipendenza da obliquità",
        "analemma rappresentazione visiva",
        "differenza tra equinozio medio e tempo solare medio",
        "eccentricità influenza"
      ],
      explanation: "EqT = Tempo Solare Apparente - Medio."
    }
  },
  {
    id: 151,
    text: "mark the wrong sentence regarding the measurement of the year:",
    options: [
      "a. sideral year interval between two consecutive passage of the sun over a fixed direction",
      "b. platonic year interval for a full rotation of the earth’s rotation axis around the ecliptic pole",
      "c. both tropical years and sideral are not affected by the precession of the equinoxes",
      "D. tropical year interval between two consecutive passage of the sun on the veneral equinox"
    ],
    correctAnswerIndex: 2,
    explanation: "Tropical year IS affected.",
    translation: {
      text: "frase errata misura anno:",
      options: [
        "anno siderale passaggio direzione fissa",
        "anno platonico rotazione asse",
        "tropicale e siderale non affetti da precessione",
        "anno tropicale passaggio equinozio vernale"
      ],
      explanation: "L'anno tropicale è influenzato."
    }
  },
  {
    id: 152,
    text: "mark the correct definition of parsec",
    options: [
      "a. displacement of the sun in one century along its orbit around the galaxy",
      "b. distance at which one astronomical unit subtends an angle of one arc second",
      "c. distance traveled by the light in one years, in vacuum conditions",
      "d. distance at which earth’s radius subtends an angle of one arc minute"
    ],
    correctAnswerIndex: 1,
    explanation: "1 AU at 1 arcsec.",
    translation: {
      text: "definizione corretta parsec",
      options: [
        "spostamento sole in un secolo",
        "distanza a cui 1 UA sottende 1 secondo d'arco",
        "distanza luce in un anno",
        "distanza raggio terra sottende 1 minuto"
      ],
      explanation: "1 UA a 1 secondo d'arco."
    }
  }
];
