import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";

export default function UserOptions() {
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <div
      className={`mt-4 flex items-center justify-center py-3 ${
        sideNavExpand ? "flex-row" : "flex-col"
      }`}
    >
      <button
        className={`flex items-center ${
          sideNavExpand ? "justify-between" : "justify-center"
        } px-4 py-2 text-white
        dark:text-blue-500 bg-blue-500 dark:bg-blue-200 rounded-md shadow-none ring-0 focus:ring-0 mr-3 mb-1`}
      >
        <svg
          className={`h-4 w-4 fill-current ${sideNavExpand ? "mr-2" : "mr-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
        </svg>
        {sideNavExpand && <span>Profile</span>}
      </button>
      <button
        className={`flex items-center ${
          sideNavExpand ? "justify-between" : "justify-center"
        } px-4 py-2 text-white
        dark:text-blue-500 bg-blue-500 dark:bg-blue-200 rounded-md shadow-none ring-0 focus:ring-0 mr-3 mb-1`}
      >
        <svg
          className={`h-4 w-4 fill-current ${sideNavExpand ? "mr-2" : "mr-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z" />
        </svg>
        {sideNavExpand && <span>Sign out</span>}
      </button>
    </div>
  );
}
