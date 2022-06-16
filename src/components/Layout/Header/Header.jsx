import styled from "styled-components";
import ShowUser from "./ShowUser";

function Header() {

  return (
    <HeaderContainer>
      <h1>linkr</h1>
      <ShowUser />
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: var(--heigth-header);
  padding-inline: 10px;

  background-color: var(--color-2);

  &>h1 {
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
  }

`