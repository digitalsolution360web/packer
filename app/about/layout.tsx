import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Omni Logistics Packers and Movers in Jalandhar",
  description: "Know more about Omni Logistics Packers and Movers in Jalandhar, a trusted relocation company providing secure packing, loading, transportation, and moving services with complete customer satisfaction.",
  openGraph: {
    title: "About Omni Logistics Packers and Movers in Jalandhar",
    description: "Know more about Omni Logistics Packers and Movers in Jalandhar, a trusted relocation company providing secure packing, loading, transportation, and moving services with complete customer satisfaction.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
