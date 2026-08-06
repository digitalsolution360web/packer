import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packers and Movers Charges in Jalandhar 2026 – Complete Price List & Guide",
  description:
    "Get accurate Packers and Movers charges in Jalandhar for home, office, car & bike shifting. Transparent pricing, no hidden costs. Call Omni Logistics today!",
  openGraph: {
    title: "Affordable Packers and Movers Price in Jalandhar",
    description:
      "Check affordable pricing plans for Omni Logistics Packers and Movers in Jalandhar. Get transparent quotes for home shifting, office relocation, and vehicle transport.",
  },
};

export default function PriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}