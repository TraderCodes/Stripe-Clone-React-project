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

   useEffect(() => {
      const submenu = container.current;
      // destructure from location using context
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
   }, [location]);

   return (
      //   if issubmenu is true add show class to show the list
      <aside
         className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
         ref={container}
      >
         <h4>{page}</h4>
      </aside>
   );
};

export default Submenu;
