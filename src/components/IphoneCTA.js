import React , {useEffect}from "react"
import styled from "styled-components"
import media from "../styles/media"
import colors from "../styles/colors"
import text from "../styles/text"
import {pageData} from "./content/IphonePageData"
import { gsap } from "gsap"

const IphoneCTA = () => {
  const textData = pageData[0].mainContent
  const images = pageData[1].images
  const {iphoneData} = pageData[2]
  const iHeadline = iphoneData.headline.split(" ")
    useEffect(()=>{
        const IphoneBody = document.querySelectorAll('.iphoneBody')
        const IphoneHeader = document.querySelectorAll('.iphoneHeader')
        const IphoneBg =document.querySelectorAll('.iphoneBackground')
        const Iphone = document.querySelectorAll('.iphoneAsset');
        const FirstWord = document.getElementsByClassName('firstWord')
        const SecondWord = document.getElementsByClassName('secondWord')
        const breakMe = document.querySelectorAll('.breakMe');
        gsap.set(Iphone, {yPercent: 300, rotate: 180})
        gsap.set(IphoneBg, {scale: -1,opacity:0})
        gsap.set(IphoneBody, {xPercent:300})
        gsap.set(FirstWord,{xPercent:-200})
        gsap.set(SecondWord, {xPercent: 200})
        const onStart = gsap.timeline({paused: false})
        onStart.to(Iphone, {yPercent: 0, rotate: 360,duration:2})
        onStart.to(IphoneBg, {scale:1,opacity:1, duration: 1, ease: 'smooth'},'-=1.3')
        onStart.to(FirstWord,{xPercent:0,duration:1.3, ease: 'back.out'},'-=1.5')
        onStart.to(SecondWord,{xPercent:0,duration:1.3, ease: 'back.out'},'<')
        onStart.to(IphoneBody, {xPercent:0, duration:1.3},'<')
    },[])
  const newHeadline = iHeadline.map((word, index) => {
    return (
      <IphoneHeader
      className={index=== 0? "firstWord": "secondWord"}
        style={{
          color: index === 0 ? "white" : `${colors.primaryOrange}`}}>
        {word}
      </IphoneHeader>
    )
  })
  console.log(iHeadline)
  console.log(images)

  return (
    <Wrapper>
      <Background $bgImage={images.backgroundImg}>
        <MainContentWrapper
          className={"breakMe"}
          $bgImage={images.textBackground}>
          <MainContent>
            <Eyebrow>{textData.eyebrow}</Eyebrow>
            <Header>{textData.headline}</Header>
            <Body>{textData.body}</Body>
            <Link>{textData.link}</Link>
          </MainContent>
        </MainContentWrapper>
        <IphoneAsset className={"iphoneAsset"} $bgImage={images.iphoneAsset}>
          <IphoneBackgroundImg
            className={"iphoneBackground"}
            $bgImage={images.IphoneBackground}>
            <IphoneHeaderWrapper className={"iphoneHeader"}>
              {newHeadline}
            </IphoneHeaderWrapper>
            <IphoneBodyWrapper className={"iphoneBody"}>
              <IphoneBody>{iphoneData.body}</IphoneBody>
            </IphoneBodyWrapper>
          </IphoneBackgroundImg>
        </IphoneAsset>
      </Background>
    </Wrapper>
  )
}

export default IphoneCTA
const IphoneBody = styled.p`
  ${text.bodyM}
  margin: unset;
`
const IphoneBodyWrapper = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  backdrop-filter: blur(7px);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.22) 25%,
    rgba(0, 0, 0, 0.77) 25.43%,
    rgba(0, 0, 0, 0.77) 100%
  );

  border-radius: 1.25vw;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 18.889vw;
  z-index: 50;
`
const IphoneHeader = styled.h2`
  ${text.h2}
  margin:unset;
`
const IphoneHeaderWrapper = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  overflow: hidden;
  gap:0.694vw;
  width: 100%;
  z-index: 100;
`
const IphoneBackgroundImg = styled.div`

  display: flex;
  align-items: center;
  color: ${colors.white};
  justify-content: center;
  flex-direction: column;
  border-radius: 2.083vw;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 24.167vw;
  height: 49.514vw;
  gap: 4.514vw;
  
`
const IphoneAsset = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 3.736vw;
  width: 26.875vw;
  height: 54.861vw;
  z-index:500;
`
const Link = styled.a`
  text-decoration: none;
  ${text.bodyMBold}
  margin:unset;
  margin-top: 1.389vw;
`
const Body = styled.p`
  ${text.bodyM};
  margin: unset;
  color: ${colors.primaryOrange};
`
const Header = styled.h2`
  margin: unset;
  ${text.h2}
  color:${colors.white};
`
const Eyebrow = styled.p`
  ${text.eyebrow}
  margin: unset;
`
const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-repeat: no-repeat;
  background-color:black;
  background-size: 38.368vw 28.074vw;
  width: 38.889vw;
  height: 29.444vw;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: ${colors.white};
  gap: 1.736vw;
  width: 38.889vw;
  padding: 5.451vw 7.083vw 5.123vw 3.047vw;
`
const Background = styled.div`
  display: flex;
  align-items: center;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-repeat: no-repeat;
  background-color: transparent; //maybe change later
  background-size: 100vw 47.792vw;
  background-position: center;
  max-width: 100vw;
  height: 53.472vw;
  gap: 14.306vw;
  padding: 0vw 17.292vw 0vw 7.014vw;
  
  
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 150px 0px;
  overflow: hidden;
`
