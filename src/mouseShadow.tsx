import React, { useEffect } from 'react';

function MouseShadow() {
  useEffect(() => {
    // Get a reference to the shadow element
    const shadow = document.querySelector('#mouseShadow');

    // Attach an event listener to the document for mousemove events
    document.addEventListener('mousemove', e => {
      // Get the current mouse position
      const mouseX = e.pageX;
      const mouseY = e.pageY - window.scrollY;

      // Update the position of the shadow element
      // shadow.style.left = mouseX + 'px';
      // shadow.style.top = mouseY + 'px';
    });

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <div id="mouseShadow" className="mouseShadow"></div>;
}




export default MouseShadow;