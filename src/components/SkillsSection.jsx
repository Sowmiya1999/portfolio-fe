import { useState } from "react"
import { cn } from "../lib/utils";

const skills=[
    {name:"nodejs", level:70, category: "BackEnd"},
    {name:"nestjs", level:75, category: "BackEnd"},
    {name:"GraphQL", level:75, category: "BackEnd"},
    {name:"REST", level:45, category:"BackEnd"},

    {name:"JavaScript", level:70, category: "Language"},
    {name:"TypeScript", level:70, category: "Language"},

    {name:"SQL", level:70, category: "DataBase"},
    {name:"MongoDB", level:70, category: "DataBase"},

    {name:"flutter", level:30, category: "FrontEnd"},
    {name:"Dart", level:30, category: "FrontEnd"},
    {name:"ReactJs", level:30, category: "FrontEnd"},
    {name:"Tailwind CSS", level:30, category: "FrontEnd"},

    {name:"Git/Github", level:60, category: "Tools"},
    {name:"VS Code", level:80, category: "Tools"},


]
const categories = ["All", "FrontEnd", "BackEnd","Language","DataBase", "Tools"];

export function SkillsSection(){
    const [activeCategory, setActiveCategory] = useState("All")
    const filteredSkills = skills.filter((skill)=> activeCategory==="All" || skill.category === activeCategory)

    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index)=>(
                <button onClick={()=>setActiveCategory(category)} key={index} 
                className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" :"bg-secondary/70 text-foreground hover:bg-secondary/20"
                    )}>
                    {category}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill,index)=>(
                <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-forground">{skill.level}%</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>)
}