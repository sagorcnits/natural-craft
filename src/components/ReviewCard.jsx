const ReviewCard = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 space-y-8 poppins-paragraph  cursor-pointer ">
      <div className="flex justify-between  items-center">
        <div className="client-saying overflow-hidden">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
        <p className="font-bold">Jhone Doe</p>
        <p>1 day ago</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptas
        iste soluta quam voluptate eaque corporis corrupti, non aut, inventore
        eum nam accusantium dolore, ducimus quidem ab aperiam iure ad.
      </p>
    </div>
  );
};

export default ReviewCard;
