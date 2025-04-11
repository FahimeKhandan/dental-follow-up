"use client";

import { usePathname, useRouter } from "next/navigation";
import NavRouteItem from "../NavRouteItem";
import staticTexts from "@/locale/fa";
import { FaHeadSideMask, FaHistory, FaHome } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { HISTORY_ROUTE, HOME_PAGE_ROUTE, MENU_ROUTE, PATIENTS_ROUTE } from "@/constants/routes";

const { home, history, patient_list, menu } = staticTexts.menu;

function MobileNav() {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="grid grid-cols-4 sm:hidden fixed bottom-0 right-0 h-[75px] bg-text-white w-screen shadow-[0px_-2px_20px_0px_#00000012] z-20">
      <div className="flex items-center justify-center">
        <NavRouteItem
          title={home}
          icon={() => <FaHome size={24} />}
          onClick={() => {
            router.push(HOME_PAGE_ROUTE);
          }}
          isSelectedRoute={currentPath === HOME_PAGE_ROUTE}
        />
      </div>
      <div className="flex items-center justify-center ">
        <NavRouteItem
          title={history}
          icon={() => <FaHistory size={24} />}
          onClick={() => {
            router.push(HISTORY_ROUTE);
          }}
          isSelectedRoute={currentPath === HISTORY_ROUTE}
        />
      </div>
      <div className="flex items-center justify-center ">
        <NavRouteItem
          title={patient_list}
          icon={() => <FaHeadSideMask size={24} />}
          onClick={() => {
            router.push(PATIENTS_ROUTE);
          }}
          isSelectedRoute={currentPath === PATIENTS_ROUTE}
        />
      </div>

      <div className="flex items-center justify-center ">
        <NavRouteItem
          title={menu}
          icon={() => <HiMenu size={24} />}
          onClick={() => {
            router.push(MENU_ROUTE);
          }}
          isSelectedRoute={currentPath === MENU_ROUTE}
        />
      </div>
    </div>
  );
}

export default MobileNav;
