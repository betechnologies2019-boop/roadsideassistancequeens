/**
 * Variation pools — alternate phrasings for the high-risk shared blocks.
 *
 * Each combo page picks a variant deterministically by combo-slug hash modulo pool size.
 * Result: across 100 combo pages, no two pages use identical phrasings for process steps,
 * pricing bullets, generic FAQs, or Local Proof items, even though the content is the same.
 *
 * RULES:
 * - Each variant says the same thing (same facts, same scope) but in different wording.
 * - No invented claims sneak in via "spinning."
 * - 4 variants per pool means each variant appears ~25 times across 100 pages.
 * - Cell-unique content (hero subline, whatIs, whenToCall, coverage, scenarios) is the
 *   primary uniqueness driver — variation pools handle the residual 35-40%.
 */

// ---------------------------------------------------------------------------
// PROCESS POOLS — 4 variants of the 6-step process per service.
// Returns an array of [stepTitle, stepBody] pairs.
// ---------------------------------------------------------------------------

const processVariants = {
  jumpstart: [
    // Variant A — direct/operational
    [
      ['Call (718) 550-1460 — describe symptoms.', 'Tell us your cross streets, year/make/model, and what is happening (no crank, slow crank, dim dash). We give you an arrival window.'],
      ['Truck arrives, tech identifies the vehicle.', 'License plate and make/model match. Quick look at the dashboard for warning lights.'],
      ['Battery tested with a multimeter.', 'Resting voltage check. Below 11.5V = dead. Above 12.4V = the battery is fine and the issue is elsewhere.'],
      ['Cables or jump pack connected — engine started.', 'Standard procedure. We use AGM-safe portable jump packs by default; full booster cables for older vehicles.'],
      ['Brief idle period to verify alternator charging.', '5-10 minutes of idle on site so we can confirm the alternator is holding the charge once cables are off.'],
      ['Pay $125 flat — receipt for insurance reimbursement.', 'Cash, all major credit/debit, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt if needed.'],
    ],
    // Variant B — customer-perspective
    [
      ['You call (718) 550-1460.', 'Quick conversation: where you are, what you are driving, what is happening. We confirm a tech is on the way and give you an ETA.'],
      ['Tech arrives at your vehicle.', 'Confirms the vehicle matches what you described. Looks at the dash for warning lights before touching anything.'],
      ['Battery gets a multimeter test first.', 'No assumptions. We measure resting voltage to confirm the battery is actually dead before we put cables on it.'],
      ['Jump pack hooks to the battery.', 'AGM-safe lithium jump pack on most calls. Older vehicles or corroded terminals may get full booster cables instead.'],
      ['Engine starts, then idles briefly.', '5-10 minutes of idle so we can verify the alternator is charging the battery now that the engine is running.'],
      ['$125 flat, paid however you want.', 'Cash, card, Apple Pay, Google Pay, Zelle, CashApp. Receipt itemized for insurance reimbursement.'],
    ],
    // Variant C — what-we-do format
    [
      ['Take the call.', 'Dispatch answers (718) 550-1460. We confirm location, vehicle, and symptoms, then assign the truck closest to you.'],
      ['Roll the truck.', 'Tech is en route within minutes. Average arrival inside Queens is 25 minutes (faster in Astoria, LIC, and Sunnyside).'],
      ['Confirm the vehicle.', 'License plate and make/model verification on arrival. Quick visual on the dash for any warning lights.'],
      ['Diagnose, then fix.', 'Multimeter resting voltage first. Battery dead? Connect AGM-safe jump pack and start the engine. Battery fine? We tell you the actual problem.'],
      ['Verify the alternator.', 'Brief idle test confirms the alternator can hold the charge once cables come off. If it cannot, the car will not stay running — different problem.'],
      ['Settle up.', '$125 flat. Pay with cash or any digital method. Receipt for your records.'],
    ],
    // Variant D — checklist style
    [
      ['Step 1 — call dispatch.', '(718) 550-1460. Tell us your Queens location, vehicle, and symptoms. We give you an arrival window before hanging up.'],
      ['Step 2 — tech arrives on site.', 'Confirms the vehicle matches what you described before touching anything.'],
      ['Step 3 — multimeter battery test.', 'Resting voltage check. We do not assume the battery is the problem; we verify it.'],
      ['Step 4 — connect cables.', 'AGM-safe jump pack on most modern vehicles. Booster cables for older vehicles or corroded terminals.'],
      ['Step 5 — start engine, idle briefly.', '5-10 minutes of idle to confirm the alternator is charging properly.'],
      ['Step 6 — payment, receipt, done.', '$125 flat. Cash, card, or any digital payment. Itemized receipt available for insurance.'],
    ],
  ],

  'car-lockout': [
    // Variant A — direct
    [
      ['Call (718) 550-1460 — confirm make/model.', 'We need to know what we are unlocking before the truck rolls. Different vehicle types need different tools.'],
      ['Tech arrives, verifies registered owner.', 'Quick ID check. We do not open cars for people who cannot show they own them.'],
      ['Tools selected based on vehicle.', 'Slim jim for older vehicles, long-reach tool with air wedge for newer cars.'],
      ['Door opened in 5-15 minutes.', 'No paint damage, no weather seal damage, no broken glass.'],
      ['Pay $125 flat.', 'Cash, all major credit/debit, Apple Pay, Google Pay, Zelle, CashApp. Battery cost (if we replaced a fob battery) is on you.'],
      ['You drive away.', 'Receipt for insurance reimbursement on request.'],
    ],
    // Variant B — empathy/customer-focused
    [
      ['You call (718) 550-1460.', 'Tell us your location and vehicle. We confirm we have the right tools for your make and model before dispatching.'],
      ['Tech arrives at your car.', 'Quick ID verification — we will not unlock a car for someone who cannot show ownership. This protects you and us.'],
      ['Right tool for your vehicle.', 'Slim jim, long-reach tool, or air wedge — picked based on make, model, year, and door design.'],
      ['Door opens — no damage.', 'Modern non-marring tools. We do not bend door frames or scratch paint.'],
      ['$125 flat, paid on completion.', 'Any payment method. Receipt itemized.'],
      ['You are back in your car.', 'If your fob is dead and you have a battery to swap, we will help with that on the spot.'],
    ],
    // Variant C — operational sequence
    [
      ['Dispatch.', '(718) 550-1460 answered 24/7. Confirm year/make/model so the right tools are on the truck.'],
      ['Arrival.', 'Tech reaches your location, typically within 25 minutes inside Queens core.'],
      ['Verification.', 'License plate and registration check. ID match required before we open the vehicle.'],
      ['Tool selection.', 'Slim jim, long-reach with air wedge, or specialty tool — chosen on the spot.'],
      ['Door opens.', '5-15 minutes for most modern vehicles. No paint or seal damage.'],
      ['Payment.', '$125 flat. Cash, card, or digital. Receipt provided.'],
    ],
    // Variant D — checklist
    [
      ['Step 1 — call us.', '(718) 550-1460. Year/make/model + your location. We commit to an arrival window.'],
      ['Step 2 — ID verification on arrival.', 'You show registration matching ID. No exceptions — opening cars without proof of ownership is how stolen-vehicle situations happen.'],
      ['Step 3 — air wedge or slim jim.', 'Modern long-reach tools work through a small frame gap. Older vehicles use slim jims through the weather seal.'],
      ['Step 4 — open the door.', '5-15 minutes typical. No damage to paint, weather seals, or window glass.'],
      ['Step 5 — fob battery (if applicable).', 'If your fob is dead and you have a coin-cell battery, we will swap it on the spot.'],
      ['Step 6 — payment.', '$125 flat. Pay however you prefer. Receipt itemized.'],
    ],
  ],

  'tire-change': [
    // Variant A
    [
      ['Call (718) 550-1460 — describe the situation.', 'Tell us your location, vehicle, and whether you have a spare in the trunk. If no spare, we plan to tow.'],
      ['Tech arrives, inspects the flat.', 'Quick look at damage. Sidewall blowout vs tread puncture matters for whether the tire might be repairable later.'],
      ['Wheel chocks and jack positioning.', 'Chocks on opposite wheels for safety. Jack at the manufacturer\'s lift point — never at a non-reinforced spot.'],
      ['Lug nuts loosened, then car lifted.', 'Always loosen on the ground before lifting. Lift, remove, swap, hand-tighten, lower, then torque to spec.'],
      ['Spare mounted and torqued to spec.', 'Manufacturer-specified torque (typically 80-110 ft-lbs for passenger cars). Spare tire pressure checked and topped off.'],
      ['Pay $125 flat.', 'Flat tire goes in your trunk for a tire shop later. Cash, card, or digital payment.'],
    ],
    // Variant B
    [
      ['You call (718) 550-1460.', 'Critical info: location, vehicle, and whether you have a usable spare. No spare = we tow to a tire shop.'],
      ['Tech assesses the damage.', 'Sidewall damage is unrepairable; tread puncture might be patched at a shop. Either way, we mount the spare.'],
      ['Setup for the lift.', 'Wheel chocks placed. Floor jack positioned at the manufacturer\'s designated lift point.'],
      ['Loosen on the ground, then lift.', 'Standard safety procedure. Loose lugs in the air = wheel can slip when the breaker bar applies torque.'],
      ['Spare on, torqued, pressure-checked.', 'Lug nuts torqued to manufacturer spec. Tire pressure topped to spec — spares often sit unused for years and lose pressure.'],
      ['$125 flat, paid on completion.', 'Old flat goes in your trunk for tire shop disposal/repair later.'],
    ],
    // Variant C
    [
      ['Dispatch.', '(718) 550-1460. We confirm spare availability before rolling — saves a wasted trip if you need a tow instead.'],
      ['Arrival, damage assessment.', 'Tech inspects the flat. Sidewall blowout, tread puncture, or rim damage — each one informs what comes next.'],
      ['Safety setup.', 'Chocks, jack at lift point, lug nuts cracked loose on the ground.'],
      ['Lift, swap, lower.', 'Floor jack lifts the corner. Old wheel off, spare on, hand-tightened lugs, lower the car.'],
      ['Torque to spec.', 'Torque wrench, manufacturer spec (80-110 ft-lbs for passenger cars). Pressure-check the spare before driving.'],
      ['Settle up.', '$125 flat. Receipt itemized for insurance reimbursement.'],
    ],
    // Variant D
    [
      ['Step 1 — make the call.', '(718) 550-1460. Location, vehicle, and most importantly: do you have a spare? No spare = we tow.'],
      ['Step 2 — damage check.', 'Sidewall blowout means the tire is done. Tread puncture might be repairable at a shop.'],
      ['Step 3 — chocks + jack.', 'Wheel chocks on the diagonal. Jack at the manufacturer\'s reinforced lift point.'],
      ['Step 4 — lug-nut loosening.', 'Always before the lift. Breaker bar on a ground-supported wheel is safe; on a lifted wheel it is not.'],
      ['Step 5 — mount + torque + pressure.', 'Spare on, torqued to spec, pressure topped to manufacturer recommendation.'],
      ['Step 6 — pay and drive.', '$125 flat. Old flat goes in your trunk for follow-up at a tire shop.'],
    ],
  ],

  'fuel-delivery': [
    // Variant A
    [
      ['Call (718) 550-1460 — confirm gas or diesel + vehicle.', 'Critical to know which fuel and what vehicle so we bring the right type and amount.'],
      ['Tech arrives with jerry can, verifies vehicle.', 'Quick visual confirmation that you are where you said you are and the vehicle matches.'],
      ['Fuel poured into your tank.', '2-3 gallons typical. We use a funnel to avoid spillage.'],
      ['Engine started — diesel priming if needed.', 'Gasoline cars start immediately. Diesels may need 30 seconds of priming and a fuel-rail bleed.'],
      ['Pay $125 + fuel cost.', 'Fuel itself billed at average local pump price. Total typical $130-150.'],
      ['You drive to the nearest station.', 'Fill up properly so you do not run dry again on the trip home.'],
    ],
    // Variant B
    [
      ['You call (718) 550-1460.', 'Tell us: gas or diesel, year/make/model, your location. Different fuel needs different cans and a different priming approach.'],
      ['Tech reaches you with the correct fuel.', 'Approved jerry can, the right grade. Verifies vehicle on arrival.'],
      ['Fuel goes into your tank.', '2-3 gallons via funnel. NYC fire-code-approved equipment, no spills.'],
      ['Engine starts.', 'Gas: turns over normally. Diesel: brief priming first to clear air from the fuel lines.'],
      ['$125 + the fuel itself.', 'Fuel billed at the average local pump price. Total $130-150 depending on grade.'],
      ['Drive to a real gas station.', 'Top off properly — 2-3 gallons gets you to the pump, not all the way home.'],
    ],
    // Variant C
    [
      ['Dispatch.', '(718) 550-1460. Confirm fuel grade, vehicle, and location.'],
      ['Truck arrives.', 'Approved jerry can with the correct fuel. Tech verifies vehicle before pouring.'],
      ['Fueling.', '2-3 gallons of gas or diesel through a funnel. NYC fire code requires approved containers and no spillage.'],
      ['Engine restart.', 'Gasoline cars fire immediately. Diesels need a quick prime first.'],
      ['Payment.', '$125 service fee + fuel at pump price. Receipt itemized.'],
      ['Get to a station.', 'You have enough fuel to reach the nearest pump comfortably.'],
    ],
    // Variant D
    [
      ['Step 1 — call dispatch.', '(718) 550-1460. State gas vs diesel and vehicle make/model up front.'],
      ['Step 2 — arrival with the can.', 'Approved 2- or 5-gallon jerry can, the right grade. Vehicle verified.'],
      ['Step 3 — pour fuel.', '2-3 gallons through a funnel. No spillage; NYC environmental regulations require this.'],
      ['Step 4 — start engine.', 'Diesels need brief priming after running dry. Gasoline cars start immediately.'],
      ['Step 5 — settlement.', '$125 service + fuel at pump price. Total typically $130-150.'],
      ['Step 6 — pump station next.', 'Fill up at the nearest station — 2-3 gallons is enough to get you there, not enough to skip the pump.'],
    ],
  ],

  'battery-replacement': [
    // Variant A
    [
      ['Call (718) 550-1460 — confirm vehicle.', 'Year/make/model so we source the right battery (Group size, AGM vs standard, location in the engine bay).'],
      ['Tech arrives, tests the existing battery.', 'Multimeter resting voltage + load test. About 1 in 8 calls turn out to be alternator or parasitic drain, not battery.'],
      ['Memory saver plugged into OBD2.', 'Keeps the car\'s electronics powered while the old battery comes out — preserves radio codes, climate presets, window calibration.'],
      ['Old battery out, new battery in.', 'Terminals cleaned. New battery torqued in with proper hold-downs. Cables reconnected positive-first.'],
      ['Alternator output verified.', 'Engine started. Multimeter on the new battery should read 13.8-14.4V at idle = alternator is charging properly.'],
      ['Pay $125 + battery cost.', 'Common Group sizes $120-300 standard, $200-400 AGM. Old battery taken for recycling at no extra charge.'],
    ],
    // Variant B
    [
      ['You call (718) 550-1460.', 'Confirm year/make/model. Different vehicles need different Group sizes (Group 35, 47, 65, 75) and AGM vs standard chemistry.'],
      ['Tech arrives, tests first.', 'No assumptions. Resting voltage check + load test before we sell you a new battery. Sometimes the alternator is the culprit.'],
      ['OBD2 memory saver hooked up.', 'Keeps power to the car\'s memory chips during the swap. Without it, you lose radio codes and some settings.'],
      ['Battery swap.', 'Old out, terminals cleaned, new battery installed with proper hold-downs and torque.'],
      ['Verification.', 'Engine running. Voltage on the new battery should sit at 13.8-14.4V at idle if the alternator is doing its job.'],
      ['Pay and recycle.', '$125 labor + battery cost. We take the old battery for recycling at no extra charge.'],
    ],
    // Variant C
    [
      ['Dispatch.', '(718) 550-1460. Vehicle info determines Group size and chemistry — wrong battery in a modern start-stop car is a quick way to ruin both.'],
      ['On-site diagnostic.', 'Resting voltage + load test. Confirms whether replacement is the right call.'],
      ['Memory preservation.', 'OBD2 saver keeps the car\'s ECU and infotainment alive during the disconnect.'],
      ['Replacement.', 'Old battery removed, terminals cleaned, new battery seated and torqued.'],
      ['Charging system check.', 'Verify alternator output is in the 13.8-14.4V band at idle.'],
      ['Settle up + recycle.', '$125 + battery cost. Old battery goes with us for proper NY State recycling.'],
    ],
    // Variant D
    [
      ['Step 1 — call dispatch.', '(718) 550-1460. Vehicle year/make/model is critical — Group size and AGM-vs-standard varies a lot.'],
      ['Step 2 — diagnostic test.', 'Multimeter resting voltage + load test. Confirms battery vs alternator vs parasitic drain.'],
      ['Step 3 — memory saver.', 'OBD2 module keeps the car\'s electronics powered during the swap so you do not lose settings.'],
      ['Step 4 — install new battery.', 'Terminals cleaned, hold-downs installed, lugs torqued, cables reconnected.'],
      ['Step 5 — verify alternator.', 'Engine on, multimeter reads 13.8-14.4V on the new battery = alternator is charging properly.'],
      ['Step 6 — pay + we recycle.', '$125 labor + battery price. We take the old battery for recycling.'],
    ],
  ],
};

