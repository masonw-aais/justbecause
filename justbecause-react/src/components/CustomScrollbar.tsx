import React, { useEffect } from "react";
import "../stylesheets/CustomScrollbar.css";

interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
  children,
  className = "",
}) => {
  useEffect(() => {
    // Add custom scrollbar class to body for global styling
    document.body.classList.add("custom-scrollbar-enabled");

    return () => {
      // Cleanup: remove class when component unmounts
      document.body.classList.remove("custom-scrollbar-enabled");
    };
  }, []);

  return (
    <div className={`custom-scrollbar-container ${className}`}>{children}</div>
  );
};

export default CustomScrollbar;
