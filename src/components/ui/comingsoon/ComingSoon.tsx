"use client";

import {
  faEnvelope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ComingSoon() {
  return (
    <div className="mt-[40px] min-h-screen w-full flex flex-col gap-4 items-center justify-center text-center px-6 text-white">
      <FontAwesomeIcon
        icon={faScrewdriverWrench}
        className="text-orange-500 text-[40px] md:text-[50px]"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
        Coming Soon
      </h1>

      <p className="text-[16px] md:text-[18px] max-w-md text-gray-300">
        We're working hard to finish the development of this page. Stay tuned
        for something amazing!
      </p>

      <div className="mt-8 text-sm text-gray-500">
        <FontAwesomeIcon icon={faEnvelope} /> hvd00dev@gmail.com
      </div>

      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,995.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        <path d="M570 8585 l0 -1315 -245 0 -245 0 0 -970 0 -970 245 0 245 0 0 -2645 0 -2645 975 0 975 0 0 2645 0 2645 920 0 920 0 0 -2645 0 -2645 970 0 970 0 0 3615 0 3615 -1890 0 -1890 0 0 1315 0 1315 -975 0 -975 0 0 -1315z" />
        <path d="M17220 8585 l0 -1315 -1895 0 -1895 0 0 -3615 0 -3615 3110 0 3110 0 0 975 0 975 -245 0 -245 0 0 3955 0 3955 -970 0 -970 0 0 -1315z m0 -4925 l0 -1670 -920 0 -920 0 0 1670 0 1670 920 0 920 0 0 -1670z" />
        <path d="M6990 5336 l0 -1934 997 -1681 998 -1681 881 0 881 0 991 1677 992 1677 0 1938 0 1938 -970 0 -970 0 0 -1669 0 -1670 -457 -775 c-252 -426 -462 -774 -468 -772 -5 1 -216 348 -467 771 l-458 768 0 1673 0 1674 -975 0 -975 0 0 -1934z" />
      </g>
    </div>
  );
}
