// avar.js

// All campaign data, grouped by section
const data = {

  // Great Houses: original twelve + cadet/post-cataclysm branches
  houses: {
    original: [
      {
        name: "Khol", circle: "1st Circle", circleTag: "gold",
        motto: '"From Ash, We Rise"', sigil: "Four-Leaf Clover", sigilTag: "green",
        power: "Economic; trade routes; noble marriages",
        members: "Midas Khol (head); Secus Domitae (married in)",
        disposition: "Quietly aggressive, patient, far-reaching",
        notes: "Midas is a covert operator running a long game. Old friends with the late Duke. Gave Valerian an hourglass pendant at the Duke's funeral."
      },
      {
        name: "Da'varre", circle: "1st Circle", circleTag: "gold",
        motto: '"Truth Reflected, Memory Preserved"', sigil: "Glass Prism / Mirrors", sigilTag: "blue",
        power: "Archive; pre-cataclysm relics; truth-seeking; scribes to powerful patrons",
        members: "Count Alren (last of the line)",
        disposition: "Isolated, scholarly, haunted",
        notes: "A cadet house of a far more ancient line that was said to have mostly been extinguished. A line of archivists and record-keepers who dwell in the Gloamspire — a tower rising from the still waters of the cavern's central lake. Halls lit by glass lanterns and etched mirrors said to glow faintly when truth is spoken nearby. They record what others bury and lend their scribes to powerful patrons who prefer discretion. Count Alren, the last of his line, is a careful and patient man whose loyalty lies in silence."
      },
      {
        name: "Lanvar", circle: "1st Circle", circleTag: "gold",
        motto: "Through Subtlety, Dominance", sigil: "-", sigilTag: "",
        power: "Dealmaking; alliance brokering",
        members: "Lady Vesrin Lanvar, current matriarch.",
        disposition: "Perpetual junior partner",
        notes: "Eternal deal-brokers; rarely act alone."
      },
      {
        name: "Sadin", circle: "1st Circle", circleTag: "gold",
        motto: "Steel Tempered, Oaths Unbroken", sigil: "-", sigilTag: "",
        power: "Military; honorable service",
        members: "Lord Commander Thrain Sadin, current patriarch, views politics as a necessary evil..",
        disposition: "Honor-bound",
        notes: "Military and honor culture. Produce more officers, military commanders, and security specialists than any other Great House and control the majority of the capitol's and guilds weapon forges and armor workshops. In the Great Game, Sadin plays as the house of reliability and direct action, which makes them predictable but also invaluable when agreements need enforcement or protection needs guaranteeing. Sadin appears easy to outmaneuver in complex schemes but dangerous to cross directly because they respond to threats with straightforward violence rather than counter-intrigue. Younger Sadin are beginning to question whether old codes of honor serve in a game increasingly dominated by information and economics rather than martial prowess, creating internal tension the house struggles to resolve. Other houses alternate between respecting Sadin's integrity and exploiting their predictability."
      },
      {
        name: "Vostin", circle: "1st Circle", circleTag: "gold",
        motto: "We Endure the Depths", sigil: "-", sigilTag: "",
        power: "Deep mining monopoly",
        members: "Duke Garren Vostin, an old man with a scarred face and missing fingers,",
        disposition: "Essential; leverage via resources. Philosophy: power comes from doing essential work others cannot or will not do.",
        notes: "House Vostin are the practical power players who care nothing for courtly graces and everything for controlling the literal foundations of Avar's existence. They hold the deepest mining contracts, pioneered the expansion techniques that allowed the capitol to grow beyond its original caverns, and understand the stone better than any other house. In the Great Game, Vostin plays as the house everyone needs and no one can replace, leveraging their expertise to extract favorable terms on everything from trade agreements to marriage alliances. They are blunt, uninterested in social climbing, and willing to tell other houses uncomfortable truths about structural realities. This makes them simultaneously essential and easy to underestimate until they choose to remind everyone that without Vostin expertise, the capitol cannot safely expand, and collapse becomes a real possibility. They wield this leverage carefully but absolutely."
      },
      {
        name: "Relkan", circle: "1st Circle", circleTag: "gold",
        motto: "Coin Flows, Power Follows", sigil: "-", sigilTag: "",
        power: "Imperial banking",
        members: "Matron Selyse Relkan, a woman in her sixties.",
        disposition: "Creditor to all",
        notes: "House Relkan established the Merchant's Consortium (and variety of charters that went with it), the banking operations, and the majority of liquid capital in the capitol. They understand that everything has a price and that knowing that price before others do is its own form of power. In the Great Game, Relkan plays as the house that finances everyone else's ambitions and collects when circumstances shift. They are patient creditors who will extend generous terms to rising houses and quietly acquire assets from declining ones. Relkan believes in investment over inheritance, arguing that static wealth dies while flowing capital grows and creates dependencies. This philosophy has made them rich and mistrusted in equal measure. Every Great House owes Relkan favors or money or both. This makes Relkan seemingly weak in direct confrontation but terrifyingly powerful when they choose to call in debts or withdraw financial support at critical moments."
      },
      {
        name: "Velthara", circle: "1st Circle", circleTag: "gold",
        motto: "What Was Lost, We Remember", sigil: "-", sigilTag: "",
        power: "Pre-cataclysm relics; surface expeditions",
        members: "Count Erivan Velthara, melancholic scholar.",
        disposition: "Relic hunters; surface-focused",
        notes: "Organize surface expeditions. Control access to pre-cataclysm artifacts."
      },
      {
        name: "Rayne", circle: "1st Circle", circleTag: "gold",
        motto: "By Hammer and Covenant", sigil: "-", sigilTag: "",
        power: "Infrastructure; trade routes; arbitration",
        members: "Rayne Borim Rayne, current patriarch, traditionalist.",
        disposition: "Neutral arbiters",
        notes: "House Rayne holds the contracts for maintaining the capitol's critical infrastructure: ventilation systems, water channels, structural supports that prevent collapse. They are engineers and architects whose expertise keeps the city functional and whose withdrawal of services could be catastrophic. In the Great Game, Rayneplays as the house of binding commitments and neutral arbitration, positioning themselves as the only house whose word can be absolutely trusted because violating it would destroy their fundamental value. This makes them sought after as mediators and guarantors but also makes them inflexible when other houses seek to renegotiate terms. Rayne accumulates power through accumulated obligations: every house needs infrastructure maintenance, and Rayne ensures that those who honor agreements receive priority service while those who break faith find themselves waiting for critical repairs. The house considers political maneuvering a dance."
      },
      {
        name: "Calder", circle: "1st Circle", circleTag: "gold",
        motto: "The Silent Depths Know All", sigil: "-", sigilTag: "",
        power: "Intelligence networks",
        members: "Lord Severan Calder.",
        disposition: "Rivals Korvath",
        notes: "House Calder operates the capitol's intelligence networks, courier systems, and information exchanges with the same openness other houses apply to trade or warfare. They are professional spymasters who have made discretion and information brokerage their public business rather than pretending to be something else. In the Great Game, Calder plays as the house that knows everyone's secrets and trades them carefully, maintaining elaborate networks of informants, blackmail material, and compromising information. They accumulate power through knowing what others wish to hide and deploying that knowledge with strategic precision. Calder teaches its children that secrets have lifecycles, that timing is everything, and that the house controlling when information becomes public holds more power than the house that information concerns. They maintain neutrality on most political conflicts while ensuring all sides pay for intelligence, making them simultaneously indispensable and deeply mistrusted. Every house fears what Calder knows about them. This fear is Calder's primary asset. House Calder tends to have a rivalry with house Korvath."
      },
      {
        name: "Korvath", circle: "1st Circle", circleTag: "gold",
        motto: "What Must Be Done, We Do", sigil: "-", sigilTag: "",
        power: "Assassination; enforcement",
        members: "Duke Marten Korvath, cold methodical man.",
        disposition: "Rivals Calder",
        notes: "House Korvath operates in the shadows of the Great Game, specializing in problems that require permanent solutions delivered discreetly. They maintain networks of enforcers, assassins, and operatives who handle the unpleasant necessities other houses prefer not to acknowledge publicly. In the Great Game, Korvath plays as the house that makes inconvenient people disappear, destroys reputations beyond repair, and ensures certain secrets die with those who know them. They are expensive, utterly discreet, and have never been proven to have committed any of the acts attributed to them despite widespread knowledge of their function. Korvath accumulates power through reputation and fear: other houses know that crossing Korvath means risking not political defeat but physical elimination, which makes even powerful houses negotiate rather than confront. The house maintains plausible deniability while ensuring everyone understands exactly what services they provide. They are never invited to social functions but always included in serious political calculations.House Korvath tends to have a rivalry with house Calder."
      },
      {
        name: "Branneth", circle: "1st–2nd Circle", circleTag: "gold",
        motto: "The Flame That Does Not Fade", sigil: "-", sigilTag: "",
        power: "Church; Inquisition pipeline",
        members: "Lady Meriath Branneth, current matriarch, devout.",
        disposition: "Church-aligned",
        notes: "House Branneth maintains close ties to the Church and the Inquisition, positioning themselves as the Great House most aligned with ecclesiastical authority. They produce more priests, inquisitors, and religious scholars than any other house and hold significant influence over the interpretation of doctrine and the application of religious law. In the Great Game, Branneth plays as the house that can invoke divine authority and Inquisitorial support, making accusations of heresy or doctrinal violation that other houses must take seriously regardless of their truth. This makes Branneth dangerous to oppose directly but also limits their maneuvering room since overt political scheming damages their religious credibility. They accumulate power by being the house other houses approach when they need ecclesiastical approval, religious justification for territorial claims, or Inquisitorial investigation of rivals. Branneth balances genuine piety with calculated political use of religious authority, creating internal tensions between true believers and pragmatic operators within the house."
      },
      {
        name: "Mournen", circle: ["1st / 6th Circle", "6th Circle (dynastic)"], circleTag: ["gold", "blue"],
        circleSub: "Prevalent in the Capital; tied to Zen'tar dynastically",
        motto: '"Heavy Doth the Crown"', sigil: "Red Fist", sigilTag: "red",
        power: "Zen'tar dynastic control; cadet branch = Order of the Blue Fist",
        members: "Duke (deceased); Prince (missing, ~23-24 yrs old)",
        disposition: "Retreated from Capital politics; bound to the city",
        notes: "The House of Mournen has an original branch, from which the Duke originated, and a cadet branch (Order of the Blue Fist, not associated with the priesthood). After a falling out in the Capital, the Duke withdrew to Zen'tar itself, sending delegates on his behalf. The Mournen are tied to the city dynastically. Duke's death (Year 618) left the Prince missing and the city in crisis."
      },
      {
        name: "[Name Stricken]", circle: "1st Circle — EXPUNGED", circleTag: "red",
        motto: "-", sigil: "EXPUNGED", sigilTag: "red",
        power: "Led the Great Schism",
        members: "Bloodline ended; lands redistributed",
        disposition: "Attempted to assert noble dominance over Church",
        notes: "Fell during the Great Schism in the years of the Great Martyred Lady. The moment nobles realized the Inquisition was in charge. When the church asserted its authority, the cogs that operated... Erased as a lesson."
      },
      {
        name: "[Records Sealed]", circle: "1st Circle — EXPUNGED", circleTag: "red",
        motto: "—", sigil: "EXPUNGED", sigilTag: "red",
        power: "Unknown",
        members: "Bloodline ended",
        disposition: '"Direct opposition to the Church\'s mandate"',
        notes: "Details sealed by Inquisitorial decree. Fell to the Inquisition for reasons described only as opposition to the Church's mandate. Speculation about their specific crimes is considered unwise and potentially dangerous."
      },
    ],
    cadet: [
      {
        name: "Domitae", circle: "3rd Circle", circleTag: "blue",
        circleSub: "Influence into 4th/5th; 1st Circle via Secus/Khol marriage",
        sigil: "Dextra / Sinetra (right/left divisions)", sigilTag: "grey",
        power: "3rd circle noble influence; mineral wells (4th circle)",
        members: "Father: Magus; Mother: Julia. Secus (2nd child, married into Khol). Decima (10th child, heretic).",
        disposition: "Quiet expansion through marriage and resource control",
        notes: "Secus married into House Khol; is hypothesized to be organizing a coup of Zen'tar's regency. Quartus runs a 4th circle mineral well."
      },
      {
        name: "Maelis", circle: "3rd Circle", circleTag: "blue",
        circleSub: "Capital-area noble house",
        sigil: "Elven symbol (right shoulder)", sigilTag: "grey",
        power: "3rd circle noble house; elven connections",
        members: "Unknown",
        disposition: "Actively destabilizing Zen'tar succession",
        notes: "Aids Da'varre, Lanvar, and Sadin. High elf representative seen circling the Duke's funeral. Wants succession contested."
      },
      {
        name: "Morren", circle: "Unknown", circleTag: "grey",
        circleSub: "Selka operates in 6th (Zen'tar mines)",
        sigil: "-", sigilTag: "",
        power: "Auditor position; formerly merchant-guild aligned",
        members: "Selka Morren (Lady Factor, Auditor)",
        disposition: "Leverage via auditing authority",
        notes: "Deal made by \"Clandet Morren.\" Selka holds unique authority: full immunity in the Yearning Mines. Accused by Marshall of using a heretic. The nobles' only window into mine operations."
      },
      {
        name: "Voss", circle: "Unknown / Pre-cataclysm", circleTag: "grey",
        sigil: "Burn-mark sigil (Proto-Elvish Fragment 8C)", sigilTag: "red",
        power: "Unknown - appears in Fragment 8C",
        members: "Unknown",
        disposition: "Possible internal sabotage / containment breach (pre-cataclysm era)",
        notes: "Sigil appears on Fragment 8C discussing dwarven portal relocation. Suggests a proto-elvish house involved in inter-dimensional activities before the Cataclysm."
      },
      {
        name: "Gulfen / Trinton", circle: "Unknown", circleTag: "grey",
        circleSub: "Named only in heraldry discussion",
        sigil: "Trident variant", sigilTag: "blue",
        power: "Unknown",
        members: "Unknown",
        disposition: "—",
        notes: "Two noble houses with trident heraldry. The trident sigil appears on the stronghold Ryo glimpsed inside the Wyrm's mindscape."
      },
    ]
  },

  // Organizations grouped by category
  orgs: {
    criminal: [
      {
        name: "Consortium / Concierge", circle: "6th Circle", circleTag: "blue",
        type: "Criminal Syndicate", typeTag: "red",
        sigil: "Elven sigil of Mithris",
        members: "Mithris (founder, dead); Caldun (enforcer)",
        notes: "Multi-level criminal network including Blue Pirates. Sought awakened metals, artifacts, political leverage. Fractured after Mithris's death (~Year 625). The oilcloth package passed to Caldun almost certainly contained the green ledger."
      },
      {
        name: "Blue Pirates", circle: "6th Circle", circleTag: "blue",
        type: "Criminal / Paramilitary", typeTag: "red",
        sigil: "Blue Maritime Motif",
        members: "Mithris (deceased); current leader unknown",
        notes: "Controls lower harbor and certain Zen'tar districts. Hate Arthur Augustus. Largely fractured post-Mithris. The Sunken Croc is their front."
      },
    ],
    military: [
      {
        name: "Militarum", circle: "Empire-wide", circleTag: "gold",
        type: "Military", typeTag: "gold",
        sigil: "Colored armbands by rank/unit",
        members: "The Marshall (Zen'tar); Colonel Zahn",
        notes: "Official Vo'dyn military. Controls outer walls and Yearning Mines in Zen'tar. Martial law declared with 7th Fleet's arrival."
      },
      {
        name: "7th Fleet (The Martyr)", circle: "6th Circle (docked)", circleTag: "blue",
        type: "Naval", typeTag: "blue",
        sigil: "Sigil of Him on each ship",
        members: "Admiral Galewind; Commodore Sal'vin (Hell's Fury)",
        notes: "Most storied fleet - survived the Cataclysm. The Martyr is the flagship (600+ years old, pre-cataclysm galleon). Under Nautica Liticus. Unexpected arrival triggered martial law."
      },
      {
        name: "Penal Outriders / Penitant Deathriders", circle: "6th Circle+", circleTag: "blue",
        type: "Penal Military", typeTag: "grey",
        sigil: "Gray banner, crimson red drops; bone-white helmets",
        members: "Founded from the legacy of Ser Gavriel Val'Tan",
        notes: "Each rider earns one unread pardon for an impossible charge. Recite oath at Gavriel's plinth before each mission. Seen in Zen'tar for the first time in decades."
      },
      {
        name: "Militia", circle: "6th Circle", circleTag: "blue",
        type: "Ad-Hoc City Levy", typeTag: "grey",
        sigil: "-",
        members: "Zenzar/Xanthran (leader, missing ~7 years)",
        notes: "City levy of Zen'tar. Non-functional since Zenzar vanished. Nobody could replace him. Secus Domitae is now trying to purchase Zenzar for a coup."
      },
      {
        name: "Order of the Blue Fist (House Bluefist)", circle: "1st Circle", circleTag: "gold",
        type: "Military Order / Noble House", typeTag: "gold",
        sigil: "Blue Fist / Blue Hand Glove with Crest",
        members: "Hathor (Military Adjudicant); Ulric Ironfist (associated)",
        notes: "Cadet branch of House Mournen. Not associated with priesthood. Hathor may be the masked Establishment Leader who arranged Zenzar's sale to Secus."
      },
    ],
    religious: [
      {
        name: "Inquisition", circle: "Empire-wide", circleTag: "gold",
        type: "Religious Enforcement", typeTag: "red",
        sigil: "Rosettes (new: magic-key; old: engraved power) / Brown Robes",
        members: "Rarik Ville (inquisitor in Zen'tar)",
        notes: "Enforce tithe, suppress heresy. Can execute anyone regardless of noble status. Sub-branch: Witchers. The Bazaar is one of their few directly governed mixed-race locations."
      },
      {
        name: "Luminary Council", circle: "2nd Circle HQ", circleTag: "gold",
        type: "Arcane Authority", typeTag: "purple",
        sigil: "Secreted membership sigil",
        members: "Archmage Liora; formerly Relyssa Daen (disgraced)",
        notes: "Leading authority on magical theory. Rumored founded by the Great Martyred Lady. Secreted membership. Offshoot chapter (Society of Brilliance) active in Zen'tar."
      },
      {
        name: "Auditors", circle: "Empire-wide", circleTag: "gold",
        type: "Imperial Oversight", typeTag: "gold",
        sigil: "—",
        members: "Selka Morren (6th Circle)",
        notes: "Noble-appointed oversight body. Full immunity inside Yearning Mines — the only check on the Marshall's authority there beyond the head of city (currently absent)."
      },
    ],
    paladin: [
      {
        name: "Order Kronos", circle: "Unknown / Church-associated", circleTag: "grey",
        type: "Paladin Order", typeTag: "purple",
        sigil: "Clear Blank Crest",
        members: "Unknown",
        notes: "Possesses oathblades. Extremely reclusive — recently withdrawn and less active externally."
      },
      {
        name: "Order of the Flame", circle: "Unknown / Nearly wiped out", circleTag: "grey",
        type: "Paladin Order", typeTag: "purple",
        sigil: "Pendant (glows near great evil)",
        members: "Aldred (one of the only survivors)",
        notes: "Neutral paladin order. Possessed 4 oathblades. Was eradicating the Aperations. Aldred entered the pentagram first — the only survivor, woke with sword bloodied, amulet glowing red."
      },
      {
        name: "Order of the Rose", circle: "Unknown / Covert", circleTag: "grey",
        type: "Covert Intelligence Order", typeTag: "purple",
        sigil: "Rose-sealed wax orders",
        members: "Crane (master, dead — killed by Caldun); Artemis (operative, now with party)",
        notes: "Hidden order operating on the 'scaffolding' philosophy. Caldun broke from fighting Arthur mid-combat specifically to kill Crane. Motto: 'We're not heroes. We're scaffolding.'"
      },
      {
        name: "The Aperations", circle: "Unknown / Eradicated wherever found", circleTag: "grey",
        type: "Cult", typeTag: "red",
        sigil: "Pentagram association",
        members: "Unknown",
        notes: "Cultist order being eradicated by Order of the Flame. Connected to a dark entity."
      },
    ],
    civil: [
      {
        name: "City Guard / Magistrate", circle: "6th Circle only", circleTag: "blue",
        type: "Civil Policing", typeTag: "gold",
        sigil: "—",
        members: "Garth (Deputy Sergeant); Arthur Augustus (Major Investigator)",
        notes: "Keeps peace. Noble-funded. Suffered a terrorist attack and reeling. Reports to noble faction."
      },
      {
        name: "Investigators (4th Wing)", circle: "6th Circle only", circleTag: "blue",
        type: "Intelligence / Investigation", typeTag: "gold",
        sigil: "—",
        members: "Arthur Augustus (Major); Lantis (Junior, missing/likely dead); Boltin Crestfyre (Lt.)",
        notes: "Ad hoc unit within Zen'tar. Not a formal Vo'dyn institution. Do not touch merchants (Charter of Commerce)."
      },
      {
        name: "Council of Regency", circle: "6th Circle only", circleTag: "blue",
        type: "Political", typeTag: "gold",
        sigil: "—",
        members: "Unknown members; Selka Morren (Auditor appointee)",
        notes: "Rules Zen'tar after the Duke's death. Short-term focused. Possibly involved in the Duke's death. Struggling to hold authority with martial law in effect."
      },
      {
        name: "Dustwalkers", circle: "Inter-circle routes", circleTag: "gold",
        type: "Military / Guard", typeTag: "grey",
        sigil: "—",
        members: "Unknown",
        notes: "Guards in iron robes, silent and still. Patrol tunnel routes between circles."
      },
    ]
  },

  // NPCs grouped by origin/importance category
  npcs: {
    capital: [
      {
        name: "Midas Khol", circle: "1st Circle", role: "Head of House Khol", allegiance: "House Khol; personal long game",
        sigil: "Four-Leaf Clover", status: "Alive",
        notes: "Covert operator. Old adventuring friends with the late Duke. Biological father of Mithe (known only to Midas). Gave Valerian the hourglass pendant at the Duke's funeral: 'I'll keep the hourglass turning.'"
      },
      {
        name: "Duke of Zen'tar", circle: "1st Circle seat / 6th domain", role: "Former ruler of Zen'tar", allegiance: "House Mournen",
        sigil: "Red Fist", status: "Dead (Year 618)",
        notes: "Brought Zen'tar to prominence. Found or obtained the green ledger — possibly killed for/by it. No viewing at his funeral. The Council of Regency is suspected to have had something to do with his death."
      },
      {
        name: "The Prince", circle: "1st Circle heir", role: "Missing heir of Zen'tar", allegiance: "House Mournen",
        sigil: "—", status: "Missing ~7 years",
        notes: "Disappeared ~same time as Zenzar (militia leader). Midas sent Valerian to watch him. Overheard in Session 3: 'The prince will be secured.' Nobody has seen him."
      },
      {
        name: "Valerian Than'dal", circle: "Unknown", role: "Knight; Midas's agent", allegiance: "House Khol / Midas",
        sigil: "Hourglass pendant (given by Midas)", status: "Alive; location unknown",
        notes: "Assigned by Midas to watch the Prince at the Duke's funeral. Received the hourglass pendant."
      },
      {
        name: "Count Alren Da'varre", circle: "1st Circle", role: "Head of House Da'varre; last of the line", allegiance: "House Da'varre; possibly Mithe",
        sigil: "Glass Prism", status: "Alive (reportedly)",
        notes: "Last known blood of a lost Original 12 house. Lost his children, brother Alden, nieces. His last letter: 'loyalties I cannot speak of' and 'the still water.' Legal guardian of Mithe."
      },
      {
        name: "Hathor", circle: "1st Circle / posted to 6th", role: "Military Adjudicant; possibly masked Establishment Leader", allegiance: "Order of the Blue Fist / House Mournen",
        sigil: "Blue hand glove with crest", status: "Alive; active in Zen'tar",
        notes: "Encountered on the caravan road: 'We know and saw the enemy, ash and dust.' The masked Establishment Leader in Session 5 — who arranged Zenzar's sale to Secus — is likely Hathor."
      },
      {
        name: "Secus Domitae", circle: "1st Circle (via Khol marriage)", role: "Coup organizer", allegiance: "House Khol; personal ambition",
        sigil: "—", status: "Alive; active in Zen'tar",
        notes: "2nd child of House Domitae. Trained in cloak-and-dagger. Married into House Khol. Organizing a coup of Zen'tar's Council of Regency. Purchasing Zenzar. Branded Decima in Session 5."
      },
    ],
    zentar: [
      {
        name: "Arthur Augustus", circle: "6th Circle", role: "Major Investigator", allegiance: "Nobles / Magistrate",
        sigil: "—", status: "Alive; crippled (legs)",
        notes: "Noble-born. Killed Mithris ~Year 625 in single combat; cost him the use of his legs. Blue Pirates fractured after that night. Target of 'next hit prince loyalists and Arthur' (Secus, Session 5)."
      },
      {
        name: "Garth", circle: "6th Circle", role: "Deputy Sergeant in Arms", allegiance: "Magistrate / whoever holds power",
        sigil: "—", status: "Alive",
        notes: "'Keeps his job regardless of who holds power.' Wants to impress 'first circlers.' Sided with the nobles over the Marshall's mine jurisdiction."
      },
      {
        name: "Lantis", circle: "6th Circle", role: "Junior Investigator", allegiance: "Arthur / Magistrate",
        sigil: "—", status: "Missing; likely dead",
        notes: "Half-elf. Good heart; commoner background. Frequented the Sunken Croc. The Marshall was in contact with him — suspicious. Possibly Mithris's child (player theory)."
      },
      {
        name: "Rarik Ville", circle: "6th Circle (Inquisitor)", role: "Head Justice / suspected Inquisitor", allegiance: "Church / Inquisition",
        sigil: "Brown robes", status: "Alive; escorted to back chambers",
        notes: "Seen as a child (~age 9) in Session Knavers time-jump from Sister Erithine's orphanage. 'Just trying not to die.' Testified on behalf of the ecclesiastical church at Decima and Ryo's court session."
      },
      {
        name: "The Marshall", circle: "6th Circle", role: "Military commander; controls Yearning Mines", allegiance: "Vo'dyn / allegedly tied to a noble house",
        sigil: "—", status: "Alive; active",
        notes: "Controls the Special Military Zone (Yearning Mines). Uses colored orb + glass spindle for interrogations. Fiddles with red, yellow, purple marbles. Has Aldred's crest. Appears conflicted — 'his body protests.'"
      },
      {
        name: "Selka Morren", circle: "6th Circle", role: "Lady Factor / Auditor", allegiance: "House Morren / Nobles",
        sigil: "—", status: "Alive; active",
        notes: "Full immunity inside the Yearning Mines. Nobles' only window into mine operations. Accused by Marshall of 'using a heretic.' Kane has been cultivating a relationship with her."
      },
      {
        name: "Zenzar / Xanthran", circle: "6th Circle", role: "Former Militia leader", allegiance: "Zen'tar city (formerly)",
        sigil: "—", status: "Missing ~7 years; being sold to Secus",
        notes: "Disappeared ~same time as the Prince. Nobody could replace him. Found by N'thoda in underground fighting arenas. Being auctioned to Secus by the masked Establishment Leader."
      },
      {
        name: "Mithris", circle: "6th Circle", role: "Consortium founder", allegiance: "Consortium / Self",
        sigil: "Elven sigil (right shoulder)", status: "Dead (~Year 625)",
        notes: "High elf. Ran the Consortium. Passed an oilcloth-wrapped package (almost certainly the green ledger) to Caldun before Arthur's raid. Arthur killed him in single combat at the cost of his own legs."
      },
      {
        name: "Caldun", circle: "6th Circle", role: "Consortium enforcer; possible ledger-holder", allegiance: "Consortium (fractured)",
        sigil: "Mithris's elven sigil", status: "Alive; at large",
        notes: "Elvish name meaning 'weapon.' Trained from childhood as a weapon. Holds the oilcloth package (green ledger?). Broke from fighting Arthur to kill Crane — the Order of the Rose was a high-priority threat."
      },
      {
        name: "Artemis", circle: "6th Circle", role: "Order of the Rose operative", allegiance: "Order of the Rose",
        sigil: "—", status: "Alive; traveling with party",
        notes: "Big, scarred, strong. Crane's apprentice. Has been searching for the oilcloth materials for 8 years. Interested in the green book symbol in the meteorite room. Motto: 'We're not heroes. We're scaffolding.'"
      },
      {
        name: "Volk Stormhammer", circle: "6th Circle", role: "Senior non-penal dwarf miner", allegiance: "Himself / Dwarven tradition",
        sigil: "—", status: "Alive",
        notes: "Old. Non-penal worker in the Yearning Mines. Confirmed dwarven lore: forefathers 'vowed to never speak' of another world. Gets excited around the ancient machines. Seen having tea with the Veinwarden."
      },
      {
        name: "Boltin Crestfyre", circle: "6th Circle", role: "Lt., 4th Investigative Enforcement Wing", allegiance: "Nobles / Magistrate",
        sigil: "—", status: "Alive; active / suspicious",
        notes: "Watched the O'Malley ambush without intervening. Heard the codeword 'Dagger' from the assassins. Now accusing the party of starting the fight. Possible corrupt noble influence."
      },
      {
        name: "Oral Oxthain", circle: "Unknown", role: "Veinwarden", allegiance: "Yearning Mines",
        sigil: "—", status: "Alive",
        notes: "Likely the head of the mine's trustee system (the 'Overman Jar'). Seen having tea with Volk Stormhammer after party was released from interrogation."
      },
    ],
    historical: [
      {
        name: 'Ser Gavriel Val\'Tan ("Him")', era: "Pre-Capital / ~Year 0",
        role: "1st Martyr (theorized)", sigil: "Plinth at The Spur",
        notes: "Sacrificed himself at Basalt Ridge so Vo'dyn could survive the Cataclysm. Said: 'I see the wound that drinks the names of kings.' Buried beneath The Spur. Penal Outriders trace their oath to him."
      },
      {
        name: "The Evening Star", era: "~Year 1-25",
        role: "2nd Martyr", sigil: "—",
        notes: "Led the survivors underground. 'Stood between them and the truth.' Founded the Inquisition through blood and prayer. Possibly also the Warden of the Deep (player theory)."
      },
      {
        name: "Great Martyred Lady", era: "~Year 452",
        role: "4th Martyr", sigil: "—",
        notes: "Died on Martyr's Day. Used magic at great cost. During her era the Great Schism occurred — when the Church asserted dominance over the nobles; one Great House was expunged. Possibly founded the Luminary Council."
      },
      {
        name: "Jorell", era: "~Year 2-24 (journals)",
        role: "5th Martyr", sigil: "Crimson red eyes",
        notes: "Established Avar's capital at 'the thinnest point.' Spent 19 years binding himself to eternal watching of the seal beneath. Struck his name from all records."
      },
      {
        name: "The Quiet Architect (K)", era: "Ancient / Ongoing",
        role: "Ancient interventionist", sigil: "Hourglass; Staff of the Magi",
        notes: "Has gone by many names across history. Carries an hourglass. Has intervened before, in other places, in other times. Warned by The Witness: 'observation, not orchestration.' Theorized to be the Prophet / Final Chronicler."
      },
      {
        name: "The Prophet (Wanderer)", era: "Unknown / Transplanar",
        role: "Ancient seer; gave party the ledger", sigil: "Deep midnight blue cloak, glowing stars; Staff of the Magi",
        notes: "Appeared in Velderra (one-shot). Gave the party the green ledger. No record of ascension. Theorized to be the Quiet Architect (K) and the Final Chronicler."
      },
      {
        name: "Warden of the Deep", era: "Pre-civilizational / Sub-6th",
        role: "Ancient guardian of the Shard", sigil: "Wears a mask; large humanoid; emerged from pool in The Abyss",
        notes: "'I am the hinge that keeps the broken heavens closed.' 'Duty bound to He who stood for us.' Sees corruption in all party members: 'You are all potential vessels.' Has cast off the chains of whatever bound him."
      },
    ],
    entities: [
      {
        name: "Ryo's Wyrm", nature: "Pre-civilizational ancient entity; resides inside Ryo via a severed finger",
        status: "Active",
        notes: "Crimson red eyes. Stronghold in his mindscape: trident, white/red, and lapis lazuli banners. 'Finally, after millenia, I have found a suitable one.' Claims to have saved Ryo from concentrated power. 'I do not serve, I rule.'"
      },
      {
        name: "Fate (entity)", nature: "Primordial force; featureless figure with stars for eyes",
        status: "Dead? ('I knew Fate once. She was killed.')",
        notes: "Encountered by the party in Session Knavers. The green ledger appeared first, dissolved, replaced by Fate. Party asked 'Why is fate so cruel?' — entity replied 'I am fate, aren't I?' The Quiet Architect appears to have loved Fate."
      },
      {
        name: "The Dav Ki", nature: "Pre-human civilization; ancient builders",
        status: "Ancient / ruins remain",
        notes: "Built strongholds to contain deep nightmares. Their volatile ore technology is the 'secret of Dav Ki.' The Yearning Mines are built on their ruins."
      },
      {
        name: "The Urd", nature: "Cosmic parasite / hunger",
        status: "Resurfacing (Dwarven Report, Year 622)",
        notes: "'Not spiders, not exactly — more like a hunger that learned to build webs.' Brought from another world by Dark Elves. A symptom, not the cause, of the Cataclysm. May be parasitic forces living inside cognition and memory."
      },
    ]
  },

  // Player characters
  players: [
    {
      name: "Mithe Demacia Khol", echo: "BLOOD", race: "Half-Elf", cls: "Bard", age: "19", height: "5'6\"",
      origin: "1st Circle (raised Capital / Da'varre); now 6th Circle",
      appearance: "Left eye whites permanently blackened from a failed arcane alteration.",
      bio: "Bastard daughter of Midas Khol and elven mage Lux. Raised as a ward of House Da'varre under Count Alren. Imprisoned at 19 after an assassination attempt on Midas following Lux's death from entropic decay. Educated in nobility, politics, and healing. Father is Midas (alive; known only to Midas). Legal guardian is Alren Da'varre.",
      connections: "Father: Midas Khol (secret). Guardian: Count Alren Da'varre. Mother: Lux (high elf mage, deceased).",
      echoBg: "#8b1a1a"
    },
    {
      name: "Ryo Dayana", echo: "KEY", race: "Human", cls: "Sorcerer", age: "21", height: "5'9\"",
      origin: "8th Circle origin (Bandlewoods farm); now 6th Circle",
      appearance: "Slight red marks in mostly black hair; faint black markings on face.",
      bio: "Former farmer and self-professed historian. Found an ancient entity's severed finger in a chimera's mouth — absorbing it awakened him as a sorcerer. The Wyrm inside him needs a 'suitable host.' Carries an obsidian key-spline (3 triangle notches) and a partial mural rubbing. Being chased by a branch of the Inquisition.",
      connections: "Hunted by branch of the Inquisition. Obsidian key-spline (3 triangle notches). Partial mural rubbing: 'Weaver's Arch,' 'IV:3,' 'Westwell 2nd,' trident sigil.",
      echoBg: "#2a4a7f"
    },
    {
      name: "Decima Domitae", echo: "VEIL", race: "Human", cls: "Sorcerer", age: "Early 20s", height: "5'2\"",
      origin: "3rd Circle (Domitae); now 6th Circle — uses alias Delattre",
      appearance: "Eyes originally green, now unnaturally pale — blind.",
      bio: "10th child of House Domitae. Lost her sight and speech upon waking with an entity from another plane eating her memories. Made a deal she doesn't remember. Became a heretic after beloved sister Nona disappeared into the clergy. Researched 'changing Fate.' Read the Wyrm's apprentice's tome. Branded by brother Secus. Holds herself regally.",
      connections: "Brother: Secus Domitae (House Khol). Sister Nona (possibly killed by Velintra). Father: Magus. Mother: Julia.",
      echoBg: "#4a2a7f"
    },
    {
      name: "Velintra Caelmyr", echo: "MASK", race: "Dark Elf / Owlin", cls: "Rogue", age: "27 (human years)", height: "5'8\"",
      origin: "Outside standard circle structure",
      appearance: "Crimson red eyes. Long snow-white hair in braids with garnet and silver pendants.",
      bio: "Member of a dark elf guild that tortures and kills. Confident, well-poised, strong moral code in specific areas. Possibly responsible for the death of Nona Domitae (Decima's sister). Connected to the high-elf/dark-elf war era. Knocked Ryo and Decima unconscious during the Wyrm encounter.",
      connections: "Dark elf guild (unknown name). Resembles Sister Erithine. Recognized someone in the burning-village time-vision.",
      echoBg: "#2a4a2a"
    },
    {
      name: "Kane Vestrist Forscin", echo: "ECHO", race: "High Elf", cls: "Warlock", age: "100+", height: "—",
      origin: "Circle of origin unspecified",
      appearance: "High elf; ancient bearing.",
      bio: "Haunted by a shadowy entity — most likely his dead twin brother Able, puppeted by a vampire necromancer. Made a deal with an apparation upon witnessing his brother's death during the high-elf/dark-elf war. Doesn't trust dark elves. Has been cultivating a relationship with Selka Morren.",
      connections: "Twin brother Able (deceased, ~100 yrs ago during high elf/dark elf war). Made deal with an Apparation.",
      echoBg: "#4a3a1a"
    },
    {
      name: "Aldred", echo: "OATH", race: "Human", cls: "Paladin", age: "—", height: "—",
      origin: "Former Order of the Flame; circle unspecified",
      appearance: "Large; heavy silver armor.",
      bio: "Former paladin of the Order of the Flame, now likely possessed by a demon — does not appear to realize this. The only survivor of the pentagram incident, woke with sword bloodied and amulet glowing red. Doesn't remember why he was banished from the Order. Receives powers from God. The Marshall has his crest.",
      connections: "Former Order of the Flame. Marshall has his crest. Order possessed 4 oathblades.",
      echoBg: "#1a3a4a"
    },
    {
      name: "N'thoda", echo: "FLAME", race: "Human", cls: "Barbarian", age: "21", height: "6'2\"",
      origin: "6th Circle (Zen'tar underground arenas)",
      appearance: "Black hair; bruises and scars from underground fighting arenas.",
      bio: "Observant; fight-first mentality. Trying to learn more about the world. Was fighting Zenzar in the ring when the party found the former militia leader. Escaped the O'Malley scene through the sewers.",
      connections: "Found Zenzar in underground fighting arenas.",
      echoBg: "#7f2a0a"
    },
    {
      name: "Thog Mossass", echo: "ROOT", race: "Firbolg", cls: "Druid", age: "—", height: "—",
      origin: "Outer / Frontier (beyond circle classification) — aliases: Corvus, 'The Devil of 19B,' 'Saint of Spores'",
      appearance: "Patchwork of bark, twine, feathers, and moss. Face obscured by archaic plague helm. Carries a gnarled bough.",
      bio: "Classified by the Empire as a 'Pagan druid / Suspected eco-terrorist.' Frontier populations revere him as a 'virulent guardian.' Opened a diplomatic channel with Caldun. Currently sitting at the Drunken Dog Inn during the O'Malley crisis.",
      connections: "Diplomatic channel with Caldun. Empire classification: eco-terrorist.",
      echoBg: "#1a4a1a"
    },
  ],

  // Locations grouped by region
  locations: {
    zentar: [
      { name: "The Yearning Mines", zone: "Southwest; red-bordered zone", controller: "The Marshall (Special Military Zone)", notes: "Main export: Cobalt (blue and explosive when awakened). Penal colony. Pits of Hell spiral deep. Every 7th thump + silence on 4th-of-4th = warning signal. Meteorite chamber below with star map. 4 ancient entropic stabilizer machines." },
      { name: "The Abyss (sub-mine)", zone: "Sub-6th; deepest mine level", controller: "Warden of the Deep", notes: "'A room that hears itself. A single drop meets the lake and the ripples never finish.' Large pool. Fog curls. Cobalt absorbs magic. The Warden emerged here." },
      { name: "Meteorite Chamber", zone: "Sub-mine (past the ebony gate)", controller: "Unknown / Ancient", notes: "Natural meteorite — unheard of. Cylindric table with concave top. Star map on ceiling matching Mithe's pool visions. Three wall symbols: Green Book, Blue Scepter, Red Crown. Five masks in side hallway." },
      { name: "Merchant District", zone: "Central/North; white-bordered zone", controller: "Merchant Guilds / Hired mercenaries (contested)", notes: "Site of O'Malley's ambush and killing. Merchants kicking out magistrate; bringing their own mercenaries. Trebuchets, arbalests, and scorpions being assembled. Maestor Velitor disappeared." },
      { name: "Drunken Dog Inn", zone: "Intermediary District", controller: "Neutral", notes: "Party base. Lantis frequented here. Drinking competitions, poker, floor-level espionage. Thog is currently here during the Session 17 crisis." },
      { name: "Sunken Croc (Tavern)", zone: "Outskirts / Lower district", controller: "Consortium / Blue Pirates", notes: "Front for criminal operations. Drinking competition (Ryo), Decima's money loss, upstairs conspiracies. Secus met here with the masked Establishment Leader." },
      { name: "The Warf (Dockyards)", zone: "South / waterfront", controller: "Militarum / 7th Fleet (now)", notes: "7th Fleet docked here. Naval yellow flares fired from these waters. Arthur conducted his raid on Blue Pirates here years ago." },
      { name: "Ravenward Keep", zone: "East", controller: "'The Wardens' / Zentari 1st Regiment", notes: "Major fortification. 7th Fleet flagship anchors nearby." },
      { name: "Magistrate / City Guard Station", zone: "Upper District", controller: "City Guard / Nobles", notes: "Blood at the fortified door during Session 6. Arthur was inside with sword-cane drawn. 3-4 guards downed. Investigator Station is here." },
      { name: "AX42 Sanitarium", zone: "Outskirts", controller: "Unknown", notes: "Last known location of the disappearances. Syndicate Agents nearby on map." },
      { name: "The Spur", zone: "Southern wall of Zen'tar", controller: "Unguarded (sacred)", notes: "Bare stone plinth. Ser Gavriel Val'Tan buried beneath. Penal Outriders recite their oath here. 'The wound beneath the Spur has never truly slept.'" },
      { name: "Weaver's Arch", zone: "Zen'tar proper (ruined)", controller: "Ruined", notes: "Where the late Duke gave speeches before his death. Now broken stones and rock. Referenced in Ryo's partial mural rubbing." },
    ],
    empire: [
      { name: "Kholinar ('The Capital')", circle: "1st Circle", controller: "High Nobility; Vo'dyn Empire", notes: "Center of the empire. Jorell built the capital here at 'the thinnest point' so living civilization would press against the seal." },
      { name: "Gloamspire", circle: "1st Circle (Capital outskirts)", controller: "House Da'varre", notes: "Tower rising from a still cavern lake. Halls lit by glass lanterns and etched mirrors that glow when truth is spoken. Da'varre's archive and ancestral seat." },
      { name: "Basalt Ridge", circle: "6th Circle (Zen'tar Stronghold foundation)", controller: "Historical / Stronghold foundation", notes: "Where Gavriel's company held for 10 hours during the Cataclysm retreat. Ridge 'trembles on windless nights.' 'The wound beneath the Spur has never truly slept.'" },
      { name: "Principality of Al'tan", circle: "Outside Zen'tar / Independent", controller: "Mixed / Self-governing", notes: "One of only two mixed-race locations empire-wide. Small community of a few strongholds. Used as neutral meeting ground." },
      { name: "The Bazaar", circle: "6th Circle / Inquisition-controlled", controller: "Inquisition (direct governance)", notes: "The second of only two mixed-race locations in the empire. One of the few places directly governed by the Inquisition rather than a noble house." },
      { name: "Banmore Keep", circle: "10th Circle", controller: "Highlord Xzal", notes: "Edge of Avar. Xzal sealed a redacted report (Year 606 / 616) about unknown others beyond the borders who rebuffed contact and consumed every expedition." },
      { name: "Velderra", circle: "Surface world (pre-cataclysm)", controller: "Destroyed", notes: "Surface territory lost to the Cataclysm. Two moons (silver/gold), blue-white sun, red pulsing planet. Location of the one-shot. The Prophet gave the party the green ledger here." },
    ]
  },

  // Sigils and visual markers
  sigils: {
    confirmed: [
      { sigil: "Red Fist", assoc: "Duke of Zen'tar / House Mournen", circle: "1st / 6th Circle", seen: "Confirmed Session 5 (Lantis at Sunken Croc)", meaning: "Sigil of the late Duke. Used to identify loyalists and materials connected to Mournen's dynastic rule of Zen'tar." },
      { sigil: "Blue Hand Glove with Crest", assoc: "Hathor / Order of the Blue Fist", circle: "1st Circle", seen: "Session 2 — on Hathor", meaning: "Identifies Blue Fist members. Cadet branch of House Mournen. Military, not religious." },
      { sigil: "Elven Symbol (right shoulder)", assoc: "Mithris / Consortium; also House Maelis", circle: "6th Circle", seen: "Session 4 (cloaked figure); Session 5 (Caldun)", meaning: "Mithris's personal elven sigil. High-elf identifier. May overlap with Maelis." },
      { sigil: "Gray Banner / Crimson Red Drops", assoc: "Penal Outriders / Penitant Deathriders", circle: "6th Circle+", seen: "Referenced in lore; seen at Duke's funeral", meaning: "Bone-white helmets with rank scraped off. Oath taken at The Spur before missions." },
      { sigil: "Brown Robes + Rosette", assoc: "Inquisition", circle: "Empire-wide", seen: "Session 2 (road); Session Knavers", meaning: "Standard Inquisition field uniform. New rosettes have magic-key properties; older ones were engraved power symbols." },
      { sigil: "Sigil of Him (on ships)", assoc: "7th Fleet / Vo'dyn Empire religion", circle: "6th Circle (docked)", seen: "Session 14 — on every 7th Fleet ship", meaning: "Holy/imperial identifier of the highest order. Signals both religious and imperial authority." },
      { sigil: "Rose-Sealed Wax Orders", assoc: "Order of the Rose", circle: "Unknown / Covert", seen: "Referenced by Crane/Artemis", meaning: "Written mission orders sealed with a rose wax emblem. Only identifier of the secretive order." },
      { sigil: "Hourglass (pendant / staff)", assoc: "The Quiet Architect (K) / Midas Khol / The Prophet", circle: "Transplanar / 1st Circle", seen: "Session 16 (Midas to Valerian); Session Knavers (Ashen Warrior)", meaning: "Symbol of the Quiet Architect. Midas gave one to Valerian: 'I'll keep the hourglass turning.'" },
      { sigil: "Thorn Talisman", assoc: "O'Malley / Unknown faction", circle: "6th Circle", seen: "Session 16 — found on O'Malley's body", meaning: "Affiliation unknown. O'Malley's possession suggests possible allegiance beyond the merchant guild." },
      { sigil: "Four-Leaf Clover", assoc: "House Khol", circle: "1st Circle", seen: "House heraldry", meaning: "House Khol's identifying sigil. Symbol of prosperity and fortune." },
      { sigil: "Glass Prism", assoc: "House Da'varre", circle: "1st Circle", seen: "House heraldry; Gloamspire architecture", meaning: "Truth-telling association. The mirrors of Gloamspire glow when truth is spoken." },
    ],
    meteorite: [
      { marker: "Green Book", location: "Meteorite chamber wall (1st symbol)", meaning: "Luminescent. Feelings: regality, inevitability, loss. Label: 'Fate's Final Rest.'" },
      { marker: "Blue Scepter", location: "Meteorite chamber wall (2nd symbol)", meaning: "Label: 'Humanity's Unyielding Spirit.'" },
      { marker: "Red Crown", location: "Meteorite chamber wall (3rd symbol)", meaning: "Sadness, melancholy, anger, betrayal; also happiness, certainty, faith. Labels: 'The end of the Starborn.' / 'My sacrifice is your duty.' Mithe took -3 psychic damage touching it." },
      { marker: "Obsidian Mask (1st)", location: "Side hallway off meteorite chamber", meaning: "Ryo's key activates it: 'Before the first veil was woven, the universe was our anchor — and I was its guide.'" },
      { marker: "3rd Mask Reed", location: "Side hallway", meaning: "Comes out freely; thin charcoal line reads 'For the many masks you've worn throughout time.'" },
      { marker: "5th Mask Reed (key-shaped)", location: "Side hallway", meaning: "'For the life you left behind.' — used to unlock the exit door." },
    ],
    armbands: [
      { color: "Red armbands", location: "Magistrate attack (Session 6)", affil: "Attackers — suspected Brigans or Blue Pirates" },
      { color: "Green armbands", location: "Yearning Mines entrance (Cavers)", affil: "Lower mine guard rank" },
      { color: "Maroon armbands", location: "Yearning Mines (Cavers)", affil: "Mid-rank mine guards" },
      { color: "Darker armbands", location: "Yearning Mines (guards around Mithe/Ryo)", affil: "Higher authority; senior mine staff" },
      { color: "Silver armbands", location: "Interrogation (Session 12)", affil: "Guards who took Thog to be 'killed'" },
      { color: "Black armbands", location: "Interrogation (Session 12)", affil: "Marshall's personal guard; Rarik Ville's escorts" },
      { color: "Blue feather", location: "Merchant District checkpoint (Session 16)", affil: "Militarum guards at district boundary" },
    ]
  },

  // World lore and cosmology
  lore: [
    { concept: "The Wound", nature: "Ancient corruption beneath consciousness; pre-cosmic", connection: "= Abyss = Urd = Everfrost = Quiet/Silence = Mouths = Fog = Forgetfulness = Stain. DM confirmed equivalence.", status: "Sealed beneath Avar's capital. Seal straining as the hymn grows thin. Every 7th thump + 4th-of-4th silence signals its stirring." },
    { concept: "The Three Fundamentals + Entropy", nature: "Matter (resists), Energy (moves), Flux (changes). Fourth: Entropy.", connection: "Confirmed in machine panels in the Yearning Mines. Awakened Cobalt is the only thing that counters the Flux.", status: "'Entropy can only be delayed.' The four ancient machines in the mines enforce this delay via a 16-beat rhythm." },
    { concept: "The Veils", nature: "Metaphysical barriers woven over the Wound", connection: "Each likely created through a Martyr's sacrifice. The 16-beat machine rhythm preserves the veil via 'humanity's hymn.'", status: "Currently thinning. 'When it thinned and forgetting learned to sing, I was no maker, only a keeper.'" },
    { concept: "The Shard", nature: "Fragment of the Wound / broken heavens", connection: "The Warden keeps it sealed under the Yearning Mines. 'I keep the shard beneath the surface of our night.' Party are all 'potential vessels.'", status: "Contained. The Warden's jar metaphor: earth = walls, fog = fluid, cities settled like silt atop it." },
    { concept: "The Martyrs", nature: "Willing sacrifices who weave veils and become eternal watchers", connection: "1st = Gavriel; 2nd = Evening Star; 3rd = Unknown; 4th = Great Martyred Lady; 5th = Jorell; 6th-7th = Unknown.", status: "Possibly continue to exist as watchers on the Threaded Paths. United with The Witness's coalition against the Wound across spheres." },
    { concept: "The Primordials", nature: "Personified cosmic concepts (Oath/Law, Exile, Fate, Truth, Honor)", connection: "Appear in 'Echoes of the Veil.' Law wrote a Final Litany. Fate has been killed ('I knew Fate once. She was killed.').", status: "Oath/Law is the entity in crystal reliquary (SD-DeltaXi-HN). Exile exists 'beyond the margin.'" },
  ],

  // Key active plot threads
  threads: [
    { title: "The Ledger Trail", status: "UNKNOWN — Last confirmed: Caldun (oilcloth package)", detail: "Prophet gave it in Velderra to heroes who carried it to the Duke of Zen'tar — Duke killed for/by it — Mithris obtained it — passed to Caldun in oilcloth before Arthur's raid — explosion at warehouse — status unknown. The ledger is described as 'as primordial as the magic in the air.'" },
    { title: "The Coup Network", status: "Actors: Secus Domitae + masked Hathor + Blue Pirates + Militia (via Zenzar)", detail: "Secus (1st Circle via Khol marriage) is purchasing Zenzar (former militia leader) through a masked figure (likely Hathor) to intend a coup of the Council of Regency. Guild affairs: 'next hit prince loyalists and Arthur.' Multiple factions converging on the post-Duke power vacuum." },
    { title: "Midas's Long Game", status: "Operator: Midas Khol — Agents: Valerian Than'dal", detail: "Midas (old friends with the Duke) knew the Duke found something. Sent Valerian to watch the Prince. At the funeral: 'I'll keep the hourglass turning.' Possibly also behind the Order of the Rose (Crane/Artemis). Timeline accelerated by the Duke's death." },
    { title: "The Party's Possession Problem", status: "Affected: Ryo (Wyrm), Decima (unknown entity), Aldred (demon), Kane (vampired twin)", detail: "All four are haunted/possessed. The Wyrm inside Ryo apprenticed a Domitae — connecting it to Decima's family. All are 'potential vessels' per the Warden. Decima doesn't think Aldred realizes he is possessed." },
    { title: "The 7th Fleet's Arrival", status: "Commander: Admiral Galewind — Ship: The Martyr (flagship)", detail: "Unexpected. Pre-cataclysm ship. Nobody knows why they're here — including the Marshall's own spy. Carries 'Sigil of Him' on each vessel. Under Nautica Liticus. Triggered martial law upon arrival." },
    { title: "The Disappearances", status: "Pattern locations: Sanitarium — Yearning Mines — Merchant District — broader city", detail: "Missing: Ralph Alvarez (mines), Jonathan Wineford (mines), Lantis (investigator), Maestor Velitor (Guild Master), the Prince. Mine manifest discrepancy: 16 in ledger, 15 went down, 14 came back. Pattern mirrors Velderra: those who 'reach too far' are taken." },
  ],

  // Known timeline
  timeline: [
    { era: "Pre-cataclysm", event: "Velderra civilization flourishes on the surface. Two moons (silver/gold), blue-white sun, red pulsing planet. Magic flows freely. Dav Ki civilization flourishes underground. High-elf/dark-elf war. House Voss visible in proto-elvish Fragment 8C — involved in inter-dimensional activities." },
    { era: "~Year 0 (Cataclysm)", event: "The sky breaks. Scholars of Velderra 'reached through the veil' and the Urd came through. Reality frayed. Ser Gavriel Val'Tan ('Him') sacrificed himself at Basalt Ridge — held 10 hours with his company on the final day. The 7th Fleet descended. The Vo'dyn devout fled underground, seizing the ruins of the Dav Ki." },
    { era: "~Year 1-25", event: "The Evening Star (2nd Martyr) led survivors underground. Stood between them and the truth. Founded the Inquisition through blood and prayer. The surviving Great Houses formed." },
    { era: "~Year 2-24", event: "Jorell (5th Martyr) established Avar's capital at 'the thinnest point.' Over 19 years, his gift of sight bound him to eternal watching of the seal beneath. Struck his name from all records." },
    { era: "~Year 427", event: "The Recreance: magically-attuned races became more mundane. Pre-cataclysm magic suppressed." },
    { era: "~Year 452 (est.)", event: "The Great Martyred Lady fell on Martyr's Day. Used her magical curse for Vo'dyn. During her era: the Great Schism occurred — the Church asserted dominance over the nobles; one Great House was expunged." },
    { era: "Year 512", event: "The Grand Scholar wrote: 'Life is not a riddle to be solved.' Later annotated (~Year 524): 'greatest lie.'" },
    { era: "Year 606", event: "Highlord Xzal sealed a redacted report: others beyond the borders rebuffed all contact; every expedition disappeared." },
    { era: "Year 616", event: "Aeilin (High Elves) disappearance documented in the redacted report." },
    { era: "Year 618", event: "Duke of Zen'tar died (officially: heart failure; widely disbelieved). Beginning of the current crisis. Prince disappeared around this time or earlier." },
    { era: "Year 622", event: "Dwarven Report: Urd resurface. Dark Elf lords wandering borders with malevolent intent." },
    { era: "~Year 625", event: "Arthur Augustus killed Mithris. Blue Pirates fractured. Caldun killed Crane (Order of the Rose). Artemis survived." },
    { era: "Year 626 (CURRENT)", event: "The Awakening — ancient magics reawakening. 7th Fleet arrives unexpectedly at Zen'tar. Martial law declared. The party enters play. O'Malley killed by Consortium. New Year is 270 cycles away." },
  ],

  // Theories — DM confirmed vs player theories
  theories: [
    { label: "270 Cycles to New Year Is Not a Random Number", confirmed: true, detail: "DM confirmed: '270 cycles. No, this is not a random number.' Magic re-emerged at year 427 (The Recreance), then again in year 626 (The Awakening) — exactly 199 years later." },
    { label: "Awakened Cobalt Is the Only Counter to the Flux / Wound", confirmed: true, detail: "DM confirmed: 'Awakened Cobalt is the only thing to counter the flux.' The Cobalt in the mines ripped open a portal between realities, suggesting it interacts with the seals holding the Wound at bay." },
    { label: "First Circler = Secus", confirmed: false, detail: "The 'First Circler' Garth desperately wants to impress is theorized to be Secus — Decima's brother — who married into House Khol, a 1st circle family." },
    { label: "Hathor = The Establishment Leader", confirmed: false, detail: "Hathor (Military Adjutant, 3rd circle, House Bluefist/Mournen, blue glove) is theorized to be the masked Establishment Leader from the Sunken Croc meeting." },
    { label: "Lantis = Mithris's Child", confirmed: false, detail: "Arthur massacred the Blue Pirates and killed their half-elf leader Mithris, yet now associates with Lantis — another half-elf. Theory: Mithris had a child; Arthur spared him out of guilt." },
    { label: "The Duke Found the Ledger and Was Killed for It", confirmed: false, detail: "'In the deepest vault I found a ledger... I feel them already, nibbling at my name.' The late Duke likely found the ancient ledger and was targeted for it." },
    { label: "The Martyrs Become the Veil / Watchers", confirmed: false, detail: "Each veil of the world was created from the sacrifice of a Martyr. Current working list: 1st = Gavriel/Him, 2nd = Evening Star/Warden?, 4th = Great Martyred Lady, 5th = Jorell." },
    { label: "The Quiet Architect (K) = The Prophet = The Final Chronicler", confirmed: false, detail: "All three carry or are associated with hourglasses and probability control. The Ashen Warrior in the Knavers portal vision wore a hourglass pendant — possibly K observing the Velderra-era events." },
    { label: "Vo'dyn Religion Suppresses Knowledge of the Wound", confirmed: false, detail: "Heresy = curiosity and deviation from doctrine. The Cataclysm was caused by overreach which woke the Urd. The Church rewrote it as divine punishment to stop people trying to understand the Wound." },
    { label: "The Coup Web: Marshall / Blue Pirates / Secus / Hathor", confirmed: false, detail: "The Marshall is in talks with Lantis (Blue Pirates adjacent). The Blue Pirates connect to Secus and the masked Establishment Leader (theorized = Hathor). Secus (House Khol) is organizing a coup." },
    { label: "Evening Star = Warden of the Deep", confirmed: false, detail: "The Evening Star (2nd Martyr) who 'stood between them and the truth' may also be the Warden of the Deep — duty-bound since the earliest days of Avar, now cast off those chains." },
    { label: "Midas Khol Controls Probability / Is Behind the Order of the Rose", confirmed: false, detail: "'I'll keep the hourglass turning' — giving Valerian the pendant at the Duke's funeral may be a signal, not just a gift. Midas may also be behind the Order of the Rose (Crane/Artemis)." },
  ],

  // Session notes
  // Each session has: id, title, sections[]
  // Each section has: heading (optional), entries[]
  // Each entry has: type ("event"|"sigil"|"logic"|"npc"|"dm"), text
  sessions: [
    {
      id: "s0", title: "Session 0 — The Caravan Begins",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "A lizard pulls the caravan. Party is in chains." },
        ]},
        { heading: null, entries: [
          { type: "dm", text: "DM (Campaign Theme): \"You are all in a remnant of a decaying empire continuously losing its border skirmishes. And the only faith that exists is religious fervor. And the fact magic / tech is starting to innovate again.\" — This establishes the macro lens for everything that follows." },
        ]},
      ]
    },
    {
      id: "s1", title: "Session 1 — Goblin Ambush on the Road",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Party fought goblins and an ogre on the caravan road." },
          { type: "event", text: "Obtained an echo for a devil's bargain of small consequence. +1 insight (about enemies)." },
          { type: "event", text: "A devil's laugh is heard at the end of the session." },
        ]},
        { heading: "Observations & Intel", entries: [
          { type: "event", text: "Duskwalkers are referenced — guards in iron robes, silent and still, patrolling tunnel routes between circles." },
          { type: "sigil", text: "Sigil: Blue Fist markings on boards — Order of the Blue Fist, cadet branch of House Mournen. Unusual 1st Circle presence in outer roads." },
          { type: "event", text: "Scouts reported the ambush to the caravan ahead of time, suggesting someone knows the party's route." },
          { type: "event", text: "The dead ogre and goblin leader had an unusual arcane aura — not normal for this creature type. No explanation given yet." },
          { type: "npc", text: "NPCs: Verin Ralthar (supervisor; magic-averse; name on the blood contract). Aldric (provisional supervisor). Ulric Ironfist (military house; noted as 'good' — 'not the Inquisition type; more than meets the eye')." },
        ]},
      ]
    },
    {
      id: "s2", title: "Session 2 — En Route to Zen'tar; Mist Wraiths",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Introduction to Vo'dyn prayer (Hymn) and religious tenets: cleanliness, faithfulness, service to 'Him.'" },
          { type: "event", text: "Party received battered symbols — oak talismans with inlaid steel. Described as 'power and an obligation.'" },
          { type: "event", text: "Caravan started at the 6th circle. Zen'tar is ~1 day's travel. Geography briefing: city between two giant rivers, not easily accessible, acts as sub-capital." },
          { type: "event", text: "Hathor (Military Adjudicant) encountered on the road: 'We know and saw the enemy, ash and dust.' Heavily armed, arrogant bearing. Wears a blue hand glove with crest. Believes in 'serving Him.'" },
          { type: "event", text: "A woman, Evelynn, screams of her missing child (names him inconsistently — 'Tim? Tom?'). Party investigates; instead encounters mist wraiths — weak to radiant damage (1d10 per turn). 'They will return to the earth, forgotten.' / 'All that dies becomes to ash.'" },
          { type: "event", text: "Introduction to faint elements of Abjuration in the universe — described as a background magical presence." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Blue hand glove with crest — Hathor / Order of Blue Fist (1st Circle)." },
          { type: "logic", text: "Logic note: The mist wraiths returning 'to the earth, forgotten' mirrors the language of the Wound and the Urd. This is the party's first encounter with entities connected to the broader cosmological threat, though it is not recognized as such at the time." },
          { type: "npc", text: "NPCs: Hathor (Military Adjudicant; blue fist glove; 1st Circle). Evelynn (grieving mother on the road; child's name inconsistent — pattern of the Wound erasing memory)." },
        ]},
      ]
    },
    {
      id: "s3", title: "Session 3 — Arrival in Zen'tar; The Missing Prince",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Attempted to speak with Evelynn (the mother from Session 2). Velintra witnessed the mother kill herself." },
          { type: "event", text: "Overheard discussion: \"What about the prince? He will be secured. Is the plan in motion? Yes. We must secure the paradigm. The diadem will give us the correct portent.\" — First confirmation a plan exists around the Prince." },
          { type: "event", text: "Arrived in Zen'tar. Confirmed: Duke dead; Prince missing." },
          { type: "event", text: "Garth (Deputy Sergeant) wants to impress the 'first circler' coming to the city — first indication a 1st Circle figure is inbound." },
          { type: "event", text: "Party tasked: find Junior Investigator Lantis, who has gone missing while leading the disappearances investigation." },
        ]},
        { heading: null, entries: [
          { type: "logic", text: "Logic note: 'The diadem will give us the correct portent' — a diadem is a crown-like object associated with ruling succession. This suggests whoever spoke is planning to use a succession artifact to legitimize a claim or verify the correct heir. The 'paradigm' is undefined — possibly the ledger, possibly the Prince himself." },
          { type: "npc", text: "NPCs introduced: Arthur Augustus Esquire (Major Investigator; limp; fancy cane/sword; scar across knee). Garth (Deputy Sergeant). Lantis (Junior Investigator; last seen at the Sunken Croc)." },
        ]},
      ]
    },
    {
      id: "s4", title: "Session 4 — Disappearances; The Sunken Croc",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Investigated disappearances. Last known location: AX42 Sanitarium block — described as 'more run down with purpose' (not simply neglected; intentionally so)." },
          { type: "event", text: "Spotted a cloaked figure with an elven symbol on the right shoulder. Later identified as Consortium/Maelis identifier." },
          { type: "event", text: "An hourglass stamp seen on an entrance notice — unknown affiliation at this point." },
          { type: "event", text: "Posting boards reference a 'Constintene.' (Identity unknown; possibly a contact or person of interest in the disappearances.)" },
          { type: "event", text: "Party entered the Sunken Croc (outskirts; poorer class; Blue Pirate territory). Ryo entered a drinking competition. Decima lost all her money and was taken upstairs." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Elven symbol on cloaked figure's right shoulder — Mithris's personal elven identifier; also associated with House Maelis." },
          { type: "sigil", text: "Marker: Hourglass stamp on entrance notice — significance unknown at time. Later connects to the Quiet Architect / Midas / Valerian thread." },
        ]},
      ]
    },
    {
      id: "s5", title: "Session 5 — Blue Pirates Confirmed; Secus; Caldun's Attack",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Confirmed: Blue Pirates control this area of Zen'tar. Heavy-handed, uncouth. Hate Arthur Augustus specifically. The Exalted One (Mithris) is their patron — now confirmed as a past High Elf who was very powerful but is dead." },
          { type: "event", text: "Lantis frequents the Sunken Croc. An important noble has disappeared. Red fist = confirmed sigil of the late Duke (Mournen)." },
          { type: "event", text: "Upstairs at the Sunken Croc: N'thoda, Velintra, and Decima discover Decima's brother Secus in a room with a masked Establishment Leader. Overheard: \"Guild affairs — next hit prince loyalists and Arthur.\" The masked figure threatens Decima's life to Secus for leverage in a confession." },
          { type: "event", text: "Secus brands Decima as a test of loyalty to the masked man. (Mark of sigil: 'Greater than us all' / 'Conviction'.)" },
          { type: "event", text: "Outside the tavern: the other party members are confronted by Caldun — cloaked, heavily armed, bearing Mithris's elven sigil. He attacks because the party is investigating what 'some people would prefer remain untouched.'" },
          { type: "event", text: "Substory: Establishment Leader trying to sell Zenzar (ex-militia leader) to Secus. \"Heavy doth the crown weight on one's head, for its banner waves in vanity and defiance.\"" },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Red fist = late Duke / House Mournen. Confirmed this session." },
          { type: "sigil", text: "Sigil: Mithris's elven symbol — on Caldun's person. Identifies Consortium/Concierge operatives." },
          { type: "logic", text: "Logic chain: Secus (married into 1st Circle via Khol) is buying Zenzar (former militia leader, missing ~7 years) through a masked figure (likely Hathor, Order of Blue Fist, cadet branch of Mournen). If Secus = Khol loyalty + Zenzar = military resource, the coup of the Council of Regency is the next move. The target: 'prince loyalists and Arthur' suggests the party and Arthur are in the coup's crosshairs." },
          { type: "npc", text: "NPCs confirmed: Secus Domitae (Decima's brother; 1st Circle). Caldun (Consortium enforcer; Mithris's weapon). Rarik Ville (Head Justice). Establishment Leader (masked; likely Hathor)." },
        ]},
      ]
    },
    {
      id: "s6", title: "Session 6 — Magistrate Attack; Entering the Mines",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Devil's bargain occurred. Lantis remains missing — possibly dead." },
          { type: "event", text: "Party reaches the Magistrate office: blood at the fortified door, divination magic dot inside = Arthur, standing with cane/sword drawn. 3–4 guards downed. Alazar seen with crossbow. Embers in the Ministerial and Aristocracy District." },
          { type: "event", text: "Attackers had red armbands. Arthur suspects 'Brigans' (possibly from a mining district or Blue Pirates). The entire Ministerial and Aristocracy District was hit with attacks simultaneously — a coordinated strike." },
          { type: "event", text: "Party tasked: find the missing people before 'the Bigwigs' (a 1st Circle figure and a 3rd Circle figure) arrive at the city." },
          { type: "event", text: "Velintra goes to the Alchemy Shop to analyze mist droplets. Finds a Dark Elf dead on the road with a unique weapon." },
          { type: "event", text: "Rest of party moves toward the Yearning Mines. It is snowing." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Marker: Red armbands on attackers at the Magistrate — suspected Blue Pirates or Brigans." },
          { type: "logic", text: "Logic note: The Dark Elf body with a unique weapon — killed before any combat reached the Alchemy Shop area — suggests someone eliminated a Dark Elf operative in advance of the party finding it. This may be Caldun, Velintra's guild, or an independent third party cleaning house." },
        ]},
      ]
    },
    {
      id: "scavers", title: "Session Cavers (Parts 1–3) — The Yearning Mines & The Abyss",
      sections: [
        { heading: "Part 1 — Mine Entry & Intel", entries: [
          { type: "event", text: "Ryo and Mithe talk to Zane inside the mines. Aldred and Thog attempt entry separately (Aldred presents as 'an executioner of monsters and heretics')." },
          { type: "event", text: "Miners sent in groups down the Pits of Hell — spirals deep; high cave-in rate. Penal colony / trustee system. Overman Jar = head of the trustee system." },
          { type: "event", text: "Fog curls inward. Mist clumps around. Lantern casings contain dimly glowing stone. No metal casings for miners — only guards have metal helmets." },
          { type: "event", text: "Manifest Board discrepancy: 15 went down, 14 came up. The ledger showed 16. Ralph Alvarez is missing." },
          { type: "event", text: "Prayer Board: Names, prayers ('ash and dust'). Jonathan Wineford — disappeared when light flickered — crossed out with a triangle symbol." },
          { type: "event", text: "34th expedition: 20 noted, 19 went down, 1 came back up. Sole survivor won't speak, shakes constantly." },
          { type: "event", text: "Every 7th thump: a pause + brief light flicker. The 4-beat machine rhythm begins here." },
          { type: "logic", text: "Logic chain (the discrepancy): Ledger shows 16. 15 went down. 14 came up. The missing person is not on the manifest — either the manifest was altered, or someone went down through a different route. The triangle on Jonathan Wineford's name maps to the Wound's behavior: a momentary absence of light = a seam through which someone is taken." },
        ]},
        { heading: "Part 2 — The Fall; The Ebony Gate; The Warden", entries: [
          { type: "event", text: "Mithe, Ryo, Thog and others fall through mine floors. Survivors: Artemis (big/scarred/'Criminal'), Volk Stormhammer (old dwarf), one grizzled guard, Ryo, Mithe, Thog." },
          { type: "event", text: "A beat every 12 seconds. Cobalt magnifies light and distorts space around it. Magic is absorbed into the cobalt." },
          { type: "event", text: "Party discovers the dark ebony gate: heavy stone weight on chain, ore carts with lead ingots on both sides. Hitting the chain on-beat unlocks the gate without penalty. Off-beat = psychic damage." },
          { type: "event", text: "Past the gate: a room with a large pool below a dangling hook. The Warden of the Deep emerges from the pool." },
          { type: "event", text: "Warden's words: \"I am the hinge that keeps the broken heavens closed... I am the weight on the mouth of the world... You are all potential vessels.\" / \"Destiny feels like freedom until you hear the hinges.\" / \"I've cast those chains aside.\" / \"Duty bound to He who stood for us.\"" },
          { type: "logic", text: "Logic note: The Warden says he is 'duty bound to He who stood for us' — referring to Ser Gavriel Val'Tan ('Him'). This means the Warden predates or is contemporary with Gavriel. He has since 'cast those chains aside' — remaining as Warden by choice now, not compulsion." },
        ]},
        { heading: "Part 3 — The Meteorite Chamber & The Machines", entries: [
          { type: "event", text: "Through a 7 ft seam: a circular room of natural meteorite — unheard of; no known natural source. Center: cylindric table with concave top." },
          { type: "event", text: "Ceiling: star map of yellow dots connected by semi-geometric lines — matches Mithe's pool visions. Prestidigitation fails when it too closely replicates the pattern: 'almost as if it is a system of rule or law that cannot be broken.'" },
          { type: "event", text: "Volk on another world: \"The forefathers did spoke... they vowed to never speak of this topic, and only once we traded with you, when we were alone in the stone.\"" },
          { type: "event", text: "Three wall symbols (Mithe touches all): Green Book — luminescent, 'Fate's Final Rest.' Blue Scepter — 'Humanity's Unyielding Spirit.' Red Crown — sadness/anger/faith, 'The end of the Starborn' / 'My sacrifice is your duty.' Voice: 'Will you undertake this path?' Mithe takes −3 psychic damage." },
          { type: "event", text: "Ryo taps the concave centerpiece with his obsidian key → light falls from the ceiling onto the 3 symbols. Rotating the cylinder 270 times inverts the reflection. 540 = original." },
          { type: "event", text: "Side hallway: Five masks. 1st (Obsidian): \"Before the first veil was woven, the universe was our anchor — and I was its guide.\" 3rd Reed: \"For the many masks you've worn throughout time.\" 5th Reed (key-shaped): \"For the life you left behind.\" — used to unlock exit door." },
          { type: "event", text: "Beyond the door: 4 ancient machines. Three thumping; 4th struggling. 'Entropic stabilization containment failing.' Panels: Matter / Flux / Energy / Entropy. Party fixes the 16th beat." },
          { type: "sigil", text: "Sigils in meteorite chamber: Green Book ('Fate's Final Rest'), Blue Scepter ('Humanity's Unyielding Spirit'), Red Crown ('The end of the Starborn' / 'My sacrifice is your duty')." },
          { type: "logic", text: "Logic chain (the chamber's purpose): The three symbols correspond to three fundamental objects (book, scepter, crown = knowledge, authority, sacrifice). The voice from the Red Crown asks for a 'world's warden' — the same title the Warden of the Deep holds. This chamber may be a site where wardens are chosen or pledged." },
          { type: "npc", text: "NPCs introduced: Artemis (Order of the Rose; 6th Circle). Volk Stormhammer (non-penal dwarf miner). Warden of the Deep (ancient guardian; Sub-6th)." },
        ]},
      ]
    },
    {
      id: "sknavers", title: "Session Knavers — Rarik Ville; The Cobalt Portal; Fate",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "A tall brown-robed man (Inquisitor) mistakes Velintra for 'Sister Erithine' — establishing that Erithine is real and well known to this Inquisitor. Rarik Ville seen as a child (~age 9) in a time-jump: he is from Sister Erithine's orphanage." },
          { type: "event", text: "The Great Martyred Lady discussed: heroically died; used magic at great cost; of much significance to the current era." },
          { type: "event", text: "Selka Morren introduced as 'Lady Factor.' The Morren family made a syndicate guild deal with 'Clandet Morren.'" },
          { type: "event", text: "Brown-robed individual spotted pulling out a vial. Symbol of Avar seen on an ornate glowing box containing ebony liquid. Brown robe dipped after the vial was splashed on someone's skin. No blood from the injured arm — unusual." },
          { type: "event", text: "Decima strikes the magical item. The box begins to break — a piece of themselves is ripped away. The awakened cobalt rips a portal between realities." },
          { type: "event", text: "Party spawns in a burning village with dead bodies and smoke. 'Ashen Warrior': high-quality gear, epaulettes scrubbed off, covered in ash, younger-middle age, hourglass glass pendant, eyes purposely concealed. Part of a group of 5 adventurers." },
          { type: "event", text: "The Fate Encounter: The green-bound ledger appeared before the party. Before them, where the book had been, a featureless figure with stars for eyes replaced it. Party asked: 'Why is fate so cruel?' The entity replied: 'I am fate, aren't I?'" },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Hourglass pendant — on the 'Ashen Warrior' in the portal vision. Connects to Midas's gift to Valerian and the Quiet Architect." },
          { type: "sigil", text: "Sigil: Symbol of Avar — on the ornate glowing box that triggered the cobalt portal event." },
          { type: "logic", text: "Logic chain (the Ashen Warrior): The portal opened by awakened cobalt showed a pre-cataclysm burning village. The Ashen Warrior's epaulettes are scrubbed off (rank/identity concealed deliberately) but the gear is high quality. The hourglass pendant matches the Quiet Architect's symbol. Velintra recognizes this person from somewhere — suggesting a dark elf guild connection or pre-campaign history." },
          { type: "npc", text: "NPCs confirmed: Selka Morren (Lady Factor / Auditor). Rarik Ville — confirmed from Sister Erithine's orphanage. Fate (primordial entity — featureless figure, stars for eyes)." },
        ]},
      ]
    },
    {
      id: "s11", title: "Session 11 — Marshall's Interrogation (Part 1)",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "The Marshall uses an orb + glass spindle for interrogation: taps when hiding something, blue = truthful, purple = hiding something. Ryo interrogated first." },
          { type: "event", text: "The Marshall reveals: The Council of Regency had something to do with the Duke's death." },
          { type: "event", text: "Special Military Zone = Marshall's jurisdiction here. Only the Auditors (Selka Morren) and the head of the city can contest it. No head of city currently exists — the power vacuum is total." },
          { type: "event", text: "City political summary: multiple factions, power shifts, inconsistent guard resources. Council of Regency cares only about short-term." },
          { type: "event", text: "Original 12 Great Houses explained: 9 known, 1 lost to time, 2 expunged. One expelled during the Great Schism — the moment the Church asserted dominance over nobles. During the years of the Great Martyred Lady." },
        ]},
        { heading: null, entries: [
          { type: "logic", text: "Logic chain (Council of Regency + Duke's death): If the Council of Regency was involved in killing the Duke, and the Council is composed of nobles focused on short-term gains, then the Duke's death was a political maneuver — likely to seize the city's resources without the Prince's dynastic claim getting in the way." },
          { type: "dm", text: "DM confirmed: The Council of Regency had something to do with the Duke's death." },
        ]},
      ]
    },
    {
      id: "s12", title: "Session 12 — Marshall's Interrogation (Part 2)",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Full interrogation sequence. All have wristbands." },
          { type: "event", text: "Order: Rarik Ville (whereabouts unknown after); Ryo (taken to prison); Mithe (released); Velintra (released); Decima (taken to prison); Thog (sent to be executed — guards have silver armbands — escaped as a spider); Kane (no wristband); Aldred (Marshall has his crest)." },
          { type: "event", text: "Marshall accuses Decima of being a 'witch.' Claims: 'The tragic incident was from a heretic employed by Lady Morren' — implicating Selka Morren." },
          { type: "event", text: "Outside the interrogation room, the Marshall's body 'looks as if it is protesting against what he is doing. He is not happy.' He appears to be acting under compulsion or conflicted loyalties." },
          { type: "event", text: "Court scene: bound prisoners, Rarik Ville seated with two Marshall guards (black armbands) staring intently beside him. Rarik is testifying on behalf of the ecclesiastical church." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Markers: Silver armbands = guards who took Thog. Black armbands = Marshall's personal detail (also assigned as Rarik's bodyguard, creating a chain of control)." },
          { type: "logic", text: "Logic note: The Marshall has Aldred's crest. This means the Marshall has been tracking the Order of the Flame — or someone from it — for some time. The Marshall blaming Selka Morren may be a strategic deflection to create conflict between the party and the noble faction that sent Morren." },
        ]},
      ]
    },
    {
      id: "s13", title: "Session 13 — Release; The Three-Rune Bracelets; Martial Law Buildup",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Marshall offers compromise: the bracelets are technologies used to manage unruly prisoners — remote-activatable under certain ether conditions. 'If activated, you will no longer be anyone's problem.'" },
          { type: "event", text: "Rarik Ville escorted to his back chambers (out of the picture for now)." },
          { type: "event", text: "Party brought to the front of the mines with ~12 guards. Given older, slightly chipped bracelets — runes facing inward (touching skin)." },
          { type: "event", text: "Party spots Volk Stormhammer and Oral Oxthain (Veinwarden) having tea. Ryo arranges to meet Volk at the Drunken Dog Inn." },
          { type: "event", text: "Three runes on new bracelets: 1st = 'Strictus' (strictest variant). 2nd = airy/free-flowing feel ('Aerie?'). 3rd = familiar but unidentified." },
          { type: "event", text: "Marshall fiddles with red, yellow, and purple marbles. (Purpose unknown — possibly a communication device or magical instrument.)" },
          { type: "event", text: "Town crier announces martial law. Faction alignment clarified: Garth/Magistrate → Nobles. Marshall → refuses noble access to mines. Inquisitor Rarik Ville → 'just trying not to die from Marshall'; both playing nice." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Markers: 3-rune bracelets (Strictus / Aerie / Unknown). Red, yellow, purple marbles — Marshall's personal items; purpose unknown." },
          { type: "logic", text: "Logic note (bracelets): DM confirmed runes are 'like transistors' — reactive, not active. The 3rd rune being 'familiar' suggests the party has encountered a version before, possibly in the mines or on earlier wristbands. If the bracelets are remote-activated, whoever holds the activation method holds a kill-switch on the party." },
          { type: "dm", text: "DM: 'Runes are reactive, not active... Think of them as transistors.'" },
        ]},
      ]
    },
    {
      id: "s14", title: "Session 14 — The 7th Fleet Arrives; Merchant District Tensions",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "Yellow naval flares seen from the waters — not city flares (those are red/green and very expensive). N'thoda appears in front of Mithe and Artemis outside the magistrate station." },
          { type: "event", text: "A trail of ships enters and begins surrounding the city. Ships carry Vo'dyn empire flags. Sigil of Him on each ship." },
          { type: "event", text: "City guard declares: anything within 15–20 ft of the border is Militarum jurisdiction. Martial law declared on outer walls. Garth: 'Nobody was expecting these ships, those are naval flares.'" },
          { type: "event", text: "7th Fleet briefing (from Aldred's insights): Led by Admiral Galewind; deputy Commodore Sal'vin (Hell's Fury). Not under the Militarum but under the Nautica Liticus. The Martyr is the flagship: pre-cataclysm galleon, 600+ years old. Naval flares 'draw attention and attract some things that lurk in the water.'" },
          { type: "event", text: "Militia leader (Zenzar) missing for 7 years — same time as the Prince. Nobody could replace him." },
          { type: "event", text: "Society of Brilliance has a chapter in Zen'tar — offshoot of the Luminary Council (2nd Circle arcane authority)." },
          { type: "event", text: "Merchants hiring ruffians; giving free food to people who leave the district. Trebuchets, arbalests, and scorpions being assembled in the Merchant District." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Sigil of Him on 7th Fleet ships — highest imperial/holy identifier." },
          { type: "sigil", text: "Marker: Yellow = naval flares. Red/green = city flares (rare/expensive). Blue feather = Militarum guards at the merchant district checkpoint." },
          { type: "logic", text: "Logic chain (7th Fleet arrival): Nobody was expecting them — not even the Marshall's intelligence anticipated it. The 7th Fleet only docks when resupplying or in a crisis deployment. Their arrival with the Sigil of Him on each ship suggests either a religious mandate or a direct Capital order of the highest priority." },
          { type: "npc", text: "NPCs introduced: Admiral Galewind (7th Fleet). Commodore Sal'vin (Hell's Fury)." },
        ]},
      ]
    },
    {
      id: "s15", title: "Session 15 — The Wyrm Speaks; Ryo & Decima's Shared Vision",
      sections: [
        { heading: "The Shared Vision (Ryo & Decima)", entries: [
          { type: "event", text: "Both are pulled into a shared space: a wooden-furnished room, long-hall shape, grandfather clock in center. Long table. 3 candles: 1 red, 1 green, 1 blue. Only the green candle is lit. Clock reads 11:50 — 10 minutes to midnight. Only sound: ticking. Decima's hair is muted white." },
          { type: "event", text: "Decima has read the Wyrm's apprentice's tome. The Wyrm speaks to both." },
        ]},
        { heading: "The Wyrm's Monologue", entries: [
          { type: "event", text: "\"Without me, you would have been sundered, destroyed, like her. I protected you, and used my own soul to protect you lest you be destroyed. The concentrated power of—\" [gargle; tries to say a name; cannot say it]." },
          { type: "event", text: "\"This thing has destroyed worlds, empires. Only the foolish are not afraid of those THINGS. Their path only leads to damnation and ruin as they try and trickle you in, as they offer you everything. I do not serve, I rule.\"" },
          { type: "event", text: "To Decima: \"You've read my apprentice's tome I see. You asked for it. You agreed to get this gift. They do not force, they tempt. They offer. That is the old law, the law written in the cosmos. You chose it, and paid the price thinking you can control it. And that is what makes you the greatest fool.\"" },
          { type: "event", text: "\"A price paid. A gift given. A fate rewrote. I chose my own fate. You? You've given it away.\"" },
          { type: "event", text: "To Ryo asking for a name: \"You have yet to earn the right.\"" },
        ]},
        { heading: "Ryo's Dirty 20 Perception (Wyrm's mindscape)", entries: [
          { type: "event", text: "The Wyrm's eyes are crimson red." },
          { type: "event", text: "Setting: wooded at first, but a stronghold visible in the distance — new in construction, but old in design." },
          { type: "event", text: "Banners: Trident, White banner with a red dot (similar to Penitant Deathriders), Lapis lazuli color banner. Three banners total." },
        ]},
        { heading: "End of Vision", entries: [
          { type: "event", text: "Green candle's wick shortens; drips have a light black aura. A flame begins on the red candle. Clock strikes midnight. Doors open to the right. Ryo and Decima awaken at the tavern in cold sweats." },
          { type: "event", text: "Velintra knocks them both out as they begin spasming and screaming. Party attempts a long rest." },
          { type: "sigil", text: "Sigils on Wyrm's stronghold: Trident (House Gulfen/Trinton?), White + Red Dot banner (similar to Penitant Deathriders), Lapis Lazuli banner. Location and era of stronghold: unknown." },
          { type: "logic", text: "Logic chain: The Wyrm says it 'used my own soul' to protect Ryo — meaning it has a soul, and it chose to sacrifice part of it. It says Decima read its 'apprentice's tome' — the tome Decima found in her house's stores. The Wyrm therefore taught a Domitae before Ryo, which means the Wyrm's fingerprint was already in Decima's family line before both of their stories began." },
        ]},
      ]
    },
    {
      id: "s16", title: "Session 16 — Merchant District Ambush; O'Malley Killed; Midas at the Funeral",
      sections: [
        { heading: "Key Events", entries: [
          { type: "event", text: "It is 4am. Blue feather on Militarum guards at the merchant district checkpoint. Will not let the party in initially." },
          { type: "event", text: "Peoples' Merchant Guild of Commerce: major guild specializing in weapon innovation, industrial goods, and shipping." },
          { type: "event", text: "Party ambushed by the same people who attacked the militia. Attempted poisoning — everyone hit except Decima." },
          { type: "event", text: "O'Malley killed. She was the party's contact from the Marshall. Dying words: 'Premier.'" },
          { type: "event", text: "Velintra looted O'Malley's body: Note (Westfall. Ravenscreft.), 7 gold, bloodied dagger, sealed letter, a thorn talisman." },
          { type: "event", text: "Concierge operatives flee; metal clanking heard as they move." },
          { type: "event", text: "Lt. Boltin Crestfyre (4th Investigation Enforcement Wing) arrives on scene. Was ordered to hold position until the codeword 'Dagger' — which he heard from the assassins themselves. Now accusing the party of starting the fight." },
          { type: "event", text: "Midas Khol at the Duke's funeral (contextual / confirmed this session): Gave Valerian Than'dal an hourglass pendant: 'I'll keep the hourglass turning.' Valerian confirmed tasked with watching the Prince." },
        ]},
        { heading: null, entries: [
          { type: "sigil", text: "Sigil: Thorn talisman — found on O'Malley. Unknown affiliation." },
          { type: "sigil", text: "Sigil: Hourglass pendant — Midas → Valerian. 'I'll keep the hourglass turning.'" },
          { type: "logic", text: "Logic chain (Boltin): Boltin heard the codeword 'Dagger' from the assassins and then used it to hold position — which allowed the Consortium assassins to complete the job and flee. Whether Boltin is corrupt or simply following orders he didn't know were compromised is unclear. His Special Investigation Unit (no number, no standard chain of command) makes it harder to trace who gave the order." },
          { type: "npc", text: "NPCs introduced: Boltin Crestfyre (Lt., 4th Wing / Special Unit). O'Malley (dead; Marshall's contact). Valerian Than'dal (Midas's knight; confirmed as watcher of the Prince)." },
        ]},
      ]
    },
    {
      id: "s17", title: "Session 17 — Aftermath; Party Scattered; Current State",
      sections: [
        { heading: "Situation Summary", entries: [
          { type: "event", text: "Consortium assassins killed O'Malley (the party's contact from the Marshall), fled with their dead, leaving no traces. Boltin Crestfyre watched without intervening before 'securing the perimeter.' Suggests corrupt noble influence routing through the Special Investigation Unit." },
          { type: "event", text: "Party is surrounded by the Special Investigation Unit wanting to question under Zone of Truth or Detect Thoughts." },
          { type: "event", text: "Decima establishes: party is working with investigators, investigating disappearances (particularly Maestor Velitor — head of merchant guilds, also now missing), acting under Garth's and Arthur's authority." },
        ]},
        { heading: "Party Positions at End of Session 17", entries: [
          { type: "event", text: "Thog — at the Drunken Dog Inn." },
          { type: "event", text: "Kane — fled the Merchant District scene immediately." },
          { type: "event", text: "Artemis — fled the scene." },
          { type: "event", text: "Ryo — staying nearby the scene; hanging back." },
          { type: "event", text: "Decima — staying near Ryo; established cover with investigators as 'Delattre.'" },
          { type: "event", text: "Mithe — at the scene; needs to blend in; high risk of identification; tried and failed to heal O'Malley." },
          { type: "event", text: "Velintra — at the scene; successfully looted O'Malley while investigators weren't watching." },
          { type: "event", text: "N'thoda — escaped through the sewers." },
          { type: "event", text: "Aldred — location unspecified at session end." },
        ]},
        { heading: null, entries: [
          { type: "logic", text: "Open threads heading into next session: Who is 'Premier' (O'Malley's dying word)? What is in the sealed letter on O'Malley's body? Where did Maestor Velitor go? Who gave Boltin the compromised orders? Why does the Marshall want O'Malley dead — or was this purely a Consortium hit? The Merchant District is now locked down and assembling siege equipment — what are they expecting to attack, or to be attacked by?" },
          { type: "npc", text: "NPCs engaged: Boltin Crestfyre (Special Unit). O'Malley (dead). Maestor Velitor (Guild Master; missing)." },
          { type: "dm", text: "Current positions: Thog at Drunken Dog Inn. Kane fled. Artemis fled. Ryo hanging back. Decima near Ryo as 'Delattre.' Mithe at scene. Velintra at scene. N'thoda escaped through sewers. Aldred — location unspecified." },
        ]},
      ]
    },
  ],
};

