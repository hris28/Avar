// avar.js

// Campaign data
const data = {
  players: [
    { name: "Mithe Demacia Khol", race: "Half-Elf", cls: "Bard", keyword: "BLOOD", age: 19, appearance: "5'6\", covered left eye, black whites of eyes", traits: "Conceals aristocratic upbringing; layered charm as armor; slight elven education markers", connections: "Daughter of Lux (elf) & Midas Kholin (human noble); ward of Alren Davarre; Lux may be the high elf mage seen in the time-vision" },
    { name: "Kane Vestrist Forscin", race: "High Elf", cls: "Warlock", keyword: "ECHO", age: "100+", appearance: "High elf; ancient bearing", traits: "Distrusts dark elves; made pact with Apparition/Fate after brother's death; blood burns vampires", connections: "Twin brother 'Able' (deceased, ~100 yrs ago during high elf/dark elf war); made deal with the Apparition" },
    { name: "Velintra", race: "Unknown (possibly Dark Elf)", cls: "Unknown", keyword: "MASK", age: "—", appearance: "Resembles Sister Erithine", traits: "Part of a dark elf guild (kills/tortures); looted O'Malley; possibly has a soulknife ability", connections: "Close to Decima; recognized someone in the burning village time-vision" },
    { name: "Thog Mossass", race: "Firbolg", cls: "Druid", keyword: "ROOT", age: "—", appearance: "Patchwork bark/moss/feathers; archaic plague helm", traits: "Eco-terrorist reputation; cult-like influence; aliases: Corvus, Saint of Spores, Devil of 19B", connections: "Separated from party briefly in the mines; escaped as a spider during interrogation" },
    { name: "Ryo Dayana", race: "Human", cls: "Sorcerer", keyword: "KEY", age: 22, appearance: "5'9\", red-streaked black hair, faint black face markings", traits: "Self-professed historian; absorbed ancient mage's finger; carries obsidian key-spline", connections: "Hunted by a branch of the Inquisition; has partial map with 'Weaver's Arch', IV:3, Westwell 2nd" },
    { name: "Aldred", race: "Human", cls: "Paladin", keyword: "OATH", age: "—", appearance: "Large; heavy silver armor", traits: "Former paladin of Order of the Flame; likely demon-possessed; first into the pentagram, only survivor", connections: "Order of the Flame (oathblades); Marshall has his crest" },
    { name: "Decima (Domitae)", race: "Unknown", cls: "Unknown", keyword: "VEIL", age: "—", appearance: "White/muted white hair", traits: "Lost vision/speech after deal with otherworldly entity; branded by Secus; made deal she doesn't remember", connections: "Brother: Secus (House Khol); closest sibling Nona (deceased); entity from another plane; father Magus, mother Julia" },
    { name: "N'thoda", race: "Human", cls: "Barbarian", keyword: "FLAME", age: "—", appearance: "6'2\", black hair, bruises and scars on chest/shoulders", traits: "Formerly in underground fighting arenas; fight-first mentality; escaped through sewers after O'Malley assassination", connections: "—" },
  ],
  npcs: [
    { name: "Arthur Augustus Esquire", role: "Major Investigator", affil: "Investigator Station, Upper District", status: "Active", notes: "Limp, fancy cane, scar across knee; provided hidden weapon for Kane; massacred the Blue Pirates and killed Mithris; does not like the Consortium" },
    { name: "Garth", role: "Deputy Sergeant in Arms", affil: "Magistrate / Field Office", status: "Active", notes: "Wants to impress the 'First Circler' (theorized = Secus); allied with nobles; reports to the Assembly" },
    { name: "Verin Ralthar", role: "Supervisor (Penal Outriders)", affil: "Vo'dyn / Zen'tar", status: "Active", notes: "Adverse to magic; the party's original contract-holder; name signed in blood" },
    { name: "Lantis", role: "Junior Investigator", affil: "Reports to Arthur", status: "Disappeared / possibly dead", notes: "Good heart; commoner; half-elf; frequented Sunken Croc; Marshall was in talks with him" },
    { name: "Mithris", role: "Former Blue Pirates Leader", affil: "Blue Pirates / Consortium", status: "Deceased (~1 year ago)", notes: "Half-elf; killed by Arthurian; had the green ledger; may have had a child (Lantis?)" },
    { name: "Rarik Ville", role: "Head Justice / Inquisitor", affil: "Ecclesiastic Church", status: "Active", notes: "Raised in Sister Erithine's orphanage; appeared as a 9-year-old in time-vision; pawn between Marshall and nobles" },
    { name: "Boltin Crestfyre", role: "Lieutenant, 4th Investigative Wing", affil: "4th Investigation Wing", status: "Active / Suspicious", notes: "Watched O'Malley's assassination without intervening; codeword 'Dagger' heard from assassins; spellcaster" },
    { name: "Hathor", role: "Military Adjutant", affil: "House Bluefist / House Mournen", status: "Active", notes: "Blue hand glove with crest; heavily armed; arrogant bearing; 3rd circle origin; theory: is the masked Establishment Leader" },
    { name: "Secus", role: "Operative / 1st Circle Noble (via marriage)", affil: "House Khol (by marriage)", status: "Active", notes: "Decima's brother; trained in cloak and dagger; organizing a possible coup; branded Decima as loyalty test" },
    { name: "O'Malley", role: "Merchant Contact", affil: "Marshall's network", status: "Deceased", notes: "Killed by Concierge assassins; dying words: 'Premier'; looted by Velintra (note: 'Westfall. Ravenscreft.', 7 gold, dagger, sealed letter, thorn talisman)" },
    { name: "Zahn", role: "Colonel", affil: "Militarum", status: "Active", notes: "Taking a lot of control; merchants may be building a coalition against him" },
    { name: "Alazar", role: "Associate", affil: "Magistrate area", status: "Active", notes: "Wants to join Archidibus (gun); seen with crossbow at Magistrate attack" },
    { name: "Zanzar", role: "Ex-Militia Leader", affil: "Militia (former)", status: "Captured/Traded", notes: "Missing 7 years (same time as prince); charismatic influence nobody could replace; being traded by the Establishment Leader" },
    { name: "Maestor Velitor", role: "Former Guild Master", affil: "Merchants' Guilds", status: "Disappeared", notes: "Head of the collective of merchant guilds; latest major disappearance" },
    { name: "Artemis", role: "Criminal / Former Operative", affil: "Unknown", status: "Active", notes: "Big, strong, scarred; condemned in mines; very interested in the green book symbol; Caldun recognized him" },
    { name: "Crane", role: "Unknown", affil: "Order of the Rose (theorized)", status: "Deceased", notes: "Killed by Caldun; Caldun broke off his fight with Arthurian specifically to kill Crane" },
    { name: "Caldun", role: "Unknown Operative", affil: "Possibly the Concierge", status: "Active", notes: "Fought Arthurian; had the green ledger before a warehouse explosion; recognized Artemis and Crane" },
    { name: "Volk Stormhammer", role: "Senior Miner / Dwarf", affil: "Yearning Mines", status: "Active", notes: "Old dwarf; knowledgeable about Dav Ki and ancient history; having tea with the Veinwarden post-interrogation" },
    { name: "Alren Davarre", role: "Head of House Davarre", affil: "House Davarre / 1st Circle", status: "Active", notes: "Ward of Mithe; archivists; Gloamspire Tower; lost daughter Cynthia and brother Alden; sent Mithe a cryptic farewell letter" },
    { name: "Selka Morren (Lady Factor)", role: "Noble / Auditor", affil: "Morren Family Syndicate", status: "Active", notes: "Marshall accused her of employing the heretic that caused the 'tragic incident'" },
    { name: "Sister Erithine", role: "Orphanage Manager", affil: "Church", status: "Deceased", notes: "Managed orphanage Rarik Ville grew up in; Velintra resembles her; death tag found in the time-vision" },
    { name: "The Warden of the Deep", role: "Primordial Entity / Guardian", affil: "Bound by 'Him'", status: "Active (in the deep)", notes: "Keeps a 'Shard' sealed beneath the surface; emerged from pool in the Abyss; wears a mask; large humanoid" },
    { name: "The Duke", role: "Former Ruler of Zen'tar", affil: "House Mournen", status: "Deceased", notes: "Brought Zen'tar to prominence; had the green ledger before his death; killed (possibly by Regency Council)" },
    { name: "The Prince", role: "Heir to Zen'tar", affil: "Vo'dyn Empire", status: "Missing", notes: "Son of the Duke; ~23-24 years old; missing ~7 years — same time as Zanzar" },
    { name: "Lux", role: "High Elf Mage / Mithe's Mother", affil: "Unknown party cohort", status: "Unknown", notes: "Joined a party cohort that disappeared; appeared in the time-vision as the 'high elf woman mage'" },
    { name: "Evelynn", role: "NPC (minor)", affil: "—", status: "Deceased", notes: "Woman screaming for missing child; watched by Velintra as she killed herself; the boy was found dead and turned to ash" },
    { name: "Zane", role: "Miner", affil: "Yearning Mines", status: "Active (last seen)", notes: "Friend Jonathan Wineford disappeared when light flickered; crossed out with a triangle on the prayer board" },
    { name: "Ralph Alvarez", role: "Missing Miner", affil: "Yearning Mines", status: "Missing", notes: "Name discrepancy on manifest board (15 down, 14 up, ledger said 16)" },
    { name: "Ulric Ironfist", role: "Military figure", affil: "Military house", status: "Active", notes: "From a military house; considered 'good'" },
    { name: "The Exalted One", role: "Past High Elf / Cult Figure", affil: "Unknown cult", status: "Deceased (still has followers)", notes: "Very powerful; Caldun operates under instructions from them" },
    { name: "Admiral Galewind", role: "Admiral, 7th Fleet", affil: "Nautica Liticus", status: "Active", notes: "Commands flagship The Martyr; arrived unexpectedly in Zen'tar" },
    { name: "Commodore Sal'vin", role: "Deputy, 7th Fleet", affil: "Nautica Liticus", status: "Active", notes: "One of Galewind's two deputies" },
    { name: "First Circler", role: "Unknown Noble", affil: "1st Circle / House Khol", status: "Active", notes: "Garth desperately wants to impress them; THEORY: this is Secus, who married into House Khol" },
    { name: "Reginald", role: "Unknown", affil: "—", status: "Active", notes: "Interrogated by the Marshall during Session 12; no further details known" },
  ],
  locations: [
    { name: "Avar", type: "World / Continent", desc: "A supercontinent-sized subterranean cave system. Humanity fled here during the Cataclysm. Features bioluminescent ceiling flora (can cause burns at proximity), glow mosses, and lurking monsters in the dark." },
    { name: "Zen'tar (Zenthar)", type: "City / Regional Sub-Capital", desc: "6th circle area. Between two giant rivers; not easily accessible. Politically unstable after the Duke's death. Cobalt/mithril mining hub. Currently under partial martial law with the 7th Fleet's unexpected arrival." },
    { name: "Kholinar / The Capital", type: "Capital City", desc: "Originally the 1st/0th circle capital of Vo'dyn. No longer exists by that name; now referred to as 'The Capital.'" },
    { name: "The Yearning Mines", type: "Mine / Penal Colony", desc: "Jurisdiction of the Marshall. Main export is Cobalt (blue, explosive when 'awakened'). Penal colony with a trustee system. High cave-in rate. Site of the party's deep dive and encounter with the Warden." },
    { name: "Veinhold Gatehouse", type: "Gatehouse / Military Checkpoint", desc: "Entry point to the mines area. Marshall's Men stationed here. Reinforced during martial law." },
    { name: "Government Office (Magistrate)", type: "Government Building", desc: "Fortified. Site of a terrorist attack (Session 6). Arthur was found inside with sword drawn." },
    { name: "Investigator Station", type: "Adhoc Office", desc: "Located in the Upper District. Arthur's primary base. Not a formal Vo'dyn institution — a few desks within the Magistrate area." },
    { name: "Sunken Croc Tavern", type: "Tavern / Criminal Den", desc: "On the outskirts of Zen'tar. Blue Pirates/Consortium territory. Lantis frequented it. Site of the Secus/Establishment Leader meeting." },
    { name: "AX42 Sanitarium", type: "Sanitarium / Investigation Site", desc: "Last known location of disappearances. More run-down with purpose. Can analyze mist droplets here." },
    { name: "Drunken Dog Inn", type: "Inn / Party Base", desc: "Party's base of operations in Zen'tar. The Narrows are east of it." },
    { name: "Merchant District", type: "District", desc: "Merchants have kicked out city guards and brought in their own mercenaries. Site of O'Malley's assassination." },
    { name: "Scholarium Adjuticai", type: "Academic Institution", desc: "Visible on the city map. Notable location near the Merchant District." },
    { name: "Upper District", type: "District", desc: "Wealthier area; Investigator Station located here." },
    { name: "Aristocracy / Ministerial District", type: "District", desc: "Also hit during the Session 6 attacks. Noble residences." },
    { name: "The Bazaar", type: "Mixed-Race Location", desc: "Directly controlled by the Inquisition (a rarity). One of only two major mixed-race locations in the world." },
    { name: "Weaver's Arch", type: "Historical Landmark", desc: "Where the late Duke gave speeches before his death. Now broken stones and rock. Referenced in Ryo's map rubbing (IV:3, Westwell 2nd)." },
    { name: "Stork Industries", type: "Corporation / Industry", desc: "Life-extension research, special ore mining, weapon production. Present in most circles except 1st/2nd outside of lobbyists. Duke brought it to prominence." },
    { name: "Gloamspire Tower", type: "Noble Residence", desc: "House Davarre's main residence. Rises from still waters of a cavern lake on the outskirts of the 1st circle. A place of archivists and record-keepers." },
    { name: "The Bandlewoods", type: "Region / Farm", desc: "8th circle. Ryo's home. Forests with cave systems. Where Ryo absorbed the ancient mage's finger from a dying Chimera." },
    { name: "Principality of Al'tan", type: "Neutral Territory", desc: "One of only two major mixed-race locations; consists of a few strongholds; used as a neutral meeting ground." },
    { name: "The Intermed", type: "Unknown", desc: "Visible on the city map to the east. Details unknown." },
  ],
  orgs: [
    { name: "The Consortium / Blue Pirates", type: "Criminal Organization", leader: "Mithris (deceased); current leader unknown", members: "Lantis (associated?); Caldun (?)", notes: "Heavy-handed and uncouth; operate in Zen'tar's outskirts; control Sunken Croc area; Arthur massacred them and killed Mithris ~1 year ago" },
    { name: "The Concierge", type: "Assassin Guild", leader: "Unknown", members: "Caldun (connected); assassins with red armbands", notes: "Killed O'Malley; fled with their dead leaving no traces; codeword 'Dagger'; possibly tied to noble influence via Boltin Crestfyre" },
    { name: "The Inquisition", type: "Religious Enforcement Body", leader: "Answers to 'Him' nominally; practically no one", members: "Rarik Ville (Inquisitor)", notes: "Enforce tithe and suppress heresy; can execute instantly regardless of noble status; directly govern The Bazaar" },
    { name: "Council of Regency", type: "Governing Body", leader: "Unknown", members: "Various nobles", notes: "Formed after Duke's death; cares only about short-term; politically warring with multiple factions" },
    { name: "The Militarum", type: "Formal Military", leader: "The Marshall (in Zen'tar); Zahn (Colonel)", members: "Marshall's Men; Seers (8th Battalion); Penitent Outriders/Deathriders", notes: "Official military name. Currently attempting to seize authority under martial law. Marshall allegedly tied to a noble house." },
    { name: "Penal Outriders / Penitent Deathriders", type: "Penal Military Division", leader: "Verin Ralthar", members: "The player characters (party)", notes: "The party's assigned division. Operate within Zen'tar." },
    { name: "City Guard / Magistrate", type: "City Guard", leader: "Garth (Deputy Sergeant in Arms)", members: "'Enforcers', 'Sweepers', 'Paperboys'", notes: "Keep peace; separate from militia; barely exist anymore per overheard conversation." },
    { name: "Investigators (Adhoc Division)", type: "Investigation Unit", leader: "Arthur Augustus Esquire", members: "Lantis (junior); Boltin Crestfyre (4th Wing Lt.)", notes: "Not a formal Vo'dyn institution. Does not get involved with Merchants per Charter of Commerce." },
    { name: "The Militia", type: "Ad-Hoc Militant Force", leader: "Zanzar (former, missing 7 years)", members: "Veterans in brotherhood lodges", notes: "Has not been active; Zanzar was so charismatic nobody could replace him; Secus wants to acquire this force." },
    { name: "Order of the Flame", type: "Paladin Order", leader: "Unknown", members: "Aldred (former)", notes: "Neutral paladin order; possesses 4 oathblades; pendant glows near great evil; Aldred is one of few survivors of the pentagram incident." },
    { name: "The Aperations", type: "Cultist Order", leader: "Unknown", members: "Unknown cultists", notes: "The order the Order of the Flame was trying to eradicate; an Aperation crumpled at Aldred's touch." },
    { name: "Luminary Council / Society of Brilliance", type: "Magical Think-Tank", leader: "Unknown (secreted membership)", members: "The Great Martyred Lady (rumored founder)", notes: "Leading authority on magical theory. Has a chapter in Zen'tar." },
    { name: "The Nautica Liticus", type: "Naval Command", leader: "Admiral Galewind; Commodore Sal'vin (deputy)", members: "7th Fleet; The Martyr (flagship)", notes: "Controls the general navy; not under the Militarum but associated. The 7th Fleet is the oldest and most storied." },
    { name: "House Mournen", type: "Noble House", leader: "The Duke (deceased); Council of Regency", members: "Hathor (associated)", notes: "Dynastically tied to Zen'tar. Duke withdrew to the city after a falling out in the capital." },
    { name: "House Khol", type: "Noble House", leader: "Unknown current head", members: "Secus (married in)", notes: "A great house. Secus married into House Khol and is extremely loyal to them." },
    { name: "House Davarre", type: "Noble House", leader: "Alren Davarre", members: "Bridgette (daughter); Mark (nephew)", notes: "Cadet remnant of one of the original 12 houses. Archivists in the Gloamspire Tower." },
    { name: "House Domitae", type: "Noble House", leader: "Unknown", members: "Decima; Magus (father); Julia (mother); Prima, Secus, Quartus, Sexti, Septi (living siblings)", notes: "Dextra and Sinetra are the right and left of House Domitae. Decima uses the pseudonym 'Delattre.'" },
    { name: "House Bluefist", type: "Noble House (Cadet Branch)", leader: "Hathor (associated)", members: "Hathor", notes: "A cadet branch of House Mournen. Slightly out of place as they are from the 3rd circle." },
    { name: "House Sadin / Lanvar / Gulfen / Trinton", type: "Noble Houses", leader: "Unknown", members: "Unknown", notes: "Part of the original ~9-12 great houses. Gulfen and Trinton both have trident-based heraldry." },
    { name: "Morren Family Syndicate", type: "Noble / Criminal Syndicate", leader: "Clandet Morren; Selka Morren (Lady Factor)", members: "Clandet Morren; Lady Factor Selka Morren", notes: "Selka Morren accused of employing the heretic who caused the 'tragic incident.'" },
    { name: "Order of the Rose", type: "Unknown Organization", leader: "Unknown", members: "Crane (likely)", notes: "Caldun dropped his fight with Arthurian specifically to kill Crane, suggesting high importance/threat." },
    { name: "The Church / Ecclesiastic Church", type: "Religious Institution", leader: "'Him' nominally; Inquisitors practically", members: "Inquisitors; Church Guard; paladins (associated)", notes: "State religion of Vo'dyn; core tenets: martyrdom/self-sacrifice, belief in Him and the Martyrs, The Mandate." },
    { name: "The Dav Ki", type: "Ancient Civilization / Race", leader: "Hold-based system", members: "Volk Stormhammer (dwarf, related race)", notes: "Ancient dwarf-kin civilization; much of their empire lost. Vo'dyn inherited their strongholds." },
    { name: "Merchant Guilds", type: "Commercial Faction", leader: "Maestor Velitor (former, disappeared)", members: "Guild Guards; Hired Mercenaries", notes: "Kicking out city guard and bringing in private mercenaries. Externally unified but internally fighting." },
  ],
  theories: [
    { label: "First Circler = Secus", detail: "The 'First Circler' Garth desperately wants to impress is theorized to be Secus — Decima's brother — who married into House Khol, a 1st circle family." },
    { label: "Hathor = The Establishment Leader", detail: "Hathor (Military Adjutant, 3rd circle, House Bluefist/Mournen, blue glove) is theorized to be the masked Establishment Leader from the Sunken Croc meeting." },
    { label: "Lantis = Mithris's Child", detail: "Arthur massacred the Blue Pirates and killed their half-elf leader Mithris, yet now associates with Lantis — another half-elf. Theory: Mithris had a child; Arthur spared him out of guilt." },
    { label: "The Duke Found the Ledger and Was Killed for It", detail: "The letter 'To M' reads: 'In the deepest vault I found a ledger... I feel them already, nibbling at my name.' The late Duke likely found the ancient ledger, discovered too much, and was targeted by the Urd or those serving them." },
    { label: "The Warden Guards the Same Entity Corrupting Ryo", detail: "Journal entries describe the same entity the Warden guards in the Abyss pool — the same 'Wound' or 'Shard' connected to the 16-beat machine rhythm." },
    { label: "Lux = The High Elf Mage in the Time Vision", detail: "Lux is Mithe's elven mother. She 'joined a party cohort that disappeared.' The time-vision showed a party of 5 including a high elf woman mage — strongly implied to be Lux." },
    { label: "The Martyrs Become the Veil / Watchers", detail: "Each veil of the world was created from the sacrifice of a Martyr. Current working list: 1st = Gavriel/Him, 2nd = Evening Star/Warden?, 4th = Great Martyred Lady, 5th = Jorell." },
    { label: "The Hourglass Figure Controls Probability", detail: "The Final Chronicler = The Prophet = The Quiet Architect (K). Controls an hourglass tied to probability engineering. May have been in love with Fate (who is now dead)." },
    { label: "Vo'dyn Religion Suppresses Knowledge of the Wound", detail: "Heresy = curiosity and deviation from doctrine. The Cataclysm was caused by overreach which woke the Urd. The Church rewrote it as divine punishment to stop people trying to understand the Wound." },
    { label: "The Coup Web: Marshall / Blue Pirates / Secus / Hathor", detail: "The Marshall is in talks with Lantis (Blue Pirates adjacent). The Blue Pirates connect to Secus and the masked Establishment Leader (theorized = Hathor). Secus (House Khol) is organizing a coup." },
    { label: "Awakened Cobalt Counters the Flux / Wound", detail: "The Speaker stated 'awakened Cobalt is the only thing to counter the flux.' The Cobalt in the mines ripped open a portal between realities, suggesting it interacts with the seals holding the Wound at bay." },
    { label: "270 Cycles to New Year Is Not a Random Number", detail: "DM confirmed: '270 cycles. No, this is not a random number.' Magic re-emerged at year 427 (The Recreance), then again in year 626 (The Awakening) — exactly 199 years later." },
  ],
};

