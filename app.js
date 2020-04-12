//App init
const express = require("express");
// Route imports
const userRoute = require("./routes/user");
const recipeRoute = require("./routes/recipe");

//Sequelize imports
const sequelize = require("./config/db");
const Recipe = require("./models/Recipe");
const User = require("./models/User");

// App Data
const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/register", userRoute);
app.use("/recipes", recipeRoute);

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "At index" });
});
// Associations
Recipe.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Recipe);

//Connect to DB -- Sequelize
sequelize
  //.sync({force: true})
  .sync()
  .then((result) => {
    //console.log(result);
    // App waiting for requests
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Error:", err);
  });
