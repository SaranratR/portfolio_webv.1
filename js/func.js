
var currentTab = 'home';
function openTab(tabName) {
    var homeContent = document.getElementById('home');
    var projContent = document.getElementById('proj');
    var aboutContent = document.getElementById('about');
    var infoSection = document.getElementById('info');
    var contactSection = document.getElementById('contactSec')

    if (tabName === 'resume') {
        homeContent.style.display = 'block';
        projContent.style.display = 'block';
        aboutContent.style.display = 'none';
        infoSection.style.display = 'block';
        contactSection.style.display = 'block'
        scrollToResume();
    } else if (tabName === 'about') {
        homeContent.style.display = 'none';
        projContent.style.display = 'none';
        aboutContent.style.display = 'block';
        infoSection.style.display = 'none';
        contactSection.style.display = 'none'
    } else if(tabName=='home'){
        homeContent.style.display = 'block';
        projContent.style.display = 'block';
        aboutContent.style.display = 'none';
        infoSection.style.display = 'block';
        contactSection.style.display = 'block'
        scrollToHome();
    } else{
        homeContent.style.display = 'block';
        projContent.style.display = 'none';
        aboutContent.style.display = 'none';
        infoSection.style.display = 'none';
        contactSection.style.display = 'block'
    }
}
function scrollToHome() {
    var HomeDiv = document.getElementById('home');
    HomeDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToResume() {
    var projDiv = document.getElementById('proj');
    projDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    var contactDiv = document.getElementById('contact');
    contactDiv.scrollIntoView({ behavior: 'smooth' });
}

// Initial setup to hide 'about' section
document.addEventListener('DOMContentLoaded', function () {
    var aboutContent = document.getElementById('about');
    aboutContent.style.display = 'none';
});
function uncheckCheckbox() {
    document.getElementById('check').checked = false;
}
// function toggleSidebar() {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
// }
// function toggleNav() {
//     var hamburgerIcon = document.getElementById("hamburgerIcon");
//     hamburgerIcon.classList.toggle("show");
// }


