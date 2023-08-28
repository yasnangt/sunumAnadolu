export default function handler(req, res) {
  if (req.method === "POST") {
    // Get data submitted in request's body.
    const { uid } = req.body;

    if (uid) {
      res.status(200).json({
        data: {
          uid: uid,
          username: "Yasin Angıt",
          email: "yasin_angit78@hotmail.com",
          company: "Anadolu Sigorta",
          City: "Bursa",
          TelNum: "111-111-1111",
          IDNum: "11111111111",
        },
      });
    } else {
      res
        .status(400)
        .json({ errorCode: "400", errorMessage: "User ID Hatalı" });
    }
  } else {
    res.status(405).json({ errorCode: "405", errorMessage: "Geçersiz Method" });
  }
}
