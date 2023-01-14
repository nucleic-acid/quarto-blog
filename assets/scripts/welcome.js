new TypeIt(".multipleStrings", {
    waitUntilVisible: true,
    <!-- loop: true, -->
    speed: 55
  })
  .type("A blog on the ", { delay: 800, speed: 80 })
  .type("exploration", {delay: 700, speed: 100})
  .type(" of open data", {delay: 500, speed: 120})
  .delete(4)
  .type("source", { delay: 900, speed: 80 })
  .delete(6)
  .pause(500)
  .type("data", { delay: 400 })
  .type(" using open source", {delay: 350, speed: 100})
  .type(" tools.", {delay: 700, speed: 90})
  .delete(1)
  .pause(400)
  .type(",", {delay: 700})
  .break()
  .type(" such as R", {delay: 300, speed: 90})
  .type(" and Python", {delay: 300, speed: 120})
  .pause(600)
  .type(".", {delay: 400})
  .go();
