import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/header";
import Cookies from "js-cookie";
import axios from "axios";

export default function Profile() {
  const editBtn = useRef(null);

  const uidCookie = Cookies.get("uid");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [uid, setUid] = useState("");
  const [city, setCity] = useState("");

  const [setting, setSetting] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    axios
      .post("api/user/getUser", {
        uid: uidCookie,
      })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data.data);
          setUsername(response.data.data.username);
          setEmail(response.data.data.email);
          setCompany(response.data.data.company);
          setUid(response.data.data.uid);
          setCity(response.data.data.City);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [uidCookie]);
  useEffect(() => {
    disable ? setDisable(false) : setDisable(true);
    setting
      ? (editBtn.current.innerText = "Düzenlemeyi İptal Et")
      : (editBtn.current.innerText = "Düzenle");
  }, [setting]);

  return (
    <>
      <Header username={username} page={"profile"} />
      <div className="w-1/2 m-auto flex gap-2 flex-col mt-5">
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            disabled={disable}
            className="h-formInputHeight pl-3 border rounded-md border-gray-900/40"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            disabled={disable}
            className="h-formInputHeight pl-3 border rounded-md border-gray-900/40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Şehir</label>
          <input
            disabled={disable}
            className="h-formInputHeight pl-3 border rounded-md border-gray-900/40"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>User ID</label>
          <input
            disabled={disable}
            className="h-formInputHeight pl-3 border rounded-md border-gray-900/40"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Çalıştığı Şirket</label>
          <input
            disabled={disable}
            className="h-formInputHeight pl-3 border rounded-md border-gray-900/40"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="flex justify-between mx-3 mt-5">
          <button
            className={` py-3 px-3 rounded-md ${
              setting ? "bg-red-700 text-white" : "bg-green-700 text-white"
            }`}
            ref={editBtn}
            type="button"
            onClick={() => (!setting ? setSetting(true) : setSetting(false))}
          >
            Düzenle
          </button>
          <button
            type="button"
            disabled={!setting}
            className={`disabled:bg-sky-500/40 rounded-md py-3 px-3 bg-sky-500 w-[10vw] text-white`}
          >
            Kaydet
          </button>
        </div>
      </div>
    </>
  );
}
