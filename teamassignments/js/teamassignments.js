const links = [
    {
      label: "Week 3 Team Assignment",
      url: "week3/index-START.html"
    },
    {
      label: "Week 4 Team Assignment",
      url: "week4/index.html"
    },
    {
      label: "Week 5 Team Assignment",
      url: "week5/index.html"
    },
    {
      label: "Week 9 Team Assignment",
      url: "week9/index-START.html"
    }
  ]

links.forEach(linkObject => {
    document.getElementById("teamtoc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})