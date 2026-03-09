const data = {
  players: [
    { name: "Mithe Demacia Khol", race: "Half-Elf", class: "Bard", keyword: "BLOOD", age: 19, appearance: "5'6\", covered left eye, black whites of eyes", traits: "Conceals aristocratic upbringing; slight elven education markers; layered charm as armor", connections: "Daughter of Lux (elf) & Midas Kholin (human noble); ward of Alren Davarre; Lux may be the high elf mage seen in the time-vision" },
    { name: "Kane Vestrist Forscin", race: "High Elf", class: "Warlock", keyword: "ECHO", age: "100+", appearance: "High elf; ancient bearing", traits: "Distrusts dark elves; made pact with Apparition/Fate after brother's death; haunted/followed by something; blood burns vampires", connections: "Twin brother 'Able' (deceased, ~100 yrs ago during high elf/dark elf war); made deal with the Apparition" },
    { name: "Velintra", race: "Unknown (possibly Dark Elf)", class: "Unknown", keyword: "MASK", age: "—", appearance: "Resembles Sister Erithine", traits: "Part of a dark elf guild (kills/tortures); looted O'Malley; mundane past in time-vision; possibly has a soulknife ability", connections: "Close to Decima; recognized someone in the burning village time-vision" },
    { name: "Thog Mossass", race: "Firbolg", class: "Druid", keyword: "ROOT", age: "—", appearance: "Patchwork bark/moss/feathers; archaic plague helm", traits: "Eco-terrorist reputation; cult-like influence; aliases include Corvus, Saint of Spores, Devil of 19B; kept the beat in the mines", connections: "Separated from party briefly in the mines; later escaped as a spider during interrogation" },
    { name: "Ryo Dayana", race: "Human", class: "Sorcerer", keyword: "KEY", age: 22, appearance: "5'9\", red-streaked black hair, faint black face markings", traits: "Self-professed historian; humble origins; absorbed ancient mage's finger containing power; carries obsidian key-spline", connections: "Hunted by a branch of the Inquisition; entity inside him connected to House Domitae (theorized); has partial map with 'Weaver's Arch', IV:3, Westwell 2nd" },
    { name: "Aldred", race: "Human", class: "Paladin", keyword: "OATH", age: "—", appearance: "Large; heavy silver armor", traits: "Former paladin of Order of the Flame; likely demon-possessed; first into the pentagram, only survivor; doesn't remember banishment", connections: "Order of the Flame (oathblades); possibly possessed by a demon; Marshall has his crest" },
    { name: "Decima (Domitae)", race: "Unknown", class: "Unknown", keyword: "VEIL", age: "—", appearance: "White/muted white hair", traits: "Lost vision/speech after deal with otherworldly entity; trained scholar turned heretic; branded by Secus; made deal she doesn't remember", connections: "Brother: Secus (married into House Khol); closest sibling Nona (deceased); entity in head from another plane; father Magus, mother Julia; 9 other siblings" },
    { name: "N'thoda", race: "Human", class: "Barbarian", keyword: "FLAME", age: "—", appearance: "6'2\", black hair, bruises and scars on chest/shoulders", traits: "Formerly in underground fighting arenas; fight-first mentality; escaped through sewers after O'Malley assassination", connections: "—" },
  ],
  npcs: [
    { name: "Arthur Augustus Esquire (\"Arthurian\")", role: "Major Investigator", affil: "Investigator Station, Upper District", status: "Active", notes: "Has a limp, fancy cane, scar across knee; provided hidden weapon for Kane; massacred the Blue Pirates and killed Mithris; last known standing at Magistrate with sword drawn; does not like the Consortium" },
    { name: "Garth", role: "Deputy Sergeant in Arms", affil: "Magistrate / Field Office", status: "Active", notes: "Odd mechanisms in office; wants to impress the 'First Circler' (theorized = Secus); allied with nobles; trying to contact Deputy of Arms; reports to the Assembly" },
    { name: "Verin Ralthar", role: "Supervisor (Penal Outriders)", affil: "Vo'dyn / Zen'tar", status: "Active", notes: "Adverse to magic; the party's original contract-holder; name signed in blood" },
    { name: "Lantis", role: "Junior Investigator", affil: "Reports to Arthur", status: "Disappeared / possibly dead", notes: "Good heart; commoner; half-elf; frequented Sunken Croc; Marshall was in talks with him (Blue Pirates connection theory)" },
    { name: "Mithris", role: "Former Blue Pirates Leader", affil: "Blue Pirates / Consortium", status: "Deceased (~1 year ago)", notes: "Half-elf; killed by Arthurian; had the green ledger; theory: may have had a child (Lantis?); had the elven sigil of Mithris on followers" },
    { name: "Rarik Ville", role: "Head Justice / Inquisitor", affil: "Ecclesiastic Church", status: "Active", notes: "Raised in Sister Erithine's orphanage; appeared as a 9-year-old in time-vision; being used as pawn between Marshall and nobles; escorted to backchambers after interrogation" },
    { name: "Boltin Crestfyre", role: "Lieutenant, 4th Investigative Enforcement Wing", affil: "4th Investigation Wing", status: "Active / Suspicious", notes: "Watched O'Malley's assassination without intervening; suspicious corrupt noble influence; codeword 'Dagger' heard from assassins; spellcaster" },
    { name: "Hathor", role: "Military Adjutant (+ theorized: Establishment Leader)", affil: "House Bluefist / House Mournen", status: "Active", notes: "Blue hand glove with crest; heavily armed; walks with arrogance; 3rd circle origin; theory: is the masked Establishment Leader from the Sunken Croc meeting" },
    { name: "Secus", role: "Operative / 1st Circle Noble (via marriage)", affil: "House Khol (by marriage)", status: "Active", notes: "Decima's brother; trained in cloak and dagger; organizing a possible coup; sought Zanzar for military/resource control; branded Decima as loyalty test; theorized = the 'First Circler' Garth wants to impress" },
    { name: "O'Malley", role: "Merchant Contact", affil: "Marshall's network", status: "Deceased", notes: "Killed by Concierge assassins at Ravenscreft Street; dying words: 'Premier'; body looted by Velintra (note: 'Westfall. Ravenscreft.', 7 gold, bloodied dagger, sealed letter, thorn talisman)" },
    { name: "Zahn", role: "Colonel", affil: "Militarum", status: "Active", notes: "Has been taking a lot of control; merchants may be building a coalition against him" },
    { name: "Alazar", role: "Associate", affil: "Magistrate area", status: "Active", notes: "Wants to join Archidibus (gun); seen with crossbow at Magistrate attack" },
    { name: "Zanzar", role: "Ex-Militia Leader", affil: "Militia (former)", status: "Captured/Traded", notes: "Missing for 7 years (same time as prince); had a charismatic influence nobody could replace; Secus wanted to purchase him; being traded by the Establishment Leader" },
    { name: "Maestor Velitor", role: "Former Guild Master", affil: "Merchants' Guilds", status: "Disappeared", notes: "Head of the collective of merchant guilds; latest major disappearance; investigation trigger for Session 14+" },
    { name: "Artemis", role: "Criminal / Former Operative", affil: "Unknown", status: "Active", notes: "Big, strong, scarred; 'a cog in a well-oiled machine'; condemned in mines; was very interested in the green book symbol; was with party after mine cave-in; Caldun recognized him; Crane killed" },
    { name: "Crane", role: "Unknown", affil: "Order of the Rose (theorized)", status: "Deceased", notes: "Killed by Caldun; Caldun broke off his fight with Arthurian specifically to kill Crane — suggests Order of the Rose is important" },
    { name: "Caldun", role: "Unknown Operative", affil: "Possibly the Concierge", status: "Active", notes: "Connected to the Concierge; fought Arthurian; had the green ledger before/during a warehouse explosion; recognized Artemis and Crane; operating under instructions from the Exalted One" },
    { name: "Volk Stormhammer", role: "Senior Miner / Dwarf", affil: "Yearning Mines", status: "Active", notes: "Old dwarf; met in mines; knowledgeable about Dav Ki and ancient history; having tea with the Veinwarden post-interrogation; told to meet party at the Drunken Dog" },
    { name: "Alren Davarre", role: "Head of House Davarre", affil: "House Davarre / 1st Circle", status: "Active", notes: "Careful and patient; ward of Mithe; archivists; resides in Gloamspire Tower; lost daughter Cynthia and brother Alden in same incident; living daughter Bridgette; sent Mithe a cryptic farewell letter" },
    { name: "Selka Morren (Lady Factor)", role: "Noble / Auditor", affil: "Morren Family Syndicate", status: "Active", notes: "Cliche-type princess; the Marshall accused her of employing the heretic that caused the 'tragic incident'; Morren family syndicate made a deal with Clandet Morren" },
    { name: "Sister Erithine", role: "Orphanage Manager (deceased)", affil: "Church", status: "Deceased", notes: "Managed orphanage that Rarik Ville grew up in; Velintra resembles her; death tag found in the time-vision burning village" },
    { name: "The Warden of the Deep", role: "Primordial Entity / Guardian", affil: "Bound by 'Him'", status: "Active (in the deep)", notes: "Bound by oath to 'He who stood for us'; keeps a 'Shard' sealed beneath the surface; 'Duty bound to He who stood for us'; emerged from pool in the Abyss; wears a mask; large humanoid" },
    { name: "The Duke", role: "Former Ruler of Zen'tar", affil: "House Mournen", status: "Deceased (~within last year)", notes: "Beloved but too soft; brought Zen'tar to prominence; had the green ledger before his death; possibly targeted by the Urd after finding the ledger; killed (possibly by Regency Council)" },
    { name: "The Prince", role: "Heir to Zen'tar", affil: "Vo'dyn Empire", status: "Missing", notes: "Son of the Duke; ~23-24 years old; assassination target ('next hit: prince loyalis and arthur'); missing ~7 years — same time as Zanzar" },
    { name: "Lux", role: "High Elf Mage / Mithe's Mother", affil: "Unknown party cohort", status: "Unknown", notes: "Joined a party cohort that disappeared; their legend became more real than known; appeared in the time-vision as the 'high elf woman mage' among the 5 adventurers" },
    { name: "Evelynn", role: "NPC (minor)", affil: "—", status: "Deceased", notes: "Woman screaming for missing child ('Tim? Tom?'); watched by Velintra as she killed herself; the boy was found dead and turned to ash" },
    { name: "Zane", role: "Miner", affil: "Yearning Mines", status: "Active (last seen)", notes: "Friend Jonathan Wineford disappeared when light flickered; crossed out with a triangle on the prayer board" },
    { name: "Ralph Alvarez", role: "Missing Miner", affil: "Yearning Mines", status: "Missing", notes: "Name discrepancy on manifest board (15 down, 14 up, ledger said 16)" },
    { name: "Ulric Ironfist", role: "Military figure", affil: "Military house", status: "Active", notes: "From a military house; considered 'good'" },
    { name: "The Exalted One", role: "Past High Elf / Cult Figure", affil: "Unknown cult", status: "Deceased (still has followers)", notes: "Very powerful; Caldun operates under instructions from them; worshippers encountered outside Sunken Croc" },
    { name: "Admiral Galewind", role: "Admiral, 7th Fleet", affil: "Nautica Liticus", status: "Active", notes: "Commands flagship The Martyr; answers directly to the capital; arrived unexpectedly in Zen'tar" },
    { name: "Commodore Sal'vin", role: "Deputy, 7th Fleet", affil: "Nautica Liticus", status: "Active", notes: "One of Galewind's two deputies" },
    { name: "First Circler", role: "Unknown Noble", affil: "1st Circle / House Khol", status: "Active", notes: "Garth desperately wants to impress them; THEORY: this is Secus, who married into House Khol (a 1st circle family)" },
    { name: "Reginald", role: "Unknown", affil: "—", status: "Active", notes: "Interrogated by the Marshall during Session 12; no further details known" },
  ],
  locations: [
    { name: "Avar", type: "World/Continent", desc: "A supercontinent-sized subterranean cave system. Humanity fled here during the Cataclysm. Features bioluminescent ceiling flora (can cause burns at proximity), glow mosses, and lurking monsters in the dark. Seasons exist but are non-linear." },
    { name: "Zen'tar (Zenthar)", type: "City / Regional Sub-Capital", desc: "6th circle area. Between two giant rivers; not easily accessible. Politically unstable after the Duke's death. Cobalt/mithril mining hub. Currently under partial martial law with the 7th Fleet's unexpected arrival." },
    { name: "Kholinar / The Capital", type: "Capital City (destroyed)", desc: "Originally the 1st/0th circle capital of Vo'dyn. No longer exists by that name; now referred to as 'The Capital.'" },
    { name: "The Yearning Mines", type: "Mine / Penal Colony", desc: "Jurisdiction of the Marshall. Main export is Cobalt (blue, explosive when 'awakened'). Penal colony structure with a trustee system. Cannons pointed outward. High cave-in rate. Site of the party's deep dive and encounter with the Warden." },
    { name: "Veinhold Gatehouse", type: "Gatehouse / Military Checkpoint", desc: "Entry point to the mines area. Marshall's Men and Marshals Men stationed here. Reinforced during martial law." },
    { name: "Government Office (Magistrate)", type: "Government Building", desc: "Fortified. Site of a terrorist attack (Session 6). Arthur was found inside with sword drawn. Separate from the militia organizationally. Garth, Alazar, Cityguard Enforcers/Sweepers/Paperboys affiliated." },
    { name: "Investigator Station", type: "Adhoc Office", desc: "Located in the Upper District. Arthur's primary base. Not a formal Vo'dyn institution — a few desks and a break room within the Magistrate area. Investigators are attached to the Magistrate (like CIA-Army Intel)." },
    { name: "Sunken Croc Tavern", type: "Tavern / Criminal Den", desc: "On the outskirts of Zen'tar. Blue Pirates/Consortium territory. Lantis frequented it. Site of the Secus/Establishment Leader meeting. Upstairs room used for private dealings." },
    { name: "AX42 Sanitarium", type: "Sanitarium / Investigation Site", desc: "Last known location of disappearances. More run-down with purpose. Can analyze mist droplets here." },
    { name: "Drunken Dog Inn", type: "Inn / Party Base", desc: "Party's base of operations in Zen'tar. The Narrows are east of it." },
    { name: "Merchant District", type: "District", desc: "Merchants have kicked out city guards and brought in their own mercenaries. Investigators not involved due to Charter of Commerce. Peoples Merchant Guild of Commerce located here. Site of O'Malley's assassination." },
    { name: "Scholarium Adjuticai", type: "Academic Institution", desc: "Visible on the city map. Notable location near the Merchant District." },
    { name: "Upper District", type: "District", desc: "Wealthier area; Investigator Station located here." },
    { name: "Aristocracy / Ministerial District", type: "District", desc: "Also hit during the Session 6 attacks. Noble residences." },
    { name: "The Bazaar", type: "Mixed-Race Location", desc: "Directly controlled by the Inquisition (a rarity). One of only two major mixed-race locations in the world, alongside the Principality of Al'tan." },
    { name: "Weaver's Arch", type: "Historical Landmark", desc: "Where the late Duke gave speeches before his death. Now broken stones and rock. Referenced in Ryo's map rubbing (IV:3, Westwell 2nd)." },
    { name: "Stork Industries", type: "Corporation / Industry", desc: "Life-extension research, special ore mining, weapon production. Present in most circles except 1st/2nd outside of lobbyists. Duke brought it to prominence." },
    { name: "Gloamspire Tower", type: "Noble Residence", desc: "House Davarre's main residence. Rises from still waters of a cavern lake on the outskirts of the 1st circle. A place of archivists and record-keepers." },
    { name: "The Bandlewoods", type: "Region / Farm", desc: "8th circle. Ryo's home. Forests with cave systems. Where Ryo absorbed the ancient mage's finger from a dying Chimera." },
    { name: "Principality of Al'tan", type: "Neutral Territory", desc: "One of only two major mixed-race locations; consists of a few strongholds; used as a neutral meeting ground." },
    { name: "The Intermed", type: "Unknown", desc: "Visible on the city map to the east. Details unknown." },
  ],
  orgs: [
    { name: "The Consortium / Blue Pirates", type: "Criminal Organization", leader: "Mithris (deceased); current leader unknown", members: "Lantis (associated?); Caldun (?)", notes: "Heavy-handed and uncouth; operate in Zen'tar's outskirts; do not like Arthur; control Sunken Croc area; Arthur massacred them and killed Mithris ~1 year ago" },
    { name: "The Concierge", type: "Assassin Guild", leader: "Unknown", members: "Caldun (connected); assassins with red armbands", notes: "Killed O'Malley; fled with their dead leaving no traces; have the codeword 'Dagger'; possibly tied to noble influence via Boltin Crestfyre" },
    { name: "The Inquisition", type: "Religious Enforcement Body", leader: "Answers to 'Him' (nominally); practically no one", members: "Rarik Ville (Inquisitor)", notes: "Enforce tithe and suppress heresy; can execute instantly regardless of noble status; directly govern The Bazaar; also known as 'Witchers' in adhoc capacity" },
    { name: "Council of Regency", type: "Governing Body (Zen'tar)", leader: "Unknown", members: "Various nobles", notes: "Formed after Duke's death; cares only about short-term; politically warring with multiple factions" },
    { name: "The Militarum", type: "Formal Military", leader: "The Marshall (in Zen'tar); Zahn (Colonel taking control)", members: "Marshall's Men; Seers (8th Battalion); Inspectors (65th Platoon); Penitent Outriders/Deathriders", notes: "Official military name. Currently attempting to seize authority under martial law. Marshall allegedly tied to a noble house." },
    { name: "Penal Outriders / Penitent Deathriders", type: "Penal Military Division", leader: "Verin Ralthar", members: "The player characters (party)", notes: "The party's assigned division. Operate within Zen'tar." },
    { name: "City Guard / Magistrate (Cityguard)", type: "Policing Force", leader: "Garth (Deputy Sergeant in Arms)", members: "'Enforcers', 'Sweepers', 'Paperboys'", notes: "Keep peace; separate from militia; barely exist anymore per overheard conversation. Investigators are attached but functionally separate (CIA-Army Intel style)." },
    { name: "Investigators (Adhoc Division)", type: "Investigation Unit", leader: "Arthur Augustus Esquire", members: "Lantis (junior); Boltin Crestfyre (4th Wing Lt.)", notes: "Not a formal Vo'dyn institution; created within the city. Has a special investigation unit that doesn't get assigned numbers. Does not get involved with Merchants per Charter of Commerce." },
    { name: "The Militia", type: "Ad-Hoc Militant Force (Levies)", leader: "Zanzar (former, missing 7 years)", members: "Veterans in brotherhood lodges", notes: "Has not been active; Zanzar was so charismatic nobody could replace him; Secus wants to acquire this force." },
    { name: "Order of the Flame", type: "Paladin Order", leader: "Unknown", members: "Aldred (former)", notes: "Neutral paladin order; possesses 4 oathblades; pendant glows near great evil; Aldred is one of few survivors of the pentagram incident." },
    { name: "The Aperations", type: "Cultist Order", leader: "Unknown", members: "Unknown cultists", notes: "The order the Order of the Flame was trying to eradicate; an Aperation crumpled at Aldred's touch." },
    { name: "Luminary Council / Society of Brilliance", type: "Magical Think-Tank", leader: "Unknown (secreted membership; has external 'Speakers')", members: "The Great Martyred Lady (rumored founder)", notes: "Leading authority on magical theory and its ties to the natural world. Has a chapter in Zen'tar. Unique sigil identifier. Discusses 'less open topics.'" },
    { name: "The Nautica Liticus", type: "Naval Command", leader: "Admiral Galewind; Commodore Sal'vin (deputy)", members: "7th Fleet; The Martyr (flagship)", notes: "Controls the general navy; not under the Militarum but associated; also associated with nobles and religious groups. The 7th Fleet is the oldest and most storied." },
    { name: "House Mournen", type: "Noble House", leader: "The Duke (deceased); Council of Regency", members: "Hathor (associated)", notes: "Dynastically tied to Zen'tar. Formerly prevalent in the capital when the Khols were in power. Duke withdrew to the city after a falling out in the capital." },
    { name: "House Khol", type: "Noble House (1st Circle)", leader: "Unknown current head", members: "Secus (married in)", notes: "A great house. Secus married into House Khol and is extremely loyal to them. The return of the Khols to power was tied to House Mournen's significance." },
    { name: "House Davarre", type: "Noble House (1st Circle outskirts)", leader: "Alren Davarre", members: "Bridgette (daughter); Mark (nephew, status unknown)", notes: "Cadet remnant of one of the original 12 houses. Archivists and record-keepers in the Gloamspire Tower. A 'careful and patient' house that values silence and discretion." },
    { name: "House Domitae", type: "Noble House", leader: "Unknown", members: "Decima; Magus (father); Julia (mother); Prima, Secus, Quartus, Sexti, Septi (living siblings)", notes: "Dextra and Sinetra are the right and left of House Domitae. Ryo's wyrm (entity) may have apprenticed a Domitae (theorized). Decima uses the pseudonym 'Delattre.'" },
    { name: "House Bluefist", type: "Noble House (Cadet Branch)", leader: "Hathor (associated)", members: "Hathor", notes: "A cadet branch of House Mournen. Associated with Hathor. Slightly out of place as they are from the 3rd circle." },
    { name: "House Sadin / House Lanvar / House Gulfen / House Trinton", type: "Noble Houses", leader: "Unknown", members: "Unknown", notes: "All part of the original ~9-12 great houses. House Gulfen and House Trinton both have trident-based heraldry. One house lost to time; two expunged from all records." },
    { name: "Morren Family Syndicate", type: "Noble / Criminal Syndicate", leader: "Clandet Morren; Selka Morren (Lady Factor)", members: "Clandet Morren; Lady Factor Selka Morren", notes: "Made a deal internally (Clandet Morren deal). Selka Morren accused of employing the heretic who caused the 'tragic incident.'" },
    { name: "Order of the Rose", type: "Unknown Organization", leader: "Unknown", members: "Crane (likely)", notes: "Caldun dropped his fight with Arthurian specifically to kill Crane, suggesting the Order of the Rose is of significant importance/threat." },
    { name: "The Church / Ecclesiastic Church", type: "Religious Institution", leader: "'Him' (nominally); Inquisitors practically", members: "Inquisitors; Church Guard; paladins (associated)", notes: "Attempting to gain more control in Zen'tar post-Duke. State religion of Vo'dyn; core tenets: martyrdom/self-sacrifice, belief in Him and the Martyrs, The Mandate." },
    { name: "The Dav Ki", type: "Ancient Civilization / Race", leader: "Hold-based system", members: "Volk Stormhammer (dwarf, related race)", notes: "Ancient dwarf-kin civilization; much of their empire lost. Vo'dyn inherited their strongholds. Built to keep nightmares of the deep out. May have inherent runecrafting intuition." },
    { name: "Merchant Guilds", type: "Commercial Faction", leader: "Maestor Velitor (former, disappeared)", members: "Guild Guards; Hired Mercenaries", notes: "Kicking out city guard and bringing in private mercenaries. Externally unified but internally fighting. Building a coalition under current martial law tension." },
  ],
  theories: [
    { label: "First Circler = Secus", detail: "The 'First Circler' Garth desperately wants to impress is theorized to be Secus — Decima's brother — who married into House Khol, a 1st circle family, making him a 1st circle noble by association." },
    { label: "Hathor = The Establishment Leader", detail: "Hathor (Military Adjutant, 3rd circle, House Bluefist/Mournen, blue glove) is theorized to be the masked Establishment Leader from the Sunken Croc meeting with Secus and Velintra." },
    { label: "Lantis = Mithris's Child", detail: "Arthur (Arthurian) massacred the Blue Pirates and killed their half-elf leader Mithris, yet now associates with Lantis — another half-elf kid. Theory: Mithris had a child; Arthur killed his way through the pirates but spared the child out of guilt." },
    { label: "The Duke Found the Ledger and Was Killed for It", detail: "The letter 'To M' reads: 'In the deepest vault I found a ledger... I feel them already, nibbling at my name.' Theorized: The late Duke found the ancient green ledger, discovered too much, and was targeted and killed by the Urd (or those serving them). M may be Mithris." },
    { label: "The Warden's Entity = The Thing Corrupting Ryo's Entity", detail: "The journal entries ('I am forgetting what it feels like to not see... the thing beneath shifts in rhythms I have learned to read') are theorized to describe the same entity the Warden guards in the Abyss pool — the same 'Wound' or 'Shard' connected to the 16-beat machine rhythm." },
    { label: "Lux = The High Elf Mage in the Time Vision", detail: "Lux is Mithe's elven mother. Lux 'joined a party cohort that disappeared and their legend became more real than known.' The time-vision showed a party of 5 including a high elf woman mage — strongly implied to be Lux." },
    { label: "The Martyrs Become the Veil / Watchers", detail: "Each veil of the world was created from the sacrifice of a Martyr. The martyrs may become fractured entities or Watchers beyond the veil, monitoring its integrity. Confirmed by DM: there are in fact numerous martyrs. Current working list: 1st=Gavriel/Him, 2nd=Evening Star/Warden?, 4th=Great Martyred Lady, 5th=Jorell." },
    { label: "The Hourglass Figure Controls Probability / Is a Shard of Time", detail: "The Final Chronicler = The Prophet = The Quiet Architect (K) — a figure who has gone by many names including 'guide, emperor, architect, hero, villain.' Controls an hourglass tied to probability engineering. Song 'Golden Chains' describes them forging a cage of probabilities to lock 'the creature.' May have been in love with Fate (who is now dead)." },
    { label: "Vo'dyn Religion Suppresses Knowledge of the Wound", detail: "Heresy = curiosity and deviation from doctrine. The Cataclysm was actually caused by astronomical overreach/reaching too far into the cosmos — which woke the Urd. The Church rewrote it as divine punishment to stop people from trying to understand the Wound, which causes it to grow stronger. The Inquisition kills 'heretics' = those who begin to reach again." },
    { label: "The Coup Web: Marshall ↔ Blue Pirates ↔ Secus ↔ Hathor", detail: "The Marshall is in talks with Lantis (Blue Pirates adjacent). The Blue Pirates are connected to Secus and the masked Establishment Leader (theorized = Hathor). Secus (House Khol) is organizing a coup. Hathor is a Military Adjutant. This suggests a coordinated coup attempt involving military, criminal, and noble factions vying for control of Zen'tar and its mines/ledger." },
    { label: "Awakened Cobalt as Counter to the Flux / Wound", detail: "The Speaker stated 'awakened Cobalt is the only thing to counter the flux.' The Cobalt in the mines ripped open a portal between realities, suggesting it interacts with the boundaries between worlds — possibly the very seals/veils holding the Wound at bay." },
    { label: "270 Cycles to New Year Is Not a Random Number", detail: "DM confirmed: '270 cycles. No, this is not a random number.' The Cataclysm occurred in year 100. Magic re-emerged at year 427 (The Recreance), then again in year 626 (The Awakening) — exactly 199 years later. New Year may mark the next sacrifice or a critical threshold." },
  ]
};

