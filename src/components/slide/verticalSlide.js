import { useEffect, useRef, useState } from "react";

export default function VerticalSlide({ data, delay, topic }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

  return (
    <>
      <div className="flex flex-col shadow-lg w-full shadow-black min-h-[15vh]">
        <label className="shadow-md p-5 bg-white text-center font-semibold mb-2 ">{topic}</label>
        <div className="flex flex-col w-full gap-10">
        {data.map((element, index) => (
          <div
            key={index}
            className={`flex flex-col bg-[#4851a7] w-full text-center p-4 rounded-md text-white`}
            style={{
              order: (index - currentSlide + data.length) % data.length,
            }}
          >
            <label>{element.title}</label>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
