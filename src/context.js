import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
   // set sidebar and modal toggle options
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

   //     set sidebar toggle
   const openSidebar = () => {
      setIsSidebarOpen(true);
   };
   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };
   //    set modal toggle
   const openSubmenu = () => {
      setIsSubmenuOpen(true);
   };
   const closeSubmenu = () => {
      setIsSubmenuOpen(false);
   };

   return (
      <AppContext.Provider
         values={{
            isSubmenuOpen,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
        
            openSubmenu,
            closeSubmenu,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};
