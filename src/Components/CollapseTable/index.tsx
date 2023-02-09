import React, { useState } from "react";

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
          {containerDatas2 && containerDatas2.length > 0 ? (
            <div className="collapseTable-title">Titulo</div>
          ) : (
            <div
              style={{
                gridTemplateColumns:
                  "repeat(" + (containerDatas.length + 1) + ", 1fr)",
              }}
              className="containerTitle"
            >
              {containerDatas.map((container: any, index: any) => (
                <div>{container.title}</div>
              ))}

              <div className="containerArrow"></div>
            </div>
          )}

          <div
            onClick={() => {
              console.log("isOpen", isOpen);
              setIsOpen(!isOpen);
            }}
            style={{
              gridTemplateColumns:
                "repeat(" + (containerDatas.length + 1) + ", 1fr)",
            }}
            className="collapseTable-container action-icon containerTitle"
          >
            {containerDatas.map((container: any, index: any) => (
              <div>{container.data}</div>
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
              X
            </div>
            {containerDatas2.map((container: any, index: any) => (
              <div>{container.data}</div>
            ))}

            {/* <div className="containerArrow">X</div> */}
          </div>

          <div
            style={{
              gridTemplateColumns:
                "repeat(" + (containerDatas.length + 1) + ", 1fr)",
            }}
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
        </div>
      </div>
    </>
  );
};
