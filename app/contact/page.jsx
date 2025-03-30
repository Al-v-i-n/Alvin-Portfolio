"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91)-7994830736"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "alvinjb13@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Njavarakkattu (h) Kozhippilly P.O Kothamangalam,Ernakulam,Kerala,India"
    }
];

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Recipient email
        const recipientEmail = "alvinjb13@gmail.com";
        
        // Email subject with selected service
        const subject = `Service Request: ${service}`;
        
        // Email body with message and contact info
        const body = `${message}
        
        Regards,
        ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}`;
        
        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open Gmail in a new tab
        window.open(gmailUrl, '_blank');
    };

    return (
        <motion.section 
            initial={{opacity:0}} 
            animate={{
                opacity:1, 
                transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="pt-2 pb-4"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-6">
                    {/*form */}
                    <div className="flex-1 order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60 text-sm">Ready to turn your ideas into reality? Let's collaborate on your next project.</p>
                            {/*input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    type="text" 
                                    placeholder="FirstName" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <Input 
                                    type="text" 
                                    placeholder="LastName" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                                <Input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            {/*select */}
                            <Select onValueChange={setService} required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Machine Learning">UI/UX Design</SelectItem>
                                        <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/*text area */}
                            <Textarea 
                                className="h-[140px]" 
                                placeholder="Type your Message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            {/*button */}
                            <div className="flex justify-end">
                                <Button type="submit" size="md" className="max-w-40">Send</Button>
                            </div>
                        </form>
                    </div>
                    {/*info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
                        <ul className="flex flex-col gap-8">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-2xl">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-sm xl:text-base">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;