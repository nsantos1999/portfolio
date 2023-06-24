"use client";

import { Container } from "./styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconButton } from "../IconButton";

export function Header() {
  return (
    <>
      <Container>
        <p>nsantos - My menu</p>{" "}
        <IconButton onClick={() => console.log("teste")}>
          <HiOutlineMenuAlt1 size={24} />
        </IconButton>
      </Container>
    </>
  );
}
