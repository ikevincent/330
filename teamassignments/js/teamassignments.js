const links = [
    {
      label: "Week 3 Team Assignment",
      url: "week3/index-start.html"
    },
  ]

links.forEach(linkObject => {
    document.getElementById("teamtoc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})