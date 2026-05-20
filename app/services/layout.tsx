import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omni Logistics Packers and Movers in Jalandhar Services",
  description: "Explore professional relocation services by Omni Logistics Packers and Movers in Jalandhar including house shifting, office relocation, car transportation, packing, loading, and storage solutions.",
  openGraph: {
    title: "Omni Logistics Packers and Movers in Jalandhar Services",
    description: "Explore professional relocation services by Omni Logistics Packers and Movers in Jalandhar including house shifting, office relocation, car transportation, packing, loading, and storage solutions.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
