import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

export const Glass = ({ color = "white", ...props }: Props) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="streamline:ecology-science-erlenmeyer-flask-experiment-lab-flask-science-chemistry-solution"
        clipPath="url(#clip0_1_1823)"
      >
        <path
          id="Vector"
          d="M14.7857 0.821411V10.6786L20.6836 18.1864C20.9709 18.55 21.1498 18.9872 21.2 19.4478C21.2501 19.9085 21.1693 20.3739 20.9669 20.7907C20.7645 21.2075 20.4486 21.5588 20.0556 21.8043C19.6626 22.0498 19.2084 22.1795 18.745 22.1786H4.25502C3.79166 22.1795 3.33741 22.0498 2.94441 21.8043C2.55142 21.5588 2.23559 21.2075 2.03318 20.7907C1.83078 20.3739 1.74999 19.9085 1.80009 19.4478C1.8502 18.9872 2.02916 18.55 2.31645 18.1864L8.21431 10.6786V0.821411M5.75002 0.821411H17.25"
          stroke={color}
          strokeOpacity={color==='white'?"0.75":'1'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1823">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
