import Link from "next/link";
import { FaGithub,FaLinkedinIn,FaInstagram,FaWhatsapp } from "react-icons/fa";

const social=[
    {icon:<FaGithub/>,path:'https://github.com/Al-v-i-n'},
    {icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/alvin-siby-a26281257/'},
    {icon:<FaInstagram/>,path:'https://www.instagram.com/alvin_.siby?igsh=ejVtZGhxdnhjd2t3'},
    {icon:<FaWhatsapp/>,path:'https://wa.me/qr/IQZC6IXWVK3QO1'},
]

const Socials = ({containerStyles,iconStyles}) =>{
    return(
        <div className={containerStyles}>
            {social.map((item,index)=>{
                return(<Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
                );
            })}
        </div>
    )
}
export default Socials