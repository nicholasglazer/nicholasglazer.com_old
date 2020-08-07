import Router from 'next/router'
import { useEffect, useContext } from 'react'
import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { useKeyEvent } from '../util/hooks'
import { sendEmail, openExternalLink, restartAnimation } from '../util/actions'
import { MenuBarContext } from '../context/MenuBarContext'

const MenuBar = ({ timelineRef, lettersRef, animationFinished, setAnimationRestarted }) => {
  const [isToggled, setToggle] = useContext(MenuBarContext)

  // array of keys with actions and descriptions
  const keysArr = [
    {key: "m", desc: "Send me an email", action: () => sendEmail()},
    //{key: "w", desc: "Jump to blog", action: () => Router.push('/blog')},
    {key: "g", desc: "See the source code", action: () => openExternalLink()},
    {key: "s", desc: "Jump to showcase", action: () => Router.push('/showcase')},
    {key: "h", desc: "Jump to homepage", action: () => Router.push('/')},
    {key: "r", desc: "Restart animation", action: () => restartAnimation(timelineRef, lettersRef, animationFinished, setAnimationRestarted)},
    //{key: "e", desc: "Jump to experiments", action: () => Router.push('/experiments')},
    {key: "p", desc: "Previous page", action: () => Router.back()},
    {key: "R", desc: "Reload the page", action: () => Router.reload()},
    //{key: "?", desc: "Help", action: () => Router.push('/help')},
    {key: "o", desc: "Toggle menu bar", action: () => setToggle(!isToggled)}
  ]

  // useKeyEvent hook
  // to know which key is pressed
  const keyEvent = useKeyEvent()
  useEffect(() => {
    const keyDownInfo = keyEvent ? keysArr.find(({key}) => key === keyEvent) : null
    keyDownInfo && keyDownInfo.action()
  }, [keyEvent]);

  return (
    <MenuBarContainer className='menu-bar' isMenu={isToggled}>
      {
        keysArr.map(k => {
          return (
            <MenuItem key={k.key} onClick={() => k.action()}>
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
