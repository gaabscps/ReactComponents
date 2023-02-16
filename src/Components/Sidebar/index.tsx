import React, { useState } from "react";
import { ReactComponent as Vazio } from "../../assets/img/vazio.svg";
import {
  MdContactMail,
  MdContactPage,
  MdContactPhone,
  MdHome,
  MdInfo,
  MdMenu,
} from "react-icons/md";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null as number | null);
  const [subItems, setSubItems] = useState(false);
  const [selectedSubItems, setSelectedSubItems] = useState(
    null as number | null
  );

  const toggle = (): void => {
    setOpen(!open);
  };

  const sidebarList = [
    {
      name: "Home",
      icon: <MdHome size={25} />,
      link: "/",
    },
    {
      name: "About",
      icon: <MdInfo size={25} />,
      link: "/about",
    },
    {
      name: "Contact",
      icon: <MdContactPage size={25} />,
      link: "/contact",
      subItems: [
        {
          name: "Email",
          link: "/contact/email",
          icon: <MdContactMail size={25} />,
        },
        {
          name: "Phone",
          link: "/contact/phone",
          icon: <MdContactPhone size={25} />,
        },
      ],
    },
  ];

  return (
    <>
      <div
        onClick={() => {
          toggle();
        }}
        className="action-icon sidebarMenuContainer"
      >
        <MdMenu size={25} />
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
        <div style={{ height: "fit-content" }}>
          {sidebarList.map((item, index) => (
            <>
              <ul
                className="basicTransition"
                style={
                  open
                    ? { transform: "scale(1)", width: "100%" }
                    : { transform: "scale(0)", width: "0px" }
                }
              >
                <li
                  onClick={() => {
                    setSelectedItem(index === selectedItem ? null : index);
                    item.subItems ? setSubItems(!subItems) : setSubItems(false);
                  }}
                  className={
                    "d-flex align-items-center sidebarItensContainer action-icon" +
                    (selectedItem === index ? " active" : "")
                  }
                  key={index}
                >
                  <div className="mr-5">{item.icon}</div>
                  <div>{item.name}</div>
                </li>
              </ul>
              <ul
                className="fastTransition d-block sidebarSubItensContainer"
                style={
                  open && subItems
                    ? {
                        transform: "translateY(0px)",
                        visibility: "visible",
                        height: "auto",
                      }
                    : {
                        transform: "translateY(-20px)",
                        visibility: "hidden",
                        height: "0px",
                      }
                }
              >
                {item?.subItems?.map((subItem, index) => (
                  <li
                    onClick={() => {
                      setSelectedSubItems(
                        index === selectedSubItems ? null : index
                      );
                    }}
                    className={
                      "d-flex align-items-center sidebarItensContainer action-icon" +
                      (selectedSubItems === index ? " active" : "")
                    }
                    key={index}
                  >
                    <div className="mr-5">{subItem.icon}</div>
                    <div>{subItem.name}</div>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
        <hr className="sidebarDivider basicTransition" />
      </div>
    </>
  );
};