// Org type to tag background color
const ORG_COLORS = {
  "Criminal Organization": "rgba(139,26,26,0.35)",
  "Assassin Guild": "rgba(30,20,10,0.6)",
  "Religious Enforcement Body": "rgba(42,74,127,0.35)",
  "Governing Body": "rgba(30,80,40,0.35)",
  "Formal Military": "rgba(60,60,50,0.5)",
  "Penal Military Division": "rgba(80,55,20,0.4)",
  "City Guard": "rgba(42,74,127,0.3)",
  "Investigation Unit": "rgba(60,42,100,0.35)",
  "Ad-Hoc Militant Force": "rgba(80,40,20,0.4)",
  "Paladin Order": "rgba(100,85,20,0.4)",
  "Cultist Order": "rgba(80,20,80,0.4)",
  "Magical Think-Tank": "rgba(20,80,60,0.4)",
  "Naval Command": "rgba(20,60,80,0.4)",
  "Noble House": "rgba(80,55,20,0.4)",
  "Noble House (Cadet Branch)": "rgba(80,55,20,0.4)",
  "Noble Houses": "rgba(80,55,20,0.4)",
  "Noble / Criminal Syndicate": "rgba(100,20,50,0.4)",
  "Unknown Organization": "rgba(50,50,50,0.4)",
  "Religious Institution": "rgba(42,74,127,0.35)",
  "Ancient Civilization / Race": "rgba(30,60,20,0.4)",
  "Commercial Faction": "rgba(20,60,40,0.4)",
};

