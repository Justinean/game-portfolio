const hereText = document.querySelector(".here");

class HereText {
    constructor(hereText, x, y) {
        this.x = x;
        this.y = y;
        this.fontSize = 28;
        this.color = "blue";
        this.font = "Arial"
        this.startX = x;
        this.startY = y;
        this.hereText = hereText
    }

    render() {
        this.hereText.style.left = `${this.x}px`
        this.hereText.style.top = `${this.y}px`
        this.hereText.style.fontSize = `${this.fontSize}px`
        this.hereText.style.color = this.color;
        this.hereText.style.fontFamily = this.font;
    }
}

class Text {
    constructor(text, x, y, fontSize = 30, font = "Arial", bold = false, color = "#00000090") {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.font = font;
        this.bold = bold;
        this.color = color;
        this.startX = x;
        this.startY = y;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.font = `${this.bold ? "bold" : ""} ${this.fontSize}px ${this.font}`;
        ctx.fillText(this.text, this.x, this.y);
    }
}

const texts = [
    new Text("Justin Hoch's Portfolio", 200, 300, 50, "Arial", true, "black"),
    new Text("Use a, d, and space to move", 200, 400),
    new Text("About me ↑", 1350, window.innerHeight - 400),
    new Text("Resume ↑", 1350, window.innerHeight - 350),
    new Text("Resume ↗", 1000, window.innerHeight - 1450),
    new Text("You can download my resume        .", 2500, window.innerHeight - 2700),
    new HereText(hereText, 2910, window.innerHeight - 2725),
    new Text("Front-end Proficiencies:", 2500, window.innerHeight - 2600, 40, "Arial", true),
    new Text("• HTML", 2550, window.innerHeight - 2550),
    new Text("• CSS", 2550, window.innerHeight - 2520),
    new Text("• JavaScript", 2550, window.innerHeight - 2490),
    new Text("• JQuery", 2550, window.innerHeight - 2460),
    new Text("• Responsive Design", 2550, window.innerHeight - 2430),
    new Text("• React", 2550, window.innerHeight - 2400),
    new Text("Back-end Proficiencies:", 3100, window.innerHeight - 2600, 40, "Arial", true),
    new Text("• Node", 3150, window.innerHeight - 2550),
    new Text("• Express", 3150, window.innerHeight - 2520),
    new Text("• MySQL", 3150, window.innerHeight - 2490),
    new Text("• Sequelize", 3150, window.innerHeight - 2460),
    new Text("• MongoDB", 3150, window.innerHeight - 2430),
    new Text("• Mongoose", 3150, window.innerHeight - 2400),
    new Text("• RESTful APIs", 3150, window.innerHeight - 2370),
    new Text("• GraphQL APIs", 3150, window.innerHeight - 2340),
    new Text("Project gallery →", 1350, window.innerHeight - 300),
    new Text("EnviroPact ↑", 2900, window.innerHeight - 450),
    new Text("Weather tracker →", 2900, window.innerHeight - 400),
    new Text("Manage me now →", 2900, window.innerHeight - 350),
    new Text("BlitzandChaos →", 2900, window.innerHeight - 300),
    new Text("Full stack web developer passionate about creating and maintaining websites both", 100, window.innerHeight - 1600, 20),
    new Text("on the front end and back end. Leveraging background experience in customer", 100, window.innerHeight - 1570, 20),
    new Text("services to design intuitive and effective experiences for the web. Known for having", 100, window.innerHeight - 1540, 20),
    new Text("a bright personality that can help lift the spirits of coworkers. Bilingual, languages", 100, window.innerHeight - 1510, 20),
    new Text("include English and basic Spanish.", 100, window.innerHeight - 1480, 20),
    new Text("A pact to improve our environment, economy,", 3550, window.innerHeight - 1220, 25),
    new Text("and society by holding businesses, corporations,", 3550, window.innerHeight - 1190, 25),
    new Text("and governments accountable for their actions", 3550, window.innerHeight - 1160, 25),
    new Text("and damages. Our mission and goal at EnviroPact", 3550, window.innerHeight - 1130, 25),
    new Text("is to make information and data more accessible", 3550, window.innerHeight - 1100, 25),
    new Text("and transparent to the public so that together", 3550, window.innerHeight - 1070, 25),
    new Text("we can work towards creating a world with values.", 3550, window.innerHeight - 1040, 25),
    new Text("A project and employee manager application.", 3800, window.innerHeight - 420, 25),
    new Text("Managers can create projects and tasks and assign", 3800, window.innerHeight - 390, 25),
    new Text("those to employees. Employees can not change", 3800, window.innerHeight - 360, 25),
    new Text("anything but they can change their profile pictures", 3800, window.innerHeight - 330, 25),
    new Text("and view company projects and their own projects.", 3800, window.innerHeight - 300, 25),
    new Text("Weather Tracker ↗", 4750, window.innerHeight - 500),
    new Text("BlitzandChaos →", 4750, window.innerHeight - 450),
    new Text("An interactive story where the main character - YOU,", 6200, window.innerHeight - 480, 25),
    new Text("the user - will embark on a mission to save the world", 6200, window.innerHeight - 450, 25),
    new Text("from a DRAGON! The user will read a story and", 6200, window.innerHeight - 420, 25),
    new Text("make decisions, which will determine the final", 6200, window.innerHeight - 390, 25),
    new Text("outcome. In the end, you will either find a way to", 6200, window.innerHeight - 360, 25),
    new Text("save everyone (including yourself) or be forced to", 6200, window.innerHeight - 330, 25),
    new Text("watch everything burn in an unstoppable, fiery", 6200, window.innerHeight - 300, 25),
    new Text("apocalypse. The choice is yours. Choose wisely.", 6200, window.innerHeight - 270, 25),
    new Text("A weather dashboard that you can search for the", 6500, window.innerHeight - 1420, 25),
    new Text("weather using the postal code and the country of", 6500, window.innerHeight - 1390, 25),
    new Text("the location you want the weather of. It stores", 6500, window.innerHeight - 1360, 25),
    new Text("previously searched locations so the user can just", 6500, window.innerHeight - 1330, 25),
    new Text("click on a button to display the weather of that", 6500, window.innerHeight - 1300, 25),
    new Text("location again. The user can also clear the previously", 6500, window.innerHeight - 1270, 25),
    new Text("searched locations.", 6500, window.innerHeight - 1240, 25),
]

// •