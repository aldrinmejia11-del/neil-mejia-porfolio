const menuIcon = document.querySelector('#menu-icon');
const menuIcon = document.querySelector('.nav-links);

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
function openProject() {
    document.getElementById("project-popup").style.display = "flex";
}

function closeProject() {
    document.getElementById("project-popup").style.display = "none";
}
function openProject(projectId) {
    alert("Button is working!");
}
