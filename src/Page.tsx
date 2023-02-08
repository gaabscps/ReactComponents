import { CollapseTable } from "./Components/CollapseTable";
import "./styles/import.scss";

export const Page = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8", height: "100vh" }}>
      <div style={{ padding: "100px 100px" }}>
        <CollapseTable />
      </div>
    </div>
  );
};

export default Page;
