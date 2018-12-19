const express = require("express");
const router = express.Router({mergeParams: true});

const {createMessage, getMessage, deleteMessage} = require("../handlers/messages");


//route prefix - /api/users/:id/messages

router.route("/").post(createMessage);

//route prefix - /api/users/:id/messages
router.route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);


module.exports = router;