"use client";

import dynamic from "next/dynamic";

type Props = { children: JSX.Element };

const UnSSRProvider = ({ children }: Props) => {
  return children;
};

export default dynamic(() => Promise.resolve(UnSSRProvider), {
  ssr: false,
});
