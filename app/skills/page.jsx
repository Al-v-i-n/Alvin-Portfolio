"use client";

// Using a mix of icon libraries to ensure availability
import { SiPython, SiC, SiHtml5, SiMysql, SiCss3 } from 'react-icons/si';
import { DiJava, DiDotnet, DiCssdeck } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

const skills = {
    title: "My Skills",
    description:
    "Solving problems with code, shaping ideas into reality.",
    skillList: [
        {
            icon: <SiPython />,
            name: 'Python',
        },
        {
            icon: <SiC />,
            name: 'C Programming',
        },
        {
            icon: <FaCode />,
            name: 'C#',
        },
        {
            icon: <DiDotnet />,
            name: '.NET',
        },
        {
            icon: <SiHtml5 />,
            name: 'HTML5',
        },
        {
            icon: <SiMysql />,
            name: 'MySQL',
        },
        {
            icon: <SiCss3 />,
            name: 'CSS3',
        },
        {
            icon: <DiJava />,
            name: 'Java',
        },
    ]
}

const Skills = () => {
    return (
        <div className="container mx-auto py-12">
            <h3 className="text-3xl font-bold text-center mb-4">{skills.title}</h3>
            <p className="text-center mb-10 max-w-2xl mx-auto italic">{skills.description}</p>
            <div className="max-w-4xl mx-auto">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => (
                        <li key={index} className="flex flex-col items-center p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all">
                            <div className="text-3xl text-accent mb-2">{skill.icon}</div>
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills;