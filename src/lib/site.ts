/* ============================================================
   DigiHRK Store — central config
   ------------------------------------------------------------
   HRK, dhyaan do:
   1. PRICE: neeche dono products ki `price` (jo customer dega)
      aur `mrp` (kati hui purani price) apne hisaab se badal do.
      Site par jo price dikhegi, wahi Razorpay payment page par
      honi chahiye — dono match karo.
   2. RAZORPAY LINK: Razorpay dashboard me dono products ke liye
      "Payment Page" banao, uska link (https://rzp.io/l/...) copy
      karke neeche `razorpayLinks` me paste kar do. Saare
      "Buy Now" buttons apne aap wahi link kholenge.
   ============================================================ */

export const SITE = {
  brand: "DigiHRK",
  domain: "https://digihrk.com",
  supportEmail: "support@digihrk.com",
  tagline: "Printable bundles kids love. Parents trust.",
};

export const razorpayLinks = {
  coloring: "https://rzp.io/l/PASTE-COLORING-PAYMENT-LINK",
  worksheets: "https://rzp.io/l/PASTE-WORKSHEETS-PAYMENT-LINK",
} as const;

export type ProductKey = keyof typeof razorpayLinks;

export interface Product {
  key: ProductKey;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  mrp: number;
  image: string;
  imageAlt: string;
  badge: string;
}

export const products: Record<ProductKey, Product> = {
  coloring: {
    key: "coloring",
    slug: "coloring-pages-bundle",
    name: "10,000,000+ Coloring Pages Bundle",
    shortName: "Coloring Pages Bundle",
    tagline: "100,000+ Coloring Books • PDF + SVG + AI formats • For Kids & Adults",
    price: 199,
    mrp: 999, // <-- HRK: kati hui purani price yahan badlo
    image: "/product-coloring.png",
    imageAlt: "10 Million+ Kids Coloring Pages bundle cover",
    badge: "BESTSELLER",
  },
  worksheets: {
    key: "worksheets",
    slug: "kids-activity-worksheets",
    name: "15,000+ Kids Activity Worksheets Bundle",
    shortName: "Kids Worksheets Bundle",
    tagline: "Ages 3–8 • Alphabets, Hindi, Numbers, Coloring, Cut & Glue, Word Search",
    price: 199,
    mrp: 999, // <-- HRK: kati hui purani price yahan badlo
    image: "/product-worksheets.png",
    imageAlt: "15000+ Kids Activities Worksheets box",
    badge: "PARENT'S CHOICE",
  },
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const discountPct = (p: Product) =>
  Math.round(((p.mrp - p.price) / p.mrp) * 100);
