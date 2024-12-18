import * as React from "react";

function CheckSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.848 5.652a1.2 1.2 0 010 1.697l-11 11a1.2 1.2 0 01-1.697 0l-4.5-4.5a1.2 1.2 0 011.697-1.697L9 15.803 19.15 5.652a1.2 1.2 0 011.697 0z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const MemoCheckSvg = React.memo(CheckSvg);
export default MemoCheckSvg;
