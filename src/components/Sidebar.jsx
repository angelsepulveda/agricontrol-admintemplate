import React from 'react';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { AiFillEnvironment } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";


export default function Sidebar(props) {
  const [ submenuOpen, setSubmenuOpen ] = useState(false);
  const Menus = [
    { title: 'Dashboard' },
    { title: 'Pages' },
    { title: 'Media', spacing: true },
    {
      title: 'Projects',
      submenu: true,
      submenuItems: [{ title: 'Project 1' }, { title: 'Project 2' }, { title: 'Project 3' }],
    },
    {
      title: 'Analytics',
    },
  ];


  return (
    <div className={`bg-dark-primary h-screen p-5 pt-8 ${props.open ? 'w-20' : 'w-60'} duration-300 relative`}>
      <div className="inline-flex">
        <FaReact className="bg-white text-4xl rounded cursor-pointer block float-left mr-6" />
        <h1 className={` text-white origin-left font-medium text-2xl duration-600 ${!open && 'scale-0'}`}>
          AgriControl
        </h1>
      </div>
      <div className={`flex items-center rounded-md bg-light-white mt-5 ${props.open ? 'px-4' : 'px-2.5'} py-2`}></div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <React.Fragment key={index}>
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 
            hover:bg-green-primary hover:text-white rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'} `}
            >
              <span className="text-2xl block float-left">
                <AiFillEnvironment />
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${props.open && 'hidden'}`} >
                {menu.title}
              </span>
              {menu.submenu && !props.open && <BsArrowLeftShort className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen) } />}
            </li>
            {menu.submenu && submenuOpen && !props.open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className="text-gray-300 duration-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5
                  hover:bg-green-primary hover:text-white rounded-md">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
         </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
