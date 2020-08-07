import { useContext, useEffect, useRef } from 'react'
import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { toggleMenu, restartAnimation, sendEmail } from '../util/actions'
import { useHover, useInfoStatus } from '../util/hooks'
import Router from 'next/router'
import { MenuBarContext } from '../context/MenuBarContext'

const StatusBar = ({ animationFinished, setAnimationRestarted, animationProgress, timelineRef, lettersRef, isAnimationFinished }) => {

  const [isToggled, setToggle] = useContext(MenuBarContext)

  //const [infoStatus, setInfoStatus] = useInfoStatus()

  // useHover hooks
  const [pathRef, isPathHovered] = useHover()
  const [menuRef, isMenuHovered] = useHover()
  const [circleRef, isCircleHovered] = useHover()
  const [homePathRef, isHomePathHovered] = useHover()
  const [progressRef, isProgressHovered] = useHover()
  const [verticalRef, isVerticalHovered] = useHover()

  // useEffect(() => {
  //   isPathHovered ? setInfoStatus(pathRef.current.value) : null
  //   isMenuHovered ? setInfoStatus(menuRef.current.value) : null
  //   isCircleHovered ? setInfoStatus(circleRef.current.value) : null
  //   isHomePathHovered ? setInfoStatus(homePathRef.current.value) : null
  //   isProgressHovered ? setInfoStatus(progressRef.current.value) : null
  // }, [isCircleHovered, isPathHovered, isHomePathHovered, isProgressHovered, isMenuHovered])


  return (
    <StatusBarContainer className='status-bar'>
      <BarVerticalLine />
      <BarCircle ref={circleRef} isAnimationFinished={animationFinished} value='Restart the animation' onClick={() => restartAnimation(timelineRef, lettersRef, animationFinished, setAnimationRestarted)} />
      <BarHomePath ref={homePathRef} value='Move to : https://nicholasglazer.com' onClick={() => Router.push('/')}>nicholasglazer</BarHomePath>
      <BarPath ref={pathRef} value='Use default client to send me an email' onClick={() => sendEmail()}>/hire</BarPath>
      <BarProgress ref={progressRef} value='Progress stage'>{animationProgress}</BarProgress>
      <BarMenu ref={menuRef} value='Open menu bar' onClick={() => setToggle(!isToggled)}>Menu</BarMenu>
    </StatusBarContainer>
  )
}

const StatusBarContainer = s.div(tw`flex flex-initial text-base items-center bg-blackD border-b border-grayD`)
const BarProgress = s.data(tw`text-textColor flex justify-end pl-4 sm:pl-6 mr-auto font-mono`)
const BarVerticalLine = s.data(tw`bg-greenL block h-6 w-1 cursor-pointer`)
const BarPath = s.data(tw`text-orange hover:text-white cursor-pointer font-bold font-mono`)
const BarHomePath = s.data(tw`text-orange hover:text-blue cursor-pointer ml-4 font-bold font-mono`)
const BarCircle = s.data(props => `background: ${props.isAnimationFinished ? '#a6e22e' : '#f92672'};`, tw`rounded-full ml-2 w-3 h-3 cursor-pointer`)
const BarMenu = s.data(tw`text-white text-base cursor-pointer pr-2`)

//TODO decide
//<BarMenuArrow isMenu={isToggled} />
// const BarMenuArrow = s.span(props => `
// transform: rotate(${props.isMenu === '0' ? '45' : '-135'}deg);
// transition: transform 1s ease-in;
// border: solid white;
// padding: 3px;
// border-width: 0 2px 2px 0;
// `)


export default StatusBar
