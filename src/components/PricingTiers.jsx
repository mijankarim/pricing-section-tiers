import { useState } from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import PricingPlans from "./PricingPlans";
import data from "../data/pricing.json";

const PricingTiers = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const handleClick = (value) => {
    setBillingPeriod(value);
  };
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Buttons handleClick={handleClick} billingPeriod={billingPeriod} />
      <PricingPlans
        data={data}
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
      />
    </div>
  );
};

export default PricingTiers;
