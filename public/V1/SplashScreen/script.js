function navigateToNextPage() {
  window.location.href = "./../Home_Screen/home_screen/index.html";
}
window.onload = function () {
  setTimeout(() => {
    navigateToNextPage();
  }, 2000);
};
