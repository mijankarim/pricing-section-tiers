import check from "../assets/check-fill.png";
const FeatureItem = ({ feature }) => {
  return (
    <li className="flex flex-row items-center gap-3">
      <img src={check} alt="icon" className="w-6 h-6" />
      <span className="text-base font-normal text-neutral-600">{feature}</span>
    </li>
  );
};

export default FeatureItem;
