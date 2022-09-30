const links = [
    {
      label: "Week 3 Team Assignment",
      url: "teamassignments/week3.html"
    },
  ]

links.forEach(linkObject => {
    document.getElementById("teamtoc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})