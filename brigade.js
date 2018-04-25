const { events } = require("brigadier");

events.on("push", function(e, project) {
  console.log("Hi there Brigade !! received push for commit " + e + " project: " + project)
})
