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
        "technologies" : ["Laravel", "React.js", "AWS"]
    },
    {
        "title" : "INESS",
        "slug" : "iness_xddashboard",
        "background_url" : iness_logo,
        "technologies" : []
    },
    {
        "title" : "Cashinov",
        "slug" : "cashinov",
        "background_url" : cashinov_logo

    },
    {
        "title" : "MrPizza",
        "slug" : "mrpizza",
        "background_url" : mrpizza_logo,
        "description" : "IOS and Android Applications as well as an administrative backoffice. This application allow customers to register their puchases through a QR Code in certain MrPizza stores like a fidelity card which can be exchanged with free pizzas after a certain ammount registered. We can see the available pizzas on the menu and stores.",
        "technologies" : ["Flutter", "Android", "IOS", "Node.js", "React MUI"]
    },
    {
        "title" : "Cbpower House - Co-Founder",
        "slug": "cbpowerhouse", 
        "background_url" : cbpowerhouse_logo,
        "technologies" : []
    },
    {
        "title" : "HS Móveis - Website",
        "slug" : "hsmoveis",
        "background_url" : hsmoveis_website_logo

    },
    {
        "title" : "HS Móveis - Management",
        "slug" : "hsmoveis",
        "background_url" : hsmoveis_management_logo

    },
    {
        "title" : "Invoicing softwares integration with Payment Machines (Glory, Cashlogy, Cashkeeper)",
        "slug" : "payment_systems_software_integrations",
        "background_url" : integrations_logo,
        "description": "",
        "technologies" : []
    },
    {
        "title" : "Villa109",
        "slug" : "villa109",
        "background_url" : villa109_logo,
        "description" : "",
        "technologies" : []
    },
    {
        "title" : "Terafone",
        "slug" : "terafone",
        "background_url" : terafone_logo

    },
    {
        "title" : "Portfolio - josearmandosilva.github.io",
        "slug" : "josearmandosilva.github.io",
        "background_url" : portfolio_logo

    },
    {
        "title" : "CSM Lan Party",
        "slug" : "csm_lan_party",
        "background_url" : csmlanparty_logo,
        "technologies" : []
    },
    {
        "title" : "Chip8 - Emulator",
        "slug" : "chip8",
        "background_url" : chip8_logo,
        "description" : "",
        "technologies" : []
    },
    {
        "title" : "Recommender System - Parallel and Distributed Computing",
        "slug" : "recommender_system",
        "background_url" : "",
        "description" : "A recomendation system like Spotify's songs or Amazons' product recomendation systems that uses matrixes of previous activity and associate with similar user profiles. Because this types of solutions require a complex computing, we were asked to develop a solution in a sequential format, a parallel format with OpenMP and a distributed format with MPI that ran in a cluster.",
        "technologies" : ["C", "OpenMP", "MPI"]
    },
    {
        "title" : "Matfact",
        "slug" : "Matfact",
        "background_url" : ""
    },
    {
        "title" : "Dida GIGA Store",
        "slug" : "Dida GIGA Store",
        "background_url" : ""
    },
    {
        "title" : "Sec public announcement",
        "slug" : "dpas",
        "background_url" : "",
        "description" : "Distributed Public Announcement System (messaging system) is a project to ensure the security triad between announcements. It is resilient against Replay attacks (Freshness), Tampering (Integrity and Authentication), and Forging (Confidentiality). In the second phase of the project, Byzantine Failures were introduced, and a fail-silent distributed system model was employed to ensure system availability. Three algorithms from the book 'Introduction to Reliable and Secure Distributed Programming' were implemented:-Private Rooms: Byzantine One Writer N Readers Atomic Register Algorithm\n-General Rooms: Authenticated-Data Byzantine Quorum\n-Clients: Authenticated Double Echo Broadcast Algorithm",
        "technologies" : [ "C#", "Sockets", "Locks" ]
    },
    {
        "title" : "Sudoku@Cloud",
        "slug" : "sudoku_cloud",
        "background_url" : "",
        "description" : "Sudoku@Cloud is a cloud deployment which enables solving Sudoku puzzles on-demand. It incorporates multiple workers for computational tasks, a load balancer to distribute workloads, and an auto-scaler component to dynamically scale the cluster. An instrumentation tool is utilized to efficiently gather performance metrics, which inform both the load balancer and auto-scaler.",
        "technologies" : [ "Java", "AWS" ]
    },
    {
        "title" : "FoodIST",
        "slug" : "FoodIST",
        "background_url" : ""
    },
    {
        "title" : "Software Security Static Analysis",
        "slug" : "software_security_static_analysis",
        "background_url" : ""
    },
    {
        "title" : "ALCProject",
        "slug" : "ALCProject",
        "background_url" : ""
    },
    {
        "title" : "Shutdown Timer",
        "slug" : "shutdown_timer",
        "background_url" : shutdowntimer_logo,
    }
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
