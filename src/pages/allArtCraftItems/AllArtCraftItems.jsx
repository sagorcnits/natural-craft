import { Link, useLoaderData } from "react-router-dom";

const AllArtCraftItems = () => {
  const allItemData = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
        All Jute & wooden Crafts Item
      </h1>
      <div className="divider-text"></div>
      <p className="poppins-paragraph text-center py-4">
      You can see the details of all our products
      </p>

      <div className="overflow-x-auto mt-8">
        {allItemData.length > 0 ? (
          <table className="table">
            <thead>
              <tr className=" *:text-[19px]   poppins-font">
                <th>Item Name</th>
                <th>Subcategory Name</th>
                <th>Price</th>
                <th>Customization</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {allItemData.map((item, id) => {
                return (
                  <tr key={id} className="*:text-[17px] poppins-paragraph">
                    <td>{item.itemName}</td>
                    <td>{item.subcategory_Name}</td>
                    <td>{item.price}</td>
                    <td>{item.customization}</td>
                    <td>
                      <Link to={`/details/${item._id}`}>
                        <button className="button bg-green-500 poppins-font text-[17px]">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AllArtCraftItems;
