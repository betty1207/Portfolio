import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/port.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaLayerGroup,
  FaFolderOpen,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about", label: "About", icon: FaUser },
  { href: "/stack", label: "Stack", icon: FaLayerGroup },
  { href: "/projects", label: "Projects", icon: FaFolderOpen },
  { href: "/contact", label: "Contact", icon: FaPhone },
];

const socialLinks = [
  { href: "https://github.com/betty1207", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/betelhem-tsega-a92a4b300/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://t.me/omnia_sugit", icon: <FaTelegramPlane />, label: "Telegram" },
  { href: "mailto:bettygatse8@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  if (active !== location.pathname) setActive(location.pathname);

  return (
    <div className="min-h-screen w-[280px] fixed left-0 top-0">
      <nav className="m-6 rounded-2xl shadow-lg bg-white w-[248px] flex flex-col py-8 px-4 justify-between h-[calc(100vh-48px)]">
        <div>
          <div className="mb-8 text-[16px] font-semibold flex items-center gap-2">
            <img
              src={img}
              alt=""
              className="rounded-full h-14 w-14 object-cover"
            />
            <p className="whitespace-nowrap ml-1 flex flex-col text-center">
              Betelhem Tsega <span className="whitespace-nowrap text-gray-500">Frontend Developer</span>
            </p>
          </div>
          <div className="flex items-center gap-2 mb-6 px-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Available for Projects</span>
          </div>
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setActive(link.href)}
                    className={`group flex items-center px-3 py-2 rounded transition font-medium relative
                      ${
                        isActive
                          ? "text-gray-900 bg-gray-200 font-semibold"
                          : "text-gray-400 hover:text-gray-800 hover:bg-gray-100"
                      }
                    `}
                  >
                    <span className="flex items-center">
                      <Icon
                        className={`mr-2 text-lg transition
                          ${
                            isActive
                              ? "text-gray-900"
                              : "text-gray-400 group-hover:text-gray-800"
                          }
                        `}
                      />
                      <span
                        className={`transition
                          ${
                            isActive
                              ? "font-semibold text-gray-900"
                              : "font-normal text-gray-400 group-hover:text-gray-800 group-hover:font-semibold"
                          }
                        `}
                      >
                        {link.label}
                      </span>
                    </span>
                    <span className="absolute right-4 flex items-center h-full">
                      <span
                        className={`transition-all duration-200 text-lg
                          ${
                            isActive
                              ? "opacity-0 translate-x-2"
                              : "group-hover:opacity-100 group-hover:translate-x-0 opacity-0 translate-x-2"
                          }
                        `}
                      >
                        →
                      </span>
                      <span
                        className={`transition-all duration-200 text-xl ml-1
                          ${
                            isActive
                              ? "opacity-100 scale-100 text-black"
                              : "opacity-0 scale-75"
                          }
                        `}
                      >
                        •
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-col gap-4 items-start px-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gray-800 transition"
                aria-label={social.label}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;