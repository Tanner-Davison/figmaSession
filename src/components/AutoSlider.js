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
  const viewboxRef = useRef(0)
  const options = [
    autoSliderData.slice(0, 3),
    autoSliderData.slice(3, 6),
    autoSliderData.slice(8, 9),
  ]

  useEffect(() => {
    setArrayValue(options[0])
    const currentTarget = document.querySelectorAll(`.box${currentIndex}`)
    gsap.set(currentTarget, { x: 0, duration: 0.7, delay: 1 })
  }, [])
  const fetchNewData = async index => {
    setArrayValue(options[index])
  }
  const handleClickRight = async () => {
    const newIndex = currentIndex === options.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    const currentElement = viewboxRef.current.querySelectorAll(
      `.box${currentIndex}`
    )
    await gsap.fromTo(
      currentElement,
      { x: 0 },
      { x: -1200, duration: 0.8, stagger: 0.1 }
    )
    await fetchNewData(newIndex)
    const incomingElements = viewboxRef.current.querySelectorAll(
      `.box${newIndex}`
    )
    return await incomingElements.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: 1200 },
        { x: 0, duration: 0.7, delay: index * 0.3 }
      )
    })

    console.log(newIndex)
  }

  const runCards = (imgObj, index) => {
    return (
      <Card
        id={`box${currentIndex}`}
        key={index}
        className={`box${currentIndex}`}
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
        <ViewBox ref={viewboxRef}>{arrayValue.map(runCards)}</ViewBox>
      </BoxContainer>
      <Controls>
        <CarouselButtonLeft>Prev</CarouselButtonLeft>
        <StyledData></StyledData>
        <CarouselButtonRight onClick={handleClickRight}>
          Next
        </CarouselButtonRight>
      </Controls>
    </Wrapper>
  )
}

export default AutoSlider

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
  height: 29.653vw;
  width: 24.583vw;
  padding: 24px 24px 54px 20px;
`
////////////////////////////

/////view Box this is permanant and needs a height and width;
const ViewBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 29.653vw;
  width: 79.444vw;
  border-radius: 1.667vw;
  gap: 2.847vw;
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
