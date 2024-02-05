import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { specifiedData } from "./content/heroContent"
import useMedia from "../utils/useMedia"

const HeroHeader = () => {
  const [pageData, setPageData] = useState()
  const [background, setBackground] = useState("")
  const options = { 1: "withVideo", 2: "simpleImg", 3: "withIcon" }

  const backgroundImg = useMedia(
    pageData?.videoOverlay?.desktop,
    pageData?.videoOverlay?.desktop,
    pageData?.videoOverlay?.tablet,
    pageData?.videoOverlay?.mobile
  )
  const imageToUse = useMedia(
    pageData?.images?.desktop,
    pageData?.images?.desktop,
    pageData?.images?.tablet,
    pageData?.images?.mobile
  )

  useEffect(() => {
    let dataIncoming = specifiedData(options[2])
    setPageData(dataIncoming)
    console.log(pageData)
  }, [pageData])

  return (
    pageData && (
      <Wrapper $bgimg={pageData.id === "simpleImg" ? imageToUse : ""}>
        <ContentDiv>
          <MainContent>
            <Header>{pageData.headline}</Header>
            <Body>{pageData.body}</Body>
            <DemoButton>
              <ButtonText>{pageData.linkText}</ButtonText>
            </DemoButton>
          </MainContent>
          <ImageContainer>
            {pageData.id === "withVideo" && (
              <ImageAbsolute $imgsrc={imageToUse} />
            )}

            {pageData.id === "withVideo" && (
              <ContentImg
                src={backgroundImg}
                icon={pageData.id === "withIcon"}
                alt={backgroundImg}
              />
            )}
            {pageData.id === "withIcon" && (
              <ContentImg
                src={imageToUse}
                $icon={pageData.id === "withIcon"}
                alt={backgroundImg}
              />
            )}
           
          </ImageContainer>
        </ContentDiv>
      </Wrapper>
    )
  )
}

export default HeroHeader
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(0);
  }
  50%{
    transform: rotate(0deg) translateX(-1.336vw) translateY(-1.336vw)
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
`
const ImageAbsolute = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$imgsrc ? `url(${props.$imgsrc})` : `unset`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  width: 42.847vw;
  height: 29.583vw;
  z-index: 1;
  animation: ${rotateAnimation} 4s infinite ease-in-out;
  ${media.fullWidth} {
    width: 617px;
    height: 445px;
  }

  ${media.tablet} {
    background-size: contain;
    width: 50.488vw;
    height: 42.871vw;
  }

  ${media.mobile} {
    width: 93.925vw;
    height: 93.925vw;
    background-size:contain;
    background-position: bottom right;
  }
`

const ContentImg = styled.img`
  position: relative;
  width: ${props => (props.$icon ? "33.958vw" : "34.722vw")};
  height: ${props => (props.$icon ? "33.958vw" : "19.514vw")};
  z-index: 3;
  ${media.fullWidth} {
    width: ${props => (props.$icon ? "489px" : "500px")};
    height: ${props => (props.$icon ? "489px" : "281px")};
  }

  ${media.tablet} {
    width: ${props => (props.$icon ? "47.754vw" : "45.313vw")};
    height: ${props => (props.$icon ? "47.754vw" : "27.441vw")};
  }

  ${media.mobile} {
    width: ${props => (props.$icon ? "87.85vw" : "87.85vw")};
    height: ${props => (props.$icon ? "87.85vw" : "53.271vw")};
  }
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 42.847vw;
  height: 29.583vw;
  z-index: 1;
  ${media.fullWidth} {
    width: 617px;
    height: 426px;
    z-index: 1;
  }

  ${media.tablet} {
    width: 60.254vw;
    height: 41.602vw;
  }

  ${media.mobile} {
    width: 105.841vw;
    height: 73.131vw;
  }
`
const ButtonText = styled.p`
  cursor: pointer;
  ${text.bodyMBold}
  margin: unset;
  background-color: ${colors.primaryOrange};
  color: #fff;
  padding: 0.625vw 1.875vw;
  border-radius: 1.944vw;
  ${media.fullWidth} {
    padding: 9px 27px;
    border-radius: 28px;
  }

  ${media.tablet} {
    padding: 0.879vw 2.637vw;
    border-radius: 2.734vw;
  }

  ${media.mobile} {
    padding: 2.103vw 6.308vw;
    border-radius: 6.542vw;
  }
`
const DemoButton = styled.div`
  display: inline-flex;
  width: max-content;
`
const Body = styled.p`
  ${text.bodyL}
  margin:unset;
  ${media.mobile}{
    ${text.bodyL}
  }
`
const Header = styled.h1`
  ${text.h1}
  ${media.mobile}{
${text.h1Mobile}
  }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: hidden;
  gap: 2.778vw;
  ${media.fullWidth} {
    gap: 40px;
  }

  ${media.tablet} {
    gap: 3.906vw;
  }

  ${media.mobile} {
    gap:7.477vw;
  }
`
const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.556vw;
  ${media.fullWidth} {
    gap: 80px;
  }

  ${media.tablet} {
    gap: 3.906vw;
  }

  ${media.mobile} {
    flex-direction: column-reverse;
    gap:1.869vw;
  }
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgimg ? `url(${props.$bgimg})` : "unset"};
  background-size: ${props => (props.$bgimg ? "54.748vw 54.919vw" : "unset")};
  background-repeat: no-repeat;
  background-position: top right;
  padding: 6.944vw 10.278vw;
  background-color: #f5f4f7;
  overflow: hidden;
  z-index: 0;
  ${media.fullWidth} {
    padding: 100px 148px;
  }

  ${media.tablet} {
    padding: 3.906vw 5.859vw;
  }

  ${media.mobile} {
    padding:14.019vw 6.075vw;
  }
`