// ---------------------------------------------------------------------------
// PRICING POOLS — 4 variants of the 6-bullet "what's included" list per service.
// ---------------------------------------------------------------------------

const pricingVariants = {
  jumpstart: [
    [
      'Local dispatch from inside Queens (no national routing)',
      'One jump start performed completely (we do not leave until the engine is running)',
      'Multimeter battery + alternator diagnosis included',
      'No surcharges for nights, weekends, or holidays',
      'Itemized invoice for insurance reimbursement',
      'Payment on completion — no money until your car is running',
    ],
    [
      'Truck dispatched from a Queens staging spot — not from a national 1-800 center',
      'Engine running before we drive away',
      'Battery + alternator multimeter test included with the call',
      'Same flat $125 at 3 a.m. as at 3 p.m.',
      'Receipt itemized for AAA/Geico/insurance out-of-network reimbursement',
      'You only pay when the work is verified complete',
    ],
    [
      'Queens-staged service vehicle, ~25 min average response',
      'Complete jump start performed on site (engine running, alternator verified)',
      'Battery diagnostic test bundled with the call',
      'Flat rate at all hours, all days, all holidays',
      'Itemized receipt for insurance reimbursement',
      'No payment until you confirm the engine is running',
    ],
    [
      'Independent local dispatch (we are not a third-party AAA contractor)',
      'Successful jump start guaranteed before payment',
      'Free multimeter diagnosis included with every call',
      'No upcharge for late night, weekend, or holiday calls',
      'Insurance-reimbursable itemized receipt',
      'Pay on the spot when the engine starts — never before',
    ],
  ],

  'car-lockout': [
    [
      'Local dispatch from inside Queens (no national routing)',
      'Door opening with non-marring tools (slim jim, long-reach, air wedge)',
      'Frozen lock de-icing if applicable in winter',
      'No surcharges for nights, weekends, or holidays',
      'No paint or weather-seal damage (or we eat the repair cost)',
      'Payment on completion — when you are back in the car',
    ],
    [
      'Queens-based truck rolls — not a national 1-800 routing system',
      'Modern long-reach tools or slim jims, picked for your vehicle make/model',
      'Winter frozen-lock de-icing covered in the same call',
      'Same flat $125 at any hour, any day',
      'Damage-free guarantee — we cover the fix if we mark your car',
      'Pay only when you are back inside the cabin',
    ],
    [
      'Independent local lockout dispatch from inside Queens',
      'Slim jim, long-reach tool, or air wedge — selected on site',
      'Frozen lock cylinders thawed in winter at no extra charge',
      'Flat rate 24/7/365 — no premium for night, weekend, or holiday',
      'Zero paint, weather-seal, or glass damage (we cover repairs if it happens)',
      'Payment on success only',
    ],
    [
      'Truck staged in Queens (not routed from out of state)',
      'Non-marring unlocking tools — preserves paint, weather seals, glass',
      'Winter frozen-lock service included',
      'No after-hours surcharge, ever',
      'Damage-free pledge with full repair coverage',
      'Settle up only when the door is open',
    ],
  ],

  'tire-change': [
    [
      'Local dispatch from inside Queens (no national routing)',
      'Tire change with your existing spare',
      'Lug nuts torqued to manufacturer spec',
      'Spare tire pressure check + top-off if needed',
      'No surcharges for nights, weekends, or holidays',
      'Payment on completion — when the spare is on and torqued',
    ],
    [
      'Queens-staged service van, not a national-routing dispatch',
      'Spare mounted from your trunk in 20-30 minutes',
      'Manufacturer-spec torque applied to every lug nut',
      'Spare pressure topped to spec before you drive',
      'Flat rate at all hours and all days',
      'Pay only when the swap is complete',
    ],
    [
      'Local Queens dispatch — fast response, no national routing',
      'Your spare mounted on site (no need to limp to a tire shop)',
      'Torque wrench applied to spec — wheel will not loosen',
      'Compressed air to top off the spare to manufacturer pressure',
      'No premium for evening, overnight, weekend, or holiday',
      'Payment on completion only',
    ],
    [
      'Independent Queens-based dispatch',
      'Spare swap performed on site with proper jack and torque tools',
      'Lug nuts brought to manufacturer-specified torque (typically 80-110 ft-lbs)',
      'Spare pressure verified and adjusted before drive-off',
      'Same flat $125 at any hour',
      'You pay when the spare is mounted and torqued — not before',
    ],
  ],

  'fuel-delivery': [
    [
      'Local dispatch from inside Queens (no national routing)',
      '2-3 gallons of gasoline or diesel delivered to your vehicle',
      'Fuel system priming for diesel vehicles included',
      'No surcharges for nights, weekends, or holidays',
      'Fuel itself billed at average local pump price',
      'Payment on completion — when the engine is running',
    ],
    [
      'Queens-based truck rolls with the correct fuel grade for your vehicle',
      '2-3 gallons of gas or diesel in NYC fire-code-approved cans',
      'Diesel fuel-line priming and air-bleed included on diesel calls',
      'Flat $125 service fee at all hours, no late-night premium',
      'Fuel itself charged at the average local pump price (transparent)',
      'No payment until your engine is running',
    ],
    [
      'Independent Queens-staged dispatch — fast response',
      'Approved jerry can with the right fuel grade and quantity (2-3 gal)',
      'Diesel priming pump included for vehicles that ran completely dry',
      'Same flat rate around the clock — nights, weekends, holidays',
      'Fuel cost itemized at pump-equivalent rate',
      'You pay when the engine starts — never before',
    ],
    [
      'Local Queens fuel-delivery dispatch (no national routing)',
      '2-3 gallons in NYC-approved containers, the correct grade for your vehicle',
      'Diesel fuel-system priming bundled into diesel calls',
      'No after-hours, weekend, or holiday surcharge',
      'Fuel billed at average local pump price (transparent line item)',
      'Payment on completion only — when the engine fires up',
    ],
  ],

  'battery-replacement': [
    [
      'Local dispatch from inside Queens (no national routing)',
      'Multimeter resting voltage + load test before replacement',
      'OBD2 memory saver to preserve your settings during install',
      'Terminal cleaning + new hold-down hardware if needed',
      'Old battery recycling at no extra charge',
      'Alternator output verification after install',
      'Battery cost varies — common Group sizes $120-300, AGM premium $200-400',
    ],
    [
      'Queens-based truck rolls with common battery Group sizes on board',
      'Diagnostic test first — we do not sell you a battery you do not need',
      'Memory saver keeps your car\'s settings alive during the swap',
      'Cleaned terminals + new hold-downs if your old hardware is broken',
      'Old battery taken for proper NY State recycling',
      'Alternator output checked after install (13.8-14.4V at idle)',
      'Battery itself billed at retail; total typical out-the-door $245-425',
    ],
    [
      'Independent local Queens dispatch',
      'Resting voltage + load test confirms battery is the issue (1 in 8 calls turn out to be alternator instead)',
      'OBD2 memory module preserves radio codes, climate, and window calibration',
      'Terminals cleaned and torqued; broken hold-downs replaced',
      'Old battery recycled at no charge',
      'Alternator verification after install — engine running, voltage in spec',
      'Total cost = $125 labor + battery retail (Group 35/47/65/75 in stock)',
    ],
    [
      'Local Queens dispatch — common batteries stocked on the truck',
      'Diagnostic test before any sale (multimeter + load tester)',
      'Memory saver maintains electronics during the disconnect',
      'Cleaned battery terminals and replacement hold-downs as needed',
      'Old battery taken for recycling — required by NY State, included in the call',
      'Alternator verified after install (13.8-14.4V at idle = healthy)',
      'Out-the-door total typically $245-425 depending on Group size and chemistry',
    ],
  ],
};