// Tab names; index 0 is the special All tab
const TABS = ["All", "Player Characters", "NPCs", "Locations", "Organizations", "Theories"];

// App state
let currentTab = 0;
let searchTerm = "";
let expandedItem = null;


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
      expandedItem = null;
      renderTabs();
      renderContent();
    };
    container.appendChild(btn);
  });
}

// Route to the correct render function for the active tab
function renderContent() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  const filtered = getFiltered();

  if (currentTab === 0) {
    renderAll(filtered, container);
    return;
  }

  const renderers = [null, renderPlayers, renderNPCs, renderLocations, renderOrgs, renderTheories];
  const keys = [null, "players", "npcs", "locations", "orgs", "theories"];
  renderers[currentTab](filtered[keys[currentTab]], container);
}

// Filter each data array by checking if any field value contains the search term
function getFiltered() {
  const match = obj => Object.values(obj).some(v => String(v).toLowerCase().includes(searchTerm));
  return {
    players: data.players.filter(match),
    npcs: data.npcs.filter(match),
    locations: data.locations.filter(match),
    orgs: data.orgs.filter(match),
    theories: data.theories.filter(match),
  };
}

// Toggle a card open or closed, then re-render to reflect the change
function toggleItem(id) {
  expandedItem = expandedItem === id ? null : id;
  renderContent();
}


