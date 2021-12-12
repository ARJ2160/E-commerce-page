const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use("/payment", require("./routes/payment"));
app.listen(port, () => console.log(`Server Started on Port ${port}`));