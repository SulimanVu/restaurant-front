import { SVGProps } from "react";

const SignOutSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 13.5833L17.25 9M17.25 9L12.6667 4.41667M17.25 9H6.25M6.25 0.75H5.15C3.60986 0.75 2.83978 0.75 2.25153 1.04973C1.73408 1.31338 1.31338 1.73408 1.04973 2.25153C0.75 2.83978 0.75 3.60986 0.75 5.15V12.85C0.75 14.3901 0.75 15.1602 1.04973 15.7485C1.31338 16.2659 1.73408 16.6866 2.25153 16.9503C2.83978 17.25 3.60986 17.25 5.15 17.25H6.25"
        stroke="#807D7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SignOutSVG;
