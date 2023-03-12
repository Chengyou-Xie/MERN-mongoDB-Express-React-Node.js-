const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;

const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

// 連接 mongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/mernDB")
    .then(() => {
        console.log("成功連線mongoDB。。。");
    })
    .catch((e) => {
        console.log(e);
    });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", authRoute);
// course route 應該被 jwt 保護
app.use("/api/courses", passport.authenticate("jwt", { session: false }), courseRoute);

app.listen(8080, () => {
    console.log("伺服器正在port 8080運行。。。");
});
