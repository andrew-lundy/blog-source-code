const menuButton = document.getElementById('top-nav-bar__menu-button');
const sideNavMenu = document.getElementById('side-nav-menu');
const closeButton = document.getElementById('side-nav-menu__close-button');
const servicesMenuItem = document.getElementById('side-nav-menu__sub-menu__dashboard');
const servicesMenuContent = document.getElementById('side-nav-menu__sub-menu__dashboard-content');

sideNavMenu.addEventListener('click', function (event) {
    sideNavMenu.style.width = '0px';
});

menuButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '250px';
});

closeButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '0px';
})

servicesMenuItem.addEventListener('click', function (event) {

    if (servicesMenuContent.style.display === 'flex') {
        servicesMenuContent.style.display = 'none';
    } else {
        servicesMenuContent.style.display = 'flex';
        servicesMenuContent.style.flexDirection = 'column';
    }

});