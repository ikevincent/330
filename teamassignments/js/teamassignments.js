const links = [
    {
      label: "Week 3 Team Assignment",
      url: "week3/index-START.html"
    },
    {
      label: "Week 4 Team Assignment",
      url: "week4/index.html"
    },
  ]

links.forEach(linkObject => {
    document.getElementById("teamtoc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})