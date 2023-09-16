const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname,'public/assets')));

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, "public/assets");
    },
    filename: function(req,file,cb) {
        cb(null,file.originalname)
    }
});

const upload = multer({storage});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));