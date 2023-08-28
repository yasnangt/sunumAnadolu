import { useContext, useEffect, useState } from "react";
import Context from "../components/context/context";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Header from "../components/Header/header";

import HomeContent from "../components/HomeContent/homeContent";

export default function Home() {
  const router = useRouter();
  const uid = Cookies.get("uid");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .post("api/user/getUser", {
        uid: uid,
      })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data.data.username);
          setUsername(response.data.data.username);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [uid]);

  return (
    <>
      <Header username={username} />
      <HomeContent />
    </>
  );
}
