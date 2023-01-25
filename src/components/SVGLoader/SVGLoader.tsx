import { Category } from "../../utils/types";
import React from "react";
import * as svg from "../../assets/svgExports";

type SVGComponentProps = {
  category: Category;
};

const SVGLoader = ({ category }: SVGComponentProps) => {
  const handleSVGLoad = (category: Category) => {
    switch (category) {
      case "Home":
        return <img src={svg.Home} alt={`${category}.svg`} />;
      case "General":
        return <img src={svg.General} alt={`${category}.svg`} />;
      case "Science":
        return <img src={svg.Science} alt={`${category}.svg`} />;
      case "Health":
        return <img src={svg.Health} alt={`${category}.svg`} />;
      case "Technology":
        return <img src={svg.Technology} alt={`${category}.svg`} />;
      case "Sports":
        return <img src={svg.Sports} alt={`${category}.svg`} />;
      case "Business":
        return <img src={svg.Business} alt={`${category}.svg`} />;
      default:
        return;
    }
  };

  return <>{handleSVGLoad(category)}</>;
};

export default SVGLoader;
