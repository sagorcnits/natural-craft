import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";
const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAdded = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const itemName = form.item_name.value;
    const subcategory_Name = form.subcategory.value;
    const PhotoUrl = form.Photo_URL.value;
    const stock = form.stock.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processing_time.value;
    const description = form.description.value;

    const addItem = {
      userName,
      userEmail,
      itemName,
      subcategory_Name,
      PhotoUrl,
      stock,
      price,
      rating,
      customization,
      processingTime,
      description,
    };

    fetch("https://natural-craft-server.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success Your Added",
            // text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:w-[70%] mx-auto p-2 md:p-6 bg-[#F5F5F5] box-shadow">
        <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold ">
          Add New{" "}
          <span className="text-orange">
            <Typewriter
              words={["Item", "Airt", "Craft"]}
              loop={true}
              delaySpeed={1000}
              deleteSpeed={200}
              typeSpeed={200}
            ></Typewriter>
          </span>
        </h1>
        <div className="divider-text"></div>
        <form className="addCraft mt-10" onSubmit={handleAdded}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="poppins-font">Name:</label>
              <input
                className="w-full"
                type="text"
                placeholder="name"
                name="name"
                defaultValue={user.displayName}
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="poppins-font">Email:</label>
              <input
                className="w-full"
                type="email"
                placeholder="email"
                name="email"
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>
          <div className="md:flex gap-4 mt-4">
            <div className="flex-1">
              <label className="poppins-font">Item Name:</label>
              <input
                className="w-full"
                type="text"
                placeholder="item name"
                name="item_name"
              />
            </div>
            <div className="flex-1">
              <label className="poppins-font">Choose Subcategory:</label>
              <div>
                <select
                  id="cars"
                  name="subcategory"
                  className="w-full cursor-pointer "
                >
                  <option value="Wooden Furniture & Sculptures">
                    Wooden Furniture & Sculptures
                  </option>
                  <option value="Wooden Home Decor">Wooden Home Decor</option>
                  <option value="Wooden Utensils and Kitchenware">
                    Wooden Utensils and Kitchenware
                  </option>
                  <option value="Jute Home Decor">Jute Home Decor</option>
                  <option value="Jute Kitchenware & utensils">
                    Jute Kitchenware & utensils
                  </option>
                  <option value="Jute and wooden jewellery">
                    Jute and wooden jewellery
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <label className="poppins-font">Photo URL:</label>
              <input
                className="w-full"
                type="text"
                placeholder="Photo URL"
                name="Photo_URL"
              />
            </div>
            <div className="flex-1">
              <label className="poppins-font">Stock Status :</label>
              <div>
                <select
                  id="cars"
                  name="stock"
                  className="w-full cursor-pointer"
                >
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <label className="poppins-font">Price:</label>
              <input
                className="w-full"
                type="text"
                placeholder="Price"
                name="price"
              />
            </div>
            <div className="flex-1">
              <label className="poppins-font">Rating:</label>
              <input
                className="w-full"
                type="text"
                placeholder="Rating"
                name="rating"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <label className="poppins-font">Customization:</label>
              <div>
                <select
                  id="cars"
                  name="customization"
                  className="w-full cursor-pointer"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="poppins-font">Processing Time:</label>
              <input
                className="w-full"
                type="text"
                placeholder="processing time"
                name="processing_time"
              />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="poppins-font">Short Description:</label>
              <textarea
                className="w-full box-shadow h-[170px] mt-4 p-4 rounded-md resize-none focus:outline-none"
                placeholder="short description"
                name="description"
              ></textarea>
            </div>
          </div>
          <button className="button w-full mt-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
