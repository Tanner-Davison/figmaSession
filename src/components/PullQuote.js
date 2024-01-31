import React, { useEffect, useState } from "react"

import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { dummyData } from "./content/pullQuoteContent"
import CardBackgroundImg from "../images/CardBackgroundImg.webp"
import LargeQuoteBg from "../images/LargeQuoteBg.webp"
import LightThemeLogo from "../images/LightThemeLogo.webp"

const PullQuote = () => {
  const [cardData, setLightData] = useState([])
  const [darktData, setDarkData] = useState([])
  const [cardActive, setCardActive] = useState(null)

  useEffect(() => {
    dummyData.forEach(item => {
      if (item.theme === "dark") {
        setDarkData(item.data)
        item.cardActivated === true ? setCardActive(true) : setCardActive(false)
      } else {
        setLightData(item.data)
      }
    })
    console.log(darktData)
    console.log(cardData)
    console.log(cardActive)
  }, [darktData, cardData, cardActive])

  return (
    <Wrapper cardactive={cardActive}>
      <PullQuoteWrapper cardactive={cardActive}>
        <ContentWrapper cardactive={cardActive}>
          <QuoteContent cardactive={cardActive}>
            <StyledEyebrow>
              {cardActive ? cardData.eyebrow : darktData.eyebrow}
            </StyledEyebrow>
            {!cardActive && <BodyL>{darktData.body}</BodyL>}
            {cardActive && <Body>{cardData.body}</Body>}
            <BottomContent>
              <AuthorContent>
                {cardActive ? cardData.author : darktData.author}
              </AuthorContent>
              <Title>{cardActive ? cardData.title : darktData.title}</Title>
              {!cardActive && <Address>{darktData.address}</Address>}
            </BottomContent>
            {cardActive && <CTALink>See the Case Study</CTALink>}
          </QuoteContent>
          {cardActive && <SideImg src={LightThemeLogo} alt={"Aon Logo"} />}
        </ContentWrapper>
      </PullQuoteWrapper>
    </Wrapper>
  )
}

export default PullQuote
const CTALink = styled.button`
  position: absolute;
  background: none;
  border: none;
  padding: unset;
  margin: unset;
  color: ${colors.primaryOrange};
  ${text.bodyMBold};
  bottom: -0.208vw;
  ${media.fullWidth} {
    bottom: -3px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const SideImg = styled.img`
  width: 28.056vw;
  height: 22.778vw;
  ${media.fullWidth} {
    width: 404px;
    height: 328px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Address = styled.p`
  ${text.bodyM};
  color: ${colors.white};
`
const Title = styled.p`
  ${text.bodyM};
  color: ${colors.white};
  margin: unset;
`
const AuthorContent = styled.p`
  ${text.bodyMBold};
  color: ${colors.white};
  margin: 0vw;
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4.944vw;
  ${media.fullWidth} {
    margin-top: 71px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Body = styled.h3`
  ${text.h3};
  margin: unset;
  color: ${colors.white};
`
const BodyL = styled.h2`
  ${text.h2};
  margin: unset;
  color: ${colors.white};
`
const StyledEyebrow = styled.p`
  ${text.eyebrow};
  margin: unset;
  color: ${colors.white};
  margin-bottom: 3.333vw;
  ${media.fullWidth} {
    margin-bottom: 48px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const QuoteContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.cardactive ? "47.222vw" : "71.389vw")};
  ${media.fullWidth} {
    width: ${props => (props.cardactive ? "680px" : "1028px")};
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => (props.cardactive ? "79.444vw" : "71.389vw")};
  height: ${props => (props.cardactive ? "24.653vw" : "38.819vw")};
  gap: ${props => (props.cardactive ? "4.167vw" : "unset")};
  ${media.fullWidth} {
    width: ${props => (props.cardactive ? "1144px" : "1028px")};
    height: ${props => (props.cardactive ? "355px" : "559px")};
    gap: ${props => (props.cardactive ? "60px" : "unset")};
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const PullQuoteWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.cardactive ? "row" : "column")};
  background-image: ${props =>
    props.cardactive ? `url(${CardBackgroundImg})` : `url(${LargeQuoteBg})`};
  background-size: ${props => (props.cardactive ? "cover" : "contain")};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.667vw;
  width: 88.889vw;
  height: ${props => (props.cardactive ? "34.792vw" : "49.931vw")};
  padding: ${props =>
    props.cardactive ? "5.556vw 4.722vw" : "5.556vw 12.778vw 5.556vw 4.722vw"};
  ${media.fullWidth} {
    border-radius: 24px;
    width: 1280px;
    height: ${props => (props.cardactive ? "501px" : "719px")};
    padding: ${props =>
      props.cardactive ? "80px 68px" : "80px 184px 80px 68px"};
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5.556vw;
  ${media.fullWidth} {
    padding: 80px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
