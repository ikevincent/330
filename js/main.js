const links = [{
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
    label: "Week 4 Reading Notes",
    url: "week4/index.html"
  },
  {
    label: "Week 5 Reading Notes",
    url: "week5/index.html"
  }
]

links.forEach(linkObject => {
  document.getElementById("toc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})