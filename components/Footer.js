import React from 'react'
import s from '@emotion/styled'
import Link from 'next/link'
import { FullLogoW } from '../icons/icons'

export default React.memo(() => {
    return (
        <Container>
            <div>
                <Link href="/" title="aoq.io" rel="noopener">
                    <FullLogoW />
                </Link>
                <ExtLink href="https://discord.gg/k9VYE49pEJ" title="discord" target="_blank" rel="noopener">
                    Discord group
                </ExtLink>
                <ExtLink href="https://www.twitter.com/aoqio" title="twitter" target="_blank" rel="noopener">
                    Twitter
                </ExtLink>
            </div>
            <p>© aoq.io 2021</p>
        </Container>
    )
})

const Container = s.footer`
margin: 164px 12% 0 12%;
padding-bottom: 113px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 164px;
> div {
display: flex;
justify-content: space-between;
align-items: flex-start;

}
> p {
font-size: 14px;
color: rgba(255, 255, 255, 0.3);
}
`
const ExtLink = s.a`
padding-top: 6px;
font-size: 16px;
color: #FFFFFF;
opacity: 0.4;
`
