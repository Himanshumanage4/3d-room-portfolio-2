import React, { useRef, useEffect } from "react";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import "./Logo.scss";
import gsap from "gsap";
// Import both logos
import logoLight from "../../assets/logo2.png";
import logoDark from "../../assets/logo1.png";

const Logo = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const logoRef = useRef();

  // Determine the className based on the dark mode
  const logoClassNames = `logo${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!logoRef.current) return;

    if (isBeforeZooming) {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  return (
    <>
      <div ref={logoRef} className={logoClassNames}>
        {/* Conditionally render the logo based on dark mode */}
        <img
          src={isDarkRoom ? logoDark : logoLight}
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Logo;
