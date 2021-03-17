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
        <style>{'.prefix__cls-2{fill:#fff}'}</style>
      </defs>
      <g
        id="prefix__Group_7409"
        data-name="Group 7409"
        transform="translate(-1158 -22)"
      >
        <path
          id="prefix__Rectangle_4665"
          data-name="Rectangle 4665"
          transform="translate(1158 22)"
          fill="none"
          d="M0 0h16v16H0z"
        />
        <g
          id="prefix__Group_4717"
          data-name="Group 4717"
          transform="translate(1138 2.517)"
        >
          <path
            id="prefix__Path_13559"
            data-name="Path 13559"
            className="prefix__cls-2"
            d="M36 20.638a.357.357 0 00-.355-.355h-15.29a.357.357 0 00-.355.355v1.8h.011a2.661 2.661 0 005.32 0h.006a2.66 2.66 0 005.32 0h.007a2.66 2.66 0 005.319 0H36z"
          />
          <path
            id="prefix__Path_13560"
            data-name="Path 13560"
            className="prefix__cls-2"
            d="M36.3 37.908a3.719 3.719 0 01-5.326 0 3.676 3.676 0 01-3.283 1.067V47.1a.535.535 0 00.533.533h3.6v-5.317h3.623v5.321h3.6a.535.535 0 00.533-.533v-8.13a3.675 3.675 0 01-3.29-1.066z"
            transform="translate(-5.64 -12.925)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
