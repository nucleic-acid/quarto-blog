new TypeIt(".multipleStrings", {
    waitUntilVisible: true,
    <!-- loop: true, -->
    speed: 55
  })
  .type("A blog on the ", { delay: 400 })
  .type("exploration of open data", {delay: 700, speed: 120})
  .delete(4)
  .type("source", { delay: 900 })
  .delete(6)
  .pause(500)
  .type("data", { delay: 400 })
  .type(" using open source", {delay: 350})
  .type(" tools.", {delay: 700})
  .delete(1)
  .pause(200)
  .type(",", {delay: 700})
  .break()
  .type(" such as R and Python", {delay: 300})
  .pause(400)
  .type(".", {delay: 400})
  .break()
  .pause(200)
  .break()
  .pause(150)
  .type("These are the voyages of a data entusi", {delay: 500})
  .delete(3)
  .type("husiast's jolly boat on a vast ocean of data.", {delay: 600})
  .break()
  .pause(400)
  .type("Its continuing mission: ", {delay: 400})
  .type("to seek out ", {delay: 350})
  .type("new ", {delay: 200})
  .type("life", {delay: 350})
  .delete(4)
  .type("files and new visualizations.", {delay: 300})
  .break()
  .pause(300)
  .type("To boldy go", {delay: 400})
  .delete(2)
  .pause(200)
  .delete(1)
  .pause(200)
  .delete(1)
  .pause(400)
  .type("ly go", {delay: 300})
  .delete(2)
  .pause(200)
  .type("chart", {delay: 500})
  .type(", what no analyst has charted before!")
  .go();
