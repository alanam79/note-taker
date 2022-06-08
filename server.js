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

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);



// server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
