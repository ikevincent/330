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
    label: "Week 7 Reading Notes",
    url: "week7/index.html"
  }
]

links.forEach(linkObject => {
  document.getElementById("toc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})