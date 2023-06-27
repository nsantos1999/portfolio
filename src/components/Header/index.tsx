"use client";

import { Container } from "./styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconButton } from "../IconButton";

export function Header() {
  return (
    <Container
      initial={{ opacity: 0, width: "0%" }}
      animate={{ opacity: 1, width: "70%" }}
      exit={{ opacity: 0, width: "0%" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <p>nsantos - My menu</p>{" "}
      <IconButton onClick={() => console.log("teste")}>
        <HiOutlineMenuAlt1 size={24} />
      </IconButton>
    </Container>
  );
}
