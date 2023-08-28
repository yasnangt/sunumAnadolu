import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Context from "../context/context";
import Cookies from "js-cookie";

export default function EmailandPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { uidGlobal, setUidGlobal, setUsernameGlobal, setEmailGlobal } =
    useContext(Context);

  const handleSubmit = (e) => {
    if (email && password) {
      e.preventDefault();
      axios
        .post("/api/signinWithEmail", {
          email: email,
          password: password,
        })
        .then(function (response) {
          if (response.status == 200) {
            setUidGlobal(response.data.data.uid);
            setUsernameGlobal(response.data.data.username);
            setEmailGlobal(response.data.data.email);
            var in30Minutes = 1 / 48;
            Cookies.set("uid", response.data.data.uid, {
              expires: in30Minutes,
            });
            router.push("/home");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="h-full flex justify-center items-center ">
        <form
          className="bg-white/10 h-2/3 w-1/2 p-10 flex flex-col justify-around rounded-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="text-3xl text-white text-center font-spaces">
              Login to Your Account
            </h3>
          </div>
          <div className="flex flex-col">
            <label className="text-white text-lg font-spaces ml-3 mb-2">
              E-mail
            </label>
            <div className="borderAnimation h-[7.735vh] w-full">
              <span>
                <input
                  required
                  type="email"
                  className="h-full w-full bg-transparent outline-none text-white px-5 border-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white text-lg font-spaces ml-3 mb-2">
              Password
            </label>
            <div className="borderAnimation h-[7.735vh] w-full">
              <span>
                <input
                  required
                  type="password"
                  className="h-full w-full bg-transparent outline-none text-white px-5 border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[7.735vh] flex items-center justify-between rounded-md"
          >
            <span className="w-5/6 font-bold font-spaces text-lg">
              Login to Your Account{" "}
            </span>
            <FaArrowRight className="w-1/6 text-xl" />
          </button>
        </form>
      </div>
    </>
  );
}
