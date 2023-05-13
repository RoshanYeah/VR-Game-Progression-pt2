AFRAME.registerComponent("game-states", {
  schema: {
    selectedWorld: { default: "#homeWorld", type: "string" }
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function () {
    // <!-- //Cursor 'click' Events -->
    this.el.addEventListener("click", evt => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("home");

      if (state === "home") {
        const id = this.el.getAttribute("id");
        const placesId = [
          "forestWorld",
          "mountainWorld",
          "cityWorld"
        ];
        if (placesId.includes(id)) {
          placesContainer.setAttribute("home", {
            state: "play",
            selectedWorld: id
          });
        }
      }
    });
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = [ 
      "forestWorld",
      "mountainWorld",
      "cityWorld"
    ];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("game-states", {
        selectedWorld: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // <!-- //Cursor 'mouseenter' Events -->
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // <!-- //Cursor 'mouseleave' Events -->
    this.el.addEventListener("mouseleave", () => {
      const { selectedWorld } = this.data;
      if (selectedWorld) {
        const el = document.querySelector(`#${selectedWorld}`);
        const id = el.getAttribute("id");
        if (id == selectedWorld) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },

});