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
  const viewboxRef = useRef(null)
  let cardCount = 0 
  let transCount = 0;
 let width = 0


 const handleWidth = setInterval(() => {
   width += 5
   const myElement = document.getElementById('growme')
   myElement.style.width = width + "px"
 }, 100)

const startTime = ()=>setInterval(() => {
  handleClickRight()

}, 4000)

 setTimeout(() => {
   clearInterval(startTime)
  clearInterval(handleWidth)
 }, 3000)

  useEffect(() => {
    const target = document.getElementById(`#cardwrapper`)
    gsap.set(target, { xPercent: 0 })
     startTime()
  }, [])

  const handleClickRight = async () => {
    const target = viewboxRef.current.querySelectorAll(`#cardwrapper`)
    if(transCount === 0){
      await gsap.to(target, { xPercent: -335, duration: 0.9 })
     transCount++
    }else if(transCount===1){
      await gsap.fromTo(target, { xPercent: -335 },{xPercent:-670, duration:0.8 })
     transCount++
    }else if(transCount ===2){
      const newTarget = viewboxRef.current.querySelectorAll(`box1`)
       await gsap.fromTo(target, { xPercent: -670 }, { xPercent: 0, duration: 1 ,ease:'slow' })
      transCount = 0;
    }
    return startTime();
  }

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
        <CarouselButtonLeft>Prev</CarouselButtonLeft>
        <StyledData></StyledData>
        <ButtonCustom id={'growme'} onClick={handleClickRight}>
          Next
        </ButtonCustom>
      </Controls>
    </Wrapper>
  )
}

export default AutoSlider
const ButtonCustom = styled.div`
  height: 20px;
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

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px groove white;
  background-color: ${colors.grey};
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 19px ${colors.grey200};
  gap: 1.389vw;
  border-radius: 1.389vw;
  &:hover {
    border: 1px groove whitesmoke;
    box-shadow: 0px 4px 19px ${colors.grey200};
  }
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    gap: 1.402vw;
    border-radius: 3.505vw;
  }
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
