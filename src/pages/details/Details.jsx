import { FcRating } from "react-icons/fc";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  // const [details, setDetails] = useState([]);
  const detailsId = useParams();
  const details = useLoaderData();
  const detailsData = details.find((item) => item._id === detailsId.id);
  // console.log(detailsData.PhotoUrl);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mt-8 md:h-[400px]">
        <div className="relative border">
          <div className="overflow-hidden h-full">
            <img
              className="w-full  h-full duration-500 cursor-pointer hover:scale-[1.2]"
              src={detailsData.PhotoUrl}
              alt=""
            />
          </div>
          <span className="p-1 absolute  top-4 right-4 bg-red-500  font-bold text-white rounded-md poppins-pargraph">
            {detailsData.stock}
          </span>
        </div>

        <div className="md:w-[70%] relative">
          <h1 className="text-[20px] lg:text-[30px] poppins-font  pb-2">
            {detailsData.itemName}
          </h1>
          <p className="poppins-paragraph text-[18px] pb-6">
            <span className="font-bold">Subcategory Name:</span>{" "}
            {detailsData.subcategory_Name}
          </p>
          <p className="py-3 poppins-paragraph  text-[18px] border-b pb-3  border-dashed">
            {detailsData.description}
          </p>
          <div className="flex w-[300px] justify-between  items-center  mt-6">
            <p className="poppins-paragraph  text-[18px]">
              <span className="font-bold">price:</span> {detailsData.price}
            </p>
            <p className="poppins-paragraph  text-[18px] flex items-center gap-1">
              {<FcRating className="text-xl"></FcRating>} {detailsData.rating}
            </p>
          </div>
          <div>
            <p className="poppins-paragraph  text-[18px] pt-2">
              <span className="font-bold">Customization:</span>{" "}
              {detailsData.customization}
            </p>
            <p className="poppins-paragraph  text-[18px] pt-2">
              <span className="font-bold">Processing Time:</span>{" "}
              {detailsData.processingTime}
            </p>
          </div>
          <button className="button absolute bottom-0">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
