/*
function word() {
    var paroleRandom = [
            "ABITO",
            "ACQUA",
            "ACQUARIO",
            "AFFARE",
            "AIUTO",
            "ALBERGO",
            "ALBERO",
            "AMBIENTE",
            "AMICO",
            "AMORE",
            "ANGOLO",
            "ANIMA",
            "ANIMALE",
            "ANIMO",
            "ANNO",
            "APE",
            "AQUILA",
            "ARGOMENTO",
            "ARIA",
            "ARMA",
            "ARTE",
            "ARTICOLO",
            "ASPETTO",
            "ATTEGGIAMENTO",
            "ATTENZIONE",
            "ATTESA",
            "ATTIMO",
            "ATTIVITA",
            "ATTO",
            "ATTORE",
            "AUTOMOBILE",
            "AUTORE",
            "AUTORITA",
            "AVVOCATO",
            "AZIONE",
            "BAGNO",
            "BAMBINA",
            "BAMBINO",
            "BASE",
            "BATTAGLIA",
            "BELLEZZA",
            "BENE",
            "BESTIA",
            "BISOGNO",
            "BOCCA",
            "BOSCO",
            "BRACCIO",
            "CAFFE",
            "CALCIO",
            "CAMERA",
            "CAMPAGNA",
            "CAMPO",
            "CANE",
            "CANE",
            "CAPELLO",
            "CAPO",
            "CARATTERE",
            "CARNE",
            "CARTA",
            "CASA",
            "CASO",
            "CAUSA",
            "CAVALLO",
            "CENTRO",
            "CHIAVE",
            "CHIESA",
            "CHILOMETRO",
            "CICCIOBELLO",
            "CIELO",
            "CIRCUITO",
            "CITTA",
            "CIVILTA",
            "CLASSE",
            "COLLINA",
            "COLLO",
            "COLORE",
            "COLPA",
            "COLPO",
            "COMMERCIO",
            "COMMISSIONE",
            "COMPAGNIA",
            "COMPAGNO",
            "COMUNICAZIONE",
            "CONCETTO",
            "CONDIZIONE",
            "CONFRONTO",
            "CONGRESSO",
            "CONOSCENZA",
            "CONSEGUENZA",
            "CONSIGLIO",
            "CONTATTO",
            "CONTO",
            "CONTROLLO",
            "CORAGGIO",
            "CORPO",
            "CORRENTE",
            "CORSA",
            "CORSO",
            "CORTILE",
            "COSA",
            "COSCIENZA",
            "COSTA",
            "COSTRUZIONE",
            "CRISI",
            "CROCE",
            "CUCINA",
            "CULTURA",
            "CUORE",
            "CURA",
            "DECISIONE",
            "DENARO",
            "DENTE",
            "DESIDERIO",
            "DESTINO",
            "DIFESA",
            "DIFFERENZA",
            "DIFFICOLTA",
            "DIO",
            "DIRETTORE",
            "DIREZIONE",
            "DIRITTO",
            "DISCORSO",
            "DISPOSIZIONE",
            "DISTANZA",
            "DITO",
            "DOLORE",
            "DOMANDA",
            "DOMENICA",
            "DON",
            "DONNA",
            "DOTTORE",
            "DOVERE",
            "DUBBIO",
            "ECCELLENZA",
            "EFFETTO",
            "ELEMENTO",
            "ENERGIA",
            "EPOCA",
            "ERBA",
            "ERRORE",
            "ESAME",
            "ESEMPIO",
            "ESERCITO",
            "ESPERIENZA",
            "ESPRESSIONE",
            "ESTATE",
            "ETA",
            "FABBRICA",
            "FACCIA",
            "FAME",
            "FAMIGLIA",
            "FANTASIA",
            "FATICA",
            "FATTO",
            "FAVORE",
            "FEDE",
            "FENOMENO",
            "FERRO",
            "FESTA",
            "FIANCO",
            "FIDUCIA",
            "FIGLIA",
            "FIGLIO",
            "FIGURA",
            "FILM",
            "FILO",
            "FINE",
            "FINESTRA",
            "FIORE",
            "FIUME",
            "FOGLIA",
            "FOLLA",
            "FONDO",
            "FORMA",
            "FORTUNA",
            "FORZA",
            "FRASE",
            "FRATELLO",
            "FRETTA",
            "FRONTE",
            "FRUTTO",
            "FUNZIONE",
            "FUOCO",
            "GAMBA",
            "GASTONE",
            "GATTO",
            "GATTO",
            "GENERALE",
            "GENERE",
            "GENTE",
            "GESTO",
            "GIARDINO",
            "GIOCO",
            "GIOIA",
            "GIORNALE",
            "GIORNATA",
            "GIORNO",
            "GIOVANOTTO",
            "GIRO",
            "GIUDIZIO",
            "GIUGNO",
            "GIUSTIZIA",
            "GOVERNO",
            "GRADO",
            "GRAZIA",
            "GRUPPO",
            "GUARDIA",
            "GUERRA",
            "GUSTO",
            "IDEA",
            "IMMAGINE",
            "IMPICCATO",
            "IMPORTANZA",
            "IMPRESSIONE",
            "INDUSTRIA",
            "INFORMATICA",
            "INIZIO",
            "INTENZIONE",
            "INTERESSE",
            "INVERNO",
            "ISOLA",
            "ISTANTE",
            "ISTITUTO",
            "LABBRO",
            "LAGO",
            "LATO",
            "LATTE",
            "LAVORO",
            "LEGGE",
            "LEONARDO",
            "LETTERA",
            "LETTO",
            "LIBERTA",
            "LIBRO",
            "LIMITE",
            "LINEA",
            "LINGUA",
            "LIRA",
            "LOTTA",
            "LUCE",
            "LUNA",
            "LUOGO",
            "MACCHINA",
            "MADRE",
            "MAESTRO",
            "MAGGIO",
            "MALATTIA",
            "MAMMA",
            "MANIERA",
            "MANO",
            "MARE",
            "MARITO",
            "MASSA",
            "MATERIA",
            "MATRIMONIO",
            "MATTINA",
            "MATTINO",
            "MEDICO",
            "MEMORIA",
            "MENTE",
            "MERCATO",
            "MERCURIO",
            "MERITO",
            "MESE",
            "MESSA",
            "MESTIERE",
            "META",
            "METRO",
            "MEZZO",
            "MICROCHIP",
            "MILIONE",
            "MINISTRO",
            "MINUTO",
            "MISURA",
            "MODO",
            "MOGLIE",
            "MOMENTO",
            "MONDO",
            "MONTAGNA",
            "MONTE",
            "MORTE",
            "MOTIVO",
            "MOVIMENTO",
            "MURO",
            "MUSICA",
            "NATURA",
            "NAVE",
            "NAZIONE",
            "NECESSITA",
            "NEMICO",
            "NOME",
            "NORD",
            "NOTIZIA",
            "NOTTE",
            "NUMERO",
            "OCCASIONE",
            "OCCHIO",
            "ODORE",
            "OGGETTO",
            "OMBRA",
            "ONORE",
            "OPERA",
            "OPERAIO",
            "OPERAZIONE",
            "OPINIONE",
            "ORA",
            "ORDINE",
            "ORECCHIO",
            "ORIGINE",
            "ORO",
            "OSPEDALE",
            "PACE",
            "PADRE",
            "PADRONE",
            "PAESE",
            "PAGINA",
            "PALAZZO",
            "PALLA",
            "PANE",
            "PAPA",
            "PAPERINO",
            "PARETE",
            "PAROLA",
            "PARTE",
            "PARTITO",
            "PASSATO",
            "PASSIONE",
            "PASSO",
            "PATRIA",
            "PAURA",
            "PELLE",
            "PENA",
            "PENSIERO",
            "PERICOLO",
            "PERIODO",
            "PERSONA",
            "PERSONAGGIO",
            "PESO"
    ,
            "PEZZO",
            "PIACERE",
            "PIANO",
            "PIANTA",
            "PIANURA",
            "PIAZZA",
            "PIEDE",
            "PIETA",
            "PIETRA",
            "PIOPPO",
            "POESIA",
            "POETA",
            "POLITICA",
            "POLIZIA",
            "POLLO",
            "POMERIGGIO",
            "PONTE",
            "POPOLAZIONE",
            "POPOLO",
            "PORTA",
            "PORTO",
            "POSIZIONE",
            "POSSIBILITA",
            "POSTO",
            "POTENZA",
            "POTERE",
            "PRANZO",
            "PRATO",
            "PRESENZA",
            "PRESIDENTE",
            "PREZZO",
            "PRINCIPE",
            "PRINCIPIO",
            "PROBLEMA",
            "PROCESSO",
            "PRODOTTO",
            "PRODUZIONE",
            "PROFESSORE",
            "PROGRAMMA",
            "PROPOSITO",
            "PROPOSTA",
            "PROVA",
            "PROVINCIA",
            "PUBBLICO",
            "PULCINO",
            "PUNTA",
            "PUNTO",
            "QUADRO",
            "QUALITA",
            "QUESTIONE",
            "RAGAZZA",
            "RAGAZZO",
            "RAGIONE",
            "RAPPORTO",
            "REALTA",
            "REGIONE",
            "REGNO",
            "RELAZIONE",
            "REPUBBLICA",
            "RESTO",
            "RICCHEZZA",
            "RICERCA",
            "RICORDO",
            "RISPETTO",
            "RISPOSTA",
            "RISULTATO",
            "RITORNO",
            "RIVA",
            "RIVOLUZIONE",
            "ROBA",
            "SACRIFICIO",
            "SALA",
            "SANGUE",
            "SCALA",
            "SCENA",
            "SCIENZA",
            "SCOPO",
            "SCRITTORE",
            "SCUOLA",
            "SECOLO",
            "SEDE",
            "SEGNO",
            "SEGRETARIO",
            "SEGUITO",
            "SENSO",
            "SENTIMENTO",
            "SERA",
            "SERIE",
            "SERVIZIO",
            "SETTIMANA",
            "SFORZO",
            "SGUARDO",
            "SICUREZZA",
            "SIGNORA",
            "SIGNORE",
            "SIGNORINA",
            "SILENZIO",
            "SISTEMA",
            "SITUAZIONE",
            "SOCIETA",
            "SOGNO",
            "SOLDATO",
            "SOLE",
            "SOLUZIONE",
            "SONNO",
            "SORELLA",
            "SORRISO",
            "SPALLA",
            "SPAZIO",
            "SPECIE",
            "SPERANZA",
            "SPESA",
            "SPETTACOLO",
            "SPIRITO",
            "SQUALO",
            "STAGIONE",
            "STAMPA",
            "STANZA",
            "STATO",
            "STAZIONE",
            "STELLA",
            "STORIA",
            "STRADA",
            "STRUMENTO",
            "STUDIO",
            "SUCCESSO",
            "SUD",
            "SVILUPPO",
            "TAVOLA",
            "TAVOLO",
            "TEATRO",
            "TEMPO",
            "TERMINE",
            "TERRENO",
            "TERRITORIO",
            "TESTA",
            "TIPO",
            "TITOLO",
            "TONO",
            "TOPOLINO",
            "TRANSISTOR",
            "TRATTO",
            "TRENO",
            "UFFICIALE",
            "UFFICIO",
            "UNIVERSITA",
            "UOMO",
            "USO",
            "VALLE",
            "VALORE",
            "VENTO",
            "VERITA",
            "VESTITO",
            "VIA",
            "VIAGGIO",
            "VILLA",
            "VINO",
            "VISITA",
            "VISO",
            "VISTA",
            "VITA",
            "VOCE",
            "VOGLIA",
            "VOLONTA",
            "VOLTA",
            "VOLTO",
            "WOLVERINE",
            "XILOFONO",
            "ZATTERA",
            "ZIA",
            "ZIO",
            "ZONA"
    ];
    return ParolaDaScegliere = paroleRandom[Math.round(Math.random() * (paroleRandom.length - 1))];
}

function inizio() {
    //var arr = word().split('');
    document.getElementById("ParolaNascosta").value=word();
}
function game() {

}
*/




