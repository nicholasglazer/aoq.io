import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import s from '@emotion/styled'
import {useSpring, animated} from 'react-spring'
import { color, breakpoint, gradient } from '../styles/global'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { FullLogo, ArrowDown, ArrowRight, ETH, LINK, AWS, GC, API } from '../icons/icons'

const imagesSec1 = [
  {
    x: '216px',
    y: '151px',
    width: 330,
    height: 327,
    src: "/images/cube_s1.png",
    name: 'cube',
    zindex: 1,
  },
  {
    x: '322.66px',
    y: '376.52px',
    width: 260.02,
    height: 320.93,
    src: "/images/flat_cube_s1.png",
    name: 'flatCube',
    zindex: 4,
  },
  {
    x: '152px',
    y: '229px',
    width: 48,
    height: 47,
    src: "/images/sphere_s1.png",
    name: 'sphere',
    zindex: 2,
  },
  {
    x: '158.58px',
    y: '526px',
    width: 309.31,
    height: 273.62,
    src: "/images/donut_s1.png",
    name: 'donut',
    zindex: 3,
  },
]

const imagesSec7 = [
  {
    x: '34px',
    y: '812px',
    width: 269,
    height: 269,
    src: "/images/sphere_big_s8.png",
    name: 'donut',
    zindex: 4,
  },
  {
    x: '276px',
    y: '-350px',
    width: 158,
    height: 170,
    src: "/images/cube_s6.png",
    name: 'donut',
    zindex: 2,
  },
  {
    x: '162px',
    y: '124px',
    width: 182,
    height: 189.64,
    src: "/images/oval_s8.png",
    name: 'donut',
    zindex: 3,
  },
  {
    x: '650px',
    y: '1445px',
    width: 350,
    height: 350,
    src: "/images/flat_rect_s10.png",
    name: 'donut',
    zindex: 3,
  },
  {
    x: '730px',
    y: '504px',
    width: 15.6,
    height: 15,
    src: "/images/sphere_xs_s8.png",
    name: 'donut',
    zindex: 3,
  },
  {
    x: '450px',
    y: '581px',
    width: 37.79,
    height: 37,
    src: "/images/sphere_sm_s8.png",
    name: 'sphere_sm',
    zindex: 3,
  },
  {
    x: '900px',
    y: '630px',
    width: 37.79,
    height: 37,
    src: "/images/sphere_sm_s8.png",
    name: 'sphere_sm',
    zindex: 3,
  },
]

