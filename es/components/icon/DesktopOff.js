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
      "data-name": "Combined Shape",
      d: "M6 13.668a.666.666 0 01.667-.667v-2h2.666v2a.666.666 0 01.667.667zm-2.667-3.333A1.335 1.335 0 012 9.002V3.668a1.335 1.335 0 011.333-1.333h9.334A1.335 1.335 0 0114 3.668v5.334a1.335 1.335 0 01-1.333 1.333zm0-1.333h9.334V3.668H3.333z",
      fill: "#5c6a82"
    })
  );
}

export default SvgComponent;