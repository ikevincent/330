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
    },
    {
      label: "Week 10 Team Assignment",
      url: "week10/index.html"
    },
    {
      label: "Week 11 Team Assignment",
      url: "week11/client/index.html"
    }
  ]

links.forEach(linkObject => {
    document.getElementById("teamtoc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})