import React from "react"

import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { ReactComponent as Arrow } from "../../images/PlayArrow.svg"

const GlobalButton = ({ children, play, fill, outline, href, demo, nav }) => {
  return (
    <ButtonLink href={demo ? "/demo" : href}>
      <ButtonWrapper play={play} $fill={fill} outline={outline} nav={nav}>
        {play ? <PlayArrow /> : children}
      </ButtonWrapper>
    </ButtonLink>
  )
}

export default GlobalButton

const variant = {
  play: `
    border-radius: 50%;
    background-color: rgba(245, 244, 247, .4);

    ${media.hover} {
      &&:hover {
        border: 1px solid white;
      }
    }

    ${media.fullWidth} {
      width: 60px;
      height: 60px;
    }
    ${media.desktop} {
      width: 4.167vw;
      height: 4.167vw;
    }
    ${media.tablet} {
      
    }
    ${media.mobile} {
      
    }
  `,
  fill: `
  ${text.buttonL};
  background-color: ${colors.primaryOrange};
  color: white;
  width: max-content;

    &&:hover {
      cursor: pointer;
      background-color: white;
      color: ${colors.primaryOrange};
      transition-duration: 350ms;
    }

  ${media.fullWidth} {
    height: 42px;
    border-radius: 28px;
    padding: 0px 30px;
    border: 1px solid ${colors.primaryOrange};
  }
  ${media.desktop} {
    height: 2.917vw;
    border-radius: 1.944vw;
    padding: 0vw 2.083vw;
    border: 0.069vw solid ${colors.primaryOrange};
  }
  ${media.tablet} {
    border-radius: 2.734vw;
    padding: 0.977vw 1.563vw;
    height: 3.516vw;
    border: 0.195vw solid ${colors.primaryOrange};
  }
  
  ${media.mobile} {
    ${text.bodyXSBold};
    border-radius: 6.542vw;
    padding: 2.336vw 3.738vw;
    height: 9.346vw;
    border: 0.467vw solid ${colors.primaryOrange};
  }
`,
  outline: `
  ${text.buttonL};
  background-color: white;
  color: ${colors.primaryOrange};
  width: max-content;

    &&:hover {
      cursor: pointer;
      background-color: ${colors.primaryOrange};
      color: white; 
      transition-duration: 350ms;
    }

  ${media.fullWidth} {
    height: 42px;
    border-radius: 28px;
    border: 1px solid ${colors.primaryOrange};
    padding: 0px 30px;
  }
  ${media.desktop} {
    height: 2.917vw;
    border-radius: 1.944vw;
    border: 0.069vw solid ${colors.primaryOrange};
    padding: 0vw 2.083vw;
  }
  ${media.tablet} {
    border-radius: 2.734vw;
    padding: 0.977vw 1.563vw;
    height: 3.516vw;
    border: 0.098vw solid ${colors.primaryOrange};
  }
  ${media.mobile} {
    border-radius: 6.542vw;
    padding: 2.336vw 3.738vw;
    height: 9.346vw;
    border: 0.234vw solid ${colors.primaryOrange};
  }
`,
  nav: `
  ${text.m1};
  background-color: white;
  color: black;
  width: max-content;

    &&:hover {
      cursor: pointer;
      background-color: ${colors.primaryOrange};
      color: white; 
      transition-duration: 350ms;
    }

  ${media.fullWidth} {
    padding: 0px 18px;
    height: 36px;
    border-radius: 28px;
    border: 2px solid ${colors.primaryOrange};
  }
  ${media.desktop} {
    padding: 0px 1.25vw;
    height: 2.5vw;
    border-radius: 1.944vw;
    border: 0.139vw solid ${colors.primaryOrange};
  }
  ${media.tablet} {
    padding: 0vw 1.758vw;
    height: 3.516vw;
    border-radius: 2.734vw;
    border: 0.195vw solid ${colors.primaryOrange};
  }
  ${media.mobile} {
    padding: 0vw 4.206vw;
    width: 41.355vw;
    height: 8.411vw;
    border-radius: 6.542vw;
    border: 0.467vw solid ${colors.primaryOrange};
  }
`,
}

const PlayArrow = styled(Arrow)`
  width: 1.5vw;
  height: 2vw;

  ${media.fullWidth} {
    width: 22px;
    height: 29px;
  }

  ${media.tablet} {
    width: 2.148vw;
    height: 2.832vw;
  }

  ${media.mobile} {
    width: 5.14vw;
    height: 6.776vw;
  }
`
const ButtonLink = styled.a`
  color: unset;
`
const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.play
      ? `${variant.play}`
      : props.$fill
      ? `${variant.fill}`
      : props.outline
      ? `${variant.outline}`
      : props.nav
      ? `${variant.nav}`
      : "display: none"};
`
