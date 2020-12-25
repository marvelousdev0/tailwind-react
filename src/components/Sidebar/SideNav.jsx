import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideNav } from "../../utils/sideNav";
import { faChevronDown } from "@fortawesome/pro-light-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";

export default function SideNav() {
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <div className="mt-4 border-t pt-4">
      <ul className="mt-2 text-gray-600">
        {sideNav &&
          sideNav.length > 0 &&
          _.map(sideNav, (sideNavItem) => (
            <li className="mb-6" key={sideNavItem.id}>
              {/* shadow py-2 bg-white dark:bg-gray-200 rounded-lg-ml-4 */}
              <Link
                className={`flex align-center ${
                  sideNavExpand ? "justify-between" : "justify-center"
                }`}
                to={sideNavItem.path}
              >
                <div>
                  <FontAwesomeIcon
                    icon={sideNavItem.icon}
                    className="text-xl mr-2"
                  />
                  {sideNavExpand && (
                    <span
                      className="ml-2 capitalize font-medium text-black
                        dark:text-gray-300"
                    >
                      {sideNavItem.label}
                    </span>
                  )}
                </div>
                {sideNavItem.children && sideNavItem.children.length > 0 && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-md ml-2"
                  />
                )}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
