import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";

const WriteForm: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (titleRef.current && contentRef.current) {
      const currTitle = titleRef.current.value;
      const currContent = contentRef.current.value;
      console.log(currContent, currTitle);
      axios
        .post("http://localhost:8080/api/board", {
          title: currTitle,
          content: currContent,
        })
        .then(function (response) {
          if (response) {
            console.log(response);
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <Section>
        <Stack spacing={2}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography>제목</Typography>
            <TextField inputRef={titleRef} />
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography>내용</Typography>
            <TextField inputRef={contentRef} />
          </Stack>
          <Button onClick={handleSave}>저장하기</Button>
        </Stack>
      </Section>
    </Container>
  );
};

export default WriteForm;
