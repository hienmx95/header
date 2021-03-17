import * as React from 'react';

function SvgComponent (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <style>{'.prefix__cls-2{fill:#5c6a82}'}</style>
      </defs>
      <g id="prefix__Icon-more" transform="translate(-821 -478)">
        <g id="prefix__Icon" transform="translate(4 20.5)">
          <circle
            id="prefix__Ellipse_1"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="prefix__cls-2"
            transform="translate(819 464)"
          />
          <circle
            id="prefix__Ellipse_2"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="prefix__cls-2"
            transform="translate(823.5 464)"
          />
          <circle
            id="prefix__Ellipse_3"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="prefix__cls-2"
            transform="translate(828 464)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
