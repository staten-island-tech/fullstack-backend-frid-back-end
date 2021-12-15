const express = require("express");
const router = new express.Router(); //instantiate express router

router.get("/", async (req, res) => {
  // the / means its a local host. we send a message we are live.
  const test = {pain:true};
  try {
    res.json(test);
    res.send("ewsfetfre");
    // return res.send("We're in the Zone");
  } catch (error) {
    console.log(error);
    alert("Pain. Suffering. Fix Your Shit");
  }
});

module.exports = router;

