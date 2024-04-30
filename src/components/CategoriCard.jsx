import { Link } from "react-router-dom";

const CategoriCard = ({categorie}) => {
  const  {image,subcategory_Name} = categorie;

  
// console.log(subcategory_Name.replaceAll(' ', "-"))
  return (
    <Link to={`/category/${subcategory_Name.replaceAll(' ', "-")}`}>
      <div className=" p-4  gap-2 cursor-pointer text-center hover:scale-[1.1] duration-500">
        <figure className="w-[130px] h-[130px] mx-auto rounded-full  border border-gray-500 box-shadow">
          <img
            className="w-full h-full rounded-full"
            src={image}
            alt=""
          />
        </figure>
        <h1 className="poppins-font text-[18px]">{subcategory_Name}</h1>
      </div>
    </Link>
  );
};

export default CategoriCard;
