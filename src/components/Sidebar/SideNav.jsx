import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideNav } from "../../utils/sideNav";
import { faChevronDown } from "@fortawesome/pro-light-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";

export default function SideNav() {
  const { pathname } = useLocation();
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <div className="mt-4 border-t pt-4">
      <ul className="mt-2 text-gray-600">
        {sideNav &&
          sideNav.length > 0 &&
          _.map(sideNav, (sideNavItem) => (
            <li
              className={`mb-4 px-6 py-2 ${
                pathname === sideNavItem.path &&
                "shadow bg-gray-200 dark:bg-gray-800 rounded-lg"
              }`}
              key={sideNavItem.id}
            >
              {/*  */}
              <Link
                className={`flex items-center ${
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
