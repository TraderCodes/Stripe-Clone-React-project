import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
   const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
   //  Setup display submenu when hover overmenu
   //  setup Event target when hover
   const displaySubmenu = (e) => {
      //  e.target shows the parent element when hover
      const page = e.target.textContent;
      // get location
      const tempBtn = e.target.getBoundingClientRect();
      // find center by adding left and right / 2
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;
      openSubmenu(page, { center, bottom });
   };
   const handleSubmenu = (e) => {
      if (!e.target.classList.contains('link-btn')) {
         closeSubmenu();
      }
   };

   // pass in context
   // connects to submenu.js

   return (
      <nav className="nav" onMouseOver={handleSubmenu}>
         <div className="nav-center">
            {/* header for main content */}
            <div className="nav-header">
               <img src={logo} className="nav-logo" alt="logo" />
               {/* sidebar button */}
               <button className="btn toggle-btn" onClick={openSidebar}>
                  <FaBars />
               </button>
            </div>
            <ul className="nav-links">
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     products
                  </button>
               </li>
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     developers
                  </button>
               </li>
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     company
                  </button>
               </li>
            </ul>
            <button className="btn signin-btn">Sign in</button>
         </div>
      </nav>
   );
};

export default Navbar;
