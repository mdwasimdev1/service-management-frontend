import ServicePage from "../../components/ui/ServicePage";
export default function ElectricPlumbingPage() {
  return (
    <ServicePage
      icon="⚡"
      title="Electric & Plumbing"
      description="Certified electricians and plumbers available 24/7 for all home repair needs."
      color="from-yellow-100 to-yellow-50"
      services={["Electrical Repair", "Plumbing Fix", "Fan & Light Installation", "Pipe Leakage", "Switchboard Repair", "Water Tank Cleaning"]}
    />
  );
}
