import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Logo = s.h1(tw` text-textColorA text-xl font-serif lg:p-6`)

const LogoComponent = () => (<Logo>Nicholas Glazer</Logo>)


export default LogoComponent
