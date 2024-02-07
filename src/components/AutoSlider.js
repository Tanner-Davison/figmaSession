import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import {autoSliderData} from "../components/content/AutoSliderData"
import colors from "../styles/colors"
import media from "../styles/media"
import {gsap} from "gsap"
import text from "../styles/text"
import {
  CarouselButtonLeft,
  CarouselButtonRight,
  GlobalLinkButton,
} from "./buttons/Buttons"

const AutoSlider = ({scrollto}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [arrayValue, setArrayValue] = useState([])
  const [restart, setRestart] = useState(false)
  const [width, setWidth] = useState(0 + "%")
  const [width2, setWidth2] = useState(0 + "%")
  const [width3, setWidth3] = useState(0 + "%")
  const viewboxRef = useRef(null)
  let cardCount = 0
  let transCount = 0

  const startGsap = duration => {
    const tl = gsap.timeline({
      paused: false,
      immediateRender:true,
      repeat:true,
    })
    const boxTl = tl.fromTo(
      `.growme`,
      {
        width: 0,
        
      },
      {
        width: 100,
        stagger:5,
        duration:4.5,
        onComplete: () => {
          boxTl.repeatDelay(.5)
        },
      }
    )
  }

  const startTime = () => {
    setTimeout(() => {
      handleClickRight()
    }, 4000)
  }
  const handleClickRight = async () => {
    const target = viewboxRef.current.querySelectorAll(`#cardwrapper`)
    if (transCount === 0) {
      await gsap.to(target, {xPercent: -335, duration: 1, ease:'back.inOut'})
    } else if (transCount === 1) {
      await gsap.to(target, {xPercent: -670, duration: 1 , ease: 'back.inOut'})
    } else if (transCount === 2) {
      await gsap.to(target, {xPercent: 0, duration: 1, ease: "back.inOut"})
    }
    transCount = (transCount + 1) % 3
    return startTime()
  }

  useEffect(() => {
    const target = document.getElementById(`#cardwrapper`)
    gsap.set(target, {xPercent: 0})
    const duration = 4000
    startGsap(duration)
    startTime(duration)
  }, [])

  const runCards = (imgObj, index) => {
    return (
      <Card
        id={`box${cardCount++}`} // Use cardCount instead of index++
        key={index}
        className={`boxcard`}>
        <Image $srcurl={imgObj.img} alt={imgObj.img} />
        <CardTextContentDiv>
          <ContentHeadline>{imgObj.Header}</ContentHeadline>
          <ContentBody>{imgObj.Body}</ContentBody>
        </CardTextContentDiv>
      </Card>
    )
  }

  return (
    <Wrapper>
      <BoxContainer>
        <ViewBox ref={viewboxRef}>
          <CardRelativeWrapper id={"cardwrapper"}>
            {autoSliderData.map(runCards)}
          </CardRelativeWrapper>
        </ViewBox>
      </BoxContainer>
      <Controls>
        <ButtonCustom>
          <ButtonGrowth
            className={"growme"}
            $restart={restart}
            $width={width}
          />
        </ButtonCustom>
        <ButtonCustom $width={width2}>
          <ButtonGrowth
            className={"growme"}
            $restart={restart}
            $width={width2}
          />
        </ButtonCustom>
        <ButtonCustom $width={width3}>
          <ButtonGrowth className={`growme`} />
        </ButtonCustom>
      </Controls>
    </Wrapper>
  )
}

export default AutoSlider
const ButtonGrowth = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px;
  height: 100%;
  background-color: white;
`
const ButtonCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: rgba(0,0,0,1.5);
  border-radius: 10px;
  height: 0.417vw;
  width: 4.306vw;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${colors.grey};
  transition: box-shadow 0.3s ease-in-out;
  margin-top: 2.778vw;
  gap: 1.389vw;
  border-radius: 1vw;

  ${media.mobile} {
    gap: 1.402vw;
    border-radius: 3.505vw;
  }
`
const StyledData = styled.p`
 
`
const ContentBody = styled.p`
  ${text.bodyM}
  margin: unset;
`
const ContentHeadline = styled.h5`
  ${text.h5}
  margin:unset;
`
const CardTextContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`
const Image = styled.div`
  display: flex;
  background-image: ${props =>
    props.$srcurl ? `url(${props.$srcurl})` : `unset`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 13.75vw;
  height: 17.917vw;
`
//////Wrapper for all content being animated
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  background: linear-gradient(
    212deg,
    rgba(118, 88, 205, 0.8) 0%,
    rgba(118, 88, 205, 0.1) 101.67%
  );
  border-radius: 1.667vw;
  min-height: 29.653vw;
  min-width: 24.583vw;
  width: 24.583vw;
  padding: 24px 24px 54px 20px;
`
const CardRelativeWrapper = styled.div`
  position: relative;
  display: flex;
  height: 29.653vw;
  width: 24.583vw;
  gap: 2.847vw;
`
////////////////////////////

/////view Box this is permanant and needs a height and width;
const ViewBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  height: 29.653vw;
  width: 79.444vw;
  border-radius: 1.667vw;
`
///////////////////////////////////////////
const Slider = styled.div`
  display: flex;
`

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.667vw;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--Background, #3d2562);
  padding: 3.472vw 5.556vw;
  ${media.fullWidth} {
    padding: 50px 0px;
  }

  ${media.tablet} {
    padding: 3.906vw 0vw;
  }

  ${media.mobile} {
    padding: 14.019vw 0vw;
  }
`
