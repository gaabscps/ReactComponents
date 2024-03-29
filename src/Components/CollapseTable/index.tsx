import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export interface CollapseTableProps {
  containerTitle: string;
  containerData: [
    {
      title: string;
      data: string;
    }
  ];
  containerData2?: [
    {
      title: string;
      data: string;
    }
  ];
}

export const CollapseTable: React.FC = ({
  containerData,
  containerData2,
}: // contentData,
any) => {
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

  const contentData =
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
                    "repeat(" + containerDatas.length + ", 10fr) 1fr",
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
                  "repeat(" + containerDatas.length + ", 10fr) 1fr",
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
            </div>
          </div>
          <div
            style={{
              gridTemplateColumns:
                "repeat(" + containerDatas.length + ", 10fr) 1fr",
            }}
            id="collapseTable"
            className={`fastTransition
            ${isOpen ? "collapseTable--open" : "collapseTable--hidden"}
            collapseTable-container containerContent
            `}
          >
            {contentData.map((content: any, index: any) => (
              <div style={{ margin: "0 10px" }}>
                <div className="contentTitle">{content.title}</div>
                <div>{content.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
