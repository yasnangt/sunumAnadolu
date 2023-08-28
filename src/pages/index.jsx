import ConnectionLogin from "../components/login/loginConnection";
import EmailandPassword from "../components/login/loginEmailandPassword";
export default function Home() {
  return (
    <main id="loginContainer" className="flex h-[100vh] bg-[#1E1E1E] w-full ">
      <div className="h-[100vh] w-[30%]">
        <ConnectionLogin />
      </div>
      <div className="h-[100vh] w-[0.2%] flex items-center">
        <div className="h-[70vh] border-0 border-r border-white"></div>
      </div>
      <div className="h-[100vh] w-[70%]">
        <EmailandPassword />
      </div>
    </main>
  );
}
