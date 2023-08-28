import "@/src/styles/globals.css";
import Context from "../components/context/context";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [usernameGlobal, setUsernameGlobal] = useState("");
  const [uidGlobal, setUidGlobal] = useState("");
  const [emailGlobal, setEmailGlobal] = useState("");

  const data = {
    usernameGlobal,
    setUsernameGlobal,
    uidGlobal,
    setUidGlobal,
    emailGlobal,
    setEmailGlobal,
  };

  return (
    <Context.Provider value={data}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
