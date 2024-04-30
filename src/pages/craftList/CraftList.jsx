import { useContext, useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoMdArrowDropdown } from "react-icons/io";
import Swal from 'sweetalert2';
import { AuthContext } from "../../components/AuthProvider";
import CraftListCard from "../../components/CraftListCard";

const CraftList = () => {
  const [userData, setUserData] = useState([]);
  const [userFilterData, setUserFilterData] = useState([]);
  const [selectCustom, setSelectCustom] = useState("All");
  const [isDelete, setDelete] = useState(false);
  const { user } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    fetch(`https://natural-craft-server.vercel.app/items/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setUserFilterData(data);
      });
  }, [isDelete]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://natural-craft-server.vercel.app/items/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: null,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setDelete(!isDelete);
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const dropDown = () => {
    setActive(!isActive);
    console.log("dropDown");
  };

  const itemFilter = (data = "All") => {
    if (data === "Yes") {
      const yesData = userFilterData.filter(
        (item) => item.customization === data
      );
      setUserData(yesData);
    } else if (data === "No") {
      const noData = userFilterData.filter(
        (item) => item.customization === data
      );
      setUserData(noData);
    } else if (data === "All") {
      setUserData(userFilterData);
    } else {
      console.log("error Userdata");
    }
    setActive(!isActive);
    setSelectCustom(data);
  };

  // console.log(userData);
  return (
    <div className="max-w-6xl mx-auto">
      <Fade delay={300}>
      <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
        My Art&<span className="text-orange">Craft List</span>
      </h1>
      </Fade>
      <Fade  delay={400}>
      <div className="divider-text"></div>
      <p className="poppins-paragraph text-center py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a!
        Distinctio alias, <br /> delectus debitis in nesciunt optio impedit,
        quasi perspiciatis animi commodi
      </p>
      </Fade>
      <div className="relative w-[130px]">
        <div
          onClick={dropDown}
          className=" p-2 border cursor-pointer flex justify-between items-center  duration-500"
        >
          {selectCustom}
          <IoMdArrowDropdown
            className={isActive ? " rotate-180 duration-500" : "duration-500"}
          ></IoMdArrowDropdown>
        </div>
        {isActive && (
          <ul className="absolute -bottom-[80px] bg-orange border left-0 right-0 text-center z-10 text-white  duration-300">
            <li
              onClick={() => itemFilter("Yes")}
              className="hover:bg-black cursor-pointer"
            >
              Yes
            </li>
            <li
              onClick={() => itemFilter("No")}
              className="hover:bg-black cursor-pointer"
            >
              No
            </li>
            <li
              onClick={() => itemFilter("All")}
              className="hover:bg-black cursor-pointer"
            >
              All
            </li>
          </ul>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {userData.map((item, id) => (
          <Zoom>
            <CraftListCard
            key={id}
            item={item}
            handleDelete={handleDelete}
          ></CraftListCard>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default CraftList;
