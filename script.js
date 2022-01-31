function changeTab(event) {
  const newActiveId = event.target.getAttribute("data-id");
  const newActiveTab = document.getElementById(`tab-content-${newActiveId}`);
  const prevActiveTab = document.querySelector(".tab.active");
  //   console.log(prevActiveTab);
  const prevActiveId = prevActiveTab.getAttribute("data-id");
  prevActiveTab.classList.remove("active");
  document.getElementById(`tab-content-${prevActiveId}`).style.display = "none";
  event.target.classList.add("active");
  newActiveTab.style.display = "flex";

  //   console.log(x);
}
function toggler(event) {
  const e = document.getElementById("navbar");
  e.classList.toggle("hidden");
}
