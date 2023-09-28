// below function open up the profile drop down
function openProfileDropdownMenu (){
    const container = document.getElementById('profile-dropdown-container')
    if (container.style.display === 'none') {
        container.style.display = 'block'

    }
    
    else {
        container.style.display = 'none'

    }

}
const downBtn = document.getElementById('down-arrow-btn')
downBtn.addEventListener('click', openProfileDropdownMenu)

// below function open up the profile page
function openProfilePage() {
    const container = document.getElementById('profile-page')
    if (container.style.display === 'none') {
        container.style.display = 'block'

    }
    else {
        container.style.display = 'none'

    }
}

const profile_btn = document.getElementById('profile-btn')
profile_btn.addEventListener('click', openProfilePage)


function closeTheProfileWindow () {
    console.log('hello')
    const profileContainer = document.getElementById('profile-page')
    profileContainer.style.display = 'none';
}
// closeTheProfileWindow function close the profile page when user click on the cross btn
const crossBtn  = document.getElementById('profile-back-btn')
crossBtn.addEventListener('click', closeTheProfileWindow)



// once user click any where on main container, drop-down should be pop out


function dropDownPopOut() {
    const container = document.getElementById('profile-dropdown-container')
    container.style.display = 'none'
    
}
const mainContainer = document.getElementById('hero-section');

mainContainer.addEventListener('click', dropDownPopOut);


// if user click any where on the resourse/content page, profile dropdown should be close .
// const resourceContainer = document.getElementById('content')
// resourceContainer.onclick()


