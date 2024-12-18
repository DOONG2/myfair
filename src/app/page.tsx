import React from "react";
import TodoUserListPage from "../components/pages/TodouseListPage/TodoUserListPage";
import UnSSRProvider from "../shared/UnSSRProvider";

interface Props {}

const Page = ({}: Props) => {
  return (
    <>
      <UnSSRProvider>
        <TodoUserListPage />
      </UnSSRProvider>
    </>
  );
};

export default Page;
