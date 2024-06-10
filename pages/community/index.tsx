import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";
 
const Community: NextPage = () => {
  // console.log("COMMUNITY COMPONENT - PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);{/* layout containerni o'zgia yutib oladi */}
