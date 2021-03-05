import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarOption = (props) => {
  const { text, icon, selected, handleClick } = props;
  return (
    <div
      className={cx("sidebar__option", {
        "sidebar__option--selected": selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <a href="/" onClick={handleClick}>
        {text}
      </a>
    </div>
  );
};

export default SidebarOption;
