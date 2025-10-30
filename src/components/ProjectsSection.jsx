import { ArrowRightCircleIcon, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "A personal portfolio website to showcase my skills and projects using React and Tailwind CSS.",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Nest.js"],
        demoUrl:"http://localhost:5173/",
        githubUrl: "https://github.com/Sowmiya1999/portfolio-fe/"
    },
        {
        id: 2,
        title: "Track Wallet",
        description: "A personal finance tracking app to manage expenses and income, built with React and Node.js.",
        image: "/projects/trackWallet.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
        demoUrl:"#",
        githubUrl: "#"
    },
        {
        id: 3,
        title: "Team Axis",
        description: "A collaborative project management tool to streamline team workflows and communication.",
        image: "/projects/teamAxis.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
        demoUrl:"#",
        githubUrl: "#"
    }

]

export function ProjectsSection() {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured<span className="text-primary"> Projects</span> 
         </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Here are some of my recent projects that showcase my skills in web development and design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project)=>(
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs border-b border-b-purple-400 card-hover">
                        <div  className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6 border border-t-2 ">
                            <div className="flex flex-wrap gap-2 mb-4 ">
                                {project.tags.map((tag,index)=>(
                                    <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border-2 border-solid border border-purple-300 text-glow" >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                    
                        <h3 className="mb-3 mt-3 items-center text-l md:text-2xl font-semibold">{project.title}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3 mb-1 ">
                                    <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                    <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                        </div>
                            </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Sowmiya1999/" target="_blank">
                    <span>Check My Github </span>  <ArrowRightCircleIcon size={16} className=""/>
                </a>
            </div>
        </div>

    </section>
    
}