const TABS = ["Player Characters", "NPCs", "Locations", "Organizations", "Theories"];

const tagColors = {
  "Criminal Organization": "#7f1d1d",
  "Assassin Guild": "#1c1917",
  "Religious Enforcement Body": "#1e3a5f",
  "Governing Body (Zen'tar)": "#14532d",
  "Formal Military": "#374151",
  "Penal Military Division": "#4b3a1e",
  "City Guard / Magistrate (Cityguard)": "#1e2d5f",
  "Investigation Unit": "#2d1e5f",
  "Ad-Hoc Militant Force (Levies)": "#4b2e1e",
  "Paladin Order": "#5f4e1e",
  "Cultist Order": "#3d1e3d",
  "Magical Think-Tank": "#1e4b3d",
  "Naval Command": "#1e3d4b",
  "Noble House": "#3d2e1e",
  "Noble House (1st Circle)": "#3d2e1e",
  "Noble House (1st Circle outskirts)": "#3d2e1e",
  "Noble House (Cadet Branch)": "#3d2e1e",
  "Noble Houses": "#3d2e1e",
  "Noble / Criminal Syndicate": "#4b1e2e",
  "Unknown Organization": "#2e2e2e",
  "Religious Institution": "#1e3a5f",
  "Ancient Civilization / Race": "#2e3d1e",
  "Commercial Faction": "#1e3d2e",
};

