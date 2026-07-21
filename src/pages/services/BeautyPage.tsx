import ServicePage from "../../components/ui/ServicePage";
export default function BeautyPage() {
  return (
    <ServicePage
      icon="💆"
      title="Beauty & Wellness"
      description="Salon-quality beauty and wellness services at home. Certified beauticians at your doorstep."
      color="from-pink-100 to-pink-50"
      services={["Bridal Makeup", "Hair Spa & Treatment", "Facial & Skin Care", "Manicure & Pedicure", "Body Massage", "Threading & Waxing"]}
    />
  );
}
