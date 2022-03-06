import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import MyAppBar from "./components/AppBar";
import Board from "./components/Board";
import WriteForm from "./components/WriteForm";
import DetailPost from "./components/DetailPost";
import { Container } from "@mui/material";
import ModifyForm from "./components/ModifyForm";

const MainPage: React.FC = () => {
  const panels = useRoutes([
    { path: "modify/:id", element: <ModifyForm /> },
    { path: "write", element: <WriteForm /> },
    { path: "detail/:id", element: <DetailPost /> },
    { path: "board", element: <Board /> },
    { path: "*", element: <Navigate to="/board" /> },
  ]);
  return (
    <>
      <MyAppBar />
      <Container>{panels}</Container>
    </>
  );
};

export default MainPage;
