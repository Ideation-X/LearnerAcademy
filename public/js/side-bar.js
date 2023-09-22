// STUDY MATERIAL

$("#s-m").click(() => {
 $(".hero-section").hide();
  $(".content div").hide();
   $(".study-material").show();
  $(".financial-resources").hide();
  $(".roadmap").hide();
  $(".test-series").hide();
  $(".books").hide();
  $(".quiz").hide();
  $(".help").hide();
  $(".contact-us").hide();
});

// FINANCIAL RESOURCES

$("#f-r").click(() => {
    $(".study-material").hide();
  $(".hero-section").hide();
  $(".content div").hide();
  $(".financial-resources").show();
  $(".roadmap").hide();
  $(".test-series").hide();
  $(".books").hide();
  $(".quiz").hide();
  $(".help").hide();
  $(".contact-us").hide();
});

// ROADMAP

$("#r-m").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").show();
    $(".test-series").hide();
    $(".books").hide();
    $(".quiz").hide();
    $(".help").hide();
    $(".contact-us").hide();
});

// TEST SERIES

$("#t-s").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").hide();
    $(".test-series").show();
    $(".books").hide();
    $(".quiz").hide();
    $(".help").hide();
    $(".contact-us").hide();
});

// BOOKS

$("#b-k").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").hide();
    $(".test-series").hide();
    $(".books").show();
    $(".quiz").hide();
    $(".help").hide();
    $(".contact-us").hide();
});

// QUIZ

$("#q-z").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").hide();
    $(".test-series").hide();
    $(".books").hide();
    $(".quiz").show();
    $(".help").hide();
    $(".contact-us").hide();
});

// HELP

$("#h-p").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").hide();
    $(".test-series").hide();
    $(".books").hide();
    $(".quiz").hide();
    $(".help").show();
    $(".contact-us").hide();
});

// CONTACT US

$("#c-u").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
     $(".study-material").hide();
    $(".financial-resources").hide();
    $(".roadmap").hide();
    $(".test-series").hide();
    $(".books").hide();
    $(".quiz").hide();
    $(".help").hide();
    $(".contact-us").show();
});

console.log("side baar .js");

function goToMainPage() {
  const divContainer = document.getElementsByClassName(
    "go_back_functionallity"
  );

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
