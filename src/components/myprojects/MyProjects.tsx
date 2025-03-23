import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaxWidth from "../maxwidth/maxwidth";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function MyProjects() {
  return (
    <MaxWidth>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[22px]">
          <span className="text-orange-500">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h3 className="font-bold">Latest projects</h3>
        </div>
        <div className="flex items-center justify-center gap-2 h-[600px] bg-[#000] rounded-xl">
          <span className="text-[#474747]">under development</span>
        </div>
      </div>
    </MaxWidth>
  );
}
