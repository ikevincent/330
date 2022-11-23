const links = [{
    label: "Block One Challenge - To Do",
    url: "blockOne/todo.html"
  },
  {
    label: "Team Assignments",
    url: "teamassignments/index.html"
  },
  {
    label: "Week 1 Reading Notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2 Reading Notes",
    url: "week2/index.html"
  },
  {
    label: "Week 3 Reading Notes",
    url: "week3/index.html"
  },
  {
    label: "Week 7 Reading Notes",
    url: "week7/index.html"
  },
  {
    label: "Week 8 Reading Notes",
    url: "week8/index.html"
  },
  {
    label: "Week 9 Reading Notes",
    url: "week9/index.html"
  },
  {
    label: "Week 10 Reading Notes",
    url: "week10/index.html"
  }
]

links.forEach(linkObject => {
  document.getElementById("toc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})