import { v4 as uid } from "uuid";

export default function handler(req, res) {
  if (req.method === "POST") {
    // Get data submitted in request's body.
    const { email } = req.body;
    const uniqueId = uid();

    if (email) {
      res.status(200).json({
        data: {
          uid: uniqueId,
          email: email,
          username: "yasin"
        },
      });
    } else {
      res.status(400).json({ errorCode: "400", errorMessage: "Hatalı Koşul" });
    }
  } else {
    res.status(405).json({ errorCode: "405", errorMessage: "Geçersiz Method" });
  }
}
