import axios from "axios";
import { useEffect, useState } from "react";
import VerticalSlide from "../slide/verticalSlide";

export default function HomeContent() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get("/api/blog/getBlog").then(function (data) {
      setPostData(data.data);
    });
  }, []);

  return (
    <>
      <div className="flex bg-[#f6f6f6]">
        <div className="flex flex-wrap gap-10 w-[85vw] m-2 py-5 justify-center">
          {postData.map((element, index) => (
            <div key={index} className="flex flex-col w-1/4 h-[25vh] shadow-lg  bg-white">
              <label className="shadow-lg p-3 text-center">{element.title}</label>
              <label>{element.content}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[15vw] items-center gap-10 overflow-hidden h-[68vh]  p-5">
          
            <VerticalSlide data={postData} delay={5000} topic={"Paylaştığım Bloglarım"}/>
        </div>
      </div>
    </>
  );
}
