const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT ?? 3001;
const host = process.env.HOST ?? "localhost";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ msg: "this is a message" });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ error: "internal server error" });
  }
});

app.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
