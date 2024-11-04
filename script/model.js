// This file contains code for models
const cardKeyframes = [{ opacity: "0" }, { opacity: 1 }];
const backdropKeyframes = [{ opacity: "0" }, { opacity: 1 }];

class ModelController {
  open(child, title) {
    const backdrop = createCustomElement("div", {
      class:
        "absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur hover:cursor-pointer",
      children: [],
    });
    this.backdropAnimation = backdrop.animate(backdropKeyframes, {
      duration: 100,
      fill: "forwards",
    });

    backdrop.addEventListener("click", (e) => {
      this.close();
    });

    const card = createCustomElement("div", {
      class: "relative bg-white max-w-2xl mx-auto mt-4 px-8 py-6 rounded-sm",
      children: [
        createCustomElement("h2", { class: "text-xl", children: [title] }),
        child,
      ],
    });

    this.cardAnimation = card.animate(cardKeyframes, {
      duration: 300,
      fill: "forwards",
    });

    const div = createCustomElement("div", {
      class: "fixed w-screen h-screen z-50",
      children: [backdrop, card],
    });
    console.log("opening model...");
    this.modelElement = div;
    document.body.insertAdjacentElement("afterbegin", div);
  }

  close() {
    this.modelElement.remove();
  }
}
