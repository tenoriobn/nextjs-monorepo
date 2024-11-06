import styled from 'styled-components'
import React from 'react'

const StyledTxt = styled.span`
  font-family: sans-serif;
`;

interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
}

export function Text({ tag, children, ...props}: TextProps) {
  return (
    <StyledTxt as={tag} {...props}>
      {children}
    </StyledTxt>
  )
}
