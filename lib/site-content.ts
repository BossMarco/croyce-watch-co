export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://croyce-watch-co.vercel.app";

export const services = [
  {
    slug: "buy-vintage-watches",
    name: "Buy Vintage Watches",
    shortName: "Buy",
    title: "Buy Vintage Watches in McAllen, TX",
    description: "Discover thoughtfully sourced vintage watches with collector-focused guidance at C. Royce Watch Co. in McAllen, serving the Rio Grande Valley.",
    intro: "Buying vintage should feel personal, informed, and exciting. C. Royce Watch Co. helps new and experienced collectors understand the character of a timepiece before deciding whether it belongs in their collection.",
    sections: [
      ["A collector’s approach", "A vintage watch is more than a model name or a year. Proportion, dial condition, case shape, movement, service history, and the way a watch has aged all affect how it feels on the wrist. We talk through those details in plain language so you can evaluate the complete piece, not just the logo on the dial."],
      ["For first watches and grail watches", "You do not need to arrive with expert vocabulary. Tell us what you like, how you plan to wear it, and what matters most to you. We can help narrow the field. Experienced collectors can expect the same direct conversation when considering a specific reference, era, or addition to an established collection."],
      ["See recent arrivals", "Vintage inventory changes constantly. Follow C. Royce Watch Co. on Instagram and Facebook for recent finds, then contact us or visit the McAllen shop to discuss a piece in more detail."],
    ],
    faqs: [
      ["Do I need an appointment to discuss a vintage watch?", "Contact C. Royce Watch Co. before your visit if you want to discuss a specific piece or collection so the team can prepare for the conversation."],
      ["Can you help a first-time mechanical watch buyer?", "Yes. Guidance is tailored to your experience, priorities, wrist, and collecting goals."],
      ["Where can I see current inventory?", "Recent arrivals and available pieces are shared through the company’s Instagram and Facebook profiles."],
    ],
  },
  {
    slug: "sell-or-trade-a-watch",
    name: "Sell or Trade a Watch",
    shortName: "Sell & Trade",
    title: "Sell or Trade a Watch in the Rio Grande Valley",
    description: "Discuss selling or trading a vintage watch or collection with C. Royce Watch Co. in McAllen, Texas.",
    intro: "A thoughtful sale starts with understanding the watch. C. Royce Watch Co. gives Rio Grande Valley owners a local place to discuss an individual timepiece or collection and explore the available options.",
    sections: [
      ["Start with the story", "Bring what you know about the watch, including any box, papers, service records, receipts, or family history. Missing documentation does not prevent a conversation, but every detail can help build a clearer picture of the piece."],
      ["Sell or trade", "Selling may be the right path when you want a straightforward transition out of a piece. A trade can make sense when your collection is changing and another watch better fits your taste. We will discuss the practical differences and help you consider the path that aligns with your goal."],
      ["Individual watches and collections", "The same careful approach applies whether you are moving one watch or reviewing several. Contact the McAllen shop with clear photos and basic details to begin, or arrange an in-person conversation."],
    ],
    faqs: [
      ["What should I bring with my watch?", "Bring the watch plus any box, papers, service history, receipts, spare links, straps, or related accessories you have."],
      ["Can I discuss more than one watch?", "Yes. C. Royce Watch Co. can begin a conversation about an individual piece or a broader collection."],
      ["Can I start online?", "Yes. Reach out through Instagram or Facebook with clear photos and the information you have before arranging a visit."],
    ],
  },
  {
    slug: "watch-consignment",
    name: "Vintage Watch Consignment",
    shortName: "Consign",
    title: "Vintage Watch Consignment in McAllen, TX",
    description: "Consign a vintage watch through C. Royce Watch Co. and reach an audience that understands collectible timepieces.",
    intro: "Consignment can put the right vintage watch in front of a collector-focused audience while allowing time for the piece to find an appropriate buyer. C. Royce Watch Co. provides a local point of contact in McAllen throughout that process.",
    sections: [
      ["When consignment fits", "Consignment may suit a distinctive piece that benefits from presentation, context, and exposure to people already interested in vintage watches. The right approach depends on the watch, its condition, supporting items, and your preferred timeline."],
      ["Presentation matters", "Clear photography, accurate details, and an honest explanation of condition help serious buyers understand a watch. We focus on the qualities that make the piece worth considering without hiding the evidence of age that gives vintage watches their character."],
      ["A clear conversation", "Before moving forward, discuss expectations, timing, and the watch itself with the shop. Contact C. Royce Watch Co. to see whether consignment is appropriate for your piece."],
    ],
    faqs: [
      ["Is every watch a fit for consignment?", "No. Suitability depends on the piece, condition, market, and the shop’s current audience. A direct review is the best starting point."],
      ["What information helps with consignment?", "Reference information, service history, provenance, boxes, papers, spare links, and clear ownership details can all be useful."],
      ["How do I begin?", "Contact C. Royce Watch Co. through its social profiles or visit the McAllen location to discuss the watch."],
    ],
  },
  {
    slug: "source-a-vintage-watch",
    name: "Source a Vintage Watch",
    shortName: "Source",
    title: "Vintage Watch Sourcing for RGV Collectors",
    description: "Let C. Royce Watch Co. help source a specific vintage watch, reference, or era for collectors across the Rio Grande Valley.",
    intro: "The right vintage watch is not always sitting in a display case. If you have a reference, era, style, or collecting goal in mind, C. Royce Watch Co. can help focus the search and evaluate potential pieces.",
    sections: [
      ["Define the target", "A useful sourcing conversation goes beyond a brand name. Share the references you admire, preferred size, dial and case preferences, budget range, condition priorities, and whether originality or everyday wearability matters most."],
      ["Evaluate the complete piece", "Two watches with the same reference can present very differently. Dial condition, replacement parts, polishing, movement condition, provenance, and accessories all affect desirability. We help frame those tradeoffs before you commit."],
      ["A patient search", "Vintage sourcing can take time because quality and fit matter more than speed. Begin the conversation with the McAllen shop and follow current finds on social media while the search develops."],
    ],
    faqs: [
      ["Can you source a specific reference?", "Yes. A reference number is helpful, but you can also begin with a brand, era, style, or set of features."],
      ["What if I am not sure which watch I want?", "Share examples you like and how you intend to wear the watch. The shop can help turn those preferences into a more focused target."],
      ["Do you serve collectors outside McAllen?", "The shop is in McAllen and welcomes conversations with collectors from communities throughout the Rio Grande Valley."],
    ],
  },
] as const;

