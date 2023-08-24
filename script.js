let porfolio = document.querySelector("#porfolio");
let projects = document.querySelector("#all-projects");
let education = document.querySelector("#Education");
let certifications = document.querySelector("#Certifications");
let skills = document.querySelector("#skills");

function showPorfolio() {
  projects.style.display = "none";
  porfolio.style.display = "block";
  education.style.display = "none";
  certifications.style.display = "none";
  skills.style.display = "none";
}

function showProjects() {
  projects.style.display = "flex";
  porfolio.style.display = "none";
  education.style.display = "none";
  certifications.style.display = "none";
  skills.style.display = "none";
}

function showEducation() {
  projects.style.display = "none";
  porfolio.style.display = "none";
  education.style.display = "block";
  certifications.style.display = "none";
  skills.style.display = "none";
}

function showCertifications() {
  projects.style.display = "none";
  porfolio.style.display = "none";
  education.style.display = "none";
  certifications.style.display = "flex";
  skills.style.display = "none";
}

function showSkills() {
  projects.style.display = "none";
  porfolio.style.display = "none";
  education.style.display = "none";
  certifications.style.display = "none";
  skills.style.display = "flex";
}
