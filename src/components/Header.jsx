const Header = () => {
  return (
    <header className="flex flex-col items-center gap-3">
      <p className="text-base text-indigo-700 font-semibold">Pricing Tiers</p>
      <h2 className="text-3xl text-neutral-900 font-semibold mb-2 md:text-5xl">
        Fit for all your needs
      </h2>
      <p className="text-center text-lg text-neutral-600 font-normal md:text-xl max-w-[896px]">
        Pick the plan that suits you today and step up as your demands grow -
        our flexible options have your journey mapped out.
      </p>
    </header>
  );
};

export default Header;
