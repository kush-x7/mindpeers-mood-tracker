import * as React from "react";
import { SVGProps } from "react";

const Annoyed = (props: SVGProps<SVGSVGElement>) => (
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
        x1={-466.59}
        y1={579.45}
        x2={-466.09}
        y2={578.58}
        gradientTransform="matrix(72 0 0 -76 33630.67 44043.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#2a66db" />
        <stop offset={1} stopColor="#6096ff" />
      </linearGradient>
      <filter id="blurMe">
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
      <style>
        {
          ".cls-4{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
        }
      </style>
    </defs>
    <g id="_2" data-name={2}>
      <g
        style={{
          filter: "url(#blurMe)",
        }}
      >
        <ellipse
          cx={54}
          cy={41.83}
          rx={45}
          ry={26.5}
          style={{
            fill: "#3570e3",
          }}
          id="Ellipse_832"
          data-name="Ellipse 832"
        />
      </g>
      <g id="Group_16150" data-name="Group 16150">
        <ellipse
          id="Ellipse_473"
          data-name="Ellipse 473"
          cx={53.83}
          cy={38}
          rx={36}
          ry={38}
          style={{
            fill: "url(#linear-gradient)",
          }}
        />
      </g>
      <path
        id="Path_146"
        data-name="Path 146"
        className="cls-4"
        d="M41.88 46.31c1-1.67 4.94-6.29 11-6.29s8.46 1.12 13.28 6.29"
      />
      <path
        id="Path_147"
        data-name="Path 147"
        className="cls-4"
        d="M30.46 29.51a7.31 7.31 0 0 0 5.8 3.32c3.19 0 4.48-.59 7-3.32"
      />
      <path
        id="Path_148"
        data-name="Path 148"
        className="cls-4"
        d="M65.46 29.51a7.31 7.31 0 0 0 5.8 3.32c3.19 0 4.48-.59 7-3.32"
      />
    </g>
  </svg>
);

export default Annoyed;
