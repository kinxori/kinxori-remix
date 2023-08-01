import { useEffect, useState } from "react";
import MobileNavBar from "~/components/NavBar/MobileNavBar";
import DesktopNavBar from "~/components/NavBar/DesktopNavBar";

export default function NavBar() {
  const [navComponent, setIsNavComponent] = useState(<MobileNavBar />);

  useEffect(() => {
    const handleRezise = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1180) {
        setIsNavComponent(<MobileNavBar />);
      } else {
        setIsNavComponent(<DesktopNavBar />);
      }
    };
    window.addEventListener("resize", handleRezise);
    handleRezise();
    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  return <>{navComponent}</>;
}
