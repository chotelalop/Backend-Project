const express =  require("express")
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");

require("dotenv").config();

const db = require("./config/mongoose-connections");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use("/owners", ownerRouter);
app.use("/user", userRouter);
app.use("/products", productsRouter);

//  app.get("/",(req,res)=>{
//     res.send("hey");

//  });
  
app.listen(3000); 