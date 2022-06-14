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

  width: 100%;
  height: 2.5rem;
  padding: 10px;

  background-color: var(--color-2);

  &>h1 {
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
  }

`