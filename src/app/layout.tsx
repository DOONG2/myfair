"use client";
import React from "react";
import LayoutRecoil from "./layout.recoil";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "./globals";
import { theme } from "./theme";

const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Global styles={globalStyle} />
        <ThemeProvider theme={theme}>
          <LayoutRecoil>{children}</LayoutRecoil>
        </ThemeProvider>
      </body>
    </html>
  );
}
