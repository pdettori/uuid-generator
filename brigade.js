const { events } = require("brigadier");

events.on("push", function(e, project) {
  console.log("Hi Brigade !! received push for commit " + e.commit)
})
