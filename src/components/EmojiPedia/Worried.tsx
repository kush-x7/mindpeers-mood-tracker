import * as React from "react";
import { SVGProps } from "react";

const Worried = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 76.2"
    {...props}
  >
    <defs>
      <radialGradient
        id="radial-gradient"
        cx={-1055.34}
        cy={581.61}
        r={2.73}
        gradientTransform="matrix(72 0 0 -37.32 76038.83 21706.38)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e4e4e4" />
        <stop offset={0.13} stopColor="#3372eb" />
        <stop offset={0.2} stopColor="#85868c" />
        <stop offset={0.29} stopColor="#ffa300" />
        <stop offset={0.38} stopColor="#ffa300" />
        <stop offset={1} stopColor="#ffa300" />
      </radialGradient>
      <radialGradient
        id="radial-gradient-2"
        cx={-1070.42}
        cy={577.56}
        r={0.66}
        gradientTransform="matrix(14.12 0 0 -16.18 15149.19 9380.97)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e9f0ff" />
        <stop offset={1} stopColor="#3a74e5" />
      </radialGradient>
      <filter id="blurMe">
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
      <style>
        {
          ".cls-4{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
        }
      </style>
    </defs>
    <g id="_6" data-name={6}>
      <g
        style={{
          filter: "url(#blurMe)",
        }}
      >
        <ellipse
          cx={54}
          cy={44}
          rx={45}
          ry={26.5}
          style={{
            fill: "#f6c878",
          }}
          id="Ellipse_836"
          data-name="Ellipse 836"
        />
      </g>
      <ellipse
        id="Ellipse_828"
        data-name="Ellipse 828"
        cx={54}
        cy={38}
        rx={36}
        ry={38}
        style={{
          fill: "url(#radial-gradient)",
        }}
      />
      <path
        id="Path_15083"
        data-name="Path 15083"
        className="cls-4"
        d="M31.6 23.25a7.28 7.28 0 0 0 6.52 1.48c3.05-.93 4.1-1.87 5.74-5.23"
      />
      <path
        id="Path_15084"
        data-name="Path 15084"
        className="cls-4"
        d="M64.57 19.5a7.31 7.31 0 0 0 4.57 4.88c3 .93 4.45.74 7.69-1.13"
      />
      <path
        id="Path_15080"
        data-name="Path 15080"
        d="M23.57 44a7.06 7.06 0 1 0 14.12 0c0-4.49-7.06-15-7.06-15s-7.06 10.55-7.06 15Z"
        style={{
          fillRule: "evenodd",
          fill: "url(#radial-gradient-2)",
        }}
      />
      <circle id="Ellipse_829" data-name="Ellipse 829" cx={44} cy={38} r={4} />
      <circle id="Ellipse_830" data-name="Ellipse 830" cx={63} cy={38} r={4} />
      <path
        id="Path_15085"
        data-name="Path 15085"
        d="M54 51.1c6.89 0 12.47 2.24 12.47 5S60.89 57.9 54 57.9s-12.47 1-12.47-1.8 5.58-5 12.47-5Z"
      />
    </g>
  </svg>
);

export default Worried;