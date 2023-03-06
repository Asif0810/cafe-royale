import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../../../Context/AuthProvider";
import loginbanner from "./loginassets/pexels-tyler-nix-2396220.jpg";
const Registration = () => {
  const [registerError, setregisterError] = useState("");
  const imghostkey = process.env.REACT_APP_imgbb_key;

  const { signUp, updateUser, google, user } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const googleHander = () => {
    google()
      .then((res) => {
        const user = res.user;
      })
      .catch(console.error());
  };
  const registerHandler = (data) => {
    const name = data.name;
    setregisterError(" ");
    const image = data.image[0];
    const formdata = new FormData();
    formdata.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imghostkey}`;
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch(url, {
          method: "POST",
          body: formdata,
        })
          .then((res) => res.json())
          .then((data) => {
            const imgdata = data.data.url;
            const updateData = {
              displayName: name,
              photoURL: imgdata,
            };
            console.log(data.name);
            updateUser(updateData)
              .then(() => {
                toast.success("user create successfull");
                const user_name = user.displayName;
                const user_Email = user.email;
                const address = "";
                const College = "";
                const Phone = "";
                const Gender = "";
                const userInfo = {
                  user_name,
                  user_Email,
                  address,
                  College,
                  Phone,
                  Gender,
                };
                console.log(userInfo);
                fetch("http://localhost:5000/userinfo", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data))
                  .catch(console.error());
              })
              .catch(console.error());
          })
          .catch(console.error());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setregisterError(errorMessage);
        // ..
      });
  };
  return (
    <div className="">
      <div className="hero mx-auto">
        <div className="hero-content  flex-col lg:flex-row md:flex-row">
          <img
            src={loginbanner}
            className="max-w-sm lg:block md:block hidden rounded-lg shadow-2xl"
          />
          <div className=" flex justify-center items-center">
            <div>
              <div className="text-center">
                <h2 className="text-center text-[#6D3622] font-bold text-xl">
                  Cafe Royale
                </h2>
                <small className="text-[#6D3622]">
                  If you want to our family a member please register
                </small>
              </div>
              {/* register form */}
              <form
                onSubmit={handleSubmit(registerHandler)}
                className="mt-3 pt-4 pl-10 pr-10 pb-10"
              >
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    style={{ borderRadius: "0px" }}
                    type="text"
                    placeholder="type your name"
                    className="input w-[300px] h-[30px] input-bordered"
                    {...register("name", { required: "name is requrired" })}
                  />
                  {errors.name && (
                    <small className="text-red-600">
                      {errors.name?.message}
                    </small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    style={{ borderRadius: "0px" }}
                    type="email"
                    placeholder="type your email"
                    className="input w-[300px] h-[30px] input-bordered  "
                    {...register("email", { required: "email is required" })}
                  />
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email?.message}
                    </small>
                  )}
                  <p className="text-red-600">{registerError}</p>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">password</span>
                  </label>
                  <input
                    style={{ borderRadius: "0px" }}
                    type="password"
                    placeholder="type your password"
                    className="input w-[300px] h-[30px] input-bordered"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && (
                    <small className="text-red-600">
                      {errors.password?.message}
                    </small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">profile picture</span>
                  </label>
                  <input
                    style={{ borderRadius: "0px" }}
                    type="file"
                    className="input w-[300px] h-[30px] input-bordered"
                    {...register("image", {
                      required: "please provide your prfile photo",
                    })}
                  />
                  {errors.image && (
                    <small className="text-red-600">
                      {errors.image?.message}
                    </small>
                  )}
                </div>
                <div>
                  <button
                    style={{ borderRadius: "0px" }}
                    className="btn w-[300px] mt-10 bg-[#6D3622]"
                  >
                    register
                  </button>
                </div>
                <div className="divider">OR</div>
                <div className="" style={{ border: "2px solid #6D3622" }}>
                  <button
                    onClick={googleHander}
                    type="submit"
                    className="border-2 w-[300px] text-[#6D3622] py-2 flex font-bold  justify-center items-center"
                  >
                    <FcGoogle className="text-2xl pr-1"></FcGoogle> GOOGLE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
