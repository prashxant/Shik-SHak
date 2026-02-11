
import { FintaHeading } from "./heading";
import { Flick } from "./Flick";


const addons = [
  {
    name: "Delaware franchise tax",
    price: "Included",
    included: true,
  },
  {
    name: "State income tax",
    price: "$150 ea.",
  },
  {
    name: "Foreign founders",
    price: "$250 ea.",
  },
  {
    name: "Foreign subsidiary",
    price: "$1,000 ea.",
  },
  {
    name: "R&D tax credits",
    price: "5%",
  },
  {
    name: "Form 1099s",
    price: "$10 ea.",
  },
];

export const Inception = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FintaHeading
        headingBlack="Pricing for "
        headingBlue="inception to scale"
        subheading="Transparent and scales with features you use, not your expenses."
      />
      <TaxSlider />
      <Card />
      <Flick />
    </div>
  );
};

const TaxSlider = () => {
  return (
    <div className="my-10 flex cursor-pointer items-center justify-center rounded-md bg-neutral-200 text-[14px] font-medium text-neutral-800">
      <button className="m-0.5 cursor-pointer rounded-md border border-neutral-300 bg-white px-2 shadow">
        Taxes
      </button>
      <button className="cursor-pointer px-2">Accounting</button>
    </div>
  );
};

function Card() {
  return (
    <div className="mb-20 w-lg rounded-md border border-neutral-300 p-5 shadow-md">
      <h1 className="font-semibold tracking-tight text-blue-400">Taxes</h1>
      <div className="flex items-center justify-between gap-10 text-black">
        <div className="text-sm tracking-tight">Federal income tax</div>
        <p className="text-2xl font-bold">$500</p>
      </div>
      <hr className="my-1 h-px border-0 bg-gray-200 mask-x-from-70% dark:bg-gray-300/50"></hr>
      <div className="py-2">
        <p className="font-semibold">Add-ons:</p>
        <div>
          {addons.map((addon, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                {addon.included ? (
                  <span className="text-lg text-blue-500">✓</span>
                ) : (
                  <span className="text-lg text-gray-400">+</span>
                )}

                <span className="text-gray-600 underline decoration-dotted underline-offset-4">
                  {addon.name}
                </span>
              </div>

              <span className="font-medium text-gray-600">{addon.price}</span>
            </div>
          ))}
        </div>
        <div className="my-4 rounded-md bg-gray-100 p-4">
          <p className="text-gray-600">
            You&apos;ll be automatically set up on the free Accounting plan to
            onboard taxes in the app. Filing taxes requires accounting data.
          </p>
          <button className="my-2 cursor-pointer rounded-lg bg-[#2579F4] px-4 py-2 font-semibold tracking-wide text-white shadow-lg text-shadow-md">
            File taxes
          </button>
        </div>
      </div>
    </div>
  );
}


