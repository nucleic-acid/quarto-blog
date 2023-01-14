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
  .pause(600)
  .type(".", {delay: 400})
  .go();
