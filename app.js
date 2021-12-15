const express = require("express"); //file needs express. Thanks sherlock. We are running localised javascript. weird backend crap.
const port = process.env.PORT || 3000;
const app = express(); //initiate express
const routes = require("./Routes/index");

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});