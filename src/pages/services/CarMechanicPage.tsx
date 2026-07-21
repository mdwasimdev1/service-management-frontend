import ServicePage from "../../components/ui/ServicePage";
export default function CarMechanicPage() {
  return (
    <ServicePage
      icon="🔧"
      title="Car Mechanic"
      description="Expert car servicing and repair at your doorstep. All car brands supported."
      color="from-orange-100 to-orange-50"
      services={["Car Service", "Battery Replacement", "Tyre Puncture", "Denting & Painting", "Oil Change", "Car Wash"]}
    />
  );
}
