import styled from "@emotion/styled";
import colors from "material-colors";
import React from "react";

type Props = {};

const BottomNavbar = (props: Props) => {
  return (
    <Container>
      <Navbar></Navbar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  height: 96px;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 8px ${colors.teal[500] + "25"});
  background: ${colors.teal[500]};
`;

export default BottomNavbar;
