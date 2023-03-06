import { useQuery } from "@tanstack/react-query";
import FeaturedDetails from "./FeaturedDetails";
const FeaturedProducts = ({ featureItems, active }) => {
  const { data: featured = [] } = useQuery({
    queryKey: ["featured"],
    queryFn: () =>
      fetch("https://cafe-server-side.vercel.app/featured").then((res) =>
        res.json()
      ),
  });

  return (
    <div className="">
      <div className="mt-5 flex justify-between">
        <h2 className="text-3xl text-[#6D3622] hidden lg:block md:block ">
          product featured
        </h2>
        <div className="flex gap-4 mx-auto lg:mx-0">
          {featured.map((feature) => (
            <FeaturedDetails
              key={feature._id}
              feature={feature}
              featureItems={featureItems}
              active={active}
            ></FeaturedDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
