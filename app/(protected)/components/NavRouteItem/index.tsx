"use client";

import NavRouteItemProps from "./type";
import classNames from "classnames";

function NavRouteItem({
  icon,
  title,
  isSelectedRoute,
  onClick,
}: NavRouteItemProps) {
  return (
    <div
      role="presentation"
      className={classNames(
        "flex justify-between items-center cursor-pointer",
        {
          "sm:rounded-2xl": isSelectedRoute,
        }
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          "flex items-center gap-y-1 gap-x-2 flex-col sm:flex-row text-primary-dark",
          {
            "!text-primary-light": isSelectedRoute,
          }
        )}
      >
        {icon && <div className="">{icon("")}</div>}
        <p className={classNames("text-medium12 sm:text-medium16 ")}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default NavRouteItem;
