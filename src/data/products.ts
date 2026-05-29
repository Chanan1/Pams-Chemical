export interface Product {
  image?: string;
  id: string;
  name: string;
  chemicalFormula?: string;
  casNumber: string;
  category: string;
  shortDescription: string;
  description: string;
  techSpecs: {
    purity?: string;
    appearance?: string;
    density?: string;
    pH?: string;
    activeMatter?: string;
    packaging?: string;
  };
  applications: string[];
  downloads: {
    tds: string;
    msds: string;
  };
}

export const CATEGORIES = {
  DETERGENT: "Surfactants & Detergent Raw Materials",
  PETROLEUM: "Petroleum & Cosmetic Additives",
  INORGANIC: "Inorganic Chemicals",
  PIGMENTS: "Pigments & Fillers",
  FINE: "Fine Chemicals",
};

export const products: Product[] = [
  // --- SURFACTANTS & DETERGENT RAW MATERIALS ---
  {
    id: "sles-70",
    image: "/products/sles-70.png",
    name: "SLES 70% (Sodium Lauryl Ether Sulfate)",
    chemicalFormula: "C12H25(OCH2CH2)2OSO3Na",
    casNumber: "68585-34-2",
    category: CATEGORIES.DETERGENT,
    shortDescription: "High-active anionic surfactant widely used in detergents, shampoos, liquid soaps, and cosmetics.",
    description: "Sodium Lauryl Ether Sulfate (SLES 70%) is an outstanding anionic surfactant offering excellent detergency, emulsification, foamability, and wetting properties. It exhibits remarkable hard water resistance and high biodegradation. Widely selected for personal care products like shampoos, body washes, and facial cleansers, as well as household detergents and industrial cleaning agents.",
    techSpecs: {
      purity: "70.0% Min",
      appearance: "White or Pale Yellow Paste",
      density: "1.05 g/cm³",
      pH: "7.0 - 9.0 (10% aqueous solution)",
      activeMatter: "70% ± 2%",
      packaging: "170kg / 220kg Plastic Drum or IBC Tote",
    },
    applications: [
      "Personal care formulation (shampoo, bubble baths, liquid soaps)",
      "Household cleaning liquids (dishwashing liquids, laundry detergents)",
      "Textile processing and dyeing industries",
      "Industrial degreasers and printing auxiliary agents"
    ],
    downloads: {
      tds: "/downloads/SLES_70_TDS.pdf",
      msds: "/downloads/SLES_70_MSDS.pdf",
    },
  },
  {
    id: "labsa",
    image: "/products/labsa.png",
    name: "LABSA (Linear Alkyl Benzene Sulfonic Acid)",
    chemicalFormula: "R-C6H4-SO3H (R=C10-C13)",
    casNumber: "27176-87-0",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Anionic surfactant synthesized for household laundry powders, liquid soaps, and scouring bars.",
    description: "Linear Alkyl Benzene Sulfonic Acid (LABSA) is one of the most widely used synthetic anionic surfactants because of its low cost, high performance, and environmental friendliness. It is highly biodegradable and functions effectively as an emulsifier, stabilizer, and foaming agent. It requires neutralization with an alkali (like caustic soda) before application.",
    techSpecs: {
      purity: "96.0% Min",
      appearance: "Brown Viscous Liquid",
      density: "1.06 g/cm³",
      pH: "1.5 - 2.0 (1% aqueous solution)",
      activeMatter: "96% Min",
      packaging: "210kg / 220kg Plastic Drum",
    },
    applications: [
      "Core ingredient in washing powder and laundry detergents",
      "Industrial scouring agents and wetting agents",
      "Pesticide emulsifiers and agricultural sprays",
      "Textile mercerizing and washing formulations"
    ],
    downloads: {
      tds: "/downloads/LABSA_TDS.pdf",
      msds: "/downloads/LABSA_MSDS.pdf",
    },
  },
  {
    id: "las",
    image: "/products/las.png",
    name: "LAS (Sodium Linear Alkylbenzene Sulfonate)",
    chemicalFormula: "RC6H4SO3Na",
    casNumber: "25155-30-0",
    category: CATEGORIES.DETERGENT,
    shortDescription: "High-biodegradation anionic surfactant used as a dry washing powder component.",
    description: "Sodium Linear Alkylbenzene Sulfonate (LAS) is the neutralized salt of LABSA. It is a highly effective, biodegradable surfactant with outstanding wetting, emulsifying, dispersing, and foaming abilities. Primarily utilized in powder and solid block detergents due to its solid/powder crystal form.",
    techSpecs: {
      purity: "90% Min (Powder/Flake)",
      appearance: "White Flakes or Powder",
      density: "0.35 - 0.45 g/cm³",
      pH: "7.0 - 9.5 (1% solution)",
      activeMatter: "90% Min",
      packaging: "25kg Multi-layer Kraft Paper Bag",
    },
    applications: [
      "Laundering powders and detergent cakes",
      "General purpose household scouring powders",
      "Emulsifying agent in pesticide formulations",
      "Dyeing and scouring assistant in textile processing"
    ],
    downloads: {
      tds: "/downloads/LAS_TDS.pdf",
      msds: "/downloads/LAS_MSDS.pdf",
    },
  },
  {
    id: "aos",
    image: "/products/aos.png",
    name: "AOS (Alpha Olefin Sulfonate)",
    chemicalFormula: "R-CH=CH-CH2-SO3Na",
    casNumber: "68439-57-6",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Mild surfactant offering excellent foam volume, stability, and hard water tolerance.",
    description: "Alpha Olefin Sulfonate (AOS) is a mild anionic surfactant produced by sulfonation of alpha-olefins. It is known for its excellent foam stability, resistance to hard water, compatibility with other surfactants, and mildness to human skin. Frequently chosen for sulfate-free personal care items.",
    techSpecs: {
      purity: "92% Min (Powder), 35% (Liquid)",
      appearance: "White Powder or Light Yellow Liquid",
      density: "1.05 g/cm³ (Liquid)",
      pH: "6.0 - 8.0 (5% solution)",
      activeMatter: "92% / 35%",
      packaging: "25kg Bag (Powder) or 200kg Drum (Liquid)",
    },
    applications: [
      "Sulfate-free shampoos, facial washes, and body soaps",
      "High-foaming hand soaps and bubble baths",
      "Liquid laundry detergents and upholstery cleaners",
      "Concrete air-entraining agents and industrial processes"
    ],
    downloads: {
      tds: "/downloads/AOS_TDS.pdf",
      msds: "/downloads/AOS_MSDS.pdf",
    },
  },
  {
    id: "capb",
    image: "/products/capb.png",
    name: "CAPB (Cocamidopropyl Betaine)",
    chemicalFormula: "C19H38N2O3",
    casNumber: "61789-40-0",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Amphoteric surfactant serving as a foam booster and gentle viscosity builder in cleansers.",
    description: "Cocamidopropyl Betaine (CAPB) is an organic amphoteric surfactant derived from coconut oil. It acts as a mild cleanser, excellent foam builder, viscosity booster, and anti-static agent. It reduces skin irritation when combined with anionic surfactants like SLES.",
    techSpecs: {
      purity: "30% or 35% Active",
      appearance: "Clear to Light Yellow Liquid",
      density: "1.04 g/cm³",
      pH: "5.0 - 7.0 (5% aqueous solution)",
      activeMatter: "30% - 35%",
      packaging: "200kg Plastic Drum or IBC Tote",
    },
    applications: [
      "Baby shampoos and baby bath formulations",
      "Mild hand soaps, facial cleansers, and bubble baths",
      "Shampoos and hair conditioners as an antistatic agent",
      "Liquid dishwashing soaps and multi-purpose detergents"
    ],
    downloads: {
      tds: "/downloads/CAPB_TDS.pdf",
      msds: "/downloads/CAPB_MSDS.pdf",
    },
  },
  {
    id: "apg",
    image: "/products/apg.png",
    name: "APG (Alkyl Polyglycoside)",
    chemicalFormula: "C16H32O6 (Average)",
    casNumber: "110615-47-9",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Eco-friendly, non-ionic surfactant synthesized from natural, renewable corn starch and coconut oil.",
    description: "Alkyl Polyglycoside (APG) is a premium non-ionic surfactant synthesized from biodegradable raw materials: glucose and fatty alcohols. It is extremely mild to the skin, has exceptional ecological compatibility, and provides rich, stable foam. Widely used in green cosmetic lines and eco-certified detergents.",
    techSpecs: {
      purity: "50% - 53% Active Matter",
      appearance: "Light Yellow Turbid Liquid",
      density: "1.1 g/cm³",
      pH: "11.5 - 12.5 (10% solution)",
      activeMatter: "50% Min",
      packaging: "220kg Plastic Drum",
    },
    applications: [
      "Green, eco-friendly liquid laundry detergents",
      "Hard surface cleaners and glass cleaners",
      "Mild cosmetic cleansers, baby wipes, and makeup removers",
      "Agrochemical wetting and dispersing agents"
    ],
    downloads: {
      tds: "/downloads/APG_TDS.pdf",
      msds: "/downloads/APG_MSDS.pdf",
    },
  },
  {
    id: "peg",
    image: "/products/peg.png",
    name: "PEG (Polyethylene Glycol)",
    chemicalFormula: "H(OCH2CH2)nOH",
    casNumber: "25322-68-3",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Versatile binder, solvent, humectant, and viscosity modifier used in various industrial sectors.",
    description: "Polyethylene Glycol (PEG) represents a family of polyethers with molecular weights ranging from low (PEG 200/400 liquid) to high (PEG 4000/6000 solid). PEGs are highly soluble in water, non-toxic, and chemically stable. They serve as lubricants, binders, plasticizers, and humectants.",
    techSpecs: {
      purity: "99% Min",
      appearance: "Clear Liquid (low MW) or White Flakes (high MW)",
      density: "1.12 g/cm³ to 1.2 g/cm³",
      pH: "5.0 - 7.0 (5% solution)",
      activeMatter: "99% Min",
      packaging: "200kg Drum (Liquid) or 25kg Bag (Flakes)",
    },
    applications: [
      "Ointment bases and binder in pharmaceutical tablets",
      "Cosmetic creams, lotions, and toothpastes as a humectant",
      "Viscosity modifier in liquid detergent formulations",
      "Lubricant and mold release agent in rubber/metal industries"
    ],
    downloads: {
      tds: "/downloads/PEG_TDS.pdf",
      msds: "/downloads/PEG_MSDS.pdf",
    },
  },
  {
    id: "sls",
    image: "/products/sls.png",
    name: "SLS (Sodium Lauryl Sulfate)",
    chemicalFormula: "NaC12H25SO4",
    casNumber: "151-21-3",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Anionic surfactant delivering rapid foaming and deep detergency in powder formulations.",
    description: "Sodium Lauryl Sulfate (SLS) is a highly concentrated surfactant with superior foaming capability and lipid-stripping power. Available in needle, powder, or granule forms. Its intense wetting and emulsifying action makes it highly effective for deep-clean detergent formulations.",
    techSpecs: {
      purity: "92% - 95% Min",
      appearance: "White Needles, Powder or Granules",
      density: "1.1 g/cm³",
      pH: "7.5 - 10.5 (1% solution)",
      activeMatter: "92% Min",
      packaging: "25kg Multi-layer Kraft Bag",
    },
    applications: [
      "Toothpaste formulations (foaming and plaque removal)",
      "Surgical scrubs and heavy-duty clinical hand cleansers",
      "Engine degreasers and car wash soaps",
      "Plasterboard manufacturing and concrete air-entraining"
    ],
    downloads: {
      tds: "/downloads/SLS_TDS.pdf",
      msds: "/downloads/SLS_MSDS.pdf",
    },
  },
  {
    id: "cmc",
    image: "/products/cmc.png",
    name: "CMC (Carboxymethyl Cellulose)",
    chemicalFormula: "[C6H7O2(OH)x(OCH2COONa)y]n",
    casNumber: "9004-32-4",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Thickening agent and dirt redeposition inhibitor in household laundry formulations.",
    description: "Carboxymethyl Cellulose (CMC) is an anionic water-soluble polymer derived from natural cellulose. In detergents, it acts as an anti-redeposition agent, preventing dirt particles from sticking back to fabrics after being removed by surfactants. It is also a thickener, binder, and film-former.",
    techSpecs: {
      purity: "99% Min (Food/Cosmetic Grade), 55%-70% (Industrial)",
      appearance: "White to Off-White Powder",
      density: "1.6 g/cm³",
      pH: "6.0 - 8.5 (1% solution)",
      activeMatter: "N/A",
      packaging: "25kg Paper Bag",
    },
    applications: [
      "Anti-redeposition agent in laundry detergent powders",
      "Thickener and binder in toothpaste and cosmetic creams",
      "Viscosity modifier in paper coating and drilling muds",
      "Textile sizing and finishing agent"
    ],
    downloads: {
      tds: "/downloads/CMC_TDS.pdf",
      msds: "/downloads/CMC_MSDS.pdf",
    },
  },
  {
    id: "hpmc",
    image: "/products/hpmc.png",
    name: "HPMC (Hydroxypropyl Methylcellulose)",
    chemicalFormula: "C56H108O30 (Average)",
    casNumber: "9004-65-3",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Non-ionic water-soluble polymer serving as a rheology modifier and water retention agent.",
    description: "Hydroxypropyl Methylcellulose (HPMC) is a non-ionic cellulose ether designed to dissolve in cold water, forming a clear, viscous gel. It serves as an exceptional thickening, binding, dispersing, and emulsifying agent. Its non-ionic nature provides strong compatibility with other surfactants.",
    techSpecs: {
      purity: "99% Min",
      appearance: "Off-white fibrous or granular powder",
      density: "1.3 g/cm³",
      pH: "5.0 - 8.0 (2% solution)",
      activeMatter: "N/A",
      packaging: "25kg Bag",
    },
    applications: [
      "Thickening and stabilizing agent in liquid soaps and shampoos",
      "Water retention and open-time builder in tile adhesives and mortars",
      "Binder and film coater in pharmaceuticals",
      "Viscosity controller in paint and coating industries"
    ],
    downloads: {
      tds: "/downloads/HPMC_TDS.pdf",
      msds: "/downloads/HPMC_MSDS.pdf",
    },
  },
  {
    id: "np-series",
    image: "/products/np-series.png",
    name: "NP Series (Nonylphenol Ethoxylates)",
    chemicalFormula: "C15H24O(C2H4O)n (n=9-10 typical)",
    casNumber: "9016-45-9",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Highly effective industrial non-ionic surfactant used for heavy degreasing and wetting.",
    description: "The Nonylphenol Ethoxylate series (like NP-9 and NP-10) are superb non-ionic surfactants. They exhibit excellent detergency, exceptional wetting properties, powerful emulsifying action, and versatile dispersing performance. Highly effective for deep industrial cleaning and specialized textile applications.",
    techSpecs: {
      purity: "99.5% Min",
      appearance: "Clear Viscous Liquid",
      density: "1.06 g/cm³",
      pH: "6.0 - 8.0 (1% solution)",
      activeMatter: "99.5% Min",
      packaging: "200kg Iron Drum or IBC Tote",
    },
    applications: [
      "Heavy-duty metal cleaners and degreasing solvents",
      "Emulsifier in agrochemical concentrates",
      "Wetting agent in paints, inks, and paper mills",
      "Textile processing detergents and scouring aids"
    ],
    downloads: {
      tds: "/downloads/NP_Series_TDS.pdf",
      msds: "/downloads/NP_Series_MSDS.pdf",
    },
  },
  {
    id: "tx-10",
    image: "/products/tx-10.png",
    name: "TX-10 (Triton X-100 / Octylphenol Ethoxylate)",
    chemicalFormula: "C14H22O(C2H4O)10",
    casNumber: "9002-93-1",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Premium non-ionic wetting agent and emulsifier, popular in lab reagents and specialized cleaning.",
    description: "Triton X-100 (TX-10) is a premium, high-quality octylphenol ethoxylate surfactant. It is highly soluble in water and organic solvents, and is exceptionally efficient at removing oils and greasy soils. Known as a laboratory standard for cellular lysis, biochemical assays, and precision electronics cleaning.",
    techSpecs: {
      purity: "99% Min",
      appearance: "Clear, Pale Yellow Viscous Liquid",
      density: "1.06 g/cm³",
      pH: "6.0 - 8.0 (5% solution)",
      activeMatter: "99% Min",
      packaging: "200kg Drum",
    },
    applications: [
      "Cell lysis and protein extraction in biochemistry labs",
      "Precision metal and electronic component cleaning",
      "Highly effective emulsifier in agricultural chemicals",
      "Industrial paint and pigment dispersing agent"
    ],
    downloads: {
      tds: "/downloads/TX_10_TDS.pdf",
      msds: "/downloads/TX_10_MSDS.pdf",
    },
  },
  {
    id: "lab",
    image: "/products/lab.png",
    name: "LAB (Linear Alkylbenzene)",
    chemicalFormula: "C6H5CnH2n+1 (n=10-13)",
    casNumber: "67774-74-7",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Primary petroleum-derived raw material used in the manufacturing of LABSA and biodegradable detergents.",
    description: "Linear Alkylbenzene (LAB) is an organic petroleum hydrocarbon compound. It serves as the vital intermediate raw material for the chemical synthesis of LABSA. LAB is produced through alkylation of benzene with paraffin-derived olefins, ensuring long straight-chain hydrocarbons that provide high biodegradability.",
    techSpecs: {
      purity: "99.0% Min",
      appearance: "Clear, Colorless Liquid",
      density: "0.86 g/cm³",
      pH: "Neutral",
      activeMatter: "N/A",
      packaging: "Tank Container / Bulk Vessel or 170kg Steel Drum",
    },
    applications: [
      "Key feedstock for LABSA sulfonation plants",
      "Heat transfer fluids and dielectric oils",
      "Lubricant base oil additive intermediate",
      "Industrial specialty solvent applications"
    ],
    downloads: {
      tds: "/downloads/LAB_TDS.pdf",
      msds: "/downloads/LAB_MSDS.pdf",
    },
  },
  {
    id: "mes",
    image: "/products/mes.png",
    name: "MES (Methyl Ester Sulfonates)",
    chemicalFormula: "RCH(SO3Na)COOCH3",
    casNumber: "93348-22-2",
    category: CATEGORIES.DETERGENT,
    shortDescription: "Ultra-green, plant-based anionic surfactant derived from renewable palm oil resources.",
    description: "Methyl Ester Sulfonate (MES) is an advanced eco-friendly anionic surfactant derived directly from palm oil. It serves as a modern, green alternative to petroleum-based surfactants like LAS. It provides excellent detergency, superb performance in hard water, high biodegradability, and mildness to the skin.",
    techSpecs: {
      purity: "70% (Flake) / 80% (Powder)",
      appearance: "White to Off-White Flakes or Powder",
      density: "1.04 g/cm³",
      pH: "5.5 - 7.5 (1% solution)",
      activeMatter: "70% or 80% Min",
      packaging: "25kg Bag",
    },
    applications: [
      "Green, eco-certified powdered and liquid laundry detergents",
      "Sulfate-free personal care washes and shampoos",
      "Concentrated laundry pods and dishwashing gels",
      "Agricultural pesticide adjuvant formulations"
    ],
    downloads: {
      tds: "/downloads/MES_TDS.pdf",
      msds: "/downloads/MES_MSDS.pdf",
    },
  },

  // --- PETROLEUM & COSMETIC ADDITIVES ---
  {
    id: "white-oil",
    image: "/products/white-oil.png",
    name: "White Oil (Liquid Paraffin / Mineral Oil)",
    chemicalFormula: "C15-C50 Hydrocarbons",
    casNumber: "8042-47-5",
    category: CATEGORIES.PETROLEUM,
    shortDescription: "Highly refined, odorless mineral oil of pharmaceutical, cosmetic, and food-grade purity.",
    description: "White Oil (also known as Mineral Oil or Liquid Paraffin) is an extremely refined liquid hydrocarbon mixture derived from petroleum. It is colorless, odorless, tasteless, and highly stable. Our white oils comply with USP/BP pharmaceutical and cosmetic grades, making them ideal as emollient bases.",
    techSpecs: {
      purity: "100% Mineral Oil (Pharma/Cosmetic Grade)",
      appearance: "Water White, Odorless Liquid",
      density: "0.83 - 0.86 g/cm³",
      pH: "Neutral",
      activeMatter: "N/A",
      packaging: "170kg Steel Drum or IBC Tote",
    },
    applications: [
      "Base ingredient in hair oils, skin creams, lotions, and baby oils",
      "Lubricant for food processing equipment and machinery",
      "Release agent and plasticizer in plastics and rubber industries",
      "Ointment and capsule manufacturing in pharmaceuticals"
    ],
    downloads: {
      tds: "/downloads/White_Oil_TDS.pdf",
      msds: "/downloads/White_Oil_MSDS.pdf",
    },
  },
  {
    id: "petrolatum",
    image: "/products/petrolatum.png",
    name: "Petrolatum (Vaseline / Petroleum Jelly)",
    chemicalFormula: "C25+ Hydrocarbons",
    casNumber: "8009-03-8",
    category: CATEGORIES.PETROLEUM,
    shortDescription: "Ultra-pure semi-solid lipid barrier used in pharmaceutical ointments and cosmetic skin protectants.",
    description: "Petrolatum (commonly known as Petroleum Jelly) is a highly purified, semi-solid mixture of microcrystalline waxes and mineral oils. It behaves as an exceptional occlusive emollient, preventing transepidermal water loss. Our petrolatums are odorless and fully conform to international pharmacopeia standards.",
    techSpecs: {
      purity: "USP/BP Pharmaceutical Grade",
      appearance: "White or Light Yellow Semi-solid Paste",
      density: "0.82 - 0.88 g/cm³ (at 60°C)",
      pH: "Neutral",
      activeMatter: "N/A",
      packaging: "170kg Steel Drum",
    },
    applications: [
      "Skin protectant ointments, wound dressings, and lip balms",
      "Base for cosmetic creams, makeup, and hair pomades",
      "Anti-rust agent for metal components and engineering parts",
      "Lubricating agent in specialized industrial settings"
    ],
    downloads: {
      tds: "/downloads/Petrolatum_TDS.pdf",
      msds: "/downloads/Petrolatum_MSDS.pdf",
    },
  },
  {
    id: "paraffin-wax",
    image: "/products/paraffin-wax.png",
    name: "Paraffin Wax (Fully Refined)",
    chemicalFormula: "CnH2n+2 (n=20-40)",
    casNumber: "8002-74-2",
    category: CATEGORIES.PETROLEUM,
    shortDescription: "Fully refined solid wax with excellent moisture barrier, gloss, and structural stability.",
    description: "Fully Refined Paraffin Wax is a hard solid derived from petroleum refining. It undergoes rigorous catalytic hydrotreating to achieve a water-white appearance, zero odor, and low oil content (<0.5%). Known for its great electrical insulation, water resistance, and smooth molding capability.",
    techSpecs: {
      purity: "Oil Content < 0.5% (Fully Refined)",
      appearance: "White Solid Slabs or Pellets",
      density: "0.90 g/cm³",
      pH: "N/A",
      activeMatter: "Melting Point: 58°C - 60°C / 60°C - 62°C",
      packaging: "25kg / 50kg PP Woven Bag or Carton Box",
    },
    applications: [
      "Premium candle making (improves burn stability and appearance)",
      "Wax coatings for paperboard, food cartons, and moisture-proof packaging",
      "Polishes for furniture, floorings, and automotive care",
      "Lubricant additive and structural component in rubber processing"
    ],
    downloads: {
      tds: "/downloads/Paraffin_Wax_TDS.pdf",
      msds: "/downloads/Paraffin_Wax_MSDS.pdf",
    },
  },
  {
    id: "propylene-glycol",
    image: "/products/propylene-glycol.png",
    name: "Propylene Glycol (USP / Industrial Grade)",
    chemicalFormula: "C3H8O2",
    casNumber: "57-55-6",
    category: CATEGORIES.PETROLEUM,
    shortDescription: "High-purity humectant, solvent, and stabilizer used in cosmetics, food, and industrial heat systems.",
    description: "Propylene Glycol (PG) is a colorless, viscous, nearly odorless diol liquid. Highly hydroscopic and completely miscible with water, ethanol, and acetone. Available in USP Pharmaceutical Grade for human applications (cosmetics, food) and Industrial Grade for chemical synthesis and cooling fluids.",
    techSpecs: {
      purity: "99.5% Min (USP / Tech Grade)",
      appearance: "Clear Viscous Colorless Liquid",
      density: "1.036 g/cm³",
      pH: "6.0 - 7.5",
      activeMatter: "N/A",
      packaging: "215kg Plastic or Iron Drum or IBC Tote",
    },
    applications: [
      "Humectant and carrier solvent in cosmetics and skin lotions",
      "Solvent and stabilizer in liquid detergent and personal care items",
      "Non-toxic antifreeze, heat transfer fluids, and chilling systems",
      "Intermediate in unsaturated polyester resin (UPR) manufacture"
    ],
    downloads: {
      tds: "/downloads/Propylene_Glycol_TDS.pdf",
      msds: "/downloads/Propylene_Glycol_MSDS.pdf",
    },
  },

  // --- INORGANIC CHEMICALS ---
  {
    id: "soda-ash",
    image: "/products/soda-ash.png",
    name: "Soda Ash (Sodium Carbonate / Light & Dense)",
    chemicalFormula: "Na2CO3",
    casNumber: "497-19-8",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Essential alkaline builder for glass, soaps, detergents, water conditioning, and paper.",
    description: "Sodium Carbonate, commonly called Soda Ash, is an inorganic compound available as Soda Ash Light (low bulk density) and Soda Ash Dense (high bulk density). Light grade is primarily selected for powder detergents and chemical synthesis, while Dense grade is widely utilized in glass manufacturing.",
    techSpecs: {
      purity: "99.2% Min Na2CO3",
      appearance: "White Crystalline Powder or Granules",
      density: "Light: 0.5-0.6 g/cm³, Dense: 0.9-1.0 g/cm³",
      pH: "11.6 (1% aqueous solution)",
      activeMatter: "N/A",
      packaging: "25kg / 50kg Bag or 1000kg Jumbo Bag",
    },
    applications: [
      "Alkaline builder and water softener in powder detergents",
      "Core raw material in glass manufacturing (flat, container, container)",
      "pH adjuster and chemical feedstock in municipal water plants",
      "Dyeing and scouring assistant in textile mills"
    ],
    downloads: {
      tds: "/downloads/Soda_Ash_TDS.pdf",
      msds: "/downloads/Soda_Ash_MSDS.pdf",
    },
  },
  {
    id: "baking-soda",
    image: "/products/baking-soda.png",
    name: "Baking Soda (Sodium Bicarbonate / Food & Tech)",
    chemicalFormula: "NaHCO3",
    casNumber: "144-55-8",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Mild, environmentally safe buffer and cleaner used in food, feed, cosmetics, and flue gas.",
    description: "Sodium Bicarbonate, commonly known as Baking Soda, is a mild alkaline salt. Highly valued for its acid neutralization, buffering ability, and safety. Available in premium Food Grade for baking, pharmaceutical, and animal feed uses, as well as Tech Grade for industrial cleansing and environmental scrubbing.",
    techSpecs: {
      purity: "99.0% - 100.5% Min",
      appearance: "White Powder or Small Crystals",
      density: "2.20 g/cm³",
      pH: "8.3 (0.1M solution)",
      activeMatter: "N/A",
      packaging: "25kg PP/PE Bag",
    },
    applications: [
      "Baking and leavening agent in food processing",
      "Animal feed buffer (optimizes rumen pH in cattle)",
      "Mild abrasive and buffering agent in personal care/toothpaste",
      "Flue gas desulfurization (FGD) in power plants and chimneys"
    ],
    downloads: {
      tds: "/downloads/Baking_Soda_TDS.pdf",
      msds: "/downloads/Baking_Soda_MSDS.pdf",
    },
  },
  {
    id: "stpp",
    image: "/products/stpp.png",
    name: "STPP (Sodium Tripolyphosphate)",
    chemicalFormula: "Na5P3O10",
    casNumber: "7758-29-4",
    category: CATEGORIES.INORGANIC,
    shortDescription: "High-performance detergent builder, water conditioner, and food-grade preservative.",
    description: "Sodium Tripolyphosphate (STPP) is an inorganic salt widely appreciated as a premium builder in heavy-duty powder detergents. It binds calcium and magnesium ions (hardness), disperses suspended clay, and maintains optimal alkaline pH. Also available in Food Grade as a moisture-retaining agent.",
    techSpecs: {
      purity: "94.0% Min",
      appearance: "White Fine Powder or Granules",
      density: "0.35 - 0.90 g/cm³ (Controlled)",
      pH: "9.5 - 10.0 (1% solution)",
      activeMatter: "P2O5: 57.0% Min",
      packaging: "25kg Multi-layer Bag or Jumbo Bag",
    },
    applications: [
      "Viscosity reducer and builder in laundry washing powders",
      "Industrial water conditioning and boiler descaling",
      "Moisture retention and preservative in seafood, meat, and poultry",
      "Dispersant in ceramics, tile glazes, and industrial clays"
    ],
    downloads: {
      tds: "/downloads/STPP_TDS.pdf",
      msds: "/downloads/STPP_MSDS.pdf",
    },
  },
  {
    id: "sodium-citrate",
    image: "/products/sodium-citrate.png",
    name: "Sodium Citrate (Trisodium Citrate Dihydrate)",
    chemicalFormula: "Na3C6H5O7·2H2O",
    casNumber: "6132-04-3",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Eco-friendly, phosphate-free chelating agent, acidity regulator, and preservative.",
    description: "Sodium Citrate is the sodium salt of citric acid. In detergent chemistry, it acts as a modern, green chelating agent that replaces phosphates (STPP) to soften water in eco-friendly laundry and automatic dishwashing items. Also highly used in foods and beverages as a buffer.",
    techSpecs: {
      purity: "99.0% - 101.0%",
      appearance: "White Crystalline Powder or Granules",
      density: "1.7 g/cm³",
      pH: "7.5 - 9.0 (5% aqueous solution)",
      activeMatter: "N/A",
      packaging: "25kg Paper Bag",
    },
    applications: [
      "Phosphate builder replacement in green laundry detergents",
      "Acidity regulator, emulsifier, and preservative in food/beverages",
      "Anticoagulant in medical blood storage bags",
      "Buffering agent in cosmetics and personal care soaps"
    ],
    downloads: {
      tds: "/downloads/Sodium_Citrate_TDS.pdf",
      msds: "/downloads/Sodium_Citrate_MSDS.pdf",
    },
  },
  {
    id: "calcium-chloride",
    image: "/products/calcium-chloride.png",
    name: "Calcium Chloride (74% Flakes / 94% Prills)",
    chemicalFormula: "CaCl2",
    casNumber: "10043-52-4",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Powerful desiccant, dust suppressor, concrete accelerator, and low-temperature deicer.",
    description: "Calcium Chloride is an inorganic salt displaying strong hygroscopicity, rapid dissolution in water, and exothermic reaction. Highly utilized as a professional drying agent (desiccant), industrial dust controller, low-temperature deicing agent, and concrete set accelerator.",
    techSpecs: {
      purity: "74% Min (Dihydrate Flakes) / 94% Min (Anhydrous Prills)",
      appearance: "White Flakes, Pellets or Prills",
      density: "2.15 g/cm³",
      pH: "8.0 - 10.0 (10% solution)",
      activeMatter: "N/A",
      packaging: "25kg Bag or 1000kg Jumbo Bag",
    },
    applications: [
      "Industrial desiccant and dehumidifier formulations",
      "Road dust suppression (hygroscopic action traps dust on roads)",
      "Set accelerator in concrete pouring and civil construction",
      "Low-temperature deicing of highways and aircraft runways"
    ],
    downloads: {
      tds: "/downloads/Calcium_Chloride_TDS.pdf",
      msds: "/downloads/Calcium_Chloride_MSDS.pdf",
    },
  },
  {
    id: "zeolite-4a",
    image: "/products/zeolite-4a.png",
    name: "Zeolite 4A (Detergent Grade)",
    chemicalFormula: "Na12[(AlO2)12(SiO2)12]·27H2O",
    casNumber: "1318-02-1",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Phosphate-free builders that soften water through highly selective calcium ion exchange.",
    description: "Zeolite 4A is a synthetic crystalline aluminosilicate with a highly uniform pore structure. It has emerged as the premier ecological builder for phosphate-free powder detergents. It works by capturing calcium ions in its microscopic crystalline framework, effectively softening wash water.",
    techSpecs: {
      purity: "Calcium Ion Exchange Capacity: 310 mg CaCO3/g Min",
      appearance: "Super Fine White Powder",
      density: "0.40 - 0.50 g/cm³",
      pH: "10.0 - 11.5 (1% dispersion)",
      activeMatter: "Water Content: 21% Max",
      packaging: "25kg Bag or 650kg Jumbo Bag",
    },
    applications: [
      "Primary ecological builder in phosphate-free washing powders",
      "Specialty drying agent and molecular sieve raw material",
      "Stabilizer in PVC plastic compounds",
      "Adsorbent for heavy metals in soil and wastewater treatments"
    ],
    downloads: {
      tds: "/downloads/Zeolite_4A_TDS.pdf",
      msds: "/downloads/Zeolite_4A_MSDS.pdf",
    },
  },
  {
    id: "sodium-hydroxide",
    image: "/products/sodium-hydroxide.png",
    name: "Sodium Hydroxide (Caustic Soda / Flakes & Pearls)",
    chemicalFormula: "NaOH",
    casNumber: "1310-73-2",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Extremely strong alkaline chemical used for soap making, pH adjustment, and water cleaning.",
    description: "Sodium Hydroxide (commonly called Caustic Soda) is a powerful, highly corrosive alkaline base. Essential across chemical manufacturing, it drives the saponification process in soap making and acts as a dominant pH adjuster. Available as 99% pure dry flakes or uniform spherical pearls.",
    techSpecs: {
      purity: "99.0% Min",
      appearance: "White Flakes or Pearl-like Granules",
      density: "2.13 g/cm³",
      pH: "14.0 (5% aqueous solution)",
      activeMatter: "N/A",
      packaging: "25kg PP Bag with PE Liner",
    },
    applications: [
      "Primary saponification agent in solid bar soap manufacturing",
      "pH regulation in municipal and industrial water treatment",
      "Chemical cleaning of metal molds, equipment, and beer kegs",
      "Alkaline wood pulping process in paper and cellulose mills"
    ],
    downloads: {
      tds: "/downloads/Caustic_Soda_TDS.pdf",
      msds: "/downloads/Caustic_Soda_MSDS.pdf",
    },
  },
  {
    id: "tspp",
    image: "/products/tspp.png",
    name: "TSPP (Tetrasodium Pyrophosphate)",
    chemicalFormula: "Na4P2O7",
    casNumber: "7722-88-5",
    category: CATEGORIES.INORGANIC,
    shortDescription: "Synergistic builder, protein modifier, dispersion booster, and tartar controller.",
    description: "Tetrasodium Pyrophosphate (TSPP) is an inorganic phosphorus compound. It operates as an excellent water softener, fat emulsifier, and clay dispersant in cleaning items. It also binds to calcium in saliva, making it a critical tartar-control agent in professional toothpaste lines.",
    techSpecs: {
      purity: "96.0% Min",
      appearance: "White Powder or Granules",
      density: "2.53 g/cm³",
      pH: "9.9 - 10.7 (1% solution)",
      activeMatter: "P2O5: 52.5% Min",
      packaging: "25kg Bag",
    },
    applications: [
      "Synergistic builder in metal cleaners and household detergents",
      "Tartar-control agent and pH buffer in toothpaste formulations",
      "Protein stabilizer and dispersant in food processing (meats/cheese)",
      "Dispersant and color stabilizer in printing inks and coatings"
    ],
    downloads: {
      tds: "/downloads/TSPP_TDS.pdf",
      msds: "/downloads/TSPP_MSDS.pdf",
    },
  },

  // --- PIGMENTS & FILLERS ---
  {
    id: "titanium-dioxide",
    image: "/products/titanium-dioxide.png",
    name: "Titanium Dioxide (Rutile & Anatase)",
    chemicalFormula: "TiO2",
    casNumber: "13463-67-7",
    category: CATEGORIES.PIGMENTS,
    shortDescription: "Ultra-high opacity white pigment offering maximum brightness and UV resistance.",
    description: "Titanium Dioxide (TiO2) is the world's most widely used white pigment because of its extremely high refractive index, outstanding brightness, and superior opacity. Available in Rutile grade (maximum UV resistance and weatherability for outdoor paints/plastics) and Anatase grade (exceptionally white, pure, and popular in cosmetics, fibers, and papers).",
    techSpecs: {
      purity: "93% Min (Rutile TiO2 content) / 98% (Anatase)",
      appearance: "Fine White Dry Powder",
      density: "3.9 - 4.2 g/cm³",
      pH: "6.5 - 8.5 (aqueous suspension)",
      activeMatter: "N/A",
      packaging: "25kg Multi-layer Bag or 1000kg Jumbo Bag",
    },
    applications: [
      "White pigment in architectural, automotive, and industrial coatings",
      "Opacifier and UV barrier in PVC, polyolefins, and masterbatches",
      "Whitening pigment in paper coatings, laminates, and printing inks",
      "Sunscreen UV blocker and cosmetic base opacifier"
    ],
    downloads: {
      tds: "/downloads/Titanium_Dioxide_TDS.pdf",
      msds: "/downloads/Titanium_Dioxide_MSDS.pdf",
    },
  },
  {
    id: "calcium-carbonate",
    image: "/products/calcium-carbonate.png",
    name: "Calcium Carbonate (GCC & PCC)",
    chemicalFormula: "CaCO3",
    casNumber: "471-34-1",
    category: CATEGORIES.PIGMENTS,
    shortDescription: "Primary filler and volume builder for plastics, papers, paints, and adhesives.",
    description: "Calcium Carbonate is the most common mineral filler. Offered as Ground Calcium Carbonate (GCC, mechanically milled from high-purity limestone for general filling) and Precipitated Calcium Carbonate (PCC, chemically synthesized to control particle size and shape, ensuring superior brightness and stiffness).",
    techSpecs: {
      purity: "98.0% Min CaCO3",
      appearance: "Fine White Powder",
      density: "2.71 g/cm³",
      pH: "8.5 - 9.5 (aqueous suspension)",
      activeMatter: "N/A",
      packaging: "25kg Bag or 1000kg Jumbo Bag",
    },
    applications: [
      "Filler and cost-reducer in PVC pipes, profiles, and compounding",
      "Stiffness and brightness builder in alkaline paper manufacturing",
      "Extender pigment in architectural interior/exterior latex paints",
      "Functional filler in sealants, caulks, and construction adhesives"
    ],
    downloads: {
      tds: "/downloads/Calcium_Carbonate_TDS.pdf",
      msds: "/downloads/Calcium_Carbonate_MSDS.pdf",
    },
  },
  {
    id: "talc-powder",
    image: "/products/talc-powder.png",
    name: "Talc Powder (Industrial & Cosmetic Grade)",
    chemicalFormula: "Mg3Si4O10(OH)2",
    casNumber: "14807-96-6",
    category: CATEGORIES.PIGMENTS,
    shortDescription: "Ultra-soft magnesium silicate mineral providing smoothness, anti-sticking, and thermal reinforcement.",
    description: "Talc is the softest known mineral. Made of hydrous magnesium silicate, it features a platelike structure that offers excellent lubrication, high slip, low electrical conductivity, and strong chemical inertness. Our talc powders are asbestos-free and tailored for plastics, cosmetics, and coatings.",
    techSpecs: {
      purity: "98% Min pure mineral",
      appearance: "Super Fine white or off-white powder, smooth feel",
      density: "2.7 - 2.8 g/cm³",
      pH: "8.0 - 9.5",
      activeMatter: "N/A",
      packaging: "25kg Bag",
    },
    applications: [
      "Reinforcement filler in automotive polypropylene compounds (stiffness)",
      "Anti-tack and release dusting powder in rubber sheets and tires",
      "Flatting agent and corrosion barrier in industrial primer paints",
      "High-slip powder base in cosmetic blushes and body talcs"
    ],
    downloads: {
      tds: "/downloads/Talc_Powder_TDS.pdf",
      msds: "/downloads/Talc_Powder_MSDS.pdf",
    },
  },
  {
    id: "bentonite",
    image: "/products/bentonite.png",
    name: "Bentonite (Sodium & Calcium Bentonite)",
    chemicalFormula: "Al2O3·4SiO2·H2O·nH2O",
    casNumber: "1302-78-9",
    category: CATEGORIES.PIGMENTS,
    shortDescription: "Highly swelling smectite clay providing strong rheology control, gelation, and binding.",
    description: "Bentonite is an absorbent aluminum phyllosilicate clay consisting mainly of montmorillonite. Famous for its highly swelling sodium variety (absorbs water, expanding up to 15 times its dry volume) and low-swelling calcium variety. Functions as a thickener, suspension builder, binder, and clarifying agent.",
    techSpecs: {
      purity: "Montmorillonite content > 85%",
      appearance: "Cream to Grey-Brown Fine Powder",
      density: "2.4 - 2.6 g/cm³",
      pH: "8.5 - 10.0 (5% dispersion)",
      activeMatter: "Swelling Index: 20-30 ml/2g (Sodium)",
      packaging: "25kg Bag or 1000kg Jumbo Bag",
    },
    applications: [
      "Rheology modifier and anti-settling agent in paints and drill muds",
      "High-strength binder in foundry sand molds and iron ore pelletizing",
      "Clarification and filtration aid in edible oil and beverage processing",
      "Water barrier sealant in civil engineering and landfill lining"
    ],
    downloads: {
      tds: "/downloads/Bentonite_TDS.pdf",
      msds: "/downloads/Bentonite_MSDS.pdf",
    },
  },

  // --- FINE CHEMICALS ---
  {
    id: "acrylic-emulsion",
    image: "/products/acrylic-emulsion.png",
    name: "Acrylic Emulsion (Water-based Polymer)",
    chemicalFormula: "Polymer emulsion based on acrylates",
    casNumber: "9003-01-4",
    category: CATEGORIES.FINE,
    shortDescription: "Premium water-based polymer binder offering excellent adhesion, gloss, and weather resistance.",
    description: "Our water-based Acrylic Emulsion is synthesized by emulsion polymerization of acrylic monomers. It exhibits exceptional film clarity, excellent UV stability, outstanding washability, and superior adhesion to diverse substrates. Serves as the high-performance binding standard for modern latex paints, inks, and textiles.",
    techSpecs: {
      purity: "Solid Content: 48% ± 1%",
      appearance: "Milky White Liquid",
      density: "1.02 - 1.05 g/cm³",
      pH: "7.0 - 8.5",
      activeMatter: "Solid Content: 48%",
      packaging: "200kg Drum or IBC Tote",
    },
    applications: [
      "Binder in interior/exterior architectural satin & gloss paints",
      "Adhesive and sealant formulations for wood and building materials",
      "Finishing and stiffening agent in textiles and leather tanning",
      "Base binder in water-resistant paper coatings and package inks"
    ],
    downloads: {
      tds: "/downloads/Acrylic_Emulsion_TDS.pdf",
      msds: "/downloads/Acrylic_Emulsion_MSDS.pdf",
    },
  },
  {
    id: "ptsa",
    image: "/products/ptsa.png",
    name: "PTSA (p-Toluenesulfonic Acid Monohydrate)",
    chemicalFormula: "C7H8O3S·H2O",
    casNumber: "104-15-4",
    category: CATEGORIES.FINE,
    shortDescription: "Strong organic acid catalyst popular in chemical synthesis and foundry binders.",
    description: "p-Toluenesulfonic Acid (PTSA) is a strong organic sulfonic acid available as a white crystalline solid. Unlike strong mineral acids (like sulfuric acid), it is solid and easy to handle. It is heavily utilized as an effective organic catalyst in esterification, polymerization, and alkylation reactions.",
    techSpecs: {
      purity: "99.0% Min",
      appearance: "White Needle Crystals",
      density: "1.24 g/cm³",
      pH: "Acidic (<1)",
      activeMatter: "N/A",
      packaging: "25kg Bag",
    },
    applications: [
      "Catalyst in synthesis of plasticizers, esters, and pharma drugs",
      "Acid curing catalyst for amino coatings and wood varnishes",
      "Hardener in furan resin-based foundry sand casting binders",
      "Intermediate in dye and organic chemical manufacturing"
    ],
    downloads: {
      tds: "/downloads/PTSA_TDS.pdf",
      msds: "/downloads/PTSA_MSDS.pdf",
    },
  },
  {
    id: "defoamer",
    image: "/products/defoamer.png",
    name: "Defoamer (Silicone & Polyether-based)",
    chemicalFormula: "Organosilicon / Polyether compound",
    casNumber: "63148-62-9",
    category: CATEGORIES.FINE,
    shortDescription: "High-efficiency bubble killer and foam control agent for paints, paper, and wastewater.",
    description: "Our industrial-strength Defoamer is a highly concentrated silicone (polydimethylsiloxane) or polyether compound designed to quickly collapse existing foam and prevent foam formation in aqueous processes. It displays outstanding thermal stability, wide pH resistance, and works at very low dosages (ppm).",
    techSpecs: {
      purity: "Active content: 30% / 100% (High Concentrate)",
      appearance: "Milky White Emulsion or Clear Liquid",
      density: "0.98 - 1.02 g/cm³",
      pH: "6.0 - 8.0",
      activeMatter: "30% - 100%",
      packaging: "25kg / 200kg Drum or IBC Tote",
    },
    applications: [
      "Foam elimination in municipal and industrial wastewater aeration",
      "Bubble controller in architectural paint mixing and printing inks",
      "Antifoam agent in pulp washing and paper coating machines",
      "Process aid in textile dyeing and metal surface treatments"
    ],
    downloads: {
      tds: "/downloads/Defoamer_TDS.pdf",
      msds: "/downloads/Defoamer_MSDS.pdf",
    },
  },
  {
    id: "cardanol",
    image: "/products/cardanol.png",
    name: "Cardanol (Cashew Nut Shell Liquid derivative)",
    chemicalFormula: "C21H32O",
    casNumber: "37330-39-5",
    category: CATEGORIES.FINE,
    shortDescription: "Bio-based, renewable phenolic compound used to synthesize heavy-duty epoxy hardeners.",
    description: "Cardanol is a natural monohydroxy phenol with a long hydrocarbon C15 side chain. It is extracted by thermal distillation of Cashew Nut Shell Liquid (CNSL), a renewable agricultural byproduct. Cardanol replaces petroleum-derived phenols, offering excellent flexibility, chemical resistance, and hydrophobic curing properties.",
    techSpecs: {
      purity: "95.0% Min",
      appearance: "Yellowish-Brown Viscous Liquid",
      density: "0.93 g/cm³",
      pH: "Neutral",
      activeMatter: "N/A",
      packaging: "200kg Drum",
    },
    applications: [
      "Base material for epoxy phenalkamine curing agents (marine paints)",
      "Raw material for friction dust in brake pads and brake linings",
      "Bio-based plasticizer and resin modifier for coatings and rubber",
      "Feedstock for specialized laminating and phenolic resins"
    ],
    downloads: {
      tds: "/downloads/Cardanol_TDS.pdf",
      msds: "/downloads/Cardanol_MSDS.pdf",
    },
  },
  {
    id: "eds",
    image: "/products/eds.png",
    name: "EDS (Ethylenediamine-N,N'-disuccinic acid)",
    chemicalFormula: "C10H16N2O8",
    casNumber: "20846-91-7",
    category: CATEGORIES.FINE,
    shortDescription: "Modern, fully biodegradable chelating agent replacing EDTA in soaps and cosmetics.",
    description: "Ethylenediamine-N,N'-disuccinic acid (EDS, or [S,S]-EDDS) is a high-performance biodegradable chelating agent. It is designed to capture heavy metal ions (calcium, iron, copper) that decompose formulations. Unlike conventional EDTA, EDS has high environmental safety and rapid biodegradation, meeting clean-label requirements.",
    techSpecs: {
      purity: "37% Liquid (Sodium Salt) / 98% Powder (Acid Form)",
      appearance: "Clear Amber Liquid or White Powder",
      density: "1.15 g/cm³ (Liquid)",
      pH: "11.0 - 12.0 (1% liquid solution)",
      activeMatter: "37% / 98%",
      packaging: "25kg Bag or 250kg Drum",
    },
    applications: [
      "Eco-friendly liquid and powder laundry detergents",
      "Chelating stabilizer in cosmetic shampoos, soaps, and lotions",
      "Heavy metal remediation in soil washings",
      "Process stabilizer in pulp bleaching and textile dye baths"
    ],
    downloads: {
      tds: "/downloads/EDS_TDS.pdf",
      msds: "/downloads/EDS_MSDS.pdf",
    },
  },
];
