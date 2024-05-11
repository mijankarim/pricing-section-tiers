import FeaturesList from "./FeaturesList";

const PricingPlan = ({ item }) => {
  const { plan, description, price, billPeriod, features, popular } = item;
  return (
    <div
      className={`shadow rounded-lg p-4 md:p-8 border  flex flex-col gap-8 col-span-4 md:col-span-6 lg:col-span-4 ${
        popular ? "border-indigo-700 shadow-2xl" : "border-neutral-200"
      }`}
    >
      {popular ? (
        <p className="text-xl text-indigo-700 font-bold py-4 bg-indigo-50 text-center rounded-t-lg rounded-r-lg mx-[-16px] mt-[-16px] md:mx-[-32px] md:mt-[-32px]">
          Most Popular
        </p>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-neutral-900 font-semibold capitalize">
          {plan} plan
        </h3>
        <p className="text-base font-normal text-neutral-600">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={`text-base  font-normal ${
            popular ? "text-indigo-700" : "text-neutral-900"
          }`}
        >
          <span
            className={`text-5xl  font-semibold ${
              popular ? "text-indigo-700" : "text-neutral-900"
            }`}
          >
            ${price}
          </span>
          /month
        </p>
        <p className="text-base font-normal text-neutral-600">{billPeriod}</p>
      </div>
      <FeaturesList features={features} />
      <div className="lg:mt-auto">
        <button
          className={`text-base font-medium py-3 w-full rounded shadow border ${
            popular
              ? "bg-indigo-700 text-white border-indigo-700 transition hover:bg-[#3730A3] hover:border-[#3730A3] focus:bg-[#3730A3] focus:border-[#3730A3] focus:ring focus:ring-[#444CE7]/[.12] disabled:bg-[#f5f5f5] disabled:text-[#a3a3a3]"
              : "text-neutral-900 border-neutral-200 hover:border-[#e6e6e6] hover:bg-[#FAFAFA] focus:bg-[#fafafa] focus:ring focus:ring-[#444CE7]/[.12]  disabled:bg-[#f5f5f5] disabled:text-[#a3a3a3]"
          }`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
