import { SVGProps } from "react";

const IncrementSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Icon"
        d="M5.86181 1.37939V10.6206M10.4824 6L1.24121 6"
        stroke="#3C4242"
        strokeWidth="1.03964"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IncrementSVG;
