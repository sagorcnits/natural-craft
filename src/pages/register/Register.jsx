import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../components/AuthProvider";
const Register = () => {
  const { createUser, reload, setReload,updateProfileUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (data) => {
    // console.log(data.name);
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileUser(data.name,data.photoURL)
        .then(() => {
          // const user = result.user;
          setReload(!reload)
        }).catch(error => {
          console.log(error)
        })
        toast.success("Complate Your Register");
      })
      .catch((error) => {
        console.log(error.message);
        toast.warn("Email Already Used !");
      });
  };

  return (
    <div className="hero max-w-6xl mx-auto">
      <ToastContainer></ToastContainer>
      <div className="card shrink-0 w-full md:w-[550px] mx-auto shadow-2xl bg-base-100">
        <form
          className="card-body box-shadow register"
          onSubmit={handleSubmit(submit)}
        >
          <h1 className="text-center text-[30px]  poppins-font font-bold ">
            Register <span className="text-orange"> Here</span>
          </h1>
          <div className="divider-text"></div>
          <div className="md:flex gap-4 mt-6">
            <div className="flex-1">
              <label className="poppins-font">Name:</label>
              <input
                {...register("name", { required: true })}
                className="w-full"
                type="text"
                placeholder="name"
                name="name"
              />
              {errors.name && (
                <p className="text-red-600 poppins-paragraph">
                  Empty this feild
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="poppins-font">Email:</label>
              <input
                {...register("email", { required: true })}
                className="w-full"
                type="email"
                placeholder="email"
                name="email"
              />
              {errors.email && (
                <p className="text-red-600 poppins-paragraph">
                  Empty this feild
                </p>
              )}
            </div>
          </div>
          <div className="md:flex gap-4 mt-4">
            <div className="flex-1">
              <label className="poppins-font">Photo URL:</label>
              <input
                {...register("photoURL", { required: true })}
                className="w-full"
                type="text"
                placeholder="photo URL"
                name="photoURL"
              />
              {errors.photoURL && (
                <p className="text-red-600 poppins-paragraph">
                  Empty this feild
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="poppins-font">Password:</label>
              <input
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  },
                  minLength: 6,
                })}
                area-invalid={errors.password ? "true" : "false"}
                className="w-full"
                type="password"
                placeholder="password"
                name="password"
              />
              {errors.password && (
                <p className="text-red-600 poppins-paragraph">
                  Password Not a Valid
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="flex gap-2 items-center cursor-pointer poppins-paragraph">
              <input type="checkbox" className="w-[15px] h-[15px]" />
              <span className="label-text mt-[10px]">
                I agree to the Terms of User
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="button">Register An Acount</button>
          </div>
          <p className="poppins-paragraph mt-2">
            Have already an acount?{" "}
            <Link to="/login" className="text-red-500">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
