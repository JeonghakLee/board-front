import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IPost {
  id: number;
  title: string;
  content: string;
  view_cnt: number;
}

const PostsTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [postList, setPostList] = useState([] as IPost[]);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const fecthPostList = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/board");
        setPostList(data.content);
      } catch (e) {
        null;
      }
    };
    fecthPostList();
  }, []);

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "lightGray",
              color: "#2E3B55",
            }}
          >
            <TableCell>ID</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList.map((row) => (
            <TableRow hover onClick={() => handleClick(row.id)} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.view_cnt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PostsTable;