// Tab labels
const TABS = ["All", "Great Houses", "Organizations", "NPCs", "Player Characters", "Locations", "Sigils", "World Lore", "Theories", "Session Notes", "Timeline"];

// App state
let currentTab = 0;
let searchTerm = "";
let expandedItems = new Set();


function init() {
  renderTabs();
  renderContent();
  setupSearch();
  setupScrollShrink();
}

// Filter on every keystroke and re-render
function setupSearch() {
  document.getElementById("search").addEventListener("input", e => {
    searchTerm = e.target.value.toLowerCase();
    renderContent();
  });
}

// Add or remove the .shrunk class based on scroll position
function setupScrollShrink() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("shrunk", window.scrollY > 60);
  });
}

// Rebuild tab buttons, marking the currently active one
function renderTabs() {
  const container = document.getElementById("tabs");
  container.innerHTML = "";
  TABS.forEach((name, i) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (currentTab === i ? " active" : "");
    btn.textContent = name;
    btn.onclick = () => {
      currentTab = i;
      expandedItems.clear();
      renderTabs();
      renderContent();
    };
    container.appendChild(btn);
  });
}

// Route to the correct render function based on active tab
function renderContent() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  const renderers = [
    renderAll, renderHouses, renderOrgs, renderNPCs, renderPlayers,
    renderLocations, renderSigils, renderLore, renderTheories, renderSessions, renderTimeline,
  ];
  renderers[currentTab](container);
}

