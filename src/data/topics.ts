// Long-tail topic pages for divisoriamallph.com
// Content is English (targets English search intent). Home page is Tagalog —
// see note in SubpageLayout. Each entry drives src/pages/[topic].astro.

export type Cluster =
  | 'food'
  | 'shopping'
  | 'transport'
  | 'attractions'
  | 'itineraries';

export interface TopicSection {
  heading: string;
  body?: string[];
  list?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  cluster: Cluster;
  kicker: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
  homeAnchors?: string[];
}

export const CLUSTERS: Record<Cluster, string> = {
  food: 'Food & Dining',
  shopping: 'Shopping & Wholesale',
  transport: 'Transport, Parking & Safety',
  attractions: 'Attractions & Heritage Walks',
  itineraries: 'Itineraries',
};

export const SITE = 'https://divisoriamallph.com';

export const TOPICS: Topic[] = [
  // ---------------------------------------------------------------- FOOD
  {
    slug: 'best-food-near-divisoria-mall-binondo-food-crawl',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Best Food Within a 5–10 Minute Walk of Divisoria Mall (Binondo Food Crawl)',
    metaTitle: 'Best Food Near Divisoria Mall: Binondo Food Crawl',
    metaDescription:
      'A walkable Binondo food crawl from Divisoria Mall: dumplings, hopia, siopao and noodles within 5–10 min, with budget, queues and a safe shopping-day route.',
    intro:
      'Divisoria Mall sits on the edge of Binondo, so a food crawl is a short walk, not a separate trip. The trick is sequencing: Tabora St’s street market is hottest and most crowded by late morning, so shop first, eat second.',
    sections: [
      {
        heading: 'Three “modes” for the crawl',
        body: ['Treat the crawl as three “modes” rather than a list of restaurants:'],
        list: [
          'Refuel mode (quick lunch) — a dumpling or noodle house for a hot, cheap, fast meal between shopping bursts.',
          'Takeaway mode (pasalubong) — hopia boxes and fried siopao you carry out; buy these last so they don’t get crushed.',
          'Stroll mode (afternoon tea) — a bakery or milk-tea stop as a calm, air-conditioned cool-down.',
        ],
      },
      {
        heading: 'Classic Binondo stops (verify on the day)',
        body: [
          'These are long-running, widely-known Binondo establishments cited as examples. Hours, prices, and branch status change, so confirm before you go.',
        ],
        list: [
          'Eng Bee Tin (Ongpin St) — the signature Binondo pasalubong: flaky hopia and ube/pandan pastries in gift boxes. Takeaway mode; buy near the end so boxes ride home upright.',
          'Dong Bei Dumpling — handmade dumplings, a perennial crowd-puller. Refuel mode; expect a queue at peak (no reservations).',
          'Wai Ying / Wai Ying Fast Food (Carvajal–Ongpin) — Cantonese-style roast meats, pancit, and congee. Popular and busy; good for a shared table.',
          'Shanghai Fried Siopao (near Binondo Church) — the famous fried siopao stall; cheap, grab-and-go. A perfect one-hand snack while you photograph the church.',
          'New Po-Heng Lumpia House (Carvajal St) — fresh, wet lumpia rolled to order, a nice contrast to fried stops.',
        ],
      },
      {
        heading: 'Suggested walking route',
        body: [
          'Divisoria Mall → Ongpin → Carvajal → Binondo Church loop (about 45–75 min, food-only; longer if you shop en route).',
          'Exit the mall toward the Ongpin St frontage, walk Ongpin to the Carvajal pocket for dumplings and lumpia, then continue to Plaza Lorenzo Ruiz and Binondo Church for the fried siopao takeaway. Return toward Tabora St, or hop a jeep or e-trike if your bags are heavy.',
          'Flow tip: buy takeaway hopia and siopao last, do the sit-down dumpling/noodle lunch in the middle, and keep the church photo stop as the turnaround point so you don’t double-cross the market in the heat.',
        ],
      },
      {
        heading: 'Crowd & bag-security tips',
        list: [
          'Wear a zippered crossbody worn in front. Binondo queues and narrow Ongpin sidewalks are exactly where distraction theft happens — keep only the cash you’ll spend in an easy pocket.',
          'Split your cash and your bags. Carry shopping and food in two separate totes so a spill or snatch doesn’t cost both; pay in small bills.',
          'Set a buddy and a meeting point. If you split up, agree on a recognizable milk-tea or bakery meet-up and a time; don’t leave bags unattended while you queue.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is the Binondo food strip from Divisoria Mall?',
        a: 'The Ongpin St corridor begins about a 5–10 minute walk from the mall’s Tabora St frontage; the church and densest cluster are roughly 10–15 minutes on foot.',
      },
      {
        q: 'Do I need reservations at Binondo restaurants?',
        a: 'Generally no — they’re walk-in. Famous spots like Dong Bei and Wai Ying can mean a 20–40 minute wait on weekends and holidays, so go early or on a weekday.',
      },
      {
        q: 'What’s a realistic food budget?',
        a: 'Ballpark ₱100–₱300 per person for a dumpling/noodle meal, ₱50–₱200 for hopia boxes, and ₱30–₱80 for fried siopao — confirm per shop, as prices change.',
      },
    ],
    related: [
      'divisoria-shopping-budget-eateries-and-street-food',
      'historic-chinesefood-restaurants-near-divisoria',
      'binondo-famous-hopia-and-pasalubong-near-divisoria',
      'coffee-shops-and-chill-spots-near-divisoria-mall',
      'half-day-tour',
    ],
    homeAnchors: ['kain', 'quick-info', 'malapit', 'faq'],
  },
  {
    slug: 'divisoria-shopping-budget-eateries-and-street-food',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Cheap Eats Near Divisoria Mall: Budget Eateries & Street Food',
    metaTitle: 'Cheap Eats Near Divisoria Mall (Under ₱120)',
    metaDescription:
      'Where to eat between shopping runs: carinderias, mami/goto stalls and street snacks within steps of Divisoria Mall, with prices, hygiene tips and a sit-down-vs-street plan.',
    intro:
      'Divisoria rewards shoppers who fuel cheaply. Around the mall you’ll find carinderias (home-style rice + ulam), mami/goto/lugaw stalls (noodle or rice-porridge soups), and street snacks (banana cue, camote cue, fish balls, kwek-kwek). Treat these as functional refuelling, not a food crawl.',
    sections: [
      {
        heading: 'What to look for',
        list: [
          'Carinderia rows along Tabora / Tutuban side — ₱50–₱90 plates (rice + 1–2 ulam). Fast, cash-only, no AC.',
          'Mami & lugaw stalls — ₱40–₱70 hot soups; ideal when you’re sweaty and tired.',
          'Street snack carts — banana cue / camote cue ₱10–₱20; fish balls / kwek-kwek ₱10–₱30 with dipping sauce.',
          'Binondo budget canteens (5–10 min) — a proper Chinese noodle bowl without the queue at famous spots.',
        ],
      },
      {
        heading: 'Hygiene & safety tips',
        list: [
          'Eat where there’s a turnover — busy stalls mean fresh stock and fast rotation.',
          'Carry small bills and alcohol wipes; many counters have no card and limited change.',
          'Secure your bags while eating — don’t leave a tote on an empty chair; wear it across your front.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I eat inside Divisoria Mall?',
        a: 'The mall has a basic food area (see the Divisoria Mall Food Court page); for cheaper street options, step out to Tabora/Tutuban.',
      },
      {
        q: 'Is street food safe?',
        a: 'Choose high-turnover stalls and freshly fried items; use your own wipes. This is general advice, not a guarantee.',
      },
      {
        q: 'What’s the cheapest filling meal?',
        a: 'A carinderia rice-ulam plate or a mami/lugaw bowl, roughly ₱40–₱90.',
      },
    ],
    related: [
      'best-food-near-divisoria-mall-binondo-food-crawl',
      'divisoria-mall-food-court',
      'coffee-shops-and-chill-spots-near-divisoria-mall',
    ],
    homeAnchors: ['kain', 'quick-info'],
  },
  {
    slug: 'historic-chinesefood-restaurants-near-divisoria',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Historic Chinese Restaurants Near Divisoria (Binondo Food Heritage)',
    metaTitle: 'Historic Chinese Restaurants Near Divisoria (Binondo)',
    metaDescription:
      'Binondo’s old-guard dining within a short walk of Divisoria Mall: dim sum, pancit and birthday noodles at long-running houses, with queue tips and budget.',
    intro:
      'Binondo is the world’s oldest Chinatown, and its restaurants are part of the experience — not just fuel. The draw is dim sum, pancit (noodle dishes tied to birthdays and celebrations), and roast meats. These are the “reward meal” after a heavy shopping morning.',
    sections: [
      {
        heading: 'Classic houses (examples)',
        list: [
          'Wai Ying / Wai Ying Fast Food — Cantonese roast meats, pancit, congee; busy, share-a-table culture.',
          'Dong Bei Dumpling — handmade northern-style dumplings; perennial queue.',
          'President Grand Palace / President Tea House — dim sum institution on Ongpin; bigger, louder, festive.',
          'Sincerity (Cooks/Restaurant) — known for crab and family-style Chinese plates.',
          'New Po-Heng Lumpia House — fresh lumpia rolled to order (lighter counterpoint to fried fare).',
        ],
      },
      {
        heading: 'Practical tips',
        list: [
          'Go early or off-peak — dim sum quality drops and queues grow after the lunch rush.',
          'Order to share — Chinese dining is communal; 3–4 dishes for two keeps cost and waste down.',
          'Cash + small bills — many old houses are cash-first; splitting the bill is easier with change.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is closest to Divisoria Mall?',
        a: 'The Ongpin/Carvajal cluster is roughly 8–12 minutes on foot from the mall’s Tabora St frontage.',
      },
      {
        q: 'Do I need a reservation?',
        a: 'Generally no — walk-in only; expect waits at famous houses on weekends.',
      },
      {
        q: 'What’s a fair budget?',
        a: 'Ballpark ₱150–₱400 per person for a shared meal; confirm per house.',
      },
    ],
    related: [
      'best-food-near-divisoria-mall-binondo-food-crawl',
      'binondo-famous-hopia-and-pasalubong-near-divisoria',
      'divisoria-shopping-budget-eateries-and-street-food',
    ],
    homeAnchors: ['kain', 'malapit'],
  },
  {
    slug: 'coffee-shops-and-chill-spots-near-divisoria-mall',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Coffee Shops & Chill Spots Near Divisoria Mall',
    metaTitle: 'Coffee & Chill Spots Near Divisoria Mall',
    metaDescription:
      'Where to cool down, recharge and regroup between Divisoria shopping: air-conditioned cafes, milk-tea bars and rest stops within steps or a short walk.',
    intro:
      'Divisoria is hot, crowded and sensory-overloading. A cafe isn’t a luxury here — it’s logistics: a place to sit, hydrate, count your purchases, and agree on the next move. Prioritise air-conditioning over ambience.',
    sections: [
      {
        heading: 'Where to stop (examples)',
        list: [
          'In-mall / Lucky Chinatown Mall cafes — air-con, clean restrooms, card-friendly; ideal first regroup.',
          'Milk-tea kiosks along Tabora — quick sugar hit, grab-and-go (see Milk Tea & Snacks Along Tabora St).',
          'Binondo coffee bars (Ongpin/Carvajal) — sit-down, slower; better as a post-shopping wind-down.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Pick a cafe with a visible queue of locals — it’s a safe, legitimate restroom and recharge stop.',
          'Hold bags on your lap or between your feet — don’t prop a tote on an empty chair.',
          'Set the next meet-up time before you sit — signal dies in crowds; decide in person.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there air-con near the mall?',
        a: 'Yes — inside Divisoria Mall and Lucky Chinatown Mall, both a few minutes from Tabora St.',
      },
      {
        q: 'Best meeting point if we split up?',
        a: 'A named cafe inside or next to the mall; agree the time face-to-face first.',
      },
      {
        q: 'How much for a coffee break?',
        a: 'Ballpark ₱80–₱180 for drinks; confirm per outlet.',
      },
    ],
    related: [
      'milk-tea-and-snacks-tabora',
      'divisoria-mall-food-court',
      'best-food-near-divisoria-mall-binondo-food-crawl',
    ],
    homeAnchors: ['kain', 'malapit'],
  },
  {
    slug: 'binondo-famous-hopia-and-pasalubong-near-divisoria',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Binondo Hopia & Pasalubong Near Divisoria (Take-Home Guide)',
    metaTitle: 'Binondo Hopia & Pasalubong Near Divisoria',
    metaDescription:
      'The take-home food crawl: hopia, ube treats and kakanin within a short walk of Divisoria Mall, with what to buy, how to pack and shelf-life tips.',
    intro:
      'Pasalubong (take-home gifts) is the point of a Binondo trip. The classics are hopia (flaky bean/ube pastries), ube/pandan treats, and kakanin (rice cakes). Buy these at the end of your route so they don’t get squashed in your shopping totes.',
    sections: [
      {
        heading: 'Where to buy (examples)',
        list: [
          'Eng Bee Tin (Ongpin) — the signature ube hopia and modern flavours; gift-boxed.',
          'Salazar Bakery — old-guard hopia de custard / hopia baboy, no-frills and beloved.',
          'Ho Land — another Binondo hopia name with boxed assortments.',
          'Kakanin stalls — bilao of kutsinta, sapin-sapin, bibingka for bigger groups.',
        ],
      },
      {
        heading: 'Packing & shelf-life tips',
        list: [
          'Carry a separate rigid tote for boxes — never stack wholesale bags on top.',
          'Ask shelf life at the counter — hopia varies; some keep days, fresh kakanin is same-day.',
          'Buy fragile ube treats last, near your ride — they bruise easily in a crowded market.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is the hopia belt from Divisoria Mall?',
        a: 'The Ongpin stretch is about a 5–10 minute walk from the mall’s Tabora St side.',
      },
      {
        q: 'Which hopia is the famous one?',
        a: 'Eng Bee Tin’s ube hopia is the modern signature; Salazar is the traditionalist favourite — verify which branch is open.',
      },
      {
        q: 'How long do they keep?',
        a: 'Varies by type; ask at the counter — some hopia keep several days, fresh kakanin is best same-day.',
      },
    ],
    related: [
      'best-food-near-divisoria-mall-binondo-food-crawl',
      'historic-chinesefood-restaurants-near-divisoria',
      'coffee-shops-and-chill-spots-near-divisoria-mall',
    ],
    homeAnchors: ['kain', 'malapit'],
  },
  {
    slug: 'halal-and-vegetarian-near-divisoria',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Halal & Vegetarian Food Near Divisoria / Binondo',
    metaTitle: 'Halal & Vegetarian Food Near Divisoria',
    metaDescription:
      'Muslim-friendly and meat-free options near Divisoria Mall: halal eateries in Binondo and vegetarian dishes from temples and meat-free Chinese kitchens, with what to ask for.',
    intro:
      'Binondo has a long Muslim-trader presence, so halal-certified and Muslim-friendly eateries exist along Ongpin and side streets — look for halal signage. For vegetarians, the easiest wins are Buddhist temple vegetarian food (near Seng Guan Temple) and meat-free Chinese dishes (vegetable lumpia, tofu, pancit with no meat).',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Halal-signposted eateries on Ongpin / near mosques — rice meals, noodles, grilled items; confirm the certificate.',
          'Seng Guan Temple-area vegetarian stalls — simple Buddhist vegetarian plates, often early-lunch only.',
          'Meat-free Chinese dishes anywhere — fresh lumpia, mapo tofu (ask for no meat), vegetable pancit.',
          'In-mall food court — some stalls offer veggie rice meals; check ingredients.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Look for the halal certificate on the wall — don’t assume; ask.',
          'For vegetarian, specify “no meat, no shrimp paste” — Filipino/Chinese cooking often hides anchovy or oyster sauce.',
          'Eat temple vegetarian early — it’s made in limited batches and disappears by mid-afternoon.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there halal food near Divisoria?',
        a: 'Yes, Binondo has Muslim-friendly eateries along Ongpin and near mosques — confirm the halal certificate on site.',
      },
      {
        q: 'Where can vegetarians eat?',
        a: 'Temple-vegetarian stalls near Seng Guan and meat-free Chinese dishes; always confirm no fish/shrimp sauce.',
      },
      {
        q: 'How far from the mall?',
        a: 'The Binondo halal/vegetarian pocket is roughly 8–12 minutes on foot.',
      },
    ],
    related: [
      'best-food-near-divisoria-mall-binondo-food-crawl',
      'seng-guan-temple',
      'divisoria-shopping-budget-eateries-and-street-food',
    ],
    homeAnchors: ['kain'],
  },
  {
    slug: 'divisoria-mall-food-court',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Divisoria Mall Food Court & In-Mall Dining',
    metaTitle: 'Divisoria Mall Food Court & Dining',
    metaDescription:
      'What’s inside Divisoria Mall to eat: the food court, snacks and A/C rest stops, with budget, best times and when to use it vs. street food.',
    intro:
      'When the street heat or the crowd gets to you, the mall’s own food area is the low-friction choice: air-conditioning, clean restrooms, and card-friendly counters. It’s pricier and less “authentic” than Tabora or Binondo, but unbeatable for a secure, cool pit stop with your bags in sight.',
    sections: [
      {
        heading: 'What you’ll find (examples)',
        list: [
          'Food-court stalls — rice meals, noodles, snacks; consistent, sanitized, air-con.',
          'Snack/dessert kiosks — halo-halo, turon, milk tea near entrances.',
          'A/C seating — the real value: a place to sit with bags on your lap and regroup.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Use it mid-shop, not as your main meal — save the Binondo crawl for the “real” food.',
          'Keep bags in your eyeline — even indoors, don’t leave a tote on a chair.',
          'Top up water here — hydration matters more than saving ₱20 on the street.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there food inside Divisoria Mall?',
        a: 'Yes — a food court / snack area with air-con seating and restrooms.',
      },
      {
        q: 'Is it cheaper than outside?',
        a: 'Usually a bit pricier than street food, but cooler and more secure.',
      },
      {
        q: 'When should I eat here vs. Binondo?',
        a: 'Use the mall for a quick in-building pit stop; go to Binondo for the proper food crawl.',
      },
    ],
    related: [
      'divisoria-shopping-budget-eateries-and-street-food',
      'coffee-shops-and-chill-spots-near-divisoria-mall',
      'milk-tea-and-snacks-tabora',
    ],
    homeAnchors: ['kain'],
  },
  {
    slug: 'milk-tea-and-snacks-tabora',
    cluster: 'food',
    kicker: 'Food & Dining',
    title: 'Milk Tea & Snacks Along Tabora St (Divisoria)',
    metaTitle: 'Milk Tea & Snacks Along Tabora St',
    metaDescription:
      'Grab-and-go sugar and snacks on Tabora St: milk-tea kiosks, turon, and packaged pasalubong near Divisoria Mall, with prices and a no-bag-fumble tip.',
    intro:
      'Tabora St is a snack corridor: milk-tea franchises and local kiosks, plus turon, banana cue and packaged snacks sold by the bag. These are the between-stalls energy source — not a meal, just momentum.',
    sections: [
      {
        heading: 'What to grab (examples)',
        list: [
          'Milk-tea kiosks — ₱50–₱120; choose sealed cups you can carry.',
          'Turon / banana cue carts — ₱10–₱20; eat immediately, greasy fingers.',
          'Packaged snacks & pasalay (chicharon, nuts) — by the bag for take-home; check seals.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'One hand on the drink, one on the bag — don’t set a tote down to free a hand.',
          'Prefer sealed, branded packs for pasalubong; avoid loose repacked items.',
          'Carry small bills — kiosks are cash-first and slow with change.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there milk tea near Divisoria Mall?',
        a: 'Yes — kiosks line Tabora St just outside the mall, 1–3 minutes away.',
      },
      {
        q: 'What snacks make good pasalubong?',
        a: 'Sealed packaged chicharon, nuts and turon supplies; check packaging is intact.',
      },
      {
        q: 'How much?',
        a: 'Milk tea ₱40–₱120, fried snacks ₱10–₱30 (ballpark).',
      },
    ],
    related: [
      'coffee-shops-and-chill-spots-near-divisoria-mall',
      'divisoria-mall-food-court',
      'divisoria-shopping-budget-eateries-and-street-food',
    ],
    homeAnchors: ['kain'],
  },

  // ---------------------------------------------------------------- SHOPPING
  {
    slug: 'tabora-street-crafts-supplies',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Tabora St Crafts & Supplies Near Divisoria Mall',
    metaTitle: 'Tabora St Crafts & Supplies (Divisoria)',
    metaDescription:
      'Ribbons, artificial flowers, DIY and event supplies along Tabora St: where to walk, what to buy in bulk, bargaining and bag-security tips.',
    intro:
      'Tabora St is the craft-and-sundries spine of Divisoria: ribbons, artificial flowers, balloons, DIY, gift wrap, candles. It’s the first thing you hit leaving the mall — do it before the heat and crowds build.',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Ribbon & wrap rows — by the roll; cheaper per metre in bulk.',
          'Artificial flowers / foam — for events and décor.',
          'DIY & school craft supplies — beads, glue, boards.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Negotiate on volume — ask “how much for 10 / a whole pack?”',
          'Keep receipts and count before leaving — easy to lose track at busy stalls.',
          'Wear a front-crossbody bag — Tabora sidewalks are tight and distraction-theft prone.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where are craft supplies in Divisoria?',
        a: 'Along Tabora St immediately outside Divisoria Mall, plus inside the mall.',
      },
      {
        q: 'Can I buy in bulk?',
        a: 'Yes — most stalls sell per roll/pack with lower per-unit prices in volume.',
      },
      {
        q: 'Best day to go?',
        a: 'Weekday mornings are cooler and less crowded.',
      },
    ],
    related: ['mall-vs-999-vs-168', 'wedding-debut-souvenirs', 'toys-and-party-needs'],
    homeAnchors: ['quick-info', 'biyahe'],
  },
  {
    slug: 'cheap-fabrics-textile',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Cheap Fabrics & Textiles in Divisoria (Tabora St Guide)',
    metaTitle: 'Cheap Fabrics & Textiles in Divisoria',
    metaDescription:
      'Buying cloth by the yard in Divisoria: the Tabora textile stretch, per-yard prices, quality checks and tailor tips for first-timers.',
    intro:
      'Divisoria is Manila’s fabric capital. The Tabora/open-air textile stretch sells cotton, polyester, lace, and native fabrics by the yard at wholesale rates. Bring a tape measure mental note and buy a little extra for shrinkage/hems.',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Cotton / polyester bolts — everyday sewing, ₱30–₱120/yd.',
          'Lace & trims — by the metre for garments and crafts.',
          'Native / specialty cloth — check authenticity and weave.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Check the bolt end for width & flaws before committing.',
          'Buy 10–20% extra for hems and mistakes.',
          'Ask for the “tindahan” (retail) price if buying less than a bolt — wholesale is per full piece.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I buy fabric in Divisoria?',
        a: 'Along Tabora St and adjacent blocks, plus the mall’s textile section.',
      },
      {
        q: 'How much is cloth per yard?',
        a: 'Ballpark ₱30–₱300+ depending on type; confirm per stall.',
      },
      {
        q: 'Can I get it tailored nearby?',
        a: 'Yes, tailors operate around Divisoria — ask stall owners for referrals.',
      },
    ],
    related: ['mall-vs-999-vs-168', 'mall-airconditioned-sections', 'tabora-street-crafts-supplies'],
    homeAnchors: ['quick-info', 'biyahe'],
  },
  {
    slug: 'mall-vs-999-vs-168',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Divisoria Mall vs 999 vs 168: Which to Shop?',
    metaTitle: 'Divisoria Mall vs 999 vs 168 Mall',
    metaDescription:
      'Comparing Divisoria’s three wholesale hubs — what each is best for, A/C vs open-air, prices and crowds — so you go to the right one first.',
    intro:
      'Don’t assume one building has everything. Divisoria Mall = organized, air-con, mixed goods. 999 Mall = huge open wholesale, clothes/home. 168 Mall = bargain bins, gifts, accessories. Walk the triangle; compare before buying big.',
    sections: [
      {
        heading: 'Quick comparison',
        list: [
          'Divisoria Mall — mixed goods, air-con, easy first stop; organized and cooler.',
          '999 Mall — clothing, home, volume; open and vast.',
          '168 Mall — gifts, accessories, bargains; dense and cheap.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Price-check across two hubs before committing to bulk.',
          'Use the A/C mall to regroup between the open-air ones.',
          'Mind the walk — bags get heavy; consider a trolley or taxi between hubs.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is closest to Tabora St?',
        a: 'Divisoria Mall is on Tabora itself; 999 and 168 are a 5–10 min walk.',
      },
      {
        q: 'Which is air-conditioned?',
        a: 'Divisoria Mall offers the most A/C comfort; 999/168 are largely open.',
      },
      {
        q: 'Are prices the same?',
        a: 'Roughly similar wholesale; always compare across hubs for bulk buys.',
      },
    ],
    related: [
      'mall-airconditioned-sections',
      'wholesale-clothing-bargaining',
      'divisoria-parking-guide',
    ],
    homeAnchors: ['quick-info', 'biyahe'],
  },
  {
    slug: 'wedding-debut-souvenirs',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Wedding & Debut Souvenirs in Divisoria (Bulk Guide)',
    metaTitle: 'Wedding & Debut Souvenirs Divisoria',
    metaDescription:
      'Bulk event giveaways in Divisoria: where to buy souvenirs by the hundreds, minimum orders, personalization and packing tips for weddings and debuts.',
    intro:
      'Divisoria is the Philippines’ go-to for event souvenirs — wedding and 18th-birthday (“debut”) tokens by the hundred. Think personalized trinkets, candles, soaps, tumblers, pouches. Buy plain in bulk, then personalize on-site or nearby.',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Personalized tokens — engraved/printed items; ask MOQ.',
          'Candles & soaps — classic wedding favors.',
          'Pouches & boxes — for packing your own.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Confirm minimum order & lead time — personalization isn’t instant.',
          'Inspect a sample before approving a bulk run.',
          'Budget for packing supplies — boxes/ribbon from the Tabora St crafts page.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I buy souvenirs in bulk in Divisoria?',
        a: 'Yes — suppliers along Tabora and inside the malls sell by the hundred.',
      },
      {
        q: 'How early should I order?',
        a: 'Weeks ahead for personalized items; plain stock can be same-day.',
      },
      {
        q: 'What’s a per-piece price?',
        a: 'Ballpark ₱15–₱150 in volume; confirm per supplier.',
      },
    ],
    related: ['tabora-street-crafts-supplies', 'toys-and-party-needs', 'mall-vs-999-vs-168'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'christmas-decorations',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Christmas Decorations & Parol in Divisoria (Seasonal Guide)',
    metaTitle: 'Christmas Decorations Divisoria (Parol & Lights)',
    metaDescription:
      'Where to buy parol, lights and ornaments in Divisoria from November to January, with timing, bulk tips and how to carry fragile décor home.',
    intro:
      'Divisoria is Manila’s Christmas HQ. The parol (star lantern) is the icon, plus fairy lights, ornaments and tree supplies. It’s a seasonal crush — go early in the season, and protect fragile items in a rigid tote.',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Parol — handmade star lanterns in many sizes.',
          'Fairy lights & wiring — check plug type and length.',
          'Ornaments & tree skirts — by the box for bulk.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Test lights before buying if the stall allows.',
          'Carry a rigid box for parol/glass ornaments.',
          'Go early season — best stock sells out by mid-December.',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is Christmas stock available?',
        a: 'Roughly November to January; peak choice is early season.',
      },
      {
        q: 'Where are parol sold?',
        a: 'Along Tabora St and inside Divisoria’s malls.',
      },
      {
        q: 'How do I carry fragile décor?',
        a: 'In a separate rigid tote, bought last in your trip.',
      },
    ],
    related: ['tabora-street-crafts-supplies', 'mall-airconditioned-sections', 'wedding-debut-souvenirs'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'wholesale-clothing-bargaining',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Wholesale Clothing & Bargaining in Divisoria',
    metaTitle: 'Wholesale Clothing & Bargaining Divisoria',
    metaDescription:
      'How to buy clothes in bulk in Divisoria: where to go, bargaining tactics, minimums, quality checks and a caution on counterfeit brands.',
    intro:
      'Clothes are Divisoria’s backbone — wholesale tees, dresses, underwear, native wear. Bargaining is expected on loose/retail buys; true wholesale is fixed per dozen. Know the difference.',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Per-dozen wholesale racks — fixed price, no haggle.',
          'Loose/retail piles — room to negotiate.',
          'Native & costume pieces — barong, sayá, seasonal.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Ask “presyo pakete?” (per dozen) vs single price.',
          'Check seams, zippers, stains before paying.',
          'Caution on branded goods — counterfeit items carry legal/quality risk; buy unbranded.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I bargain in Divisoria?',
        a: 'Yes for loose/retail buys; per-dozen wholesale is usually fixed.',
      },
      {
        q: 'Where’s the best clothing wholesale?',
        a: '999 and 168 Malls plus Tabora; compare across hubs.',
      },
      {
        q: 'Are branded items safe to buy?',
        a: 'Unbranded is safer; “designer” goods here are often counterfeit — buy at your own risk.',
      },
    ],
    related: ['mall-vs-999-vs-168', 'cheap-fabrics-textile', 'toys-and-party-needs'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'toys-and-party-needs',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Toys & Party Supplies in Divisoria (Bulk Guide)',
    metaTitle: 'Toys & Party Supplies Divisoria',
    metaDescription:
      'Balloons, piñatas, favors and toys in Divisoria: where to buy in bulk, age-safety notes and packing tips for parties and resellers.',
    intro:
      'Divisoria covers birthday and event needs: balloons, piñatas, party favors, wrapping, and general toys. Buy decor + favors together to save trips, and keep small toys away from toddlers (choking risk).',
    sections: [
      {
        heading: 'What to look for (examples)',
        list: [
          'Balloons & piñatas — by piece or bulk.',
          'Party favors & loot bags — per pack.',
          'General toys — check age labels; avoid tiny parts for young kids.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Check age grading on toy packaging for safety.',
          'Inflate balloons at home — inflated ones are hard to carry.',
          'Bundle with craft supplies from the Tabora St crafts page.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I buy party supplies in Divisoria?',
        a: 'Along Tabora St and inside the malls, often near the souvenir stalls.',
      },
      {
        q: 'Are toys safe?',
        a: 'Check age labels; this guide covers general toys, not fireworks.',
      },
      {
        q: 'Can I buy in bulk?',
        a: 'Yes — favors and balloons sell per pack/box at volume rates.',
      },
    ],
    related: ['wedding-debut-souvenirs', 'tabora-street-crafts-supplies', 'christmas-decorations'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'mall-airconditioned-sections',
    cluster: 'shopping',
    kicker: 'Shopping & Wholesale',
    title: 'Air-Conditioned Sections of Divisoria Mall',
    metaTitle: 'Air-Con Sections of Divisoria Mall',
    metaDescription:
      'Where to find air-conditioning inside Divisoria Mall: which areas are cooled, when to use them to rest and regroup, and how prices compare to the street.',
    intro:
      'The mall’s air-con sections are your climate control — cooler aisles, clean restrooms, and card-friendly counters. They cost a little more than the street but buy you comfort, security (bags in sight), and a place to sit.',
    sections: [
      {
        heading: 'What’s typically inside (examples)',
        list: [
          'A/C retail floors — mixed goods, organized stalls.',
          'Food court / snack area — see the Divisoria Mall Food Court page.',
          'Rest seating near entrances — regroup points.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Rotate: street (cheap) → mall A/C (rest) → street to manage heat and bags.',
          'Keep bags in your lap even indoors.',
          'Use restrooms here rather than street facilities.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Divisoria Mall air-conditioned?',
        a: 'Parts of it are — use those zones to cool down and regroup.',
      },
      {
        q: 'Is it more expensive inside?',
        a: 'Usually a bit more than open Tabora, but cooler and more secure.',
      },
      {
        q: 'When should I use it?',
        a: 'Midday heat or whenever you need a safe, cool break with bags in sight.',
      },
    ],
    related: ['divisoria-mall-food-court', 'mall-vs-999-vs-168', 'coffee-shops-and-chill-spots-near-divisoria-mall'],
    homeAnchors: ['quick-info'],
  },

  // ---------------------------------------------------------------- TRANSPORT
  {
    slug: 'from-bgc-makati-qc-to-divisoria',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'How to Get to Divisoria from BGC, Makati & QC',
    metaTitle: 'BGC, Makati & QC to Divisoria (Commute)',
    metaDescription:
      'Practical commutes to Divisoria Mall from Bonifacio Global City, Makati and Quezon City: train + jeep routes, ride-hailing and travel-time realities.',
    intro:
      'Train is cheapest and avoids Divisoria traffic; LRT-1 Doroteo Jose is the key interchange. From there it’s a short walk or jeep to Tabora St. Ride-hailing drops you closer but costs more and still hits traffic near the market.',
    sections: [
      {
        heading: 'Options (examples)',
        list: [
          'MRT-3 → LRT-1 (Doroteo Jose) — then walk/jeep to Tabora.',
          'LRT-2 (Recto) — short jeep/trike to Divisoria.',
          'Ride-hailing — set drop-off to the mall’s Tabora St entrance.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Travel off-peak (avoid 7–9 & 17–19) — trains and roads clog.',
          'Keep bags front-facing on crowded trains.',
          'Have the mall address ready for drivers: 866 Tabora St, Binondo.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Nearest train station to Divisoria Mall?',
        a: 'LRT-1 Doroteo Jose, then a short walk/jeep to Tabora St.',
      },
      {
        q: 'How long from Makati?',
        a: 'Roughly 45–75 minutes by train; longer by road at peak.',
      },
      {
        q: 'Is ride-hailing worth it?',
        a: 'For groups or heavy hauls, yes — but expect traffic near the market.',
      },
    ],
    related: ['lrt-1-doroteo-jose-exit', 'divisoria-parking-guide', 'etrike-jeepney-routes'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'divisoria-parking-guide',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'Divisoria Parking Guide (Where to Park Near the Mall)',
    metaTitle: 'Divisoria Parking Guide (Near Mall)',
    metaDescription:
      'Parking near Divisoria Mall and Tabora St: paid lots, what to expect, rates ballpark, and safety tips for leaving a car with shopping inside.',
    intro:
      'Driving to Divisoria is doable but parking is the bottleneck. Use a paid lot near the mall rather than hunting street space. Arrive early; on weekends and paydays it’s a scramble.',
    sections: [
      {
        heading: 'Options (examples)',
        list: [
          'Mall-adjacent pay lots — closest, priciest, most secure.',
          'Tutuban-area lots — more spaces, slightly farther.',
          'Street parking — scarce and often tow/blocked; not recommended.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Don’t leave visible shopping in the car — secure the trunk.',
          'Take a parking stub photo — easy to forget level/zone.',
          'Prefer lots with attendants over dark side streets.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there parking at Divisoria Mall?',
        a: 'Paid lots nearby; on-site/street space is limited — arrive early.',
      },
      {
        q: 'How much is parking?',
        a: 'Ballpark ₱40–₱100+ per entry/hour; confirm per lot.',
      },
      {
        q: 'Is it safe to leave purchases in the car?',
        a: 'Stow them in the trunk out of sight; use attended lots.',
      },
    ],
    related: ['from-bgc-makati-qc-to-divisoria', 'etrike-jeepney-routes', 'safety-pickpockets-divisoria'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'safety-pickpockets-divisoria',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'Divisoria Safety: Avoiding Pickpockets & Bag Snatchers',
    metaTitle: 'Divisoria Safety: Pickpockets & Bags',
    metaDescription:
      'Realistic crowd-safety habits for Divisoria: how to carry cash and bags, spot distraction theft, and keep your shopping haul safe in the market.',
    intro:
      'Divisoria is safe to visit but crowds are where theft happens. The rule: your bag is always in front of you and one hand is on it. Treat cash and phone as things someone else wants in a press of bodies.',
    sections: [
      {
        heading: 'Habits (examples)',
        list: [
          'Zippered front-crossbody — not a sling on your back.',
          'Split cash — only what you’ll spend in an easy pocket; rest deeper.',
          'Buddy system — one holds bags while the other queues.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Ignore “accidental” spills or requests that pull your attention away from your bag.',
          'Use small bills — flashing a thick wad invites attention.',
          'Set a meet-up point — signal dies in crowds; agree a spot face-to-face.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Divisoria safe for tourists?',
        a: 'Yes, but crowded — use front-bag habits and stay alert in queues.',
      },
      {
        q: 'How should I carry cash?',
        a: 'Small bills in an easy pocket; keep the bulk hidden and split from your bag.',
      },
      {
        q: 'What if I’m alone?',
        a: 'Wear the bag in front, avoid displaying valuables, and take breaks in A/C zones.',
      },
    ],
    related: ['divisoria-parking-guide', 'best-food-near-divisoria-mall-binondo-food-crawl', 'etrike-jeepney-routes'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'etrike-jeepney-routes',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'E-Trike & Jeepney Routes Around Divisoria',
    metaTitle: 'E-Trike & Jeepney Routes Divisoria',
    metaDescription:
      'Last-mile rides around Divisoria: jeepney lines, e-trikes and pedicabs between the mall, Tabora, Tutuban and Binondo, with fares and safety notes.',
    intro:
      'For short hops around Divisoria, jeepneys and e-trikes fill the gaps trains don’t. But for distances under ~500 m, walking beats bargaining with a trike. Use rides mainly to cross between hubs (mall ↔ 999/168 ↔ Binondo) with heavy bags.',
    sections: [
      {
        heading: 'Options (examples)',
        list: [
          'Jeepney along Tabora/Recto — to Quiapo, Binondo, Tutuban.',
          'E-trike / pedicab — block-to-block; agree the fare before boarding.',
          'Walk — mall to Tabora is steps; to Binondo ~10 min.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Agree trike fare up front — no meters on pedicabs.',
          'Carry exact fare for jeepneys; they rarely have change.',
          'Keep bag in front even on a short ride.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I get from the mall to Binondo?',
        a: 'Walk (~10 min) or a short jeepney/e-trike; walking is often easiest.',
      },
      {
        q: 'Do e-trikes use meters?',
        a: 'Usually no — agree the fare before you board.',
      },
      {
        q: 'How much is a jeepney?',
        a: 'Minimal (₱13+ standard minimum, ballpark); pay exact.',
      },
    ],
    related: ['from-bgc-makati-qc-to-divisoria', 'lrt-1-doroteo-jose-exit', 'divisoria-parking-guide'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'lrt-1-doroteo-jose-exit',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'LRT-1 Doroteo Jose: Exiting to Divisoria Mall',
    metaTitle: 'LRT-1 Doroteo Jose to Divisoria',
    metaDescription:
      'The key train exit for Divisoria: which LRT-1 Doroteo Jose exit to take, the walk/jeep to Tabora St, and tips for carrying shopping on the train.',
    intro:
      'Doroteo Jose is the LRT-1 stop that connects you to Divisoria. From the station, head toward Recto/Tabora; it’s walkable but with heavy hauls a jeep or e-trike covers the last stretch. This is the backbone commute for most shoppers.',
    sections: [
      {
        heading: 'Route (examples)',
        list: [
          'Alight at Doroteo Jose — follow signs toward Recto/Tabora side.',
          'Walk ~10–15 min or take a jeepney/e-trike to the mall.',
          'Return the same way — station is well signed back to LRT-1.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Board with bags in front — trains get packed.',
          'Buy a stored-value card if doing multiple LRT trips.',
          'Walk if light, ride if loaded — the last stretch is short either way.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which LRT station is nearest Divisoria Mall?',
        a: 'LRT-1 Doroteo Jose; then ~10–15 min walk or short jeep to Tabora St.',
      },
      {
        q: 'Can I bring shopping on the train?',
        a: 'Yes — keep bags in front and avoid rush hour.',
      },
      {
        q: 'Walking or riding from the station?',
        a: 'Walk if light (~10–15 min); ride if you have heavy hauls.',
      },
    ],
    related: ['from-bgc-makati-qc-to-divisoria', 'etrike-jeepney-routes', 'divisoria-parking-guide'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'rainy-season-flooding',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'Divisoria in the Rainy Season: Flooding & Wet-Weather Tips',
    metaTitle: 'Divisoria Rainy Season & Flooding',
    metaDescription:
      'How Manila’s wet season affects Divisoria: flood-prone stretches, best months to avoid, and how to shop safely when it pours.',
    intro:
      'Divisoria’s open-air sections are low-lying and pool water in heavy rain. The wet season brings afternoon thunderstorms — shop in the morning and clear out before they hit. The A/C mall stays dry and is your refuge.',
    sections: [
      {
        heading: 'What to expect (examples)',
        list: [
          'Tabora open stretch — first to flood; wear sandals, not closed shoes.',
          'Afternoon downpours — predictable in wet months; plan around them.',
          'Mall as shelter — stay dry, shop indoors, wait it out.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Wear quick-dry footwear and a packable rain jacket.',
          'Protect purchases — bring a waterproof tote or liner.',
          'Check the forecast and aim for a morning trip in wet months.',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is Divisoria flood-prone?',
        a: 'Mainly the rainy season (roughly Jun–Oct); open Tabora stretches pool first.',
      },
      {
        q: 'Best time of year to visit?',
        a: 'Dry months (roughly Dec–May) are most comfortable.',
      },
      {
        q: 'What if it rains while I’m there?',
        a: 'Use the A/C mall as shelter and protect bags with a waterproof liner.',
      },
    ],
    related: ['mall-airconditioned-sections', 'safety-pickpockets-divisoria', 'divisoria-parking-guide'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'accessibility-wheelchair',
    cluster: 'transport',
    kicker: 'Transport, Parking & Safety',
    title: 'Divisoria Accessibility: Wheelchair & Stroller Tips',
    metaTitle: 'Divisoria Accessibility (Wheelchair/Stroller)',
    metaDescription:
      'Getting around Divisoria with a wheelchair or stroller: where it’s step-free, the A/C mall’s edge, and realistic limits of the open-air market.',
    intro:
      'The mall’s A/C sections are your friend — step-free, elevators, restrooms. The open-air Tabora market is the challenge: uneven pavement, curbs, and crowding make wheelchairs and strollers tough. Plan to do most accessible shopping inside, and treat the street as a short, assisted visit.',
    sections: [
      {
        heading: 'What to expect (examples)',
        list: [
          'Mall elevators & wide aisles — manageable.',
          'Tabora sidewalk crowds — need a helper; go weekday, early.',
          'Tutuban/999/168 — bigger floor plates but busy; quieter off-peak.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Go weekday morning — fewest obstacles and people.',
          'Use the mall as base — step-free rest and restrooms.',
          'Bring a helper for curb cuts and crowd gaps on the street.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Divisoria Mall wheelchair accessible?',
        a: 'The A/C mall has step-free entries and elevators — the easiest part.',
      },
      {
        q: 'Can I use a stroller at Tabora St?',
        a: 'It’s hard — narrow, uneven, crowded; go early with a helper.',
      },
      {
        q: 'Best time for accessibility?',
        a: 'Weekday mornings, using the mall as your accessible base.',
      },
    ],
    related: ['mall-airconditioned-sections', 'rainy-season-flooding', 'family-friendly-kids'],
    homeAnchors: ['quick-info'],
  },

  // ---------------------------------------------------------------- ATTRACTIONS
  {
    slug: 'binondo-church-guide',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Binondo Church (Minor Basilica of San Lorenzo Ruiz) Guide',
    metaTitle: 'Binondo Church Guide (Binondo, Manila)',
    metaDescription:
      'Visiting Binondo Church from Divisoria Mall: walking distance, what to see, mass times etiquette, and how to pair it with the Binondo food crawl.',
    intro:
      'Binondo Church (Minor Basilica of San Lorenzo Ruiz) is the historic heart of Chinatown and a natural anchor for a Divisoria + Binondo day. It’s free, photogenic, and a logical place to pivot from shopping to the food walk.',
    sections: [
      {
        heading: 'What to see (examples)',
        list: [
          'The basilica façade & interior — rebuilt after wartime damage.',
          'Plaza Lorenzo Ruiz — the square out front (see the Plaza Lorenzo Ruiz page).',
          'Nearby Ongpin — the food strip begins here.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Dress modestly if you’ll step inside.',
          'Go weekday morning to avoid Sunday mass crowds.',
          'Photo from the plaza — the front view is the classic shot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is Binondo Church from Divisoria Mall?',
        a: 'About a 10–15 minute walk from the mall’s Tabora St side into Binondo.',
      },
      {
        q: 'Is there an entrance fee?',
        a: 'No — it’s a working church, free to visit.',
      },
      {
        q: 'Can I combine it with food?',
        a: 'Yes — it’s the natural turnaround point of the Binondo food crawl.',
      },
    ],
    related: ['best-food-near-divisoria-mall-binondo-food-crawl', 'plaza-lorenzo-ruiz-arch', 'seng-guan-temple'],
    homeAnchors: ['malapit'],
  },
  {
    slug: 'escolta-heritage-walk',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Escolta Heritage Walk from Divisoria',
    metaTitle: 'Escolta Heritage Walk (Near Divisoria)',
    metaDescription:
      'A short heritage walk from Divisoria to Escolta: old banks, art-deco buildings and calm streets, with a route and photo stops.',
    intro:
      'Escolta was Manila’s pre-war commercial spine — now a heritage stroll of art-deco and neoclassical façades, indie cafes, and weekend markets. It’s a breather from Divisoria’s chaos and pairs well with Binondo.',
    sections: [
      {
        heading: 'What to see (examples)',
        list: [
          'First United Building & old banks — restored façades.',
          'Weekend pop-up markets — check schedules.',
          'Cafes & galleries — rest stops along the way.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Wear good shoes — it’s a walking route.',
          'Bring a camera — the architecture is the draw.',
          'Combine with Binondo rather than backtracking through the market.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I get to Escolta from Divisoria?',
        a: 'About a 15–20 minute walk or a short jeep from Tabora.',
      },
      {
        q: 'Is it worth visiting?',
        a: 'Yes if you like heritage architecture and calmer streets after the market.',
      },
      {
        q: 'Any cost?',
        a: 'Free to walk; cafes/markets are optional.',
      },
    ],
    related: ['binondo-church-guide', 'san-nicolas-heritage', 'coffee-shops-and-chill-spots-near-divisoria-mall'],
    homeAnchors: ['malapit'],
  },
  {
    slug: 'san-nicolas-heritage',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'San Nicolas Heritage Walk (Near Divisoria)',
    metaTitle: 'San Nicolas Heritage Walk (Manila)',
    metaDescription:
      'The old wholesale quarter next to Divisoria: San Nicolas heritage houses, ancestral shops and the story behind Manila’s trading district.',
    intro:
      'San Nicolas is the historic trading district wrapped around Divisoria — older than the mall, full of ancestral commercial buildings and the memory of Manila’s wholesale past. It adds depth to a shopping day without leaving the neighborhood.',
    sections: [
      {
        heading: 'What to see (examples)',
        list: [
          'Old commercial façades — Spanish-era and early-20th-century warehouses.',
          'Ancestral shops — some still trading in original spaces.',
          'Narrow streets — the texture of old Manila wholesale.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Look up — the interesting architecture is above the ground-floor stalls.',
          'Stay on public streets — many buildings are private.',
          'Pair with Escolta/Binondo for a fuller heritage loop.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where is San Nicolas relative to Divisoria?',
        a: 'It borders the market — about 5–10 minutes from Tabora St.',
      },
      {
        q: 'Can I go inside the old buildings?',
        a: 'Mostly no — view from the street; some have ground-floor shops.',
      },
      {
        q: 'Is it safe to walk?',
        a: 'Yes, daylight and busy; keep bag-security habits from the safety page.',
      },
    ],
    related: ['escolta-heritage-walk', 'binondo-church-guide', 'safety-pickpockets-divisoria'],
    homeAnchors: ['malapit'],
  },
  {
    slug: 'plaza-lorenzo-ruiz-arch',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Plaza Lorenzo Ruiz & Arch (Binondo) Guide',
    metaTitle: 'Plaza Lorenzo Ruiz & Arch (Binondo)',
    metaDescription:
      'The gateway arch and plaza of Binondo from Divisoria: what it marks, photo tips, and how it anchors the Chinatown food walk.',
    intro:
      'The Plaza Lorenzo Ruiz with its Chinese gate arch is Binondo’s symbolic entrance — and the cue that you’ve arrived at the food district. Use it as the photo op and orientation point before diving into Ongpin.',
    sections: [
      {
        heading: 'What to see (examples)',
        list: [
          'The gate arch — the classic Binondo photo.',
          'The plaza & statue — San Lorenzo Ruiz, first Filipino saint.',
          'Ongpin St begins here — your food-crawl start line.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Shoot the arch from across the street for the full frame.',
          'Start the food walk here — Ongpin runs off the plaza.',
          'Mind crossing traffic — it’s a busy intersection.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is Plaza Lorenzo Ruiz from Divisoria?',
        a: 'About 10–15 minutes on foot into Binondo.',
      },
      {
        q: 'What is it?',
        a: 'Binondo’s central plaza with the Chinatown gate arch and a statue of San Lorenzo Ruiz.',
      },
      {
        q: 'Why visit it?',
        a: 'It’s the orientation point and photo marker for the Ongpin food crawl.',
      },
    ],
    related: ['binondo-church-guide', 'best-food-near-divisoria-mall-binondo-food-crawl', 'escolta-heritage-walk'],
    homeAnchors: ['malapit'],
  },
  {
    slug: 'pasig-river-ferry-divisoria',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Pasig River Ferry & Divisoria (Quiapo/Isinag St Pier)',
    metaTitle: 'Pasig River Ferry Near Divisoria',
    metaDescription:
      'Using the Pasig River Ferry to reach Divisoria: the nearest pier, walking distance to Tabora St, fares and how it beats road traffic.',
    intro:
      'The Pasig River Ferry is a calm, traffic-free way into the Divisoria area if you’re coming from the river corridor. Alight at the nearest central pier and walk to Tabora St. It sidesteps the road gridlock that defines Divisoria approaches.',
    sections: [
      {
        heading: 'What to expect (examples)',
        list: [
          'Nearest pier — check the current stop map; central piers put you ~10–15 min from Tabora.',
          'Scheduled boats — plan around the timetable, not on demand.',
          'Walk to mall — flat, signposted via Binondo/Quiapo streets.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Check the live ferry schedule before leaving.',
          'Carry exact fare if required.',
          'Pair with a Binondo walk — pier and Chinatown are close.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there a ferry to Divisoria?',
        a: 'The Pasig River Ferry has central piers roughly 10–15 min walk from Tabora St; confirm the current nearest stop.',
      },
      {
        q: 'How much is the ferry?',
        a: 'Standard fare, ballpark ₱15–₱30; confirm per route.',
      },
      {
        q: 'Why take it?',
        a: 'It avoids Divisoria road traffic and is a scenic approach.',
      },
    ],
    related: ['from-bgc-makati-qc-to-divisoria', 'lrt-1-doroteo-jose-exit', 'binondo-church-guide'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'seng-guan-temple',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Seng Guan Temple (Binondo) Guide from Divisoria',
    metaTitle: 'Seng Guan Temple Guide (Binondo)',
    metaDescription:
      'Visiting Seng Guan Temple near Divisoria: walking distance, what to see, etiquette, and the vegetarian food nearby.',
    intro:
      'Seng Guan is one of Binondo’s most prominent Buddhist temples — a serene counterpoint to the market. It’s free, fragrant with incense, and surrounded by vegetarian eateries. A natural stop on a Chinatown walk.',
    sections: [
      {
        heading: 'What to see (examples)',
        list: [
          'The main hall & incense offerings — the sensory centerpiece.',
          'Upper floors — check access; some areas are restricted.',
          'Vegetarian stalls nearby — temple-adjacent meat-free food.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Dress modestly and speak softly.',
          'Don’t photograph worshippers up close without care.',
          'Try the vegetarian food right outside if you’re meat-free.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is Seng Guan from Divisoria Mall?',
        a: 'About 10–15 minutes on foot into Binondo.',
      },
      {
        q: 'Is there a fee?',
        a: 'No — it’s a working temple, free to visit.',
      },
      {
        q: 'Is there vegetarian food nearby?',
        a: 'Yes — temple-area stalls serve Buddhist vegetarian meals, often early lunch only.',
      },
    ],
    related: ['halal-and-vegetarian-near-divisoria', 'binondo-church-guide', 'best-food-near-divisoria-mall-binondo-food-crawl'],
    homeAnchors: ['malapit'],
  },
  {
    slug: 'divisoria-night-market',
    cluster: 'attractions',
    kicker: 'Attractions & Heritage Walks',
    title: 'Divisoria Night Market & Evening Shopping',
    metaTitle: 'Divisoria Night Market (Evening Guide)',
    metaDescription:
      'Shopping Divisoria after dark: when night stalls appear, what’s different from daytime, safety and how to get back safely.',
    intro:
      'On night-market days, Tabora and nearby streets transform after dark into open-air evening stalls — clothes, accessories, snacks. It’s lively but denser; keep the same bag-security habits and plan your ride home in advance (rides get scarce late).',
    sections: [
      {
        heading: 'What to expect (examples)',
        list: [
          'Evening apparel & accessory stalls — the core night market.',
          'Street food at night — see the Budget Eateries & Street Food page.',
          'Crowds peak after 18:00 — go earlier for space.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Secure bags in front — nights are the most crowded.',
          'Arrange transport home before it gets late.',
          'Carry small bills — change runs short at night.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there a night market at Divisoria?',
        a: 'Yes on scheduled evenings (often weekends/holidays) along Tabora and nearby streets.',
      },
      {
        q: 'Is it safe at night?',
        a: 'Generally busy and safe, but use front-bag habits and plan your ride home.',
      },
      {
        q: 'What’s different from daytime?',
        a: 'More stalls, bigger crowds, and a livelier street-food scene.',
      },
    ],
    related: ['safety-pickpockets-divisoria', 'divisoria-shopping-budget-eateries-and-street-food', 'etrike-jeepney-routes'],
    homeAnchors: ['biyahe'],
  },

  // ---------------------------------------------------------------- ITINERARIES
  {
    slug: 'half-day-tour',
    cluster: 'itineraries',
    kicker: 'Itineraries',
    title: 'Divisoria + Binondo Half-Day Tour',
    metaTitle: 'Divisoria + Binondo Half-Day Tour',
    metaDescription:
      'A tight 4–5 hour plan: shop Tabora, cool down in the mall, then walk into Binondo for church, heritage and food — with timing and a safe route.',
    intro:
      'The half-day plan front-loads shopping (cooler, emptier mornings) and ends with Binondo as the reward. Keep bags in front; buy pasalubong last so boxes ride home upright.',
    sections: [
      {
        heading: 'The route (about 4–5 hours)',
        list: [
          '08:30 — Divisoria Mall + Tabora St: coolest, calmest shopping window.',
          '10:30 — Mall A/C section / food court: rest, hydrate, regroup.',
          '11:00 — Walk to Binondo (Plaza Lorenzo Ruiz): heritage + orientation.',
          '11:30 — Binondo Church + Ongpin food: quick lunch, hopia takeaway.',
          '13:00 — Return via Tabora / ride: beat afternoon heat.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Start by 08:30 — mornings are the whole game.',
          'Use the mall A/C as your reset mid-loop.',
          'Bookend with food — quick Binondo lunch before the walk back.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I do Divisoria + Binondo in half a day?',
        a: 'Yes — 4–5 hours covers a focused shop plus a Binondo food/heritage bite.',
      },
      {
        q: 'Best start time?',
        a: 'Around 08:30 to beat heat and crowds.',
      },
      {
        q: 'How do I avoid backtracking?',
        a: 'Shop Tabora first, walk once into Binondo, return from there.',
      },
    ],
    related: ['mall-airconditioned-sections', 'best-food-near-divisoria-mall-binondo-food-crawl', 'plaza-lorenzo-ruiz-arch'],
    homeAnchors: ['quick-info', 'biyahe', 'kain'],
  },
  {
    slug: 'one-day-itinerary',
    cluster: 'itineraries',
    kicker: 'Itineraries',
    title: 'Divisoria & Binondo One-Day Itinerary',
    metaTitle: 'Divisoria & Binondo One-Day Plan',
    metaDescription:
      'A full-day loop: wholesale shopping, three malls, Binondo heritage and a food crawl, with a realistic timetable and rest breaks.',
    intro:
      'A full day lets you compare the three wholesale hubs, do Binondo properly, and add a heritage walk without rushing. The rule remains: shop morning, eat/historic afternoon, pasalubong last.',
    sections: [
      {
        heading: 'The route (about 8–9 hours)',
        list: [
          '08:30 — Divisoria Mall + Tabora St (wholesale).',
          '10:30 — 999 / 168 Malls (depth).',
          '12:00 — Binondo lunch + Church + Ongpin.',
          '14:00 — Mall A/C reset + pasalubong last.',
          '15:30 — Escolta or Seng Guan heritage walk.',
          '17:00 — Snack/dinner, head home.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Pack light, buy a trolley if going heavy.',
          'Schedule A/C resets — don’t push through the heat.',
          'Confirm transport home before night market crowds.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can one day cover everything?',
        a: 'Yes — ~8–9 hours covers wholesale, Binondo and a heritage walk at a relaxed pace.',
      },
      {
        q: 'How do I avoid exhaustion?',
        a: 'Build in mall A/C resets and a proper Binondo lunch.',
      },
      {
        q: 'What’s the must-not-skip?',
        a: 'The Binondo food crawl and buying pasalubong last.',
      },
    ],
    related: ['mall-vs-999-vs-168', 'best-food-near-divisoria-mall-binondo-food-crawl', 'escolta-heritage-walk', 'seng-guan-temple'],
    homeAnchors: ['biyahe', 'kain', 'malapit'],
  },
  {
    slug: 'family-friendly-kids',
    cluster: 'itineraries',
    kicker: 'Itineraries',
    title: 'Divisoria with Kids: A Family-Friendly Plan',
    metaTitle: 'Divisoria with Kids (Family Guide)',
    metaDescription:
      'Taking children to Divisoria: stroller reality, where to rest, kid-friendly food, and a calm route that avoids the worst crowds.',
    intro:
      'Divisoria with kids is doable but planned. Lean on the mall’s A/C for rests and restrooms, keep the open-air market short, and use Binondo’s milder streets for the “fun” part (food, church, arch photo).',
    sections: [
      {
        heading: 'What works (examples)',
        list: [
          'Mall A/C + food court — the family base.',
          'Binondo short walk — church, arch, dumplings kids usually like.',
          'Toys & snacks — see the Toys & Party Supplies and Milk Tea & Snacks pages.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Use a carrier, not a stroller, on Tabora.',
          'Set a meet-up point — signal dies in crowds.',
          'Build in snack breaks to reset tired kids.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Divisoria stroller-friendly?',
        a: 'The open market isn’t — use the mall A/C and a carrier; go early.',
      },
      {
        q: 'Where can kids rest?',
        a: 'The mall’s air-con sections and food court are the easy resets.',
      },
      {
        q: 'What food do kids like here?',
        a: 'Binondo noodles/dumplings, milk tea, and street snacks.',
      },
    ],
    related: ['accessibility-wheelchair', 'divisoria-mall-food-court', 'best-food-near-divisoria-mall-binondo-food-crawl', 'toys-and-party-needs'],
    homeAnchors: ['quick-info'],
  },
  {
    slug: 'rainy-day-indoor',
    cluster: 'itineraries',
    kicker: 'Itineraries',
    title: 'Divisoria on a Rainy Day: Indoor Plan',
    metaTitle: 'Divisoria Rainy Day (Indoor Guide)',
    metaDescription:
      'Shopping Divisoria when it pours: which parts stay dry, how to move between buildings, and what to skip when Tabora floods.',
    intro:
      'On wet days, stay inside the connected malls — Divisoria Mall, 999 and 168 have covered floors. Skip the open Tabora lanes (they pool water first) and use covered walkways/jeepney hops between buildings. Keep a waterproof tote liner for anything you do buy.',
    sections: [
      {
        heading: 'What works (examples)',
        list: [
          'Mall A/C shopping — fully covered.',
          '999/168 indoor sections — big, dry floor plates.',
          'Short covered jeepney hops between hubs.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Bring a packable rain jacket + waterproof tote liner.',
          'Wear sandals, not closed shoes, if you must step outside.',
          'Check the forecast — aim for a morning trip before afternoon storms.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I shop Divisoria in the rain?',
        a: 'Yes — stay inside the malls; skip open Tabora lanes that flood first.',
      },
      {
        q: 'Which parts are dry?',
        a: 'Divisoria Mall and the 999/168 indoor sections are covered.',
      },
      {
        q: 'How do I move between buildings when wet?',
        a: 'Use covered walkways and short jeepney hops; protect bags with a liner.',
      },
    ],
    related: ['mall-airconditioned-sections', 'mall-vs-999-vs-168', 'rainy-season-flooding', 'divisoria-mall-food-court'],
    homeAnchors: ['biyahe'],
  },
  {
    slug: 'bulk-buying-resellers',
    cluster: 'itineraries',
    kicker: 'Itineraries',
    title: 'Bulk Buying in Divisoria (Reseller’s Guide)',
    metaTitle: 'Bulk Buying Divisoria (Reseller Guide)',
    metaDescription:
      'For resellers: how to buy wholesale in Divisoria, minimums, comparing the three malls, logistics and avoiding common bulk-buying mistakes.',
    intro:
      'Resellers win in Divisoria by volume discipline: compare across the three hubs, confirm minimums and defect rates, and inspect a sample before approving a bulk run. The open-air hubs (999/168) usually beat the mall on per-unit price; the mall wins on comfort and security.',
    sections: [
      {
        heading: 'What works (examples)',
        list: [
          'Per-dozen wholesale racks — fixed, no haggle.',
          'Cross-hub price checks — see the Mall vs 999 vs 168 page.',
          'Bulk souvenirs/toys — see the Wedding & Debut Souvenirs and Toys & Party Supplies pages.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Negotiate on volume, not on single pieces.',
          'Inspect seams/zippers/flaws before bulk commitment.',
          'Arrange transport — loads get heavy; use a trolley or taxi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I buy wholesale in Divisoria?',
        a: 'Ask per-dozen/pack pricing, compare hubs, and inspect samples before bulk.',
      },
      {
        q: 'Which mall is cheapest for resellers?',
        a: '999/168 open hubs usually beat the mall per unit; the mall is pricier but safer/A/C.',
      },
      {
        q: 'Any risks?',
        a: 'Counterfeit branded goods and un-inspected defects — buy unbranded and check quality first.',
      },
    ],
    related: ['mall-vs-999-vs-168', 'wholesale-clothing-bargaining', 'wedding-debut-souvenirs', 'toys-and-party-needs'],
    homeAnchors: ['biyahe'],
  },
];

export const TOPIC_SLUGS = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
