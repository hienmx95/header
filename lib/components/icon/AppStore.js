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
      "defs",
      null,
      React.createElement(
        "style",
        null,
        '.prefix__cls-2{fill:#fff}'
      )
    ),
    React.createElement(
      "g",
      {
        id: "prefix__Group_7409",
        "data-name": "Group 7409",
        transform: "translate(-1158 -22)"
      },
      React.createElement("path", {
        id: "prefix__Rectangle_4665",
        "data-name": "Rectangle 4665",
        transform: "translate(1158 22)",
        fill: "none",
        d: "M0 0h16v16H0z"
      }),
      React.createElement(
        "g",
        {
          id: "prefix__Group_4717",
          "data-name": "Group 4717",
          transform: "translate(1138 2.517)"
        },
        React.createElement("path", {
          id: "prefix__Path_13559",
          "data-name": "Path 13559",
          className: "prefix__cls-2",
          d: "M36 20.638a.357.357 0 00-.355-.355h-15.29a.357.357 0 00-.355.355v1.8h.011a2.661 2.661 0 005.32 0h.006a2.66 2.66 0 005.32 0h.007a2.66 2.66 0 005.319 0H36z"
        }),
        React.createElement("path", {
          id: "prefix__Path_13560",
          "data-name": "Path 13560",
          className: "prefix__cls-2",
          d: "M36.3 37.908a3.719 3.719 0 01-5.326 0 3.676 3.676 0 01-3.283 1.067V47.1a.535.535 0 00.533.533h3.6v-5.317h3.623v5.321h3.6a.535.535 0 00.533-.533v-8.13a3.675 3.675 0 01-3.29-1.066z",
          transform: "translate(-5.64 -12.925)"
        })
      )
    )
  );
}

exports.default = SvgComponent;
module.exports = exports["default"];