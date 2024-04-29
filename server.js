import express, { Router } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from './server/routes/routes.main.js'


const app = express();
const PORT = 5000 || process.env.PORT;

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));
//port listerner
app.listen(PORT, () => {
  console.log(`Port is Listening on ${PORT}`);
});
//layout settings
app.use(expressEjsLayouts);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");



// set routes
app.use('/',router);
