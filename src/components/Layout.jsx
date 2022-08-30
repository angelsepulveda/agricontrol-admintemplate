import { useState } from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


function Layout() {
 const [open, setOpen] = useState(true);
  
  return (
    <div className="flex">
      <Sidebar setOpen={setOpen} open={open} />
      <div className="p-7">
        <Navbar open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
}

export default Layout;