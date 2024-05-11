import FeatureItem from "./FeatureItem";

const FeaturesList = ({ features }) => {
  return (
    <ul className="flex flex-col gap-5">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </ul>
  );
};

export default FeaturesList;
