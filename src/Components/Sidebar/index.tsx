import React, { useState } from "react";
import { ReactComponent as Vazio } from "../../assets/img/svg/vazio.svg";
import {
  MdContactMail,
  MdContactPage,
  MdContactPhone,
  MdHome,
  MdInfo,
  MdMediaBluetoothOn,
  MdMenu,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null as number | null);
  const [subItems, setSubItems] = useState(false);
  const [selectedSubItems, setSelectedSubItems] = useState(
    null as number | null
  );

  const navigate = useNavigate();

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
        {
          name: "Address",
          link: "/contact/address",
          icon: <MdHome size={25} />,
        },
        {
          name: "Facebook",
          link: "/contact/facebook",
          icon: <MdMediaBluetoothOn size={25} />,
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
        <div className="d-flex justify-content-center w-100 basicTransition">
          <div className="logoImageContainer basicTransition">
            <Vazio className="basicTransition" width={open ? "100%" : "0px"} />
          </div>
        </div>
        <div className="basicTransition" style={{ height: "fit-content" }}>
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
                    setSelectedSubItems(null);
                    item.link && navigate(item.link);
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
                className="fastTransition sidebarSubItensContainer"
                style={
                  open && subItems
                    ? {
                        transform: "translateY(0%) scaleY(1)",
                        maxHeight: "1000px",
                        visibility: "visible",
                        position: "relative",
                      }
                    : {
                        transform: "translateY(-50%) scaleY(0)",
                        maxHeight: "0px",
                        visibility: "hidden",
                        position: "relative",
                        zIndex: -190,
                      }
                }
              >
                {item?.subItems?.map((subItem, index) => (
                  <li
                    onClick={() => {
                      setSelectedSubItems(
                        index === selectedSubItems ? null : index
                      );
                      navigate(subItem.link);
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
