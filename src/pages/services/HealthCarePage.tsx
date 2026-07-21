import ServicePage from "../../components/ui/ServicePage";
export default function HealthCarePage() {
  return (
    <ServicePage
      icon="🏥"
      title="Health & Care"
      description="Quality healthcare at home — doctors, nurses, and lab tests delivered to you."
      color="from-red-100 to-red-50"
      services={["Doctor at Home", "Nurse at Home", "Lab Tests", "Physiotherapy", "Elder Care", "Vaccination at Home"]}
    />
  );
}
