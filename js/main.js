const links = [
    {
      label: "Week 1 Reading Notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 Reading Notes",
        url: "week2/index.html"
    }
  ]

links.forEach(linkObject => {
    document.getElementById("toc").innerHTML += `<li><a href='${linkObject.url}'>${linkObject.label}</a></li>`
})