import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from '@components/common/logo';
import { SidebarLinksList } from './SidebarLinksList';

export const Sidebar = ({ col }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function To Handle Toggle Menu
  const handleToggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <aside
      className={`sticky top-0 z-30 bg-[#f5f8ff] flex justify-between items-center px-6 py-2 lg:flex-col lg:justify-start lg:items-start lg:px-0 lg:py-12 lg:h-screen ${col}`}
    >
      <div className="lg:px-6">
        <Logo color="text-main" />
      </div>
      {/* Sidebar Menu Only Shown in Small Devices */}
      <div className="lg:hidden">
        <MenuIcon role="button" className="2xl" onClick={handleToggleMenu} />
      </div>
      <SidebarLinksList state="hidden" />
      <Drawer open={isOpen} onClose={handleToggleMenu}>
        <div className="py-6">
          <SidebarLinksList />
        </div>
      </Drawer>
    </aside>
  );
};
