const Buttons = ({ handleClick, billingPeriod }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => handleClick("monthly")}
        className={`text-base text-neutral-900 font-normal py-[10px] px-[38px]  ${
          billingPeriod === "monthly"
            ? "rounded shadow border border-neutral-200"
            : ""
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleClick("annually")}
        className={`text-base text-neutral-900 font-normal py-[10px] px-[38px]  ${
          billingPeriod === "annually"
            ? "rounded shadow border border-neutral-200"
            : ""
        }`}
      >
        Annually
      </button>
    </div>
  );
};

export default Buttons;
