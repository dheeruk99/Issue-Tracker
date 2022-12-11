const express = require("express");
const port = 9000;
const expressLayouts = require("express-ejs-layouts");
const env = require("./config/environment");
const app = express();
const connectDB = require("./config/mongoose");
connectDB();
const sassMiddleware = require("node-sass-middleware");
const path = require("path");

app.use(express.urlencoded({ extended: false }));

//SASS
if (env.name == "development") {
  app.use(
    sassMiddleware({
      src: path.join(__dirname, env.asset_path, "scss"),
      dest: path.join(__dirname, env.asset_path, "css"),
      debug: true,
      outputStyle: "extended",
      prefix: "/css",
    })
  );
}

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(env.asset_path));

//layouts
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScript", true);

//Routing

app.use("/", require("./routes"));

app.listen(9000, (err) => {
  if (err) {
    return console.log("Error in initializing server");
  }
  console.log(`Server is successfully running on port ${port}`);
});
