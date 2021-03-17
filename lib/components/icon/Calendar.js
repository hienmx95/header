"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      "g",
      { "data-name": "Group 11123" },
      React.createElement("path", {
        "data-name": "Combined Shape",
        d: "M3.729 14a1.332 1.332 0 01-1.33-1.33V4.663a1.332 1.332 0 011.33-1.33h.67v-.666a.667.667 0 011.334 0v.667h5.332v-.667a.667.667 0 011.334 0v.667h.67a1.332 1.332 0 011.33 1.329v8.007a1.332 1.332 0 01-1.33 1.33zm.17-2.188a.664.664 0 00.662.664h7.677a.663.663 0 00.661-.664V6.381h-9zm6.5-.478V10h1.334v1.334zm-2.666 0V10h1.333v1.334zm-2.667 0V10h1.333v1.334zm5.333-2.667V7.333h1.334v1.334zm-2.666 0V7.333h1.333v1.334zm-2.667 0V7.333h1.333v1.334z",
        fill: "#5c6a82"
      })
    )
  );
}

exports.default = SvgComponent;
module.exports = exports["default"];