let currentTab = 0;
let searchTerm = "";
let expandedItem = null;

function init() {
  renderTabs();
  renderContent();
  setupEventListeners();
}

function setupEventListeners() {
  document.getElementById('search').addEventListener('input', handleSearch);
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  renderContent();
}

function switchTab(tabIndex) {
  currentTab = tabIndex;
  renderTabs();
  renderContent();
}

function renderTabs() {
  const tabsContainer = document.getElementById('tabs');
  tabsContainer.innerHTML = '';
  
  TABS.forEach((tabName, index) => {
    const tab = document.createElement('button');
    tab.className = `tab ${currentTab === index ? 'active' : ''}`;
    tab.textContent = tabName;
    tab.onclick = () => switchTab(index);
    tabsContainer.appendChild(tab);
  });
}

function renderContent() {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  
  const filtered = getFilteredItems();
  const items = filtered[currentTab === 0 ? 'players' : currentTab === 1 ? 'npcs' : currentTab === 2 ? 'locations' : currentTab === 3 ? 'orgs' : 'theories'];
  
  if (currentTab === 0) {
    renderPlayers(items);
  } else if (currentTab === 1) {
    renderNPCs(items);
  } else if (currentTab === 2) {
    renderLocations(items);
  } else if (currentTab === 3) {
    renderOrganizations(items);
  } else if (currentTab === 4) {
    renderTheories(items);
  }
}

