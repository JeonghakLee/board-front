import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";

const ModifyForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (titleRef.current && contentRef.current) {
      const currTitle = titleRef.current.value;
      const currContent = contentRef.current.value;
      axios
        .put(`http://localhost:8080/api/board/${id}`, {
          title: currTitle,
          content: currContent,
        })
        .then(function (response) {
          if (response) {
            console.log(response);
            navigate(`/detail/${id}`);
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
          <Button onClick={handleSave}>수정완료</Button>
        </Stack>
      </Section>
    </Container>
  );
};

export default ModifyForm;
