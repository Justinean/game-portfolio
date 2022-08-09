const HTMLProjects = document.querySelectorAll(".project");
const githubs = document.querySelectorAll(".github");

class Project {
    constructor(project, x, y, link, githubLink) {
        this.x = x;
        this.y = y;
        this.link = link;
        this.githubLink = githubLink
        this.project = project;
        this.startX = x;
        this.startY = y;
    }

    onClick() {
        window.open(this.link)
    }

    onGithubClick() {
        window.open(this.githubLink)
    }

    render() {
        this.project.style.left = `${this.x}px`
        this.project.style.top = `${this.y}px`
    }
}

const projects = [
    new Project(HTMLProjects[0], 3550, window.innerHeight - 1500, "https://enviropact.herokuapp.com", "https://github.com/Justinean/EnviroPact"),
    new Project(HTMLProjects[1], 3800, window.innerHeight - 700, "https://manage-me-now.herokuapp.com", "https://github.com/Justinean/Manage-Me-Now"),
    new Project(HTMLProjects[2], 6200, window.innerHeight - 760, "https://justinean.github.io/BlitzandChaos/", "https://github.com/Justinean/BlitzandChaos"),
    new Project(HTMLProjects[3], 6500, window.innerHeight - 1700, "https://justinean.github.io/weather-dashboard/", "https://github.com/Justinean/weather-dashboard")
];

for (let i = 0; i < projects.length; i++) {
    HTMLProjects[i].addEventListener("click", () => {
        projects[i].onClick();
    })
    githubs[i].addEventListener("click", () => {
        projects[i].onGithubClick();
    })
}
