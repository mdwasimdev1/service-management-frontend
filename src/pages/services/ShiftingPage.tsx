import ServicePage from "../../components/ui/ServicePage";
export default function ShiftingPage() {
  return (
    <ServicePage
      icon="📦"
      title="Shifting Services"
      description="Hassle-free home and office relocation with trained packers and movers."
      color="from-amber-100 to-amber-50"
      services={["Home Shifting", "Office Relocation", "Vehicle Transport", "Packers & Movers", "Warehouse Storage", "International Shipping"]}
    />
  );
}
