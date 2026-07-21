import ServicePage from "../../components/ui/ServicePage";
export default function AcRepairPage() {
  return (
    <ServicePage
      icon="❄️"
      title="AC Repair Services"
      description="Fast, reliable AC repair and maintenance by certified technicians. Same-day service available."
      color="from-sky-100 to-sky-50"
      services={["Split AC Service", "Window AC Repair", "AC Deep Cleaning", "Gas Refilling", "AC Installation", "AC Uninstallation"]}
    />
  );
}
