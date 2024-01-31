import React, { useEffect, useState } from "react"
import styled from "styled-components"
import colors from "styles/colors"
import media from "styles/media"
import text from "styles/text"
import CardBackgroundImg from "../images/CardBackgroundImg.webp"
import LargeQuoteBg from "../images/LargeQuoteBg.webp"
import LightThemeLogo from "../images/LightThemeLogo.webp"
import LogoRightMobile from "../images/LogoRightMobile.webp"
import MobileCardImg from "../images/MobileCardImg.webp"
import MobileLargeImg from "../images/MobileLargeImg.webp"
import TabletBg from "../images/TabletBg.webp"
import TabletCardBg from "../images/TabletCardBg.webp"
import { dummyData as content } from "./content/pullQuoteContent"

const PullQuote = () => {
  const [cardData, setLightData] = useState([])
  const [darktData, setDarkData] = useState([])
  const [cardActive, setCardActive] = useState(null)

  useEffect(() => {
    content.forEach(item => {
      if (item.theme === "dark") {
        setDarkData(item.data)
        item.cardActivated === true ? setCardActive(true) : setCardActive(false)
      } else {
        setLightData(item.data)
      }
    })
  }, [darktData, cardData, cardActive])

  return (
    <OuterMostWrapper cardactive={cardActive}>
      <ComponentWrapper cardactive={cardActive}>
        <AllContentDiv cardactive={cardActive}>
          <PullQuoteContent cardactive={cardActive}>
            <Eyebrow>
              {cardActive ? cardData.eyebrow : darktData.eyebrow}
            </Eyebrow>
            {!cardActive && <BodyLarge>{darktData.body}</BodyLarge>}
            {cardActive && (
              <Body>{media.mobile ? cardData.bodyMobile : cardData.body}</Body>
            )}
            <BottomContent>
              <AuthorContent>
                {cardActive ? cardData.author : darktData.author}
              </AuthorContent>
              <Title>{cardActive ? cardData.title : darktData.title}</Title>
              {!cardActive && <Location>{darktData.address}</Location>}
            </BottomContent>
            {cardActive && <CTALink>See the Case Study {" >"} </CTALink>}
          </PullQuoteContent>
          {cardActive && (
            <SideImg
              src={media.mobile ? LogoRightMobile : LightThemeLogo}
              alt={"Aon-Dynamic-Logo"}
            />
          )}
        </AllContentDiv>
      </ComponentWrapper>
    </OuterMostWrapper>
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
    bottom: 1px;
  }

  ${media.mobile} {
    bottom: -8.168vw;
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
    margin-top: 4.541vw;
    width: 39.453vw;
    height: 32.031vw;
  }

  ${media.mobile} {
    padding: 0vw 0vw 0vw 0vw;
    width: 87.85vw;
    height: 56.075vw;
  }
`
const Location = styled.p`
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
    margin-top: 7.477vw;
  }

  ${media.mobile} {
    margin-top: 14.019vw;
  }
`
const Body = styled.h3`
  ${text.h3};
  margin: unset;
  color: ${colors.white};
  text-indent: -0.39em;

  ${media.mobile} {
    ${text.h3Mobile}
  }
`
const BodyLarge = styled.h2`
  ${text.h2};
  margin: unset;
  color: ${colors.white};
  text-indent: -0.39em;

  ${media.mobile} {
    ${text.h3Mobile}
  }
`
const Eyebrow = styled.p`
  ${text.eyebrow};
  margin: unset;
  color: ${colors.white};
  margin-bottom: 3.333vw;
  ${media.fullWidth} {
    margin-bottom: 48px;
  }
`
const PullQuoteContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.cardactive ? "47.222vw" : "71.389vw")};
  ${media.fullWidth} {
    width: ${props => (props.cardactive ? "680px" : "1028px")};
  }

  ${media.tablet} {
    width: ${props => (props.cardactive ? "42.969vw" : "79.199vw")};
  }

  ${media.mobile} {
    width: ${props => (props.cardactive ? "86.916vw" : "87.383vw")};
  }
`
const AllContentDiv = styled.div`
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
    justify-content: space-between;
    width: ${props => (props.cardactive ? "970px" : "36.523vw")};
    height: ${props => (props.cardactive ? "57.324vw" : "50.391vw")};
    gap: ${props => (props.cardactive ? "9.473vw" : "unset")};
  }

  ${media.mobile} {
    justify-content: space-between;
    flex-direction: column-reverse;
    width: ${props => (props.cardactive ? "87.85vw" : "75.293vw")};
    height: ${props => (props.cardactive ? "71.028vw" : "75.293vw")};
    gap: ${props => (props.cardactive ? "5.477vw" : "unset")};
  }
`
const ComponentWrapper = styled.div`
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: ${props => (props.cardactive ? "row" : "column")};
  background-image: ${props =>
    props.cardactive ? `url(${CardBackgroundImg})` : `url(${LargeQuoteBg})`};
  background-size: ${props => (props.cardactive ? "cover" : "contain")};
  width: 88.889vw;
  height: ${props => (props.cardactive ? "34.792vw" : "49.931vw")};
  padding: ${props =>
    props.cardactive ? "5.556vw 4.722vw" : "5.556vw 12.778vw 5.556vw 4.722vw"};
  border-radius: 1.667vw;

  ${media.fullWidth} {
    border-radius: 24px;
    width: 1280px;
    height: ${props => (props.cardactive ? "501px" : "719px")};
    padding: ${props =>
      props.cardactive ? "80px 68px" : "80px 184px 80px 68px"};
  }

  ${media.tablet} {
    background-image: ${props =>
      props.cardactive ? `url(${TabletCardBg})` : `url(${TabletBg})`};
    border-radius: 2.344vw;
    width: 94.727vw;
    height: ${props => (props.cardactive ? "52.832vw" : "75.293vw")};
    padding: ${props =>
      props.cardactive
        ? "5.859vw 3.711vw 5.859vw 4.688vw"
        : "5.859vw 11.719vw 5.859vw 4.688vw"};
  }

  ${media.mobile} {
    flex-direction: column-reverse;
    justify-content: space-between;
    background-image: ${props =>
      props.cardactive ? `url(${MobileCardImg})` : `url(${MobileLargeImg})`};
    background-size: contain;
    border-radius: 2.344vw;
    width: 97.262vw;
    height: ${props => (props.cardactive ? "152.804vw" : "143.925vw")};
    padding: ${props =>
      props.cardactive
        ? "4.206vw 4.206vw 14.019vw 4.206vw"
        : "9.346vw 4.206vw 14.019vw 4.673vw"};
  }
`
const OuterMostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5.556vw;
  ${media.fullWidth} {
    padding: 80px;
  }

  ${media.tablet} {
    padding: 5.859vw 2.637vw;
  }

  ${media.mobile} {
    padding: 9.346vw 1.869vw;
  }
`
