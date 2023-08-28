import { FaGoogle } from "react-icons/fa";
import { BsFacebook, BsApple } from "react-icons/bs";

export default function ConnectionLogin() {
  return (
    <>
      <div className="h-full text-white font-spaces flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <div className="borderAnimation h-[7.735vh] w-[20.834vw] ">
            <span className="flex items-center pl-5">
              <FaGoogle className="mr-2 text-[2rem]" />
              <label className="text-lg">Sign in with Google</label>
            </span>
          </div>
          <div className="borderAnimation2 h-[7.735vh] w-[20.834vw] flex items-center">
            <span className="flex items-center pl-5">
              <BsFacebook className="mr-2 text-[2rem]" />
              <label className="text-lg">Sign in with Facebook</label>
            </span>
          </div>
          <div className="borderAnimation h-[7.735vh] w-[20.834vw] flex items-center">
            <span className="flex items-center pl-5">
              <BsApple className="mr-2 text-[2rem]" />
              <label className="text-lg">Sign in with Apple Account</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
