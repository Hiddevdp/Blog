document.querySelectorAll(".vakken > ul > li").forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".vakken > ul > li.clicked")
      .forEach((clickedElement) => {
        if (clickedElement !== this) {
          clickedElement.classList.remove("clicked");
        }
      });
    this.classList.toggle("clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
