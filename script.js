const wrapper = document.querySelector(".transisi-wrapper");
const jumbo = document.querySelector(".jumbo");

wrapper.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("efek");
    setTimeout(function () {
      jumbo.classList.remove("efek");
    }, 1000);
  }
});
