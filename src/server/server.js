// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;

// // middlewares
// app.use(express.json({ extended: false }));

// // route included
// app.use("/payment", require("./routes/payment"));

// app.listen(port, () => console.log(`server started on port ${port}`));

// var instance = new Razorpay({
//     key_id: 'MbQEh9VUM9yiDaT3Ssu3Ej8s',
//     key_secret: 'rzp_test_OAMlpVxqAeFalg',
// });

// app.post("/create/orderId", (req, res, next) => {
//     var options = {
//         amount: 50000,  // amount in the smallest currency unit
//         currency: "INR",
//         receipt: "order_rcptid_11"
//     };
//     instance.orders.create(options, function(err, order) {
//         console.log(order);
//         res.send({orderId: order.id});
//     });
// })