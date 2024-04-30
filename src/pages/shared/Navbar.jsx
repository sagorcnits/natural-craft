import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../components/AuthProvider";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      // localTheme("dark")
    } else {
      // localTheme("ligth")
      setTheme("light");
    }
  };

  return (
    <div className="navbar max-w-6xl mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 *:py-2 poppins-font text-[18px]"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-orange duration-500">Home</li>
            </NavLink>
            <NavLink to="/allcraft">
              <li className="hover:text-orange  duration-500">
                All Art & craft Items
              </li>
            </NavLink>
            {user && (
              <>
                <NavLink to="/addcraft">
                  <li className="hover:text-orange duration-500">
                    Add Craft Item
                  </li>
                </NavLink>
                <NavLink to="/craftlist">
                  <li className="hover:text-orange duration-500">
                    My Art&Craft List
                  </li>
                </NavLink>
              </>
            )}

            {user ? (
              <NavLink to="/login">
                <li
                  className="hover:text-orange duration-500"
                  onClick={logOutUser}
                >
                  Log Out
                </li>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <li className="hover:text-orange duration-500">Log In</li>
              </NavLink>
            )}
          </ul>
        </div>
        <a className="font-bold text-3xl hidden md:flex">
          Natural<span className="text-orange">Craft</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 poppins-paragraph text-[17px]">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="hover:text-orange duration-500">Home</li>
          </NavLink>
          <NavLink to="/allcraft">
            <li className="hover:text-orange  duration-500">
              All Art & craft Items
            </li>
          </NavLink>
          {user && (
            <>
              <NavLink to="/addcraft">
                <li className="hover:text-orange duration-500">
                  Add Craft Item
                </li>
              </NavLink>
              <NavLink to="/craftlist">
                <li className="hover:text-orange duration-500">
                  My Art&Craft List
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            checked={theme === "light" ? false : true}
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {user && (
          <div className="avatar online cursor-pointer">
            <div className="w-[50px] rounded-full">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img src={user?.photoURL} alt="avatar" />
              </a>
              <Tooltip id="my-tooltip" />
            </div>
          </div>
        )}
        {user ? (
          <Link
            to="/login"
            className="button hidden md:flex"
            onClick={logOutUser}
          >
            Log Out
          </Link>
        ) : (
          <Link to="/login" className="button hidden md:flex">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
