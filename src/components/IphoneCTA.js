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
  const [isMobile, setIsMobile]=useState(false);
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
    flipTl.to(LoginBtn, {yPercent: 600, opacity: 0, duration: 1})
    flipTl.to(
      Iphone,
      {rotation: 90, xPercent: -85, scale: 1.4, duration: 1.5},
      "<"
    )
    flipTl.to([PhoneBody], {yPercent: 400, duration: 2}, "<")
    flipTl.to(
      [Header],
      {yPercent: 350, xPercent: -35, rotation: -90, duration: 1},
      "<"
    )
    return
  }
  const handleBack = () => {
    setPhoneFlipped(false)
    const flipDiv = document.querySelectorAll(".flipDiv")
    const Iphone = document.querySelectorAll(".iphoneAsset")
    const MainContent = document.querySelectorAll(".iphoneBackground")
    const Header = document.querySelectorAll(".iphoneHeader")
    const PhoneBody = document.querySelectorAll(".iphoneBody")
    const SubmitBtn = document.querySelectorAll(".submitBtn")
    const flipTlBack = gsap.timeline({paused: false})
    const LoginBtn = document.querySelectorAll(".loginBtn")

    flipTlBack.to(
      Iphone,
      {rotation: 360, xPercent: 0, scale: 1, duration: 1.5},
      "<"
    )
    flipTlBack.to(
      flipDiv,
      {xPercent: 0, yPercent: -500, opacity: 0, duration: 2},
      "<"
    )

    flipTlBack.to(SubmitBtn, {yPercent: -500, duration: 1}, "<")
    flipTlBack.set(
      MainContent,
      {
        backGroundSize: "100%",
        backgroundImage: `url(${images.IphoneBackground})`,
        duration: 1,
      },
      "<"
    )
    flipTlBack.to([PhoneBody], {yPercent: 0, duration: 1}, "<")
    flipTlBack.to(
      [Header],
      {yPercent: 0, xPercent: 0, rotation: 0, duration: 1},
      "<"
    )
    flipTlBack.to(LoginBtn, {yPercent: 0, opacity: 1, duration: 1}, "<")

    return
  }
   window.addEventListener("resize", function () {
     const windowWidth = window.innerWidth
     if(windowWidth <=480){
      setIsMobile(true)
     }else{
      isMobile && windowWidth>480 && setIsMobile(false);
     }
     return
   })
  useEffect(() => {
    window.innerWidth<=480 && setIsMobile(true)
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
    onStart.to(
      IphoneBg,
      {scale: 1, opacity: 1, duration: 1, ease: "smooth"},
      "-=1.3"
    )
    onStart.to(FirstWord, {xPercent: 0, duration: 1.3, ease: "back.out"}, "-=1")
    onStart.to(SecondWord, {xPercent: 0, duration: 1.3, ease: "back.out"}, "<")
    onStart.to(IphoneBody, {yPercent: 0, duration: 1.3}, "<")
  }, [])
  const flippedHeadline = useHeadlineIfFlipped.map((word, index) => (
    <IphoneHeader
      key={index}
      className={index === 0 ? "firstWordFlipped" : "secondWordFlipped"}
      style={{color: index === 0 ? "white" : `${colors.primaryOrange}`}}>
      {word}
    </IphoneHeader>
  ))
  const newHeadline = iHeadline.map((word, index) => (
    <IphoneHeader
      key={index}
      className={index === 0 ? "firstWord" : "secondWord"}
      style={{color: index === 0 ? "white" : `${colors.primaryOrange}`}}>
      {word}
    </IphoneHeader>
  ))

  return (
    <Wrapper>
      <Background $bgImage={images.backgroundImg}>

     { !isMobile &&  <MainContentWrapper
          className={"allPhoneContent"}
          $bgImage={images.textBackground}>
          <MainContent>
            <Eyebrow>{textData.eyebrow}</Eyebrow>
            <Header>{textData.headline}</Header>
            <Body>{textData.body}</Body>
            <Link href={"/page-2"}>{textData.link}</Link>
          </MainContent>
        </MainContentWrapper>}

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
                <LoginButtonsDiv>
                  <SubmitButton
                    className={"submitBtn"}
                    onClick={() => {
                      return handleBack()
                    }}
                    $back={"back"}>
                    Back
                  </SubmitButton>
                  <SubmitButton className={"submitBtn"}>Login</SubmitButton>
                </LoginButtonsDiv>
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
              className={"loginBtn"}
              onClick={() => {
                setPhoneFlipped(true)
                return handleIphoneClick()
              }}>
              Login
            </SubmitButtonLogin>
          </IphoneBackgroundImg>
          <BlackBox />
        </IphoneAsset>
      </Background>
    </Wrapper>
  )
}

