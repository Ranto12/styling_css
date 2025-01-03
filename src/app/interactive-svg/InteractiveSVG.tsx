import { useEffect } from "react";

const InteractiveSVG = () => {
  useEffect(() => {
    const elementArray: { top: number; left: number; id: number }[] = [];
    // memastikan sesuai dengan ukuran window
    const windowHeight = window.innerHeight || 0;
    const windowWidth = window.innerWidth || 0;

    for (let index = 0; index < 50; index++) {
      elementArray.push({
        top: Math.floor(Math.random() * windowHeight),
        left: Math.floor(Math.random() * windowWidth),
        id: index,
      });
    }

    const svgElement = document.getElementById("svg");

    elementArray.forEach((item) => {
      const ellipsElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "ellipse"
      );
      ellipsElement.setAttribute("class", "ellipse");
      ellipsElement.setAttribute("id", `ellipse_${item.id}`);
      ellipsElement.setAttribute("cx", `${item.left.toString()}`);
      ellipsElement.setAttribute("cy", `${item.top.toString()}`);
      ellipsElement.setAttribute("rx", "2");
      ellipsElement.setAttribute("ry", "2");

      svgElement?.appendChild(ellipsElement);
    });

    const handleMoseMove = (event: MouseEvent) => {
      const lines = document.querySelectorAll("line");
      lines.forEach((line) => line.remove());

      elementArray
        .filter(
          (item) =>
            Math.abs(item.top - event.clientY) <= 250 &&
            Math.abs(item.left - event.clientX) <= 250
        )
        .forEach((item) => {
          const lineElement = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
          );
          lineElement.setAttribute("class", "line");
          lineElement.setAttribute("id", `line_${item.id}`);
          lineElement.setAttribute("x1", item.left.toString());
          lineElement.setAttribute("y1", item.top.toString());
          lineElement.setAttribute("x2", event.clientX.toString());
          lineElement.setAttribute("y2", event.clientY.toString());
          lineElement.setAttribute("stroke", "black");

          svgElement?.appendChild(lineElement);
        });
    };

    const handlemouseOut = () => {
      const lines = document.querySelectorAll("line");
      lines.forEach((line) => line.remove());
    };

    const updateEllipses = () => {
      elementArray.forEach((item, index) => {
        const newTop =
          Math.random() * (item.top + 10 - (item.top - 10)) + (item.top - 10);
        const newLeft =
          Math.random() * (item.left + 10 - (item.left - 10)) +
          (item.left - 10);
        elementArray[index].top = newTop;
        elementArray[index].left = newLeft;

        const ellipseElement = document.getElementById(`ellipse_${item.id}`);
        if (ellipseElement) {
          ellipseElement.setAttribute("cx", newLeft.toString());
          ellipseElement.setAttribute("cy", newTop.toString());
        }

        const lineElement = document.getElementById(`line_${item.id}`);

        if (lineElement) {
          lineElement.setAttribute("x1", newLeft.toString());
          lineElement.setAttribute("y1", newTop.toString());
        }
      });
    };

    window.addEventListener("mousemove", handleMoseMove);
    window.addEventListener("mouseout", handlemouseOut);
    const interval = setInterval(updateEllipses, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMoseMove);
      window.removeEventListener("mouseout", handleMoseMove);
    };
  }, []);
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      style={{
        maxHeight: "calc(100% - 49px)",
      }}
    ></svg>
  );
};

export default InteractiveSVG;
