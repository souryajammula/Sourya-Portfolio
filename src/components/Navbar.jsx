import logo from "../assets/souryaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={()=>window.open('https://www.linkedin.com/in/sourya-j/', "_blank")}/>
        <FaGithub  onClick={()=>window.open('https://github.com/souryajammula',"_blank")}/>
        <FaInstagram  onClick={()=>window.open('https://www.instagram.com/souryajammula/',"_blank")}/>
      </div>
    </nav>
  );
};

export default Navbar;