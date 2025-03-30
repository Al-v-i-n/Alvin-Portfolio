"use client"

import { easeIn, motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {BsArrowUpRight,BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        num:"01",
        category:"Web Development",
        title:"Website Builder",
        description:"A platform enabling users to create and manage websites and funnels with role-based access and multi-vendor support.",
        stack:[{name:"React.js"},{name:"Javascript"},{name:"Tailwind CSS"},{name:"Next.js"},{name:"Prisma"}],
        image: "/assets/work/Homepage.png",
        live:"https://web-build-five-pied.vercel.app/",
        github:""
    },
    {
        num:"02",
        category:"Web Development",
        title:"Task Management System for Developers",
        description:"A web-based platform for efficient task assignment, tracking, and collaboration.",
        stack:[{name:"React.js"},{name:"Java Springboot"},{name:"Mysql"},{name:"Html"},{name:"Javascript"}],
        image: "/assets/work/Dashboard.png",
        live:"",
        github:""
    },
    {
        num:"03",
        category:"Machine Learning",
        title:"Hand Gesture Volume Control",
        description:"A system that adjusts volume using real-time hand gesture recognition with OpenCV and Python.",
        stack:[{name:"Python"},{name:"OpenCV"},{name:"Mediapipe"}],
        image: "/assets/work/minorimg3.jpeg",
        live:"",
        github:""
    }
]


const Work = () =>{
    const [project,setProject] =useState(projects[0]);

    const handleSlideChange =(swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on slide Index
        setProject(projects[currentIndex]);
    };



    return(
        <motion.section 
        initial={{opacity:0}} 
        animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
    
    }} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[15px]">
                            {/*outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                        {/*project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title} project</h2>
                        <span className="flex flex-wrap bg-accent/10 px-3 py-1 rounded-md text-sm justify-center">{project.category}</span>
                        {/*project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/*Stack */}
                        <ul className="flex gap-4 flex-wrap">
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-accent bg-accent/10 px-3 py-1 rounded-md text-sm">
                                        {item.name}
                                    </li>
                                );
                            })}
                        </ul>
                        {/*border */}
                        <div className=" pt-2 border-b border-white/20 "></div>
                        {/*buttons */}
                        <div className="flex items-center gap-4">
                            {/*live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="mt-2 w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/60">
                                            <BsArrowUpRight/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                             {/*github project button */}
                             <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="mt-2 w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/60">
                                            <BsGithub />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project,index)=>{
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group bg-black-50/20">
                                        {/*overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
                                        {/*image */}
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={project.image} 
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority
                                                className="object-contain" 
                                                alt={project.title || "Project screenshot"}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* Slider buttons*/}
                            <div slot="container-end">
                                <WorkSliderBtns
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify"
                                    btnStyles="bg-white/20 hover:bg-accent/50 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300"
                                    iconStyles="text-white text-lg"
                                />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default Work