function getFilteredItems() {
  const filterStr = searchTerm;
  
  return {
    players: data.players.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(filterStr))
    ),
    npcs: data.npcs.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(filterStr))
    ),
    locations: data.locations.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(filterStr))
    ),
    orgs: data.orgs.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(filterStr))
    ),
    theories: data.theories.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(filterStr))
    ),
  };
}

function renderPlayers(players) {
  const container = document.getElementById('content');
  const section = document.createElement('div');
  section.className = 'section';
  
  players.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = `item ${expandedItem === `pc-${i}` ? 'expanded' : ''}`;
    
    const header = document.createElement('div');
    header.className = 'item-header';
    header.onclick = () => toggleItem(`pc-${i}`);
    
    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = p.name;
    
    const subtitle = document.createElement('div');
    subtitle.className = 'item-subtitle';
    subtitle.textContent = `${p.race} · ${p.class}`;
    
    const toggle = document.createElement('div');
    toggle.className = 'item-toggle';
    toggle.textContent = '▶';
    
    const keyword = document.createElement('div');
    keyword.className = 'tag';
    keyword.textContent = `ECHO: ${p.keyword}`;
    
    const age = document.createElement('span');
    age.textContent = `Age ${p.age}`;
    
    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(keyword);
    header.appendChild(age);
    header.appendChild(toggle);
    
    const body = document.createElement('div');
    body.className = 'item-body';
    
    const content = document.createElement('div');
    content.className = 'item-content';
    
    const appearance = document.createElement('div');
    appearance.innerHTML = `<strong>Appearance:</strong> ${p.appearance}`;
    
    const traits = document.createElement('div');
    traits.innerHTML = `<strong>Traits & Notes:</strong> ${p.traits}`;
    
    const connections = document.createElement('div');
    connections.innerHTML = `<strong>Connections:</strong> ${p.connections}`;
    
    content.appendChild(appearance);
    content.appendChild(traits);
    content.appendChild(connections);
    body.appendChild(content);
    
    item.appendChild(header);
    item.appendChild(body);
    section.appendChild(item);
  });
  
  container.appendChild(section);
}

