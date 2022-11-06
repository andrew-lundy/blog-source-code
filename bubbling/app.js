// Menu Stuff
const menuButton = document.getElementById('top-nav-bar__menu-button');
const sideNavMenu = document.getElementById('side-nav-menu');
const closeButton = document.getElementById('side-nav-menu__close-button');
const dashboardMenuItem = document.getElementById('side-nav-menu__sub-menu__dashboard');
const dashboardMenuContent = document.getElementById('side-nav-menu__sub-menu__dashboard-content');

// Dashboards
const dashboardOneButton = document.getElementById('side-nav-menu__sub-menu__dashboard-content__dashboard-one');
const dashboardTwoButton = document.getElementById('side-nav-menu__sub-menu__dashboard-content__dashboard-two');
const dashboardThreeButton = document.getElementById('side-nav-menu__sub-menu__dashboard-content__dashboard-three');
const dashboardContent = document.getElementById('dashboard-container__content');

const dashboards = [dashboardOneButton, dashboardTwoButton, dashboardThreeButton];


menuButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '250px';
});

closeButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '0px';
});

sideNavMenu.addEventListener('click', function (event) {
    sideNavMenu.style.width = '0px';
});

dashboardMenuItem.addEventListener('click', function (event) {
    event.stopPropagation();
    if (dashboardMenuContent.style.display === 'flex') {
        dashboardMenuContent.style.display = 'none';
    } else {
        dashboardMenuContent.style.display = 'flex';
        dashboardMenuContent.style.flexDirection = 'column';
    }
});

function showDashboard(event) {
    const html = event.target.innerHTML;

    dashboardContent.innerHTML = html;
}

for (const dashboard of dashboards) {
    dashboard.addEventListener('click', function (event) {
        showDashboard(event);
        console.log(event);
    });
}

