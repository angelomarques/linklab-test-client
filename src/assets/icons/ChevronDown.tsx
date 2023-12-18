import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

export const ChevronDown = ({ ...props }: Props) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0.5L4 3.5L7 0.5" />
    </svg>
  );
};
