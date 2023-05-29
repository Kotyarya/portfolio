import htmlImg from "../../Components/SkillsPage/img/htmlImg.png";
import cssImg from "../../Components/SkillsPage/img/cssImg.png";
import jsImg from "../../Components/SkillsPage/img/jsImg.png";
import reactImg from "../../Components/SkillsPage/img/reactImg.png";
import reduxImg from "../../Components/SkillsPage/img/reduxImg.png";
import sassImg from "../../Components/SkillsPage/img/sassImg.png";
import figmaImg from "../../Components/SkillsPage/img/figmaImg.png";
import webstormImg from "../../Components/SkillsPage/img/webstormImg.png";

export const skillsData = {
    skills: [
        {
            title: "HTML",
            descriptionEng: `HTML stands for "Hypertext Markup Language". HTML is responsible for the structure and content of a page.`,
            descriptionPln: `HTML to skrót od "Hypertext Markup Language". HTML odpowiada za strukturę i zawartość strony.`,
            logo: htmlImg
        },
        {
            title: "CSS",
            descriptionEng: `CSS stands for "Cascading Style Sheets". The CSS language is responsible for the appearance of the page.`,
            descriptionPln: `CSS to skrót od "Cascading Style Sheets" (Kaskadowe Arkusze Stylów). Język CSS jest odpowiedzialny za wygląd strony.`,
            logo: cssImg
        },
        {
            title: "JavaScript",
            descriptionEng: "JavaScript is a programming language designed for building interactive websites. It consists of instructions for the browser to perform specific actions.",
            descriptionPln: `JavaScript to język programowania przeznaczony do tworzenia interaktywnych stron internetowych. Składa się z instrukcji dla przeglądarki do wykonywania określonych działań.`,
            logo: jsImg
        },
        {
            title: "React",
            descriptionEng: "React.js is an open-source JavaScript library used for building user interfaces. It enables efficient implementation of reactivity, where changes in one element trigger corresponding changes in other elements.",
            descriptionPln: `React.js to biblioteka JavaScript o otwartym kodzie źródłowym używana do tworzenia interfejsów użytkownika. Umożliwia wydajną implementację reaktywności, w której zmiany w jednym elemencie powodują odpowiednie zmiany w innych elementach.`,
            logo: reactImg
        },
        {
            title: "redux1 & redux1-Toolkit",
            descriptionEng: "redux1 is a tool for managing data state and user interface in JavaScript applications with a large number of entities. It is a JavaScript library.",
            descriptionPln: `Redux to narzędzie do zarządzania stanem danych i interfejsem użytkownika w aplikacjach JavaScript z dużą liczbą podmiotów. Jest to biblioteka JavaScript.`,
            logo: reduxImg
        },
        {
            title: "SASS",
            descriptionEng: "Sass is a metalanguage (a language for describing another language) that makes writing CSS code easier and faster.",
            descriptionPln: "Sass to metajęzyk (język opisujący inny język), który ułatwia i przyspiesza pisanie kodu CSS.",
            logo: sassImg
        },
    ],
    app: [{
        title: "Figma",
        descriptionEng: "Figma - an application to work with the layout of the future web page",
        descriptionPln: "Figma - aplikacja do pracy z układem przyszłej strony internetowej",
        logo: figmaImg
    }, {
        title: "WebStorm",
        descriptionEng: "WebStorm is the application I use to write code",
        descriptionPln: "WebStorm to aplikacja, której używam do pisania kodu",
        logo: webstormImg
    }]
}

