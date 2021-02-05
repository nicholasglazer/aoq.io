import React from 'react'
import s from '@emotion/styled'
export default React.memo(({children}) => (
    <Container>{children}</Container>
))


const Container = s.header`
display: flex;
flex: 1;
height: 112px;
align-items: center;
margin: 0 56px;
`
//height: 82px;
