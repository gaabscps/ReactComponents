import React, { useState } from "react";

export interface CollapseTableProps {
  containerTitle: any;
}

export const CollapseTable: React.FC = ({ containerData }: any) => {
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

  return (
    <>
      <div>
        <div>
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

          <div
            onClick={() => {
              console.log("isOpen", isOpen);
              setIsOpen(!isOpen);
            }}
            style={{
              gridTemplateColumns:
                "repeat(" + (containerDatas.length + 1) + ", 1fr)",
            }}
            className="collapseTable-container containerTitle"
          >
            {containerDatas.map((container: any, index: any) => (
              <div>{container.data}</div>
            ))}

            <div className="containerArrow">X</div>
          </div>

          <div
            style={{
              gridTemplateColumns:
                "repeat(" + (containerDatas.length + 1) + ", 1fr)",
            }}
            className={`
            ${!isOpen ? "collapseTable--open" : "collapseTable--hidden"}
            collapseTable-container containerTitle
            `}
          >
            {containerDatas.map((container: any, index: any) => (
              <div className="">
                <div>{container.data}</div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
