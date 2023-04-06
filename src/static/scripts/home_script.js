const background = document.querySelector(".background-container");


window.addEventListener("scroll", () => {
    let translateValue = scrollY / 2;
    console.log("bite");
    background.style.transform = `translate(0px, ${-translateValue}px)`;
})