// Toggle a collapsible item open or closed then re-render
function toggleItem(id) {
  if (expandedItems.has(id)) {
    expandedItems.delete(id);
  } else {
    expandedItems.add(id);
  }
  renderContent();
}

// Check if any string field (including nested arrays/objects) matches the current search term
function matches(obj) {
  if (!searchTerm) return true;
  function scan(v) {
    if (!v) return false;
    if (typeof v === "string") return v.toLowerCase().includes(searchTerm);
    if (Array.isArray(v)) return v.some(scan);
    if (typeof v === "object") return Object.values(v).some(scan);
    return String(v).toLowerCase().includes(searchTerm);
  }
  return scan(obj);
}


// All tab: render every section in sequence with labeled dividers
function renderAll(container) {
  renderDivider("I", "Great Houses of Avar", container);
  renderHouses(container);
  renderDivider("II", "Organizations, Orders & Factions", container);
  renderOrgs(container);
  renderDivider("III", "Non-Player Characters", container);
  renderNPCs(container);
  renderDivider("IV", "Player Characters", container);
  renderPlayers(container);
  renderDivider("V", "Locations & Map Positions", container);
  renderLocations(container);
  renderDivider("VI", "Sigils, Identifiers & Visual Markers", container);
  renderSigils(container);
  renderDivider("VII", "World Lore & Cosmology", container);
  renderLore(container);
  renderDivider("VIII", "Key Connections & Allegiance Web", container);
  renderThreads(container);
  renderDivider("IX", "World Knowledge & Player Theories", container);
  renderTheories(container);
  renderDivider("X", "Known Timeline", container);
  renderTimeline(container);
  renderDivider("XI", "Session Notes", container);
  renderSessions(container);
}