function renderNPCs(npcs) {
  const container = document.getElementById('content');
  const section = document.createElement('div');
  section.className = 'section';
  
  npcs.forEach((n, i) => {
    const item = document.createElement('div');
    item.className = `item ${expandedItem === `npc-${i}` ? 'expanded' : ''}`;
    
    const header = document.createElement('div');
    header.className = 'item-header';
    header.onclick = () => toggleItem(`npc-${i}`);
    
    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = n.name;
    
    const subtitle = document.createElement('div');
    subtitle.className = 'item-subtitle';
    subtitle.textContent = n.role;
    
    const toggle = document.createElement('div');
    toggle.className = 'item-toggle';
    toggle.textContent = '▶';
    
    const affiliation = document.createElement('span');
    affiliation.textContent = n.affil;
    
    const status = document.createElement('span');
    status.className = 'status-tag';
    status.style.borderColor = getStatusColor(n.status);
    status.style.color = getStatusColor(n.status);
    status.textContent = n.status;
    
    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(affiliation);
    header.appendChild(status);
    header.appendChild(toggle);
    
    const body = document.createElement('div');
    body.className = 'item-body';
    
    const content = document.createElement('div');
    content.className = 'item-content';
    content.textContent = n.notes;
    
    body.appendChild(content);
    item.appendChild(header);
    item.appendChild(body);
    section.appendChild(item);
  });
  
  container.appendChild(section);
}

