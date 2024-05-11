import PricingPlan from "./PricingPlan";

const PricingPlans = ({ data, billingPeriod }) => {
  return (
    <div className="gap-8 mt-2 md:mt-6 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
      {data[`${billingPeriod}`]?.map((item, index) => (
        <PricingPlan key={index} item={item} />
      ))}
    </div>
  );
};

export default PricingPlans;
