import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaxWidth from "../maxwidth/maxwidth";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function About() {
  return (
    <MaxWidth>
      <section>
        <div className="md:flex-row flex flex-col gap-4 justify-center items-center relative w-full md:h-[400px] h-[500px] ">
          <Image
            src="/images/about-background.webp"
            width={1920}
            height={580}
            alt="Geometric futuristic background"
            className="absolute z-[-1]"
            />
          <div className="w-[260px] h-[260px] rounded-full overflow-hidden border-4 p-2 border-orange-500 flex items-center justify-center">
            <Image
            src="/images/hvd-real.jpg"
            width={1600}
            height={1600}
            alt="Hvd is real! An photo of Hudson"
            className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-[22px] font-bold flex items-center gap-2">
              <b className="text-orange-500 ">
                <FontAwesomeIcon icon={faCertificate} />
              </b>{" "}
              About me
            </h3>
            <p className="md:text-left text-center text-xl max-w-[500px]">
              <b>Front-end developer</b>, based in Rio de Janeiro, Brazil. With
              over 2 years of experience, contributing to <b>agile teams</b> and
              helping deliver <b>high-value solutions</b> with a focus on
              quality, acessibility and performance.
            </p>
          </div>
        </div>
      </section>
    </MaxWidth>
  );
}
