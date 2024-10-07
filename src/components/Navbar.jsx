import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthContexProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut().then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "Success!",
        text: "User Logout Successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    });
  };

  const navlinks = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/add-coffe"}>
        <li>
          <a>Add Coffee</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>My Coffee</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>My Cart</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-md dropdown-content bg-white z-[4] mt-3 rounded w-32  shadow-xl"
          >
            {navlinks}
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost text-xl">
            <img
              className="h-14 p-1"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1728102065/images__10_-removebg-preview_jifmf0.png"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[4] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="text-lg mr-3 px-4 font-semibold my-3 cursor-pointer bg-[#FF497C] inline-block rounded  text-white duration-200"
          >
            <span>Login</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
