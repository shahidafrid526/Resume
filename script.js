// projects
let game = document.getElementById('projects');
game.style.display='none';

//eduction

let education = document.getElementById('eduction-card');
education.style.display='none';

//skills
let skills = document.getElementById('skills-container');
skills.style.display='none';

//certificates
let certificates = document.getElementById('certificates');
certificates.style.display='none';

let porfolio = document.getElementById('porfolio');

function showPorfolio(){
    game.style.display='none';
    certificates.style.display='none';
    education.style.display='none';
    skills.style.display='none';
    porfolio.style.display='block';
}

function showPorjects(){
    game.style.display='block';
    certificates.style.display='none';
    education.style.display='none';
    skills.style.display='none';
    porfolio.style.display='none';
}

function showEducation(){
    game.style.display='none';
    certificates.style.display='none';
    education.style.display='block';
    skills.style.display='none';
    porfolio.style.display='none';
    education.style.transition = 'all 0.9s ease-in-out';
}

function showSkills(){
    game.style.display='none';
    certificates.style.display='none';
    education.style.display='none';
    skills.style.display='block';
    porfolio.style.display='none';
    skills.style.transition = 'all 0.9s ease-in-out';
}

function showCertifications(){
    game.style.display='none';
    certificates.style.display='block';
    education.style.display='none';
    skills.style.display='none';
    porfolio.style.display='none';
    certificates.style.transition = 'all 0.9s ease-in-out';
}