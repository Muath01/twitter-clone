import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setSigned } from "../Redux/signedReducer";

function Auth() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [loginInfo, setLoginInfo] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  function handleDivBorder(instruction: any) {
    // console.log(inputRef.current?.className);
    if (!inputRef.current) return;

    if (instruction == "remove") {
      inputRef.current!.style.borderColor = "blue";
      inputRef.current!.style.borderWidth = "21px";
      console.log("remove");
    } else {
      inputRef.current!.style.borderColor = "#278CF1";
      inputRef.current!.style.borderWidth = "2px";
      console.log("not remove");
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) //checks if the clicked even points at our useRef, if no then it removes the stlying.
      ) {
        inputRef.current.style.borderColor = "#8A97A4";
        inputRef.current.style.borderWidth = "1px";
      } else {
        // console.log("else: ", inputRef.current);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  function postLoginState(e: any) {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });

    console.log("info: ", loginInfo);
  }
  async function login(e: any) {
    e.preventDefault();
    console.log("submittin");

    try {
      const response = await axios.get("http://localhost:3001/auth", {
        params: {
          loginInfo: loginInfo,
        },
      });

      console.log(response.data);

      if (!response.data.success) {
        dispatch(setSigned(response.data.success));
      } else {
        console.log("it's true");
        console.log(response.data);
        let whoLogged = { isLogged: true, user: response.data.user };
        let whoLoggedObjectString = JSON.stringify(whoLogged);
        localStorage.setItem("loggedUser", whoLoggedObjectString);
        dispatch(
          setSigned({
            success: response.data.success,
            username: response.data.user,
          })
        );
        navigate("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <div className="bg-[#15202B] w-full  h-[100%] flex justify-center items-center bg-opacity-30 ">
      <div className="flex items-center justify-center h-5/6 w-1/2 shadow-2xl bg-[#15202B] backdrop-blur-0 ">
        <div className=" h-3/4 flex flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 items-start px-9 py-10  gap-2 mt-10">
          <i className="fa-brands fa-twitter text-white text-[32px] mt-2 absolute top-0 left-1/2 translate-x-[-50%] "></i>
          <button
            onClick={(e) => {
              navigate("/");
            }}
            className="bg-[#15202B] text-white absolute top-3 left-5 focus:outline-none"
          >
            <i className="fa-solid fa-x"></i>
          </button>
          <h1 className="text-white text-[24px] font-bold mb-3 ">
            Sign in to Twitter
          </h1>
          <button className="rounded-full bg-white py-2 w-full my-3 focus:outline-none">
            <i className="fa-brands fa-google mr-2"></i>Sign in with google
          </button>
          <button className="rounded-full bg-white py-2 w-full focus:outline-none">
            <i className="fa-brands fa-apple mr-2"></i> Sign in with Apple
          </button>
          <p className="border-b w-full leading-[0.1em] mx-0 mt-[10px] mb-[10px]">
            <span className="px-1 bg-[#15202B] text-white text-[20px]">or</span>
          </p>
          <div className="w-full">
            {isVisible ? (
              <div className="w-full">
                <div className=" w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm relative">
                  <p className=" text-start text-sm mb-1 text-gray-400">
                    email
                  </p>
                  <input
                    onClick={(e) => handleDivBorder("nothing")}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      postLoginState(e);
                    }}
                    value={email}
                    name="email"
                    placeholder="Sign in"
                    className=" w-full px-1 focus:outline-none outline-none  "
                  />
                  <div className="mt-3 w-full absolute mb-10 top-20 left-0 ">
                    <button
                      onClick={(e) => {
                        // setEmail("");
                        setIsVisible(!isVisible);
                      }}
                      type="button"
                      className="border rounded-full w-full py-1.5 text-black bg-white font-bold focus:outline-none "
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={login}>
                <div
                  // ref={inputRef}
                  className="w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col  rounded-sm relative"
                >
                  {/* Login */}
                  <div className="border border-gray-600 p-2 mb-2">
                    <p className=" text-start text-sm mb-1 text-gray-400">
                      email
                    </p>
                    <input
                      // onClick={handleDivBorder}
                      onChange={postLoginState}
                      value={email}
                      name="email"
                      placeholder="email"
                      disabled
                      className=" w-full px-1 focus:outline-none outline-none  "
                    />
                  </div>
                  <div ref={inputRef} className="border border-gray-600 p-2">
                    <p className=" text-start text-sm mb-1 text-gray-400">
                      password
                    </p>
                    <input
                      onClick={handleDivBorder}
                      onChange={postLoginState}
                      name="password"
                      placeholder="password"
                      className=" w-full px-1 focus:outline-none outline-none  "
                    />
                  </div>
                  <div className=" w-full absolute mb-10 top-[11rem] left-0 ">
                    <button className="border  rounded-full w-full py-1.5 text-black font-bold focus:outline-none ">
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="mt-12 w-full">
            <button className=" rounded-full w-full py-1.5 bg-[#15202B] border font-bold hover:border-gray-500 border-gray-400 text-white mt-3 focus:outline-none">
              Forgot password?
            </button>

            <Link
              to={"/register"}
              className=" cursor-pointer underline mt-3 text-lg w-full"
            >
              sign up{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
