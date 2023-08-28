import Header from "@/src/components/Header/header";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const imgRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imgWidth, setImgWidth] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (image != null && zoom == false) {
      imgRef.current.parentElement.classList.add("imgRelative");
      imgRef.current.parentElement.classList.remove("imgAbsolute");
      setImgWidth(70);
    } else if (image != null && zoom == true) {
      imgRef.current.parentElement.classList.remove("imgRelative");
      imgRef.current.parentElement.classList.add("imgAbsolute");
      setImgWidth(400);
    }
  }, [imgRef, image, imgWidth, zoom]);


  function createdBlog(){
    axios.post("/api/blog/createBlog",{
      title: title,
      content: content
    } )
    .then(function ( response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <div className="flex flex-col w-1/2 m-auto mt-5 gap-4">
        <div className="flex">
          <label
            className="bg-sky-500 p-4 rounded-md text-white hover:bg-sky-700 cursor-pointer"
            htmlFor="imageUpload"
          >
            Resim Yükle
          </label>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <input
              id="imageUpload"
              type="file"
              className="hidden"
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  setImage(URL.createObjectURL(file));
                }
              }}
            />
            <div className="imgRelative">
              <button onClick={() => setZoom(false)}>Geri Gel</button>
              <img
                ref={imgRef}
                src={image}
                width={imgWidth}
                onClick={() => setZoom(true)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Başlık</label>
          <div>
            <input className="border outline-none pl-2 h-formInputHeight w-1/2 rounded-md border-gray-900/40" 
             value={title}
             onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="">Text</label>
          <div>
            <textarea
              cols={130}
              rows={20}
              className="border resize-none outline-none p-2 rounded-md border-gray-900/40"
              value={content}
              onChange={(e) => {setContent(e.target.value)}}
            />
          </div>
        </div>
        <div className="flex justify-end mt-3 mb-5">
          <button className="bg-sky-500 p-4 rounded-md text-white hover:bg-sky-700" 
            onClick={() => createdBlog()}
          >
            Blog Oluştur
          </button>
        </div>
      </div>
    </>
  );
}
