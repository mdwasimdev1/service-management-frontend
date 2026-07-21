import ServicePage from "../../components/ui/ServicePage";
export default function DriverServicePage() {
  return (
    <ServicePage
      icon="🚗"
      title="Driver Service"
      description="Professional, verified drivers for daily commute, outstation trips, and airport transfers."
      color="from-blue-100 to-blue-50"
      services={["Daily Driver", "Outstation Driver", "Airport Transfer", "Corporate Driver", "Wedding Driver", "Tour & Travel"]}
    />
  );
}
