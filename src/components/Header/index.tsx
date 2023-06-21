import { useTheme } from "styled-components";
import { Container } from "./styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export function Header() {
  return (
    <>
      <Container>
        <p>nsantos - My menu</p> <HiOutlineMenuAlt1 size={24} />
      </Container>
    </>
  );
}
