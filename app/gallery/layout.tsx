import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omni Logistics Packers and Movers Gallery",
  description: "View the gallery of Omni Logistics Packers and Movers in Jalandhar showcasing successful home shifting, office relocation, packing, loading, transportation, and moving service projects.",
  openGraph: {
    title: "Omni Logistics Packers and Movers Gallery",
    description: "View the gallery of Omni Logistics Packers and Movers in Jalandhar showcasing successful home shifting, office relocation, packing, loading, transportation, and moving service projects.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
