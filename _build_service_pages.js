/**
 * Build 5 unique service pages — each targets near-me + queens + commercial intent.
 * Reuses the homepage's <style> block + topbar + header + footer pattern.
 * Each page has unique H1, H2s, body copy, FAQ, scenarios.
 */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

// ===== Per-service unique configs =====
const SERVICES = [
  {
    slug: 'jumpstart',
    name: 'Jumpstart',
    h1: 'Jumpstart Service Queens',
    titleTag: 'Jumpstart Service Near Me in Queens | $125 Flat 24/7',
    metaDesc: 'Jumpstart service near me in Queens NY — $125 flat. 24/7 dispatch, ~25 min average response. Portable jump packs, AGM-safe, full booster cables. Text us.',
    primaryKw: 'jumpstart service queens',
    iconSvg: '<path d="M13 2L3 14h7v8l10-12h-7z"/>',
    color: '#F59E0B',
    breadcrumb: 'Jumpstart',
    h2s: {
      what: 'What is Jump Start Service?',
      when: 'When to Call for a Jump Start in Queens',
      coverage: 'Jumpstart Service Across Queens',
      equipment: 'What We Bring on a Jump Start Call',
      vehicleTypes: 'Vehicle Types We Jump Start',
      diagnosis: 'How We Diagnose a Dead Battery',
      process: 'How a Jump Start Call Works',
      scenarios: 'Common Jump Start Scenarios in Queens',
      pricing: 'Jumpstart Pricing — $125 Flat',
      faq: 'Jumpstart FAQ',
    },
    intro: `Jumpstart service is the most common roadside assistance call in Queens by a wide margin. A jump start restarts a vehicle whose battery has lost enough charge to crank the engine — by connecting a portable jump pack or booster cables from a working power source to the dead battery, providing the burst of current the starter needs.`,
    paraWhat1: `Jumpstart service in Queens means a roadside technician arrives at your stuck vehicle, hooks a jump pack or booster cables to your battery terminals, and gets your engine running. The whole process takes around 15 minutes on site for a typical 12V passenger car battery, including the safety checks before disconnecting and the brief idle period after.`,
    paraWhat2: `The most common cause of a dead battery in Queens is a slow drain — interior lights left on overnight, dome lights triggered by a half-shut door, parasitic draws from aftermarket electronics, or simply a battery at the end of its 3-5 year service life that gave up on a cold morning. Jump Start is the fast fix. If the battery refuses to hold a charge after a successful jump start, that's a battery replacement situation, not a jump start problem.`,
    when: [
      ['Dead battery, no crank — engine completely silent when you turn the key.', 'Most common. Indicates the battery doesn\'t have enough current to engage the starter motor. A jump start almost always solves it.'],
      ['Dim dashboard lights, slow crank — engine struggles to turn over.', 'Battery is partially drained but still has some charge. Jump Start will get it running, but if this is a recurring pattern the battery needs testing or replacement.'],
      ['Headlights on but car won\'t start — interior lights work, engine doesn\'t crank.', 'Classic dead-battery symptom. Headlights draw less current than the starter motor, so they can light up while the battery is too weak to start the car.'],
      ['Clicking sound when you turn the key.', 'Either the battery is too weak to fully engage the starter, or the starter motor itself is failing. Jump Start distinguishes between the two — if the engine fires up after a jump start, it was the battery.'],
      ['Car has been sitting unused for 2+ weeks.', 'Modern cars draw small amounts of power even when off (clock, alarm, computer modules). After a couple weeks of no use, a marginal battery is often dead.'],
      ['After a cold night below 20°F.', 'Cold reduces battery efficiency by 30-60%. A battery that was marginal yesterday is dead this morning. Queens sees this every winter — jump start calls spike on the first sub-15°F morning of the season.'],
    ],
    coverage: `Jumpstart service in Queens covers every neighborhood — Astoria, Long Island City, Sunnyside, Woodside, Jackson Heights, East Elmhurst, Corona, Flushing, Forest Hills, Rego Park, Briarwood, Jamaica, Howard Beach, Ozone Park, Richmond Hill, Maspeth, Ridgewood, Whitestone, College Point, Fresh Meadows. Border Brooklyn neighborhoods (Greenpoint, Williamsburg, East New York) are in our footprint as well. Average arrival time is approximately 25 minutes in Queens core, 35 minutes in border Brooklyn.`,
    coverageWhy: `Why we get there fast: our service vehicles are staged inside Queens, not routed from a national dispatch center. When you call (718) 550-1460 from Astoria, a truck already on the same side of the BQE responds. National roadside membership programs route the call to whichever third-party vendor is available — often not us — which adds 30-60 minutes to your wait.`,
    equipment: [
      ['Portable jump packs', 'Lithium-ion jump packs rated for 12V passenger cars. AGM-safe technology — won\'t damage modern start-stop battery systems. We carry multiple packs per truck so multiple calls don\'t leave us short-handed.'],
      ['Full booster cables', 'Heavy-gauge copper booster cables for older cars that don\'t respond well to compact jump packs, or for situations where battery terminals are corroded and need a stronger connection.'],
      ['Battery terminal cleaner + brushes', 'Corroded battery terminals are a common reason a jump start "doesn\'t take." We clean before connecting.'],
      ['Multimeter', 'For diagnosing whether the issue is the battery, the alternator, or the starter — before we make assumptions about what you need.'],
      ['Backup power for the technician', 'So we can also help if your phone is dead while you wait.'],
    ],
    vehicleTypes: [
      ['Standard 12V passenger cars', 'Sedans, SUVs, light pickups, vans — the everyday vehicle. Jump Start works on virtually all standard 12V batteries.'],
      ['AGM (Absorbed Glass Mat) batteries', 'Common in newer cars with start-stop systems. Our jump packs are AGM-safe — older boost techniques can damage AGM. Make sure whoever jumps your AGM battery knows the difference.'],
      ['Hybrid vehicles (12V auxiliary battery)', 'Hybrids have a small 12V battery that runs the electronics — when it dies, the car won\'t boot up even though the main hybrid battery is fine. We jump start the 12V, not the hybrid pack.'],
      ['Older vehicles with weak alternators', 'A jump start will get you started, but if the alternator is failing the car will die again within minutes of disconnect. We diagnose this and recommend a tow if needed.'],
      ['EVs (Tesla, Rivian, etc.) — 12V auxiliary only', 'Same as hybrids. EVs have a 12V battery for electronics that can die independently of the main pack. We jump start that 12V — we do not "charge" the main EV battery (that requires a charging station).'],
    ],
    diagnosis: `Before we put cables on, we ask three questions: how old is the battery, did anything stay on overnight, and what symptoms led to the call? A 5-year-old battery that died after the lights were left on is a different situation than a 1-year-old battery that died for no obvious reason. The first is a normal end-of-life jump start. The second is a parasitic draw or alternator issue, and a jump start will only get the car home — the underlying problem still needs a shop visit. We tell you which scenario you're in before we leave.`,
    process: [
      ['Call (718) 550-1460 — describe the symptoms.', 'Tell us your location (cross streets are best), the year/make/model, and what\'s happening. We give you an arrival window.'],
      ['Truck arrives, tech identifies the vehicle.', 'License plate, make/model match. Quick look at the dash for warning lights.'],
      ['Battery tested with a multimeter.', 'Voltage check. Below 11.5V = dead. Below 9V = severely discharged or failing. Above 12.4V = the battery is fine and the issue is elsewhere.'],
      ['Cables/jump pack connected — engine started.', 'Standard jump start procedure: positive on dead, then positive on good, then negative on good, then ground on the dead vehicle\'s engine block.'],
      ['Brief idle period to verify alternator is charging.', '5-10 minutes of idle to confirm the alternator can hold the charge once the cables are off.'],
      ['Payment ($125 flat) and you\'re done.', 'Cash, card, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt for insurance reimbursement if you have roadside coverage that pays out-of-network.'],
    ],
    scenarios: [
      ['Astoria street parking — battery died overnight after the dome light stayed on', 'You parked on a side street off 30th Avenue, the door didn\'t fully shut, dome light burned all night. Cold morning, no crank. Call (718) 550-1460, tech is there in 20 minutes, jump start in 5, you\'re driving to work.'],
      ['LIC high-rise garage — forgot the headlights on', 'Park in the Center Boulevard garage Friday after work, walk to dinner. Come back Saturday morning, dead battery. Most national roadside services route to a third-party that may or may not have garage clearance. We dispatch a small service van that fits the height limits.'],
      ['Forest Hills cold morning — January sub-15°F snap', 'First arctic morning of winter. Half of Queens has dead batteries by 7am. We dispatch in waves. If you suspected your battery was weak going into winter and didn\'t replace it, this is the scenario where it bites.'],
      ['Howard Beach summer afternoon — AC drained the battery on a long idle', 'Sat in the car with the AC running waiting for someone, engine off. Modern AC systems draw a lot of current with the engine off. Battery dies in under an hour on a hot day. Jump Start, lecture about not running AC with the engine off, you\'re driving.'],
      ['Jamaica auto-parts store parking lot — bought a new battery, can\'t install it', 'Shop sold you the right battery but doesn\'t install. We\'ll bring it (or you bring it from the store), install it on the spot. Technically that\'s a battery replacement call, not a jump start, but it\'s a common combo.'],
      ['Whitestone bridge approach — alternator failed, car died on the highway', 'You made it off the bridge but coasted to the shoulder. Jump Start will get you started, but the alternator isn\'t charging — the car will die again in 5-15 minutes. We\'ll tell you on the spot whether to limp it home or call for a tow to the shop.'],
    ],
    pricingItems: [
      'Local dispatch from inside Queens (no national routing)',
      'One jump start performed completely (we don\'t leave until the engine is running)',
      'Multimeter battery + alternator diagnosis included',
      'No surcharges for nights, weekends, or holidays',
      'Itemized invoice for insurance reimbursement',
      'Payment on completion — no money until your car is running',
    ],
    faqs: [
      ['How much does a jump start cost in Queens?', '$125 flat. No hourly meter, no late-night surcharge, no membership tier. The number you hear when you call is what you pay when the engine starts.'],
      ['How long does a jump start take?', 'Approximately 15 minutes on site for a standard 12V battery. Total time including dispatch arrival is typically 30-45 minutes from your call.'],
      ['Will a jump start fix my problem permanently?', 'It depends on why the battery died. If it died from a one-time drain (lights left on, cold snap), yes — drive 20+ minutes to recharge fully and you\'re fine. If the battery is end-of-life (3-5 years old, repeatedly dies), the jump start is a temporary fix and you need a battery replacement.'],
      ['Will a jump start damage my car?', 'No, when done correctly with modern AGM-safe equipment. The risk is using cheap booster cables on a modern start-stop AGM battery, which can spike voltage and fry electronics. We don\'t do that.'],
      ['What if the jump start doesn\'t work?', 'If the engine doesn\'t fire up, we diagnose on the spot. Most common reason: the battery is dead beyond reviving — we shift to battery replacement, or tow to your shop. Less common: starter motor is failing — we tow to a mechanic.'],
      ['Can you jump start a Tesla / EV?', 'We can jump start the 12V auxiliary battery in an EV, which is what dies and locks you out of the car. We do not charge the main EV battery — that requires a Level 2 or DC fast charger.'],
      ['Do I need to be present for the jump start?', 'Yes — for the safety check and to drive the car after. We don\'t leave a running, unattended vehicle on a Queens street.'],
      ['What payment methods do you accept for jump start calls?', 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp. Paid on completion of the service.'],
      ['Do you jump start trucks and commercial vehicles?', 'Light-duty trucks and commercial vans, yes. Heavy commercial (semi-trucks, box trucks over 26k GVWR) — those need heavy-duty boost service that we don\'t provide.'],
      ['Is jump start available 24 hours in Queens?', 'Yes. (718) 550-1460 is staffed 24/7/365. Late-night and early-morning calls are typically the fastest because traffic is lighter.'],
    ],
  },

  {
    slug: 'car-lockout',
    name: 'Car Lockout',
    h1: 'Car Lockout Service Queens',
    titleTag: 'Car Lockout Service Near Me in Queens | $125 Flat 24/7',
    metaDesc: 'Car lockout service near me in Queens — $125 flat. Locked keys in car, dead key fob, auto-relock. Slim jims, long-reach tools, no paint damage. 24/7 text us.',
    primaryKw: 'car lockout service queens',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    color: '#F59E0B',
    breadcrumb: 'Car Lockout',
    h2s: {
      what: 'What is Car Lockout Service?',
      when: 'When to Call for a Lockout in Queens',
      coverage: 'Car Lockout Service Across Queens',
      equipment: 'Tools We Use to Open Your Car',
      vehicleTypes: 'Vehicle Types We Unlock',
      whatWeDont: 'What Lockout Service Does NOT Cover',
      process: 'How a Lockout Call Works',
      scenarios: 'Common Lockout Scenarios in Queens',
      pricing: 'Lockout Pricing — $125 Flat',
      faq: 'Car Lockout FAQ',
    },
    intro: `Car lockout service unlocks a vehicle whose driver doesn\'t have access to the keys — keys locked inside the cabin, dead key fob, auto-relock with the engine running, or a fob misplaced after a long night. A roadside lockout technician arrives with non-marring tools and opens the door without damaging the weather seals or paintwork.`,
    paraWhat1: `Car lockout in Queens means a roadside tech shows up with slim jims, long-reach tools, and air wedges, opens your driver\'s side door, and gets you back in your car. The work takes 5-15 minutes for most modern vehicles. We do not duplicate keys, cut keys, or program key fobs roadside — that requires a locksmith or dealer. If the issue is a programming/fob problem, we can tow you to a Queens locksmith.`,
    paraWhat2: `The most common reason for a lockout in Queens is the simplest one: keys in the car, doors locked. Newer cars with auto-lock features will lock automatically once the fob is out of range or after a delay if no door has opened. Smart-key systems with weak fob batteries can also fail to recognize the fob inside the car when you\'re standing next to it.`,
    when: [
      ['Keys locked inside the car — visible in the cup holder or seat.', 'Most common scenario. The fix is straightforward: a slim jim or long-reach tool unlocks the door from inside the cabin.'],
      ['Keys in the trunk, trunk closed.', 'For most vehicles we can release the trunk after opening the cabin. For certain models (older European cars without an interior trunk release) we may need to tow you to a locksmith.'],
      ['Dead key fob battery — fob doesn\'t unlock anymore.', 'Most fobs have a manual hidden key inside (slide a tab on the back). If you don\'t know how to extract it, we\'ll show you and replace the battery if you have one. The key in the fob still opens the lock cylinder.'],
      ['Auto-relock with the engine running.', 'Some cars auto-lock once you walk away from the running car (very common with rideshare drivers and parents loading kids). Same fix as a standard lockout.'],
      ['Fob in a Faraday-shielding bag inside the car.', 'Bags marketed as "anti-theft RF blockers" can isolate the fob signal even when the fob is in range. Same fix.'],
      ['Frozen lock cylinder in winter.', 'Door is unlocked from the fob but the physical lock or latch has frozen. We can de-ice and free it. Different from a normal lockout but covered under the same call.'],
    ],
    coverage: `Car lockout service in Queens covers every neighborhood — restaurant parking lots, residential streets, gas stations, shopping centers, parking garages, residential driveways. Astoria, LIC, Sunnyside, Woodside, Jackson Heights, East Elmhurst, Corona, Flushing, Forest Hills, Rego Park, Briarwood, Jamaica, Howard Beach, Ozone Park, Richmond Hill, Maspeth, Ridgewood, Whitestone, College Point, Fresh Meadows. Plus border Brooklyn (Greenpoint, Williamsburg, East New York). Average arrival time approximately 25 minutes in Queens core, 35 minutes in border Brooklyn.`,
    coverageWhy: `Lockouts feel urgent. We treat them as such — same dispatch priority as a jump start, faster than a non-blocking tow request. Service vehicles staged inside Queens means the truck (or in many cases a smaller service van that\'s easier to maneuver in tight residential blocks) is already on the same side of the borough as you.`,
    equipment: [
      ['Slim jim (modern variant)', 'Thin metal tool slid down between the window and the weather seal to manipulate the lock linkage from inside. Works on most older domestic cars and many imports.'],
      ['Long-reach tools (air-wedge + grabber arm)', 'For newer cars where slim jims can\'t reach the linkage. We wedge a small air bladder into the door frame to create a gap, then use a long thin arm with a hook to press the unlock button on the inside door panel.'],
      ['Air wedges (multiple sizes)', 'Inflatable bladders that pry open a small gap between the door and frame without bending or scratching. We carry several sizes for different door types.'],
      ['Plastic non-marring wedges', 'Used in conjunction with air wedges, these are the wedges left in place to maintain the gap while we work the long-reach tool.'],
      ['Lock-pick set (rarely used roadside)', 'For older vehicles with traditional pin tumbler door locks where slim jims and long-reach tools don\'t apply. Most modern cars don\'t have these locks.'],
      ['Frozen lock kit (winter)', 'De-icing solution and lock thaw tools for frozen latches and cylinders. Specific to cold-weather calls.'],
    ],
    vehicleTypes: [
      ['Domestic cars (Ford, Chevy, Dodge, Ram, GMC)', 'Standard slim-jim or long-reach treatment. Older domestic models from the 90s-2000s are the easiest to open. Newer models with electronic-only door handles need long-reach tools.'],
      ['Japanese cars (Toyota, Honda, Nissan, Hyundai, Kia, Subaru, Mazda)', 'Long-reach tools are standard. Most have an interior unlock button accessible from the air-wedge gap.'],
      ['European cars (BMW, Mercedes, Audi, VW, Volvo)', 'Slightly trickier — some have anti-theft features that limit slim-jim access. Long-reach tool through the door seal is standard. Some newer luxury models with electronic latches require manufacturer-specific procedures.'],
      ['Pickups (F-150, Silverado, Sierra, Ram, Tundra, Tacoma)', 'Larger doors, easier to access. Long-reach tool through the upper door seal is the standard approach.'],
      ['Vans and minivans', 'Sliding doors are different — we open the front driver door with standard tools, then unlock the slider from inside.'],
    ],
    whatWeDont: `Car lockout service does NOT include cutting new keys, programming new key fobs, or replacing damaged ignition cylinders. If your fob is lost (not just dead), or your physical key broke off in the lock, we can open the car and tow you to a Queens locksmith or dealer where new keys can be cut and programmed. We also do not handle motorcycle lockouts, semi-truck lockouts, or vehicles with electronic-only entry that require manufacturer authentication.`,
    process: [
      ['Call (718) 550-1460 — confirm the make/model.', 'We need to know what we\'re unlocking before the truck rolls. Different vehicle types need different tools.'],
      ['Tech arrives, verifies registered owner.', 'Quick ID check. We don\'t open cars for people who can\'t show they own them — that\'s how stolen-vehicle problems happen.'],
      ['Tools selected based on vehicle.', 'Slim jim, long-reach, or air-wedge approach picked on the spot.'],
      ['Door opened in 5-15 minutes.', 'No paint damage, no weather seal damage, no broken glass.'],
      ['Pay $125 flat — done.', 'You\'re back in the car. If the issue was a dead fob battery and we replaced it, the battery cost ($3-8) is on you.'],
    ],
    scenarios: [
      ['Astoria restaurant lot — keys on the table inside the car at the diner', 'You sat down at the counter, ordered, paid, walked back, doors locked, keys visible inside. Call (718) 550-1460, tech in 22 minutes, door open, you\'re driving home.'],
      ['LIC parking garage — auto-locked while loading the trunk', 'Center Boulevard garage. You set the kids in the back, walked around to the trunk, fob in your jacket pocket, doors auto-locked once you stepped past the range. Tech arrives, opens the front door, you grab the fob and you\'re gone.'],
      ['Forest Hills shopping center — dead fob battery', 'Austin Street parking. Fob worked yesterday, won\'t unlock today. Most fobs have a manual key inside that you\'ll never need... until you do. Tech opens the door, swaps the fob battery on the spot if you have one, otherwise we tow you to a Forest Hills hardware store.'],
      ['Whitestone gas station — keys in the trunk after grabbing snacks', 'Rare but happens. We open the cabin, release the trunk via the interior switch (most cars), or tow to a locksmith for vehicles without interior trunk release.'],
      ['Howard Beach apartment driveway — kid locked himself in the car', 'Time-sensitive. Lockout calls with a child or pet in the car get priority dispatch. We come faster — tech is rolling within 5 minutes of the call.'],
      ['Jamaica diner late night — keys dropped between the seat and console', 'Technically not a lockout (you have keys), but you can\'t reach them and the doors are locked. Same call, same fix — open the door, you fish the keys out.'],
    ],
    pricingItems: [
      'Local dispatch from inside Queens (no national routing)',
      'Door opening with non-marring tools (slim jim, long-reach, air wedge)',
      'Frozen lock de-icing if applicable in winter',
      'No surcharges for nights, weekends, or holidays',
      'No paint or weather-seal damage (or we eat the repair cost)',
      'Payment on completion — when you\'re back in the car',
    ],
    faqs: [
      ['How much does car lockout service cost in Queens?', '$125 flat. No surcharge for late night, weekends, or holidays. The price you hear on the call is what you pay when the door opens.'],
      ['How long does it take to open a locked car?', 'Most modern cars: 5-10 minutes once the tech is on site. Older or unusual vehicles can take up to 20 minutes. Total call time including dispatch is typically 30-45 minutes.'],
      ['Will the tools damage my car?', 'No. We use modern non-marring slim jims, long-reach tools, and inflatable air wedges. If we damage your weather seal or paint (extremely rare), we cover the repair.'],
      ['Can you make a new key if I lost mine?', 'No — that requires a locksmith or dealer. We can open your car and tow you to a Queens locksmith or your dealer if you need a new key cut and programmed.'],
      ['Can you unlock my trunk?', 'In most modern vehicles, yes — we open the cabin first, then release the trunk via the interior switch. For older vehicles with a separate trunk lock and no interior release, we may need to tow.'],
      ['Will you unlock my car if I can\'t prove I own it?', 'No. Without ID matching the registration, we won\'t open the vehicle. This is for your protection and ours — opening cars without ownership verification is how stolen-car situations happen.'],
      ['What if my kid or pet is locked inside?', 'Priority dispatch. Tell us at (718) 550-1460 — the truck rolls in under 5 minutes from the call. If it\'s an emergency (heat distress, etc.) call 911 first; FDNY can break the window faster than we can dispatch.'],
      ['Do you do motorcycle lockouts?', 'Limited — some bikes (older with side-cover locks) we can help, most modern bikes we cannot. Call us before assuming.'],
      ['Is car lockout service available 24/7 in Queens?', 'Yes. (718) 550-1460 is staffed 24 hours, 7 days a week. Late-night lockout calls are common (restaurants close, the keys-in-the-car moment hits) — we expect them.'],
      ['What if my key fob is broken, not just dead?', 'We can open the car and tow you to a locksmith or dealer who can cut a new key and program a new fob. Replacement programming for modern fobs costs $50-300 depending on the vehicle.'],
    ],
  },

  {
    slug: 'tire-change',
    name: 'Tire Change',
    h1: 'Tire Change Service Queens',
    titleTag: 'Tire Change Service Near Me in Queens | $125 Flat 24/7',
    metaDesc: 'Tire change service near me in Queens — $125 flat. Roadside flat tire replacement with your spare. 24/7 dispatch, ~25 min response. Text us.',
    primaryKw: 'tire change service queens',
    iconSvg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    color: '#F59E0B',
    breadcrumb: 'Tire Change',
    h2s: {
      what: 'What is Roadside Tire Change Service?',
      when: 'When to Call for a Tire Change in Queens',
      coverage: 'Tire Change Service Across Queens',
      equipment: 'What We Bring on a Tire Change Call',
      vehicleTypes: 'Vehicle Types We Service',
      potholes: 'Common Pothole Locations in Queens',
      process: 'How a Tire Change Call Works',
      scenarios: 'Common Tire Change Scenarios in Queens',
      pricing: 'Tire Change Pricing — $125 Flat',
      faq: 'Tire Change FAQ',
    },
    intro: `Roadside tire change service swaps your flat tire for the spare you carry in your trunk, doing it at your location instead of you having to drive on the flat (which destroys the wheel within minutes) or get towed to a shop.`,
    paraWhat1: `Tire change in Queens means a tech arrives at your stuck vehicle, lifts the car with a hydraulic jack, removes the flat, mounts your spare, and torques the lug nuts to manufacturer spec. The work typically takes 20-30 minutes on site. You drive away on your spare. We do not sell or deliver new tires roadside — for that, we tow to the nearest tire shop.`,
    paraWhat2: `The fundamental requirement: you need a usable spare tire in the trunk. Many newer cars come with a tire-repair kit (a can of sealant and a small compressor) instead of a spare. If you have a sealant kit and the puncture is small enough, the kit may work — we can help. If the kit doesn\'t work or you have no spare, we tow to a Queens tire shop where they can sell and mount a new tire.`,
    when: [
      ['Flat tire on the side of the road — pulled over safely.', 'Standard tire change call. Don\'t drive on a flat — it destroys the rim within minutes and can damage the suspension.'],
      ['Sidewall blowout from a pothole or curb impact.', 'Sidewall damage is unrepairable — the tire is done. We\'ll mount your spare; you\'ll need a new tire later. If your spare is also damaged, we tow.'],
      ['Slow leak that\'s now flat after sitting overnight.', 'You parked yesterday with a slow leak, woke up to a flat. Same fix — swap to spare. The flat may be repairable at a tire shop later (puncture in the tread, not the sidewall).'],
      ['Tire is shredded after driving on it for a few blocks.', 'The tire is past saving. The wheel may also be damaged. We\'ll inspect — if the wheel is damaged we can still mount the spare to a damaged wheel temporarily, but you should NOT drive at highway speed until both are replaced.'],
      ['Catastrophic pothole on Queens Boulevard or the BQE.', 'Common scenario. Pothole + speed = sidewall blowout, sometimes both passenger-side tires at once. If both tires are flat and you have one spare, we mount the spare and tow you to a tire shop for the second.'],
    ],
    coverage: `Tire change service in Queens covers every neighborhood — Astoria, LIC, Sunnyside, Woodside, Jackson Heights, East Elmhurst, Corona, Flushing, Forest Hills, Rego Park, Briarwood, Jamaica, Howard Beach, Ozone Park, Richmond Hill, Maspeth, Ridgewood, Whitestone, College Point, Fresh Meadows. Border Brooklyn (Greenpoint, Williamsburg, East New York) is in our footprint as well. We do not service vehicles stranded on NYC highways, parkways, bridges, or tunnels — those locations are restricted to NYPD-authorized rotation contractors. Get off the highway first; we\'ll meet you at the next safe spot.`,
    coverageWhy: `Service vehicles are staged inside Queens, which matters more for tire change calls than most others — a car parked on a Queens street with a flat is blocking traffic in a way that escalates fast. NYPD will tag it, neighbors will move it, and what should have been a $125 fix becomes a multi-hour ordeal. Average arrival time approximately 25 minutes in Queens core.`,
    equipment: [
      ['Heavy-duty floor jack', 'Rated for full-size SUVs and pickups. Faster and more stable than the OEM scissor jack that came with your car. We don\'t use the OEM jack on the side of a Queens street — too slow, too unstable.'],
      ['Breaker bar + 1/2" socket set', 'For removing lug nuts that have been torqued by an impact wrench at a tire shop. Manual socket and a long breaker bar = guaranteed removal without breaking studs.'],
      ['Torque wrench', 'For tightening the spare to manufacturer-specified torque (typically 80-110 ft-lbs for passenger cars). Under-torquing = wheel can come loose. Over-torquing = stripped studs or warped rotors.'],
      ['Wheel chocks', 'Placed on the opposite wheels to prevent the car rolling while jacked. Required for safety on any Queens street with even slight grade.'],
      ['Lug-nut key removers', 'For wheel locks (one of the lugs is keyed for theft prevention). If you have wheel locks but not the key, we have universal extractors — but it\'s slower.'],
      ['Tire pressure gauge + compressor', 'Spare tires often sit unused for years and lose pressure. We air up the spare to spec before you drive off.'],
    ],
    vehicleTypes: [
      ['Standard passenger cars and SUVs', 'Compact spare or full-size spare — we\'ll mount whichever you have. Caveat: compact "donut" spares are speed-limited to 50 mph and distance-limited to 50 miles. Drive directly to a tire shop.'],
      ['Light pickups and vans', 'Trucks usually carry full-size spares stored under the rear cargo bed. Accessing the spare requires a special tool that came with the truck — if missing, we have universals.'],
      ['EVs and hybrids', 'Most EVs and hybrids do not have a spare — they have a sealant kit instead. If your EV has no spare and a sealant-kit-resistant puncture, we tow to a tire shop.'],
      ['Performance / sports cars', 'Often have low-profile run-flat tires and no spare. Run-flats can be driven up to 50 miles at reduced speed after losing air. If the run-flat is destroyed, tow only.'],
      ['Lifted trucks and aftermarket wheels', 'We can usually service these. Bring matching lug-nut key if you have wheel locks or aftermarket wheel hardware.'],
    ],
    potholes: `Pothole damage is the leading cause of flat tire calls in Queens, especially in spring and fall after the freeze-thaw cycle does its work. Common hot spots include Queens Boulevard service road, Northern Boulevard, Astoria Boulevard, the BQE service road through Maspeth and Ridgewood, the Long Island Expressway through Fresh Meadows, the approach to the Whitestone Bridge, and Cross Bay Boulevard heading to Howard Beach. Drive defensively in these corridors after a freeze — even a small unseen pothole at 40 mph will sidewall-blow a tire.`,
    process: [
      ['Call (718) 550-1460 — describe the situation.', 'Tell us your location, vehicle, and whether you have a spare in the trunk. If no spare, we plan to tow.'],
      ['Tech arrives — verifies vehicle and inspects the flat.', 'Quick look at the damage. Sidewall blowout vs tread puncture matters for whether the tire might be repairable at the shop later.'],
      ['Wheel chocks placed, jack positioned at the manufacturer\'s lift point.', 'Safety first. Never jack at a non-reinforced point of the unibody.'],
      ['Lug nuts loosened with breaker bar before lifting.', 'Standard procedure. Loosen on the ground, lift, remove, swap, hand-tighten, lower, torque to spec.'],
      ['Spare mounted, lug nuts torqued to spec.', 'Manufacturer-specified torque ensures the wheel is secure and won\'t come loose.'],
      ['Flat tire goes in the trunk where the spare came from.', 'You take the flat with you to a tire shop later for repair or replacement.'],
      ['Pay $125 flat — done.', 'Cash, card, Apple Pay, Google Pay, Zelle, CashApp.'],
    ],
    scenarios: [
      ['Astoria Boulevard rush hour — pothole hit, slow lane', 'Pulled over at the curb after the thump. Sidewall is already bubbling. We arrive in 22 minutes, change the tire, you drive home on the spare.'],
      ['Queens Boulevard service road — flat at 11 p.m.', 'Late-night flat. Streets are quieter, dispatch is faster. Tech in 18 minutes, swap done in 25, you\'re moving.'],
      ['LIC Hunters Point — flat in the apartment garage', 'Parked yesterday, came down this morning to a flat. Garage clearance is fine for our service van. Spare on, you\'re going to a tire shop after work.'],
      ['Forest Hills Austin Street — curbed the wheel parallel parking', 'Curbed it hard, tire popped. We change it; the wheel may be bent (we eyeball it) so we recommend a tire shop alignment check before highway speed.'],
      ['Whitestone — pothole on the bridge approach', 'Got off the bridge, pulled into the gas station. Flat, possibly bent rim. We mount the spare. If the rim is also damaged, we tow to a wheel-repair shop in Queens.'],
      ['Howard Beach — Cross Bay Boulevard heading to the Rockaways', 'Long stretch, no shoulder, found a parking lot. Tire change there. The Belt Parkway is restricted (NYPD rotation only) so we couldn\'t have helped you on the highway itself.'],
    ],
    pricingItems: [
      'Local dispatch from inside Queens (no national routing)',
      'Tire change with your existing spare',
      'Lug nuts torqued to manufacturer spec',
      'Spare tire pressure check + top-off if needed',
      'No surcharges for nights, weekends, or holidays',
      'Payment on completion — when the spare is on and torqued',
    ],
    faqs: [
      ['How much does roadside tire change cost in Queens?', '$125 flat. No hourly meter, no late-night surcharge. Tire repair or replacement (if needed) is on top of this and happens at the tire shop after.'],
      ['How long does a roadside tire change take?', '20-30 minutes on site for most vehicles. Total call time from your call to driving away is typically 45-60 minutes.'],
      ['What if I don\'t have a spare tire?', 'Most newer cars don\'t. We tow you to the nearest Queens tire shop where they can sell and mount a new tire. Tow is included in the $125.'],
      ['Can I drive on the spare tire?', 'Compact "donut" spares: yes, up to 50 mph for up to 50 miles. Get to a tire shop directly. Full-size spares: drive normally, but still get the flat repaired/replaced soon — driving long-term on a non-rotated spare wears it unevenly.'],
      ['What if my flat tire is on a tire-pressure-sensor wheel?', 'No problem. We\'ll re-torque the wheel correctly. The TPMS sensor stays with the wheel. You may see a "low pressure" warning briefly until the system reads the spare.'],
      ['Will you patch a flat tire roadside?', 'No. Roadside patching is unsafe and unreliable. We swap to your spare and recommend a proper plug-and-patch at a tire shop, where the tire can come off the rim and be inspected internally.'],
      ['Do you carry tires for sale roadside?', 'No. We swap to your spare. If you need a new tire, we tow to a Queens tire shop.'],
      ['What payment methods do you accept?', 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp. Paid on completion.'],
      ['Are your service vehicles equipped for trucks and SUVs?', 'Yes. Heavy-duty floor jacks rated for full-size SUVs and pickups. We can\'t handle commercial trucks above 26k GVWR.'],
      ['Is tire change service available 24/7 in Queens?', 'Yes. (718) 550-1460 is staffed 24/7/365.'],
    ],
  },

  {
    slug: 'fuel-delivery',
    name: 'Fuel Delivery',
    h1: 'Fuel Delivery Service Queens',
    titleTag: 'Fuel Delivery Service Near Me in Queens | $125 Flat 24/7',
    metaDesc: 'Fuel delivery service near me in Queens — $125 flat plus pump price. Gas or diesel, 2-3 gallons delivered to your stuck vehicle. 24/7 dispatch.',
    primaryKw: 'fuel delivery service queens',
    iconSvg: '<path d="M3 21V8l4-3h7l4 3v13"/><path d="M3 13h12"/><path d="M18 12h3v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V8a2 2 0 0 0-2-2"/>',
    color: '#F59E0B',
    breadcrumb: 'Fuel Delivery',
    h2s: {
      what: 'What is Roadside Fuel Delivery?',
      when: 'When to Call for Fuel Delivery in Queens',
      coverage: 'Fuel Delivery Across Queens',
      equipment: 'What We Bring on a Fuel Call',
      fuelTypes: 'Fuel Types We Deliver',
      whatWeDont: 'What Fuel Delivery Does NOT Cover',
      process: 'How a Fuel Delivery Call Works',
      scenarios: 'Common Fuel Delivery Scenarios in Queens',
      pricing: 'Fuel Delivery Pricing — $125 + Fuel',
      faq: 'Fuel Delivery FAQ',
    },
    intro: `Roadside fuel delivery brings gasoline or diesel to a vehicle that has run out of fuel — typically 2-3 gallons in an approved fuel jerry can — so the driver can get to the nearest gas station instead of being towed.`,
    paraWhat1: `Fuel delivery in Queens means a roadside tech arrives with a sealed jerry can holding 2-3 gallons of either regular unleaded gasoline or diesel. We pour it into your tank, prime the fuel system if needed (more on diesel below), and get your engine started so you can drive to the nearest pump. Total time on site is typically 5-10 minutes.`,
    paraWhat2: `Why we don\'t deliver more than 2-3 gallons: NYC fire and transportation safety regulations limit what a service vehicle can legally carry, and gasoline degrades in jerry cans within weeks. Bringing exactly what you need to reach the next pump is the right amount — anything more sits in the can deteriorating until the next call.`,
    when: [
      ['Fuel gauge below empty, engine sputtering or stalling.', 'You pushed past the empty light, the car is running on fumes, or it just cut out at a stoplight. Fuel delivery is faster and cheaper than a tow to a gas station.'],
      ['Engine fully stopped — won\'t restart, no fuel.', 'Same situation as above, just slightly later. Fuel still solves it. We\'ll need to prime the fuel system on some cars (especially diesels) after pouring fuel.'],
      ['Diesel vehicle out of fuel.', 'Diesel cars and trucks need fuel system priming after they run dry — air gets into the lines and the engine won\'t restart on fuel alone. We can prime most diesels on the spot. If priming fails (older diesels with mechanical injection), we tow to a shop.'],
      ['Wrong fuel mistake — gasoline in a diesel tank or vice versa.', 'NOT a fuel delivery call. Wrong fuel must be drained before any new fuel goes in. Tow to a shop only.'],
      ['Out of fuel on a long Queens corridor.', 'Common scenarios: GCP and Astoria Boulevard heading to LaGuardia, Cross Bay Boulevard heading to Howard Beach, the LIE service road through Fresh Meadows, Northern Boulevard between Whitestone and the Bronx. Long stretches without stations.'],
    ],
    coverage: `Fuel delivery service in Queens covers every neighborhood — Astoria, LIC, Sunnyside, Woodside, Jackson Heights, East Elmhurst, Corona, Flushing, Forest Hills, Rego Park, Briarwood, Jamaica, Howard Beach, Ozone Park, Richmond Hill, Maspeth, Ridgewood, Whitestone, College Point, Fresh Meadows. We also cover border Brooklyn (Greenpoint, Williamsburg, East New York). NYC highways, parkways, bridges, and tunnels are restricted to NYPD-authorized rotation contractors only — we cannot bring fuel to vehicles stuck on the BQE, Grand Central Parkway, Whitestone Expressway, etc. Get off the highway to a service road or surface street first.`,
    coverageWhy: `Service vehicles staged inside Queens means a 25-minute average response time. National roadside membership programs typically take 60+ minutes for fuel delivery — we hear this from frustrated Queens customers regularly. Local dispatch and a small fleet that knows the borough\'s fuel-station gaps means we get to you fast.`,
    equipment: [
      ['Approved jerry cans (2 and 5 gallon)', 'NYC fire-code-approved cans with sealed spouts and venting. We carry one of each size — most calls are 2-3 gallons, occasionally 5 for diesel pickups that need more to prime.'],
      ['Funnel kit', 'Some modern car fuel necks (especially diesels and certain BMW/Mercedes models) require an adapter funnel to fit a non-pump nozzle. We have the common sizes.'],
      ['Diesel priming hand pump', 'For older diesel vehicles whose fuel system can\'t self-prime after running dry. We prime by hand to push fuel through the lines and bleed the air out before the engine will start.'],
      ['Fuel funnel for hard-to-reach tanks', 'Some vehicles (low-clearance sports cars, certain pickups with bedside fillers) need a long flexible funnel to pour without spillage.'],
      ['Spill containment + absorbent pads', 'Required by NYC environmental regulations. We don\'t spill fuel on Queens streets — and if we do, we clean it.'],
    ],
    fuelTypes: [
      ['Regular unleaded (87 octane)', 'Standard for most passenger cars. We deliver 87 octane — if your car requires premium, the engine will still run on 87 long enough to get to a gas station with the right grade.'],
      ['Diesel', 'For diesel pickups, vans, SUVs, and the occasional diesel sedan. Note: diesel vehicles often need fuel system priming after running dry.'],
      ['Premium / E85 / Other', 'Not stocked. If your car requires premium for performance reasons, regular will get you to a station. If your car requires E85 (rare), regular gas works as a temporary substitute. We don\'t deliver E85.'],
    ],
    whatWeDont: `Fuel delivery service does NOT include: pumping out wrong fuel (gas in diesel or vice versa — that\'s a tow-only situation), filling the tank to full (NYC regulations limit jerry-can volume), delivering fuel to vehicles on highways/parkways/bridges (NYPD rotation only), or delivering propane, heating oil, kerosene, or any non-automotive fuel. We deliver enough motor fuel to reach the nearest pump.`,
    process: [
      ['Call (718) 550-1460 — confirm gas or diesel + vehicle.', 'Critical to know which fuel and what vehicle so we bring the right type and amount.'],
      ['Tech arrives with jerry can, verifies vehicle.', 'Quick visual confirmation that you\'re where you said you are and the vehicle matches.'],
      ['Fuel poured into your tank.', '2-3 gallons typical. We use a funnel to avoid spillage.'],
      ['Engine started — diesel priming if needed.', 'Gasoline cars start immediately. Diesel cars may need 30 seconds of priming and a bleed of the fuel rail.'],
      ['Pay $125 + fuel cost — done.', 'Fuel itself is billed at the average local pump price ($3.50-4.50/gallon for gas, $4.00-5.00/gallon for diesel). Total typical: $130-140 for gas, $140-150 for diesel.'],
    ],
    scenarios: [
      ['GCP service road heading to LaGuardia — out of gas en route to the airport', 'Common. Long stretches without stations, you push past empty thinking you\'ll make it. Fuel delivery in 25 minutes, you\'re back rolling, you make your flight.'],
      ['Cross Bay Boulevard heading to the Rockaways — out of fuel on the bridge approach', 'You got past the bridge but ran dry on the approach. We deliver, you continue.'],
      ['Long Island Expressway service road in Fresh Meadows — diesel ran dry', 'Diesel pickup, fuel system needs priming. Tech brings 5 gallons of diesel and the priming pump. 15 minutes on site, engine running.'],
      ['Northern Boulevard heading to Whitestone — out of gas at midnight', 'Late night, stations spaced apart. Fuel delivery is faster than walking with a jerry can to the nearest open station.'],
      ['Astoria Boulevard service road — empty after sitting in traffic', 'You watched the gauge drop in standstill traffic, didn\'t exit to fuel up, now out. We bring fuel; lecture about not riding the empty light is free.'],
      ['Jamaica residential block — left the car overnight, gauge wrong, dead empty', 'Sometimes the gauge is misreporting. Either way, fuel delivery solves it.'],
    ],
    pricingItems: [
      'Local dispatch from inside Queens (no national routing)',
      '2-3 gallons of gasoline or diesel delivered to your vehicle',
      'Fuel system priming for diesel vehicles included',
      'No surcharges for nights, weekends, or holidays',
      'Fuel itself billed at average local pump price',
      'Payment on completion — when the engine is running',
    ],
    faqs: [
      ['How much does fuel delivery cost in Queens?', '$125 flat for the service plus the cost of the fuel itself at average local pump price. Total typically $130-140 for gas, $140-150 for diesel.'],
      ['How much fuel do you deliver?', '2-3 gallons standard. Up to 5 gallons for diesel pickups that need more to prime the fuel system. Enough to get you to the nearest gas station.'],
      ['Why don\'t you fill up my tank completely?', 'NYC fire and transportation safety regulations limit how much fuel a non-tanker service vehicle can carry. Plus gasoline in jerry cans degrades within weeks — bringing exactly what you need is best practice.'],
      ['Do you deliver diesel?', 'Yes. We deliver diesel for trucks, vans, SUVs, and diesel passenger cars. Diesel vehicles may need fuel system priming after running dry — we handle that on site.'],
      ['What if I put the wrong fuel in my tank?', 'That\'s NOT a fuel delivery call — it\'s a tow-only situation. The wrong fuel must be drained at a shop before any new fuel goes in. We can tow you to a Queens shop that handles fuel drains.'],
      ['Can you deliver fuel to a vehicle on the BQE or GCP?', 'No. NYC highways, parkways, bridges, and tunnels are restricted to NYPD-authorized rotation contractors. Get off the highway first; we\'ll meet you on the service road.'],
      ['How long does fuel delivery take?', '5-10 minutes on site once we arrive. Total call time including dispatch is typically 30-45 minutes.'],
      ['What payment methods do you accept?', 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp. Paid on completion.'],
      ['Will premium gas hurt my regular-fuel car?', 'No. We deliver 87 octane regular. If your car requires premium and we delivered regular, it might run slightly less efficiently for one tank — fill with the right grade at the next station.'],
      ['Is fuel delivery available 24/7 in Queens?', 'Yes. (718) 550-1460 is staffed 24 hours, 7 days a week.'],
    ],
  },

  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    h1: 'Battery Replacement Service Queens',
    titleTag: 'Battery Replacement Service Near Me in Queens | $125 + Battery',
    metaDesc: 'Battery replacement service near me in Queens NY — $125 flat labor plus battery cost. Mobile battery service, AGM and standard sizes stocked. 24/7 text us.',
    primaryKw: 'battery replacement service queens',
    iconSvg: '<rect x="2" y="7" width="20" height="12" rx="2"/><line x1="22" y1="11" x2="22" y2="15"/><line x1="6" y1="11" x2="6" y2="15"/><line x1="10" y1="13" x2="14" y2="13"/>',
    color: '#F59E0B',
    breadcrumb: 'Battery Replacement',
    h2s: {
      what: 'What is Mobile Battery Replacement?',
      when: 'When You Need a New Battery in Queens',
      coverage: 'Battery Replacement Across Queens',
      equipment: 'What We Bring on a Battery Call',
      batteryTypes: 'Battery Types We Stock',
      diagnosis: 'How We Test Your Battery Before Replacing',
      process: 'How a Battery Replacement Call Works',
      scenarios: 'Common Battery Replacement Scenarios in Queens',
      pricing: 'Battery Replacement Pricing',
      faq: 'Battery Replacement FAQ',
    },
    intro: `Mobile battery replacement is a roadside service that swaps out a dead or dying car battery for a new one at your location — your home, your office, the side of the road — instead of you having to get jumpstarted, drive to an auto parts store, and wait while they install it.`,
    paraWhat1: `Battery replacement in Queens means a tech arrives with a new battery sized for your vehicle (we carry common Group sizes 24F, 35, 47, 65, 75 and similar AGM and standard variants), tests your old battery to confirm it\'s actually dead, removes it, installs the new one, and verifies the alternator is charging the new battery correctly. Total time on site is approximately 25-35 minutes.`,
    paraWhat2: `When does a dead battery actually need replacement vs just a jump start? Rule of thumb: if a jump start works once and the car runs fine, the battery likely just had a temporary drain (lights left on, cold morning) and you\'re fine. If the battery is 4+ years old, has needed multiple jump starts in a month, won\'t hold a charge after the alternator runs for 30+ minutes, or shows visible swelling or terminal corrosion, it\'s replacement time.`,
    when: [
      ['Battery is 3-5 years old and acting marginal.', 'NYC car batteries last 3-5 years on average — less than the warranty often suggests because of NYC temperature swings. If yours is in that age range and starting slowly, replace it before it strands you.'],
      ['Multiple jump start calls in a short period.', 'If you\'ve needed two or more jump starts in the last month, the battery cannot hold a charge anymore. Replacement is the fix.'],
      ['Visible swelling, leaking, or terminal corrosion.', 'Swollen battery casings indicate internal cell damage from heat or overcharging — replace immediately, not safe to drive on. Heavy white/green crust on terminals can be cleaned, but if it returns within weeks the battery is failing.'],
      ['Dim headlights at idle, brighter when you rev.', 'The alternator is doing all the work because the battery can\'t hold charge. Replace the battery; your alternator will appreciate not being stressed.'],
      ['Voltage tests below 12.4V on a multimeter (engine off).', 'Standard test. Above 12.6V is a healthy battery. 12.4-12.6V is marginal. Below 12.4V is failing. Below 11V is essentially dead.'],
      ['Failed load test at a shop or our roadside test.', 'Load tests apply current draw under load and measure voltage drop. A failing battery drops voltage rapidly under load even if it reads OK at rest.'],
    ],
    coverage: `Battery replacement service in Queens covers every neighborhood — Astoria, LIC, Sunnyside, Woodside, Jackson Heights, East Elmhurst, Corona, Flushing, Forest Hills, Rego Park, Briarwood, Jamaica, Howard Beach, Ozone Park, Richmond Hill, Maspeth, Ridgewood, Whitestone, College Point, Fresh Meadows. Plus border Brooklyn (Greenpoint, Williamsburg, East New York). Most calls are at residential driveways or street parking, but we also handle apartment garages, parking lots, and roadside breakdowns.`,
    coverageWhy: `Why use mobile battery replacement instead of getting jumpstarted and driving to AutoZone? Speed and labor. AutoZone install is typically free but you wait in line, the bay gets backed up, and the install isn\'t always proper torque. Plus you\'re paying for a jump start first ($125) and then maybe a tow if the jump start didn\'t hold. We do it all in one $125 labor call plus the battery cost — same total or less, in your driveway, in 30 minutes.`,
    equipment: [
      ['Multimeter + load tester', 'Verify the battery is actually the problem. Sometimes a new battery seems needed but the alternator is the culprit. We test before replacing — wouldn\'t want to sell you a battery you don\'t need.'],
      ['Memory saver / OBD2 power module', 'Plugs into the OBD2 port and keeps power flowing to the car\'s memory (radio presets, climate settings, sometimes window position calibration) while the battery is disconnected. Essential on modern cars.'],
      ['Terminal cleaner + brushes', 'White/green corrosion on the terminals must be cleaned before installing a new battery, or the new one will start corroding immediately too.'],
      ['Battery puller', 'Some batteries are wedged into tight engine bays under intake manifolds or behind the headlight. A battery puller (a strap-and-handle tool) makes removal possible without dropping the battery on something expensive.'],
      ['Hold-down hardware', 'OEM battery hold-downs are often broken or missing on older cars. We carry universal replacements.'],
      ['Common Group-size batteries on the truck', 'Group 24F, 35, 47, 65, 75, and AGM variants are stocked. Less-common sizes (Group 31, 27 for trucks; Group 51R for some imports) we source from the nearest parts store before dispatch.'],
    ],
    batteryTypes: [
      ['Standard flooded lead-acid', 'Common in older cars (pre-2010). Cheaper, ~3-5 year lifespan. Maintenance-free in the sense that you don\'t add water, but they self-discharge faster than AGM.'],
      ['AGM (Absorbed Glass Mat)', 'Required by most newer cars with start-stop systems. Sealed, vibration-resistant, longer lifespan (~5-7 years). More expensive than standard. Most German cars, many newer Japanese, and any vehicle with start-stop ignition needs AGM.'],
      ['EFB (Enhanced Flooded Battery)', 'Mid-tier between standard and AGM, used in some European cars with simple start-stop. Less common than AGM in North America.'],
      ['Lithium starter batteries', 'Lighter, longer-lasting, much more expensive. Used in some performance cars. We do not stock — you can supply the battery and we install it.'],
      ['Hybrid 12V auxiliary batteries', 'Hybrid cars (Prius, Camry Hybrid, etc.) have a small 12V auxiliary battery separate from the main hybrid pack. When this dies the car won\'t boot. Replacement is the same procedure as a standard battery, but the battery is often AGM and located in the trunk.'],
    ],
    diagnosis: `We don\'t replace a battery just because you say it\'s dead. We test first. Resting voltage with a multimeter, load test under simulated cranking, and we check the alternator output once a working battery is connected. About 1 in 8 calls turns out to be an alternator or parasitic-drain issue, not a battery — we save you the cost of a new battery you don\'t need and recommend the right fix instead.`,
    process: [
      ['Call (718) 550-1460 — confirm vehicle year/make/model.', 'We need this to source the right battery (Group size, AGM vs standard, location in the engine bay).'],
      ['Tech arrives, tests the existing battery.', 'Multimeter resting voltage + load test. Confirms whether replacement is the right call.'],
      ['Memory saver plugged into OBD2 port.', 'Keeps the car\'s electronics powered while the old battery comes out.'],
      ['Old battery removed, terminals cleaned, new battery installed.', 'New battery torqued in place with proper hold-downs. Cables connected: positive first, then negative.'],
      ['Alternator output verified.', 'Engine started, multimeter on the new battery shows 13.8-14.4V at idle = alternator is charging properly.'],
      ['Old battery taken for recycling.', 'NY State requires old lead-acid batteries to be recycled. We handle the disposal at no extra charge.'],
      ['Pay $125 + battery cost — done.', 'Battery itself ranges from $120 to $300+ depending on Group size and AGM/standard. Total typical out-the-door: $245-425.'],
    ],
    scenarios: [
      ['Astoria — battery 4 years old, slow crank in cold weather', 'Classic case. Battery is at end of life, the cold pushed it over. Test confirms <11V resting. New AGM Group 47 installed, $125 + battery.'],
      ['LIC high-rise residential garage — needed two jump starts in two weeks', 'Battery cannot hold charge. Test confirms severe load-test failure. New battery installed in the garage parking spot, no need to drive to AutoZone.'],
      ['Forest Hills driveway — wife\'s car battery died over the weekend', 'Saturday morning call. Tech in driveway, replacement done in 30 minutes. Common weekend situation.'],
      ['Whitestone — battery swollen and leaking, won\'t pass safety inspection', 'New battery needed for state inspection. We come, swap, you have it inspected next week.'],
      ['Jamaica — alternator suspected, but it was actually the battery', 'Customer was sure it was the alternator. Our test showed alternator was fine but battery was at 9V resting. New battery solved the problem at half the cost of an alternator.'],
      ['Howard Beach — Tesla 12V auxiliary died, locked out of the car', '12V auxiliary in EVs dies independently of the main pack and locks you out. Replace the 12V battery — typically located under the frunk — and you\'re back in business.'],
    ],
    pricingItems: [
      'Local dispatch from inside Queens (no national routing)',
      'Multimeter resting voltage + load test before replacement',
      'OBD2 memory saver to preserve your settings during install',
      'Terminal cleaning + new hold-down hardware if needed',
      'Old battery recycling at no extra charge',
      'Alternator output verification after install',
      'No surcharges for nights, weekends, or holidays',
      'Battery cost varies — common Group sizes $120-300, AGM premium $200-400',
    ],
    faqs: [
      ['How much does mobile battery replacement cost in Queens?', '$125 flat for the labor plus the cost of the battery. Common Group sizes run $120-300 (standard) or $200-400 (AGM). Total out-the-door typically $245-425 depending on what your car needs.'],
      ['How long does battery replacement take?', 'Approximately 25-35 minutes on site, including the diagnostic test and verification. Total call time from call to driving away is typically 50-70 minutes.'],
      ['Can I supply my own battery?', 'Yes. If you bought a battery from AutoZone or Costco and need it installed, we install supplied batteries for $125 flat. Bring the receipt — some manufacturers void warranty if installed by anyone other than the seller, so check that before deciding.'],
      ['Do you stock AGM batteries?', 'Yes. AGM is the most common stock we carry because most modern cars (any with start-stop, most German cars, many Japanese cars 2015+) require AGM. Don\'t put a standard battery in an AGM-required car — it will fail prematurely.'],
      ['What size battery does my car need?', 'Tell us the year/make/model when you call (718) 550-1460. We confirm Group size from manufacturer specifications. Common sizes for Queens cars: Group 35 (Toyota, Honda, Subaru), Group 47 (BMW, VW), Group 65 (Ford F-150), Group 75 (some GM cars).'],
      ['Will replacing the battery reset my radio code or memory?', 'Without a memory saver, yes — older cars lose radio codes, climate presets, sometimes power window calibration. We use an OBD2 memory saver during the swap to keep power flowing to the car\'s memory. No code reset, no settings lost.'],
      ['What if it\'s actually the alternator, not the battery?', 'We test before replacing. About 1 in 8 calls turns out to be alternator or parasitic drain, not battery. If alternator is the issue, we tow you to a shop — replacing a battery on a failed alternator just kills the new battery within hours.'],
      ['Do you recycle the old battery?', 'Yes, included in the call. NY State requires old lead-acid batteries to be recycled — we take it with us when we leave.'],
      ['What payment methods do you accept?', 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp.'],
      ['Is mobile battery replacement available 24/7 in Queens?', 'Yes. (718) 550-1460 is staffed 24 hours, 7 days a week. Late-night battery calls are common — particularly the morning after a cold snap, when half of Queens has a dead battery at once.'],
    ],
  },
];

// Read homepage to extract head + style block + footer for reuse
const homepage = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// Extract <style>...</style>
const styleMatch = homepage.match(/(<style>[\s\S]*?<\/style>)/);
const STYLE_BLOCK = styleMatch ? styleMatch[1] : '';

// Extract footer (between <footer ...> and </footer>)
const footerMatch = homepage.match(/(<footer[\s\S]*?<\/footer>)/);
const FOOTER_BLOCK = footerMatch ? footerMatch[1] : '';

// Extract topbar (between <!-- TOPBAR --> and end of that div)
const topbarMatch = homepage.match(/(<!-- TOPBAR -->[\s\S]*?<\/div>\s*<\/div>)/);
const TOPBAR_BLOCK = topbarMatch ? topbarMatch[1] : '';

// Header (sticky)
const headerMatch = homepage.match(/(<!-- HEADER -->[\s\S]*?<\/header>)/);
const HEADER_BLOCK = headerMatch ? headerMatch[1] : '';

// Mobile sticky bar
const mobileMatch = homepage.match(/(<!-- MOBILE STICKY[^>]*-->[\s\S]*?<\/div>\s*\n\s*<script)/);
const MOBILE_BLOCK = mobileMatch ? mobileMatch[1].replace(/\s*<script$/, '') : '';

// Carousel + scroll-reveal scripts
const scriptMatch = homepage.match(/(<script>\s*\ndocument\.getElementById[\s\S]*?<\/script>)/);
const SCRIPT_BLOCK = scriptMatch ? scriptMatch[1] : '';

// ===== Build each service page =====
function buildPage(svc) {
  const h2 = svc.h2s;
  const dirRoot = path.join(ROOT, svc.slug);
  if (!fs.existsSync(dirRoot)) fs.mkdirSync(dirRoot, { recursive: true });

  const pageUrl = `https://roadsideassistancequeens.com/${svc.slug}/`;

  const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#F59E0B">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#F59E0B">
<meta name="apple-mobile-web-app-title" content="${svc.name}">
<meta name="application-name" content="${svc.name} Queens">
<meta name="format-detection" content="telephone=yes">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">

<title>${svc.titleTag}</title>
<meta name="description" content="${svc.metaDesc}">
<meta name="author" content="Roadside Assistance Queens">
<meta name="geo.region" content="US-NY">
<meta name="geo.placename" content="Queens, New York">
<meta name="geo.position" content="40.7282;-73.7949">
<meta name="ICBM" content="40.7282, -73.7949">

<link rel="canonical" href="${pageUrl}">

<meta property="og:type" content="website">
<meta property="og:title" content="${svc.titleTag}">
<meta property="og:description" content="${svc.metaDesc}">
<meta property="og:url" content="${pageUrl}">
<meta property="og:site_name" content="Roadside Assistance Queens">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://roadsideassistancequeens.com/img/hero-tow.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${svc.name} service in Queens NY">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${svc.titleTag}">
<meta name="twitter:description" content="${svc.metaDesc}">
<meta name="twitter:image" content="https://roadsideassistancequeens.com/img/hero-tow.jpg">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">

<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://roadsideassistancequeens.com/#organization",
      "name": "Roadside Assistance Queens",
      "alternateName":"Roadside Assistance Queens NY",
      "url": "https://roadsideassistancequeens.com/",
      "logo":{"@type":"ImageObject","@id":"https://roadsideassistancequeens.com/#logo","url":"https://roadsideassistancequeens.com/img/hero-tow.jpg","contentUrl":"https://roadsideassistancequeens.com/img/hero-tow.jpg","caption":"Roadside Assistance Queens"},
      "image":{"@id":"https://roadsideassistancequeens.com/#logo"},
      "telephone":"+17185501460",
      "email":"dispatch@roadsideassistancequeens.com",
      "areaServed":{"@type":"AdministrativeArea","name":"Queens, NY"},
      "contactPoint":{"@type":"ContactPoint","telephone":"+17185501460","contactType":"emergency","areaServed":"US-NY","availableLanguage":["en"]}
    },
    {
      "@type":"WebSite",
      "@id":"https://roadsideassistancequeens.com/#website",
      "url":"https://roadsideassistancequeens.com/",
      "name":"Roadside Assistance Queens",
      "description":"24/7 roadside assistance in Queens NY — $125 flat per service.",
      "publisher":{"@id":"https://roadsideassistancequeens.com/#organization"},
      "inLanguage":"en-US",
      "potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://roadsideassistancequeens.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}
    },
    {
      "@type":["LocalBusiness","AutomotiveBusiness","EmergencyService"],
      "@id":"https://roadsideassistancequeens.com/#business",
      "name":"Roadside Assistance Queens",
      "description":"24/7 roadside assistance across Queens NY — $125 flat per service. Local crew, fast response.",
      "url":"https://roadsideassistancequeens.com/",
      "telephone":"+17185501460",
      "priceRange":"$125",
      "image":{"@id":"https://roadsideassistancequeens.com/#logo"},
      "logo":{"@id":"https://roadsideassistancequeens.com/#logo"},
      "address":{"@type":"PostalAddress","addressLocality":"Queens","addressRegion":"NY","postalCode":"11101","addressCountry":"US"},
      "geo":{"@type":"GeoCoordinates","latitude":40.7282,"longitude":-73.7949},
      "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}],
      "areaServed":[
        {"@type":"AdministrativeArea","name":"Queens, NY"},
        {"@type":"Place","name":"Astoria, Queens, NY"},
        {"@type":"Place","name":"Long Island City, Queens, NY"},
        {"@type":"Place","name":"Flushing, Queens, NY"},
        {"@type":"Place","name":"Forest Hills, Queens, NY"},
        {"@type":"Place","name":"Jamaica, Queens, NY"}
      ],
      "paymentAccepted":["Cash","Credit Card","Debit Card","Apple Pay","Google Pay","Zelle","CashApp"],
      "currenciesAccepted":"USD",
      "knowsAbout":["Roadside Assistance","Jump Start","Car Lockout","Tire Change","Fuel Delivery","Battery Replacement"]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": `${svc.name} in Queens NY`,
      "alternateName": svc.h1,
      "description": svc.metaDesc,
      "serviceType":`${svc.name} service`,
      "category":"Roadside Assistance",
      "provider": {"@id":"https://roadsideassistancequeens.com/#business"},
      "areaServed": [
        {"@type": "AdministrativeArea", "name": "Queens, NY"},
        {"@type": "Place", "name": "Astoria, Queens, NY"},
        {"@type": "Place", "name": "Long Island City, Queens, NY"},
        {"@type": "Place", "name": "Flushing, Queens, NY"},
        {"@type": "Place", "name": "Forest Hills, Queens, NY"},
        {"@type": "Place", "name": "Jamaica, Queens, NY"}
      ],
      "hoursAvailable":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}],
      "offers": {
        "@type": "Offer",
        "price": "125.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": "Queens, NY",
        "businessFunction": "https://schema.org/Sell",
        "validFrom":"2026-01-01"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": svc.titleTag,
      "isPartOf": {"@id": "https://roadsideassistancequeens.com/#website"},
      "about":{"@id":`${pageUrl}#service`},
      "primaryImageOfPage": {"@id":"https://roadsideassistancequeens.com/#logo"},
      "datePublished": "2026-05-03",
      "dateModified": "2026-05-03",
      "inLanguage": "en-US",
      "description": svc.metaDesc,
      "speakable":{"@type":"SpeakableSpecification","cssSelector":[".svc-page-h1",".svc-page-sub","#hero-h1"]}
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Roadside Assistance Queens","item":"https://roadsideassistancequeens.com/"},
        {"@type":"ListItem","position":2,"name":svc.breadcrumb,"item":pageUrl}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": svc.faqs.map(([q,a]) => ({
        "@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}
      }))
    }
  ]
}, null, 2)}
</script>

