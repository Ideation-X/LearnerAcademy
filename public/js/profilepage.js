
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


// once user click any where on main container drop-down should be pop out



function dropDownPopOut() {
    const container = document.getElementById('profile-dropdown-container')
    container.style.display = 'none'
    
}
const mainContainer = document.getElementById('hero-section')
mainContainer.addEventListener('click', dropDownPopOut)
const resourceContainer = document.getElementById('content')
resourceContainer.addEventListener('click', dropDownPopOut)