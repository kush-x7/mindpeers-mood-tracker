import { SVGProps } from "react";

const Angry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 76"
    {...props}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={-613.62}
        y1={583.1}
        x2={-613.06}
        y2={582.12}
        gradientTransform="matrix(72 0 0 -76 44214.83 44316.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#de575a" />
        <stop offset={1} stopColor="#da6b6d" />
      </linearGradient>
      <filter id="blurMe">
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
      <style>
        {
          ".cls-4,.cls-5{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
        }
      </style>
    </defs>
    <g id="_4" data-name={4}>
      <g
        style={{
          filter: "url(#blurMe)",
        }}
      >
        <ellipse
          cx={54}
          cy={40}
          rx={45}
          ry={26.5}
          style={{
            fill: "#de5b5d",
          }}
          id="Ellipse_833"
          data-name="Ellipse 833"
        />
      </g>
      <g id="Group_16153" data-name="Group 16153">
        <ellipse
          id="Ellipse_473-2"
          data-name="Ellipse 473-2"
          cx={54}
          cy={38}
          rx={36}
          ry={38}
          style={{
            fill: "url(#linear-gradient)",
          }}
        />
      </g>
      <path
        id="Path_149"
        data-name="Path 149"
        className="cls-4"
        d="M42 47.31C43.09 45.64 47 41 53 41s8.46 1.12 13.28 6.29"
      />
      <path
        id="Path_152"
        data-name="Path 152"
        className="cls-5"
        d="m26.51 25.08 6.49 2.3 8.49 3.24"
      />
      <path
        id="Path_153"
        data-name="Path 153"
        className="cls-5"
        d="m81.15 25.13-6.67 2.34-8.67 3.29"
      />
      <path
        id="Path_151"
        data-name="Path 151"
        className="cls-4"
        d="M29.63 30.51a7.3 7.3 0 0 0 5.8 3.32c3.19 0 4.47-.59 7-3.32"
      />
      <path
        id="Path_150"
        data-name="Path 150"
        className="cls-4"
        d="M65.63 30.51a7.3 7.3 0 0 0 5.8 3.32c3.19 0 4.47-.59 7-3.32"
      />
    </g>
  </svg>
);

export default Angry;
