// Menu Stuff
const menuButton = document.getElementById('top-nav-bar__menu-button');
const sideNavMenu = document.getElementById('side-nav-menu');
const closeButton = document.getElementById('side-nav-menu__close-button');
const dashboardMenuItem = document.getElementById('side-nav-menu__sub-menu__dashboard');
const dashboardMenuSubItem = document.getElementById('side-nav-menu__sub-menu__dashboard-items');

// Dashboards
const dashboardOneButton = document.getElementById('side-nav-menu__sub-menu__dashboard-items__dashboard-one');
const dashboardTwoButton = document.getElementById('side-nav-menu__sub-menu__dashboard-items__dashboard-two');
const dashboardThreeButton = document.getElementById('side-nav-menu__sub-menu__dashboard-items__dashboard-three');
const dashboardContent = document.getElementById('dashboard-container__content');

const dashboards = [dashboardOneButton, dashboardTwoButton, dashboardThreeButton];

// Event Listeners
menuButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '250px';
    console.log(0);
});

closeButton.addEventListener('click', function(event) {
    sideNavMenu.style.width = '0px';
    console.log(1);
});

sideNavMenu.addEventListener('click', function (event) {
    sideNavMenu.style.width = '0px';
    console.log(2);
});

dashboardMenuItem.addEventListener('click', function (event) {
    // event.stopPropagation();

    if (dashboardMenuSubItem.style.display === 'flex') {
        dashboardMenuSubItem.style.display = 'none';
    } else {
        dashboardMenuSubItem.style.display = 'flex';
        dashboardMenuSubItem.style.flexDirection = 'column';
    }
    console.log(3);
});

// Dashboard rendering
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

