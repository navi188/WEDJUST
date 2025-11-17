// src/data/services.js
import photographer1 from "../assets/photographer1.jpg";
import photographer2 from "../assets/photographer2.jpg";
import photographer3 from "../assets/photographer3.jpg";
import photographer4 from "../assets/photographer4.jpg";

import catering1 from "../assets/catering1.jpg";
import catering2 from "../assets/catering2.jpg";
import catering3 from "../assets/catering3.jpg";
import catering4 from "../assets/catering4.jpg";

import deco1 from "../assets/deco1.jpg";
import deco2 from "../assets/deco2.jpg";
import deco3 from "../assets/deco3.jpg";
import deco4 from "../assets/deco4.jpg";

import dj1 from "../assets/dj1.jpg";
import dj2 from "../assets/dj2.jpg";
import dj3 from "../assets/dj3.jpg";
import dj4 from "../assets/dj4.jpg";

import hall1 from "../assets/hall1.jpg";
import hall2 from "../assets/hall2.jpg";
import hall3 from "../assets/hall3.jpg";
import hall4 from "../assets/hall4.jpg";

// rentals local images
import rental1 from "../assets/rental1.jpg";
import rental2 from "../assets/rental2.jpg";
import rental3 from "../assets/rental3.jpg";
import rental4 from "../assets/rental4.jpg";


