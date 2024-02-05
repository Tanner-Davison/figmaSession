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
    pageData?.images?.tablet,
    pageData?.images?.mobile
  )

  useEffect(() => {
    let dataIncoming = specifiedData(options[3]);
    setPageData(dataIncoming)
    console.log(pageData)
  }, [pageData])

  return (
    pageData && (
      <Wrapper $bgimg={pageData.id === 'simpleImg' ? imageToUse : ''}>
        <ContentDiv>
          <MainContent>
            <Header>{pageData.headline}</Header>
            <Body>{pageData.body}</Body>
            <DemoButton>
              <ButtonText>{pageData.linkText}</ButtonText>
            </DemoButton>
          </MainContent>
          <ImageContainer>
            {pageData.id === 'withVideo' && (
              <ImageAbsolute  $imgsrc={imageToUse} />
            )}
          {pageData.id === 'withVideo' &&  <ContentImg src={backgroundImg || imageToUse} icon={pageData.id ==='withIcon'}alt={backgroundImg} />}
          {pageData.id === 'withIcon' &&  <ContentImg src={backgroundImg || imageToUse} icon={pageData.id ==='withIcon'}alt={backgroundImg} />}
          
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
  50% {
    transform: rotate(6deg) translateX(10px);
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
    props.$imgsrc ? `url(${props.$imgsrc})` : "unset"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  width: 42.847vw;
  height: 29.583vw;
  z-index: 1;
  animation: ${rotateAnimation} 4s infinite ease-in-out;
`

const ContentImg = styled.img`
position: relative;
  width: ${props => (props.icon ? "33.958vw" : "34.722vw")};
  height: ${props => (props.icon ? "33.958vw" : "19.514vw")};
  z-index: 3;
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42.847vw;
  height: 29.583vw;

  overflow: visible;
  z-index: 1;
`
const ButtonText = styled.p`
cursor: pointer;
${text.bodyMBold}
  margin: unset;
  background-color: ${colors.primaryOrange};
  color: #fff;
  padding: .6vw 1.89vw;
  border-radius: 1.944vw;
`
const DemoButton = styled.div`
  display: inline-flex;
  width: max-content;
`
const Body = styled.p`
  ${text.bodyL}
  margin:unset;
`
const Header = styled.h1`
  ${text.h1}
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2.778vw;
  overflow: visible;
`
const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.556vw;
  
`
const Wrapper = styled.div`
 position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgimg ? `url(${props.$bgimg})` : "unset"};
  background-size: ${props=>(props.$bgimg ? '54.748vw 54.919vw': 'unset')};
  background-repeat:no-repeat;
  background-position:top right;
  padding: 6.944vw 10.278vw;
  background-color: #f5f4f7;
  overflow: visible;
z-index:0;
`
