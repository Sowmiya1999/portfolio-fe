// import {resume} from '../assets/resume.pdf';

import { Briefcase, Code, User } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Full Stack Developer</h3>
                        <p className="text-muted-foreground">
                            {" "}
                            I am a backend-focused full-stack developer with 2.5 years of
                            full-time experience, primarily working with Node.js, NestJS,
                            TypeScript, JavaScript, REST APIs and GraphQL.{" "}
                        </p>

                        <p className="text-muted-foreground">
                            I have contributed to building scalable APIs, managing
                            MongoDB/MySQL databases, and collaborating in cross-functional
                            teams. Occasionally, I’ve worked on Flutter for bug fixes and
                            minor feature development. I’m currently upskilling in React.js
                            and Tailwind CSS to strengthen my frontend capabilities and become
                            a more versatile full-stack engineer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            {""}

                            <a
                                href="./resume/resume.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p>
                                        Creating responsive websites and web application with modern
                                        frameworks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p>
                                        Leading projects from comception to completion with agile
                                        methodologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
