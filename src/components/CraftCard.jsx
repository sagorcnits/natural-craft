import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const CraftCard = ({ item }) => {
  const {
    _id,
    itemName,
    PhotoUrl,
    stock,
    price,
    rating,
    customization,
    description,
  } = item;

  return (
    <div className=" duration-500 h-[500px] border rounded-md overflow-hidden p-3 cursor-pointer relative craftCard bg-[#F5F5F5]">
      <figure className="h-[200px] overflow-hidden">
        <img className="w-full  rounded-md" src={PhotoUrl} alt="" />
      </figure>
      <span className="p-1 absolute  top-4 right-4 bg-red-500  font-bold text-white rounded-md poppins-pargraph">
        {stock}
      </span>
      <div className="py-3 space-y-3 poppins-paragraph">
        <h1 className="text-xl poppins-font">{itemName}</h1>
        <div className="flex justify-between items-center text-[#131313CC] font-semibold">
          <p>price: {price}</p>
          <p className="flex items-center gap-1">
            {<FcRating className="text-xl"></FcRating>} {rating}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[#131313CC] font-semibold border-b  pb-2">
          <p>customization: {customization}</p>
        </div>
        <p>{description}</p>
      </div>
      <div className="text-center absolute bottom-0 w-full py-2">
        <Link to={`/details/${_id}`}>
          <button className="button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CraftCard;