// All tab: render every category separated by a labeled divider
function renderAll(filtered, container) {
  const sections = [
    { label: "Section I", title: "Player Characters", key: "players", fn: renderPlayers },
    { label: "Section II", title: "Non-Player Characters", key: "npcs", fn: renderNPCs },
    { label: "Section III", title: "Locations", key: "locations", fn: renderLocations },
    { label: "Section IV", title: "Organizations", key: "orgs", fn: renderOrgs },
    { label: "Section V", title: "Theories", key: "theories", fn: renderTheories },
  ];

  sections.forEach(section => {
    if (!filtered[section.key].length) return;

    const divider = makeEl("div", "section-divider");
    divider.appendChild(makeEl("span", "section-divider-label", section.label));
    divider.appendChild(makeEl("span", "section-divider-rule"));
    container.appendChild(divider);

    container.appendChild(makeEl("div", "section-title", section.title));

    // Render into a temp node then move children into the real container
    const temp = document.createElement("div");
    section.fn(filtered[section.key], temp);
    while (temp.firstChild) container.appendChild(temp.firstChild);
  });
}


// Render player character accordion cards
function renderPlayers(players, target) {
  players.forEach((p, i) => {
    const id = "pc-" + i;
    const open = expandedItem === id;

    const item = makeEl("div", "item pc-item" + (open ? " expanded" : ""));

    const header = makeEl("div", "item-header");
    header.onclick = () => toggleItem(id);

    const nameBlock = makeEl("div", "item-name-block");
    nameBlock.appendChild(makeEl("span", "item-title", p.name));
    nameBlock.appendChild(makeEl("span", "item-subtitle", p.race + " · " + p.cls));

    const meta = makeEl("div", "item-meta");
    meta.appendChild(makeEl("span", "tag echo-tag", "Echo: " + p.keyword));
    meta.appendChild(makeEl("span", "age-tag", "Age " + p.age));
    meta.appendChild(makeEl("span", "item-toggle", "▶"));

    header.appendChild(nameBlock);
    header.appendChild(meta);
    item.appendChild(header);

    if (open) {
      const body = makeEl("div", "item-body");
      body.appendChild(makeField("Appearance", p.appearance));
      body.appendChild(makeField("Traits & Notes", p.traits));
      const conn = makeField("Connections", p.connections);
      conn.classList.add("full-row");
      body.appendChild(conn);
      item.appendChild(body);
    }

    target.appendChild(item);
  });
}

