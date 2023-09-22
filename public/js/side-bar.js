// STUDY MATERIAL

$("#s-m").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".study-material").show();

});

// FINANCIAL RESOURCES

$("#f-r").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".financial-resources").show();

});

// ROADMAP

$("#r-m").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".roadmap").show();

});

// TEST SERIES

$("#t-s").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".test-series").show();

});

// BOOKS

$("#b-k").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".books").show();

});

// QUIZ

$("#q-z").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".quiz").show();

});

// HELP

$("#h-p").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".help").show();

});

// CONTACT US

$("#c-u").click(() => {
    $(".hero-section").hide();
    $(".content div").hide();
    $(".contact-us").show();

});

console.log('side baar .js')

function goToMainPage() {
    const divContainer = document.getElementsByClassName('go_back_functionallity')

    //first convert the each container inside content div to array from HTML collection
    const divContainerArray = Array.from(divContainer)
    //now each child container display property should be none , when I am clicking on the go back button
    divContainerArray.forEach(container => {
        container.style.display = 'none'

       
    })


}
const goBack = document.getElementsByClassName('go-back-btn')
const BtnArray = Array.from(goBack)

BtnArray.forEach(goBackBtn => {
    // console.log('this is inside for each loop ', element)
    goBackBtn.addEventListener('click', goToMainPage)
    

});







// goBackBtn.addEventListener('click', goBackOnTOMainPage)

