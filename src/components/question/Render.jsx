import React from 'react';
import { MathJax } from "better-react-mathjax";
const Render = ({ url }) => {
    console.log(url,typeof(url),"url")
  const contentArray = url.split('$');
  console.log(contentArray)

  // Initialize an array to hold the JSX elements
  const renderedContent = [];
  for (let i = 0; i < contentArray.length; i++) {
    console.log("i",i,"contentArray[i]",contentArray[i])
    if (i % 2 === 1) {
      renderedContent.push(
        // <MathJax>{contentArray[i]}</MathJax>
        <MathJax>{`\\(${contentArray[i]}\\)`}</MathJax>
      );
    } else {
      renderedContent.push(<h6 key={i}>{contentArray[i]}</h6>);
    }
  }

  return <div>{renderedContent}</div>;
};

export default Render;
