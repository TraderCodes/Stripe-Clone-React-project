import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
   const {
      isSubmenuOpen,
      location,
      page: { page, links },
   } = useGlobalContext();
   //everytime when location changes, we need to run useEffect
   const container = useRef(null);
   const [columns, setColumns] = useState('col-2');
   useEffect(() => {
      setColumns('col-2');
      const submenu = container.current;
      // destructure from location using context
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // change columns size base on how much links in the submenu
      if (links.length === 3) {
         setColumns('col-3');
      }
      if (links.length === 4) {
         setColumns('col-4');
      }
   }, [location, page, links]);

   return (
      //   if issubmenu is true add show class to show the list
      <aside
         className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
         ref={container}
      >
         <h4>{page}</h4>
         <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
               const { label, icon, url } = link;
               return (
                  <a key={index} href={url}>
                     {icon}
                     {label}
                  </a>
               );
            })}
         </div>
      </aside>
   );
};

export default Submenu;
