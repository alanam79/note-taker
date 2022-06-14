const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js")


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}! 🚀`);
});
