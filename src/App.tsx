import React from "react";
import Dropdown from "./components/Dropdown";

import { MenuItemProps } from "./types/generic";

function App() {
  // this tmp array is simulated api data return
  const tmpItems: MenuItemProps[] = [
    {
      id: 0,
      label: "Rename",
      onClick: () => console.log("rename pressed"),
    },
    {
      id: 1,
      label: "Delete",
      onClick: () => console.log("delete pressed"),
    },
    {
      id: 2,
      label: "Share",
      onClick: () => console.log("share pressed"),
    },
  ];

  return (
    <div>
      <nav>
        <Dropdown menuItems={tmpItems} />
      </nav>
    </div>
  );
}

export default App;