function renderLocations(locations) {
  const container = document.getElementById('content');
  const section = document.createElement('div');
  section.className = 'section';
  section.style.display = 'grid';
  section.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
  section.style.gap = '14px';
  
  locations.forEach((l, i) => {
    const item = document.createElement('div');
    item.style.background = '#0d1210';
    item.style.border = '1px solid #1a2820';
    item.style.borderTop = '2px solid #2e6e4a';
    item.style.borderRadius = '6px';
    item.style.padding = '16px 18px';
    
    const title = document.createElement('div');
    title.style.fontSize = '14px';
    title.style.color = '#9ee8b8';
    title.style.marginBottom = '4px';
    title.textContent = l.name;
    
    const type = document.createElement('div');
    type.style.fontSize = '10px';
    type.style.color = '#3a6a50';
    type.style.textTransform = 'uppercase';
    type.style.letterSpacing = '0.15em';
    type.style.marginBottom = '8px';
    type.textContent = l.type;
    
    const desc = document.createElement('div');
    desc.style.fontSize = '12px';
    desc.style.color = '#8aaa98';
    desc.style.lineHeight = '1.65';
    desc.textContent = l.desc;
    
    item.appendChild(title);
    item.appendChild(type);
    item.appendChild(desc);
    section.appendChild(item);
  });
  
  container.appendChild(section);
}

