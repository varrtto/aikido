import { create } from "zustand";

type windowSizeStoreProps = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  initialized: boolean;
};

export const useWindowSizeStore = create<windowSizeStoreProps>(() => ({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  initialized: false,
}));

export const initializeWindowSizeStore = () => {
  const handleResize = () => {
    const { innerWidth } = window;
    useWindowSizeStore.setState({
      isMobile: innerWidth < 768,
      isTablet: innerWidth >= 768 && innerWidth < 1024,
      isDesktop: innerWidth >= 1024,
      initialized: true,
    });
  };

  // Initial window size check
  handleResize();

  // Attach event listener for window resize
  window.addEventListener("resize", handleResize);

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
