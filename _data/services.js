/**
 * Service data table — 5 roadside services.
 *
 * RULES:
 * - primaryKw: high-volume real search terms people type. Used for badges + H2 generation.
 * - longTailKw: lower-volume long-tail variants. Used for badge variation across neighborhoods
 *   so /jumpstart-astoria/ and /jumpstart-flushing/ surface different exact-match phrasings.
 * - symptomKw: what users Google when they don't know the service name (e.g., "dead battery"
 *   instead of "jumpstart"). Used in scenarios + body copy.
 * - framings: 5 distinct intro angles for the "what is X service" section. Rotated across
 *   neighborhoods so /jumpstart-astoria/ uses framing 0, /jumpstart-flushing/ uses framing 2,
 *   etc. This is the primary defense against duplicate "what is jumpstart" paragraphs.
 * - commonCauses: causes used in body copy + scenarios.
 * - equipment: what we carry on a service call.
 * - whatItDoesNotInclude: scope limit, copied verbatim into the page so we don't oversell.
 */

module.exports = [
  {
    slug: 'jumpstart',
    name: 'Jump Start',
    nameVerb: 'jump start',
    plural: 'jump start calls',

    primaryKw: [
      'jumpstart near me',
      'car jumpstart',
      'dead battery jumpstart',
      'jumpstart service',
      'mobile jumpstart',
      '24 hour jumpstart',
      'emergency jumpstart',
      'roadside jumpstart',
      'battery boost',
      'jumpstart cost',
    ],
    longTailKw: [
      'jumpstart car battery',
      'jumpstart dead car',
      'auto jumpstart service',
      'cheap jumpstart',
      'cheap car jumpstart',
      'AAA alternative jumpstart',
      'jumpstart truck',
      'jumpstart SUV',
      'AGM battery jumpstart',
      'late night jumpstart',
    ],
    symptomKw: [
      'dead battery',
      'car wont start',
      'engine wont crank',
      'slow crank battery',
      'clicking sound when key turns',
      'dim dashboard lights',
    ],

    framings: [
      "Jumpstart service restarts a vehicle whose battery has lost enough charge to crank the engine. A roadside tech connects a portable jump pack or full booster cables to the dead battery, providing the burst of current the starter needs to fire up. The whole process typically takes 5-15 minutes on site for a standard 12V passenger car battery.",
      "When a car battery dies, you're stuck — engine silent, dashboard dim, possibly a clicking sound when you turn the key. Jumpstart is the fastest fix: a tech arrives with a portable jump pack rated for modern AGM and start-stop batteries, hooks it to your terminals, and gets you running. Drive 20+ minutes after the jumpstart and the alternator typically tops the battery back up.",
      "A jumpstart call follows a predictable sequence: tech arrives, multimeters the battery to confirm it's actually dead (rather than an alternator or starter problem), connects cables in the standard order, starts the engine, runs a brief idle period to verify the alternator is charging, then collects payment. Most calls are done in well under 30 minutes from the first call to driving away.",
      "Most jumpstart calls in Queens trace to one of three structural causes: a parasitic drain (lights left on, dome light triggered by a partly-shut door, aftermarket electronics), a battery at the end of its 3-5 year service life that finally gave up, or a sub-15°F morning that pushed a marginal battery over the edge. The fix is the same — get the engine running — but the diagnosis tells you whether you also need a battery replacement.",
      "Jumpstart service gets your engine running. It does NOT replace a dead battery that won't hold a charge, fix a failing alternator that can't keep a battery topped up, or charge an EV's main drive battery (we can jumpstart the 12V auxiliary). We diagnose on the spot with a multimeter and load test, and if a jumpstart is the right call we do it; if not, we tell you what is.",
    ],

    commonCauses: [
      'Interior or dome light left on overnight',
      'Door not fully shut, triggering a constant draw',
      'Battery at end of life (typically 3-5 years for NYC cars)',
      'Sub-15°F overnight temperature reducing battery efficiency 30-60%',
      'Aftermarket electronics or alarm systems with parasitic drain',
      'Car parked unused 5+ days (subway commuters)',
      'Failed alternator that did not keep the battery topped up',
    ],

    equipment: [
      ['Lithium-ion portable jump packs (AGM-safe)', 'Rated for 12V passenger cars; safe for modern start-stop AGM battery systems. We carry multiple packs per truck.'],
      ['Heavy-gauge copper booster cables', 'For older vehicles that do not respond well to compact jump packs, or where battery terminals are corroded and need a stronger connection.'],
      ['Battery terminal cleaner and brushes', 'Corroded terminals are a common reason a jumpstart "does not take." We clean before connecting.'],
      ['Multimeter', 'For diagnosing whether the issue is the battery, alternator, or starter — before we make assumptions.'],
      ['Backup power for the technician', 'So we can also help if your phone is dead while you wait.'],
    ],

    corePromise: 'Engine running before we leave. $125 flat. ~25 min average response borough-wide.',
    whatItDoesNotInclude: 'Jumpstart does not replace a battery, fix an alternator, charge an EV main pack, or rescue a vehicle on the BQE / GCP / parkways / bridges (NYPD-rotation only).',
    timeOnSite: '5-15 min on site for a standard 12V passenger car battery',
    offerNotIncluded: 'No additional cost for nights, weekends, holidays. Battery replacement if needed is billed separately.',
  },

  {
    slug: 'car-lockout',
    name: 'Car Lockout',
    nameVerb: 'unlock',
    plural: 'car lockout calls',

    primaryKw: [
      'car lockout near me',
      'car lockout service',
      'locked keys in car',
      'car unlock service',
      'auto lockout',
      'mobile car lockout',
      '24 hour car lockout',
      'emergency car lockout',
      'roadside lockout',
      'lockout cost',
    ],
    longTailKw: [
      'unlock my car',
      'open locked car door',
      'car door unlock service',
      'cheap car lockout',
      'lockout service queens',
      'professional car unlock',
      'no damage car unlock',
      'car key locked inside',
      'dead key fob unlock',
      'auto relock',
    ],
    symptomKw: [
      'locked keys in car',
      'keys in trunk',
      'fob not working',
      'dead key fob',
      'auto-lock with engine running',
      'kid locked in car',
      'pet locked in car',
    ],

    framings: [
      "Car lockout service unlocks a vehicle whose driver does not have access to the keys — keys locked inside the cabin, dead key fob, auto-relock with the engine running, or a fob misplaced after a long night. A tech arrives with non-marring slim jims, long-reach tools, and air wedges, and opens the driver's side door without damaging the weather seals or paintwork.",
      "When you're locked out of your car — whether the keys are visible inside the cup holder or your fob just stopped working — a roadside tech can have the door open in 5-15 minutes. We use a slim jim or long-reach tool to manipulate the unlock mechanism from outside without harming your weather seals, paint, or window glass. No need to call a locksmith for a standard lockout.",
      "A lockout call works like this: we arrive, verify you're the registered owner (no exceptions — opening cars without ID checks is how stolen-vehicle situations happen), select the right tool for your vehicle make and year, and open the door. Modern long-reach tools work through a small air-wedge gap at the door frame; older vehicles use traditional slim jims through the weather seal.",
      "Most car lockouts in Queens fall into one of four buckets: keys visibly locked inside (most common), keys in the trunk with a closed trunk, a dead key fob that no longer signals the receiver, or an auto-relock with the engine still running (common when loading kids or groceries). The fix is similar across all four — we open the cabin and you handle the rest.",
      "Lockout service opens your locked car. It does NOT cut new keys, program new fobs, replace damaged ignition cylinders, or rescue motorcycles with side-cover locks. If your fob is lost (not just dead), or your physical key broke off in the lock, we can open the car and tow you to a Queens locksmith or dealer who can cut and program new keys.",
    ],

    commonCauses: [
      'Keys locked inside the cabin (visible in cup holder, seat, or floor)',
      'Keys in the trunk with a closed trunk',
      'Dead key fob battery — fob no longer signals',
      'Auto-relock with engine running (loading kids, loading groceries)',
      'Fob in a Faraday-shielding bag that blocks signal',
      'Frozen lock cylinder in winter (door is unlocked but latch is frozen)',
      'Child or pet accidentally locked inside (priority dispatch)',
    ],

    equipment: [
      ['Slim jim (modern variant)', 'Thin metal tool slid down between the window and weather seal to manipulate the lock linkage from inside.'],
      ['Long-reach tools (air wedge + grabber arm)', 'For newer cars where slim jims cannot reach the linkage. Air bladder creates a small frame gap, then a thin arm presses the unlock button on the inside door panel.'],
      ['Air wedges (multiple sizes)', 'Inflatable bladders that pry open a small gap between door and frame without bending or scratching. Sizes for different door types.'],
      ['Plastic non-marring wedges', 'Used with the air wedges to maintain the gap while we work the long-reach tool.'],
      ['Frozen lock kit (winter)', 'De-icing solution and lock-thaw tools for frozen latches and cylinders.'],
    ],

    corePromise: 'Door open in 5-15 minutes. $125 flat. No paint or weather-seal damage (or we cover the repair).',
    whatItDoesNotInclude: 'Lockout does not cut new keys, program new fobs, replace ignition cylinders, or rescue vehicles on highways/parkways/bridges (NYPD-rotation only).',
    timeOnSite: '5-15 min on site for most modern vehicles',
    offerNotIncluded: 'New keys or fob programming, if you lost the original, are charged separately by a locksmith or dealer.',
  },

  {
    slug: 'tire-change',
    name: 'Tire Change',
    nameVerb: 'change',
    plural: 'tire change calls',

    primaryKw: [
      'tire change near me',
      'flat tire service',
      'roadside tire change',
      'mobile tire change',
      'spare tire installation',
      '24 hour tire change',
      'emergency tire change',
      'roadside flat tire',
      'tire change cost',
      'tire swap service',
    ],
    longTailKw: [
      'change flat tire',
      'install spare tire',
      'roadside spare tire',
      'tire change service queens',
      'cheap tire change',
      'pothole flat tire',
      'sidewall blowout tire change',
      'donut spare install',
      'truck tire change',
      'SUV tire change',
    ],
    symptomKw: [
      'flat tire',
      'pothole damage',
      'sidewall blowout',
      'tire pressure warning',
      'tire shredded',
      'curbed wheel',
    ],

    framings: [
      "Roadside tire change service swaps your flat tire for the spare you carry in your trunk. A tech arrives, lifts the car with a hydraulic jack, removes the flat, mounts your spare, and torques the lug nuts to manufacturer specification. The work typically takes 20-30 minutes on site. You drive away on your spare; we don't sell new tires roadside.",
      "When a tire goes flat in Queens — pothole sidewall blowout, slow leak that finally gave up, curb impact while parking — driving on it destroys the wheel within minutes. Roadside tire change is the right answer: we mount your spare on the spot so you don't have to crawl to a tire shop on a destroyed rim. If you don't have a spare, we tow to a Queens tire shop where they can sell and mount a new tire.",
      "A tire change call goes like this: we arrive, place wheel chocks, position the floor jack at the manufacturer's lift point, loosen lug nuts on the ground before lifting (always — never break loose lugs in the air), lift the car, swap to the spare, lower, and torque the lug nuts to manufacturer spec (typically 80-110 ft-lbs for passenger cars). Then we put the flat in the trunk for you to take to a tire shop later.",
      "Most flat-tire calls in Queens are pothole-driven, especially in spring and fall after the freeze-thaw cycle does its work. Common pothole hot spots include Queens Boulevard service road, Northern Boulevard, the BQE service road through Maspeth and Ridgewood, the LIE through Fresh Meadows, and the Whitestone Bridge approach. Sidewall damage from a pothole is unrepairable — the tire is done; we mount the spare.",
      "Tire change service swaps your flat for your spare. It does NOT include selling, delivering, or mounting a new tire roadside (we tow to a tire shop for that), repairing or patching tires (unsafe roadside; needs a real tire shop), or rescuing vehicles on highways/parkways/bridges (NYPD-rotation only). Get off the highway first; we'll meet you on the service road.",
    ],

    commonCauses: [
      'Pothole sidewall blowout (most common in Queens)',
      'Slow leak that finally went flat overnight',
      'Curb impact while parallel parking',
      'Nail or screw puncture in the tread',
      'Underinflation that wore through a sidewall',
      'Tire age (5+ years) leading to dry-rot failure',
      'Rim damage from a hard pothole hit',
    ],

    equipment: [
      ['Heavy-duty floor jack', 'Rated for full-size SUVs and pickups. Faster and more stable than the OEM scissor jack.'],
      ['Breaker bar + 1/2" socket set', 'For removing lug nuts torqued by an impact wrench at a tire shop.'],
      ['Torque wrench', 'For tightening the spare to manufacturer-specified torque (typically 80-110 ft-lbs for passenger cars).'],
      ['Wheel chocks', 'Required for safety on any street with even slight grade.'],
      ['Lug-nut key removers (universal)', 'For wheel locks where you do not have the key.'],
      ['Tire pressure gauge + compressor', 'Spares often sit unused for years and lose pressure. We air up to spec before you drive off.'],
    ],

    corePromise: 'Spare mounted and torqued to spec in 20-30 minutes. $125 flat.',
    whatItDoesNotInclude: 'Tire change does not include new tire purchase, tire repair/patching, or service on highways/parkways/bridges (NYPD-rotation only).',
    timeOnSite: '20-30 min on site for most vehicles',
    offerNotIncluded: 'If you have no spare, we tow to a tire shop. The new tire itself is billed by the shop.',
  },

  {
    slug: 'fuel-delivery',
    name: 'Fuel Delivery',
    nameVerb: 'deliver fuel to',
    plural: 'fuel delivery calls',

    primaryKw: [
      'fuel delivery near me',
      'gas delivery service',
      'out of gas service',
      'mobile fuel delivery',
      'roadside fuel',
      '24 hour fuel delivery',
      'emergency fuel delivery',
      'gas station delivery',
      'fuel delivery cost',
      'diesel delivery',
    ],
    longTailKw: [
      'out of gas roadside',
      'ran out of gas help',
      'emergency gas delivery',
      'fuel delivery queens',
      'cheap fuel delivery',
      'gas brought to my car',
      '2 gallon gas delivery',
      'diesel roadside delivery',
      'late night gas delivery',
      'highway fuel delivery',
    ],
    symptomKw: [
      'out of gas',
      'empty fuel tank',
      'engine sputtering low fuel',
      'fuel light on too long',
      'ran out of diesel',
      'wrong fuel in tank',
    ],

    framings: [
      "Roadside fuel delivery brings gasoline or diesel to a vehicle that has run out of fuel. A tech arrives with a sealed jerry can holding 2-3 gallons of either regular unleaded gasoline or diesel, pours it into your tank, primes the fuel system if needed (more on diesel below), and gets your engine started so you can drive to the nearest pump.",
      "Running out of gas in Queens is more common than people admit — long stretches without stations on the GCP service road heading to LaGuardia, on Cross Bay Boulevard heading to the Rockaways, or on Northern Boulevard between Whitestone and the Bronx. Fuel delivery is faster and cheaper than a tow to a gas station: we bring 2-3 gallons of motor fuel directly to your stuck vehicle.",
      "A fuel delivery call works like this: we arrive with a fire-code-approved jerry can, verify the vehicle is the one you described, pour 2-3 gallons of the correct fuel grade into your tank using a funnel to avoid spillage, prime the fuel system if you're a diesel that ran completely dry, and start the engine. Total time on site is typically 5-10 minutes.",
      "We deliver 2-3 gallons because that's the right amount: NYC fire and transportation safety regulations limit non-tanker service vehicles to small fuel volumes, and gasoline degrades in jerry cans within weeks. Bringing exactly enough to reach the nearest pump is best practice — anything more sits in the can deteriorating until the next call.",
      "Fuel delivery brings gasoline or diesel. It does NOT include pumping out wrong fuel (gas-in-diesel or vice versa is a tow-only situation — fuel must be drained at a shop before any new fuel goes in), filling a tank to full (NYC regulations limit jerry-can volume), delivering to vehicles on highways/parkways/bridges (NYPD-rotation only), or delivering propane, kerosene, or non-automotive fuels.",
    ],

    commonCauses: [
      'Pushed past the empty light counting on the next station',
      'Long stretch without stations (GCP service road, Cross Bay, etc.)',
      'Diesel ran completely dry (needs priming after refuel)',
      'Fuel gauge misreporting actual level',
      'Sat in stop-and-go traffic burning fuel faster than expected',
      'Forgot to refuel at the end of yesterday\'s drive',
    ],

    equipment: [
      ['Approved jerry cans (2 and 5 gallon)', 'NYC fire-code-approved cans with sealed spouts and venting. We carry one of each size.'],
      ['Funnel kit', 'Some modern fuel necks (especially diesels and certain BMW/Mercedes models) require an adapter funnel to fit a non-pump nozzle.'],
      ['Diesel priming hand pump', 'For older diesel vehicles whose fuel system cannot self-prime after running dry.'],
      ['Long flexible funnel', 'For low-clearance sports cars and certain pickups with bedside fillers.'],
      ['Spill containment + absorbent pads', 'Required by NYC environmental regulations.'],
    ],

    corePromise: 'Engine running on delivered fuel within 5-10 minutes of arrival. $125 + the fuel itself at pump price.',
    whatItDoesNotInclude: 'Fuel delivery does not pump out wrong fuel, fill a tank to full, deliver to vehicles on highways/parkways/bridges (NYPD-rotation only), or deliver propane / kerosene / heating oil.',
    timeOnSite: '5-10 min on site',
    offerNotIncluded: 'Fuel itself is billed at the average local pump price. Total typical: $130-150 depending on grade.',
  },

  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    nameVerb: 'replace the battery on',
    plural: 'battery replacement calls',

    primaryKw: [
      'battery replacement near me',
      'mobile battery replacement',
      'car battery delivery',
      'new car battery service',
      'AGM battery installation',
      '24 hour battery replacement',
      'emergency battery replacement',
      'roadside battery replacement',
      'battery replacement cost',
      'car battery installation',
    ],
    longTailKw: [
      'new battery installed at home',
      'mobile car battery service',
      'battery replacement queens',
      'cheap battery replacement',
      'AGM battery delivery',
      'group 35 battery service',
      'group 47 battery service',
      'EV 12V battery replacement',
      'battery replacement driveway',
      'old battery recycling included',
    ],
    symptomKw: [
      'battery wont hold charge',
      'battery keeps dying',
      'swollen battery',
      'leaking battery',
      'corroded battery terminals',
      'multiple jumpstarts in a month',
      'failed load test',
    ],

    framings: [
      "Mobile battery replacement is a roadside service that swaps a dead or dying car battery for a new one at your location — your home, your office, the side of the road — instead of getting jumpstarted, driving to an auto parts store, and waiting for them to install it. We carry common Group sizes 24F, 35, 47, 65, 75 and AGM variants on the truck.",
      "When does a dead battery actually need replacement instead of just a jumpstart? Three signals: the battery is 4+ years old, you've needed multiple jumpstarts in a month, or it shows visible swelling/leaking/heavy terminal corrosion. If any of those apply, replacement is the fix. We come to you with a new battery sized for your vehicle, install it, and verify the alternator is charging it correctly.",
      "A battery replacement call works like this: we arrive, multimeter your existing battery (resting voltage + load test), confirm replacement is the right call (about 1 in 8 calls turn out to be alternator or parasitic-drain issues, not battery), plug an OBD2 memory saver into the diagnostic port to keep your radio codes and settings alive while the battery is out, swap the battery, verify alternator output, and take the old one for recycling.",
      "Most battery replacements in Queens come from one of three causes: a 4-5 year old battery hitting end of life (NYC heat and cold cycles shorten battery life vs the warranty estimate), repeated jumpstarts in a month indicating the battery cannot hold charge anymore, or visible swelling from internal cell damage (often from heat or overcharging — replace immediately, not safe to drive on).",
      "Battery replacement installs a new battery. We test before replacing — about 1 in 8 calls turns out to be the alternator or a parasitic drain rather than the battery itself, and we'd rather not sell you a battery you don't need. If your alternator is failing, we tow to a shop instead, because installing a new battery on a failed alternator just kills the new battery within hours.",
    ],

    commonCauses: [
      'Battery 4+ years old hitting end of life',
      'Multiple jumpstarts in a short period',
      'Visible swelling, leaking, or heavy terminal corrosion',
      'Failed load test at a shop or roadside',
      'Voltage below 11V resting (essentially dead)',
      'Cold-snap morning that pushed a marginal battery over the edge',
      'EV 12V auxiliary battery dying (locks you out of an otherwise-fine EV)',
    ],

    equipment: [
      ['Multimeter + load tester', 'Verify the battery is actually the problem. About 1 in 8 calls turn out to be alternator or parasitic drain.'],
      ['OBD2 memory saver', 'Plugs into the diagnostic port and keeps power flowing to the car\'s memory while the battery is disconnected — preserves radio codes, climate presets, window calibration.'],
      ['Terminal cleaner + brushes', 'Corrosion must be cleaned before installing a new battery, or the new one will start corroding immediately.'],
      ['Battery puller', 'For batteries wedged into tight engine bays under intake manifolds or behind the headlight.'],
      ['Hold-down hardware', 'OEM battery hold-downs are often broken or missing on older cars. We carry universal replacements.'],
      ['Common Group-size batteries on the truck', 'Group 24F, 35, 47, 65, 75 and AGM variants stocked. Less common sizes sourced from the nearest parts store before dispatch.'],
    ],

    corePromise: 'New battery installed, alternator output verified, old battery taken for recycling. $125 labor + battery cost.',
    whatItDoesNotInclude: 'Battery replacement does not fix alternators, starters, or wiring issues. We test before replacing and tow to a shop if the alternator is the actual culprit.',
    timeOnSite: '25-35 min on site including diagnostic test and verification',
    offerNotIncluded: 'Battery itself: common Group sizes $120-300 (standard) or $200-400 (AGM). Total out-the-door typically $245-425.',
  },
];
