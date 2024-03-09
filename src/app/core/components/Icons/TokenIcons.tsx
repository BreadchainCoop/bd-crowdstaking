import Image from "next/image";

export function XDAIIcon() {
  return (
    <div className="rounded-full overflow-hidden w-6 h-6">
      <Image src={"/xdai_icon.png"} alt="xdai icon" width="30" height="30" />
    </div>
  );
}

export function BreadIcon() {
  return (
    <div className="rounded-full w-6 h-6 dark:bg-breadgray-rye">
      <svg
        className="w-full h-full"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
      >
        <circle cx="12.5" cy="12.5" r="12" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.4091 5.5C5.80245 5.5 4.5 6.80245 4.5 8.4091C4.5 9.97327 5.73447 11.2491 7.28229 11.3155V19C7.28229 20.3807 8.40158 21.5 9.78229 21.5H15.2171C16.5978 21.5 17.7171 20.3807 17.7171 19V11.3155C19.2652 11.2495 20.5 9.97348 20.5 8.4091C20.5 6.80245 19.1975 5.5 17.5909 5.5H7.4091Z"
          fill="url(#paint0_linear_2140_904)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2140_904"
            x1="6.7"
            y1="18.1"
            x2="18.1"
            y2="8.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D04EC5" />
            <stop offset="1" stopColor="#ED7BC7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