// Labeled section divider used in the All tab
function renderDivider(label, title, container) {
  const div = makeEl("div", "section-divider");
  div.appendChild(makeEl("span", "section-divider-label", label));
  div.appendChild(makeEl("span", "section-divider-rule"));
  container.appendChild(div);
  container.appendChild(makeEl("div", "section-title", title));
}


// Build and insert a collapsible accordion section into the container
// id: unique string key; label: header text; defaultOpen: initial state
function makeAccordion(id, label, container, defaultOpen = false) {
  const isOpen = defaultOpen
    ? !expandedItems.has(id + "_closed")
    : expandedItems.has(id);

  const section = makeEl("div", "accordion-section" + (isOpen ? " open" : ""));

  const toggle = makeEl("div", "accordion-header");
  toggle.innerHTML = `<span>${label}</span><span class="acc-arrow">${isOpen ? "▼" : "▶"}</span>`;
  toggle.onclick = () => {
    if (isOpen) {
      if (defaultOpen) expandedItems.add(id + "_closed");
      else expandedItems.delete(id);
    } else {
      if (defaultOpen) expandedItems.delete(id + "_closed");
      else expandedItems.add(id);
    }
    renderContent();
  };
  section.appendChild(toggle);

  container.appendChild(section);
  return { section, isOpen };
}


