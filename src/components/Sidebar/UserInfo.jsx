import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";

export default function UserInfo() {
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
        alt="enoshima profile"
      />
      {sideNavExpand && (
        <>
          <h2 className="mt-4 text-xl dark:text-gray-300 font-bold capitalize">
            Krishna Chaithanya Maddur
          </h2>
          <span className="text-sm dark:text-gray-300">
            maddur.krishnachaithanya@adp.com
          </span>
        </>
      )}
    </div>
  );
}