// ---------------------------------------------------------------------------
// LOCAL PROOF POOL — 12 trust-signal items, 4 phrasings each.
// Each combo page picks 3-4 items; phrasing rotated by combo hash.
// ---------------------------------------------------------------------------

const localProofItems = [
  {
    key: 'staged-locally',
    title: 'Service vehicles physically staged in {neighborhood}',
    variants: [
      'Trucks parked inside {neighborhood} between calls — that is what gets the response time to ~{responseMin} minutes inside the neighborhood. National routing typically runs 60+ minutes.',
      'Our service vehicles are based inside Queens, not 40 miles away at a national dispatch center. {neighborhood} is one of the staging zones — average arrival is ~{responseMin} minutes.',
      'We stage trucks across Queens, including {neighborhood}. National roadside membership programs route your call to whichever third-party tow vendor picks up — often not us, often 60+ minutes out.',
      'Local staging is the reason a {neighborhood} call gets to you in ~{responseMin} minutes instead of an hour. The truck is already on this side of Queens.',
    ],
  },
  {
    key: 'direct-line',
    title: 'Direct local phone, not a 1-800 routing center',
    variants: [
      '(718) 550-1460 is a 718 New York City line. Calls are answered by dispatch that knows {neighborhood} street names, parking quirks, and the typical call patterns in this neighborhood.',
      'Our number is a real Queens 718 line — not an 800-number membership service. Dispatch knows {neighborhood} firsthand and asks the right questions on the call.',
      'You call dispatch directly at (718) 550-1460. No menu trees, no national routing, no "press 1 for roadside." Real person, knows {neighborhood}.',
      '(718) 550-1460 is staffed by dispatch who lives and works in Queens. {neighborhood} addresses are familiar — you do not have to spell street names twice.',
    ],
  },
  {
    key: 'van-fit',
    title: 'Service-vehicle sizing for {neighborhood} blocks',
    variants: [
      '{vanFitNote}',
      'We dispatch the right vehicle for {neighborhood} conditions. {vanFitNote}',
      'Vehicle sizing matters in Queens — narrow blocks, height-limited garages, double-parked streets. {vanFitNote}',
      '{vanFitNote} — we know {neighborhood} blocks well enough to send the right truck the first time.',
    ],
  },
  {
    key: 'sub-areas',
    title: 'Coverage across all {neighborhood} sub-areas',
    variants: [
      '{subAreasJoined} — same flat $125, same 24/7 line, same staged-local response window.',
      'We cover {subAreasJoined} at the same flat rate around the clock.',
      'All of {neighborhood}: {subAreasJoined}. One number, one flat rate, one response window.',
      'From {subAreasJoined} — every block in {neighborhood} is on the same dispatch system.',
    ],
  },
  {
    key: 'payment',
    title: 'Full payment options {neighborhood} customers expect',
    variants: [
      'Cash, all major credit/debit, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt for insurance reimbursement. Pay only when the engine is running.',
      'Pay however you want: cash, card, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt available for insurance. Payment on completion only.',
      'Cash or any digital payment method (Apple Pay, Google Pay, Zelle, CashApp). Receipt itemized so you can submit to insurance for out-of-network reimbursement.',
      'All major payment methods accepted: cash, credit, debit, Apple Pay, Google Pay, Zelle, CashApp. Pay only after we complete the work — receipts itemized.',
    ],
  },
  {
    key: 'honest-scope',
    title: 'Honest about what we will not do',
    variants: [
      'If your battery cannot hold a charge after a successful service, we tell you on the spot — we do not perform the service and walk away. We shift to whatever is the right next step.',
      'We diagnose first, then act. If the problem is not actually what you called for, we tell you and recommend the right fix instead of selling you the wrong service.',
      'We will not perform a service if it is not the right fix. About 1 in 8 calls turn out to need a different solution than the customer initially thought — we tell you on the spot.',
      'No upselling, no fake fixes. If the call is not what we can solve, we tell you the actual answer (often a tow to your shop) before we charge you for anything.',
    ],
  },
  {
    key: 'no-highway',
    title: 'Highway and parkway disclosure',
    variants: [
      'We do not service NYC highways, parkways, bridges, or tunnels — those are restricted to NYPD-rotation contractors. Get off to a service road or surface street first; we will meet you there.',
      'Restricted zones near {neighborhood}: {restrictedJoined}. NYPD rotation only on those — we cannot legally help on highways and parkways. We meet you on the service road.',
      'NYC restricts highway/parkway/bridge service to NYPD rotation contractors. Common restricted roads near {neighborhood}: {restrictedJoined}. Move to a surface street first.',
      'Highway service is restricted by NYC to NYPD-rotation only. {restrictedJoined} fall in that bucket. We can meet you at the next safe surface-street spot.',
    ],
  },
  {
    key: 'flat-rate',
    title: 'Same flat rate around the clock',
    variants: [
      '$125 flat at 3 a.m. is the same as $125 flat at 3 p.m. No late-night, weekend, or holiday surcharges.',
      'Flat rate means flat rate — the price you hear on the call is the price you pay when the work is done. No hidden surcharges.',
      'No premium for night, weekend, or holiday calls. Flat $125 always.',
      'One number ($125) for nights, weekends, holidays — same as a Tuesday afternoon. No tier games.',
    ],
  },
  {
    key: 'queens-hours',
    title: '24/7/365 dispatch line',
    variants: [
      '(718) 550-1460 is staffed 24 hours, 7 days a week, every holiday — including the 3 a.m. calls and the holiday-Sunday calls.',
      'Open 24/7/365. Late-night and early-morning calls in {neighborhood} are typically handled fastest because traffic is lighter.',
      'No closed hours. Roadside problems do not respect business hours and neither do we — (718) 550-1460 is always live.',
      'Round-the-clock dispatch. {neighborhood} late-night calls are common (dinner crowd, post-show, post-shift) — we expect them.',
    ],
  },
  {
    key: 'no-membership',
    title: 'No annual membership required',
    variants: [
      'Pay per call when you actually need help. No $80-100/year membership tier, no "gold" upgrade, no benefit caps.',
      'You do not need to be a member or have signed up for anything. Call when you need us, pay flat $125 when we are done.',
      'No membership lock-in. No annual fee. No "you used your free tow this year" cap. One flat call, one flat rate.',
      'AAA-style membership not required. Call when stranded, pay $125 flat, drive away.',
    ],
  },
  {
    key: 'transparent-pricing',
    title: 'No hidden fees, no hookup charges',
    variants: [
      'No hookup fee, no surprise mileage charge, no fuel surcharge, no after-hours premium. The number you hear is the number you pay.',
      'No "diagnostic fee" added on top. No "service truck dispatch" fee. No "after-hours" markup. $125 flat, period.',
      'Transparent pricing — itemized receipt shows the $125 plus any parts (battery, fuel) at retail. Nothing hidden.',
      'Receipt itemized clean: service charge, parts at cost, total. No phantom line items.',
    ],
  },
  {
    key: 'local-knowledge',
    title: '{neighborhood} dispatch knows the territory',
    variants: [
      'Dispatch knows the {corridorsShort} corridor, the {transitShort} commuter pattern, and the parking quirks in {neighborhood}. We get there without GPS missteps.',
      'We know {neighborhood} streets, common breakdown spots, and where to park a service vehicle while we work. Local knowledge = faster on-site time.',
      '(718) 550-1460 dispatch handles {neighborhood} calls daily. We know which corridors get traffic at which hours and route the truck accordingly.',
      'Local route knowledge — {neighborhood} blocks, the {corridorsShort} commercial corridor, transit choke points. We get to you faster because we know the territory.',
    ],
  },
];

