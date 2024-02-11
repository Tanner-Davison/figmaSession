import React, {useEffect, useState} from "react"
import styled from "styled-components"
import media from "../styles/media"
import colors from "../styles/colors"
import text from "../styles/text"
import {pageData} from "./content/IphonePageData"
import {gsap} from "gsap"
import {GSDevTools} from "gsap/GSDevTools"

const IphoneCTA = () => {
  gsap.registerPlugin(GSDevTools)
  const flipTl = gsap.timeline()
  const [phoneFlipped, setPhoneFlipped] = useState(false)
  const useHeadlineIfFlipped = ["User", "Login"]
  const textData = pageData[0].mainContent
  const images = pageData[1].images
  const {iphoneData} = pageData[2]
  const iHeadline = iphoneData.headline.split(" ")
  const handleIphoneClick = () => {
    setPhoneFlipped(true)
    const Iphone = document.querySelectorAll(".iphoneAsset")
    const MainContent = document.querySelectorAll(".iphoneBackground")
    const Header = document.querySelectorAll(".iphoneHeader")
    const PhoneBody = document.querySelectorAll(".iphoneBody")
    const LoginBtn = document.querySelectorAll(".loginBtn")
    flipTl.set(MainContent, {
      backgroundImage: `url(${images.flipImg})`,
      backgroundSize: "100%",
      backgroundPosition: "center",
    })
    flipTl.to(LoginBtn,{yPercent:600, opacity:0, duration:1})
    flipTl.to(Iphone, {rotation: 90, xPercent: -85, scale: 1.5, duration: 1.5},'<')
    flipTl.to([PhoneBody], {yPercent: 400, duration: 2}, "<")
    flipTl.to([Header],{yPercent: 350, xPercent: -35, rotation: -90, duration: 1},"<")
    return
    }
    const handleBack =()=>{
    setPhoneFlipped(false)
    const flipDiv = document.querySelectorAll('.flipDiv') 
    const Iphone = document.querySelectorAll(".iphoneAsset")
    const MainContent = document.querySelectorAll(".iphoneBackground")
    const Header = document.querySelectorAll(".iphoneHeader")
    const PhoneBody = document.querySelectorAll(".iphoneBody")
    const SubmitBtn = document.querySelectorAll('.submitBtn')
    const flipTlBack = gsap.timeline({paused:false });
    const LoginBtn = document.querySelectorAll(".loginBtn")

    flipTlBack.to(Iphone, {rotation:360, xPercent: 0, scale: 1, duration: 1.5},'<')
    flipTlBack
      .to(flipDiv, {xPercent: 0, yPercent: -500, opacity: 0, duration: 2},'<')
  
    flipTlBack.to(SubmitBtn,{yPercent:-500, duration:1},'<')
    flipTlBack.set(
     MainContent,
     {
       backGroundSize: "100%",
       backgroundImage: `url(${images.IphoneBackground})`,
       duration: 1,
     },
     "<"
   )
  flipTlBack.to([PhoneBody], {yPercent: 0, duration: 1},'<')
  flipTlBack.to( [Header],{yPercent:0, xPercent: 0, rotation: 0, duration: 1},'<')
  flipTlBack.to(LoginBtn,{yPercent:0,opacity:1, duration:1},'<')
 
    return
    }
  useEffect(() => {

    const IphoneBody = document.querySelectorAll(".iphoneBody")
    const IphoneHeader = document.querySelectorAll(".iphoneHeader")
    const IphoneBg = document.querySelectorAll(".iphoneBackground")
    const Iphone = document.querySelectorAll(".iphoneAsset")
    const FirstWord = document.getElementsByClassName("firstWord")
    const SecondWord = document.getElementsByClassName("secondWord")
    gsap.set(Iphone, {yPercent: 400, rotate: 180})
    gsap.set(IphoneBg, {scale: -1, opacity: 0})
    gsap.set(IphoneBody, {yPercent: 300})
    gsap.set(FirstWord, {xPercent: -200}) 
    gsap.set(SecondWord, {xPercent: 200})
    const onStart = gsap.timeline({paused: false})
    onStart.to(Iphone, {yPercent: 0, rotate: 360, duration: 2})
    onStart.to(IphoneBg,{scale: 1, opacity: 1, duration: 1, ease: "smooth"},"-=1.3")
    onStart.to(FirstWord, {xPercent: 0, duration: 1.3, ease: "back.out"}, "-=1")
    onStart.to(SecondWord, {xPercent: 0, duration: 1.3, ease: "back.out"}, "<")
    onStart.to(IphoneBody, {yPercent: 0, duration: 1.3}, "<")
  }, [])
  const flippedHeadline = useHeadlineIfFlipped.map((word, index) => 
      <IphoneHeader key={index} className={index === 0 ? "firstWordFlipped" : "secondWordFlipped"}
        style={{ color: index === 0 ? "white" : `${colors.primaryOrange}`}}>
        {word}
      </IphoneHeader>
      )
  const newHeadline = iHeadline.map((word, index) => 
      <IphoneHeader key={index} className={index === 0 ? "firstWord" : "secondWord"} 
      style={{color: index === 0 ? "white" : `${colors.primaryOrange}`,}}>
        {word}
      </IphoneHeader>
  )

  return (
    <Wrapper>
      <Background $bgImage={images.backgroundImg}>
        <MainContentWrapper
          className={"allPhoneContent"}
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
            {phoneFlipped && (
              <IphoneFlipDiv className={"flipDiv"}>
                <StyledInputDiv>
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" name="username" />
                </StyledInputDiv>
                <StyledInputDiv>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" name="password" id="password" />
                </StyledInputDiv>
                <LoginButtons>
                  <SubmitButton
                    className={"submitBtn"}
                    onClick={() => {
                      return handleBack()
                    }}
                    $back={"back"}>
                    Back
                  </SubmitButton>
                  <SubmitButton className={"submitBtn"}>Login</SubmitButton>
                </LoginButtons>
              </IphoneFlipDiv>
            )}
            <IphoneHeaderWrapper className={"iphoneHeader"}>
              {phoneFlipped && flippedHeadline}
              {!phoneFlipped && newHeadline}
            </IphoneHeaderWrapper>
            <IphoneBodyWrapper className={"iphoneBody"}>
              <IphoneBody>{iphoneData.body}</IphoneBody>
            </IphoneBodyWrapper>
            <SubmitButtonLogin
            className={'loginBtn'}
              onClick={() => {
                setPhoneFlipped(true)
                return handleIphoneClick()
              }}>
              Login
            </SubmitButtonLogin>
          </IphoneBackgroundImg>
          <BlackBox/>
        </IphoneAsset>
      </Background>
    </Wrapper>
  )
}

