import * as React from "react";
import { SVGProps } from "react";

const UnHappy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 76"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={-760.6}
        y1={580.07}
        x2={-760.07}
        y2={579.13}
        gradientTransform="matrix(72 0 0 -76 54798.83 44088.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#65309f" />
        <stop offset={1} stopColor="#9554da" />
      </linearGradient>
      <filter id="a">
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name={5}>
      <g
        style={{
          filter: "url(#a)",
        }}
      >
        <ellipse
          cx={54}
          cy={42}
          rx={45}
          ry={26.5}
          style={{
            fill: "#6c35a7",
          }}
          data-name="Ellipse 834"
        />
      </g>
      <ellipse
        data-name="Ellipse 473-3"
        cx={54}
        cy={38}
        rx={36}
        ry={38}
        style={{
          fill: "url(#b)",
        }}
      />
      <path
        data-name="Path 152-2"
        d="m25.58 26.94 6.91-.06 9.09.14"
        style={{
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#000",
        }}
      />
      <path
        data-name="Path 153-2"
        d="M81.64 27.07h-7.06l-9.28.29"
        style={{
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#000",
        }}
      />
      <path
        data-name="Path 154"
        d="M61.14 34H46.86a2.24 2.24 0 0 0-2.24 2.23v10.16a9.38 9.38 0 0 0 18.76 0V36.23A2.24 2.24 0 0 0 61.14 34Zm-1.9 17.19a6.32 6.32 0 0 0 .79-1c-.23.33-.56.66-.78 1Zm0 .11-.33.34c0-.12.11-.23.33-.34l-.55.56.11-.11a2 2 0 0 1-.79.56 7.07 7.07 0 0 1-4 1.22 3 3 0 0 1-1-.11 3.74 3.74 0 0 1-1.23-.33c-.34-.11-.56-.22-.89-.34.33.11.55.23.89.34a6.3 6.3 0 0 1-1.68-.89c-.11-.11-.33-.22-.44-.34l-.11-.11a8.09 8.09 0 0 1-2.24-3.23A31.3 31.3 0 0 1 61.14 47a8.54 8.54 0 0 1-1.9 4.36Z"
        style={{
          stroke: "#000",
        }}
      />
    </g>
  </svg>
);

export default UnHappy;
