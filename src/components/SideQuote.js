import React from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import Paranthesis from "../images/Paranthesis.svg"
const SideQuote = () => {
  return (
    <Wrapper>
      <LeftDiv>
        <StyledImg src={Paranthesis} alt="Parenthesis" />
        <LeftContentBody>
          The number of tickets we used to get—they’re all gone.
        </LeftContentBody>
        <Author>— End User Product Manager</Author>
      </LeftDiv>
      <RightDiv>
        <Eyebrow> EYEBROW </Eyebrow>
        <Header>H3 Title Case</Header>
        <RightContentBody>
          Lorem ipsum eget nunc scelerisque viverra mauris in aliquam sem
          fringilla ut morbi tincidunt augue interdum velit euismod in
          pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat in ante metus dictum at tempor commodo
          ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at
          quis risus sed vulputate odio ut enim blandit volutpat maecenas
          volutpat.
        </RightContentBody>
        <ButtonCTA>Learn more</ButtonCTA>
      </RightDiv>
    </Wrapper>
  )
}

export default SideQuote
const ButtonCTA = styled.button`
  ${text.bodyMBold}
  border:none;
  background-color: transparent;
  padding: unset;
  margin: unset;
  text-align: unset;
  color: ${colors.primaryOrange};
  width: 6.806vw;
  ${media.fullWidth} {
    width: 98px;
  }

  ${media.tablet} {
    width: 9.57vw;
  }

  ${media.mobile} {
    width: 22.897vw;
  }
`
const RightContentBody = styled.p`
  ${text.bodyM}
  margin:unset;
`

const Header = styled.h3`
  ${text.h3};
  margin: unset;
  ${media.mobile} {
    ${text.h3Mobile}
  }
`
const Eyebrow = styled.p`
  ${text.eyebrow};
  margin: unset;
`

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid lightblue; */
  width: 39.167vw;

  ${media.fullWidth} {
    width: 564px;
  }

  ${media.tablet} {
    width: 45.313vw;
  }

  ${media.mobile} {
    width: 87.85vw;
  }
`
const Author = styled.p`
  ${text.bodyM};
  ${media.mobile} {
    ${text.bodyS}
  }
`
const LeftContentBody = styled.p`
  ${text.bodyXL};
  width: 26.667vw;

  ${media.fullWidth} {
    width: 384px;
  }

  ${media.tablet} {
    width: 32.813vw;
  }

  ${media.mobile} {
    width: 72.897vw;
    ${text.bodyL}
  }
`
const StyledImg = styled.img`
  position: absolute;
  left: 2.222vw;
  top: -2.083vw;
  width: 4.167vw;
  height: 4.167vw;
  ${media.fullWidth} {
    left: 32px;
    top: -30px;
    width: 60px;
    height: 60px;
  }

  ${media.tablet} {
    left: 3.125vw;
    top: -3.125vw;
    width: 5.859vw;
    height: 5.859vw;
  }

  ${media.mobile} {
    left: 7.477vw;
    top: -7.477vw;
    width: 14.019vw;
    height: 14.019vw;
  }
`
const LeftDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f4f7;
  width: 31.111vw;
  border-radius: 0.833vw;
  padding: 2.778vw 2.222vw;

  ${media.fullWidth} {
    width: 448px;
    border-radius: 12px;
    padding: 40px 32px 0px 32px;
  }

  ${media.tablet} {
    width: 39.063vw;
    border-radius: 1.172vw;
    padding: 3.906vw 3.125vw;
  }

  ${media.mobile} {
    width: 87.85vw;
    border-radius: 5.607vw;
    padding: 9.346vw 7.477vw;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 9.167vw;
  padding: 5.556vw 0;
  ${media.fullWidth} {
    gap: 132px;
    padding: 80px 0;
  }

  ${media.tablet} {
    gap: 7.813vw;
    padding: 5.859vw 0;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 14.019vw;
    padding: 40px 26px;
  }
`