// Great Houses — two accordion groups with table content
function renderHouses(container) {
  const infoBox = makeEl("div", "info-box");
  infoBox.innerHTML = `<strong>⚑ The Original Twelve - What Is Known</strong><br>
    The Vo'dyn Empire was founded alongside <strong>12 Great Houses</strong> in the immediate aftermath of the Cataclysm. Confirmed by DM as "9 or 11 or 12 but records are imprecise." Of these 12:<br><br>
    • <strong>9 are known</strong> and survive in some form: Khol, Lanvar, Sadin, Vostin, Relkan, Velthara, Rayne, Calder, Korvath, and Branneth are among the known original houses.<br>
    • <strong>House Da'varre</strong> is <em>not</em> itself one of the original 12--it is a <strong>cadet branch</strong> of a far more ancient house that was "mostly extinguished." Count Alren is rumored to trace his lineage to that lost original directly.<br>
    • <strong>1 house was lost to time</strong>--no records, no name, no known descendants.<br>
    • <strong>2 houses were expunged</strong>: one fell during the <em>Great Schism</em> (during the years of the Great Martyred Lady, when the Church asserted dominance over nobles); the second was erased for "direct opposition to the Church's mandate." Both bloodlines ended.<br><br>
    <em>Note: Houses Mournen, Domitae, Maelis, Morren, Voss, and all cadet branches (Bluefist, etc.) are NOT among the original 12.</em>`;
  container.appendChild(infoBox);

  renderHouseGroup("orig", "Original & Known Houses", data.houses.original, container, true);
  renderHouseGroup("cadet", "Cadet Branches & Post-Cataclysm Houses", data.houses.cadet, container, false);
}

