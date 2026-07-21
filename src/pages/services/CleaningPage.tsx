import ServicePage from "../../components/ui/ServicePage";
export default function CleaningPage() {
  return (
    <ServicePage
      icon="🧹"
      title="Cleaning Solution"
      description="Professional home, office, and deep cleaning services with eco-friendly products."
      color="from-emerald-100 to-emerald-50"
      services={["Deep Cleaning Service", "Home Cleaning Solutions", "Office Cleaning Experts", "Premium Housekeeping", "Carpet & Sofa Cleaning", "Kitchen Deep Clean"]}
    />
  );
}
