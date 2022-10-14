const router = require("express").Router();
const UnregUser = require("../models/UnregisteredUsers");



router.route("/add").post((req, res) => {
  const { fullName, unregisteredDate, reason } = req.body;
  const unregUser = new UnregUser({
    fullName,
    unregisteredDate,
    reason,
  });


  unregUser
    .save()
    .then(() => {
      res.json("Successfull!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/unreg").get((req, res) =>{
  UnregUser.find().then((data) =>{
    res.json(data);
}).catch((err) =>{



}
)
});

module.exports = router;
