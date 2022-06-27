const navItemEl = document.getElementById('nav-link')
const hamBtn = document.getElementById('hamburger-btn')
const navItems = document.querySelector('.nav-links')
const mobileMenu = document.querySelector('.menu-items')


const navHome = document.getElementById('nav-home')
const navAbout = document.getElementById('nav-about')
const navWork = document.getElementById('nav-work')
const navExp = document.getElementById('nav-exp')
const navContact = document.getElementById('nav-contact')




hamBtn.addEventListener('click', () => {
    console.log('i was clicked')
    hamBtn.classList.toggle('open')
    mobileMenu.classList.toggle('visible')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('opacity')
    mobileMenu.classList.toggle('visible')

})




//// Navigation 'Selected' Style///





navHome.addEventListener('click', () => {
    navHome.classList.toggle('selected')
    removeSelected(navAbout)
    removeSelected(navExp)
    removeSelected(navContact)
    removeSelected(navWork)
})

navAbout.addEventListener('click', () => {
    navAbout.classList.toggle('selected')
    //navHome.classList.toggle('selected')
    //navWork.classList.toggle('selected')

    removeSelected(navHome)
    removeSelected(navWork)
    removeSelected(navExp)
    removeSelected(navContact)
    
})


navWork.addEventListener('click', () => {
    navWork.classList.toggle('selected')
    removeSelected(navHome)
    removeSelected(navAbout)
    removeSelected(navExp)
    removeSelected(navContact)
    
})

navExp.addEventListener('click', () => {
    navExp.classList.toggle('selected')
    removeSelected(navHome)
    removeSelected(navAbout)
    removeSelected(navWork)
    removeSelected(navContact)
    

})
navContact.addEventListener('click', () => {
    navContact.classList.toggle('selected')
    removeSelected(navHome)
    removeSelected(navAbout)
    removeSelected(navExp)
    removeSelected(navWork)
    
})

/////////   




///for(let i = 0; i < navItems.children.length; i++) {}


/// Remove Selected Function////  
   
function removeSelected(navlink) {

    if (navlink.classList.contains('selected') == true) {
    
    
            navlink.classList.remove('selected')
            console.log('removed')

} else {
    console.log('nothing to do')
}
    
}

////////////////////////////////////////////////////////////////////////
