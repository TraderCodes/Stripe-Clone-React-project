import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
   const { isSubmenuOpen } = useGlobalContext();

   return (
      //   if issubmenu is true add show class to show the list
      <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}>
         Submenu
      </aside>
   );
};

export default Submenu;
