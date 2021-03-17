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
    React.createElement("path", {
      fill: "#5c6a82",
      d: "M14 4.251a.75.75 0 01-.75.75H8a.75.75 0 010-1.5h5.25a.75.75 0 01.75.75zM3.158 5.531a.75.75 0 001.06 0l1.874-1.875a.75.75 0 10-1.06-1.061L3.688 3.939l-.408-.407a.75.75 0 10-1.06 1.061zM13.25 7.438H8a.75.75 0 000 1.5h5.25a.75.75 0 100-1.5zM3.158 9.468a.75.75 0 001.06 0l1.875-1.875a.75.75 0 10-1.06-1.061L3.688 7.88l-.408-.407a.75.75 0 10-1.06 1.061zM13.25 11.38H8a.75.75 0 000 1.5h5.25a.75.75 0 000-1.5zm-9.562 2.25a.75.75 0 00.53-.22l1.875-1.875a.75.75 0 10-1.06-1.061l-1.345 1.34-.408-.408a.75.75 0 10-1.06 1.061l.938.937a.75.75 0 00.53.222z"
    })
  );
}

exports.default = SvgComponent;
module.exports = exports["default"];