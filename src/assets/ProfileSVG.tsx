import { SVGProps } from "react";

const ProfileSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 9.66659C10.3011 9.66659 12.1666 7.8011 12.1666 5.49992C12.1666 3.19873 10.3011 1.33325 7.99992 1.33325C5.69873 1.33325 3.83325 3.19873 3.83325 5.49992C3.83325 7.8011 5.69873 9.66659 7.99992 9.66659ZM7.99992 9.66659C4.31802 9.66659 1.33325 11.9052 1.33325 14.6666M7.99992 9.66659C11.6818 9.66659 14.6666 11.9052 14.6666 14.6666"
        stroke="#807D7E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ProfileSVG;