function renderOrganizations(orgs) {
  const container = document.getElementById('content');
  const section = document.createElement('div');
  section.className = 'section';
  
  orgs.forEach((o, i) => {
    const item = document.createElement('div');
    item.className = `item ${expandedItem === `org-${i}` ? 'expanded' : ''}`;
    
    const header = document.createElement('div');
    header.className = 'item-header';
    header.onclick = () => toggleItem(`org-${i}`);
    
    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = o.name;
    
    const typeTag = document.createElement('span');
    typeTag.className = 'org-tag';
    typeTag.style.background = tagColors[o.type] || '#1e1e1e';
    typeTag.textContent = o.type;
    
    const toggle = document.createElement('div');
    toggle.className = 'item-toggle';
    toggle.textContent = '▶';
    
    header.appendChild(title);
    header.appendChild(typeTag);
    header.appendChild(toggle);
    
    const body = document.createElement('div');
    body.className = 'item-body';
    
    const content = document.createElement('div');
    content.className = 'item-content';
    content.style.display = 'grid';
    content.style.gridTemplateColumns = '1fr 1fr';
    content.style.gap = '10px';
    
    const leader = document.createElement('div');
    leader.innerHTML = `<strong>Leader:</strong> ${o.leader}`;
    
    const members = document.createElement('div');
    members.innerHTML = `<strong>Known Members:</strong> ${o.members}`;
    
    const notes = document.createElement('div');
    notes.innerHTML = `<strong>Notes:</strong> ${o.notes}`;
    notes.style.gridColumn = '1/-1';
    
    content.appendChild(leader);
    content.appendChild(members);
    content.appendChild(notes);
    body.appendChild(content);
    
    item.appendChild(header);
    item.appendChild(body);
    section.appendChild(item);
  });
  
  container.appendChild(section);
}

