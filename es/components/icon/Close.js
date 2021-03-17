var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 16,
      viewBox: "0 0 16 16"
    }, props),
    React.createElement("path", {
      fill: "#5c6a82",
      d: "M11.781 12.791L8 9.01l-3.78 3.781a.715.715 0 01-1.011-1.01L6.99 8 3.209 4.22A.715.715 0 014.22 3.209L8 6.99l3.781-3.781a.715.715 0 011.01 1.011L9.01 8l3.781 3.781a.714.714 0 11-1.01 1.01z"
    })
  );
}

export default SvgComponent;