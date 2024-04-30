import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const CraftListCard = ({ item, handleDelete }) => {
  const { _id, PhotoUrl, itemName, price, rating, customization, stock } = item;

  return (
    <div className="duration-500 border rounded-md overflow-hidden p-3 cursor-pointer relative craftCard bg-[#F5F5F5]">
      <figure>
        <img className="w-full rounded-md" src={PhotoUrl} alt="" />
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
      </div>
      <div className="text-center flex justify-between">
        <Link to={`/update/${_id}`}>
          <button className="button bg-green-700">Update</button>
        </Link>
        <button className="button bg-red-500" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CraftListCard;
