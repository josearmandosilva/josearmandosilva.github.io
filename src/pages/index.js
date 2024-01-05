import * as React from "react"
import Lottie from "lottie-react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import developerAnimation from "../json/developerAnimation.json";
import RoundedSmallButton from "../components/RoundedSmallButton";
import Navbar from "../components/Navbar";
import { navigate } from "gatsby";

const IndexPage = () => {
  return (
    <>
    
      {/* <svg className="light-effect absolute" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 450" opacity="0.82"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
	      <feGaussianBlur stdDeviation="68" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="277.5" ry="277.5" cx="691.1644952947444" cy="72.3449415727095" fill="#2256ff"></ellipse></g>
      </svg> */}
      <div className="h-[100vh] w-[100vw] max-h-[100vh] overflow-hidden absolute top-0 left-0">
        <svg className="top-[-20%] md:top-[-60%] right-[-35%] light-effect absolute" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.77"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="56" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="276" ry="227.5" cx="395.7225862672815" cy="409.3879204395554" fill="hsla(226, 100%, 57%, 1.00)"></ellipse></g>
        </svg>
      </div>
      <Navbar />
      <main className="min-h-[calc(100vh-81px)] relative flex flex-col lg:flex-row items-center justify-center">
        <div className="flex basis-1/2">
          <div className="m-auto p-20">
            <div className="text-[28px]">Olá! Sou </div>
            <div className="text-8xl leading-[7rem] font-bold">José <br /> Armando</div>
            <div className="text-base">Um apaixonado <span className="text-[#2256FF] font-bold">Engenheiro de Software <br />& Entusiasta de Segurança</span>.</div>
            <div className="flex mt-5 text-[2rem] gap-4">
                <a href="https://github.com/josearmandosilva"><FaGithub className="hover:fill-[#2256FF] transition-colors"/></a>
                <a href="https://www.linkedin.com/in/jose-armando-silva/"><FaLinkedinIn className="hover:fill-[#2256FF] transition-colors"/></a>
            </div>
            <div className="mt-10">
                <RoundedSmallButton onClick={() => navigate("/projects")} type="primary">PROJETOS</RoundedSmallButton>
                <RoundedSmallButton type="secondary">CONTACTOS</RoundedSmallButton>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
            <Lottie className="w-[500px] m-auto" animationData={developerAnimation} />
            {/* <img src="img/profile.png" alt="Foto de perfil" /> */}
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
