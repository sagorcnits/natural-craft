import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase-config";
import { AuthContext } from "../../components/AuthProvider";
const Login = () => {
    const { logInUser, reload, setReload } = useContext(AuthContext);
const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  

  const submit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        setReload(!reload)
        const user = result.user;
        toast.success("Succes Your Login");
        setTimeout(()=>{
            navigate("/")
        },2000)
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.warn("Your Email or Password Invalid !");
      });
  };

  const googleLogIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        setReload(!reload)
        const user = result.user;
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogIn = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((result) => {
        const user = result.user;
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero max-w-6xl mx-auto ">
      <ToastContainer></ToastContainer>
      <div className="card shrink-0 w-full md:w-[450px] mx-auto shadow-2xl box-shadow register card-body">
        <form onSubmit={handleSubmit(submit)}>
          <h1 className="text-center text-[30px]  poppins-font font-bold ">
            Sign in to your <span className="text-orange"> account</span>
          </h1>
          <div className="divider-text"></div>
          <div className="mt-6">
            <div>
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
            <div className="mt-4">
              <label className="poppins-font">password:</label>
              <input
                {...register("password", { required: true })}
                className="w-full"
                type="password"
                placeholder="password"
                name="password"
              />
              {errors.password && (
                <p className="text-red-600 poppins-paragraph">
                  Empty this feild
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex gap-2 items-center cursor-pointer poppins-paragraph">
              <input type="checkbox" className="w-[15px] h-[15px]" />
              <span className="label-text mt-[10px]">Keep me signed in</span>
            </label>
            <a href="#" className="text-[#4ac8fa] poppins-paragraph">
              Reset Password
            </a>
          </div>
          <div className="form-control mt-6">
            <button className="button">Sign In</button>
          </div>
          <p className="poppins-paragraph mt-2">
            New to our website?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>
          </p>
        </form>
        <div className="divider poppins-paragraph">Or continue with</div>
        <div className="flex justify-between  mx-auto gap-6 poppins-paragraph">
          <button
            onClick={googleLogIn}
            className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center"
          >
            <FcGoogle></FcGoogle> Google
          </button>
          <button
            onClick={githubLogIn}
            className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center"
          >
            <FaGithub></FaGithub> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