function renderHouseGroup(id, label, houses, container, defaultOpen) {
  const { section, isOpen } = makeAccordion(id, label, container, defaultOpen);
  if (!isOpen) return;

  const filtered = houses.filter(matches);
  if (!filtered.length) return;

  const isOriginal = houses === data.houses.original;
  const headers = isOriginal
    ? ["House", "Circle / Reach", "Motto", "Sigil", "Power Base", "Key Members", "Disposition", "Notes"]
    : ["House", "Circle / Reach", "Sigil", "Power Base", "Key Members", "Disposition", "Notes"];

  const rows = filtered.map(h => {
    const row = [makeName(h.name), makeCircleTag(h.circle, h.circleTag, h.circleSub)];
    if (isOriginal) row.push(makeText(h.motto));
    row.push(h.sigilTag ? makeSigilTag(h.sigil, h.sigilTag) : makeText(h.sigil));
    row.push(makeText(h.power), makeText(h.members), makeText(h.disposition), makeText(h.notes));
    return row;
  });

  const wrap = makeEl("div", "tbl-wrap");
  wrap.appendChild(buildTable(headers, rows));
  section.appendChild(wrap);
}


// Organizations — individual expandable cards within category accordion groups
function renderOrgs(container) {
  const groups = [
    { id: "org_criminal", label: "Criminal & Underworld", items: data.orgs.criminal, open: true },
    { id: "org_military", label: "Military & Imperial Forces", items: data.orgs.military, open: false },
    { id: "org_religious", label: "Religious & Arcane Bodies", items: data.orgs.religious, open: false },
    { id: "org_paladin", label: "Paladin Orders & Covert Bodies", items: data.orgs.paladin, open: false },
    { id: "org_civil", label: "Civil & Local Bodies (Zen'tar)", items: data.orgs.civil, open: false },
  ];

  // Org type → accent color for the tag
  const ORG_COLORS = {
    "Criminal": "rgba(139,26,26,0.55)",
    "Assassin": "rgba(30,20,10,0.7)",
    "Military": "rgba(60,60,50,0.6)",
    "Penal": "rgba(80,55,20,0.5)",
    "Religious": "rgba(42,74,127,0.45)",
    "Arcane": "rgba(60,42,100,0.5)",
    "Paladin": "rgba(100,85,20,0.5)",
    "Covert": "rgba(80,20,80,0.5)",
    "Noble": "rgba(184,146,42,0.3)",
    "Naval": "rgba(20,60,80,0.5)",
    "Civil": "rgba(30,80,40,0.4)",
    "Merchant": "rgba(20,60,40,0.4)",
    "Guild": "rgba(20,60,40,0.4)",
    "Cult": "rgba(80,20,80,0.5)",
    "Default": "rgba(50,50,50,0.5)",
  };

  function getOrgColor(type) {
    if (!type) return ORG_COLORS.Default;
    for (const key of Object.keys(ORG_COLORS)) {
      if (type.toLowerCase().includes(key.toLowerCase())) return ORG_COLORS[key];
    }
    return ORG_COLORS.Default;
  }

  groups.forEach(g => {
    const { section, isOpen } = makeAccordion(g.id, g.label, container, g.open);
    if (!isOpen) return;
    const filtered = g.items.filter(matches);
    if (!filtered.length) return;

    filtered.forEach((o, i) => {
      const id = g.id + "_" + i;
      const open = expandedItems.has(id);

      const item = makeEl("div", "item org-item" + (open ? " expanded" : ""));

      const header = makeEl("div", "item-header");
      header.onclick = () => toggleItem(id);

      const nameBlock = makeEl("div", "item-name-block");
      nameBlock.appendChild(makeEl("span", "item-title", o.name));
      if (o.circle) nameBlock.appendChild(makeEl("span", "item-subtitle", o.circle));

      const meta = makeEl("div", "item-meta");
      if (o.type) {
        const typeTag = makeEl("span", "org-type-tag", o.type);
        typeTag.style.background = getOrgColor(o.type);
        meta.appendChild(typeTag);
      }
      meta.appendChild(makeEl("span", "item-toggle", "▶"));

      header.appendChild(nameBlock);
      header.appendChild(meta);
      item.appendChild(header);

      if (open) {
        const body = makeEl("div", "item-body");
        if (o.sigil) {
          const f = document.createElement("div");
          f.appendChild(makeEl("div", "field-label", "Sigil / ID"));
          f.appendChild(makeEl("div", "field-value", o.sigil));
          body.appendChild(f);
        }
        if (o.members) {
          const f = document.createElement("div");
          f.appendChild(makeEl("div", "field-label", "Key Figures"));
          f.appendChild(makeEl("div", "field-value", o.members));
          body.appendChild(f);
        }
        if (o.notes) {
          const f = document.createElement("div");
          f.className = "full-row";
          f.appendChild(makeEl("div", "field-label", "Notes"));
          f.appendChild(makeEl("div", "field-value", o.notes));
          body.appendChild(f);
        }
        item.appendChild(body);
      }

      section.appendChild(item);
    });
  });
}


