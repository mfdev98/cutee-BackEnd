import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin"
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
   uri: String(process.env.MONGO_URL),
   collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSION **/

app.use(
   session({
      secret: String(process.env.SESSION_SECRET),
      cookie: {
         maxAge: 1000 * 3600 * 3 // 3h
      },
      store: store,
      resave: true,
      saveUninitialized: true
   })
);

/** 3-VIEWS **/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/

// 1 SPA: REACT
// 2 BSSR: EJS backendda froneendni togridan togri qurib olishda yordam bermoqda

app.use('/admin', routerAdmin);  // Traditional dev FD => BSSR (Admin) => EJS
app.use('/', router);   // Modern dev FD => SPA (User) => REACT (Middleware Design Pattern)  

export default app;