"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[853],{8161:function(e,t,a){var o=a(1562),n=a(7294),i=a(9583);const s=[{text:"Home",to:"/"},{text:"Experience",to:"/experience"},{text:"Projects",to:"/projects"},{text:"Contacts",to:"/contacts"}],r={background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)"};t.Z=function(){const{0:e,1:t}=(0,n.useState)(!1);return n.createElement("nav",{className:"relative justify-end flex bg-transparent "},n.createElement("div",{className:"flex flex-col w-full text-[30px]"},n.createElement("button",{className:"p-5 ml-auto md:hidden mr-5 cursor-pointer text-right",onClick:function(){t(!e)}},n.createElement(i.Fm7,{className:"text-right"})),e?n.createElement("div",{className:"md:hidden flex flex-col",style:r},s.map((e=>n.createElement(o.rU,{key:e.to,activeStyle:{backgroundColor:"#363639"},className:"min-w-[165px] text-center text-[11px] outline-none py-[15px] rounded-[16px] px-[17px] uppercase",to:e.to},e.text)))):null),n.createElement("div",{style:r,className:"hidden mt-5 mr-5 md:flex"},s.map((e=>n.createElement(o.rU,{key:e.to,activeStyle:{backgroundColor:"#363639"},className:"min-w-[165px] text-center text-[11px] outline-none py-[15px] px-[17px] rounded-[16px] uppercase",to:e.to},e.text)))))}},9208:function(e,t,a){var o=a(7294);t.Z=function(e){let{onClick:t=(()=>{}),type:a="primary",children:n,className:i=""}=e,s="secondary"==a?"border border-white bg-[transparent] color-white":"bg-[#2256FF] color-white";return o.createElement("button",{onClick:t,className:i+" "+s+" text-[11px] min-w-[165px] mr-[18px] outline-none py-[15px] px-[17px] rounded-full"},n)}},9876:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var o=a(7294),n=a(8161),i=a.p+"static/background-962ff2d7d6a0c7ea791e8144a757d623.png",s=a.p+"static/background-f24322d28cb6bbb70b1ff84554c1de08.png",r=a.p+"static/background-7098980f09fb6e1503d3215cf6f48af2.jpg",l=a.p+"static/background-34b9c294ebe2968256c367d8d56fa5c6.jpeg",c=a.p+"static/background-9c1d7a8d0b449ce1e8f553441d620138.png",d=a.p+"static/background-7f5bb0457a3e1d19ca6fc7f8b5ee9d5b.png",u=a.p+"static/background-85f88670428f607057c7a72656043bd8.png",m=a.p+"static/background-043661255254157dafa84160c89a2be4.png",p=a.p+"static/background-2e82cf23ac35f76be2e07b661769e879.png",h=a.p+"static/background-04f4808bc55043146af3ae53489e063a.png",g=a.p+"static/background-d5edf6da7d961e4952949a514623df6c.png",f=a.p+"static/background-4079111ebc5eab511c470bf761f7f541.png",b=a.p+"static/background-1621d4787bc23d8e0db1942018ec1273.png",y=a.p+"static/background-1b4989c00ed6b7d90f363b94f1128b34.png";a(1883),a(9208);var w=function(e){let{project:t}=e;return o.createElement("div",{key:t.slug,className:"p-12 rounded-md mb-3  hover:bg-black/30"},o.createElement("figure",{className:"grid gap-4 grid-cols-8 relative"},t.background_url?o.createElement("img",{className:"col-span-2 rounded-md",src:t.background_url}):o.createElement("div",{className:"col-span-2"}),o.createElement("figcaption",{className:"col-span-6"},o.createElement("a",{className:"text-xl inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#2256FF] focus-visible:text-[#2256FF] group/link",href:"/projects"},o.createElement("span",{className:"absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"}),t.title),o.createElement("p",{class:"mt-2 text-sm leading-normal text-slate-500"},t.description),t.technologies?o.createElement("div",{className:"flex flex-row flex-wrap mt-2"},t.technologies.map((e=>o.createElement("span",{class:"mb-2 bg-blue-100 text-[#2256FF] text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-black dark:text-[#2256FF] border border-[#2256FF]"},e)))):null)))};const v=[{title:"Ready2Guests - Co-Founder",slug:"ready2guests",background_url:i,description:"An online platform that allows hosts to list their properties and connect them with multiple Online Travel Agencies like Booking.com and AirBNB. Hosts can also be represented by concierges who handle all the reservations, cleaning, and expenses for them, making it a breeze to host a property.",technologies:["Laravel","PHP","AWS","MySQL","CSS","HTML5"]},{title:"Cbpower House - Co-Founder",slug:"cbpowerhouse",background_url:s,description:"An online platform that allows the users in cbpower ecosystem to list their properties to sell or rent with multiple benefits and connect them with multiple Real estate platforms like Idealista and Imovirtual. The platform is also prepared to be used by the cbpower legal team to generate all the documents and contracts that are necessary for the Portuguese reality to complete the transactions with the customers.",technologies:["PHP","Codeigniter","MySQL","CSS","HTML5","jQuery"]},{title:"INESS - Allureinov",slug:"iness_xddashboard",background_url:b,description:"A web application to interact with XD Software for the retail market which can be accessible anytime anywhere, unlike the software itself which is a Windows Application. This is possible through an integration server that acts as a bridge between the XD software and the web application, through a VPN.",technologies:["React.js","Tailwind Css","Node.js","Express.js","MySQL","CSS","HTML5"]},{title:"Cashinov - Allureinov",slug:"cashinov",background_url:r,description:"A graphical software used by stores to interact with the Cashkeeper automatic payment machine. It includes a login and permission system for employees, facilitates payment processing to receive funds from customers, allows the addition or withdrawal of funds from the machine, provides real-time monitoring of money levels by denomination in both the safe and the cashbox. Additionally, it incorporates a day-closing functionality that calculates and preserves the working capital required for the next day. Any surplus funds are automatically transferred to the safe, ensuring that employees don't ever need to handle money.",technologies:["C#","Node.js","Express.js","Sockets","SQLite","Windows Forms"]},{title:"MrPizza Application",slug:"mrpizza",background_url:l,description:"IOS and Android Applications as well as an administrative backoffice. This application allow customers to register their puchases through a QR Code in certain MrPizza stores like a fidelity card which can be exchanged with free pizzas after a certain ammount registered. We can see the available pizzas on the menu and stores.",technologies:["Flutter","Android","IOS","Node.js","React MUI","CSS","HTML5"]},{title:"Invoicing softwares integration with Payment Machines (Glory, Cashlogy, Cashkeeper)",slug:"payment_systems_software_integrations",background_url:f,description:"Development of integrations between management software solutions and automatic payment machines, each with different approaches in terms of communication. Some were done via pure sockets, others with COM Objects, and some with an already developed DLL. The objective is for this software to support these payment machines when the payment is in cash, ensuring that employees don't have to handle cash directly.",technologies:["C#","Sockets","DLL","SQLite","COM Objects"]},{title:"Terafone",slug:"terafone",background_url:h,description:"Company focused on brokering telecommunication packages in Portugal. In this project, features were added to the portal, including automatic email notifications, statistics, operator and package management, sales management, complaint management, and lead acquisition.",technologies:["JavaEE","Java","JSF","MySQL","CSS","HTML5"]},{title:"HS Móveis - Management",slug:"hsmoveis",background_url:d,description:"A web application back office that serves as a CRM and Invoice Management system. It enables employees to handle client management and automatically generate invoices with specified products. These invoices can be printed or sent via email, all formatted using the company's templates",technologies:["React.js","Node.js","MySQL","HTML5","CSS"]},{title:"CSM Lan Party",slug:"csm_lan_party",background_url:c,description:"In my high school project, I independently learned Laravel and websockets. It was my final project, earning a perfect grade of 20 out of 20. In 2016, I took charge of the school's Lan Party website, turning it into my final project due to its complexity and time requirements. The website featured dynamic information about the event, including participating teams, tournament registration, FAQs, and more. It included a back office resembling a CRM, allowing us to print user card information for the lan day, and online check-in through a QRCode on participants' phones. One could also manage various aspects of the event, such as teams, games, tournaments, FAQs, images, sponsors, etc. We even integrated with eBot for CSGO, automating the display of the server connection string once the servers were up and the teams had chosen their map.",technologies:["Laravel","PHP","websockets","HTML","CSS","jQuery","ebot"]},{title:"Chip8 - Emulator",slug:"chip8",background_url:y,description:"A spare time project involving a Chip8 Emulator that enables the playing of old games through ROMs available on the internet. I undertook this project during my college years to deepen my understanding of emulators. I extensively read online documentation and decided to get hands-on. My primary goal was to create a web interface that could be comprehensible to non-IT individuals, allowing them to understand the inner workings of all the elements required to run a program and observe real-time changes in memory and registers. However, I ultimately focused solely on programming the emulator and make it playable. I did end up not working on the project anymore due prioritization.",technologies:["Chip8","Emulators","Typescript","React.js","HTML","CSS"]},{title:"Master thesis",slug:"thesis",description:"My thesis consists of the research and development of middleware for multiple well-known frameworks to help protect against Cross-Site Leaks using 'fetchmetadata' headers. Cross-Site Leaks, abbreviated as XSLeaks, constitute a class of attacks that has existed since the year 2000 and has been emerging recently. This is an interesting type of attack because it is primarily based on covert/side channels to gather cross-site information from a malicious web page.",technologies:["Laravel","Flask","Django","Express.js","Fetchmetadata","XS-Leaks"]},{title:"Recommender System - Parallel and Distributed Computing",slug:"recommender_system",background_url:"",description:"A recommender system, similar to Spotify's song recommendations or Amazon's product recommendation systems, utilizes matrices of previous user activity and associates them with similar user profiles. Due to the complexity of these solutions, we were tasked with developing a solution in sequential format, parallel format using OpenMP, and distributed format with MPI, designed to run on a cluster.",technologies:["C","OpenMP","MPI"]},{title:"Dida GIGA-STORE - Mobile and Ubiquitous Computing",slug:"Dida GIGA Store",background_url:"",description:"A distributed key-value store solution that supports partial replication like in data centers. A basic version, which guarantees a strong consistency model, linearizability. And an advanced version, targeting the high latency problems, that assures a higher availability with a weaker consistency model, causal and eventual consistency by using a series of locks, synchronization phases and snapshots. The use cases of this solution are a Session Store, Message Broker, Cloud Database or even a Cache.",technologies:["C#","Sockets"]},{title:"DPAS - High-Reliability Systems",slug:"dpas",background_url:"",description:"Distributed Public Announcement System (messaging system) is a project to ensure the security triad between announcements. It is resilient against Replay attacks (Freshness), Tampering (Integrity and Authentication), and Forging (Confidentiality). In the second phase of the project, Byzantine Failures were introduced, and a fail-silent distributed system model was employed to ensure system availability. Three algorithms from the book 'Introduction to Reliable and Secure Distributed Programming' were implemented:-Private Rooms: Byzantine One Writer N Readers Atomic Register Algorithm\n-General Rooms: Authenticated-Data Byzantine Quorum\n-Clients: Authenticated Double Echo Broadcast Algorithm",technologies:["C#","Sockets","Locks"]},{title:"Sudoku@Cloud - Cloud Computing and Virtualization",slug:"sudoku_cloud",background_url:"",description:"Sudoku@Cloud is a cloud deployment which enables solving Sudoku puzzles on-demand. It incorporates multiple workers for computational tasks, a load balancer to distribute workloads, and an auto-scaler component to dynamically scale the cluster. An instrumentation tool is utilized to efficiently gather performance metrics, which inform both the load balancer and auto-scaler.",technologies:["Java","AWS"]},{title:"FoodIST - Mobile and Ubiquitous Computing",slug:"foodist",background_url:"",description:"An Android app and a server that provides information about food services at Instituto Superior Técnico. The solution utilizes Bluetooth beacons and Wi-Fi Direct for a peer-to-peer wireless connection to determine queue lengths in canteens or bars. Additionally, it displays information about dishes, the opening hours of the user's preferred campus, and includes a rating system for each food service.",technologies:["Android","Java","Spring Boot","Bluetooth Beacons","Wifi-Direct"]},{title:"Villa109",slug:"villa109",background_url:p,description:"Informative website for an architecture firm based in France and Portugal. This website showcases their portfolio, delve into their innovative construction method—L.S.F. Light Steel Frame, and it also displays a catalog with the prices of completed properties.",technologies:["Wordpress"]},{title:"HS Móveis - Website",slug:"hsmoveis",background_url:u,description:"Informative website for HSMóveis, a Portugal-based company specializing in custom furniture production. The site prominently showcases their portfolio, details about the company, and contact information.",technologies:["Wordpress"]},{title:"Shutdown Timer",slug:"shutdown_timer",background_url:m,description:"A Windows application that I created because, in the old days, the internet was slower. Therefore, when downloading large files that would continue until the middle of the night, I would set up this program to shut down at a specific time so the computer wasn't on unnecessarily. The program can shutdown at a particular day-time, at a particular time during the current day, or after a specified amount of time in hours, minutes, and seconds.",technologies:["C#","Windows Forms"]},{title:"Portfolio - josearmandosilva.github.io",slug:"josearmandosilva.github.io",background_url:g,description:"Finally my own portfolio, which I did to easily showcase my projects and other relevant information.",technologies:["Gatsby","React.js","HTML","CSS"]}];var k=()=>o.createElement(o.Fragment,null,o.createElement("div",{className:"h-[200vh] w-[100vw] max-h-[200vh] overflow-hidden absolute top-0 left-0"},o.createElement("svg",{className:"top-[-20%] md:top-[-60%] right-[35%] light-effect absolute",xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlnssvgjs:"http://svgjs.dev/svgjs",viewBox:"0 0 800 800",opacity:"0.77"},o.createElement("defs",null,o.createElement("filter",{id:"bbblurry-filter",x:"-100%",y:"-100%",width:"400%",height:"400%",filterUnits:"objectBoundingBox",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feGaussianBlur",{stdDeviation:"56",x:"0%",y:"0%",width:"100%",height:"100%",in:"SourceGraphic",edgeMode:"none",result:"blur"}))),o.createElement("g",{filter:"url(#bbblurry-filter)"},o.createElement("ellipse",{rx:"276",ry:"227.5",cx:"395.7225862672815",cy:"409.3879204395554",fill:"hsla(226, 100%, 57%, 1.00)"})))),o.createElement(n.Z,null),o.createElement("main",{className:"flex flex-col lg:flex-row justify-center"},o.createElement("div",{className:"basis-1/2 sticky top-0 h-screen"},o.createElement("div",{className:"pt-12 p-48"},o.createElement("span",{className:"text-[#2256FF] text-8xl leading-[7rem] font-bold"},"Projects"),o.createElement("p",{className:"text-base mt-10 mb-2"},"Here is a list of projects* that I did while freelancing, as a co-founder or at university. Feel free to ask anything."),o.createElement("span",{className:"text-xs text-slate-500"},"*Every project displayed here had the stakeholders authorization"))),o.createElement("div",{className:"basis-1/2 pl-0 p-12 pt-12"},v.map((e=>o.createElement(w,{project:e}))))))},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var o=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.createContext&&o.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};function l(e){return e&&e.map((function(e,t){return o.createElement(e.tag,s({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return o.createElement(d,s({attr:s({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var a,n=e.attr,i=e.size,l=e.title,c=r(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),o.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return void 0!==i?o.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-377097bf4309b5972ed1.js.map