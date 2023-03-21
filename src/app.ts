import express from "express";
import path from "path"
import session from "express-session"
import MongoStore from "connect-mongo"
import mongoose from "mongoose"

import { MONGODB_URI, SESSION_SECRET } from "./util/secrets"


const app = express();

const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl).then(
    () => {
        

    }
).catch(err => {
    console.log(`MongoDB connection error. errMsg:  ${err}`);
});


app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views")) //模板文件所在目录
app.set("view engine", "pug"); //要使用的模板引擎

app.use(session({
    secret: "123456",  //会话签名，相当于生成会话id的私钥
    resave: true,  //即使会话在请求期间未做改变，也强制将会话保存回存储
    saveUninitialized: true, //强制将“未初始化”的会话保存到存储中。 当会话是新的但未修改时，它是未初始化的
    store: new MongoStore({
        mongoUrl
    })
}));

export default app;
