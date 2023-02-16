import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export interface CollapseTableProps {
  containerTitle: any;
  containerData: any;
  containerData2?: any;
}

export const CollapseTable: React.FC = ({
  containerData,
  containerData2,
  contentData,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerDatas = [
    {
      title: "Data",
      data: "10/12/2022",
    },
    {
      title: "Data",
      data: "10/12/2022",
    },
    {
      title: "Data",
      data: "10/12/2022",
    },
    {
      title: "Data",
      data: "10/12/2022",
    },
    {
      title: "Data",
      data: "10/12/2022",
    },
  ];
  const containerDatas2 =
    [
      // {
      //   title: "Data",
      //   data: "10/12/2022",
      // },
      // {
      //   title: "Data",
      //   data: "10/12/2022",
      // },
      // {
      //   title: "Data",
      //   data: "10/12/2022",
      // },
      // {
      //   title: "Data",
      //   data: "10/12/2022",
      // },
      // {
      //   title: "Data",
      //   data: "10/12/2022",
      // },
    ] || [];

  const contentTitle =
    [
      {
        title: "Data",
        data: "10/12/2022",
      },
      {
        title: "Data",
        data: "10/12/2022",
      },
      {
        title: "Data",
        data: "10/12/2022",
      },
      {
        title: "Data",
        data: "10/12/2022",
      },
      {
        title: "Data",
        data: "10/12/2022",
      },
    ] || [];

  return (
    <>
      <div>
        <div>
          <div style={{ overflow: "auto" }}>
            {containerDatas2 && containerDatas2.length > 0 ? (
              <div className="collapseTable-title">Titulo</div>
            ) : (
              <div
                style={{
                  gridTemplateColumns:
                    "repeat(" + (containerDatas.length + 1) + ", 1fr)",
                }}
                className="containerTitle minWidth-full"
              >
                {containerDatas.map((container: any, index: any) => (
                  <div style={{ width: "100px" }}>{container.title}</div>
                ))}

                <div className="containerArrow"></div>
              </div>
            )}

            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              style={{
                gridTemplateColumns:
                  "repeat(" + (containerDatas.length + 1) + ", 1fr)",
              }}
              className="collapseTable-container action-icon containerTitle minWidth-full"
            >
              {containerDatas.map((container: any, index: any) => (
                <div style={{ width: "100px" }}>{container.data}</div>
              ))}
              <div
                style={
                  containerDatas2 && containerDatas2.length > 0
                    ? {
                        position: "relative",
                        right: "0px",
                        top: "25px",
                      }
                    : {}
                }
                className="containerArrow"
              >
                <MdKeyboardArrowDown
                  className={`transformRotate ${isOpen && "out"}`}
                  size={25}
                />
              </div>
              {containerDatas2.map((container: any, index: any) => (
                <div>{container.data}</div>
              ))}

              {/* <div className="containerArrow">X</div> */}
            </div>
          </div>
          {isOpen && (
            <div
              style={{
                gridTemplateColumns:
                  "repeat(" + (containerDatas.length + 1) + ", 1fr)",
              }}
              id="collapseTable"
              className={`
            ${isOpen ? "collapseTable--open" : "collapseTable--hidden"}
            collapseTable-container containerTitle
            `}
            >
              {contentTitle.map((content: any, index: any) => (
                <div className="">
                  <div className="contentTitle">{content.title}</div>
                  <div></div>
                  <div>{content.data}</div>
                  <div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
