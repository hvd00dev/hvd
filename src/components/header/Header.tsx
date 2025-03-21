import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const anchorClass =
    "text-white text-sm sm:text-base font-semibold sm:font-bold hover:scale-[1.02] hover:transition-all hover:duration-200 cursor-pointer";

  const contactClass =
    "flex items-center justify-center w-8 h-8 max-lg:w-9 max-lg:h-9 text-white text-lg font-bold p-2 rounded-full border border-orange hover:cursor-pointer hover:scale-[1.03] hover:transition-transform hover:duration-100";

  return (
    <header className="w-full flex items-center justify-between">
      <Image src="/logo.png" alt="HVD logo" width={60} height={20} />
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <a className={anchorClass} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              About
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              Projects
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <a className={contactClass}>
          {" "}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className={contactClass}>
          {" "}
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className={contactClass}>
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </header>
  );
}
