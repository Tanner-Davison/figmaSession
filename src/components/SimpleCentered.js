import React, { useState } from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { content } from "./content/simpleCenteredContent"
import CenteredImgLarge from "../images/CenteredImgLarge.webp"
import CenteredImgTablet from "../images/CenteredImgTablet.webp"
import CenteredImgMobile from "../images/CenteredImgMobile.webp"
import useMedia from "../utils/useMedia"

const SimpleCentered = () => {
  const [withImage, setWithImage]= useState(true);
  const [statisticCards, setStatisticCards]=useState(false);

  const currentImg = useMedia(
    CenteredImgLarge,
    CenteredImgLarge,
    CenteredImgTablet,
    CenteredImgMobile
  );
  const handleClick=(layout)=>{
    if(layout === 'text'){
      setWithImage(false);
      setStatisticCards(false);
    } else if(layout === 'img'){
      setStatisticCards(false);
      setWithImage(true);
    }else if(layout === 'stats'){
      setWithImage(false);
      setStatisticCards(true);
    };
    return;
  }
  const statCards = content.stats.options.map((card, index)=>{
    return(
      
          <Card>
              <CustomNumber>{card.percentage}</CustomNumber>
              <StatCardBody>{card.statBody}</StatCardBody>
              <StatsLink>{card.statLinkText}</StatsLink>
          </Card>
    
    )
  })
  return (
    <Wrapper>
      <Controller>
        <Button onClick={() => handleClick("text")}>Text Only</Button>
        <Button onClick={() => handleClick("img")}>Centered Img</Button>
        <Button onClick={() => handleClick("stats")}>Centered Stats</Button>
      </Controller>
      <HeaderDiv>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <Headline>{content.headline}</Headline>
      </HeaderDiv>
      <BodyDiv>
        <Body>{content.body}</Body>
        <Link color={!statisticCards ? `${colors.primaryOrange}` : "#838587"}>
          {content.link}
        </Link>
      </BodyDiv>
      {withImage && <Image src={currentImg} />}
      {statisticCards && <StatsWrapperDiv>{statCards}</StatsWrapperDiv>}
    </Wrapper>
  )
}
export default SimpleCentered
const StatsLink = styled.a `
${text.bodyMBold};
text-decoration: none;
color:${colors.primaryOrange};

`
const StatCardBody = styled.p`
${text.bodyM}
margin:unset;
margin-bottom:1.389vw;
`
const CustomNumber = styled.p`
  font-family: Orbitron;
  font-style: normal;
  margin: unset;
  color: ${colors.primaryOrange};
  font-size: 3.333vw;
  font-weight: 500;
  line-height: 3.333vw;
  margin-bottom: 1.667vw;

  ${media.fullWidth} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 24px;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24.583vw;
  ${media.fullWidth} {
    width: 354px;
  }

  ${media.tablet} {
    width:29.297vw
  }

  ${media.mobile} {
    width:87.85vw;
  }
`
const StatsWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.847vw;
  ${media.fullWidth} {
    gap: 41px;
  }

`
const Image = styled.img`
  width: 63.333vw;
  max-height: 35.556vw;
  min-height: 13.889vw;
  ${media.fullWidth} {
    width: 912px;
    max-height: 512px;
    min-height: 200px;
  }

  ${media.tablet} {
    width: 89.063vw;
    height:43.848vw ;
    max-height: 50vw;
    min-height: 19.531vw;
  }

  ${media.mobile} {
    flex-direction: column;
    width:87.85vw;
    max-height: 49.299vw;
    min-height: 10.514vw;
  }
`
const Link = styled.a`
  ${text.bodyMBold};
  color: ${props=> (props.color)};
  text-decoration: none;
  margin: unset;
`
const Body = styled.p`
  ${text.bodyM};
  margin:unset;
  max-width: unset;
`
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.389vw;
  width: 63.333vw;

  ${media.fullWidth} {
    gap: 20px;
    width: 912px;
  }

  ${media.tablet} {
    width:80.469vw;
  }

  ${media.mobile} {
    width:87.85vw
  }
`
const Headline = styled.h2`
  ${text.h2};
  margin:unset;
`
const Eyebrow = styled.p`
  ${text.eyebrow};
  margin:unset;
`
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 1.667vw;
  ${media.fullWidth} {
    gap: 24px;
  }
  ${media.tablet}{
    width: 92.188vw;
  }

`
const Button = styled.button`
text-decoration: none;
${text.bodyMBold};

${media.mobile}{
  ${text.bodyXSBold}
}
`
const Controller = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  bottom: 1.389vw;
  ${media.fullWidth} {
    gap: 20px;
    bottom: 20px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const Wrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 5.556vw;
  gap: 2.778vw;
  ${media.fullWidth} {
    padding-bottom:5.556vw;
    gap: 40px;
  }

  ${media.tablet} {
    padding-bottom: 7.813vw;
  }

  ${media.mobile} {
    padding:9.346vw 9.346vw 9.346vw 9.346vw;
  }
`
