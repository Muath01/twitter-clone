import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const inputRef = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLDivElement>(null);
  const inputRef3 = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState({});

  function setName(e: any) {
    // console.log("here");
    // console.log("event: ", e.target);
    const { name, value } = e.target;

    // console.log("name: ", name);
    // console.log("value: ", value);

    setNewUser({
      ...newUser,
      [name]: value,
    });

    console.log("newUser: ", newUser);

    // console.log("newuser: ", newUser);
  }

  function register() {
    try {
      axios.post("http://localhost:3001/register", {
        userSignUpInfo: newUser,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  }

  // function handleDivBorder(inputRefDiv: any, e: any) {
  //   // console.log("target: ", e.target);
  //   // console.log("REF: ", inputRef.current);
  //   // console.log("Equal: ", inputRef.current === e.target);
  //   inputRefDiv.current!.style.borderColor = "#278CF1";
  //   inputRefDiv.current!.style.borderWidth = "2px";
  // }

  // useEffect(() => {
  //   // console.log("hereEffect");
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     // console.log("event: ", event.target);
  //     const input = event.target as HTMLParagraphElement;
  //     const parent = input?.parentNode as HTMLDivElement;

  //     // console.log(first)
  //     if (
  //       parent &&
  //       inputRef.current &&
  //       !inputRef.current.contains(event.target as Node) //checks if the clicked even points at our useRef, if no then it removes the stlying.
  //     ) {
  //       console.log("EEE");
  //       parent.style.borderColor = "#8A97A4";
  //       parent.style.borderWidth = "1px";
  //     } else {
  //       // console.log("else: ", inputRef.current);
  //     }
  //   };
  //   document.addEventListener("click", (e) => handleOutsideClick(e));

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // });
  return (
    <div className="bg-[#15202B] w-full h-[100%]">
      <div className="flex items-center justify-center h-full">
        <div className=" h-3/4 flex flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 items-start px-9 py-10  gap-2 mt-10">
          <i className="fa-brands fa-twitter text-white text-[32px] mt-2 absolute top-0 left-1/2 translate-x-[-50%] "></i>
          <button className="bg-[#15202B] text-white absolute top-3 left-5 focus:outline-none">
            <i className="fa-solid fa-x"></i>
          </button>
          <h1 className="text-white text-[24px] font-bold mb-3 ">
            Sign up to Twitter
          </h1>

          <form onSubmit={register} className="w-full bg-black">
            <div
              ref={inputRef}
              className="num-1 w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm"
            >
              <p className=" text-start text-sm mb-1 text-gray-400">Email</p>
              <input
                onChange={setName}
                name="email"
                placeholder="Email"
                type="email"
                className="num-1 w-full px-1 focus:outline-none outline-none  "
              />
            </div>
            <div
              ref={inputRef2}
              className="num-2 w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm"
            >
              <p className=" text-start text-sm mb-1 text-gray-400">username</p>
              <input
                name="username"
                onChange={setName}
                placeholder="username"
                className="num-2 w-full px-1 focus:outline-none outline-none  "
              />
            </div>
            <div
              ref={inputRef3}
              className="num-3 w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm"
            >
              <p className=" text-start text-sm mb-1 text-gray-400">password</p>
              <input
                onChange={setName}
                name="password"
                placeholder="Sign in"
                type="password"
                className="num-3 w-full px-1 focus:outline-none outline-none  "
              />
            </div>

            <div className="mt-3 w-full ">
              <button className=" rounded-full w-full py-1.5 text-black font-bold focus:outline-none">
                Next
              </button>
              <button className=" rounded-full w-full py-1.5 bg-[#15202B] border font-bold hover:border-gray-500 border-gray-400 text-white mt-3 focus:outline-none">
                Forgot password?
              </button>
            </div>
          </form>
          <Link
            to={"/auth"}
            className=" cursor-pointer underline mt-3 text-lg w-full"
          >
            sign in{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