function renderTheories(theories) {
  const container = document.getElementById('content');
  const section = document.createElement('div');
  section.className = 'section';
  
  const warning = document.createElement('div');
  warning.style.fontSize = '11px';
  warning.style.color = '#5a4a3a';
  warning.style.letterSpacing = '0.2em';
  warning.style.textTransform = 'uppercase';
  warning.style.marginBottom = '4px';
  warning.textContent = '⚠ These are player theories — not confirmed canon';
  section.appendChild(warning);
  
  theories.forEach((t, i) => {
    const item = document.createElement('div');
    item.style.background = '#100e08';
    item.style.border = '1px solid #2a2010';
    item.style.borderLeft = '3px solid #c87c20';
    item.style.borderRadius = '6px';
    item.style.padding = '16px 20px';
    item.style.marginBottom = '14px';
    
    const label = document.createElement('div');
    label.style.fontSize = '14px';
    label.style.color = '#e8c87c';
    label.style.marginBottom = '8px';
    label.style.fontStyle = 'italic';
    label.innerHTML = '✦ ' + t.label;
    
    const detail = document.createElement('div');
    detail.style.fontSize = '13px';
    detail.style.color = '#b8a070';
    detail.style.lineHeight = '1.75';
    detail.textContent = t.detail;
    
    item.appendChild(label);
    item.appendChild(detail);
    section.appendChild(item);
  });
  
  container.appendChild(section);
}

function toggleItem(id) {
  expandedItem = expandedItem === id ? null : id;
  renderContent();
}

function getStatusColor(status) {
  if (!status) return '#6b7280';
  const sl = status.toLowerCase();
  if (sl.includes('deceased') || sl.includes('dead')) return '#ef4444';
  if (sl.includes('missing') || sl.includes('disappear')) return '#f59e0b';
  if (sl.includes('suspicious')) return '#f97316';
  if (sl.includes('active')) return '#22c55e';
  return '#94a3b8';
}

document.addEventListener('DOMContentLoaded', init);