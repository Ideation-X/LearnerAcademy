
function goToMainPage() {
  const divContainer = document.getElementsByClassName("go_back_functionallity");

  //first convert the each container inside content div to array from HTML collection
  const divContainerArray = Array.from(divContainer);
  //now each child container display property should be none , when I am clicking on the go back button
  divContainerArray.forEach((container) => {
    container.style.display = "none";
  });
}
const goBack = document.getElementsByClassName("go-back-btn");
const BtnArray = Array.from(goBack);

BtnArray.forEach((goBackBtn) => {
  // console.log('this is inside for each loop ', element)
  goBackBtn.addEventListener("click", goToMainPage);
});

// goBackBtn.addEventListener('click', goBackOnTOMainPage)
