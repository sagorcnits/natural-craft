import { useLoaderData } from "react-router-dom";
import CraftCard from "../../components/CraftCard";

const CategoryCard = () => {
  const categoryData = useLoaderData([]);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
        Categories <span className="text-orange">Item</span>
      </h1>
      <div className="divider-text"></div>
      <p className="poppins-paragraph text-center py-4">
        You can see all the items in our category by visiting the details each Item 
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
