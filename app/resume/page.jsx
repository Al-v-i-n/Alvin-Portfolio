"use client";

//about data

const about = {
    title: 'About Me',
    description:
    "I'm an Engineering Graduate passionate about creating elegant digital experiences. With a strong foundation in both design principles and technical implementation, I bridge the gap between aesthetic appeal and functional excellence.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Alvin Siby"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91)-7994830736"
        },
        {
            fieldName: "Experience",
            fieldValue: "1 Year"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Age",
            fieldValue: "22"
        },
        {
            fieldName: "Email",
            fieldValue: "alvinjb13@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English,Hindi,Malayalam"
        },
    ]
};


//education

const education={
    icon: "/assets/resume/cap.svg",
    title:"My Education",
    items:[
        {
            institution: "Viswajyothi College of Engineering and Technology",
            Course:"Computer Science & Engineering",
            Duration: "2021-2025",
            CGPA: "8.2"
        },
        {
            institution: "St.George's Higher Secondary School",
            Course:"Computer Science",
            Duration: "2019-2021",
            CGPA: "9.8"
        },
        {
            institution: "Martha Mariyam Public School (CBSE)",
            Duration: "2018-2019",
            CGPA: "8.7"
        }
    ]
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () =>{
    return(
        <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity:1,
                transition:{delay:2.4,duration:0.4,ease:'easeIn'}
                    }}
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
            <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>
            {/*content */}
            <div className="min-h-[70vh] w-full">
                {/*education */}
                <TabsContent value="education" className="w-full ">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                    </div>
                    <ScrollArea className="h-[400px] pt-2 ">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item,index)=>{
                                return <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.Duration}</span>
                                    <span className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institution}</span>
                                    <span className=" text-sm text-white/60">{item.Course}</span>
                                    <span>CGPA:{item.CGPA}</span>
                                </li>
                            })}
                        </ul>
                    </ScrollArea>
                </TabsContent>
                {/*About */}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item,index)=>{
                                    return (<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}:</span>
                                        <span className="text-md">{item.fieldValue}</span>
                                    </li>
                                )}
                                )}
                            </ul>
                    </div>   
                </TabsContent>
            </div>
            </Tabs>
            </div>
        </motion.div>
    )
}
export default Resume