// Render NPC accordion cards
function renderNPCs(npcs, target) {
  npcs.forEach((n, i) => {
    const id = "npc-" + i;
    const open = expandedItem === id;

    const item = makeEl("div", "item npc-item" + (open ? " expanded" : ""));

    const header = makeEl("div", "item-header");
    header.onclick = () => toggleItem(id);

    const nameBlock = makeEl("div", "item-name-block");
    nameBlock.appendChild(makeEl("span", "item-title", n.name));
    nameBlock.appendChild(makeEl("span", "item-subtitle", n.role));

    const meta = makeEl("div", "item-meta");
    meta.appendChild(makeEl("span", "item-subtitle", n.affil));

    // Status color is set inline at runtime based on the status text
    const statusEl = makeEl("span", "status-tag", n.status);
    const color = getStatusColor(n.status);
    statusEl.style.color = color;
    statusEl.style.borderColor = color;
    meta.appendChild(statusEl);
    meta.appendChild(makeEl("span", "item-toggle", "▶"));

    header.appendChild(nameBlock);
    header.appendChild(meta);
    item.appendChild(header);

    if (open) {
      const body = makeEl("div", "item-body single-col");
      body.appendChild(makeField("Notes", n.notes));
      item.appendChild(body);
    }

    target.appendChild(item);
  });
}

