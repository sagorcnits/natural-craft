import { useLoaderData } from "react-router-dom";
import CraftCard from "../../components/CraftCard";

const CategoryCard = () => {
  const categoryData = useLoaderData([]);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
        All Wodden <span className="text-orange">Craft</span>
      </h1>
      <div className="divider-text"></div>
      <p className="poppins-paragraph text-center py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a!
        Distinctio alias, <br /> delectus debitis in nesciunt optio impedit,
        quasi perspiciatis animi commodi
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {categoryData.map((item, id) => (
          <CraftCard key={id} item={item}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
