import { useState } from "react";
import { Logo } from "@components/common/logo";
import { HeaderList } from "./HeaderList";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        {/* Website Logo */}
        <Logo />
        <div className="sm:hidden">
          <MenuIcon
            role="button"
            className="text-2xl"
            onClick={handleToggleMenu}
          />
        </div>
        <div className="hidden sm:block">
          <HeaderList />
        </div>
        <Drawer open={isOpen} onClose={handleToggleMenu}>
          <HeaderList />
        </Drawer>
      </div>
    </header>
  );
};