// Render locations as a card grid (not accordion)
function renderLocations(locations, target) {
  const grid = makeEl("div", "locations-grid");
  locations.forEach(l => {
    const card = makeEl("div", "location-card");
    card.appendChild(makeEl("div", "location-name", l.name));
    card.appendChild(makeEl("div", "location-type", l.type));
    card.appendChild(makeEl("div", "location-desc", l.desc));
    grid.appendChild(card);
  });
  target.appendChild(grid);
}

// Render organization accordion cards
function renderOrgs(orgs, target) {
  orgs.forEach((o, i) => {
    const id = "org-" + i;
    const open = expandedItem === id;

    const item = makeEl("div", "item org-item" + (open ? " expanded" : ""));

    const header = makeEl("div", "item-header");
    header.onclick = () => toggleItem(id);

    const nameBlock = makeEl("div", "item-name-block");
    nameBlock.appendChild(makeEl("span", "item-title", o.name));

    // Org type tag background is set inline at runtime
    const typeTag = makeEl("span", "org-type-tag", o.type);
    typeTag.style.background = ORG_COLORS[o.type] || "rgba(50,50,50,0.4)";

    const meta = makeEl("div", "item-meta");
    meta.appendChild(typeTag);
    meta.appendChild(makeEl("span", "item-toggle", "▶"));

    header.appendChild(nameBlock);
    header.appendChild(meta);
    item.appendChild(header);

    if (open) {
      const body = makeEl("div", "item-body");
      body.appendChild(makeField("Leader", o.leader));
      body.appendChild(makeField("Known Members", o.members));
      const notes = makeField("Notes", o.notes);
      notes.classList.add("full-row");
      body.appendChild(notes);
      item.appendChild(body);
    }

    target.appendChild(item);
  });
}

// Render theories as static cards with a disclaimer at the top
function renderTheories(theories, target) {
  target.appendChild(makeEl("div", "theories-warning", "Player theories — not confirmed canon"));

  theories.forEach(t => {
    const card = makeEl("div", "theory-card");
    card.appendChild(makeEl("div", "theory-label", t.label));
    card.appendChild(makeEl("div", "theory-detail", t.detail));
    target.appendChild(card);
  });
}


// Create an element with a class and optional text content
function makeEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

// Create a labeled two-line field block used inside expanded card bodies
function makeField(label, value) {
  const field = document.createElement("div");
  field.appendChild(makeEl("div", "field-label", label));
  field.appendChild(makeEl("div", "field-value", value));
  return field;
}

// Return a highlight color based on the status text
function getStatusColor(status) {
  if (!status) return "#6b6358";
  const s = status.toLowerCase();
  if (s.includes("deceased") || s.includes("dead")) return "#e88";
  if (s.includes("missing") || s.includes("disappear")) return "#d4a843";
  if (s.includes("suspicious")) return "#c8843a";
  if (s.includes("active")) return "#8c8";
  return "#c4bfb0";
}

document.addEventListener("DOMContentLoaded", init);
