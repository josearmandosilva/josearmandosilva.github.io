import { navigate } from "gatsby";
import * as React from "react"
import RoundedSmallButton from "./RoundedSmallButton";

function ProjectCard({ project }) {
    return <div key={project.slug} className="p-12 rounded-md mb-3  hover:bg-black/30">
            <figure className="grid gap-4 grid-cols-8 relative">
                {project.background_url? <img className="col-span-2 rounded-md" src={project.background_url.replace("/josearmandosilva.github.io", "")}></img>:
                <div className="col-span-2"></div>}
                <figcaption className="col-span-6">
                    <a className="text-xl inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#2256FF] focus-visible:text-[#2256FF] group/link" href="/projects">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        {project.title}
                    </a>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                        { project.description }
                    </p>
                    { project.technologies ? <div className="flex flex-row flex-wrap mt-2">
                        { project.technologies.map(technology => 
                            <span class="mb-2 bg-blue-100 text-[#2256FF] text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-black dark:text-[#2256FF] border border-[#2256FF]">{ technology }</span>
                        )}
                    </div> : null }
                    {/* <RoundedSmallButton className="mt-5" onClick={() => navigate("/projects/"+project.slug)}>Abrir</RoundedSmallButton> */}
                </figcaption>
            </figure>
    </div>;
}

export default ProjectCard;