document.addEventListener("DOMContentLoaded", function() {
    function createCheckIcon() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M20 6 9 17l-5-5");
      
      svg.appendChild(path);
      return svg;
    }
  
    const checkIcons = document.querySelectorAll('.check-icon');
    checkIcons.forEach(icon => {
      const svgIcon = createCheckIcon();
      icon.appendChild(svgIcon);
    });
  });
  