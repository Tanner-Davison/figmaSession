import React from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import VasionVector from "../../images/VasionVector.webp"
import Twitter from "../../images/Twitter.webp"
import Facebook from "../../images/Facebook.webp"
import LinkedIn from "../../images/LinkedIn.webp"
import footerData from "./footerData"

const Footer = () => {
  const trademarkText =
    "© 2023 PrinterLogic. All Rights Reserved | Privacy Policy | Imprint |Cookies | Legal"
  const companyAddress = "432 S. Tech Ridge Drive, St. George, Utah 84770 USA"

  const logoArray = [Facebook, LinkedIn, Twitter]
  const runLogos = logoArray.map(logo => (
    <SocialLink src={logo} alt={"SocialLogo"} />
  ))

  const allFooterData = footerData.map(section => {
    return (
      <LinkSection key={section.Header}>
        <HeaderTitle>{section.Header}</HeaderTitle>
        {section.Links.map(link => (
          <LinkText>{link}</LinkText>
        ))}
      </LinkSection>
    )
  })
  return (
    <Wrapper>
      <ContentDiv>
        <LeftContent>
          <VectorImage src={VasionVector} alt={"logo"} />
          <SocialCTAWrapper>{runLogos}</SocialCTAWrapper>
        </LeftContent>
        <RightContentWrapper>
         
            <CompAddress>{companyAddress}</CompAddress>
            {allFooterData}
          
        </RightContentWrapper>
      </ContentDiv>
      <TradeMark>{trademarkText}</TradeMark>
    </Wrapper>
  )
}

export default Footer
const LinkText = styled.a`
  cursor: pointer;
  ${text.bodySBold};
  color: ${colors.grey200};
  margin: unset;
  text-decoration: none;
  text-wrap:nowrap;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
const HeaderTitle = styled.p`
  ${text.bodyS};
  color: ${colors.grey25};
  margin: unset;
`
const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 0.508vw;
  ${media.fullWidth} {
    gap: 7px;
  }

  ${media.tablet} {
    gap: 0.754vw;
  }

  ${media.mobile} {
    gap: 1.54vw;
    width: 35.056vw;
  }
`
const CompAddress = styled.p`
  ${text.bodyM};
  color: ${colors.grey200};
  width: 14.931vw;

  ${media.fullWidth} {
    width: 215px;
  }

  ${media.tablet} {
    width: 20.996vw;
  }

  ${media.mobile} {
    width: 42.056vw;
  }
`
const RightContentDiv = styled.div`
  display: flex;
  gap: 3.472vw;
  width: 50vw;
  ${media.fullWidth} {
    gap: 50px;
    width: 720px;
  }

  ${media.tablet} {
    width: 66.992vw;
    gap: 3.906vw;
  }

  ${media.mobile} {
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: left;
    width: 87.85vw;
    gap: 10.019vw;
  }
`
const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.472vw;
  background-color: ${colors.grey750};
  width: 61.181vw;
  border-radius: 1.667vw;
  padding: 2.778vw 5.556vw;
  ${media.fullWidth} {
    width: 881px;
    border-radius: 24px;
    padding: 40px 80px;
    gap: 50px;
  }

  ${media.tablet} {
    width: 74.805vw;
    border-radius: 2.344vw;
    padding: 3.906vw;
  }

  ${media.mobile} {
    width: 96.262vw;
    height: 85.748vw;
    padding: 9.346vw 4.206vw;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: left;
    gap: 10.019vw;
    
  }
`
const SocialLink = styled.img`
  width: 2.222vw;
  height: 2.222vw;
  ${media.fullWidth} {
    width: 32px;
    height: 32px;
  }

  ${media.tablet} {
    width: 3.125vw;
    height: 3.125vw;
  }

  ${media.mobile} {
    width: 7.477vw;
    height: 7.477vw;
  }
`
const SocialCTAWrapper = styled.div`
  display: flex;
  width: 8.611vw;
  gap: 0.972vw;

  ${media.fullWidth} {
    width: 124px;
    gap: 14px;
  }

  ${media.tablet} {
    width: 12.109vw;
    gap: 1.367vw;
  }

  ${media.mobile} {
    width: 31.776vw;
    gap: 4.673vw;
  }
`
const VectorImage = styled.img`
  width: 14.375vw;
  height: 1.944vw;

  ${media.fullWidth} {
    width: 207px;
    height: 28px;
  }

  ${media.tablet} {
    width: 14.063vw;
    height: 1.855vw;
  }

  ${media.mobile} {
    width: 33.645vw;
    height: 4.439vw;
  }
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;

  ${media.fullWidth} {
    width: 216px;
  }

  ${media.tablet} {
    width: 14.453vw;
    height: 20.605vw;
  }

  ${media.mobile} {
    width: 100%;
    height: 4.439vw;
    flex-direction: row;
  }
`
const TradeMark = styled.p`
  ${text.bodyS};
  color: ${colors.grey300};

 
`
const ContentDiv = styled.div`
  display: flex;
  width: 79.792vw;
  height: 15.208vw;
  gap: 3.611vw;
  ${media.fullWidth} {
    width: 1149px;
    height: 219px;
    gap: 52px;
  }

  ${media.tablet} {
    width: 92.188vw;
    height: 21.387vw;
    gap: 2.93vw;
  }

  ${media.mobile} {
    width: 96.262vw;
    height: 99.533vw;
    gap: 6.308vw;
    flex-direction: column;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191d1e;
  height: 29.861vw;
  padding: 5.556vw 10.278vw 2.986vw 10.278vw;
  gap: 3.194vw;

  ${media.fullWidth} {
    height: 430px;
    padding: 80px 148px 43px 148px;
    gap: 46px;
  }

  ${media.tablet} {
    height: 35.059vw;
    padding: 5.859vw 3.906vw 4.813vw 3.906vw;
    gap: 3.125vw;
  }

  ${media.mobile} {
    height: 132.243vw;
    padding: 9.346vw 1.869vw 6.075vw 1.869vw;
    gap: 6.075vw;
  }
`