export default IphoneCTA

const SubmitButton = styled.button`
  cursor: pointer;
  ${text.bodyMBold};
  border: none;
  background-color: transparent;
  border: ${props =>
    props.$back ? `2px solid ${colors.primaryOrange}` : "2px solid white"};
  color: ${props => (props.$back ? `${colors.primaryOrange}` : "white")};
  transition: transform 0.2s ease-in-out;
  align-self: flex-end;
  margin-top: 1.042vw;
  border-radius: 0.456vw;
  &:hover {
    transform: scale(1.1);
    color: ${props => (props.$back ? `${colors.orange500}` : "#049A2C")};
    border: ${props =>
      props.$back ? `2px solid ${colors.orange500}` : "2px solid #049A2C"};
  }
  ${media.fullWidth} {
    margin-top: 15px;
    border-radius: 7px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const LoginButtonsDiv = styled.div`
  display: flex;
  width: fit-content;
  align-self: flex-end;
  box-sizing: border-box;
  padding: 0.208vw;
  gap: 0.694vw;
  ${media.fullWidth} {
    padding: 3px;
    gap: 10px;
  }

  ${media.mobile} {
  }
`
const Label = styled.label`
  ${text.bodyMBold};
  letter-spacing: 1px;
`
const Input = styled.input`
  ${text.bodyMBold}
  padding-left:0.694vw;
  box-sizing: border-box;
  ${media.fullWidth} {
    padding-left: 10px;
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`

const StyledInputDiv = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.389vw;
  ${media.fullWidth} {
    gap: 20px;
  }

  ${media.tablet} {
    gap: 1.389vw;
  }

  ${media.mobile} {
  }
`
const IphoneFlipDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
  gap: 0.694vw;
  height: 18.889vw;
  ${media.fullWidth} {
    gap: 10px;
    height: 272px;
    left: 10%;
  }

  ${media.tablet} {
    gap: 1vw;
    left: 5%;
    height: 18.889vw;
  }

  ${media.mobile} {
  }
`
const SubmitButtonLogin = styled.button`
  cursor: pointer;
  ${text.bodyMBold};
  border: none;
  background-color: transparent;
  border: 0.139vw solid white;
  color: white;
  border-radius: 0.456vw;
  margin-top: 1.042vw;
  transition: transform 0.2s ease-in-out;
  width: 9.766vw;
  background-color: rgba(0, 0, 0, 0.8);
  border: 0.098vw solid ${colors.primaryOrange};
  color: ${colors.primaryOrange};

  &:hover {
    transform: scale(1.09);
  }
  ${media.fullWidth} {
    border-radius: 7px;
    margin-top: 15px;
    width: 141px;
  }

  ${media.tablet} {
    width: 9.766vw;
    background-color: rgba(0, 0, 0, 0.8);
    border: 0.098vw solid ${colors.primaryOrange};
    color: ${colors.primaryOrange};
  }

  ${media.mobile} {
  }
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
  backdrop-filter: blur(0.439vw);
  border-radius: 1.25vw;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.77) 28.43%,
    rgba(0, 0, 0, 0.77) 100%
  );

  box-shadow: 0vw 0.278vw 0.278vw 0vw rgba(0, 0, 0, 0.25);
  z-index: 50;

  border-radius: 1.25vw;
  width: 18.889vw;
  ${media.fullWidth} {
    border-radius: 18px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 272px;
  }

  ${media.tablet} {
    width: 100%;
    padding: 1.172vw;
    box-shadow: 0vw 0.278vw 0.278vw 0vw rgba(0, 0, 0, 0.25);
  }

  ${media.mobile} {
  }
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
  backdrop-filter: blur(0.556vw);
  overflow: hidden;
  gap: 0.694vw;
  width: 100%;
  z-index: 100;
  ${media.fullWidth} {
    gap: 10px;
    width: 100%;
    z-index: 100;
  }

  ${media.mobile} {
  }
