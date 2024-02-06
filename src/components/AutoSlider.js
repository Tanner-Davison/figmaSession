import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { autoSliderData } from "../components/content/AutoSliderData"
import colors from "../styles/colors"
import media from "../styles/media"
import { gsap } from "gsap"
import text from "../styles/text"
import {
  CarouselButtonLeft,
  CarouselButtonRight,
  GlobalLinkButton,
} from "./buttons/Buttons"

const AutoSlider = ({ scrollto }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [arrayValue, setArrayValue] = useState([])
  const [restart, setRestart] = useState(false)
  const [width, setWidth] = useState(0 + "%")
  const [width2, setWidth2] = useState(0 + "%")
  const [width3, setWidth3] = useState(0 + "%")
  const viewboxRef = useRef(null)
  let cardCount = 0
  let transCount = 0

  const clearStates = async () => {
    setWidth(100 + "%")
    setWidth2(0 + "%")
    setWidth3(0 + "%")
    return
  }
  const returnBeginning = () => {
    setRestart(false)
    setWidth(100 + "%")
    handleClickRight()
  }
  const startTime = async () => {
    setTimeout(() => {
      if (transCount === -1) {
        return returnBeginning()
      }
      if (transCount === 0) { // first Transition
        setWidth2(100 + "%")
        handleClickRight()

      } else if (transCount === 1) { // second transition
        setWidth3(100 + "%")
        handleClickRight()
      }
      if (transCount === 2) { // third transition back to start 
        setWidth(0+'%')
        handleClickRight()
      }
      console.log(transCount)
    }, 4000)
  }

  const handleClickRight = async () => {
    const target = viewboxRef.current.querySelectorAll(`#cardwrapper`)
    if (transCount === -1) {
      transCount = 0
      return startTime()
    }
    if (transCount === 0) {
      await gsap.to(target, { xPercent: -335, duration: 0.9 })
      transCount++
    } else if (transCount === 1) {
      await gsap.fromTo(
        target,
        { xPercent: -335 },
        { xPercent: -670, duration: 0.9 }
      )
      transCount++

    } else if (transCount === 2) {
      const newTarget = viewboxRef.current.querySelectorAll(`box1`)
      setRestart(true)
      clearStates()
      transCount = -1
      await gsap.fromTo(
        target,
        { xPercent: -670 },
        { xPercent: 0, duration: 0.9 }
      )}
    return startTime()
  }

  useEffect(() => {
    const target = document.getElementById(`#cardwrapper`)
    gsap.set(target, { xPercent: 0 })
    startTime()
    setWidth(100 + "%")
  }, [])

  const runCards = (imgObj, index) => {
    return (
      <Card
        id={`box${cardCount++}`} // Use cardCount instead of index++
        key={index}
        className={`boxcard`}
      >
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
        <StyledData></StyledData>
        <ButtonCustom>
          <ButtonGrowth id={"growme"} $restart={restart} $width={width} />
        </ButtonCustom>
        <ButtonCustom id={"growme"} $width={width2}>
          <ButtonGrowth id={"growme"} $restart={restart} $width={width2} />
        </ButtonCustom>
        <ButtonCustom id={"growme"} $width={width3}>
          <ButtonGrowth id={"growme"} $restart={restart} $width={width3} />
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
  width: ${props => (props.$width ? `${props.$width}` : `unset`)};
  transition: ${props => (props.$restart ? "unset" : `width 4s ease-in`)};
  background-color: white;
`
const ButtonCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
  height: 10px;
  width: 100px;
  border: 2px solid red;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px groove white;
  background-color: ${colors.grey};
  transition: box-shadow 0.3s ease-in-out;
  margin-top: 1.736vw;
  padding: 10px;
  gap: 1.389vw;
  border-radius: 1vw;

  ${media.mobile} {
    gap: 1.402vw;
    border-radius: 3.505vw;
  }
`
const StyledData = styled.p`
  ${text.bodyMBold};
  color: ${colors.black};
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