`;

  // CSS additions for service page
  const pageStyles = `
<style>
.svc-page-hero{
  background:#06101D !important;
  padding:80px 0 88px !important;
  text-align:center !important;
  position:relative;overflow:hidden;
  border-bottom:6px solid transparent;
  border-image:repeating-linear-gradient(90deg, var(--accent) 0 18px, #08111E 18px 36px) 1;
  color:#fff;
}
.svc-page-hero::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    linear-gradient(180deg, rgba(6,16,29,.78) 0%, rgba(6,16,29,.92) 100%),
    url("/img/hero-tow.webp") 30% 50%/cover no-repeat;
  filter:saturate(.85) contrast(1.05);
}
.svc-page-hero::after{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(900px 540px at 50% 40%, rgba(255,180,0,.20) 0%, transparent 60%),
    radial-gradient(1400px 800px at 50% 50%, transparent 0%, rgba(6,16,29,.40) 70%, rgba(6,16,29,.85) 100%);
}
.svc-page-hero .container{position:relative;z-index:1;max-width:1000px}
.breadcrumb{
  display:flex;justify-content:center;gap:8px;
  font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;
  color:rgba(255,255,255,.55);margin:0 0 28px;
}
.breadcrumb a{color:var(--accent-bright);border-bottom:1px solid rgba(255,180,0,.40);padding-bottom:1px}
.breadcrumb span{color:rgba(255,255,255,.55)}
.svc-page-h1{
  color:#fff;font-size:clamp(36px, 5.6vw, 72px);
  font-weight:800;letter-spacing:-.038em;line-height:1.04;
  margin:0 auto .25em;max-width:18ch;
  text-shadow:0 2px 24px rgba(0,0,0,.55), 0 1px 0 rgba(0,0,0,.7);
}
.svc-page-h1 .accent{color:var(--accent-bright);background:linear-gradient(180deg, #FFE188 0%, var(--accent-bright) 50%, var(--accent) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;padding:0 .04em}
.svc-page-sub{
  color:rgba(255,255,255,.85);
  font-size:clamp(16px, 1.6vw, 19px);font-weight:500;
  max-width:54ch;margin:24px auto 28px;
  line-height:1.5;text-shadow:0 1px 12px rgba(0,0,0,.55);
}
.svc-page-sub strong{color:var(--accent-bright);font-weight:800}
.svc-content-section{
  padding:80px 0;
  background:linear-gradient(180deg, #FFFEFB 0%, #F2EDE0 100%);
  position:relative;
}
.svc-content-section.dark{
  background:linear-gradient(180deg, #0A1320 0%, #06101D 100%) !important;
  color:#fff !important;
}
.svc-content-section.dark h2{color:#fff !important;text-shadow:0 1px 0 rgba(0,0,0,.6)}
.svc-content-section.dark p{color:rgba(255,255,255,.85) !important}
.svc-content-section.dark strong{color:#fff !important}
.svc-content-section h2{
  font-size:clamp(28px, 3.6vw, 40px);
  font-weight:800;letter-spacing:-.028em;
  margin:0 0 24px;color:var(--ink);
  max-width:24ch;
}
.svc-content-section .container{max-width:980px}
.svc-content-section p{
  font-size:17px;line-height:1.7;color:var(--ink-2);
  margin:0 0 1em;max-width:64ch;
}
.svc-list{
  display:grid;gap:14px;margin:24px 0;
}
.svc-list-item{
  background:#FFFFFF;
  border:1px solid rgba(20,17,12,.12);
  border-radius:10px;padding:20px 22px;
  box-shadow:0 1px 0 rgba(255,255,255,.95) inset, 0 8px 18px -6px rgba(14,27,46,.10);
}
.dark .svc-list-item{
  background:linear-gradient(180deg, #14233A 0%, #0E1B2E 100%);
  border-color:rgba(255,180,0,.20);
}
.svc-list-item h3{
  margin:0 0 8px;font-size:17px;font-weight:700;
  color:var(--ink);letter-spacing:-.012em;
}
.dark .svc-list-item h3{color:#fff}
.svc-list-item p{margin:0;font-size:15px;color:var(--ink-3);line-height:1.55}
.dark .svc-list-item p{color:rgba(255,255,255,.78)}
.svc-section-cta{margin-top:32px;text-align:left}
.svc-section-cta .btn{margin-right:8px}
.dark .svc-section-cta .btn-secondary{border-color:rgba(255,255,255,.30);color:#fff}
.svc-page-trust{
  display:flex;justify-content:center;gap:8px;flex-wrap:wrap;
  margin:0 auto 28px;max-width:780px;
  position:relative;z-index:1;
}
.svc-related{
  background:linear-gradient(180deg, #06101D 0%, #02080F 100%);
  padding:64px 0;text-align:center;color:#fff;
}
.svc-related h3{font-size:24px;color:#fff;margin:0 0 24px;font-weight:800}
.svc-related-grid{
  display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
  gap:14px;max-width:880px;margin:0 auto;
}
.svc-related-grid a{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,180,0,.25);
  border-radius:10px;padding:16px 18px;
  color:var(--accent-bright);
  font-weight:600;font-size:14px;
  transition:background .15s, border-color .15s, transform .15s;
}
.svc-related-grid a:hover{
  background:rgba(255,180,0,.12);
  border-color:var(--accent);
  transform:translateY(-2px);
}
.svc-content-section .interlinks{
  margin-top:24px;padding-top:20px;
  border-top:1px solid rgba(20,17,12,.12);
  font-family:var(--mono);font-size:11px;
  letter-spacing:.14em;text-transform:uppercase;
  color:var(--ink-3);
}
.svc-content-section.dark .interlinks{border-top-color:rgba(255,255,255,.12);color:rgba(255,255,255,.55)}
.svc-content-section .interlinks a{
  color:var(--accent-deep);
  border-bottom:1px solid rgba(194,70,23,.30);
  margin-right:14px;font-weight:600;
}
.svc-content-section.dark .interlinks a{color:var(--accent-bright);border-bottom-color:rgba(255,180,0,.40)}
@media (max-width:760px){
  .svc-content-section{padding:48px 0}
  .svc-page-hero{padding:48px 0 56px !important}
  .svc-page-h1{font-size:clamp(32px, 9vw, 48px) !important}
}
</style>`;

  // Build the body
  const body = `</head>
<body>

${TOPBAR_BLOCK}

${HEADER_BLOCK}

<a id="top"></a>

<main id="main">

<section class="svc-page-hero" aria-labelledby="hero-h1">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>›</span>
      <span>${svc.breadcrumb}</span>
    </nav>
    <h1 class="svc-page-h1" id="hero-h1">${svc.h1.replace(/Queens$/, '<span class="accent">Queens</span>')}</h1>
    <p class="svc-page-sub"><strong>$125 flat per service</strong>. ${svc.intro}</p>
    <div class="svc-page-trust">
      <span class="cred-plate cred-plate-price"><strong>$125</strong> Flat Per Service</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Open 24/7/365</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Local Queens Crew</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h7v8l10-12h-7z"/></svg>~25 Min Avg Response</span>
    </div>
    <div style="margin-top:28px"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <h2>${h2.what}</h2>
    <p>${svc.paraWhat1}</p>
    <p>${svc.paraWhat2}</p>
    <div class="interlinks">
      Related: <a href="/">Roadside Assistance Queens Home</a>
      <a href="/jumpstart/">Jump Start</a>
      <a href="/car-lockout/">Car Lockout</a>
      <a href="/tire-change/">Tire Change</a>
      <a href="/fuel-delivery/">Fuel Delivery</a>
      <a href="/battery-replacement/">Battery Replacement</a>
    </div>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.when}</h2>
    <p>Specific situations that lead to a ${svc.name.toLowerCase()} call in Queens. If any of these match what you're experiencing, call dispatch — we handle them daily.</p>
    <div class="svc-list">
      ${svc.when.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <h2>${h2.coverage}</h2>
    <p>${svc.coverage}</p>
    <p>${svc.coverageWhy}</p>
    <div class="interlinks">
      See also: <a href="/">All services overview</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq-section">FAQ</a>
    </div>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.equipment}</h2>
    <p>What's on the truck when we dispatch a ${svc.name.toLowerCase()} call to your location in Queens.</p>
    <div class="svc-list">
      ${svc.equipment.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <h2>${h2.vehicleTypes || h2.batteryTypes || h2.fuelTypes}</h2>
    <p>What ${svc.name.toLowerCase()} service supports across the vehicle types we see most often in Queens.</p>
    <div class="svc-list">
      ${(svc.vehicleTypes || svc.batteryTypes || svc.fuelTypes).map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

${svc.diagnosis ? `<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.diagnosis}</h2>
    <p>${svc.diagnosis}</p>
  </div>
</section>` : ''}

${svc.whatWeDont ? `<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.whatWeDont}</h2>
    <p>${svc.whatWeDont}</p>
  </div>
</section>` : ''}

${svc.potholes ? `<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.potholes}</h2>
    <p>${svc.potholes}</p>
  </div>
</section>` : ''}

<section class="svc-content-section">
  <div class="container">
    <h2>${h2.process}</h2>
    <p>How a ${svc.name.toLowerCase()} call typically runs from your first call to driving away.</p>
    <div class="svc-list">
      ${svc.process.map((p, i) => `<div class="svc-list-item"><h3>${i+1}. ${p[0]}</h3><p>${p[1]}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <h2>${h2.scenarios}</h2>
    <p>Real-world ${svc.name.toLowerCase()} calls that come into the (718) 550-1460 line — Queens-specific situations we see weekly.</p>
    <div class="svc-list">
      ${svc.scenarios.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="svc-content-section" id="pricing">
  <div class="container">
    <h2>${h2.pricing}</h2>
    <p>One number, no hourly meter, no membership tier. ${svc.name} in Queens is a $125 flat call.</p>
    <div class="svc-list">
      ${svc.pricingItems.map(item => `<div class="svc-list-item"><p style="margin:0">✓ ${item}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section dark" id="faq-section">
  <div class="container">
    <h2>${h2.faq}</h2>
    <p>Common questions about ${svc.name.toLowerCase()} service in Queens. If yours isn't here, text dispatch.</p>
    <div class="svc-list">
      ${svc.faqs.map(([q, a]) => `<div class="svc-list-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="svc-related">
  <div class="container">
    <h3>Other Roadside Services in Queens</h3>
    <div class="svc-related-grid">
      ${SERVICES.filter(s => s.slug !== svc.slug).map(s => `<a href="/${s.slug}/">${s.name} →</a>`).join('\n      ')}
    </div>
  </div>
</section>

</main>

${FOOTER_BLOCK}

${MOBILE_BLOCK}

${SCRIPT_BLOCK}

</body>
</html>`;

  const html = head + STYLE_BLOCK + pageStyles + body;
  fs.writeFileSync(path.join(dirRoot, 'index.html'), html, 'utf8');

  // Validate JSON-LD
  const ldM = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let valid = false;
  try { JSON.parse(ldM[1]); valid = true; } catch(e) { console.log(`  [${svc.slug}] schema BROKEN:`, e.message); }
  const wc = html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().split(/\s+/).length;
  console.log(`  ✓ /${svc.slug}/  ${(html.length/1024).toFixed(1)}KB  ${wc} words  schema:${valid ? 'OK' : 'BROKEN'}`);
}

console.log('Building 5 service pages...');
SERVICES.forEach(buildPage);
console.log('Done.');