`
const IphoneBackgroundImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.white};
  justify-content: center;
  flex-direction: column;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  border-radius: 2.083vw;
  width: 24.167vw;
  height: 49.514vw;
  gap: 4.514vw;
  z-index: 1;

  ${media.fullWidth} {
    border-radius: 30px;
    width: 348px;
    height: 713px;
    gap: 65px;
  }

  ${media.tablet} {
    width: 28.793vw;
    height: 88%;
    background-size: cover;
    gap: 3.8vw;
    border-radius: 2.051vw;
  }

  ${media.mobile} {
  }
`
const BlackBox = styled.div`
  position: absolute;
  display: flex;
  background-color: black;
  bottom: 1vw;
  width: 75%;
  border-radius: 1.736vw;
  height: 0.694vw;
  ${media.fullWidth} {
    bottom: 14px;
    width: 75%;
    border-radius: 25px;
    height: 10px;
  }

  ${media.mobile} {
  }
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
  z-index: 500;
  border-radius: 3.736vw;
  width: 26.875vw;
  height: 54.861vw;
  -webkit-box-shadow: -0.139vw 0.972vw 1.25vw -0.347vw #000000,
    -0.139vw -0.694vw 1.25vw -0.486vw #000000;
  box-shadow: -0.139vw 0.972vw 1.25vw -0.347vw #000000,
    -0.139vw -0.694vw 1.25vw -0.486vw #000000;
  ${media.fullWidth} {
    border-radius: 66px;
    width: 382px;
    height: 774px;
  }

  ${media.tablet} {
    width: 33.493vw;
    height: 68.188vw;
    border-radius: 5.883vw;
  }

  ${media.mobile} {
  }
`
const Link = styled.a`
  text-decoration: none;
  color: white;
  ${text.bodyMBold}
  margin:unset;
  margin-top: 1.389vw;
  ${media.fullWidth} {
    margin-top: 20px;
  }
  ${media.tablet} {
    margin-top: 2.93vw;
  }
`
const Body = styled.p`
  ${text.bodyM};
  margin: unset;
  color: ${colors.primaryOrange};
  width:85%;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: ${colors.white};
  
  gap: 1.736vw;
  width: 38.889vw;

  ${media.fullWidth} {
    gap: 25px;
    width: 560px;
  }

  ${media.tablet} {
    width: 100%;
    gap: 2.441vw;
  }

  ${media.mobile} {
  }
`
const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  background-size: 38.368vw 28.074vw;
  width: 38.889vw;
  height: 29.444vw;
  border-radius: 1.736vw;
  padding: 5.451vw 2.083vw 5.123vw 3.047vw;
  ${media.fullWidth} {
    background-size: 552px 404px;
    width: 560px;
    height: 424px;
    border-radius: 25px;
    padding: 78px 30px 74px 44px;
  }

  ${media.tablet} {
    background-size: 48.145vw 41.016vw;
    width: 40.145vw;
    height: 41.016vw;
    border-radius: 2.441vw;
    padding: 2.93vw;
  }

  ${media.mobile} {
  }
`
const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgImage ? `url(${props.$bgImage})` : "unset"};
  background-repeat: no-repeat;
  background-color: transparent; //maybe change later
  background-position: center;

  background-size: 100vw 49.792vw;
  max-width: 100%;
  gap: 14.306vw;
  padding: 0vw 17.292vw 0vw 7.014vw;
  ${media.fullWidth} {
    background-size: 100% 688px;
    max-width: 1440px;
    gap: 206px;
    padding: 0px 249px 0px 101px;
  }

  ${media.tablet} {
    background-size: 100% 59.961vw;
    min-width: 100vw;
    max-width: 100vw;
    gap: 5.129vw;
    padding: unset;
  }

  ${media.mobile} {
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${colors.white};
  width: 100vw;
  padding: 10.417vw 0;
  margin-top: -0.764vw;
  margin-left: -0.864vw;

  ${media.fullWidth} {
    padding: 150px 0px;
  }

  ${media.tablet} {
    margin-top: -0.764vw;
    margin-left: -0.964vw;
  }

  ${media.mobile} {
  }
`