export default IphoneCTA
const SubmitButtonLogin = styled.button`
  cursor: pointer;
  ${text.bodyMBold};
  border: none;
  background-color: transparent;
  border-radius: 0.456vw;
  border: 2px solid white;
  color: white;
  margin-top: 1.042vw;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
const SubmitButton = styled.button`
cursor:pointer;
${text.bodyMBold};
border: none;
background-color: transparent;
border-radius:0.456vw;
border:${props => props.$back ? `2px solid ${colors.primaryOrange}`: '2px solid white'};
color:${props => props.$back ? `${colors.primaryOrange}`: 'white'};
margin-top:1.042vw;
transition:transform .4s ease-in-out;
align-self: flex-end;
&:hover{
    transform:scale(1.1);
}
`
const LoginButtons =styled.div`
display: flex;
width:fit-content;
padding:0.208vw;
align-self: flex-end;
gap:0.694vw;
`
const Label = styled.label`
  ${text.bodyMBold};
  letter-spacing: 1px;
`
const Input = styled.input`
  ${text.bodyM}
  padding-left:0.694vw;
  box-sizing: border-box;
`

const StyledInputDiv = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.389vw;
`
const IphoneFlipDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.694vw;
  height: 18.889vw;
  transform: rotate(270deg);
`
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
  gap: 0.694vw;
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
const BlackBox = styled.div`
position: absolute;
bottom:5px;
display: flex;
width:75%;
border-radius:25px;
height: 10px;
background-color: black;
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
  z-index: 500;
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
  ${text.h2}
  margin: unset;
  color: ${colors.white};
`
const Eyebrow = styled.p`
  ${text.eyebrow}
  margin: unset;
`
const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-color: black;
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
  padding: 5.451vw 2.083vw 5.123vw 3.047vw;
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
  gap: 14.306vw;
  padding: 0vw 17.292vw 0vw 7.014vw;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 150px 0px;
  margin-top: -0.794vw;
  margin-left: -0.794vw;
  overflow: hidden;
  background: ${colors.black};
  width: 100vw;
`
