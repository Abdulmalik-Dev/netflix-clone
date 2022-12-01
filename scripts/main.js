let deltails = document.querySelectorAll(".custom-details .box .top");

// To Open The Details For Questions 
deltails.forEach((ele) => {
    // On Click On Details 
  ele.addEventListener("click", (e) => {
    if (e.target.dataset.elementtype == "div") {
      e.target.dataset.open = true;
      openDetails(e.target);
    } else {
      e.target.parentElement.dataset.open = true;
      openDetails(e.target.parentElement);
    }
  });
});

function openDetails(targetElement) {
    // Make All Details Open Data False 
  deltails.forEach((ele) => (ele.dataset.open = false));
//   Make The Target Detail Open Data True 
  targetElement.dataset.open = true;
  
    deltails.forEach((e) => {
      if (e.dataset.open === "true") {
        e.parentElement.children[0].classList.add("show");
        e.parentElement.children[1].classList.add("show");
    } else {
        e.parentElement.children[0].classList.remove("show");
        e.parentElement.children[1].classList.remove("show");
      }
    });
}
