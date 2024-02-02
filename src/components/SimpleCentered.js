import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';
import {content} from './content/simpleCenteredContent';

const SimpleCentered = () => {
    
  return (
    <Wrapper>
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <Headline>{content.headline}</Headline>
      <Body>{content.body}</Body>
      <Link>{content.link.grayLink}</Link>

    </Wrapper>
  )
}
export default SimpleCentered;
const Link = styled.a`
${text.bodyMBold};
color:#838587;
text-decoration: none;
margin:unset;
`
const Body = styled.p`
${text.bodyM};
`
const Headline = styled.h2`
${text.h2};

`
const Eyebrow = styled.p`
${text.eyebrow};

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
padding-bottom:5.556vw;
`