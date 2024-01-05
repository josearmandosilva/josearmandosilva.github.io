import * as React from "react"
import Navbar from "../components/Navbar";
import ready2guests_logo from "../images/projects/ready2guests/background.png";
import cbpowerhouse_logo from "../images/projects/cbpowerhouse/background.png";
import cashinov_logo from "../images/projects/cashinov/background.jpg";
import mrpizza_logo from "../images/projects/mrpizza/background.jpeg";
import csmlanparty_logo from "../images/projects/csmlanparty/background.png";
import hsmoveis_management_logo from "../images/projects/hsmoveis_management/background.png";
import hsmoveis_website_logo from "../images/projects/hsmoveis_website/background.png";
import shutdowntimer_logo from "../images/projects/shutdowntimer/background.png";
import villa109_logo from "../images/projects/villa109/background.png";
import terafone_logo from "../images/projects/terafone/background.png";
import portfolio_logo from "../images/projects/portfolio/background.png";
import integrations_logo from "../images/projects/integrations/background.png";
import iness_logo from "../images/projects/iness/background.png";
import chip8_logo from "../images/projects/chip8/background.png";

import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        "title" : "Ready2Guests - Co-Founder",
        "slug" : "ready2guests",
        "background_url" : ready2guests_logo,
        "description" : "An online platform that allows hosts to list their properties and connect them with multiple Online Travel Agencies like Booking.com and AirBNB. Hosts can also be represented by concierges who handle all the reservations, cleaning, and expenses for them, making it a breeze to host a property.",
        "technologies" : ["Laravel", "PHP", "AWS", "MySQL", "CSS", "HTML5" ]
    },
    {
        "title" : "Cbpower House - Co-Founder",
        "slug": "cbpowerhouse", 
        "background_url" : cbpowerhouse_logo,
        "description" : "An online platform that allows the users in cbpower ecosystem to list their properties to sell or rent with multiple benefits and connect them with multiple Real estate platforms like Idealista and Imovirtual. The platform is also prepared to be used by the cbpower legal team to generate all the documents and contracts that are necessary for the Portuguese reality to complete the transactions with the customers.",
        "technologies" : [ "PHP", "Codeigniter", "MySQL", "CSS", "HTML5", "jQuery" ]
    },
    {
        "title" : "INESS - Allureinov",
        "slug" : "iness_xddashboard",
        "background_url" : iness_logo,
        "description" : "A web application to interact with XD Software for the retail market which can be accessible anytime anywhere, unlike the software itself which is a Windows Application. This is possible through an integration server that acts as a bridge between the XD software and the web application, through a VPN.",
        "technologies" : ["React.js", "Tailwind Css", "Node.js", "Express.js", "MySQL", "CSS", "HTML5"]
    },
    {
        "title" : "Cashinov - Allureinov",
        "slug" : "cashinov",
        "background_url" : cashinov_logo,
        "description" : "A graphical software used by stores to interact with the Cashkeeper automatic payment machine. It includes a login and permission system for employees, facilitates payment processing to receive funds from customers, allows the addition or withdrawal of funds from the machine, provides real-time monitoring of money levels by denomination in both the safe and the cashbox. Additionally, it incorporates a day-closing functionality that calculates and preserves the working capital required for the next day. Any surplus funds are automatically transferred to the safe, ensuring that employees don't ever need to handle money.",
        "technologies" : [ "C#", "Node.js", "Express.js", "Sockets", "SQLite", "Windows Forms" ]
    },
    {
        "title" : "MrPizza Application",
        "slug" : "mrpizza",
        "background_url" : mrpizza_logo,
        "description" : "IOS and Android Applications as well as an administrative backoffice. This application allow customers to register their puchases through a QR Code in certain MrPizza stores like a fidelity card which can be exchanged with free pizzas after a certain ammount registered. We can see the available pizzas on the menu and stores.",
        "technologies" : ["Flutter", "Android", "IOS", "Node.js", "React MUI", "CSS", "HTML5"]
    },
    {
        "title" : "Invoicing softwares integration with Payment Machines (Glory, Cashlogy, Cashkeeper)",
        "slug" : "payment_systems_software_integrations",
        "background_url" : integrations_logo,
        "description": "Development of integrations between management software solutions and automatic payment machines, each with different approaches in terms of communication. Some were done via pure sockets, others with COM Objects, and some with an already developed DLL. The objective is for this software to support these payment machines when the payment is in cash, ensuring that employees don't have to handle cash directly.",
        "technologies" : ["C#", "Sockets", "DLL", "SQLite", "COM Objects"]
    },
    {
        "title" : "Terafone",
        "slug" : "terafone",
        "background_url" : terafone_logo,
        "description" : "Company focused on brokering telecommunication packages in Portugal. In this project, features were added to the portal, including automatic email notifications, statistics, operator and package management, sales management, complaint management, and lead acquisition.",
        "technologies" : [ "JavaEE", "Java", "JSF", "MySQL", "CSS", "HTML5" ]
    },
    
    {
        "title" : "HS Móveis - Management",
        "slug" : "hsmoveis",
        "background_url" : hsmoveis_management_logo,
        "description" : "A web application back office that serves as a CRM and Invoice Management system. It enables employees to handle client management and automatically generate invoices with specified products. These invoices can be printed or sent via email, all formatted using the company's templates",
        "technologies" : [ "React.js", "Node.js", "MySQL", "HTML5", "CSS" ]

    },
    {
        "title" : "CSM Lan Party",
        "slug" : "csm_lan_party",
        "background_url" : csmlanparty_logo,
        "description" : "In my high school project, I independently learned Laravel and websockets. It was my final project, earning a perfect grade of 20 out of 20. In 2016, I took charge of the school's Lan Party website, turning it into my final project due to its complexity and time requirements. The website featured dynamic information about the event, including participating teams, tournament registration, FAQs, and more. It included a back office resembling a CRM, allowing us to print user card information for the lan day, and online check-in through a QRCode on participants' phones. One could also manage various aspects of the event, such as teams, games, tournaments, FAQs, images, sponsors, etc. We even integrated with eBot for CSGO, automating the display of the server connection string once the servers were up and the teams had chosen their map.",
        "technologies" : [ "Laravel", "PHP", "websockets", "HTML", "CSS", "jQuery", "ebot"]
    },
    {
        "title" : "Chip8 - Emulator",
        "slug" : "chip8",
        "background_url" : chip8_logo,
        "description" : "A spare time project involving a Chip8 Emulator that enables the playing of old games through ROMs available on the internet. I undertook this project during my college years to deepen my understanding of emulators. I extensively read online documentation and decided to get hands-on. My primary goal was to create a web interface that could be comprehensible to non-IT individuals, allowing them to understand the inner workings of all the elements required to run a program and observe real-time changes in memory and registers. However, I ultimately focused solely on programming the emulator and make it playable. I did end up not working on the project anymore due prioritization.",
        "technologies" : [ "Chip8", "Emulators", "Typescript", "React.js", "HTML", "CSS" ]
    },
    {
        "title" : "Master thesis",
        "slug" : "thesis",
        "description" : "My thesis consists of the research and development of middleware for multiple well-known frameworks to help protect against Cross-Site Leaks using 'fetchmetadata' headers. Cross-Site Leaks, abbreviated as XSLeaks, constitute a class of attacks that has existed since the year 2000 and has been emerging recently. This is an interesting type of attack because it is primarily based on covert/side channels to gather cross-site information from a malicious web page.",
        "technologies" : [ "Laravel", "Flask", "Django", "Express.js", "Fetchmetadata", "XS-Leaks" ]
    },
    {
        "title" : "Recommender System - Parallel and Distributed Computing",
        "slug" : "recommender_system",
        "background_url" : "",
        "description" : "A recommender system, similar to Spotify's song recommendations or Amazon's product recommendation systems, utilizes matrices of previous user activity and associates them with similar user profiles. Due to the complexity of these solutions, we were tasked with developing a solution in sequential format, parallel format using OpenMP, and distributed format with MPI, designed to run on a cluster.",
        "technologies" : ["C", "OpenMP", "MPI"]
    },
    {
        "title" : "Dida GIGA-STORE - Mobile and Ubiquitous Computing",
        "slug" : "Dida GIGA Store",
        "background_url" : "",
        "description" : "A distributed key-value store solution that supports partial replication like in data centers. A basic version, which guarantees a strong consistency model, linearizability. And an advanced version, targeting the high latency problems, that assures a higher availability with a weaker consistency model, causal and eventual consistency by using a series of locks, synchronization phases and snapshots. The use cases of this solution are a Session Store, Message Broker, Cloud Database or even a Cache.",
        "technologies" : [ "C#", "Sockets" ]
    },
    {
        "title" : "DPAS - High-Reliability Systems",
        "slug" : "dpas",
        "background_url" : "",
        "description" : "Distributed Public Announcement System (messaging system) is a project to ensure the security triad between announcements. It is resilient against Replay attacks (Freshness), Tampering (Integrity and Authentication), and Forging (Confidentiality). In the second phase of the project, Byzantine Failures were introduced, and a fail-silent distributed system model was employed to ensure system availability. Three algorithms from the book 'Introduction to Reliable and Secure Distributed Programming' were implemented:-Private Rooms: Byzantine One Writer N Readers Atomic Register Algorithm\n-General Rooms: Authenticated-Data Byzantine Quorum\n-Clients: Authenticated Double Echo Broadcast Algorithm",
        "technologies" : [ "C#", "Sockets", "Locks" ]
    },
    {
        "title" : "Sudoku@Cloud - Cloud Computing and Virtualization",
        "slug" : "sudoku_cloud",
        "background_url" : "",
        "description" : "Sudoku@Cloud is a cloud deployment which enables solving Sudoku puzzles on-demand. It incorporates multiple workers for computational tasks, a load balancer to distribute workloads, and an auto-scaler component to dynamically scale the cluster. An instrumentation tool is utilized to efficiently gather performance metrics, which inform both the load balancer and auto-scaler.",
        "technologies" : [ "Java", "AWS" ]
    },
    {
        "title" : "FoodIST - Mobile and Ubiquitous Computing",
        "slug" : "foodist",
        "background_url" : "",
        "description" : "An Android app and a server that provides information about food services at Instituto Superior Técnico. The solution utilizes Bluetooth beacons and Wi-Fi Direct for a peer-to-peer wireless connection to determine queue lengths in canteens or bars. Additionally, it displays information about dishes, the opening hours of the user's preferred campus, and includes a rating system for each food service.",
        "technologies" : [ "Android", "Java", "Spring Boot", "Bluetooth Beacons", "Wifi-Direct" ]
    },
    {
        "title" : "Villa109",
        "slug" : "villa109",
        "background_url" : villa109_logo,
        "description" : "Informative website for an architecture firm based in France and Portugal. This website showcases their portfolio, delve into their innovative construction method—L.S.F. Light Steel Frame, and it also displays a catalog with the prices of completed properties.",
        "technologies" : [ "Wordpress" ]
    },
    {
        "title" : "HS Móveis - Website",
        "slug" : "hsmoveis",
        "background_url" : hsmoveis_website_logo,
        "description" : "Informative website for HSMóveis, a Portugal-based company specializing in custom furniture production. The site prominently showcases their portfolio, details about the company, and contact information.",
        "technologies" : [ "Wordpress" ]
    },
    {
        "title" : "Shutdown Timer",
        "slug" : "shutdown_timer",
        "background_url" : shutdowntimer_logo,
        "description": "A Windows application that I created because, in the old days, the internet was slower. Therefore, when downloading large files that would continue until the middle of the night, I would set up this program to shut down at a specific time so the computer wasn't on unnecessarily. The program can shutdown at a particular day-time, at a particular time during the current day, or after a specified amount of time in hours, minutes, and seconds.",
        "technologies" : [ "C#", "Windows Forms" ]
    },
    {
        "title" : "Portfolio - josearmandosilva.github.io",
        "slug" : "josearmandosilva.github.io",
        "background_url" : portfolio_logo,
        "description" : "Finally my own portfolio, which I did to easily showcase my projects and other relevant information.",
        "technologies": [ "Gatsby", "React.js", "HTML", "CSS"]
    },
];

const ProjectsPage = () => {
  return (
    <>
        <div className="h-[200vh] w-[100vw] max-h-[200vh] overflow-hidden absolute top-0 left-0">
            <svg className="top-[-20%] md:top-[-60%] right-[35%] light-effect absolute" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.77"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="56" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="276" ry="227.5" cx="395.7225862672815" cy="409.3879204395554" fill="hsla(226, 100%, 57%, 1.00)"></ellipse></g>
            </svg>
        </div>
        <Navbar />
        <main className="flex flex-col lg:flex-row justify-center">
            <div className="basis-1/2 sticky top-0 h-screen">
                <div className="pt-12 p-48">
                    <span className="text-[#2256FF] text-8xl leading-[7rem] font-bold">Projects</span>
                    <p className="text-base mt-10 mb-2">Here is a list of projects* that I did while freelancing, as a co-founder or at university. Feel free to ask anything.</p>
                    <span className="text-xs text-slate-500">*Every project displayed here had the stakeholders authorization</span>
                </div>
            </div>
            <div className="basis-1/2 pl-0 p-12 pt-12">
                {projects.map(project => <ProjectCard project={project}></ProjectCard>)}
            </div>
        </main>
    </>
  )
}

export default ProjectsPage
