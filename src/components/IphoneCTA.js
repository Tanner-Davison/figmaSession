import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text'; 
import { pageData } from './content/IphonePageData';

const IphoneCTA = () => {
    const allImages = pageData.images;
    const {iphoneData} = pageData;
    const textData = pageData.mainContent;
  return (
    <Wrapper>
      <Background $bgImage={}>

      </Background>
    </Wrapper>
  )
}

export default IphoneCTA
const Background = styled.div`
display: flex;
width:100%;
height: 53.472vw;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
`