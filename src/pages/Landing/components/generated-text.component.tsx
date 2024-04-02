import React, { useState, useEffect } from "react";

const GeneratedText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textOpacity = Math.min(1, scrollPosition / 500); // Adjust the divisor for the scrolling speed

  return (
    <div style={{ height: "200vh", paddingTop: "100vh", textAlign: "center" }}>
      <div style={{ opacity: textOpacity }}>
        <h1>This text is generated with React Motion!</h1>
        <p>Scroll down to see more content...</p>
      </div>
    </div>
  );
};

export default GeneratedText;
