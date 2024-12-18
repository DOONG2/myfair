import * as React from "react";

function CloseSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        fill="#B9B9B9"
      />
    </svg>
  );
}

const MemoClose = React.memo(CloseSvg);
export default MemoClose;