// NPCs — individual expandable cards within four category accordion groups
function renderNPCs(container) {
  const groups = [
    { id: "npc_capital", label: "Capital & 1st Circle Figures", items: data.npcs.capital, open: true, type: "standard" },
    { id: "npc_zentar", label: "Zen'tar Figures (6th Circle)", items: data.npcs.zentar, open: false, type: "standard" },
    { id: "npc_historical", label: "Historical Figures & Martyrs", items: data.npcs.historical, open: false, type: "historical" },
    { id: "npc_entities", label: "Entities & Ancient Beings", items: data.npcs.entities, open: false, type: "entity" },
  ];

  groups.forEach(g => {
    const { section, isOpen } = makeAccordion(g.id, g.label, container, g.open);
    if (!isOpen) return;
    const filtered = g.items.filter(matches);
    if (!filtered.length) return;

    filtered.forEach((n, i) => {
      const id = g.id + "_" + i;
      const open = expandedItems.has(id);

      const item = makeEl("div", "item npc-item" + (open ? " expanded" : ""));

      const header = makeEl("div", "item-header");
      header.onclick = () => toggleItem(id);

      const nameBlock = makeEl("div", "item-name-block");
      nameBlock.appendChild(makeEl("span", "item-title", n.name));
      const subtitle = g.type === "entity" ? n.nature : g.type === "historical" ? n.era : n.role;
      if (subtitle) nameBlock.appendChild(makeEl("span", "item-subtitle", subtitle));

      const meta = makeEl("div", "item-meta");
      if (n.status) meta.appendChild(makeStatusTag(n.status));
      if (n.circle && g.type === "standard") {
        const circTag = makeEl("span", "tag tag-" + (n.circle.includes("1st") ? "gold" : n.circle.includes("6th") ? "blue" : "grey"), n.circle);
        meta.appendChild(circTag);
      }
      meta.appendChild(makeEl("span", "item-toggle", "▶"));

      header.appendChild(nameBlock);
      header.appendChild(meta);
      item.appendChild(header);

      if (open) {
        const body = makeEl("div", "item-body");

        const addField = (label, value, full) => {
          if (!value) return;
          const f = document.createElement("div");
          if (full) f.className = "full-row";
          f.appendChild(makeEl("div", "field-label", label));
          f.appendChild(makeEl("div", "field-value", value));
          body.appendChild(f);
        };

        if (g.type === "standard") {
          addField("Allegiance", n.allegiance);
          addField("Sigil / ID", n.sigil);
          addField("Notes", n.notes, true);
        } else if (g.type === "historical") {
          addField("Role", n.role);
          addField("Sigil / ID", n.sigil);
          addField("Notes", n.notes, true);
        } else {
          addField("Notes", n.notes, true);
        }

        item.appendChild(body);
      }

      section.appendChild(item);
    });
  });
}


