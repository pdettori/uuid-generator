const { events } = require("brigadier");

events.on("push", function(e, project) {
  console.log("Hi There Brigade !! received push for commit " + e.commit)
})
