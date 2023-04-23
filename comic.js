AFRAME.registerComponent("comic", {
  init: function () {
    this.comicContainer = this.el;
    this.createCards()

  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "comic-1",
        title: "comic-1",
        url: "./assets/comic1.jpg",
      },
      {
        id: "comic-2",
        title: "comic-2",
        url: "./assets/comic2.jpeg",
      },

      {
        id: "comic-3",
        title: "comic-3",
        url: "./assets/comic 3.jpg",
      },
      {
        id: "comic-4",
        title: "comic-4",
        url: "./assets/comic4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;


      // Border Element
      const borderEl = this.createBorder(position, item.id)

      // Thumbnail Element
      const thumbnail = this.createthumbnail(item)
      borderEl.appendChild(thumbnail)


      // Title Text Element
      const title = this.createtitle(position, item)
      borderEl.appendChild(title)

      this.comicContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("geometry", { primitive: "ring", radiusInner: 9, radiusOuter: 10 })
    entityEl.setAttribute("material", { color: "black", opacity: 1 })

    entityEl.setAttribute("cursor-listener", {});



    return entityEl
  },

  
  createthumbnail: function (item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", { primitive: "circle", radius: 9 })
    entityEl.setAttribute("material", { src: item.url })
    return entityEl

  },
  createtitle: function (position, item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text", { font: "exo2bold", align: "centre", width: 70, color: "black", value: item.title })
    const elPosition = position
    elPosition.x = elPosition.x + 27.5
    elPosition.y = -20
    entityEl.setAttribute("position", elPosition)
    entityEl.setAttribute("visible", true)
    return entityEl



  }

});