// NOTE: rentals images kept as original external URLs (no change requested)
export const servicesData = [
  {
    id: "photographer",
    name: "Photographer",
    icon: "icon1",
    tagline: "Capture every candid and curated moment with top-tier professionals.",
    businesses: [
      {
        id: "lenscraft-studios",
        name: "LensCraft Studios",
        image: photographer1,
        startingPrice: "₹18,000 / day",
        contact: {
          phone: "+91 98765 43210",
          email: "hello@lenscraft.in",
          website: "https://lenscraft.example.com",
        },
        highlight: "Award-winning wedding film-makers with a cinematic style.",
      },
      {
        id: "prime-shutter",
        name: "Prime Shutter Co.",
        image: photographer2,
        startingPrice: "₹22,500 / day",
        contact: {
          phone: "+91 99887 66554",
          email: "bookings@primeshutter.com",
          website: "https://primeshutter.example.com",
        },
        highlight: "Full team coverage for both bride and groom sides.",
      },
      {
        id: "golden-hour",
        name: "Golden Hour Tales",
        image: photographer3,
        startingPrice: "₹15,500 / day",
        contact: {
          phone: "+91 88003 22145",
          email: "contact@goldenhourtales.com",
          website: "https://goldenhourtales.example.com",
        },
        highlight: "Specialists in dreamy outdoor pre-wedding shoots.",
      },
      {
        id: "frame-and-fable",
        name: "Frame & Fable",
        image: photographer4,
        startingPrice: "₹19,999 / day",
        contact: {
          phone: "+91 91234 77889",
          email: "hi@framefable.in",
          website: "https://framefable.example.com",
        },
        highlight: "Story-driven albums with next-day sneak peeks.",
      },
    ],
  },
  {
    id: "catering",
    name: "Catering",
    icon: "icon2",
    tagline: "Curated menus and flawless service for every palate.",
    businesses: [
      {
        id: "royal-feast",
        name: "Royal Feast Caterers",
        image: catering1,
        startingPrice: "₹750 / plate",
        contact: {
          phone: "+91 97234 55667",
          email: "events@royalfeast.in",
          website: "https://royalfeast.example.com",
        },
        highlight: "Live counters with regional and fusion specialities.",
      },
      {
        id: "saffron-spread",
        name: "Saffron Spread",
        image: catering2,
        startingPrice: "₹950 / plate",
        contact: {
          phone: "+91 99112 33445",
          email: "bookings@saffronspread.com",
          website: "https://saffronspread.example.com",
        },
        highlight: "Premium multi-cuisine buffets and curated tasting sessions.",
      },
      {
        id: "urban-thali",
        name: "Urban Thali Co.",
        image: catering3,
        startingPrice: "₹680 / plate",
        contact: {
          phone: "+91 87900 11223",
          email: "hello@urbanthali.co",
          website: "https://urbanthali.example.com",
        },
        highlight: "Contemporary take on traditional vegetarian feasts.",
      },
      {
        id: "coastal-bite",
        name: "Coastal Bite Caterers",
        image: catering4,
        startingPrice: "₹840 / plate",
        contact: {
          phone: "+91 90081 55664",
          email: "info@coastalbite.in",
          website: "https://coastalbite.example.com",
        },
        highlight: "Fresh seafood spreads and coastal delicacies straight from the shore.",
      },
    ],
  },
  {
    id: "dj-music",
    name: "DJ & Music",
    icon: "icon3",
    tagline: "Pack the dance floor with curated playlists and top-notch sound.",
    businesses: [
      {
        id: "beatwave",
        name: "DJ Beatwave",
        image: dj1,
        startingPrice: "₹35,000 / night",
        contact: {
          phone: "+91 77660 99887",
          email: "vibes@djbeatwave.com",
          website: "https://djbeatwave.example.com",
        },
        highlight: "Bollywood, Punjabi and EDM mashups with interactive MC.",
      },
      {
        id: "electric-raga",
        name: "Electric Raga Collective",
        image: dj2,
        startingPrice: "₹45,000 / night",
        contact: {
          phone: "+91 80909 66778",
          email: "hello@electricraga.in",
          website: "https://electricraga.example.com",
        },
        highlight: "Live DJ with dhol and saxophone fusion acts.",
      },
      {
        id: "midnight-vibes",
        name: "Midnight Vibes",
        image: dj3,
        startingPrice: "₹28,000 / night",
        contact: {
          phone: "+91 88991 22334",
          email: "bookings@midnightvibes.com",
          website: "https://midnightvibes.example.com",
        },
        highlight: "Hybrid DJ & live percussion for sangeet and cocktail nights.",
      },
      {
        id: "resonance-pro",
        name: "Resonance Pro Audio",
        image: dj4,
        startingPrice: "₹32,000 / night",
        contact: {
          phone: "+91 90055 44332",
          email: "sound@resonancepro.in",
          website: "https://resonancepro.example.com",
        },
        highlight: "Club-grade sound and lighting rigs with on-site engineers.",
      },
    ],
  },
  {
    id: "decor",
    name: "Tent & Decorations",
    icon: "icon4",
    tagline: "Transform any venue with bespoke decor and immersive themes.",
    businesses: [
      {
        id: "aura-decor",
        name: "Aura Decor Lab",
        image: deco1,
        startingPrice: "₹1,80,000 / event",
        contact: {
          phone: "+91 88990 77654",
          email: "design@auradecorlab.com",
          website: "https://auradecorlab.example.com",
        },
        highlight: "Immersive floral experiences and customized stage builds.",
      },
      {
        id: "canvas-events",
        name: "Canvas Events",
        image: deco2,
        startingPrice: "₹2,10,000 / event",
        contact: {
          phone: "+91 70009 66554",
          email: "hello@canvas.events",
          website: "https://canvas.events",
        },
        highlight: "Theme-based decor with dynamic lighting and installations.",
      },
      {
        id: "marigold-avenue",
        name: "Marigold Avenue",
        image: deco3,
        startingPrice: "₹1,35,000 / event",
        contact: {
          phone: "+91 94455 22110",
          email: "info@marigoldavenue.in",
          website: "https://marigoldavenue.example.com",
        },
        highlight: "Traditional mandap and mehendi setups with modern touches.",
      },
      {
        id: "stellar-structures",
        name: "Stellar Structures",
        image: deco4,
        startingPrice: "₹1,60,000 / event",
        contact: {
          phone: "+91 95551 22889",
          email: "bookings@stellarstructures.in",
          website: "https://stellarstructures.example.com",
        },
        highlight: "Luxury tents, transparent marquees and weather-proof builds.",
      },
    ],
  },
  {
    id: "banquet-hall",
    name: "Banquet Halls",
    icon: "icon5",
    tagline: "Find the perfect canvas for your celebration with curated venues.",
    businesses: [
      {
        id: "grandeur-palace",
        name: "Grandeur Palace",
        image: hall1,
        startingPrice: "₹3,50,000 / event",
        contact: {
          phone: "+91 81111 44556",
          email: "bookings@grandeurpalace.in",
          website: "https://grandeurpalace.example.com",
        },
        highlight: "1,200 guest capacity with in-house catering and valet.",
      },
      {
        id: "the-velvet",
        name: "The Velvet Ballroom",
        image: hall2,
        startingPrice: "₹2,80,000 / event",
        contact: {
          phone: "+91 86604 55332",
          email: "hello@velvetballroom.com",
          website: "https://velvetballroom.example.com",
        },
        highlight: "Art deco interiors with intelligent lighting presets.",
      },
      {
        id: "emerald-court",
        name: "Emerald Court",
        image: hall3,
        startingPrice: "₹2,40,000 / event",
        contact: {
          phone: "+91 93111 66778",
          email: "events@emeraldcourt.in",
          website: "https://emeraldcourt.example.com",
        },
        highlight: "Open-to-sky lawn with indoor ballroom backup.",
      },
      {
        id: "skyline-pavilion",
        name: "Skyline Pavilion",
        image: hall4,
        startingPrice: "₹3,10,000 / event",
        contact: {
          phone: "+91 95550 99886",
          email: "contact@skylinepavilion.com",
          website: "https://skylinepavilion.example.com",
        },
        highlight: "Panoramic city views with premium hospitality suites.",
      },
    ],
  },
  {
    id: "rentals",
    name: "Rentals",
    icon: "icon6",
    tagline: "Everything you need on-demand, from luxury rides to quirky props.",
    businesses: [
      {
        id: "drive-royale",
        name: "Drive Royale",
        image: rental1,
        startingPrice: "₹12,000 / day",
        contact: {
          phone: "+91 94488 76543",
          email: "rides@driveroyale.in",
          website: "https://driveroyale.example.com",
        },
        highlight: "Luxury car fleet with chauffeur service.",
      },
      {
        id: "propbox",
        name: "PropBox Rentals",
        image: rental2,
        startingPrice: "₹6,500 / day",
        contact: {
          phone: "+91 98111 44221",
          email: "hello@propbox.in",
          website: "https://propbox.example.com",
        },
        highlight: "Photo booth setups, LED letters, and quirky decor props.",
      },
      {
        id: "light-luxe",
        name: "Light Luxe",
        image: rental3,
        startingPrice: "₹9,000 / day",
        contact: {
          phone: "+91 90000 33445",
          email: "support@lightluxe.com",
          website: "https://lightluxe.example.com",
        },
        highlight: "Professional lighting rigs and stage setups.",
      },
      {
        id: "sequin-lounge",
        name: "Sequin Lounge Rentals",
        image: rental4,
        startingPrice: "₹7,200 / day",
        contact: {
          phone: "+91 91230 22110",
          email: "bookings@sequinlounge.in",
          website: "https://sequinlounge.example.com",
        },
        highlight: "Lounge seating, bar counters and cocktail furniture.",
      },
    ],
  }  
];

export const servicesIndex = servicesData.map(({ id, name, icon }) => ({
  id,
  name,
  icon,
}));