// ---------------------------------------------------------------------------
// GENERIC FAQ POOL — 12 questions, 3 answer phrasings each.
// Used to fill FAQ slots after the cell-unique 5-7 questions.
// ---------------------------------------------------------------------------

const genericFaqs = [
  {
    key: 'cost',
    question: 'How much does {service} cost in {neighborhood}?',
    answers: [
      '$125 flat. Same price across all {neighborhood} sub-areas. No surcharge for late night, weekends, or holidays.',
      '$125 flat — same in {neighborhood} as anywhere else in Queens. No premium for night calls or holidays.',
      'Flat $125. No "service area surcharge," no late-night premium, no weekend markup. Same price everywhere in {neighborhood}.',
    ],
  },
  {
    key: 'response',
    question: 'How fast can you get to my {neighborhood} address?',
    answers: [
      'Approximately {responseMin} minutes inside {neighborhood} on average. Times vary by traffic and the specific sub-area within {neighborhood}.',
      '~{responseMin} minutes is the average. Faster than national membership programs (typically 60+ min) because our trucks are staged inside Queens, not at a national center.',
      'Average ~{responseMin} minutes inside {neighborhood}. Faster on early-morning or late-night calls when traffic is lighter.',
    ],
  },
  {
    key: 'sub-areas',
    question: 'Do you cover {firstSubArea} and {secondSubArea}?',
    answers: [
      'Yes — every {neighborhood} sub-area is in our coverage: {subAreasJoined}. Same flat rate, same 24/7 line.',
      'All of {neighborhood} is covered, including {firstSubArea} and {secondSubArea}. One dispatch system, same flat $125.',
      'Yes. {subAreasJoined} all get the same coverage at the same flat rate.',
    ],
  },
  {
    key: 'highway',
    question: 'Can you help me on the {firstRestricted}?',
    answers: [
      'No. NYC highways, parkways, bridges, and tunnels are restricted to NYPD-authorized rotation contractors. Get off to a service road or surface street first; we will meet you there.',
      'No — NYC restricts {firstRestricted} (and other highways/parkways) to NYPD rotation contractors only. Move to the service road; we can meet you there.',
      'Highway service is NYPD-rotation only by NYC law. {firstRestricted} falls in that bucket. We can help once you reach a surface street.',
    ],
  },
  {
    key: 'payment',
    question: 'What payment methods do you accept?',
    answers: [
      'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp. Paid on completion.',
      'All standard methods: cash, card, Apple Pay, Google Pay, Zelle, CashApp. Pay when the work is done, not before.',
      'Cash or any major digital payment (cards, Apple Pay, Google Pay, Zelle, CashApp). Receipt itemized for insurance reimbursement.',
    ],
  },
  {
    key: 'hours',
    question: 'Is service available 24/7 in {neighborhood}?',
    answers: [
      'Yes. (718) 550-1460 is staffed 24 hours, 7 days a week, every holiday. Late-night calls in {neighborhood} are common.',
      '24/7/365. We expect late-night calls in {neighborhood} — they get dispatched as fast as daytime calls.',
      'Round-the-clock. (718) 550-1460 is always live, including 3 a.m. calls and holiday Sundays.',
    ],
  },
  {
    key: 'membership',
    question: 'Do I need an annual membership?',
    answers: [
      'No. Pay per call when you actually need help. No $80-100/year membership, no benefit caps, no "you used your free tow."',
      'Membership-free. You only pay when you call us. No annual fee, no tier games.',
      'No membership required. Flat $125 per call, no recurring charges, no signup.',
    ],
  },
  {
    key: 'insurance',
    question: 'Will my insurance reimburse this?',
    answers: [
      'Many policies that include roadside coverage reimburse out-of-network calls. We provide an itemized receipt — submit it to your carrier for review.',
      'Possibly — most insurance policies with roadside coverage allow out-of-network reimbursement. We give you an itemized receipt for your claim.',
      'Depends on your policy. Roadside coverage typically reimburses out-of-network providers — we provide an itemized receipt so you can file the claim.',
    ],
  },
  {
    key: 'aaa',
    question: 'Why not call AAA or my insurance roadside?',
    answers: [
      'You can — but those programs route your call through a national dispatch center to whichever third-party vendor picks up. In Queens, that vendor often is not us, and the wait is typically 60+ minutes. Direct local dispatch is ~{responseMin} minutes.',
      'AAA and insurance roadside are valid options, but they route through a national center to a third-party vendor — usually 60+ minutes in Queens. Calling us direct cuts the middleman.',
      'National roadside programs work, but slowly in NYC. They route to whichever local vendor is available, which is often not us. Direct local dispatch in Queens is typically ~{responseMin} minutes.',
    ],
  },
  {
    key: 'damage',
    question: 'Will the work damage my vehicle?',
    answers: [
      'No. We use modern non-damaging tools and procedures. If we damage anything (extremely rare), we cover the repair.',
      'No damage. Modern equipment, manufacturer-spec procedures. We cover any repair if something goes wrong (rare).',
      'No. We follow OEM procedures and use non-marring tools. If we cause damage, we pay to fix it.',
    ],
  },
  {
    key: 'service-area',
    question: 'Do you only serve {neighborhood}?',
    answers: [
      'No — we cover all of Queens plus border Brooklyn (Greenpoint, Williamsburg, East New York). {neighborhood} is one of 20 Queens neighborhoods we dispatch to daily.',
      'We cover all of Queens. {neighborhood} is one neighborhood; same flat rate applies across the borough.',
      'All of Queens is in our coverage area, plus border Brooklyn. {neighborhood} is one of many — same flat rate everywhere.',
    ],
  },
  {
    key: 'not-included',
    question: 'What is NOT included in the $125?',
    answers: [
      'Parts (new battery, new tire, fuel itself) are billed separately at cost. {whatItDoesNotInclude}',
      'The $125 covers the service labor. Parts (battery, tire, fuel) are extra at retail. {whatItDoesNotInclude}',
      'Labor is $125 flat; parts are at cost on top. Beyond that: {whatItDoesNotInclude}',
    ],
  },
];

module.exports = {
  processVariants,
  pricingVariants,
  localProofItems,
  genericFaqs,
};
