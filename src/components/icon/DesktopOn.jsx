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
      <path
        fill="#5c6a82"
        d="M6 14a1.333 1.333 0 01.667-1.156v-1.507h2.666v1.511A1.333 1.333 0 0110 14zm-2.667-3.33A1.335 1.335 0 012 9.336V4a1.335 1.335 0 011.333-1.33h5.333V4H3.333v5.336h9.334v-2H14v2a1.335 1.335 0 01-1.333 1.334zM10 4a2 2 0 112 2 2 2 0 01-2-2z"
      />
    </svg>
  );
}

export default SvgComponent;
