import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Social from "./Social";
import { useWindowSizeStore } from "@state/windowSizeStore";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSizeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {(isMobile || isTablet) && (
        <BurgerButton handleClick={setIsMobileMenuOpen} />
      )}
      {(isMobileMenuOpen || isDesktop) && (
        <div className={styles.navbar}>
          {(isMobile || isTablet) && <Social />}
          <NavLink to="/">INICIO</NavLink>
          <NavLink to="/dojos">DOJOS</NavLink>
          <NavLink to="/bio">BIOGRAFIA</NavLink>
          <NavLink to="/aikiken">ASOC. AIKIKEN</NavLink>
          <NavLink to="/media">MULTIMEDIA</NavLink>
          <NavLink to="/news">NOVEDADES</NavLink>
          <NavLink to="/activities">AGENDA</NavLink>
          <NavLink to="/contact">CONTACTO</NavLink>
          {isDesktop && <Social />}
        </div>
      )}
    </>
  );
};

export default Navbar;
