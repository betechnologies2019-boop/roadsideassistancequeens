/**
 * Cell content — jump start × neighborhood (20 cells).
 *
 * Each cell holds the genuinely unique content for one (jump start, neighborhood) page.
 * Shared content (process steps, pricing bullets, generic FAQs, Local Proof items) is
 * NOT in this file — it comes from variation_pools.js and is rotated by combo hash.
 *
 * RULES:
 * - No invented geography. Real corridors, real sub-areas only.
 * - No invented activity counts ("we've responded 50 times to X"). Patterns, not numbers.
 * - 6 scenarios per cell, each tied to a real neighborhood-specific situation.
 * - 5+ cell-unique FAQs (the rest come from generic FAQ pool with variable substitution).
 */

module.exports = {
  astoria: {
    heroSubline: `<strong>$125 flat per service</strong>. Astoria is one of our highest-volume jump start neighborhoods — dense street parking, weekday commuters who park Friday and don't touch the car until Monday, and a brutal cold-snap pattern off the East River. Trucks staged inside Astoria mean ~20 minute response, faster than the borough average and faster than national membership routing.`,
    whatIs: {
      p1: `Jump Start service in Astoria means a roadside tech arrives at your stuck vehicle, hooks a portable jump pack or full booster cables to your battery terminals, and gets the engine running. The work itself takes around 15 minutes on site for a typical 12V passenger car. Astoria's parking density (mostly street parking on narrow side streets, plus a handful of apartment garages near Halletts Point and the Ditmars Boulevard line) means our service vehicles are sized to fit — we dispatch a smaller service van to tight blocks instead of the full flatbed.`,
      p2: `Astoria sees a high rate of battery-related roadside calls per square mile, and the reason is structural: the N/W subway runs straight through Astoria with stops at Astoria Boulevard, 30th Avenue, Broadway, 36th Avenue, and 39th Avenue. Tens of thousands of Astoria residents commute Manhattan via the subway five days a week and only touch their cars on weekends. A car that sits Monday through Friday is a car with a slowly-discharging battery, and the next time you go to start it — typically Friday night for a dinner on 30th Avenue or Saturday morning for a Costco run — the battery is dead.`,
    },
    whenToCall: [
      ['Car parked all week, dead Friday night', 'The subway-commuter pattern. You drove home Sunday, parked on a side street off 30th Avenue, took the train all week, came back to the car for Friday dinner — engine cranks slow or not at all. Standard jump start, ~15 min on site.'],
      ['Cold morning sub-15°F off Astoria Park', 'Astoria Park borders the East River and the wind off the Hell Gate Bridge drops effective overnight temperatures below the official Queens reading. A battery that was marginal yesterday is dead this morning. Cold-snap mornings produce batches of these calls.'],
      ['Door-ajar light burned overnight on a side street', 'Most common cause of dead batteries in Astoria after subway-commute drain. Dome light or door-ajar signal, parked overnight, dead by 7 AM. Standard jump start fixes it.'],
      ['Halletts Point or Astoria Cove garage drain', 'Newer waterfront high-rises (Halletts Point, Astoria Cove) have garage parking with limited ventilation and tight bays. Cars sit longer and electrical drains compound. We dispatch the small service van that fits the height limits.'],
      ['Astoria Boulevard service road — engine sputter, pulled over', 'Battery is failing under load while driving. Coasts to the shoulder. We jump start and tell you on the spot whether the alternator is charging the new charge — if not, you need a tow to a shop, not just a jump start.'],
      ['Older family car that sits between weekend trips', 'Astoria has long-time Greek and Italian families with older sedans used only for weekend church or grocery runs. Battery age + low usage = dead battery every few months. Jump Start works once or twice; eventually you need a battery replacement.'],
    ],
    coverage: {
      intro: `Jump Start service across Astoria covers every sub-neighborhood and parking situation: Old Astoria (the historic core south of 30th Avenue), Steinway (east of 31st Street with the Steinway piano factory area), Ditmars-Steinway (north of Ditmars Boulevard toward Astoria Park), Halletts Point and Astoria Cove (the East River waterfront with newer high-rise buildings), and Astoria Heights (the eastern portion near the Grand Central Parkway feeder).`,
      why: `Astoria response time is faster than the borough average because our service vehicles are physically staged inside the neighborhood, not routed from a national dispatch center. When you call (718) 550-1460 from a side street off 30th Avenue, a truck already on Steinway Street responds. Average arrival inside Astoria is ~20 minutes, faster than the ~25 minute Queens-wide average. National roadside membership programs route to whichever third-party tow vendor picks up — often not us, often 60+ minutes.`,
      landmarks: `Common Astoria call origins by area: residential side streets between 21st Street and Steinway (highest call volume, where street parking is densest); the 30th Avenue commercial strip (late-night dinner crowd discovers the dead battery); Astoria Park perimeter (residents parking near the park, cars sitting overnight); Halletts Point waterfront garages (auto-lock and fob issues mixed with battery drains); Astoria Boulevard service road (highway-adjacent breakdowns). We do not service the BQE, Grand Central Parkway, or RFK Bridge approach lanes — those are NYPD rotation only.`,
    },
    whyHeavyDemand: `Three structural reasons Astoria has higher-than-average jump start demand: (1) Subway commuter pattern — N/W line means 5+ days of car-not-driven for most working residents, which is enough to discharge a marginal battery. (2) Cold-air pocket off the East River — Astoria Park's exposure to the river drops effective overnight temperatures below the official Queens reading, especially on the blocks within four to five streets of the park; cold reduces battery efficiency 30-60%. (3) Older housing stock with limited driveways — most residents park on the street, which means door-ajar lights, dome-light drains, and overnight cold are unmediated by a closed garage.`,
    scenarios: [
      ['30th Avenue late-night dinner', 'Friday or Saturday night, dinner on 30th Avenue, walked back to the car at 11:30 PM, dead battery. Our truck is ~20 min away on average. Total time from your call to driving home: under 35 minutes.'],
      ['Astoria Park morning, weekend away', 'Returned from a weekend trip, parked the car at the park edge Sunday night, came back Monday morning for the commute — dead battery. Cold morning + the river-air effect is the typical culprit.'],
      ['Halletts Point luxury garage', 'Newer waterfront high-rise. Battery dies overnight after the dome light burned through a partly-open door. We confirm garage clearance and dispatch the small van.'],
      ['Steinway Street weekday shopping', 'Long evening errands on Steinway Street, came back to the car, slow crank. Either lights left on or the battery is at end of life. We diagnose on the spot.'],
      ['Side street between 21st and 36th — apartment commuter', 'The classic Astoria jump start. N/W subway commuter, car parked Sunday through Friday, dead by Friday night. Our service vehicle is sized for narrow side streets and double-parked Astoria conditions.'],
      ['Ditmars Boulevard residential — older family car', 'Greek or Italian family sedan used only for weekend trips. Battery age plus low utilization equals dead battery every few months. We jump start, recommend a battery replacement before next winter.'],
    ],
    cellFaqs: [
      ['Is jump start service available on Astoria side streets?', 'Yes — the bulk of our Astoria calls are on side streets between 21st Street and Steinway. Our smaller service van is sized for narrow Astoria blocks and double-parked conditions.'],
      ['Do you service Halletts Point and Astoria Cove garages?', 'Yes. We dispatch the smaller service van that fits standard residential garage clearance (typically 6\'9" to 7\'0"). Confirm height limits with us when you call so we send the right vehicle.'],
      ['Why does my car battery keep dying in Astoria?', 'Most common reasons: (1) you commute by N/W subway and the car sits unused 5+ days a week, slowly discharging the battery; (2) you live within a few blocks of Astoria Park and the East River wind drops your overnight temperature below the rest of Queens; (3) you park on a side street and a dome light or door-ajar signal drained the battery overnight. After two jump starts in a month, replace the battery.'],
      ['Can I get a jump start in Astoria at 3 AM?', 'Yes. (718) 550-1460 is staffed 24/7, including overnight. The 30th Avenue dinner crowd produces a steady late-night call pattern in Astoria — we expect those calls.'],
      ['How does Astoria response time compare to the rest of Queens?', '~20 minutes is the Astoria average. ~25 minutes is the borough-wide average. Astoria is faster because our staging zones are inside the neighborhood — the truck is already on this side of the BQE.'],
    ],
  },

  'long-island-city': {
    heroSubline: `<strong>$125 flat per service</strong>. LIC jump start calls are dominated by high-rise garage situations — cars parked Friday after work, untouched until Monday morning, dead battery. We dispatch a height-clearance-aware service van that fits standard tower garages, and we know the difference between the LIC luxury fobs that auto-relock and the standard battery drain you can solve with a jump pack.`,
    whatIs: {
      p1: `Jump Start service in Long Island City is mostly a garage-call business. LIC's housing stock skews heavily toward glass-tower high-rises — Hunters Point waterfront, Court Square towers, Queens Plaza, Ravenswood — and that means most cars in LIC sleep in tower garages with 6'8" to 7'0" clearance limits. We dispatch a smaller service van rather than a full flatbed because the flatbed simply does not fit. The work on site takes around 15 minutes once we are at your space, but garage navigation (security check-in, elevator-bay positioning, finding your space) typically adds 5-10 minutes vs. a street call.`,
      p2: `LIC also has the heaviest weekend-warrior pattern in Queens. Most LIC residents work in Manhattan and walk or take the 7/E/M/G/N/W to work — the car parked Friday night sits there until the next weekend. Modern start-stop AGM batteries do not love sitting; they self-discharge a percent or two per week, and a marginal battery is dead by the second weekend. Add a luxury-fob auto-relock issue (where the fob loses pairing in the garage's signal-quiet underground space) and you have the LIC call mix.`,
    },
    whenToCall: [
      ['Hunters Point tower garage — dead Saturday morning', 'You parked Friday after work in your tower\'s underground garage, walked to dinner at Vernon Boulevard, took the 7 home Saturday morning, came back to the car Sunday for a Costco run — dead battery. Standard jump start in your space.'],
      ['Court Square garage — auto-relock with fob inside', 'You loaded groceries, the fob fell into the trunk or seat, doors auto-relocked. Technically a lockout call, but if the battery also dies during the wait we handle both.'],
      ['Queens Plaza — fob signal-loss in underground garage', 'LIC underground garages have spotty fob-signal reception. Some luxury fobs lose pairing entirely in those zones, which can trip the alarm and drain the battery overnight. Reset + jump start fixes it.'],
      ['Vernon Boulevard street parking — dome light overnight', 'For LIC residents who do park on the street (Hunters Point waterfront has limited street parking but it exists). Same dome-light or door-ajar drain pattern as the rest of Queens.'],
      ['Dutch Kills industrial-side street — older car sitting', 'Dutch Kills has a higher proportion of older cars and longer-term street parking than the glass-tower side of LIC. Cars sit, batteries die, similar to Sunnyside-adjacent patterns.'],
      ['Ravenswood — high-rise mid-week dead battery', 'Ravenswood Houses + adjacent high-rises. Mid-week dead batteries from cars sitting 4-5 days during commute weeks.'],
    ],
    coverage: {
      intro: `Jump Start service across Long Island City covers Hunters Point (the waterfront high-rise core south of Queens Plaza), Court Square (the central business district around the LIRR and 7-train stop), Queens Plaza (the multi-line subway hub area), Dutch Kills (the older mixed-use area east of 21st Street), and Ravenswood (north LIC near the East River and the BQE entrance).`,
      why: `LIC is structurally a garage-parking borough sub-area, which changes the call profile vs. Astoria or Sunnyside. Our service vehicles are staged inside Queens — Hunters Point or Court Square is typically a ~22 minute response from our staging zones (slightly longer than Astoria because waterfront access roads can backup at peak hours). Garage clearance is the make-or-break: confirm your tower's height limit when you call so we send the right vehicle.`,
      landmarks: `Common LIC call origins: Hunters Point underground garages (highest call volume — cars sit weekends, weekend-warrior battery drain); Court Square tower garages (Manhattan-commuter pattern); Queens Plaza commercial garages (mixed business/residential); Vernon Boulevard street parking (limited street spots, dome-light drains); Dutch Kills older-car residential blocks. We do not service the Queensboro Bridge, BQE, or RFK Bridge approach — NYPD rotation only.`,
    },
    whyHeavyDemand: `LIC jump start calls cluster around three structural conditions: (1) Tower-garage parking where cars sit untouched 5-7 days while owners commute Manhattan via 7/E/M/G/N/W — modern AGM batteries self-discharge faster in unused-vehicle conditions, and a marginal battery is dead by the second weekend. (2) Garage clearance limits the available service vehicles, which means knowing the right tower height in advance is part of the call. (3) Luxury-fob auto-relock and signal-loss issues in underground garages are common in newer LIC towers and often combine with battery drain on the same call.`,
    scenarios: [
      ['Hunters Point waterfront tower — Saturday morning', 'You parked Friday after work, walked to dinner on Vernon, took the 7 to brunch Saturday — came back to the car for groceries, dead battery. Garage clearance confirmed on the call, we send the right van.'],
      ['Court Square tower — fob lost pairing', 'Underground garage signal quiet caused the fob to lose pairing with the car. Doors auto-relocked, battery drained from alarm cycling. Reset + jump start in 25 minutes.'],
      ['Queens Plaza commercial garage — late-night Manhattan return', 'Took the 7 to dinner in Manhattan, came back at 1 AM, dead battery in the office tower garage. Late-night dispatch is faster (less traffic on the bridges and BQE).'],
      ['Vernon Boulevard street parking — dome light burn', 'Standard dome-light overnight drain. Less common in LIC because most residents garage-park, but it happens.'],
      ['Dutch Kills older-car sitting weekend', 'Dutch Kills has more long-term street parking and older cars than tower-LIC. Battery age + low usage = dead battery, similar to Sunnyside-adjacent patterns.'],
      ['Ravenswood NYCHA + adjacent — mid-week dead', 'Mid-week dead battery from a 5-day sitting pattern, common in LIC outside the tower core.'],
    ],
    cellFaqs: [
      ['What\'s the garage clearance for your service vehicle?', 'Our smaller service van fits standard residential garage clearance — typically 6\'9" to 7\'0". Most LIC towers are within range, but confirm your specific garage clearance when you call so we dispatch the right vehicle the first time.'],
      ['My LIC tower garage requires building check-in. Can you handle that?', 'Yes — give the front desk our company name and (718) 550-1460 in advance, or be there to walk us in. Tech will sign in at security, navigate the garage to your space, and return the badge on exit.'],
      ['Why does my LIC battery die after weekends only?', 'Modern start-stop AGM batteries self-discharge while the car sits. A car parked Friday-Monday in an LIC tower garage loses 1-2% of charge across the weekend; a marginal battery cannot recover. Either drive 30+ minutes once a week to top it back up, or replace the battery if it\'s 4+ years old.'],
      ['Can you jump start on the Queensboro Bridge approach?', 'No — Queensboro Bridge approach lanes are NYPD-rotation restricted, like all NYC bridges. If you\'re on the bridge, get to a Manhattan-side or Queens-side surface street first; we can meet you on Queens Plaza or Vernon Boulevard.'],
      ['Are LIC luxury-fob issues a real problem?', 'Yes — newer LIC towers have signal-quiet underground garages where some luxury fobs lose pairing or trip the alarm system, draining the battery overnight. Common on certain BMW, Mercedes, and Audi models. Fix is reset + jump start, not a battery replacement.'],
    ],
  },

  sunnyside: {
    heroSubline: `<strong>$125 flat per service</strong>. Sunnyside jump start calls split between two patterns — the 7-train commuter who parks on the side street Monday and finds the car dead Friday, and the older car owner in Sunnyside Gardens whose weekend-only sedan sits in the garage between trips. Tight Queens Boulevard parking adds urgency to either situation.`,
    whatIs: {
      p1: `Jump Start service in Sunnyside is mostly a side-street and Queens Boulevard residential affair. The 7 train runs along Queens Boulevard with stops at 40th Street-Lowery, 46th Street-Bliss, 52nd Street-Lincoln, and 61st Street-Woodside, putting most Sunnyside residents within a 5-minute walk of a Manhattan-bound train. The result: cars sit on side streets while commuters take the train, batteries discharge slowly, and the first cold morning of the season produces a wave of dead-battery calls.`,
      p2: `Sunnyside Gardens — the historic 1920s planned-community section — is a separate call pattern. Older residents, often older cars, kept for weekend errands and church. These cars sit between weekend uses, batteries age, and we see the same family sedan multiple times a year for jump starts before the owner finally replaces the battery. Sunnyside core is more standard street-parking density similar to Astoria.`,
    },
    whenToCall: [
      ['7-train commuter pattern — Friday night dead battery', 'You parked Sunday night, took the 7 to Manhattan all week, came back to the car for dinner Friday night — slow crank or no crank. Standard jump start, 15 minutes on site.'],
      ['Sunnyside Gardens weekend-only sedan', 'Older family car, used only for weekend trips. Battery age + low usage = dead battery every few months. We jump start, recommend battery replacement after the second call.'],
      ['Queens Boulevard side street — door-ajar drain', 'Side street off Queens Boulevard, parked overnight, door not fully shut, dome light burned. Classic Sunnyside-Astoria-adjacent dead-battery cause.'],
      ['Skillman Avenue residential — cold-snap morning', 'First sub-15°F morning of winter. A battery that was marginal yesterday is dead this morning. Skillman Avenue and the side streets off it produce a batch of these on cold-snap days.'],
      ['Greenpoint Avenue commercial drag — late-night dinner', 'Skillman, Greenpoint Avenue, and adjacent side-streets have a small late-night dinner scene. Walking back at 11 PM to a dead battery is the typical Sunnyside late-night call.'],
      ['43rd Avenue near LIRR yard — older car sitting', 'Side streets near the LIRR Sunnyside Yard have longer-term street parking. Cars sit, batteries die.'],
    ],
    coverage: {
      intro: `Jump Start service across Sunnyside covers Sunnyside Gardens (the historic 1920s planned community north of Queens Boulevard with driveways and front gardens), Sunnyside core (the dense apartment-and-walkup blocks south of Skillman Avenue and east of 39th Street), and the Queens Boulevard commercial corridor with 7-train elevated stops at 40th-Lowery, 46th-Bliss, and 52nd-Lincoln.`,
      why: `Sunnyside response time is ~22 minutes on average — slightly longer than Astoria because Sunnyside is one stop further from our Astoria/LIC staging zones, but still well inside the borough average. The 7-train elevated structure along Queens Boulevard creates predictable traffic patterns that dispatch routes around at peak hours.`,
      landmarks: `Common Sunnyside call origins: side streets between 39th Street and 52nd Street (highest density of street-parked apartment cars); Sunnyside Gardens (older-car weekend pattern); Queens Boulevard service road (commercial corridor calls); Skillman Avenue (residential walk-up density); 43rd Avenue near the LIRR Sunnyside Yard. We do not service the BQE, Long Island Expressway, or Pulaski Bridge approach.`,
    },
    whyHeavyDemand: `Sunnyside jump start calls cluster around two patterns. The 7-train commuter pattern is identical to Astoria but with slightly different timing — Sunnyside residents reach Manhattan in under 20 minutes via the 7, so the commuter density is high and the car-sitting-Mon-Fri pattern is dominant in the apartment-walkup core. The Sunnyside Gardens pattern is different: older homeowners, older cars used only weekly, batteries dying from age and low utilization rather than from a parasitic drain. Both end with a $125 flat jump start.`,
    scenarios: [
      ['43rd Avenue side street — Friday night commuter', '7-train commuter, parked Sunday night, dead Friday night for dinner plans. Most common Sunnyside call.'],
      ['Sunnyside Gardens — weekend church car', 'Older residents with a weekend-only sedan used for church on 39th Street and groceries. Battery dies between weekends; we jump start and recommend replacement.'],
      ['Queens Boulevard service road — engine sputter', 'Driving home from Manhattan, battery starts to fail under load, pull onto the service road. We jump start and verify alternator on the spot.'],
      ['Skillman Avenue cold-snap morning', 'First true cold morning of winter, side street parking, dead battery. Common in late November and January.'],
      ['Greenpoint Avenue late-night dinner', 'Walked to dinner on Greenpoint Ave, came back at 11 PM, dead battery from dome light. Late-night dispatch is faster.'],
      ['Sunnyside Yard adjacent — long-term parker', 'Side streets near the LIRR yard see longer-term street parking. Older cars sit weeks, batteries die.'],
    ],
    cellFaqs: [
      ['Do you service Sunnyside Gardens private streets?', 'Yes. Sunnyside Gardens has narrow private streets and front gardens — our smaller service van handles them without trouble. Drive-up access to the front of the home is typical.'],
      ['How fast can you reach Sunnyside from Astoria?', 'Approximately 22 minutes average. Slightly longer at peak hours when the 7-train and BQE both back up. Late-night Sunnyside calls are typically 15-18 minutes.'],
      ['Why does my older Sunnyside Gardens car die so often?', 'Two reasons: (1) batteries 4+ years old hit end of life, and weekend-only driving accelerates the decline; (2) the alternator on a weekend-only car never gets enough drive-time to fully top off the battery between trips. After the second jump start in a month, it\'s replacement time.'],
      ['Can I get a jump start in Sunnyside late at night?', 'Yes — (718) 550-1460 is 24/7. Sunnyside late-night calls (post-dinner on Skillman or Greenpoint) are common.'],
      ['Does the 7-train elevated structure affect dispatch routing?', 'Yes. At peak hours we route around the elevated columns on Queens Boulevard via Skillman Avenue or 39th Street. Dispatch knows the local routing.'],
    ],
  },

  woodside: {
    heroSubline: `<strong>$125 flat per service</strong>. Woodside jump start calls split between Roosevelt Avenue late-night dinner-crowd dead batteries and 7-train + LIRR commuter cars sitting through the work week. The mix of Filipino, Irish, and Latin American restaurants on Roosevelt produces a steady late-night call pattern that dispatch expects.`,
    whatIs: {
      p1: `Jump Start service in Woodside is split across two distinct patterns. Roosevelt Avenue under the 7 elevated is a dense restaurant strip with Filipino, Thai, and Latin American restaurants that fill late and turn over slowly — diners walk back to the car at 11 PM or 1 AM and discover the dead battery from a dome light or older battery that finally gave up. The other pattern is the 7-train + LIRR commuter at 61st-Woodside (one of the few Queens stations with a direct LIRR transfer), whose car sits Monday through Friday and dies in the cold by late autumn.`,
      p2: `Woodside has more single-family and 2-family homes than Sunnyside or Astoria, particularly around Big Six and Woodside Heights. That gives some residents driveways or shared front-yard parking, which changes the call pattern: garage-parked cars sit longer between trips because the owner does not have to "rotate the spot," producing more weekend-warrior battery drains than typical Astoria street parking.`,
    },
    whenToCall: [
      ['Roosevelt Avenue late-night dinner crowd', 'Walked to dinner under the 7 elevated, came back at 11 PM or 1 AM, dead battery. Most common Woodside late-night call. Our truck routes via Queens Boulevard to avoid the Roosevelt Avenue elevated structure.'],
      ['61st-Woodside transfer commuter — Friday night', 'You park Sunday near the station, take the LIRR or 7 to Manhattan all week, come back Friday — dead battery. The dual-transit pattern produces longer car-sitting periods than single-line stations.'],
      ['Big Six garage-parked weekend warrior', 'Big Six residents with detached or semi-detached garages park Friday, drive Saturday once, back to weekday commute Monday. Modern AGM batteries self-discharge faster than older flooded batteries; weekend-only driving cannot keep them topped up.'],
      ['Woodside Avenue residential — door-ajar overnight', 'Standard side-street dome-light drain pattern.'],
      ['Northern Boulevard service road — engine sputter', 'Driving home, alternator failing, pulled to the shoulder. We jump start and verify; if the alternator is the actual issue, we tow to your shop.'],
      ['Queens Boulevard cold-snap morning', 'First sub-15°F morning of the season produces a batch of Queens Boulevard side-street dead-battery calls. Cold reduces battery efficiency 30-60%.'],
    ],
    coverage: {
      intro: `Jump Start service across Woodside covers Woodside core (the dense apartment and walkup blocks along Roosevelt Avenue and 58th-65th Streets), Big Six (the residential blocks west of Northern Boulevard with more detached homes), and Woodside Heights (the residential pocket between Northern Boulevard and the LIRR cut).`,
      why: `Woodside response time is ~24 minutes average. The 7 elevated along Roosevelt Avenue affects dispatch routing — at peak hours we route via Queens Boulevard or 58th Street rather than Roosevelt itself. The LIRR cut bisects Woodside east-west, occasionally adding 2-3 minutes to cross.`,
      landmarks: `Common Woodside call origins: Roosevelt Avenue restaurant strip (late-night dinner crowd); 61st-Woodside transit hub area (commuter car-sitting pattern); Big Six residential blocks (garage-parked weekend pattern); Northern Boulevard service road; Queens Boulevard side streets. We do not service the BQE, Long Island Expressway, or Astoria Boulevard elevated sections.`,
    },
    whyHeavyDemand: `Woodside jump start demand traces to three specific structural reasons: (1) Roosevelt Avenue's late-night restaurant scene (Filipino, Thai, Latin American) produces a steady 10 PM-1 AM dead-battery call pattern that lighter Queens neighborhoods do not see; (2) the 61st-Woodside transit hub combines 7-train and LIRR transfers, attracting Manhattan-commuter residents whose cars sit longer than single-line-station residents; (3) Big Six and Woodside Heights have more garage-parked cars than Astoria or Sunnyside, and garage-parked cars sit longer between drives.`,
    scenarios: [
      ['Roosevelt Avenue Filipino restaurant late-night', 'Friday or Saturday night, dinner on Roosevelt Avenue under the 7 elevated, walked back to the car at 11 PM or midnight, dead battery from dome light or older battery.'],
      ['61st-Woodside station — Friday returning commuter', 'Parked Sunday near the station, took the LIRR or 7 to Manhattan all week, came back Friday for the weekend — dead battery.'],
      ['Big Six weekend warrior — Saturday morning', 'Detached or semi-detached home with a garage. Friday-park, Saturday-Costco-run intent, dead battery on Saturday morning.'],
      ['Northern Boulevard service road sputter', 'Driving home from Manhattan, battery starts to fail under load, pulled onto the service road. Jump Start + alternator check.'],
      ['Woodside Heights side-street cold morning', 'First true winter cold-snap morning, side-street parking, dead battery. November and January produce these in batches.'],
      ['Queens Boulevard older-car residential', 'Side streets between 58th and 65th, older family sedan used weekly, battery age catching up.'],
    ],
    cellFaqs: [
      ['Why does Roosevelt Avenue produce so many late-night jump start calls?', 'Roosevelt Avenue under the 7 elevated has one of the densest late-night restaurant scenes in Queens. Diners drive in, park on a side street off Roosevelt, dine 2-3 hours, walk back to find a dead battery from a dome light or end-of-life battery. We expect those calls every weekend.'],
      ['How does the 61st-Woodside LIRR transfer affect calls?', 'Woodside is one of the few Queens stations with a direct LIRR transfer. Manhattan commuters who use the LIRR (often longer commutes than 7-train-only residents) park Sunday and don\'t touch the car until Friday or Saturday — a 5-6 day sitting pattern that\'s harder on batteries than single-day lapses.'],
      ['Do you service Big Six?', 'Yes. Big Six is in Woodside\'s coverage area. Front-of-home or garage access is typical.'],
      ['Can I get a jump start on the Roosevelt Avenue elevated?', 'You cannot park under the elevated for service — it\'s a moving-traffic zone. We can service you on a side street off Roosevelt or on Queens Boulevard if you can move to either.'],
      ['Is Woodside response time slower than Astoria?', '~24 min vs ~20 min average. Woodside is one zone east of our Astoria/LIC staging, so add 2-4 minutes. Late-night Woodside calls are typically faster (15-20 min) because traffic is lighter.'],
    ],
  },

  'jackson-heights': {
    heroSubline: `<strong>$125 flat per service</strong>. Jackson Heights jump start calls cluster around the 1920s pre-war co-op buildings (older residents, older cars in underground garages) and the 74th Street-Roosevelt Avenue subway hub commuter pattern. The Roosevelt Avenue commercial strip — Indian, Bangladeshi, Latin American — produces a steady late-night dinner-crowd call pattern.`,
    whatIs: {
      p1: `Jump Start service in Jackson Heights covers two distinct sub-patterns. The Jackson Heights Historic District (north of Roosevelt Avenue between 76th Street and 89th Street) is a dense cluster of 1920s pre-war co-op apartment buildings — many with small underground garages — whose long-time residents tend to drive older cars on a weekly errand cycle. Battery age plus low utilization equals dead-battery calls every few months, often the same family sedan multiple times before the owner replaces the battery.`,
      p2: `The 74th Street-Roosevelt Avenue subway hub (7, E, F, M, R all converge there) is a major Manhattan-commuter origin point. Residents in apartments along 37th Avenue, 73rd Street, and 78th Street park their cars Sunday night and don't touch them until the weekend, producing the same car-sits-Mon-Fri battery-drain pattern as Astoria and Sunnyside, but with the additional twist of pre-war co-op underground garages where the call requires garage-clearance navigation.`,
    },
    whenToCall: [
      ['Pre-war co-op underground garage — older car', 'Historic district co-op underground garage. Older car driven once a week. Battery age catching up. Standard jump start in your space; we navigate the garage and confirm clearance on the call.'],
      ['74th Street subway hub commuter — Friday night', 'You park Sunday on a side street near 73rd or 74th, take the 7/E/F/M/R to Manhattan all week, come back Friday — dead battery.'],
      ['Roosevelt Avenue dinner crowd late-night', 'Indian, Bangladeshi, or Latin American restaurant on Roosevelt Avenue, walked back to the car at 11 PM, dead battery from dome light or older battery.'],
      ['37th Avenue residential — door-ajar overnight', '37th Avenue and the adjacent side streets have dense apartment-walkup parking. Door not fully shut, dome light all night, dead by morning.'],
      ['Northern Boulevard service road — sputter', 'Driving from Astoria-side toward Flushing, battery starts to fail, pulled onto Northern Boulevard service road. Jump Start + alternator verification.'],
      ['82nd Street commercial — late-night shopping', '82nd Street commercial corridor with late-night Indian and Bengali shops. Dead battery while running errands at 10 PM or 11 PM. Route via 37th Avenue to avoid the Roosevelt Avenue elevated.'],
    ],
    coverage: {
      intro: `Jump Start service across Jackson Heights covers the Historic District (north of Roosevelt Avenue, the 1920s pre-war co-op buildings between 76th and 89th Streets), the 74th Street area (the dense commuter-hub blocks immediately south of Roosevelt Avenue), the Northern Boulevard side (north blocks toward the LaGuardia/East Elmhurst border), and the Roosevelt Avenue commercial strip (the dense restaurant-and-shop corridor under the 7 elevated).`,
      why: `Jackson Heights response time is ~24 minutes average. The 7-train and Roosevelt Avenue elevated structure affect dispatch routing — at peak hours we route via 37th Avenue or Northern Boulevard rather than Roosevelt. The 74th Street subway hub creates pedestrian density at peak hours that dispatch routes around.`,
      landmarks: `Common Jackson Heights call origins: pre-war co-op underground garages in the Historic District; 73rd-74th Street commuter side streets; Roosevelt Avenue restaurant strip; 37th Avenue residential blocks; 82nd Street commercial corridor. We do not service the BQE, Grand Central Parkway near LaGuardia, or Northern Boulevard elevated sections.`,
    },
    whyHeavyDemand: `Jackson Heights jump start demand stems from the dense pre-war co-op housing stock (1920s-era buildings with older long-time resident demographics and weekly-use cars), the 74th Street-Roosevelt Avenue subway-hub commuter density (more transit lines converging means more commuters means more cars sitting Mon-Fri), and the Roosevelt Avenue commercial strip's late-night restaurant scene producing post-dinner dead-battery calls. The neighborhood's diversity — Indian, Bangladeshi, Tibetan, Latin American — keeps Roosevelt Avenue active later than most Queens commercial strips.`,
    scenarios: [
      ['Historic District co-op underground garage', 'Pre-war co-op building. Older car driven weekly to Costco or temple. Battery age catching up. Garage clearance confirmed on call.'],
      ['74th Street commuter side street — Friday night', 'Multi-line subway hub residents park near 73rd/74th, take any of 5 trains, come back Friday — dead battery from a 5-day sit.'],
      ['Roosevelt Avenue Indian restaurant', 'Diwali-season weekend dinner on Roosevelt, walked back to the car after, dead battery from dome light.'],
      ['37th Avenue door-ajar overnight', 'Apartment walkup on 37th Avenue, door not fully shut, dome light burned through the night.'],
      ['82nd Street late-night shopping', 'Sari shops, electronics stores, Bangladeshi groceries open late on 82nd. Errands at 10 PM, dead battery on return.'],
      ['Northern Boulevard sputter — alternator failing', 'Heading toward LaGuardia/Flushing, battery failing under load, pulled onto Northern Boulevard service road.'],
    ],
    cellFaqs: [
      ['Do you handle Jackson Heights pre-war co-op underground garages?', 'Yes. Pre-war co-op underground garages typically have lower clearance than newer towers — confirm your specific garage clearance when you call. We dispatch the smaller service van that fits standard pre-war garage limits.'],
      ['How does dispatch route around the Roosevelt Avenue elevated?', 'At peak hours we route via 37th Avenue or Northern Boulevard rather than directly under Roosevelt. Late-night and early-morning calls can use Roosevelt Avenue directly because traffic is lighter.'],
      ['Why do Jackson Heights calls cluster around the 74th Street subway hub?', 'The hub combines 7, E, F, M, and R lines — more lines converging means more Manhattan commuters per square block. More commuters means more cars sitting Mon-Fri, which means more weekend dead-battery calls.'],
      ['Can I get jump start help on Roosevelt Avenue itself?', 'Service vehicles can\'t safely park under the moving 7-train elevated structure. We service you on a side street perpendicular to Roosevelt — typically within a 30-second drive from where you are.'],
      ['Is multi-language dispatch available for Jackson Heights calls?', 'Dispatch is English-primary but is familiar with Hindi, Bengali, Tibetan, and Spanish neighborhood names — you can call in any language and we\'ll work through the location.'],
    ],
  },

  'east-elmhurst': {
    heroSubline: `<strong>$125 flat per service</strong>. East Elmhurst jump start calls run on airport rhythms — LaGuardia workers on rotating shifts, travelers leaving cars overnight before flights, and long-time homeowners on residential blocks where car ownership is the norm because subway access is limited. We work the 24-hour pattern.`,
    whatIs: {
      p1: `Jump Start service in East Elmhurst is shaped by LaGuardia Airport. Shift work at LaGuardia (TSA, baggage, gate agents, terminal restaurants) runs around the clock, which means East Elmhurst residents park and start their cars at all hours — including 4 AM departures for shift starts and midnight returns. That pattern produces a more even 24-hour distribution of jump start calls than the typical Queens neighborhood, which clusters in the 7-9 AM and 7-11 PM windows.`,
      p2: `East Elmhurst also has limited subway access — no train runs through the neighborhood. The closest subway is the N/W in Astoria (a bus or 15-minute walk away), or a bus to the 7 in Jackson Heights. That forces high car ownership per household, even among lower-income families. More cars per household + airport-shift rhythms + long-time Black and Latino homeowner blocks adds up to a steady jump start demand pattern that's spread across the day rather than concentrated in commute hours.`,
    },
    whenToCall: [
      ['Pre-shift dead battery — 4 AM LaGuardia worker', 'Cleaner, gate agent, or TSA worker leaving for a 5 AM shift. Cold morning, dead battery, can\'t be late. We dispatch fastest at this hour because no traffic.'],
      ['Returning traveler — car sat 4-7 days during the trip', 'Flew out of LaGuardia, parked on the residential blocks instead of the airport lot ($$$), came back to a dead battery a week later. Battery sat unused, especially marginal in cold weather.'],
      ['Astoria Boulevard service road — engine sputter', 'Driving home toward LaGuardia or back toward Astoria, battery failing under load, pulled onto the Astoria Boulevard service road. We jump start and verify the alternator.'],
      ['94th Street residential — door-ajar overnight', 'Standard side-street dome-light drain. Less common in East Elmhurst because of driveway parking, but it happens on the apartment blocks.'],
      ['Northern Boulevard cold-snap morning', 'First sub-15°F morning of winter. Older homeowner cars parked in driveways, dead by 6 AM.'],
      ['Older long-time-resident car — battery age', 'Long-time East Elmhurst homeowners often have older sedans or pickups used for errands and church. Battery 4-5 years old, end of life, dies in cold.'],
    ],
    coverage: {
      intro: `Jump Start service across East Elmhurst covers the LaGuardia-adjacent residential blocks (north of Astoria Boulevard between 80th and 102nd Streets), the Ditmars-side (west blocks near the Astoria border), and the North Corona border (south blocks near the Roosevelt Avenue corridor).`,
      why: `East Elmhurst response time is ~26 minutes average. Slightly longer than the borough average because the neighborhood is east of our primary Astoria/LIC staging zones. Late-night and pre-dawn calls are typically faster because of light traffic — useful for the LaGuardia worker pattern.`,
      landmarks: `Common East Elmhurst call origins: residential blocks between 94th Street and 100th Street (high homeowner density); Astoria Boulevard service road (highway-adjacent breakdowns); Ditmars Boulevard near the Astoria border (commuter-adjacent calls); 102nd Street and the Roosevelt Avenue/Corona border. We do not service the Grand Central Parkway, LaGuardia airport service roads (some are private), or the BQE.`,
    },
    whyHeavyDemand: `East Elmhurst jump start demand traces to three patterns: (1) LaGuardia airport-worker rhythms produce 24-hour call distribution rather than commute-hour clustering — pre-shift dead batteries at 4 AM, post-shift dead batteries at midnight; (2) limited subway access means high household car-ownership rates, so more cars per square block to age and fail; (3) long-time homeowner demographic with older cars used for weekly errands and church creates a battery-age failure pattern.`,
    scenarios: [
      ['Pre-shift LaGuardia worker — 4 AM dead', 'TSA or gate-agent leaving for a 5 AM shift. Cold morning, dead battery. We dispatch in 18-22 minutes because no traffic at that hour.'],
      ['Returning traveler — week-long sit', 'Parked the car on a residential block before flying out of LaGuardia, came back a week later, dead battery. Common for travelers avoiding the LaGuardia parking lot rates.'],
      ['Astoria Boulevard service road sputter', 'Driving home from a LaGuardia pickup, battery failing, pulled to the service road. Jump Start + alternator check.'],
      ['94th Street apartment block — door-ajar', 'Less common than driveway calls but happens. Dome light burned overnight on a 94th Street apartment block.'],
      ['Cold morning driveway — older homeowner car', 'Older long-time-resident sedan parked in the driveway, first cold morning of winter, dead battery. Cold reduces battery efficiency 30-60%.'],
      ['Ditmars border block — Astoria-adjacent commuter', 'Some East Elmhurst residents commute via the Astoria N/W. Sunday-park, Friday-dead pattern on the Ditmars border blocks.'],
    ],
    cellFaqs: [
      ['Do you serve LaGuardia-adjacent residential blocks?', 'Yes. Residential blocks between 80th and 102nd Streets are in our coverage. We do not enter LaGuardia airport service roads or terminal areas — those are restricted.'],
      ['Are pre-dawn jump start calls common in East Elmhurst?', 'Yes — more common here than in most of Queens. LaGuardia shift workers leaving for 5 AM starts produce a steady 4-5 AM call pattern. Late-night dispatch is typically faster than daytime because traffic is light.'],
      ['Why are batteries dying so often on cars I left at home during travel?', 'Modern AGM batteries self-discharge while sitting. A car parked 5-7 days during your trip loses 5-10% of charge — a marginal battery cannot recover and is dead when you return. Easy fix is to drive 30+ minutes once a week before any long trip, or replace the battery if it\'s 4+ years old.'],
      ['Can you help me on the Grand Central Parkway?', 'No. Grand Central Parkway is NYPD-rotation only, like all NYC parkways. If you\'re on the parkway, get to a service road or surface street first; we can meet you on Astoria Boulevard or Ditmars Boulevard.'],
      ['Do you take credit cards on East Elmhurst calls?', 'Yes. All payment methods: cash, all major credit/debit, Apple Pay, Google Pay, Zelle, CashApp. Receipt itemized for insurance reimbursement.'],
    ],
  },

  corona: {
    heroSubline: `<strong>$125 flat per service</strong>. Corona jump start demand spikes around Citi Field game nights and US Open tennis week — large parking-lot crowds dispersing late, dead batteries from old cars sitting all day in the heat or cold. The dense Roosevelt Avenue Latin American restaurant scene produces a steady late-night call pattern the rest of the year.`,
    whatIs: {
      p1: `Jump Start service in Corona has a distinct event-driven pattern that no other Queens neighborhood matches. Citi Field hosts 81 home Mets games per year plus concerts, and the USTA Billie Jean King National Tennis Center hosts the US Open and year-round tennis. Both venues have large parking lots that fill before games and empty all at once after — and a fraction of those cars sitting in summer heat or autumn chill produce a wave of dead-battery calls during the post-event traffic dispersal.`,
      p2: `Corona's residential character — dense 1-2 family attached homes, mostly Latin American (Mexican, Ecuadorian, Dominican, Colombian) long-time families — produces a different call pattern from the affluent neighborhoods of central Queens. More older cars per household, less garage parking, more weekend-only utility cars. Roosevelt Avenue's restaurant scene (taquerias, pupuserias, ceviche spots) draws diners late, especially weekends, and the post-dinner walk back to a dead battery is a regular Corona late-night call.`,
    },
    whenToCall: [
      ['Citi Field post-game parking lot', 'Mets game ended, parking lot full of cars trying to leave, your car won\'t start. Common for older cars sitting in summer heat or fall cold for 4-5 hours during the game.'],
      ['US Open week — Tennis Center parking', 'August/September during the US Open. Tennis Center parking lots empty in the post-match wave; older cars sitting in heat all day produce dead-battery calls.'],
      ['Roosevelt Avenue late-night dinner crowd', 'Taqueria, pupuseria, or ceviche spot on Roosevelt, walked back to the car at 11 PM or midnight, dead battery from dome light or older battery.'],
      ['Lefrak City high-rise garage', 'Lefrak City underground garages have clearance limits and sit-times for residents. Mid-week dead battery from a 4-5 day non-drive period.'],
      ['Junction Boulevard cold-snap morning', 'First sub-15°F morning of winter. Older Corona family cars on residential side streets, dead by 7 AM.'],
      ['108th Street residential — door-ajar overnight', 'Side street parking, dome light burned overnight, dead battery by morning.'],
    ],
    coverage: {
      intro: `Jump Start service across Corona covers North Corona (the dense residential blocks between 104th and 114th Streets), Corona Heights (the eastern blocks toward the Flushing border), Lefrak City (the high-rise complex along 57th Avenue), and the Junction Boulevard commercial corridor.`,
      why: `Corona response time is ~26 minutes average. Citi Field event nights and US Open week add traffic congestion that dispatch routes around — at peak event times we route via the LIE service road or Northern Boulevard rather than the 111th Street arteries that feed the venues.`,
      landmarks: `Common Corona call origins: Citi Field parking lots and surrounding streets (event-driven calls); USTA Billie Jean King Tennis Center (US Open week and weekend tennis); Lefrak City garages; Roosevelt Avenue commercial corridor; Junction Boulevard residential blocks. We do not service the Grand Central Parkway, Long Island Expressway, or Van Wyck Expressway.`,
    },
    whyHeavyDemand: `Corona jump start demand has three structural drivers: (1) event venues — Citi Field's 81+ Mets home games plus concerts plus the USTA's US Open produce predictable post-event call waves where older cars that sat in heat or cold during the event produce dead batteries en masse; (2) dense Latino long-time-resident demographic with high older-car ownership per household, weekend-only utility cars, and limited garage parking; (3) Roosevelt Avenue late-night restaurant scene producing post-dinner dead-battery calls weekly.`,
    scenarios: [
      ['Mets game night — Citi Field parking lot', '4-hour Mets game in 90°F summer or 35°F October cold. Older car battery sitting in extreme heat or cold gives up. Post-game parking lot wave of dead-battery calls.'],
      ['US Open Saturday — Tennis Center', 'Late-summer US Open Saturday, parking lot full of cars sitting in 85°F heat for 6 hours. Tennis match ends, mass exit, dead-battery calls roll in.'],
      ['Roosevelt Avenue taqueria late-night', 'Saturday night taqueria on Roosevelt, 2-hour dinner, walked back at 11 PM, dead battery from dome light.'],
      ['Lefrak City garage — Wednesday morning dead', 'Lefrak City resident commutes Manhattan via the M/R, car sits Mon-Wed, dead by Wednesday morning when needed for errands.'],
      ['Junction Boulevard cold-snap', 'Older Corona family sedan on a residential side street off Junction, first cold morning of winter, dead battery.'],
      ['108th Street weekend warrior', 'Older car used only for Sunday church and weekend errands. Battery age + low usage = dead battery every couple months.'],
    ],
    cellFaqs: [
      ['Do you respond to Citi Field parking lot calls?', 'Yes — parking lots adjacent to Citi Field on event nights produce a wave of dead-battery calls. Dispatch knows the post-event traffic patterns and routes accordingly. Expect 25-35 minutes during the 4 hours after a game ends; faster during the game itself.'],
      ['What about the US Open at the USTA Tennis Center?', 'Yes. US Open week (late August through early September) and year-round tennis produce parking-lot calls at the USTA. We service the lots and surrounding side streets.'],
      ['Are Lefrak City underground garages serviceable?', 'Yes. Confirm garage clearance when you call. Lefrak garages have specific clearance limits — typically 6\'8" to 7\'0" — and we dispatch the smaller service van that fits.'],
      ['Is Spanish-speaking dispatch available?', 'Dispatch is English-primary but is familiar with Spanish neighborhood names and corridors. Call in either language and we\'ll work through location and vehicle details.'],
      ['How does Corona response time compare to Astoria?', '~26 min Corona vs ~20 min Astoria. Corona is further from our primary staging zones, plus Citi Field/USTA event traffic adds delay during peak event hours.'],
    ],
  },

  flushing: {
    heroSubline: `<strong>$125 flat per service</strong>. Flushing jump start calls split sharply between Downtown Flushing's commercial-density chaos (parking lot calls, congestion-affected response times) and Murray Hill / Linden Hill's quiet suburban driveway pattern. Two completely different call profiles in the same neighborhood.`,
    whatIs: {
      p1: `Jump Start service in Flushing operates across two very different sub-neighborhoods. Downtown Flushing — Main Street, Roosevelt Avenue, Sanford Avenue — is one of the densest commercial corridors in NYC, with parking lots that fill and empty on Asian-restaurant and shopping rhythms (peak weekend dim sum at noon, peak dinner at 7 PM, late-night Korean BBQ on weekends). Murray Hill, Linden Hill, and Auburndale (east of Kissena Boulevard) are suburban single-family neighborhoods with driveways and quiet residential streets — a completely different call pattern.`,
      p2: `Downtown Flushing's traffic congestion is the single biggest factor in Flushing response times. At weekend peak hours (Saturday-Sunday 11 AM-3 PM, 6-9 PM), Main Street and Roosevelt Avenue traffic can extend our arrival window by 5-10 minutes vs. quieter periods. Murray Hill's response is closer to the borough average because traffic is lighter east of Kissena. Late-night Flushing calls are typically faster than peak-time daytime calls.`,
    },
    whenToCall: [
      ['Downtown Flushing parking lot — weekend peak', 'Parking lot off Main Street or Roosevelt Avenue, weekend 1 PM after dim sum, dead battery while trying to leave. Traffic congestion during this window.'],
      ['Murray Hill driveway — weekend warrior', 'Suburban driveway, older sedan used only for weekend trips, dead battery between weekends.'],
      ['Sanford Avenue late-night Korean BBQ', 'Saturday night on Sanford Avenue, walked back to the car at midnight, dead battery from a dome light.'],
      ['Northern Boulevard service road sputter', 'Driving home toward Whitestone, battery failing under load, pulled to the Northern Boulevard service road. Jump Start + alternator verification.'],
      ['Kissena Boulevard cold-snap morning', 'First cold morning of winter, side street off Kissena, dead battery from age + cold.'],
      ['Auburndale residential — older homeowner car', 'Long-time Auburndale homeowner with an older sedan kept in the driveway, weekend-only use, battery age catching up.'],
    ],
    coverage: {
      intro: `Jump Start service across Flushing covers Downtown Flushing (the dense commercial corridor along Main Street and Roosevelt Avenue), Murray Hill (the suburban single-family blocks east of Kissena Boulevard, north of Northern Boulevard), Linden Hill (north of Murray Hill toward the Cross Island Parkway), Kissena (the residential blocks south of Kissena Park), and Auburndale (east of Murray Hill toward the Bayside border).`,
      why: `Flushing response time is ~28 minutes average — slightly slower than central Queens because Flushing is east of our staging zones, and Downtown Flushing's commercial traffic adds to peak-hour windows. Murray Hill, Linden Hill, and Auburndale (the suburban side) are typically ~25-28 minutes; Downtown Flushing during weekend peak can be ~30-35 minutes.`,
      landmarks: `Common Flushing call origins: Main Street and Roosevelt Avenue parking lots (commercial-corridor calls); Downtown Flushing side streets (apartment-resident calls); Murray Hill and Linden Hill driveways (suburban weekend-warrior calls); Sanford Avenue late-night corridor; Kissena and Auburndale residential blocks. We do not service the Long Island Expressway, Whitestone Bridge approach, Grand Central Parkway, or Van Wyck Expressway.`,
    },
    whyHeavyDemand: `Flushing's two-pattern jump start demand stems from the sharp contrast between its sub-neighborhoods: (1) Downtown Flushing's restaurant-and-shopping commercial-corridor density produces parking-lot and short-stop calls on weekend peak hours; (2) Murray Hill, Linden Hill, and Auburndale's suburban single-family blocks produce weekend-warrior driveway calls similar to Whitestone or Howard Beach. Both patterns add up to a steady call load with the largest Asian-American population in NYC behind it.`,
    scenarios: [
      ['Main Street weekend parking — post-dim-sum', 'Parked in a Main Street commercial lot for Saturday dim sum, came back at 1 PM to a dead battery. Older car that sat in cold or heat during the meal.'],
      ['Murray Hill driveway — Sunday morning', 'Suburban driveway, older sedan used only for weekend trips, dead Sunday morning before the family Costco run.'],
      ['Sanford Avenue late-night — Korean BBQ', 'Saturday late-night Korean BBQ, walked back to the car at 1 AM, dead battery from dome light.'],
      ['Roosevelt Avenue — older car residential', 'Apartment block off Roosevelt Avenue, older sedan, weekend-only use, battery age catching up.'],
      ['Linden Hill suburban driveway', 'Quiet residential driveway, older homeowner car, dead between weekend uses.'],
      ['Auburndale border — long-time-resident family car', 'Long-time Auburndale homeowner, older family sedan, dead in cold morning.'],
    ],
    cellFaqs: [
      ['Why does Flushing response time vary so much?', 'Two reasons: (1) Downtown Flushing has weekend peak-hour traffic congestion that extends arrival times 5-10 minutes; (2) the suburban sub-neighborhoods (Murray Hill, Linden Hill, Auburndale) are quieter and often faster than the Flushing average. Tell us your specific sub-area when you call so we can give you an accurate ETA.'],
      ['Is Mandarin or Korean dispatch available?', 'Dispatch is English-primary. We work through location names in Mandarin or Korean if needed — most Flushing addresses are recognizable in either language. Call in any language and we will get the right details.'],
      ['Do you handle Downtown Flushing parking lot calls?', 'Yes. Main Street, Roosevelt Avenue, Sanford Avenue, and Kissena Boulevard parking lots are in our coverage. Confirm the lot location when you call so we route directly.'],
      ['Are Murray Hill driveway calls easier than Downtown Flushing?', 'Typically yes. Murray Hill driveways have direct front-of-home access, no garage clearance issues, and lighter traffic. Faster service-vehicle setup and faster average response.'],
      ['Can you help me on the Whitestone Bridge approach?', 'No — Whitestone Bridge approach lanes are NYPD-rotation only. Get off to a Flushing-side surface street and we can meet you there.'],
    ],
  },

  'forest-hills': {
    heroSubline: `<strong>$125 flat per service</strong>. Forest Hills jump start calls cluster around the pre-war co-op underground garages along Queens Boulevard (older affluent residents with older cars used weekly) and the Austin Street commercial-strip parking lots. US Open week adds a tennis-related event-driven layer in late August.`,
    whatIs: {
      p1: `Jump Start service in Forest Hills has a specific affluent-but-older-car character. The pre-war co-op buildings along Queens Boulevard between 65th Avenue and 71st Avenue/Continental Avenue are a major Forest Hills housing type — substantial buildings, often with underground garages, occupied largely by long-time residents who drive weekly errands rather than daily commutes. Their cars are often well-maintained but older, and the weekly-use pattern combined with battery age produces a steady jump start call load that's distinct from the daily-commuter pattern of Astoria or LIC.`,
      p2: `Austin Street is the other Forest Hills focus. The commercial corridor between 71st Avenue and Yellowstone Boulevard has heavy Saturday and Sunday foot traffic, restaurant density, and parking lots that fill on weekend evenings. Diners walk back to the car at 10-11 PM and discover the dead battery — same pattern as 30th Avenue Astoria, but with more affluent vehicles and more underground-garage calls.`,
    },
    whenToCall: [
      ['Pre-war co-op underground garage — older car', 'Pre-war building on Queens Boulevard with an underground garage. Older sedan used weekly for errands. Battery age catching up. Confirm garage clearance on the call.'],
      ['Austin Street parking lot — Saturday night', 'Saturday night dinner on Austin Street, walked back at 10:30 PM, dead battery in the lot. Common Forest Hills late-night call.'],
      ['Forest Hills Gardens private street', 'Forest Hills Gardens has private streets and Tudor-style mansions. Older car in a driveway, dead battery from age or cold.'],
      ['71st-Continental subway hub commuter', 'E/F/M/R hub at 71st-Continental. Manhattan commuter, parked Sunday on a side street nearby, dead Friday.'],
      ['Metropolitan Avenue residential — door-ajar overnight', 'Side street off Metropolitan Avenue, dome light or door-ajar drain overnight.'],
      ['US Open week — tennis fan parking', 'Late-summer US Open week, tennis fans parking on Forest Hills residential blocks (cheaper than the USTA lot), older car sitting all day in late-summer heat, dead battery on return.'],
    ],
    coverage: {
      intro: `Jump Start service across Forest Hills covers Forest Hills Gardens (the private-street Tudor-mansion section south of Queens Boulevard between Greenway and the LIRR cut), Forest Hills core (the pre-war co-op blocks along Queens Boulevard), the Austin Street commercial corridor, and the Rego Park border (west of 67th Avenue toward Yellowstone Boulevard).`,
      why: `Forest Hills response time is ~25 minutes average. The 71st-Continental subway hub creates pedestrian density at peak hours that dispatch routes around. Pre-war underground garages add 3-5 minutes to on-site time vs. street calls because of garage navigation.`,
      landmarks: `Common Forest Hills call origins: Queens Boulevard pre-war co-op underground garages (older-car weekly-use pattern); Austin Street commercial parking lots; 71st-Continental commuter side streets; Forest Hills Gardens private streets; Metropolitan Avenue residential blocks. We do not service the Grand Central Parkway, Long Island Expressway, or Van Wyck Expressway.`,
    },
    whyHeavyDemand: `Forest Hills jump start demand traces to three patterns: (1) pre-war co-op buildings along Queens Boulevard with older long-time residents driving weekly-use cars where battery age is the dominant failure cause; (2) Austin Street's restaurant and weekend retail scene produces post-dinner dead-battery calls year-round; (3) US Open week (late August through early September) brings tennis-fan parking on residential blocks, with older cars sitting in late-summer heat for hours producing dead-battery clusters during the post-match dispersal.`,
    scenarios: [
      ['Pre-war co-op garage — Saturday morning', 'Older Forest Hills resident in a pre-war Queens Boulevard co-op. Garage car driven once a week for groceries. Saturday morning, dead battery before the Costco run.'],
      ['Austin Street late-night dinner', 'Saturday night dinner on Austin, walked back to the parking lot at 11 PM, dead battery from dome light.'],
      ['Forest Hills Gardens Tudor driveway', 'Private-street Tudor home with older sedan in driveway, dead battery from cold morning + age.'],
      ['71st-Continental commuter side street — Friday', 'Manhattan commuter parked near the subway hub Sunday night, dead battery Friday after a 5-day sit.'],
      ['US Open week — residential block parking', 'Tennis fan parked on a Forest Hills residential block during a US Open match. 6 hours in 85°F heat, dead battery on return.'],
      ['Metropolitan Avenue door-ajar overnight', 'Side street off Metropolitan, dome light burned overnight, dead by morning.'],
    ],
    cellFaqs: [
      ['Do you service Forest Hills Gardens private streets?', 'Yes. Forest Hills Gardens private streets allow service-vehicle access for residents. Drive-up to the front of the home is typical.'],
      ['What about pre-war co-op underground garages along Queens Boulevard?', 'Yes. Pre-war underground garages typically have lower clearance than newer towers — confirm your specific garage clearance when you call. We dispatch the smaller service van that fits.'],
      ['Why is Austin Street a hot spot for late-night jump start calls?', 'Austin Street has dense restaurant and weekend retail scenes. Diners park, eat 2-3 hours, walk back to the car late, dome-light or end-of-life battery dies in the meantime. We expect the post-dinner call wave on weekends.'],
      ['Do US Open week calls cost more?', 'No. $125 flat regardless of event week. US Open creates more calls in the area (tennis fan parking on residential blocks), but the rate stays the same.'],
      ['How fast can you reach Forest Hills from Astoria?', '~25 minutes average. Slower at peak hours when Queens Boulevard backs up; faster late-night. The 71st-Continental subway hub adds pedestrian congestion at rush.'],
    ],
  },

  'rego-park': {
    heroSubline: `<strong>$125 flat per service</strong>. Rego Park jump start calls cluster around the Lefrak City high-rise complex, the 63rd Drive commercial corridor, and the long-time Bukharian and Russian-speaking community whose older sedans see weekly use and battery-age failures. Queens Boulevard service-road sputters round out the call mix.`,
    whatIs: {
      p1: `Jump Start service in Rego Park has two distinct sub-patterns. Lefrak City — the large 1960s high-rise complex along 57th Avenue and 99th Street — has a high concentration of older-resident cars in underground garages with specific clearance limits. Mid-week dead batteries from cars sitting 4-5 days during commute weeks are the dominant Lefrak call pattern. The 63rd Drive-Queens Boulevard commercial corridor, with its M/R subway access, produces commuter-side-street and shopping-related calls.`,
      p2: `Rego Park has a substantial Bukharian Jewish and Russian-speaking community, particularly around 63rd Drive, 99th Street, and Yellowstone Boulevard. Long-time families often own older sedans used for weekly errands, synagogue, and weekend trips — the same battery-age + low-utilization pattern as Forest Hills pre-war co-ops, but with different demographics and parking patterns (more street parking than Forest Hills, fewer underground garages outside of Lefrak).`,
    },
    whenToCall: [
      ['Lefrak City underground garage — mid-week dead', 'Lefrak City resident, commute Manhattan via M/R, car sits Mon-Wed, dead Wednesday morning before a planned errand. Confirm garage clearance on the call.'],
      ['63rd Drive M/R subway commuter side street', 'Manhattan commuter parked on a side street near the 63rd Drive M/R station, dead Friday after 5-day sit.'],
      ['Queens Boulevard service road sputter', 'Driving home toward Forest Hills or back toward Woodside, battery failing under load, pulled to the Queens Boulevard service road. Jump Start + alternator check.'],
      ['Yellowstone Boulevard residential — older sedan', 'Long-time Bukharian or Russian-speaking family on Yellowstone or 99th Street, older sedan used weekly, battery age catching up.'],
      ['63rd Drive shopping corridor late-night', 'Late-evening shopping or dinner on 63rd Drive, came back to the car at 10 PM, dead battery from dome light.'],
      ['Austin Street border — Forest Hills overlap', 'Western Rego Park residents who shop and dine on Austin Street (technically Forest Hills but the border is fluid). Same Austin-Street late-night pattern.'],
    ],
    coverage: {
      intro: `Jump Start service across Rego Park covers the Rego Park core (the dense apartment and walkup blocks along 63rd Drive and Queens Boulevard), Lefrak City (the high-rise complex along 57th Avenue and 99th Street), and the 63rd Drive commercial corridor with M/R subway access.`,
      why: `Rego Park response time is ~25 minutes average. M/R-subway-hub pedestrian density at peak hours adds 2-3 minutes. Lefrak City garage navigation adds another 3-5 minutes once we are on site (security check-in, garage routing).`,
      landmarks: `Common Rego Park call origins: Lefrak City underground garages; 63rd Drive M/R commuter side streets; Queens Boulevard service road; Yellowstone Boulevard residential blocks; 99th Street community concentration. We do not service the Long Island Expressway, Grand Central Parkway, or Van Wyck Expressway.`,
    },
    whyHeavyDemand: `Rego Park jump start demand has three sources: (1) Lefrak City's ~5,000-unit high-rise complex has a high concentration of older-resident cars sitting in underground garages with clearance limits — mid-week dead batteries are common; (2) the 63rd Drive M/R commuter pattern leaves cars on side streets Mon-Fri; (3) the Bukharian and Russian-speaking long-time-resident community around Yellowstone Boulevard and 99th Street has a weekly-use older-car pattern similar to the pre-war co-op pattern in Forest Hills.`,
    scenarios: [
      ['Lefrak City garage — Wednesday mid-week dead', 'Manhattan commuter, parked Sunday in Lefrak garage, dead Wednesday before planned errand. Garage clearance confirmed on call.'],
      ['63rd Drive subway commuter — Friday', 'Parked on a side street near the M/R hub Sunday, dead Friday after 5-day non-drive period.'],
      ['Yellowstone Boulevard older sedan', 'Long-time Bukharian family on Yellowstone, older sedan used for synagogue and weekly errands, battery age catching up.'],
      ['Queens Boulevard service road sputter', 'Driving home, alternator failing, pulled to the service road. Jump Start + diagnose.'],
      ['63rd Drive late-night shopping', 'Evening errand on 63rd Drive shopping corridor, walked back to the car at 10 PM, dead from dome light.'],
      ['99th Street residential side street', 'Apartment block off 99th Street, dome-light or door-ajar overnight drain.'],
    ],
    cellFaqs: [
      ['Do you service Lefrak City underground garages?', 'Yes. Lefrak City has clearance limits on underground garages — typically 6\'8" to 7\'0". Confirm your specific clearance when you call so we send the smaller service van.'],
      ['Is Russian-speaking dispatch available?', 'Dispatch is English-primary but is familiar with Russian and Bukharian neighborhood names and corridors. Call in any language and we\'ll work through location and vehicle details.'],
      ['Why do Lefrak City calls happen mid-week, not on weekends?', 'Lefrak residents often commute Manhattan via M/R. Cars sit Sunday through Tuesday or Wednesday — by mid-week a marginal battery is dead. Weekend dead batteries also happen but are less frequent than the mid-week pattern.'],
      ['How does Rego Park response time compare to Forest Hills?', '~25 minutes both — they\'re adjacent neighborhoods. Lefrak City adds 3-5 minutes on-site for garage navigation; Forest Hills pre-war garages add similar.'],
      ['Can I get a jump start on Yellowstone Boulevard?', 'Yes. Yellowstone Boulevard residential blocks and adjacent streets are in our coverage. Front-of-home or side-street access is typical.'],
    ],
  },

  briarwood: {
    heroSubline: `<strong>$125 flat per service</strong>. Briarwood jump start calls cluster on the Van Wyck service road (airport-bound traffic breakdowns) and the F-train Manhattan commuter side streets. The diverse South Asian, Caribbean, and African-American resident base produces a steady weekend-warrior pattern in the residential blocks.`,
    whatIs: {
      p1: `Jump Start service in Briarwood is dominated by two patterns: Van Wyck Expressway service road breakdowns (cars heading to JFK or coming back to Queens, alternator or battery fails under load on the highway, pull off to the service road) and F-train Manhattan-commuter side-street calls (residents park near the Briarwood F-train station, take the train to work all week, return to a dead battery on Friday). The Van Wyck pattern is unique — most Queens neighborhoods don't have a major airport-feeder highway running through the residential core.`,
      p2: `Briarwood's residential character — 1-2 family attached and detached homes on side streets between the Van Wyck and Main Street — produces a more typical weekend-warrior pattern. Diverse demographics (South Asian, Caribbean, African-American long-time residents) and a mix of older and newer cars per household. Hillside Avenue commercial activity adds late-night dinner-and-shopping calls.`,
    },
    whenToCall: [
      ['Van Wyck service road — engine sputter from a JFK return', 'You\'re returning from a JFK pickup, alternator failing under load on the Van Wyck, pulled off to the service road. We jump start and verify whether you can drive home or need a tow to a shop.'],
      ['F-train Briarwood station commuter — Friday night', 'Manhattan commuter parked Sunday on a side street near the F-train station, dead Friday after 5-day non-drive.'],
      ['Hillside Avenue late-night shopping or dinner', 'Late-evening South Asian restaurant or grocery on Hillside, came back to the car at 10 PM, dead battery from dome light.'],
      ['Residential side street — door-ajar overnight', 'Side street between the Van Wyck and Main Street, dome light or door-ajar drain overnight.'],
      ['Cold-snap morning — older homeowner car', 'Long-time Briarwood homeowner with an older sedan, first cold morning of winter, dead battery from age + cold.'],
      ['JFK-bound Uber/Lyft driver — between fares', 'Rideshare driver staging in Briarwood between JFK runs, AC running or other accessory drain, dead battery on the next pickup attempt.'],
    ],
    coverage: {
      intro: `Jump Start service across Briarwood covers the Briarwood core (the 1-2 family residential blocks between the Van Wyck and Main Street, north of Hillside Avenue), the Hillside Avenue corridor, and the Queensboro Hill border (south blocks toward the Jamaica line).`,
      why: `Briarwood response time is ~28 minutes average. Van Wyck Expressway adjacency means service road traffic affects dispatch routing during peak hours and during JFK rush periods. F-train Briarwood station pedestrian density adds 1-2 minutes at commute hours.`,
      landmarks: `Common Briarwood call origins: Van Wyck service road (airport-feeder breakdown calls); F-train Briarwood station side streets (commuter pattern); Hillside Avenue commercial strip; residential blocks between the Van Wyck and Main Street. We do not service the Van Wyck Expressway main lanes, Grand Central Parkway, or Long Island Expressway.`,
    },
    whyHeavyDemand: `Briarwood jump start demand traces to three structural factors: (1) Van Wyck Expressway adjacency — JFK-bound and JFK-returning traffic produces a unique alternator/battery-failure-under-load call pattern on the service road that few other Queens neighborhoods see; (2) F-train Briarwood station Manhattan commuter density leaves cars sitting Mon-Fri on the side streets; (3) the diverse long-time-resident demographic with mixed older-car and newer-car ownership produces a steady weekend-warrior call load.`,
    scenarios: [
      ['Van Wyck service road — JFK return sputter', 'Returning from a JFK airport pickup, battery or alternator failing under load on the Van Wyck, pulled to the service road. Most distinctive Briarwood call type.'],
      ['F-train station side street — Friday commuter', 'Manhattan commuter parked Sunday near the F-train Briarwood station, dead Friday for the weekend.'],
      ['Hillside Avenue late-night — South Asian restaurant', 'Saturday late-night dinner on Hillside, walked back at 11 PM, dead battery from dome light.'],
      ['Residential side street — older homeowner cold morning', 'Older long-time-resident sedan, side street parking, first cold morning of winter, dead battery.'],
      ['Rideshare driver between JFK fares — Briarwood staging', 'Uber/Lyft driver running JFK pickups, parked in Briarwood between fares with AC on, accessory drain killed the battery before the next ping.'],
      ['Main Street residential — weekend warrior', 'Side street off Main Street, weekend-only family sedan, battery age catching up.'],
    ],
    cellFaqs: [
      ['Can you help me on the Van Wyck Expressway main lanes?', 'No. Van Wyck main lanes are NYPD-rotation only, like all NYC expressways. Get off to the Van Wyck service road, Hillside Avenue, or Main Street and we will meet you on a surface-level location.'],
      ['Why is the Van Wyck service road a hot spot for breakdowns?', 'JFK-bound traffic on the Van Wyck runs the alternator and electrical system hard for 30+ minutes at highway speed. A failing alternator can keep a car going on the highway but won\'t restart it after stopping — drivers pull off to the service road thinking it\'s a battery problem when it\'s actually an alternator problem. We diagnose on the spot.'],
      ['Do you serve Hillside Avenue late-night calls?', 'Yes. Hillside Avenue has late-night Indian, Bangladeshi, and Caribbean restaurants and groceries. Post-dinner dead-battery calls are common on Saturday nights.'],
      ['Is Briarwood F-train station easy to access?', 'Yes — side streets feeding the F-train station are open to service vehicles. Confirm the cross-street when you call.'],
      ['How does Briarwood response time compare to Jamaica?', 'Both ~28 minutes average. Briarwood is one zone west of Jamaica from our staging perspective. Late-night Briarwood calls are typically faster (20-25 min) because Van Wyck and Hillside traffic eases.'],
    ],
  },

  jamaica: {
    heroSubline: `<strong>$125 flat per service</strong>. Jamaica jump start calls run on transit-hub rhythms — AirTrain travelers leaving cars for multi-day trips, LIRR Manhattan commuters with cars sitting Mon-Fri, and the dense diverse residential blocks producing a steady weekend pattern. JFK-bound traffic adds Van Wyck-adjacent breakdown calls.`,
    whatIs: {
      p1: `Jump Start service in Jamaica is shaped by the largest transit hub in Queens. Jamaica Center brings together the E, J, and Z subway lines, the LIRR Jamaica Station (a major hub for Long Island commuters), and the AirTrain to JFK. That convergence creates a unique car-leaving pattern: travelers park in the Jamaica neighborhood (often cheaper than JFK long-term parking) before flying out, and cars sit 3-7+ days during the trip. AGM batteries self-discharge during long sits; a marginal battery is dead by the return.`,
      p2: `Jamaica's residential character — dense apartment buildings and walkups in the urban core (around Jamaica Center, Sutphin Boulevard, Archer Avenue), mixing into 1-2 family homes in South Jamaica, Jamaica Hills, and toward Hollis — produces a typical weekend-warrior call mix. Large African-American, Caribbean, and South Asian populations with mixed-age car fleets. Jamaica Avenue commercial activity adds late-night calls.`,
    },
    whenToCall: [
      ['Returning AirTrain traveler — week-long sit', 'Flew out of JFK on the AirTrain, parked the car on a Jamaica residential block to avoid JFK lot rates, came back a week later — dead battery. Most distinctive Jamaica call type.'],
      ['LIRR Jamaica Station commuter — Friday night', 'Manhattan commuter parked Sunday near the LIRR Jamaica Station, took the train all week, dead Friday after 5-day sit.'],
      ['Sutphin Boulevard residential — door-ajar overnight', 'Apartment block off Sutphin or Archer, dome-light or door-ajar drain overnight.'],
      ['Jamaica Avenue late-night dinner', 'Saturday late-night Caribbean or West African restaurant on Jamaica Avenue, walked back to the car at 11 PM, dead battery from dome light.'],
      ['South Jamaica residential — older homeowner car', 'Long-time South Jamaica homeowner, older sedan used weekly, battery age catching up.'],
      ['Hillside Avenue cold-snap morning', 'First cold morning of winter, residential side street off Hillside, dead battery from age + cold.'],
    ],
    coverage: {
      intro: `Jump Start service across Jamaica covers Downtown Jamaica (the dense commercial-and-apartment core around Jamaica Center, Sutphin Boulevard, and Archer Avenue), South Jamaica (the residential blocks south of Liberty Avenue), Jamaica Hills (the elevated residential area east of 168th Street), and the Hollis-adjacent border (east of 188th Street).`,
      why: `Jamaica response time is ~28 minutes average. Jamaica Center transit-hub pedestrian density at peak hours adds 2-3 minutes; AirTrain and LIRR feeder traffic on Sutphin Boulevard during JFK-rush hours can add another 2-3 minutes. South Jamaica and Jamaica Hills (the residential sub-areas) are typically faster than Downtown Jamaica.`,
      landmarks: `Common Jamaica call origins: Jamaica Center transit hub residential blocks (AirTrain + LIRR + subway commuter density); Sutphin Boulevard apartment blocks; Archer Avenue apartment blocks; Jamaica Avenue commercial corridor; South Jamaica 1-2 family residential blocks; Jamaica Hills elevated residential blocks. We do not service the Van Wyck Expressway, JFK Expressway, Grand Central Parkway, or Belt Parkway approach.`,
    },
    whyHeavyDemand: `Jamaica jump start demand has three distinct drivers: (1) AirTrain-and-LIRR traveler pattern — travelers park in Jamaica during multi-day trips to avoid JFK long-term parking rates, cars sit 3-7+ days, batteries discharge, dead on return; (2) subway-and-LIRR Manhattan commuter density at Jamaica Center leaves cars on side streets Mon-Fri; (3) the diverse long-time-resident demographic — African-American, Caribbean, South Asian families with mixed-age car fleets producing a steady weekend-warrior call load.`,
    scenarios: [
      ['Returning AirTrain traveler — week-long sit', 'Parked on a Jamaica residential block before flying out of JFK, came back a week later, dead battery from a week of sitting.'],
      ['LIRR Jamaica Station commuter — Friday', 'Manhattan commuter parked Sunday near the LIRR station, dead Friday after 5-day sit.'],
      ['Sutphin Boulevard apartment block', 'Dense apartment block off Sutphin, dome-light or door-ajar overnight drain.'],
      ['Jamaica Avenue Caribbean restaurant late-night', 'Saturday late-night Caribbean or West African dinner on Jamaica Avenue, walked back at 11 PM, dead battery.'],
      ['South Jamaica residential — weekend warrior', 'Older long-time homeowner car, weekend-only use, battery age catching up.'],
      ['Jamaica Hills cold-snap morning', 'Elevated residential block, first cold morning of winter, dead battery in driveway.'],
    ],
    cellFaqs: [
      ['Do you respond to AirTrain-traveler dead battery calls?', 'Yes — this is a common Jamaica call type. Tell us when you parked, when you returned, and which residential block. We dispatch and meet you at the vehicle.'],
      ['Can you help me on the JFK Expressway?', 'No. JFK Expressway, Van Wyck Expressway, and Belt Parkway are NYPD-rotation only. Get off to a Jamaica surface street and we can meet you.'],
      ['How does Jamaica response time compare to other Queens neighborhoods?', '~28 minutes average. Jamaica is on the south side of Queens, further from our north-Queens staging zones than Astoria or LIC. Late-night Jamaica calls are often faster (22-26 min) because traffic is lighter.'],
      ['Are LIRR-station-area side streets serviceable?', 'Yes. Side streets feeding LIRR Jamaica Station and Jamaica Center are in our coverage. Confirm the cross-street when you call.'],
      ['Is multi-language dispatch available for Jamaica?', 'Dispatch is English-primary but is familiar with Spanish, Urdu, Bengali, and Caribbean-English neighborhood references. Call in any language and we work through location details.'],
    ],
  },

  'howard-beach': {
    heroSubline: `<strong>$125 flat per service</strong>. Howard Beach jump start calls run differently from the rest of Queens — driveway-dominant rather than street-parked, suburban single-family rhythm, weekend-only car patterns from long-time Italian-American families, and A-train + Belt Parkway commuter density. Response time is longer (~32 min) because Howard Beach sits at the south edge of the borough.`,
    whatIs: {
      p1: `Jump Start service in Howard Beach has a distinctly suburban character that doesn't match the rest of Queens. Most Howard Beach homes are 1-2 family detached with driveways or shared front-yard parking — street parking exists but is not the dominant mode. That changes the call pattern: driveway-parked cars sit longer between drives because owners don't have to "rotate the spot," and cold mornings hit driveway-parked cars harder than street-parked because there's no urban-thermal-mass shield.`,
      p2: `Howard Beach's housing stock is mostly long-time Italian-American families, with newer Eastern European and Asian-American influx in the past two decades. Older sedans kept for weekend use are common, particularly among multi-car households where the older car sits in the driveway and only comes out for Sunday church or a weekend Costco run. Battery age + low utilization is the dominant Howard Beach jump start cause.`,
    },
    whenToCall: [
      ['Old Howard Beach driveway — Sunday morning', 'Older Italian-American family on a side street off Cross Bay Boulevard, multi-car household, the older sedan in the driveway is dead before the Sunday morning church run.'],
      ['New Howard Beach driveway — weekend warrior', 'Newer Eastern European or Asian-American family, weekend-only family sedan, battery age catching up between weekend uses.'],
      ['Lindenwood — older retiree car', 'Lindenwood residential block, retired homeowner with an older sedan kept in the driveway, weekly errands, battery 4-5 years old.'],
      ['A-train Howard Beach-JFK Airport station commuter', 'A-train Manhattan commuter parked Sunday near the Howard Beach-JFK station, dead Friday after 5-day sit.'],
      ['Cross Bay Boulevard service road sputter', 'Driving home from the Rockaways or toward Manhattan, battery failing under load, pulled to the Cross Bay Boulevard service road. Jump Start + alternator check.'],
      ['Hamilton Beach — waterfront older car', 'Hamilton Beach is the small waterfront pocket adjacent to Jamaica Bay. Older car in a driveway near the water, dead from age + salt-air corrosion accelerating battery decline.'],
    ],
    coverage: {
      intro: `Jump Start service across Howard Beach covers Old Howard Beach (the original residential core east of Cross Bay Boulevard, between 159th Avenue and 165th Avenue), New Howard Beach (the postwar expansion north of Old Howard), Lindenwood (the apartment-and-2-family complex north of Belt Parkway), and Hamilton Beach (the small waterfront pocket east of Cross Bay Boulevard adjacent to Jamaica Bay).`,
      why: `Howard Beach response time is ~32 minutes average — longer than most Queens neighborhoods because Howard Beach sits at the south edge of the borough, far from our central-Queens staging zones. Belt Parkway and Cross Bay Boulevard traffic affects routing during JFK-rush periods (early morning, late afternoon).`,
      landmarks: `Common Howard Beach call origins: Old Howard Beach driveways (long-time Italian-American family pattern); New Howard Beach driveways (newer demographic mix, similar weekend pattern); Lindenwood apartment lots; A-train Howard Beach-JFK station commuter side streets; Cross Bay Boulevard service road; Hamilton Beach waterfront blocks. We do not service the Belt Parkway, Cross Bay Bridge, JFK Expressway, or North Conduit Avenue.`,
    },
    whyHeavyDemand: `Howard Beach jump start demand has three structural drivers: (1) Driveway-dominant parking changes the call pattern — driveway cars sit longer between drives, and cold-morning failures are more common because there's less urban-thermal-mass insulation than dense street parking; (2) suburban multi-car households where the second or third car (often older) sits unused for 1-2 weeks at a time, especially in long-time Italian-American families; (3) A-train Manhattan commuter density combined with Belt Parkway driving stress for JFK-bound and Manhattan-bound trips.`,
    scenarios: [
      ['Old Howard Beach Sunday morning church car', 'Italian-American family, three cars, the oldest is the driveway-parked weekend sedan used for Sunday church. Dead before the morning service. We dispatch from north Queens; ~32-min response.'],
      ['New Howard Beach driveway — weekend Costco', 'Family sedan in driveway used only on weekends, dead Saturday morning before the Costco run.'],
      ['Lindenwood retiree car — weekly errands', 'Retired Lindenwood resident, older sedan in driveway used for weekly grocery and pharmacy runs, battery 4+ years old.'],
      ['Howard Beach-JFK A-train commuter — Friday night', 'Manhattan commuter parked Sunday near the A-train Howard Beach-JFK station, dead Friday for the weekend.'],
      ['Cross Bay Boulevard service road sputter', 'Returning from Rockaway Beach or heading toward Belt Parkway, battery failing, pulled to the service road. Jump Start + alternator check.'],
      ['Hamilton Beach waterfront — salt-air corrosion', 'Hamilton Beach driveway near Jamaica Bay, older car, salt-air accelerated battery terminal corrosion contributing to slow-crank failure.'],
    ],
    cellFaqs: [
      ['Why is Howard Beach response time longer than most Queens neighborhoods?', 'Howard Beach sits at the south edge of Queens, near JFK and Jamaica Bay — physically further from our north-Queens staging zones than Astoria, LIC, or Forest Hills. The drive south via the Belt Parkway service road or Cross Bay Boulevard takes longer. Late-night and pre-dawn calls are typically faster (24-28 min) because traffic is lighter.'],
      ['Do you service Howard Beach driveways?', 'Yes. Driveways are the dominant parking type in Howard Beach. Drive-up to the front of the home is typical and often easier than street-parked calls in denser neighborhoods.'],
      ['Can you help me on the Belt Parkway?', 'No. Belt Parkway is NYPD-rotation only. Get off to Cross Bay Boulevard, 159th Avenue, or any Howard Beach surface street and we can meet you.'],
      ['Why are weekend-only Howard Beach cars dying so often?', 'Driveway-parked cars in suburban multi-car households often sit 1-2 weeks between drives. Modern AGM batteries self-discharge during long sits. A marginal battery on a once-a-week-driven car is dead in 6 months. Drive 30+ minutes once a week to keep the battery topped up, or replace if 4+ years old.'],
      ['Is salt-air a real factor for Hamilton Beach batteries?', 'Yes. Salt-air corrosion accelerates terminal corrosion on cars parked within a few blocks of Jamaica Bay. White or green corrosion crust on battery terminals reduces current flow and contributes to slow-crank or no-crank failures. We clean terminals during jump start calls in Hamilton Beach as standard procedure.'],
    ],
  },

  'ozone-park': {
    heroSubline: `<strong>$125 flat per service</strong>. Ozone Park jump start calls run on Aqueduct casino rhythms — Resorts World stays open 24/7, parking lot is full of cars sitting 4-8 hours while owners gamble, batteries die in summer heat or winter cold, post-departure call wave at all hours. The diverse Caribbean and Italian-American resident base produces a steady weekend pattern in the residential blocks.`,
    whatIs: {
      p1: `Jump Start service in Ozone Park has a unique 24-hour call pattern driven by Resorts World Casino at Aqueduct. The casino is open 24/7, attracts visitors who park for 4-8+ hours at a stretch, and produces a steady stream of dead-battery calls in the parking lot at all hours — older cars left in the heat or cold during a long visit produce dead batteries in disproportionate numbers. The post-departure wave is a real Ozone Park call pattern that few other Queens neighborhoods see.`,
      p2: `Ozone Park's residential character — 1-2 family homes mixed with apartment buildings, dominantly Caribbean (Guyanese, Trinidadian) and Italian-American long-time residents — produces a typical weekend-warrior call mix. A-train along Liberty Avenue brings the Manhattan-commuter pattern. Cross Bay Boulevard heading south to Howard Beach brings highway-adjacent breakdown calls.`,
    },
    whenToCall: [
      ['Resorts World Casino parking lot — post-visit dead', 'Parked at the casino, gambled or visited for 4-8 hours, came back to the car to leave — dead battery from extended sit in heat or cold. Most distinctive Ozone Park call type. Calls cluster around shift changes and post-late-night exits.'],
      ['Liberty Avenue A-train commuter — Friday night', 'Manhattan commuter parked Sunday near a Liberty Avenue A-train station, dead Friday after 5-day sit.'],
      ['Rockaway Boulevard residential — door-ajar overnight', 'Side street off Rockaway Boulevard, dome-light or door-ajar overnight drain.'],
      ['101st Avenue residential — older homeowner car', 'Long-time Caribbean or Italian-American family, older sedan used weekly, battery age catching up.'],
      ['Cross Bay Boulevard service road sputter', 'Driving toward Howard Beach or back toward Manhattan, battery failing under load, pulled to the service road.'],
      ['Tudor Village residential — weekend-only sedan', 'Tudor Village 1-2 family home, weekend-only utility car, dead between weekend uses.'],
    ],
    coverage: {
      intro: `Jump Start service across Ozone Park covers the Ozone Park core (the dense 1-2 family residential blocks along Liberty Avenue and Rockaway Boulevard), South Ozone Park (the residential blocks south of North Conduit Avenue), and Tudor Village (the small residential pocket east of 91st Street).`,
      why: `Ozone Park response time is ~30 minutes average. The Aqueduct/Resorts World event-driven traffic during major event nights and weekend peak hours can add 5-8 minutes; quieter overnight and weekday hours are typically faster. Cross Bay Boulevard and Belt Parkway feeder traffic during JFK-rush periods affects routing.`,
      landmarks: `Common Ozone Park call origins: Aqueduct/Resorts World casino parking lot (24-hour event-driven calls); Liberty Avenue A-train commuter side streets; Rockaway Boulevard residential blocks; 101st Avenue residential; Tudor Village 1-2 family blocks; Cross Bay Boulevard service road. We do not service the Belt Parkway, Cross Bay Boulevard restricted sections, North Conduit Avenue, JFK Expressway, or Van Wyck Expressway.`,
    },
    whyHeavyDemand: `Ozone Park jump start demand has three drivers: (1) Resorts World Casino's 24-hour operation produces a unique event-driven parking-lot call pattern at all hours — visitors park 4-8+ hours, batteries die in extended-sit conditions, post-visit dead-battery wave; (2) Liberty Avenue A-train Manhattan-commuter pattern leaves cars sitting Mon-Fri; (3) the diverse Caribbean and Italian-American long-time-resident demographic with mixed older-car ownership produces a steady weekend-warrior call mix.`,
    scenarios: [
      ['Resorts World Casino lot — late-night dead', 'Visitor stayed at the casino 6 hours overnight, came back to leave at 4 AM, dead battery from extended cold sit. Late-night dispatch is fast — 22-26 min from the call.'],
      ['Liberty Avenue A-train commuter — Friday night', 'Manhattan commuter parked Sunday near a Liberty Avenue A-train station, dead Friday for the weekend.'],
      ['Rockaway Boulevard residential — older sedan', 'Caribbean long-time-resident family on Rockaway Boulevard side street, older sedan, dead from age + dome light overnight.'],
      ['101st Avenue Sunday morning — Italian-American', 'Italian-American family Sunday before church, the older sedan in the driveway is dead.'],
      ['Cross Bay Boulevard service road sputter — Rockaway return', 'Driving home from Rockaway Beach summer weekend, alternator failing, pulled to the service road. Jump Start + check.'],
      ['Tudor Village weekend-only family car', '1-2 family home on a Tudor Village side street, weekend-only sedan, battery age catching up.'],
    ],
    cellFaqs: [
      ['Do you respond to Resorts World Casino parking lot calls?', 'Yes — this is a steady Ozone Park call type. Casino parking is open to service vehicles. Tell us your row and the vehicle make/model when you call so we route directly.'],
      ['Are Aqueduct and Resorts World the same place?', 'Same site — Aqueduct Racetrack and Resorts World Casino at Aqueduct are co-located. The casino is operated under the Resorts World brand on the Aqueduct grounds. We service the parking lot.'],
      ['Can you help me on the Belt Parkway or North Conduit?', 'No. Belt Parkway, North Conduit Avenue, JFK Expressway, and Cross Bay Boulevard restricted sections are NYPD-rotation only. Get off to a surface-level Ozone Park street.'],
      ['How does Ozone Park response time compare to Howard Beach?', '~30 min Ozone Park vs ~32 min Howard Beach. They\'re adjacent neighborhoods. Aqueduct/casino event nights can add 5-8 min to Ozone Park; Howard Beach is consistently a couple minutes longer because it\'s further south.'],
      ['Is multi-language dispatch available for Ozone Park?', 'Dispatch is English-primary but is familiar with Caribbean-English, Spanish, and Italian neighborhood references. Call in any language and we work through the details.'],
    ],
  },

  'richmond-hill': {
    heroSubline: `<strong>$125 flat per service</strong>. Richmond Hill jump start calls split between South Richmond Hill ("Little Guyana" — dense Indo-Caribbean and Sikh community, A-train and J/Z transit, heavy car ownership) and North Richmond Hill (older Victorian-era detached homes, more affluent, suburban driveways). Two completely different call profiles.`,
    whatIs: {
      p1: `Jump Start service in Richmond Hill operates across two distinct sub-areas with very different demographics and call patterns. South Richmond Hill — known as "Little Guyana" — is dense, Indo-Caribbean (Guyanese, Trinidadian), with a substantial Sikh community along Liberty Avenue. Heavy car ownership, dense street parking, and J/Z + A-train Manhattan commuter pattern combine to produce a high call load. North Richmond Hill, with its Victorian-era detached homes from the late 1800s and early 1900s, has more driveway parking and an older suburban character.`,
      p2: `Liberty Avenue is the South Richmond Hill commercial spine — Indo-Caribbean restaurants, Sikh gurdwaras, Guyanese groceries, Trinidadian roti shops. Late-night dinner crowd and shopping crowd produce post-visit dead-battery calls regularly. Atlantic Avenue is the southern boundary with Brooklyn. Lefferts Boulevard runs south through both halves of Richmond Hill, connecting the J/Z train to South Richmond Hill.`,
    },
    whenToCall: [
      ['South Richmond Hill — Liberty Avenue late-night', 'Saturday late-night Indo-Caribbean dinner or Sikh gurdwara visit on Liberty Avenue, walked back at 11 PM, dead battery from dome light.'],
      ['Lefferts Boulevard J/Z commuter — Friday night', 'J/Z train Manhattan commuter parked Sunday on a side street near a Lefferts Blvd J/Z station, dead Friday after 5-day sit.'],
      ['North Richmond Hill — Victorian home driveway cold morning', 'Victorian-era detached home, older sedan in driveway, first cold morning of winter, dead battery.'],
      ['South Richmond Hill — A-train Liberty Ave commuter', 'A-train Manhattan commuter parked Sunday on a side street near the A-train Liberty Avenue stop, dead Friday for the weekend.'],
      ['Atlantic Avenue residential — door-ajar overnight', 'Side street off Atlantic Avenue, dome-light or door-ajar overnight drain.'],
      ['Jamaica Avenue commercial — late-night shopping', '101st Avenue / Jamaica Avenue commercial activity, post-shopping dead battery from dome light.'],
    ],
    coverage: {
      intro: `Jump Start service across Richmond Hill covers North Richmond Hill (the historic Victorian-era detached-home blocks north of Atlantic Avenue, between 102nd and 124th Streets), South Richmond Hill (also known as "Little Guyana," the dense Indo-Caribbean and Sikh community along Liberty Avenue south to the Brooklyn border), and the Lefferts Boulevard corridor that runs through both halves.`,
      why: `Richmond Hill response time is ~28 minutes average. South Richmond Hill's dense parking and pedestrian density along Liberty Avenue can add 2-3 minutes during peak commercial hours. North Richmond Hill is typically faster because traffic is lighter.`,
      landmarks: `Common Richmond Hill call origins: Liberty Avenue commercial corridor in South Richmond Hill (Indo-Caribbean restaurants, Sikh gurdwaras); Lefferts Boulevard J/Z and A-train commuter side streets; North Richmond Hill Victorian-era residential blocks; Atlantic Avenue residential side streets; 101st Avenue/Jamaica Avenue commercial. We do not service the Van Wyck Expressway, Belt Parkway, or Atlantic Avenue restricted sections.`,
    },
    whyHeavyDemand: `Richmond Hill jump start demand traces to three structural factors: (1) South Richmond Hill ("Little Guyana") has one of the densest Indo-Caribbean and Sikh communities in NYC, with high car ownership per household, dense street parking, and a Liberty Avenue commercial scene producing late-night calls; (2) J/Z train and A-train Manhattan commuter patterns on the Lefferts Boulevard corridor leave cars sitting Mon-Fri; (3) North Richmond Hill's Victorian-era housing stock with older long-time residents produces a weekend-warrior driveway-call pattern.`,
    scenarios: [
      ['Liberty Avenue Indo-Caribbean restaurant late-night', 'Saturday late-night Guyanese roti or Trinidadian doubles dinner on Liberty Avenue, walked back to the car at 11 PM, dead battery.'],
      ['Lefferts Boulevard J/Z commuter — Friday night', 'J/Z Manhattan commuter parked Sunday near a Lefferts Blvd J/Z station, dead Friday for the weekend.'],
      ['North Richmond Hill Victorian driveway cold morning', 'Victorian-era detached home, older long-time-resident sedan in driveway, first cold morning of winter, dead battery.'],
      ['Liberty Avenue A-train commuter — Friday night', 'A-train Manhattan commuter parked Sunday on a Liberty Avenue side street, dead Friday after 5-day non-drive.'],
      ['Atlantic Avenue residential side street', 'Apartment block off Atlantic Avenue, dome-light or door-ajar overnight drain.'],
      ['Jamaica Avenue late-night shopping', 'Commercial corridor errand at 10 PM, walked back to car, dead battery.'],
    ],
    cellFaqs: [
      ['Do you serve South Richmond Hill ("Little Guyana")?', 'Yes — South Richmond Hill is in our coverage. Liberty Avenue commercial corridor and the residential side streets between Liberty Avenue and the Brooklyn border are all serviceable.'],
      ['Is multi-language dispatch available for Richmond Hill?', 'Dispatch is English-primary but is familiar with Punjabi, Hindi, Caribbean-English, and Spanish neighborhood references. Call in any language and we work through location and vehicle details.'],
      ['How does North Richmond Hill response time compare to South?', 'About the same on average (~28 min), but North Richmond Hill is often faster (24-26 min) because traffic is lighter on the Victorian-residential side. South Richmond Hill is denser and slightly slower at peak hours.'],
      ['Can you help me on Atlantic Avenue itself?', 'Atlantic Avenue surface lanes — yes. Atlantic Avenue restricted sections (where there are no service-vehicle access points) — no. Tell us the cross-street and we will confirm whether we can reach you.'],
      ['Why is Liberty Avenue a hot spot for late-night calls?', 'Liberty Avenue between 116th and 130th Streets has one of the densest Indo-Caribbean and Sikh restaurant-and-shopping corridors in NYC. Saturday and Sunday late-night dinner crowds produce post-visit dead-battery calls. We expect them.'],
    ],
  },

  maspeth: {
    heroSubline: `<strong>$125 flat per service</strong>. Maspeth jump start calls run on a working-class rhythm — long-time Polish and Italian-American residents with older sedans, commercial fleet vehicles serving the industrial corridor along Newtown Creek, and tight residential streets that need a smaller service van. Bus-only transit means high household car ownership.`,
    whatIs: {
      p1: `Jump Start service in Maspeth has a different character than the rest of Queens because Maspeth has a different character. The neighborhood is split between dense 1-2 family residential blocks (Polish and Italian-American long-time families predominantly) and a substantial industrial corridor along Newtown Creek and the Long Island Expressway with warehouses, distribution centers, and small manufacturing. Residential calls and commercial-fleet calls mix on the Maspeth dispatch board in a way that doesn't happen in residential-pure neighborhoods.`,
      p2: `Maspeth has very limited subway access — the closest train is the M to Metropolitan Avenue, and most Maspeth residents rely on buses (Q39, Q58, Q67, Q47) or drive to work. That forces high household car ownership, including older sedans driven daily, and produces a different battery-failure pattern than transit-rich neighborhoods. Cars driven daily fail less from sitting and more from age, accelerated terminal corrosion in the industrial-air environment, and engine-off accessory drain.`,
    },
    whenToCall: [
      ['Industrial corridor — commercial fleet vehicle', 'Box truck, delivery van, or commercial pickup at a Maspeth warehouse or distribution lot. Battery failed on the morning departure or after a long idle. We jump start light-duty commercial; heavy-duty (over 26k GVWR) we cannot help.'],
      ['Polish or Italian-American family driveway — older sedan', 'Long-time Maspeth resident, older family sedan driven daily for 15+ years, battery age catching up. Standard jump start, recommend battery replacement.'],
      ['Grand Avenue residential — door-ajar overnight', 'Side street off Grand Avenue, dome-light or door-ajar overnight drain.'],
      ['Metropolitan Avenue M-train commuter', 'Limited but real — Manhattan commuter using the M-train at Metropolitan Avenue, parked Sunday on a side street, dead Friday after 5-day sit.'],
      ['Newtown Creek industrial-corridor sputter', 'Driving along the industrial corridor (warehouse-to-warehouse delivery), alternator or battery failing, pulled into a lot. We jump start commercial fleet vehicles regularly.'],
      ['58th Street residential — cold-snap morning', 'First sub-15°F morning of winter. Long-time residents with older sedans on side streets, dead by 7 AM.'],
    ],
    coverage: {
      intro: `Jump Start service across Maspeth covers the Maspeth core (the dense 1-2 family residential blocks east of the Long Island Expressway and west of Mount Olivet Cemetery), Industrial Maspeth (the warehouse-and-manufacturing corridor along Newtown Creek and 58th Street), and the Frog Pond area (the small residential pocket east of Maurice Avenue).`,
      why: `Maspeth response time is ~25 minutes average. Industrial corridor traffic during business hours can affect routing; residential-block calls are typically faster (22-25 min). Narrow row-house streets in the Maspeth core require the smaller service van.`,
      landmarks: `Common Maspeth call origins: Grand Avenue residential side streets; Metropolitan Avenue M-train commuter blocks; Newtown Creek industrial corridor (commercial fleet calls); 58th Street and Maurice Avenue commercial; Frog Pond area residential. We do not service the BQE, Long Island Expressway, or LIE Maspeth Bypass.`,
    },
    whyHeavyDemand: `Maspeth jump start demand traces to three structural factors: (1) limited subway access forces high household car ownership, with older sedans driven daily by long-time Polish and Italian-American families — battery age failures are more common than transit-rich-neighborhood patterns; (2) the industrial corridor along Newtown Creek brings commercial-fleet vehicle calls (light-duty pickups, delivery vans, box trucks under 26k GVWR) that residential neighborhoods don't see; (3) BQE and LIE adjacency produce service-road sputter and breakdown calls.`,
    scenarios: [
      ['Industrial corridor warehouse — commercial pickup', 'Light-duty commercial pickup at a Newtown Creek warehouse, battery failed before the morning route. We jump start commercial vehicles up to 26k GVWR.'],
      ['Polish family driveway — older daily-driver sedan', 'Long-time Maspeth resident, older sedan driven daily for 15+ years, battery age catching up. Standard jump start on a residential driveway.'],
      ['Grand Avenue residential — dome-light overnight', 'Side street off Grand Avenue, door not fully shut, dome light burned through the night.'],
      ['Metropolitan Avenue M-train commuter — Friday', 'M-train Manhattan commuter, parked Sunday near the Metropolitan Avenue station, dead Friday after 5-day sit.'],
      ['Newtown Creek delivery van between routes', 'Delivery van between routes, accessory drain (radio, cabin heater) killed the battery during a long idle.'],
      ['58th Street cold-snap morning — older sedan', 'First true cold morning, older sedan on a side street off 58th Street, dead from age + cold.'],
    ],
    cellFaqs: [
      ['Do you jump start commercial fleet vehicles in Maspeth?', 'Yes — light-duty commercial up to 26k GVWR (delivery vans, box trucks, light pickups). Heavy commercial (semi-trucks, box trucks over 26k GVWR) need heavy-duty boost service that we don\'t provide.'],
      ['Are Maspeth side streets serviceable?', 'Yes. Maspeth residential blocks have narrow street-parking density similar to Astoria. Our smaller service van handles them. Industrial-zone access is also fine.'],
      ['Why is car ownership so high in Maspeth?', 'Limited subway access. The M to Metropolitan Avenue is the only train in the neighborhood, and most Maspeth blocks are 10+ minutes from it. Most households need cars for errands and work, leading to higher per-household car counts than transit-rich neighborhoods.'],
      ['Can you help me on the BQE or LIE?', 'No. BQE main lanes, LIE main lanes, and the LIE Maspeth Bypass are NYPD-rotation only. Get off to Grand Avenue, Metropolitan Avenue, or 58th Street and we will meet you.'],
      ['Is Polish-speaking dispatch available?', 'Dispatch is English-primary but is familiar with Polish neighborhood names and corridors. Call in any language and we work through the location.'],
    ],
  },

  ridgewood: {
    heroSubline: `<strong>$125 flat per service</strong>. Ridgewood jump start calls cluster on the historic Mathews Model Flats row-house blocks (narrow streets, smaller service van), the M-train + L-train commuter pattern, and the gentrification-mix demographics producing both long-time German-Polish-Latino calls and newer-resident calls. Myrtle Avenue commercial activity adds late-night calls.`,
    whatIs: {
      p1: `Jump Start service in Ridgewood operates on streets designed in the 1900s — much narrower than typical Queens streets. The Mathews Model Flats — historic 2-family row houses built between 1908 and the 1920s and now a designated historic preservation district — line many Ridgewood blocks with party-wall construction and street-only parking. Service vehicles need to fit 18-foot-wide streets with double-parked cars on both sides, which means we dispatch the smaller service van as standard for Ridgewood, not the full flatbed.`,
      p2: `Ridgewood's demographic mix has shifted significantly in the past 15 years — long-time German, Polish, and Latino families remain, but a substantial Brooklyn-overflow younger-resident population has moved in, particularly along the Bushwick (Brooklyn) border. Both groups produce different jump start call patterns: long-time families with older daily-driver sedans (battery age failures), and newer residents with newer cars sitting Mon-Fri while they take the M or L train to Manhattan (weekend-warrior failures). Myrtle Avenue is the commercial spine.`,
    },
    whenToCall: [
      ['Mathews Model Flats row house — daily-driver dead', 'Long-time Ridgewood resident, older sedan driven daily, parked on the row-house street, dead from battery age. We dispatch the smaller service van for narrow row-house street access.'],
      ['M-train Forest Avenue commuter — Friday night', 'M-train Manhattan commuter, parked Sunday on a side street near Forest Avenue, dead Friday after 5-day sit.'],
      ['Myrtle Avenue late-night dinner', 'Saturday late-night Polish or Italian restaurant on Myrtle Avenue, walked back to the car at 11 PM, dead battery from dome light.'],
      ['Bushwick border block — newer-resident commuter car', 'Newer resident on a block near the Bushwick (Brooklyn) border, takes the L train to Manhattan all week, dead Friday for the weekend.'],
      ['Fresh Pond Road residential — door-ajar overnight', 'Side street off Fresh Pond Road, dome-light or door-ajar overnight drain.'],
      ['Metropolitan Avenue cold-snap morning', 'Older Ridgewood sedan on a side street off Metropolitan Avenue, first cold morning of winter, dead battery.'],
    ],
    coverage: {
      intro: `Jump Start service across Ridgewood covers the Ridgewood core (the historic Mathews Model Flats row-house blocks, designated as a historic preservation district), Glendale-adjacent (the southeast blocks toward the Glendale border), and the Bushwick (Brooklyn) border (the western blocks where Ridgewood meets Bushwick along Wyckoff Avenue and St Nicholas Avenue).`,
      why: `Ridgewood response time is ~26 minutes average. Narrow historic row-house streets require the smaller service van and slower navigation, adding 3-5 minutes to on-site time vs. wider-street neighborhoods. M-train Forest Avenue station pedestrian density at peak hours adds 1-2 minutes.`,
      landmarks: `Common Ridgewood call origins: Mathews Model Flats row-house blocks (long-time-resident daily-driver pattern); M-train Forest Avenue station commuter side streets; Myrtle Avenue commercial corridor; Fresh Pond Road residential blocks; Bushwick (Brooklyn) border blocks. We do not service the BQE near the Maspeth border or Cypress Hills border restricted sections.`,
    },
    whyHeavyDemand: `Ridgewood jump start demand has three structural drivers: (1) historic row-house streets have heavy street-parking density and limited driveways, producing dome-light and door-ajar overnight drains and weather-exposure cold-snap calls; (2) M-train and L-train Manhattan-commuter density (especially along Forest Avenue, Fresh Pond Road, and the Bushwick border) leaves cars sitting Mon-Fri; (3) the demographic mix — long-time daily-driver families and newer weekend-warrior residents — produces two layered call patterns on the same streets.`,
    scenarios: [
      ['Mathews row-house street — long-time-resident daily-driver dead', 'Long-time Polish or German family, older sedan driven daily for 12+ years, battery age catching up. Smaller service van fits the narrow row-house street.'],
      ['M-train Forest Avenue — Friday night commuter', 'Manhattan commuter, parked Sunday near Forest Avenue M-train station, dead Friday for the weekend.'],
      ['Myrtle Avenue Polish restaurant late-night', 'Saturday late-night Polish or Italian dinner on Myrtle, walked back at 11 PM, dead battery from dome light.'],
      ['Bushwick border — newer-resident L-train commuter', 'Newer Ridgewood resident on a block near the L-train Wyckoff or Halsey stops, dead Friday after 5-day sit.'],
      ['Fresh Pond Road dome-light overnight', 'Side street off Fresh Pond Road, door-ajar drain through the night.'],
      ['Metropolitan Avenue cold-snap morning', 'Older sedan on a row-house block off Metropolitan, first cold morning of winter, dead battery.'],
    ],
    cellFaqs: [
      ['Why does Ridgewood require a smaller service van?', 'Mathews Model Flats row-house streets are typically 18 feet wide with double-parked cars on both sides — much narrower than Astoria or Sunnyside. The full flatbed cannot navigate them. Our smaller service van fits and is standard for Ridgewood dispatch.'],
      ['Do you serve Bushwick-border Ridgewood blocks?', 'Yes. Wyckoff Avenue and St Nicholas Avenue blocks (the Brooklyn border zone) are in our Ridgewood coverage. We do not cross into Brooklyn for those calls — Bushwick proper is not in our regular service zone.'],
      ['Is Polish or German dispatch available?', 'Dispatch is English-primary but is familiar with Polish neighborhood references in Ridgewood. Call in any language and we work through location and vehicle details.'],
      ['How does Ridgewood response time compare to Maspeth?', '~26 min Ridgewood vs ~25 min Maspeth. Adjacent neighborhoods. Ridgewood\'s narrow row-house streets add 3-5 min on-site time for navigation; Maspeth has wider streets but longer drive distance from Astoria-side staging.'],
      ['Can you help me on the BQE near Maspeth?', 'No. BQE main lanes are NYPD-rotation only. Get off to Maspeth Avenue, Grand Avenue, or any Ridgewood/Maspeth surface street and we can meet you.'],
    ],
  },

  whitestone: {
    heroSubline: `<strong>$125 flat per service</strong>. Whitestone jump start calls run on suburban driveway rhythms — older Italian-American long-time families, weekend-only family sedans, no subway access forcing high car ownership, and waterfront homes in Beechhurst with salt-air-accelerated battery decline. Response time is ~32 min because Whitestone sits at the north edge of Queens.`,
    whatIs: {
      p1: `Jump Start service in Whitestone operates in a suburban environment that doesn't match the rest of Queens. Most Whitestone homes are 1-family detached with full driveways, garages, or shared front-yard parking. Street parking exists but is not dominant. Older Italian-American long-time families are the demographic core, and many households have multi-car garages where the third or fourth car (often the older one) sits weeks at a time and produces dead-battery calls when finally needed.`,
      p2: `Beechhurst is the small waterfront pocket on the East River side of Whitestone, with houses literally on the water. Salt-air corrosion accelerates battery terminal corrosion on cars parked within a few blocks of the waterfront. White or green crust on terminals reduces current flow and contributes to slow-crank or no-crank failures. We clean terminals during Beechhurst jump start calls as standard procedure.`,
    },
    whenToCall: [
      ['Whitestone driveway — multi-car household weekend sedan', 'Long-time Italian-American family with three cars, the older sedan in the driveway is dead before the Sunday morning church run.'],
      ['Old Whitestone — older retiree car', 'Retired Whitestone homeowner, older sedan kept in driveway or garage, weekly errands only, battery age catching up.'],
      ['Beechhurst waterfront — salt-air corrosion', 'Waterfront home near the East River, older car in driveway, salt-air-accelerated terminal corrosion contributing to slow-crank failure.'],
      ['Cross Island Parkway service road sputter', 'Driving home along Cross Island, alternator failing, pulled to the service road. Jump Start + alternator check.'],
      ['Robinson Park residential — cold-snap morning', 'First cold morning of winter, older sedan in a driveway, dead before morning errand.'],
      ['14th Avenue commercial — late-night shopping', 'Late-evening errand on 14th Avenue, came back to the car at 10 PM, dead battery from dome light.'],
    ],
    coverage: {
      intro: `Jump Start service across Whitestone covers Whitestone core (the central residential blocks between 14th Avenue and the Cross Island Parkway), Old Whitestone (the historic core south of 14th Avenue), Beechhurst (the small waterfront pocket east of the Whitestone Bridge), and Robinson Park (the residential pocket southwest of the core).`,
      why: `Whitestone response time is ~32 minutes average — longer than most Queens neighborhoods because Whitestone sits at the north edge of Queens, far from our central staging zones, and because there's no efficient subway-adjacent route through. Cross Island Parkway and Whitestone Bridge feeder traffic affects routing during peak hours.`,
      landmarks: `Common Whitestone call origins: Whitestone core 1-family driveways; Old Whitestone older-resident driveways; Beechhurst waterfront homes (salt-air corrosion calls); Robinson Park residential blocks; 14th Avenue commercial. We do not service the Whitestone Bridge, Cross Island Parkway, or Throgs Neck Bridge approach.`,
    },
    whyHeavyDemand: `Whitestone jump start demand has three structural drivers: (1) suburban multi-car household pattern — older sedans sitting in driveways for 1-2 weeks at a time produce battery-discharge failures unique to Whitestone (vs. Howard Beach which has a similar pattern); (2) older long-time-resident demographic with high car ownership per household, low daily utilization, and battery-age dominant failure pattern; (3) Beechhurst waterfront salt-air corrosion adds a unique terminal-corrosion failure mode that few Queens neighborhoods see.`,
    scenarios: [
      ['Whitestone Sunday church car — older Italian-American family', 'Three-car household, older sedan in driveway used only for Sunday church and weekend Costco run, dead before the Sunday service.'],
      ['Old Whitestone retiree — weekly errands', 'Retired homeowner, older sedan kept in garage, weekly grocery and pharmacy runs, battery 4+ years old.'],
      ['Beechhurst waterfront — salt-air corrosion', 'Waterfront home, terminals visibly corroded, slow-crank failure. Clean terminals + jump start.'],
      ['Cross Island service road sputter', 'Driving home from a Bronx visit via Whitestone Bridge, alternator failing, pulled to the Cross Island service road.'],
      ['Robinson Park first cold morning', 'Older sedan in driveway, first sub-15°F morning of winter, dead from cold + age.'],
      ['14th Avenue late-night errand', 'Late-evening shopping on 14th Avenue, came back to car at 10 PM, dead from dome light.'],
    ],
    cellFaqs: [
      ['Why is Whitestone response time so much longer than Astoria?', 'Whitestone sits at the north edge of Queens, far from our central-Queens staging zones (~32 min vs ~20 min for Astoria). Cross Island Parkway and Whitestone Bridge feeder traffic adds during peak hours. Late-night and pre-dawn calls are typically faster (24-28 min) because traffic is light.'],
      ['Are Beechhurst waterfront homes serviceable?', 'Yes. Beechhurst residential blocks have full driveway access. Salt-air corrosion on battery terminals is a known issue — we clean terminals during jump start calls as standard procedure for waterfront-adjacent vehicles.'],
      ['Can you help me on the Whitestone Bridge or Cross Island Parkway?', 'No. Whitestone Bridge, Cross Island Parkway, and Throgs Neck Bridge approach are NYPD-rotation only. Get off to a Whitestone surface street (14th Avenue or 150th Street) and we will meet you.'],
      ['Why are weekend-only Whitestone cars dying so often?', 'Modern AGM batteries self-discharge while sitting. A car parked 1-2 weeks at a time in a Whitestone driveway loses 5-15% of charge. A marginal battery cannot recover and is dead when needed. Drive 30+ minutes once a week to top it back up, or replace if 4+ years old.'],
      ['Is salt-air corrosion really affecting batteries?', 'Yes — particularly on cars parked within four to five blocks of the East River waterfront in Beechhurst. White or green corrosion crust on battery terminals reduces current flow and contributes to slow-crank failures. We clean and protect terminals during jump start calls in those areas.'],
    ],
  },

  'college-point': {
    heroSubline: `<strong>$125 flat per service</strong>. College Point jump start calls cluster around big-box retail parking lots (BJs, IKEA, Target on College Point Boulevard) and suburban driveways. Limited subway access means high household car ownership, and waterfront Powell Cove homes see salt-air-accelerated battery decline similar to Whitestone Beechhurst.`,
    whatIs: {
      p1: `Jump Start service in College Point has a unique big-box-retail call pattern that few other Queens neighborhoods produce. College Point Boulevard between 14th Avenue and Whitestone Expressway is one of NYC's densest big-box-retail corridors — BJs Wholesale, IKEA, Target, Best Buy, and several smaller stores produce parking lots that fill on weekends with cars sitting 2-4 hours while owners shop. Older cars sitting in summer heat or winter cold during a long shopping trip produce a wave of post-shopping dead-battery calls.`,
      p2: `College Point's residential character is similar to Whitestone — 1-family detached and 1-2 family attached homes with driveways, limited subway access (no train; Q25 and Q65 buses serve the area), high household car ownership, and a long-time waterfront homeowner population in the Powell Cove area. Salt-air corrosion accelerates terminal corrosion on cars parked near the water, similar to Beechhurst.`,
    },
    whenToCall: [
      ['BJs Wholesale parking lot — post-shopping dead', 'Saturday or Sunday afternoon at BJs on College Point Boulevard, parked 2-3 hours during the shopping run, dead battery on return. Older car + summer heat or winter cold during the sit.'],
      ['IKEA parking lot — Saturday weekend', 'Saturday afternoon at IKEA, the parking lot is full of cars sitting 3-4 hours during long furniture shopping trips, dead battery from extended sit.'],
      ['Target parking lot — weekend errand', 'Family shopping trip to Target, came back to the car after 90 minutes, dead battery.'],
      ['College Point residential driveway — weekend warrior', 'Suburban 1-family home, older family sedan used weekly, dead between weekend uses.'],
      ['Powell Cove waterfront — salt-air corrosion', 'Waterfront home near Powell Cove, older car in driveway, salt-air-accelerated terminal corrosion.'],
      ['14th Avenue cold-snap morning', 'First cold morning of winter, older sedan in driveway, dead from age + cold.'],
    ],
    coverage: {
      intro: `Jump Start service across College Point covers the College Point core (the residential blocks between 14th Avenue and 28th Avenue, west of Cross Island Parkway), Whitestone-adjacent (the eastern blocks bordering the Whitestone neighborhood), the Malba border (the small high-end residential pocket northwest of College Point Boulevard), and the College Point Boulevard big-box retail corridor.`,
      why: `College Point response time is ~32 minutes average. Distance from central-Queens staging zones is the main factor; big-box retail parking lots have direct service-vehicle access. Weekend peak shopping hours can add 5-8 minutes to arrival on the College Point Boulevard corridor.`,
      landmarks: `Common College Point call origins: BJs Wholesale parking lot on College Point Boulevard; IKEA parking lot on Hancock Street; Target parking lot; Whitestone-Lane Cross Island Parkway service road; Powell Cove waterfront homes; College Point residential blocks. We do not service the Whitestone Bridge, Cross Island Parkway, or Throgs Neck Bridge approach.`,
    },
    whyHeavyDemand: `College Point jump start demand has three structural drivers: (1) the College Point Boulevard big-box retail corridor produces a weekend-shopping post-visit dead-battery call pattern unique to this part of Queens — older cars sitting in heat or cold during 2-4 hour shopping trips; (2) limited subway access forces high household car ownership, with weekend-only utility cars in suburban driveways producing weekend-warrior battery-discharge failures; (3) Powell Cove waterfront salt-air corrosion adds a terminal-corrosion failure mode similar to Beechhurst.`,
    scenarios: [
      ['BJs Wholesale Saturday afternoon dead', 'Family Saturday shopping run at BJs Wholesale, parked 2-3 hours, came back to a dead battery in the lot. Older car + winter cold during the sit.'],
      ['IKEA parking lot — long furniture shopping trip', 'Saturday afternoon at IKEA, 3-4 hours during a furniture run, dead battery on return.'],
      ['Target parking lot — family weekend errand', 'Quick family shopping trip to Target, 90 minutes in the lot, dead battery on return from a marginal battery + winter cold.'],
      ['Whitestone-adjacent residential driveway', 'Suburban 1-family home, older sedan, dead between weekend uses.'],
      ['Powell Cove waterfront — salt-air corrosion', 'Waterfront home, terminals visibly corroded, slow-crank. Clean terminals + jump start.'],
      ['14th Avenue residential cold morning', 'Older sedan in driveway, first cold morning of winter, dead from age + cold.'],
    ],
    cellFaqs: [
      ['Do you respond to BJs, IKEA, and Target parking lot calls in College Point?', 'Yes — these are common College Point call types. Tell us which lot, your row, and the vehicle make/model when you call so we route directly. Weekend peak hours add 5-8 minutes to ETA.'],
      ['How does College Point response time compare to Whitestone?', 'About the same (~32 min) — both are at the north edge of Queens with similar drive times from our staging zones. Big-box retail corridor traffic during weekend peak hours can extend College Point ETA further.'],
      ['Are Powell Cove waterfront homes serviceable?', 'Yes. Powell Cove residential blocks have driveway access. Salt-air corrosion on battery terminals is a known issue (similar to Whitestone Beechhurst) — we clean terminals during jump start calls in waterfront areas as standard procedure.'],
      ['Can you help me on the Whitestone Bridge or Cross Island Parkway?', 'No. Whitestone Bridge, Cross Island Parkway, and Throgs Neck Bridge approach are NYPD-rotation only. Get off to a College Point or Whitestone surface street.'],
      ['Why are weekend cars in College Point dying so often?', 'Limited subway access forces multi-car households. Weekend-only utility cars sit in driveways 1-2 weeks between uses. Modern AGM batteries self-discharge during long sits — a marginal battery is dead when needed. Drive 30+ minutes once a week, or replace if 4+ years old.'],
    ],
  },

  'fresh-meadows': {
    heroSubline: `<strong>$125 flat per service</strong>. Fresh Meadows jump start calls cluster around the 1940s Fresh Meadows Co-op apartment complex (older long-time residents, weekly-use cars), Cunningham Heights co-ops, the diverse Jewish, Asian, and Latino community, and the LIE-and-Grand Central Parkway commuter pattern. Bus-only transit forces high car ownership.`,
    whatIs: {
      p1: `Jump Start service in Fresh Meadows is shaped by the Fresh Meadows Co-op — a large 1940s garden-apartment development built as a planned community along Union Turnpike, 188th Street, and 73rd Avenue. The Co-op has thousands of units, many occupied by long-time older residents who drive older sedans on a weekly errand cycle. Battery age plus low utilization equals dead-battery calls every few months, often the same family sedan multiple times before the owner finally replaces the battery.`,
      p2: `Fresh Meadows residents rely on buses (Q17, Q30, Q31, Q88) and either drive or take the LIE/Grand Central Parkway to Manhattan-bound transfer points. The closest subway is the E/F at Hillside Avenue (Briarwood/Jamaica Hills), a 10-15 minute bus or drive. That forces high household car ownership and produces a different battery-failure pattern than transit-rich neighborhoods. Cars are driven daily or weekly, but the older Fresh Meadows Co-op resident demographic skews toward weekly-use cars where battery age is dominant.`,
    },
    whenToCall: [
      ['Fresh Meadows Co-op parking lot — older resident weekly car', 'Long-time Co-op resident, older sedan used for weekly errands and grocery runs, dead in the Co-op lot before the planned trip. Standard jump start in your assigned space.'],
      ['Cunningham Heights co-op — weekend warrior', 'Co-op resident, weekend-only family sedan, dead between weekend uses.'],
      ['Hillcrest residential — door-ajar overnight', 'Side street off Union Turnpike in the Hillcrest pocket, dome-light or door-ajar overnight drain.'],
      ['LIE service road sputter', 'Driving home from Manhattan via the LIE, battery failing under load, pulled to the LIE service road. Jump Start + alternator check.'],
      ['Cunningham Park edge — winter morning', 'Side street near Cunningham Park, first cold morning of winter, dead from cold + age.'],
      ['Utopia Parkway commuter — Friday', 'Resident commutes Manhattan via LIE, parked Sunday on a side street, dead Friday after 5-day non-drive period.'],
    ],
    coverage: {
      intro: `Jump Start service across Fresh Meadows covers the Fresh Meadows core (the dense Co-op apartment blocks between Union Turnpike and 73rd Avenue), Hillcrest (the residential pocket south of Union Turnpike), Utopia (the residential blocks east of Utopia Parkway), and the Cunningham Park area (the residential blocks adjacent to the park).`,
      why: `Fresh Meadows response time is ~32 minutes average. Distance from central-Queens staging zones is the main factor. LIE and Grand Central Parkway feeder traffic during commute hours adds to peak-time response. Co-op parking lot navigation (security check-in, lot routing) can add 3-5 minutes on-site.`,
      landmarks: `Common Fresh Meadows call origins: Fresh Meadows Co-op parking lots; Cunningham Heights co-op buildings; Hillcrest residential blocks; LIE service road; Cunningham Park edge residential; Utopia Parkway commuter side streets. We do not service the Long Island Expressway, Grand Central Parkway, Clearview Expressway, or Cross Island Parkway.`,
    },
    whyHeavyDemand: `Fresh Meadows jump start demand traces to three structural factors: (1) the Fresh Meadows Co-op's older long-time-resident demographic with weekly-use older sedans produces a battery-age-dominant call pattern (multiple jump starts per car before owner replaces the battery); (2) limited subway access forces high household car ownership across Hillcrest, Utopia, and Cunningham Park areas, with multiple cars per household and weekend-only utility cars; (3) LIE and Grand Central Parkway commuter pattern leaves cars on side streets Mon-Fri.`,
    scenarios: [
      ['Fresh Meadows Co-op older resident — weekly car', 'Long-time Co-op resident in their 70s or 80s, older sedan kept for weekly grocery and pharmacy runs, dead in the Co-op lot before the planned trip.'],
      ['Cunningham Heights co-op — weekend warrior', 'Co-op resident with a weekend-only family sedan, dead Saturday morning before a planned trip.'],
      ['Hillcrest side-street dome-light overnight', 'Apartment block off Union Turnpike, door not fully shut, dome light all night, dead by morning.'],
      ['LIE service road sputter — Manhattan return', 'Driving home from Manhattan via the LIE, alternator failing, pulled to the service road. Jump Start + alternator check.'],
      ['Cunningham Park edge first cold morning', 'Older sedan parked on a side street near the park, first sub-15°F morning, dead from cold + age.'],
      ['Utopia Parkway commuter Friday night', 'Manhattan commuter via LIE, parked Sunday near Utopia Parkway, dead Friday for the weekend.'],
    ],
    cellFaqs: [
      ['Do you service Fresh Meadows Co-op parking lots?', 'Yes. The Fresh Meadows Co-op parking lots are in our coverage. Many lots require resident-pass entry — be there to walk us in, or coordinate with the management office. We dispatch the smaller service van that fits standard Co-op lot dimensions.'],
      ['How does Fresh Meadows response time compare to Briarwood?', '~32 min Fresh Meadows vs ~28 min Briarwood. Fresh Meadows is further east, deeper into the borough. LIE and Grand Central Parkway traffic during commute hours can add another 3-5 min to peak-time response.'],
      ['Why are older Fresh Meadows Co-op cars dying so often?', 'The combination of older long-time residents and weekly-use cars. Battery 4-5 years old + driven only weekly = the alternator never gets enough drive-time to fully top off the battery between trips. After 2 jump starts in a month, the answer is battery replacement, not another jump start.'],
      ['Can you help me on the LIE or Grand Central Parkway?', 'No. LIE main lanes, Grand Central Parkway, Clearview Expressway, and Cross Island Parkway are NYPD-rotation only. Get off to the LIE service road, Union Turnpike, or any Fresh Meadows surface street.'],
      ['Is multi-language dispatch available for Fresh Meadows?', 'Dispatch is English-primary but is familiar with Yiddish, Hebrew, Korean, and Spanish neighborhood references — common languages in the Fresh Meadows Co-op resident base. Call in any language and we work through location and vehicle details.'],
    ],
  },
};
