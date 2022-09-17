const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    }
  ]

links.forEach(linkObject => {
    document.getElementById("toc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})