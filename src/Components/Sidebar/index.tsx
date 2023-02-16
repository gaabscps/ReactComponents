import React, { useState } from "react";
import { ReactComponent as Vazio } from "../../assets/img/vazio.svg";
import { MdMenu } from "react-icons/md";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const toggle = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <div className="action-icon sidebarMenuContainer">
        <MdMenu
          size={25}
          onClick={() => {
            toggle();
          }}
        />
      </div>
      <div
        id="sidebar"
        style={
          open
            ? { transform: "translate(0px)" }
            : { transform: "translate(-100%)", width: "0px" }
        }
        className="sidebarMain basicTransition"
      >
        <div className="d-flex justify-content-center w-100">
          <div className="logoImageContainer">
            <Vazio className="basicTransition" width={open ? "100%" : "0px"} />
          </div>
        </div>
      </div>
    </>
  );
};
