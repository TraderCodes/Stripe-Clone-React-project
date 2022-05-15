import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
   // set sidebar and modal toggle options
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
   const [location, setLocation] = useState({});
   const [page, setPage] = useState({ page: '', links: [] });
   //     set sidebar toggle
   const openSidebar = () => {
      setIsSidebarOpen(true);
   };
   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };
   //    set modal toggle
   const openSubmenu = (text, coordinates) => {
      const page = sublinks.find((link) => link.page === text);
      setPage(page);
      //when coordinates is being pass into opensubmenu ass a arguments, set it as location by using setLocation
      setIsSubmenuOpen(true);
      setLocation(coordinates);
   };
   const closeSubmenu = () => {
      setIsSubmenuOpen(false);
   };

   return (
      <AppContext.Provider
         value={{
            isSubmenuOpen,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            location,
            page,
         } }
      >
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};
