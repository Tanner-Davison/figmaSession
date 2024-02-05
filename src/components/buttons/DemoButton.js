import React from "react";

import styled from "styled-components";
import media from "styles/media";
import colors from "styles/colors";
import text from "styles/text";

const DemoButton = ({ children, bgFill }) => {
  return (
    <LinkWrapper href="/demo">
      <Button $bgfill={bgFill}>
        <ButtonText>{children}</ButtonText>
      </Button>
    </LinkWrapper>
  );
};

const ButtonText = styled.p`
  ${text.m1};

  ${media.fullWidth} {
  }

  ${media.tablet} {
    ${text.buttonL};
  }

  ${media.mobile} {
    ${text.buttonL};
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  text-transform: uppercase;
  color: ${(props) => (props.$bgfill ? "white" : "black")};
  height: 2.5vw;
  border: 0.139vw solid ${colors.primaryOrange};
  border-radius: 1.944vw;
  padding: 0.694vw 1.111vw;
  background-color: ${(props) =>
    props.$bgfill ? colors.primaryOrange : "unset"};

  ${media.hover} {
    &&:hover {
      background-color: ${colors.primaryOrange};
      color: ${colors.white};
      transition-duration: 350ms;
    }
  }

  ${media.fullWidth} {
    height: 36px;
    border: 2px solid ${colors.primaryOrange};
    border-radius: 28px;
    padding: 10px 16px;
  }

  ${media.tablet} {
    border-radius: 2.734vw;
    padding: 0.977vw 1.563vw;
    height: 3.516vw;
    border: 2px solid ${colors.primaryOrange};
  }

  ${media.mobile} {
    border-radius: 6.542vw;
    padding: 2.336vw 3.738vw;
    height: 8.411vw;
    border: 2px solid ${colors.primaryOrange};
  }
`;

const LinkWrapper = styled.a``;

export default DemoButton;
