import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
   const { isSidebarOpen, closeSidebar } = useGlobalContext();
   return (
      <aside
         className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}
      >
         <div className="sidebar">
            {/* sidebar close button */}
            <button className="close-btn" onClick={closeSidebar}>
               <FaTimes />
            </button>
            <div className="sidebar-links">
               {/* map through sidebar data */}
               {sublinks.map((item, index) => {
                  const { links, page } = item;
                  return (
                     <article key={index}>
                        <h4>{page}</h4>

                        {/* for each page map inside each links  */}
                        <div className="sidebar-sublinks">
                           {links.map((link, index) => {
                              const { url, icon, label } = link;
                              return (
                                 <a href={url} key={index}>
                                    {/* for eachitem that map through we return */}
                                    {icon}
                                    {label}
                                 </a>
                              );
                           })}
                        </div>
                     </article>
                  );
               })}
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
