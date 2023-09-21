
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
const container = document.getElementById('profile-page')
console.log(container)
const profile_btn = document.getElementById('profile-btn')
profile_btn.addEventListener('click', openProfilePage)