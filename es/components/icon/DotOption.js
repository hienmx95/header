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
    React.createElement(
      "defs",
      null,
      React.createElement(
        "style",
        null,
        '.prefix__cls-2{fill:#5c6a82}'
      )
    ),
    React.createElement(
      "g",
      { id: "prefix__Icon-more", transform: "translate(-821 -478)" },
      React.createElement(
        "g",
        { id: "prefix__Icon", transform: "translate(4 20.5)" },
        React.createElement("circle", {
          id: "prefix__Ellipse_1",
          cx: 1.5,
          cy: 1.5,
          r: 1.5,
          className: "prefix__cls-2",
          transform: "translate(819 464)"
        }),
        React.createElement("circle", {
          id: "prefix__Ellipse_2",
          cx: 1.5,
          cy: 1.5,
          r: 1.5,
          className: "prefix__cls-2",
          transform: "translate(823.5 464)"
        }),
        React.createElement("circle", {
          id: "prefix__Ellipse_3",
          cx: 1.5,
          cy: 1.5,
          r: 1.5,
          className: "prefix__cls-2",
          transform: "translate(828 464)"
        })
      )
    )
  );
}

export default SvgComponent;