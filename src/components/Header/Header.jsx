import { useSelector, useDispatch } from "react-redux";
import { faArrowToLeft, faChevronDown } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ukSvg from "../../assets/icons/uk.svg";
import { getSideNavExpand } from "../../selectors/settings";
import { setSideNavExpand } from "../../store/global/settings";

export default function Header() {
  const dispatch = useDispatch();
  const btnRef = useRef(null);
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [btnRef]);

  function handleButtonClick() {
    setOpen((open) => !open);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap px-6 py-4 bg-white">
      <div
        className="rounded-full hover:bg-gray-100 focus:bg-gray-100 h-10 w-10 flex items-center justify-center cursor-pointer"
        onClick={() => dispatch(setSideNavExpand(!sideNavExpand))}
      >
        <FontAwesomeIcon icon={faArrowToLeft} className="text-lg" />
      </div>
      <div
        className="flex items-center relative py-1 px-3"
        ref={btnRef}
        onClick={handleButtonClick}
      >
        <img className="h-5 w-5 mr-2" src={ukSvg} alt="flag" />{" "}
        <span className="mr-2">English</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transform ${open ? "rotate-180" : "rotate-0"}`}
        />{" "}
      </div>

      {open && (
        <menu
          className="absolute top-12 bg-white rounded-md shadow-md min-w-min p-0 float-left"
          style={{ minWidth: 132 }}
        >
          <span className="flex items-center py-2 px-4">
            <img className="h-5 w-5 mr-2" src={ukSvg} alt="flag" /> English
          </span>
          <span className="flex items-center py-2 px-4">
            <img className="h-5 w-5 mr-2" src={ukSvg} alt="flag" /> English
          </span>
        </menu>
      )}
    </nav>
  );
}