export default React.memo(() => {

  const interp = i => r => `translate3d(0, ${8 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Logo>
            <FullLogo />
          </Logo>
          <Faq>
            <span>
              FAQ
            </span>
            <ArrowDown />
          </Faq>
          <Email>
            help@aoq.io
          </Email>
        </Header>
        <Sec1>
          <div>
            <h1>
              Reliable and trusted
              Chainlink node operator
            </h1>
            <p>
              Help to streamline the development of critical blockchain apps by connecting smart contracts with decentralised oracle networks and secure off-chain data.
            </p>
            <p>
              Powered by community supporters.
              Located in EU
            </p>
          </div>
          <div>
            {imagesSec1.map(({x, y, width, height, zindex, src}, i) => <animated.img key={i} width={width} height={height} src={src} style={{ zIndex: zindex, right: x, top: y, transform: radians.interpolate(interp(i)) }} />)}
            <Light />
          </div>
        </Sec1>
        <Sec2>
          <div>
            <span></span>
            <p>Low latency response time</p>
          </div>
          <div>
            <span></span>
            <p>DDoS resistance</p>
          </div>
          <div>
            <span></span>
            <p>Technical support</p>
          </div>
        </Sec2>
        <Sec3>
          <p>
            Connect with <b>aoq</b> node Chainlink nodes, and data API today
          </p>
          <div>
            <ETH />
            <LINK />
            <ETH />
            <LINK />
          </div>
        </Sec3>
        <Sec4>
          <div>
            <Image
              src="/images/node_s4.png"
              width={625.52}
              height={490}
            />
          </div>
          <div>
            <span>
              <h1>
                Node opperations
              </h1>
            </span>
            <p>
            Chainlink connects smart contracts on any blockchain to data providers, web APIs, enterprise systems, cloud services, IoT devices, payment systems, other blockchains, and much more. Blockchains are highly secure and reliable networks for value exchange but lack the functionality to natively fetch external data or send data to off-chain systems in a manner that retains end-to-end tamper-resistance. Through the use of secure oracles, Chainlink extends the functionality of blockchains by connecting smart contracts to real-world data, events, payments, and more in a highly tamper-resistant and reliable manner...            </p>
          </div>
        </Sec4>

        <Sec5>
          <div>
            <h1>Run jobs such as</h1>
            <p>A real world use-cases for smart contracts</p>
          </div>
          <div>Comming soon...</div>
        </Sec5>
        <Sec6>
          <div>
            <div>
              <p>MainNet</p>
              <p>address ORACLE_ADDRESS=0x72f3dff4cd17816604dd2df6c2741e739484ca62</p>
              <a>Visit node 🠒</a>
            </div>
            <div>
              <p>Kovan Testnet</p>
              <p>address ORACLE_ADDRESS=0x72f3dff4cd17816604dd2df6c2741e739484ca62</p>
              <a>Visit node 🠒</a>
            </div>
          </div>
        </Sec6>
        <Sec7>
          <div>
            <h1>Staking soon..</h1>
            <p>
              We’re actively working to allow cusomers to earn additional cryptocurrency by contributing to such networks as
            </p>
          </div>
          {imagesSec7.map(({x, y, width, height, zindex, src}, i) => <animated.img key={i} width={width} height={height} src={src} style={{ zIndex: zindex, right: x, top: y, transform: radians.interpolate(interp(i)) }} />)}
        </Sec7>
        <Sec8>
            <Image
              src="/images/hero_s9.png"
              width={1860}
              height={357}
            />
          <span></span>
        </Sec8>
        <Sec9>
          <div>
            <p>
              Looking to get custom data to your smart contract?
            </p>
            <p>
              Want some help learning about node operators?
              Feel free to contact us!
            </p>
          </div>
          <ContactForm />
        </Sec9>
        <Footer />
      </Container>
    </>
  )
})

const Sec1 = s.section`
div {
  flex: 1;
  &:first-of-type {
    > h1 {
      font-size: 65px;
      ${gradient}
    }
    > p {
    font-size: 29px;
    color: rgba(201, 204, 219, 0.7);
    }
  }
  &:last-of-type {
   > img {
    position: absolute;
  }
  }
`
const Sec2 = s.section`
margin-top: 250px;
justify-content: space-between;
> div {
display: flex;
align-items: center;
span {
display: block;
width: 50px;
height: 2px;
background: #fff;
margin-right: 21px;
}
p {
font-size: 26px;
${gradient}
}
}
`

const Sec3 = s.section`
margin-top: 240px;
> div {
justify-content: center;
> svg {
margin-right: 50px;
}
width: 643px;
flex: 1;
display: flex;
padding: 55px 0;
}
> p {
flex: 1;
color: #C9CCDB;
font-size: 55px;
letter-spacing: -2px;
line-height: 116%;
}
`

const Sec4 = s.section`
margin-top: 200px;
display: flex;
> div {
flex: 1;
&:last-of-type {
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
flex: 1;
> span {
margin-left: -70px;
max-width: 370px;
 h1 {
margin-top: 12px;;
align-self: flex-start;
max-width: 445px;
color: #fff;
font-size: 46px;
line-height: 96%;
}
}
> p {
max-width: 445px;
font-size: 18px;
line-height: 152%;
color: rgba(201, 204, 219, 0.6);
}
}
}
`

const Sec5 = s.section`
margin-top: 250px;
justify-content: center;
align-items: center;
div {
> h1 {
margin: 0;
${gradient}
font-size: 65px;
letter-spacing: -3px;
}
> p {
max-width: 500px;
font-size: 29px;
line-height: 136%;
color: #C9CCDB;
opacity: 0.6;
}
&:last-of-type {
margin: 0 50px 0 120px;;
font-size: 45px;
color: rgba(255, 255, 255, 0.4);
opacity: 0.5;
}
}
`
/* Note: backdrop-filter has minimal browser support */
const Sec6 = s.section`
margin-top: 240px;
> div {
z-index: 7;
width: 100%;
background: linear-gradient(180.27deg, rgba(200, 222, 242, 0.08) -79.69%, rgba(21, 30, 44, 0.08) 206.49%);
backdrop-filter: blur(23px);
border-radius: 24px;
height: 264px;
border-radius: 24px;
display: flex;
flex-direction: column;
align-text: center;
justify-content: space-around;
> div {
display: flex;
justify-content: space-between;
padding: 0 104px;
> p {
display: flex;
align-items: center;
&:nth-of-type(1) {
width: 155px;
font-weight: 500;
font-size: 20px;
line-height: 142%;
letter-spacing: 1px;
color: #FFFFFF;
}
&:nth-of-type(2) {
font-size: 17px;
line-height: 142%;
color: #515E6A;
}
}
> a {
${gradient}
display: flex;
align-items: center;
}
}
}
`
const Sec7 = s.section`
position: relative;
> img {
position: absolute;
}
> div {
margin-top: 146px;
background: #000000;
backdrop-filter: blur(23px);
border-radius: 24px;
height: 462px;
padding-top: 110px;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
> h1 {
margin-top: 0;
font-weight: bold;
font-size: 39px;
letter-spacing: -1px;
color: #FFFFFF;
opacity: 0.7;
}
> p {
${gradient}
max-width: 546px;
font-weight: 500;
font-size: 20px;
line-height: 126%;
text-align: center;
}
}
`
const Sec8 = s.section`
padding: 0 !important;
position: relative;
> div {
margin-top: -156px !important;
width: 100%;
img {
opacity: .7;
}
}
> span {
position: absolute;
margin-top: -156px;
display: block;
width: 100%;
height: 295px;
top: 63px;
background: linear-gradient(180deg, rgba(21, 24, 31, 0) 0%, #15181F 100%);
}
`
const Sec9 = s.section`
margin-top: 229px;
justify-content: space-between;
> div {
&:first-of-type {
display: flex;
flex-direction: column;
> p {
font-size: 32px;
line-height: 120%;
color: #FFFFFF;
max-width: 340px;
}
}
}
`

const Light = s.div`
position: absolute;
right: -255px;
top: 151px;
background: linear-gradient(94.52deg, rgba(95, 97, 197, 0.41) -6.8%, rgba(69, 160, 211, 0.41) 32.89%, rgba(89, 228, 203, 0.41) 53.66%);
filter: blur(500px);
width: 376px;
height: 376px;
max-width: 376px;
max-height: 376px;
min-width: 376px;
min-height: 376px;
border-radius: 50%;
`

const Logo = s.div`
margin-right: auto;
`
const Email = s.a`
${gradient}
`
const Faq = s.button`
display: flex;
align-items: center;
justify-content: center;
outline: none;
background: none;
border: none;
color: #fff;
margin-right: 62px;
`
const Container = s.div`
width: 100vw;
min-height: 100vh;
height: 100%;
background: ${color.darkPrim0};
> section {
padding: 0 12%;
display: flex;
> div {
overflow: hidden;
}
&:first-of-type {
margin-right: 0;
}
}
`
