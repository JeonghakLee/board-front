import { Box, Button, Container, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Section from "./Section";

interface IPost {
  id: number;
  title: string;
  content: string;
}

const DetailPost: React.FC = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({} as IPost);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fecthPostList = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/board/${id}`
        );
        setPost(data);
        console.log({ data });
      } catch (e) {
        null;
      }
    };
    fecthPostList();
  }, [id]);

  const handleDelete = () => {
    // noti 추가

    axios
      .delete(`http://localhost:8080/api/board/${id}`)
      .then(function (response) {
        if (response) {
          console.log(response);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleModify = () => {
    console.log("수정");
    navigate(`/modify/${id}`);

  };
  return (
    <Container>
      <Section>
        <Stack>
          <div>
            <Button sx={{ float: "right" }} onClick={handleModify}>
              수정
            </Button>
            <Button sx={{ float: "right" }} onClick={handleDelete}>
              삭제
              <DeleteIcon />
            </Button>
          </div>
          {post.content}
        </Stack>
      </Section>
    </Container>
  );
};
export default DetailPost;