// Player characters — individual expandable accordion cards
function renderPlayers(container) {
  const filtered = data.players.filter(matches);

  const note = makeEl("div", "possession-note");
  note.innerHTML = "<strong>Party Possession Status:</strong> Ryo (Wyrm), Decima (unknown plane entity), Aldred (demon — unaware), Kane (vampire-puppeted twin). All four are 'potential vessels' per the Warden of the Deep.";
  container.appendChild(note);

  filtered.forEach((p, i) => {
    const id = "pc-" + i;
    const isOpen = expandedItems.has(id);

    const item = makeEl("div", "item pc-item" + (isOpen ? " expanded" : ""));

    const header = makeEl("div", "item-header");
    header.onclick = () => toggleItem(id);

    const nameBlock = makeEl("div", "item-name-block");
    nameBlock.appendChild(makeEl("span", "item-title", p.name));
    nameBlock.appendChild(makeEl("span", "item-subtitle", `${p.race} · ${p.cls}`));

    const meta = makeEl("div", "item-meta");
    const echo = makeEl("span", "echo-tag", p.echo || p.keyword || "");
    echo.style.background = p.echoBg || "#8b1a1a";
    meta.appendChild(echo);
    if (p.age) meta.appendChild(makeEl("span", "age-tag", "Age " + p.age));
    meta.appendChild(makeEl("span", "item-toggle", "▶"));

    header.appendChild(nameBlock);
    header.appendChild(meta);
    item.appendChild(header);

    if (isOpen) {
      const body = makeEl("div", "item-body");
      if (p.height || p.origin) {
        const f = document.createElement("div");
        f.appendChild(makeEl("div", "field-label", "Origin / Build"));
        f.appendChild(makeEl("div", "field-value", [p.height, p.origin].filter(Boolean).join(" · ")));
        body.appendChild(f);
      }
      if (p.appearance) {
        const f = document.createElement("div");
        f.appendChild(makeEl("div", "field-label", "Appearance"));
        f.appendChild(makeEl("div", "field-value", p.appearance));
        body.appendChild(f);
      }
      if (p.bio) {
        const f = document.createElement("div");
        f.className = "full-row";
        f.appendChild(makeEl("div", "field-label", "Background"));
        f.appendChild(makeEl("div", "field-value", p.bio));
        body.appendChild(f);
      }
      if (p.traits) {
        const f = document.createElement("div");
        f.className = "full-row";
        f.appendChild(makeEl("div", "field-label", "Traits & Notes"));
        f.appendChild(makeEl("div", "field-value", p.traits));
        body.appendChild(f);
      }
      if (p.connections) {
        const f = document.createElement("div");
        f.className = "full-row";
        f.appendChild(makeEl("div", "field-label", "Connections"));
        f.appendChild(makeEl("div", "field-value", p.connections));
        body.appendChild(f);
      }
      item.appendChild(body);
    }

    container.appendChild(item);
  });
}


// Locations — two accordion groups
function renderLocations(container) {
  const groups = [
    { id: "loc_zentar", label: "Zen'tar — Key Districts & Sites", items: data.locations.zentar, open: true, key: "zone" },
    { id: "loc_empire", label: "Broader Avar — Empire & Beyond", items: data.locations.empire, open: false, key: "circle" },
  ];
  groups.forEach(g => {
    const { section, isOpen } = makeAccordion(g.id, g.label, container, g.open);
    if (!isOpen) return;
    const filtered = g.items.filter(matches);
    if (!filtered.length) return;
    const wrap = makeEl("div", "tbl-wrap");
    const colLabel = g.key === "zone" ? "District / Zone" : "Circle";
    wrap.appendChild(buildTable(
      ["Location", colLabel, "Controller", "Key Notes"],
      filtered.map(l => [makeName(l.name), makeText(l[g.key]), makeText(l.controller), makeText(l.notes)])
    ));
    section.appendChild(wrap);
  });
}


// Sigils — two accordion groups
function renderSigils(container) {
  // Confirmed faction sigils
  const { section: s1, isOpen: o1 } = makeAccordion("sig_confirmed", "Confirmed Sigils & Faction Markers", container, true);
  if (o1) {
    const filtered = data.sigils.confirmed.filter(matches);
    if (filtered.length) {
      const wrap = makeEl("div", "tbl-wrap");
      wrap.appendChild(buildTable(
        ["Sigil / Marker", "Associated With", "Circle", "Where Seen", "Significance"],
        filtered.map(s => [makeName(s.sigil), makeText(s.assoc), makeText(s.circle), makeText(s.seen), makeText(s.meaning)])
      ));
      s1.appendChild(wrap);
    }
  }

  // Meteorite chamber symbols and armband hierarchy
  const { section: s2, isOpen: o2 } = makeAccordion("sig_chamber", "Meteorite Chamber Symbols & Armband Hierarchy", container, false);
  if (o2) {
    const mf = data.sigils.meteorite.filter(matches);
    if (mf.length) {
      s2.appendChild(makeEl("div", "sub-section-label", "Chamber Symbols"));
      const wrap1 = makeEl("div", "tbl-wrap");
      wrap1.appendChild(buildTable(
        ["Symbol", "Location", "Meaning / Label"],
        mf.map(s => [makeName(s.marker), makeText(s.location), makeText(s.meaning)])
      ));
      s2.appendChild(wrap1);
    }
    const af = data.sigils.armbands.filter(matches);
    if (af.length) {
      s2.appendChild(makeEl("div", "sub-section-label", "Armband Color Hierarchy"));
      const wrap2 = makeEl("div", "tbl-wrap");
      wrap2.appendChild(buildTable(
        ["Armband Color", "Location", "Affiliation / Rank"],
        af.map(s => [makeName(s.color), makeText(s.location), makeText(s.affil)])
      ));
      s2.appendChild(wrap2);
    }
  }
}


// World lore — wound/veils table, confirmed facts table, then active threads
function renderLore(container) {
  // Wound, veils, and the machines table
  const { section: s1, isOpen: o1 } = makeAccordion("lore_main", "The Wound, The Veils & The Machines", container, true);
  if (o1) {
    const filtered = data.lore.filter(matches);
    if (filtered.length) {
      const wrap = makeEl("div", "tbl-wrap");
      wrap.appendChild(buildTable(
        ["Concept", "Nature", "Connection", "Current Status"],
        filtered.map(l => [makeName(l.concept), makeText(l.nature), makeText(l.connection), makeText(l.status)])
      ));
      s1.appendChild(wrap);
    }
  }

  // DM confirmed facts about the empire and lore
  const { section: s2, isOpen: o2 } = makeAccordion("lore_conf", "The Empire, Religion & Runes — DM Confirmed", container, false);
  if (o2) {
    const facts = [
      { topic: "Circle Structure", fact: "Vo'dyn Empire: ~9-11 concentric circles. 1st = Capital (Kholinar). 2nd = Religious sector. 3rd = Significant nobles/advisors. 4th = Upper merchant class. 6th = Zen'tar (sub-capital). 10th = Banmore Keep." },
      { topic: "House Mournen's Circle", fact: "DM: 'While the city is in the outer edges (6th-ish circle), given its historical and material significance the noble house governing it has quite an odd influence designation. They were prevalent in the capital... and have always had some level of significance in capital politics.'" },
      { topic: "Runes", fact: "DM: 'Runes are reactive, not active... Think of them as transistors.' Rune A will always do the same thing given the same stimulus. 'You can't just copy a rune 1:1 with a sketch on a canvas — that won't produce an effect.'" },
      { topic: "The Ledger / Factions", fact: "DM: 'There are some simply vying for control of Zentar, the 6th circle, after the Duke's death. And some additionally knowledgeable of the more historical and magical pieces of info, and vying for control of the Ledger that was last known to be with the Duke.'" },
      { topic: "The Campaign Theme", fact: "DM (Session 0): 'You are all in a remnant of a decaying empire continuously losing its border skirmishes. And the only faith that exists is religious fervor. And the fact magic / tech is starting to innovate again.'" },
      { topic: "Medicine & Entropy", fact: "DM: 'No cure, but there are different ailments and treatments. Exposure leads to entropic decay of who you are.' (Re: Lux's death from Flux exposure.)" },
    ].filter(matches);

    if (facts.length) {
      const wrap = makeEl("div", "tbl-wrap");
      wrap.appendChild(buildTable(
        ["Topic", "Confirmed Fact (DM)"],
        facts.map(f => [makeName(f.topic), makeText(f.fact)])
      ));
      s2.appendChild(wrap);
    }
  }

  // Active plot threads shown at the bottom of the lore tab
  container.appendChild(makeEl("div", "section-title", "Key Connections & Allegiance Web"));
  renderThreads(container);
}

// Active plot threads as a two-column card grid
function renderThreads(container) {
  const filtered = data.threads.filter(matches);
  const grid = makeEl("div", "thread-grid");
  filtered.forEach(t => {
    const card = makeEl("div", "thread-card");
    card.appendChild(makeEl("h3", "thread-title", t.title));
    card.appendChild(makeEl("div", "thread-status", t.status));
    card.appendChild(makeEl("p", "thread-detail", t.detail));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}


// Theories — knowledge blocks matching davar reference: confirmed (green) and player (purple) inline entries
function renderTheories(container) {
  const disclaimer = makeEl("div", "theory-disclaimer");
  disclaimer.innerHTML = `<strong style="color:#d4a843;">⚑ Source Attribution</strong><br>Entries marked <strong class="confirmed-inline">DM Confirmed</strong> reflect information explicitly provided by the DM. All other analysis and interpretations are <strong class="theory-inline">player theories</strong> unless otherwise stated.`;
  container.appendChild(disclaimer);

  const filtered = data.theories.filter(matches);
  const confirmed = filtered.filter(t => t.confirmed);
  const player = filtered.filter(t => !t.confirmed);

  // Helper: render a knowledge-block with a header and mixed entries
  function makeKnowledgeBlock(blockId, title, entries) {
    const isOpen = !expandedItems.has(blockId + "_closed");
    const block = makeEl("div", "knowledge-block");

    const header = makeEl("div", "knowledge-header");
    header.innerHTML = `<span>${title}</span><span class="k-arrow">${isOpen ? "▼" : "▶"}</span>`;
    header.onclick = () => {
      if (isOpen) expandedItems.add(blockId + "_closed");
      else expandedItems.delete(blockId + "_closed");
      renderContent();
    };
    block.appendChild(header);

    if (isOpen) {
      const body = makeEl("div", "knowledge-body");
      entries.forEach(t => {
        const entry = makeEl("div", t.confirmed ? "confirmed" : "player-theory");
        entry.textContent = t.detail || t.label;
        body.appendChild(entry);
      });
      block.appendChild(body);
    }

    container.appendChild(block);
  }

  if (confirmed.length) makeKnowledgeBlock("th_confirmed", "DM Confirmed", confirmed);
  if (player.length)    makeKnowledgeBlock("th_player", "Player Theories", player);
}

function renderTheories_OLD_UNUSED() {}


// Session notes — one collapsible block per session, with typed callout rows
function renderSessions(container) {
  const disclaimer = makeEl("div", "theory-disclaimer");
  disclaimer.innerHTML = `<strong style="color:#d4a843;">⚑ On Theories &amp; Discussions</strong><br>Unless a note is explicitly attributed to the DM, all theories, interpretations, and analytical commentary are <strong class="theory-inline">player theories</strong> — not confirmed lore. Logic chains are included to show how conclusions were reached, not to assert them as fact.`;
  container.appendChild(disclaimer);

  const filtered = data.sessions.filter(s =>
    !searchTerm || [s.title, ...s.sections.flatMap(sec => sec.entries.map(e => e.text))].join(" ").toLowerCase().includes(searchTerm)
  );

  filtered.forEach(s => {
    const isOpen = expandedItems.has(s.id);
    const block = makeEl("div", "session-block" + (isOpen ? " open" : ""));

    const toggle = makeEl("div", "session-toggle");
    toggle.innerHTML = `<span>${s.title}</span><span class="acc-arrow">${isOpen ? "▼" : "▶"}</span>`;
    toggle.onclick = () => toggleItem(s.id);
    block.appendChild(toggle);

    if (isOpen) {
      const body = makeEl("div", "session-body");

      s.sections.forEach(sec => {
        if (sec.heading) {
          body.appendChild(makeEl("div", "session-sub", sec.heading));
        }

        // Separate regular events from callouts so events render as a bullet list
        const events = sec.entries.filter(e => e.type === "event");
        const callouts = sec.entries.filter(e => e.type !== "event");

        if (events.length) {
          const ul = makeEl("ul", "session-list");
          events.forEach(e => ul.appendChild(makeEl("li", "", e.text)));
          body.appendChild(ul);
        }

        callouts.forEach(e => {
          const cls = e.type === "sigil" ? "s-sigil"
                    : e.type === "logic" ? "s-logic"
                    : e.type === "npc"   ? "s-npc"
                    : e.type === "dm"    ? "s-dm"
                    : "s-intel";

          if (e.type === "dm") {
            const row = makeEl("div", "s-dm");
            row.innerHTML = `<span class="s-dm-label">🟢 DM:</span> ${e.text}`;
            body.appendChild(row);
          } else {
            body.appendChild(makeEl("div", cls, e.text));
          }
        });
      });

      block.appendChild(body);
    }
    container.appendChild(block);
  });
}


// Timeline — single collapsible table
function renderTimeline(container) {
  const { section, isOpen } = makeAccordion("timeline_main", "Timeline — Pre-Cataclysm to Present", container, true);
  if (!isOpen) return;

  const filtered = data.timeline.filter(matches);
  if (!filtered.length) return;

  const wrap = makeEl("div", "tbl-wrap");
  wrap.appendChild(buildTable(
    ["Approx. Year", "Event"],
    filtered.map(t => [makeName(t.era), makeText(t.event)])
  ));
  section.appendChild(wrap);
}


// Build a generic table from header strings and pre-built cell elements
function buildTable(headers, rows) {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headers.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  rows.forEach(cells => {
    const tr = document.createElement("tr");
    cells.forEach(cell => {
      const td = document.createElement("td");
      if (cell && typeof cell === "object" && cell.nodeType) {
        td.appendChild(cell);
      } else {
        td.textContent = cell || "—";
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
}

// Plain text cell element
function makeText(text) {
  const span = document.createElement("span");
  span.className = "cell-text";
  span.textContent = text || "—";
  return span;
}

// Bold name element for first-column table cells
function makeName(text) {
  const span = document.createElement("span");
  span.className = "cell-name";
  span.textContent = text || "—";
  return span;
}

// Circle-tier tag colored by type: gold = 1st circle, blue = outer circles, grey = unknown, red = expunged
// Circle-tier tag; accepts arrays for stacked multi-circle tags; sub is an optional subtitle line
function makeCircleTag(text, type, sub) {
  const texts = Array.isArray(text) ? text : [text];
  const types = Array.isArray(type) ? type : [type];

  const wrap = document.createElement("span");
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";
  wrap.style.gap = "3px";

  texts.forEach((t, i) => {
    const span = document.createElement("span");
    span.className = "tag tag-" + (types[i] || types[0] || "grey");
    span.textContent = t || "-";
    wrap.appendChild(span);
  });

  if (sub) {
    const note = document.createElement("span");
    note.className = "circle-sub";
    note.textContent = sub;
    wrap.appendChild(note);
  }

  return wrap;
}

// Sigil tag colored by importance type
function makeSigilTag(text, type) {
  const span = document.createElement("span");
  span.className = "tag tag-" + (type || "grey");
  span.textContent = text || "-";
  return span;
}

// Organization type tag colored by category
function makeTypeTag(text, type) {
  const span = document.createElement("span");
  span.className = "tag tag-" + (type || "grey");
  span.textContent = text || "-";
  return span;
}

// Status tag colored by the content of the status text
function makeStatusTag(text) {
  if (!text) return makeText("—");
  const span = document.createElement("span");
  span.className = "status-tag";
  const s = text.toLowerCase();
  let color = "#c4bfb0";
  if (s.includes("dead") || s.includes("deceased")) color = "#e88";
  else if (s.includes("missing") || s.includes("disappear")) color = "#d4a843";
  else if (s.includes("suspicious") || s.includes("unknown")) color = "#c8843a";
  else if (s.includes("alive") || s.includes("active")) color = "#8c8";
  span.style.color = color;
  span.style.borderColor = color;
  span.textContent = text;
  return span;
}

// Create an element with a class and optional text content
function makeEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

document.addEventListener("DOMContentLoaded", init);