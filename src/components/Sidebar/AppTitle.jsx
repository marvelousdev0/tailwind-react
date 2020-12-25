import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";

export default function AppTitle() {
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <div
      className={`flex items-center justify-between flex-wrap ${
        sideNavExpand ? "p-6" : "px-2 py-6"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <span className="text-xl font-semibold uppercase dark:text-gray-300">
          wmus
        </span>

        {sideNavExpand && (
          <span className="relative px-3 py-1 bg-red-100 rounded-lg">
            <span className="text-xs font-normal text-red-500">1.0</span>
          </span>
        )}
      </div>
    </div>
  );
}
