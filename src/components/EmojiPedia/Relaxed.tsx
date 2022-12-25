const Relaxed = (props: any) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 108 76"
      {...props}
    >
      <defs>
        <style>
          {
            ".cls-4{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}.cls-5{fill:#ff4040; stroke:none !important; filter: blur(1px);}"
          }
        </style>
        <filter id="blurMe">
          <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient"
          x1={-316.11}
          y1={582.94}
          x2={-315.57}
          y2={582.07}
          gradientTransform="matrix(72 0 0 -76 22795.76 44310.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffa300" />
          <stop offset={1} stopColor="#ffc35a" />
        </linearGradient>
      </defs>
      <g id="_1" data-name={1}>
        <g id="Group_16149" data-name="Group 16149">
          <ellipse
            id="Ellipse_472"
            data-name="Ellipse 472"
            cx={54.12}
            cy={38}
            rx={36}
            ry={38}
            fill="url(#linear-gradient)"
          />
        </g>
        <g id="Group_16152" data-name="Group 16152">
          <path
            id="Path_145"
            data-name="Path 145"
            className="cls-4"
            d="M47.79 48.52a5 5 0 004.61 5.41h.24c2.57 0 5.09-1.12 5.41-5.42"
          />
          <ellipse
            id="Ellipse_474"
            data-name="Ellipse 474"
            className="cls-5"
            cx={34.34}
            cy={48.52}
            rx={5.42}
            ry={3.61}
          />
          <ellipse
            id="Ellipse_475"
            data-name="Ellipse 475"
            className="cls-5"
            cx={71.98}
            cy={48.52}
            rx={5.42}
            ry={3.61}
          />
          <path
            id="Path_155"
            data-name="Path 155"
            className="cls-4"
            d="M32.35 37.94a8.05 8.05 0 005.08 1.6 9.68 9.68 0 006.14-1.6"
          />
          <path
            id="Path_156"
            data-name="Path 156"
            className="cls-4"
            d="M62.75 37.94a8.05 8.05 0 005.08 1.6 9.68 9.68 0 006.17-1.6"
          />
        </g>
      </g>
    </svg>
  );
};

export default Relaxed;
