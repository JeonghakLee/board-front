import { Button, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyAppBar from "./AppBar";
import Container from "./Container";
import PostsTable from "./PostsTable";
import Section from "./Section";

const Board: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleClick = () => {
    navigate("/write");
  };
  return (
    <Section>
      <div style={{ float: "right" }}>
        <Button onClick={handleClick}>글작성하기</Button>
      </div>
      <PostsTable />
      <Stack spacing={2} sx={{ mt: 1 }}>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination
          sx={{ ".MuiPagination-ul": { justifyContent: "flex-end" } }}
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Section>
  );
};

export default Board;
