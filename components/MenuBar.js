import Router from 'next/router'
import { useRef, useEffect, useState, useContext, useReducer } from 'react'
import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { useKeyPress, useRehydration } from '../util/hooks'
import { sendEmail, openExternalLink, restartAnimation } from '../util/actions'
import { MenuBarContext } from '../context/MenuBarContext'
import anime from 'animejs/lib/anime.min.js'

const MenuBar = ({setInfoStatus, timelineRef, lettersRef, animationFinished, setAnimationRestarted}) => {
  // array of keys with actions and description
  const [isToggled, setToggle] = useContext(MenuBarContext)
  const menuBarRef = useRef()

  // TODO decide if menubar animatiton is needed
  // useEffect(() => {
  //   console.log('menuB', menuBarRef.current.offsetHeight && isToggled)
  //   anime({
  //     targets: `.menu-bar`,
  //     minHeight: () => !isToggled ? menuBarRef.current.offsetHeight === 0 ? null : [0, 180] : [180, 0],
  //     easing: 'easeOutSine',
  //   })
  // }, [isToggled, setToggle])

  const keysArr = [
    {key: "m", desc: "Send me an email", action: () => sendEmail(setInfoStatus)},
    //{key: "w", desc: "Jump to blog", action: () => Router.push('/blog')},
    {key: "g", desc: "See the source code", action: () => openExternalLink()},
    //{key: "s", desc: "Jump to showcase", action: () => Router.push('/showcase')},
    {key: "h", desc: "Jump to homepage", action: () => Router.push('/')},
    {key: "r", desc: "Restart animation", action: () => restartAnimation(timelineRef, lettersRef, animationFinished, setAnimationRestarted, setInfoStatus)},
    //{key: "e", desc: "Jump to experiments", action: () => Router.push('/experiments')},
    {key: "p", desc: "Previous page", action: () => Router.back()},
    {key: "R", desc: "Reload the page", action: () => Router.reload()},
    //{key: "?", desc: "Help", action: () => Router.push('/help')},
    {key: "o", desc: "Open menu bar", action: () => setToggle(!isToggled)}
  ]

  // register event handlers to know which key is pressed : bool returned
  const mPressed = useKeyPress('m')
  const wPressed = useKeyPress('w')
  const gPressed = useKeyPress('g')
  const sPressed = useKeyPress('s')
  const hPressed = useKeyPress('h')
  const rPressed = useKeyPress('r')
  const ePressed = useKeyPress('e')
  const pPressed = useKeyPress('p')
  const RPressed = useKeyPress('R')
  const qmPressed = useKeyPress('?')
  const oPressed = useKeyPress('o')

  useEffect(() => {
    mPressed ? sendEmail(setInfoStatus) : null
    wPressed ? Router.push('/blog') : null
    gPressed ? openExternalLink() : null
    sPressed ? Router.push('/showcase') : null
    hPressed ? Router.push('/') : null
    rPressed ? restartAnimation(timelineRef, lettersRef, animationFinished, setAnimationRestarted, setInfoStatus) : null
    ePressed ? Router.push('/experiments') : null
    pPressed ? Router.back() : null
    RPressed ? Router.reload() : null
    qmPressed ? Router.push('/help') : null
    oPressed ? setToggle(!isToggled) : null
  }, [mPressed, wPressed, gPressed, sPressed, hPressed, rPressed, ePressed, pPressed, RPressed, qmPressed, oPressed])

  return (
    <MenuBarContainer className='menu-bar' ref={menuBarRef} isMenu={isToggled}>
      {
        keysArr.map((k, i) => {
          return (
            <MenuItem key={i} onClick={() => k.action()}>
              <MenuItemLetter>
                {k.key}
              </MenuItemLetter>
              <MenuItemArrow>
                ⇢
              </MenuItemArrow>
              <MenuItemDesc>
                {k.desc}
              </MenuItemDesc>
            </MenuItem>
          )
        })
      }
    </MenuBarContainer>
  )
}

const MenuBarContainer = s.div(props => `min-height: ${props.isMenu ? '180px' : 'inherit'};`, `width: fit-content;`, tw` h-0 overflow-hidden text-xs grid xs:grid-cols-2 sm:grid-cols-3 font-main px-3 xs:pr-px bg-blackL`)
const MenuItem = s.div(tw`flex row-span-1 md:my-1 xs:my-0 sm:my-0 items-center xs:text-xs sm:text-sm`)
const MenuItemLetter = s.div(tw`text-greenL w-4`)
const MenuItemArrow = s.div(tw`text-grayL text-lg w-4`)
const MenuItemDesc = s.div(tw`ml-2 mr-6 text-blueD hover:text-black hover:bg-orange cursor-pointer`)


export default MenuBar