export const areas = [
  { slug: "mcallen", city: "McAllen", county: "Hidalgo County", angle: "As the home of C. Royce Watch Co., McAllen gives local collectors a dedicated place to see character-rich vintage timepieces and have a face-to-face conversation about buying, selling, trading, consigning, or sourcing.", local: "The shop is located on the second floor of The French Quarter at 3911 N. 10th Street. Contact the team through Instagram or Facebook before visiting when you are interested in a specific piece." },
  { slug: "mission", city: "Mission", county: "Hidalgo County", angle: "Mission collectors looking beyond mass-market retail can connect with a vintage-focused shop nearby in McAllen. The experience centers on the individual watch—its proportions, condition, history, and place in a collection.", local: "C. Royce Watch Co. welcomes Mission residents to start the conversation online and continue it at the McAllen location. Bring any documentation or accessories when discussing a watch you own." },
  { slug: "edinburg", city: "Edinburg", county: "Hidalgo County", angle: "For Edinburg buyers and owners, C. Royce Watch Co. offers a nearby collector-led alternative for vintage watches. New enthusiasts can learn what to examine, while experienced collectors can discuss specific references and collecting goals.", local: "Recent pieces are shared on social media, making it easy to review new finds before making the trip to the shop on North 10th Street in McAllen." },
  { slug: "pharr", city: "Pharr", county: "Hidalgo County", angle: "Pharr is close to C. Royce Watch Co.’s McAllen shop, giving local watch owners access to knowledgeable conversations about vintage buying, selling, trading, consignment, and sourcing.", local: "Start with photos and details through the company’s social channels, especially if you plan to bring a watch or collection for discussion." },
  { slug: "weslaco", city: "Weslaco", county: "Hidalgo County", angle: "Weslaco collectors can work with a vintage watch specialist in the Mid-Valley’s neighboring McAllen market. The focus is on selecting pieces with personality and understanding the details behind their appeal.", local: "Follow current arrivals online, then contact C. Royce Watch Co. to plan a visit to The French Quarter in McAllen." },
  { slug: "harlingen", city: "Harlingen", county: "Cameron County", angle: "Harlingen collectors seeking vintage watches can connect with C. Royce Watch Co. in McAllen for a more personal, collector-minded experience than conventional jewelry retail.", local: "Because inventory changes, review recent finds and contact the shop before traveling from Harlingen to discuss availability or a watch you may want to sell, trade, or consign." },
  { slug: "brownsville", city: "Brownsville", county: "Cameron County", angle: "C. Royce Watch Co. gives Brownsville enthusiasts a Rio Grande Valley destination for vintage timepieces, from a first mechanical watch to a focused search for a specific reference.", local: "Begin through Instagram or Facebook with the details of what you are looking for, then arrange a conversation at the McAllen shop when appropriate." },
  { slug: "rio-grande-city", city: "Rio Grande City", county: "Starr County", angle: "Rio Grande City collectors can reach a dedicated vintage watch shop within the broader RGV market. C. Royce Watch Co. helps make the buying or selling process understandable and personal.", local: "Contact the McAllen shop before making the drive so the team can discuss your goals, current pieces, or the watch you plan to bring." },
] as const;

export type Service = (typeof services)[number];
export type Area = (typeof areas)[number];
