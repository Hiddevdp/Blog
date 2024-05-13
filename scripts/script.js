document.querySelectorAll(".vakken > ul > a").forEach((element) => {
  element.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.style.setProperty("--x", `${x}px`);
    this.style.setProperty("--y", `${y}px`);
  });
});
