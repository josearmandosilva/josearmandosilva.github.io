import { Link } from "gatsby-link";
import * as React from "react"
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const links = [
    {
        text: "Inicio",
        to: "/"
    },
    {
        text: "Projetos",
        to: "/projects",
    },
    {
        text: "Contactos",
        to: "/contacts",
    }
];

const navStyles = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)"
};

function Navbar() {

    const [menuVisible, setMenuVisible ] = useState(false);


    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    return (
        <nav class="relative justify-end flex bg-transparent ">
            <div className="flex flex-col w-full text-[30px]">
                <button className="p-5 ml-auto md:hidden mr-5 cursor-pointer text-right" onClick={toggleMenu}>
                    <FaBars className="text-right" />
                </button>
                {menuVisible ? 
                    <div className="md:hidden flex flex-col" style={navStyles}>
                        {links.map(link => <Link activeStyle={{ backgroundColor: "#363639" }} className="min-w-[165px] text-center text-[11px] outline-none py-[15px] rounded-[16px] px-[17px] uppercase" to={link.to}>{link.text}</Link>)}
                    </div> 
                    : null
                }
            </div>
            <div style={navStyles} className="hidden mt-5 mr-5 md:flex">
                {links.map(link => <Link activeStyle={{ backgroundColor: "#363639" }} className="min-w-[165px] text-center text-[11px] outline-none py-[15px] px-[17px] rounded-[16px] uppercase" to={link.to}>{link.text}</Link>)}
            </div>
        </nav>
    );
}

// function Navbar() {
//     return (
//         <nav class="justify-end flex">
//             {links.map(link => <Link activeStyle={{ backgroundColor: "#2256FF" }} className="p-7 uppercase" to={link.to}>{link.text}</Link>)}
//         </nav>
//     );
// }

export default Navbar;