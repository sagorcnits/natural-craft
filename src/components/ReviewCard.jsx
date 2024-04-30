const ReviewCard = ({name,image,description}) => {
  return (
    <div className="bg-[#F5F5F5] p-6 space-y-8 poppins-paragraph  cursor-pointer ">
      <div className="flex justify-between  items-center">
        <div className="w-[70px] rounded-lg overflow-hidden">
          <img src={image} />
        </div>
        <div className="rating rating-md ">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <div className="flex justify-between border-b border-black border-dashed pb-3">
        <p className="font-bold">{name}</p>
        <p>1 day ago</p>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default ReviewCard;
