import htmlImg from "../../assets/img/skills/htmlImg.png";
import cssImg from "../../assets/img/skills/cssImg.png";
import jsImg from "../../assets/img/skills/jsImg.png";
import reactImg from "../../assets/img/skills/reactImg.png";
import reduxImg from "../../assets/img/skills/reduxImg.png";
import sassImg from "../../assets/img/skills/sassImg.png";
import tsImg from "../../assets/img/skills/tsImg.png"
import tailwindImg from "../../assets/img/skills/TailwindImg.png"
import figmaImg from "../../assets/img/skills/figmaImg.png";
import webstormImg from "../../assets/img/skills/webstormImg.png";
import InstagramLogo from "../../assets/img/links/Instagram.png"
import FacebookLogo from "../../assets/img/links/Facebook.png"
import GitHubLogo from "../../assets/img/links/GitHub.png"
import LinkedInLogo from "../../assets/img/links/LinkedIn.png"
import webovio from "../../assets/img/project/Webovio.png"
import brandingDigital from "../../assets/img/project/Branding & Digital Design studio.png"
import artifical from "../../assets/img/project/Artificial intelligence & Syber security.png"
import remmy from "../../assets/img/project/Remmy.png"


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
            title: "Redux",
            descriptionEng: "Redux is a tool for managing data state and user interface in JavaScript applications with a large number of entities. It is a JavaScript library.",
            descriptionPln: `Redux to narzędzie do zarządzania stanem danych i interfejsem użytkownika w aplikacjach JavaScript z dużą liczbą podmiotów. Jest to biblioteka JavaScript.`,
            logo: reduxImg
        },
        {
            title: "SASS",
            descriptionEng: "Sass is a metalanguage (a language for describing another language) that makes writing CSS code easier and faster.",
            descriptionPln: "Sass to metajęzyk (język opisujący inny język), który ułatwia i przyspiesza pisanie kodu CSS.",
            logo: sassImg
        },
        {
            title: "TypeScript",
            descriptionEng: "TypeScript (TS, TScript) is a web programming language based on JavaScript. It provides clearer and more reliable code through static typing and the ability to compile to JavaScript.",
            descriptionPln: "TypeScript (TS, TScript) to język programowania webowego oparty na JavaScript. Zapewnia czytelniejszy i bardziej niezawodny kod dzięki statycznemu typowaniu i możliwości kompilacji do JavaScript.",
            logo: tsImg
        },
        {
            title: "Tailwind",
            descriptionEng: "Tailwind CSS is a CSS framework that simplifies and accelerates web development by providing a vast library of pre-defined classes for creating custom user interfaces.",
            descriptionPln: "Tailwind CSS to framework CSS z dużą biblioteką gotowych klas, który ułatwia tworzenie niestandardowych interfejsów użytkownika, przyspieszając proces tworzenia stron internetowych i utrzymanie kodu.",
            logo: tailwindImg
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
export const links = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/kotyarya_/",
        logo: InstagramLogo,
        color: "#EB4A63"
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100010763708201",
        logo: FacebookLogo,
        color: "#1877F2"
    },
    {
        title: "GitHub",
        href: "https://github.com/Kotyarya",
        logo: GitHubLogo,
        color: "white"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/maksym-aksamitnyi-926329277/",
        logo: LinkedInLogo,
        color: "#0274B3"
    }
]
export const project = [
    {
        title: "Webovio",
        descriptionENG: "A creative agency landing page is a captivating and impactful visual platform created to showcase the agency's unique and creative services. From the very moment you land on this site, you are greeted with a modern and stylish design that instantly grabs your attention.",
        descriptionPLN: "Strona docelowa kreatywnej agencji to ekscytująca i efektowna platforma wizualna, stworzona do prezentowania unikalnych i kreatywnych usług agencji. Od samego początku, gdy trafia się na tę stronę, witamy Cię nowoczesnym i stylowym designem, który natychmiast przyciąga Twoją uwagę.",
        location: "Webovio",
        img: webovio,
        tech: [htmlImg, cssImg, jsImg],
        rotation: "right"
    },
    {
        title: "Branding & Digital Design studio",
        descriptionENG: "The landing page of a digital design studio is an elegant and functional web platform showcasing the studio's creative and innovative services. From the very first glance at this site, you are greeted with a stylish and modern design that immediately captures your attention.",
        descriptionPLN: "Strona docelowa studia projektowania cyfrowego to elegancka i funkcjonalna platforma internetowa, prezentująca kreatywne i innowacyjne usługi studia. Już od pierwszego spojrzenia na tę stronę, witają Cię stylowy i nowoczesny design, który natychmiast przyciąga Twoją uwagę.",
        location: "Branding-&-Digital-Design-studio",
        img: brandingDigital,
        tech: [htmlImg, cssImg, jsImg],
        rotation: "left"
    },
    {
        title: "Artificial intelligence & Syber security",
        descriptionENG: "On this landing page, you will immerse yourself in the captivating world of artificial intelligence and security in the field of cybersecurity. As soon as you land on this site, you are greeted with an attractive and modern design that immediately captures your attention.",
        descriptionPLN: "Na tej stronie docelowej zanurzysz się w fascynującym świecie sztucznej inteligencji i bezpieczeństwa w dziedzinie cyberbezpieczeństwa. Jak tylko trafisz na tę stronę, zostaniesz powitany atrakcyjnym i nowoczesnym designem, który natychmiast przyciąga Twoją uwagę.",
        location: "Artificial-intelligence-&-Syber-security",
        img: artifical,
        tech: [htmlImg, cssImg, jsImg],
        rotation: "right"
    },
    {
        title: "Remmy",
        descriptionENG: "The landing page about skin and facial health offers you unique solutions for maintaining and improving the condition of your skin. From the very first glance at this site, you will see a vibrant and appealing design that immediately grabs your attention.",
        descriptionPLN: "Strona docelowa o zdrowiu skóry i twarzy oferuje unikalne rozwiązania dla utrzymania i poprawy kondycji Twojej skóry. Już od pierwszego spojrzenia na tę stronę zauważysz jasny i atrakcyjny design, który natychmiast przyciągnie Twoją uwagę.",
        location: "Remmy",
        img: remmy,
        tech: [htmlImg, cssImg],
        rotation: "left"
    }
]

