export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOuver);
  });

  function onMouseOuver(event) {
    const toolTipBox = criarTollTipBox(this);
    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseleave.toolTipBox = toolTipBox;
    onMouseleave.element = this;
    this.addEventListener("mouseleave", onMouseleave);
  }

  const onMouseleave = {
    toolTipBox: "",
    element: "",
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseleave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTollTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    console.log(toolTipBox);
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
