import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  width: 60vw;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export default Layout;
