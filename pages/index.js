import { useState } from 'react'
import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import Logo from '../components/Logo'
import Link from 'next/link'


const Wrapper = s.div(tw`grid grid-flow-col bg-black p-6 items-end h-screen font-mono`)
const LinksWrapper = s.div(tw`grid self-center`)
const LinkText = s.a(tw`text-white text-lg p-1 cursor-pointer`)

const Index = () => (
  <Wrapper>
    <Logo />
    <LinksWrapper>
      <Link href="/hire"><LinkText>Hire</LinkText></Link>
    </LinksWrapper>
  </Wrapper>
)
      // <Link href="/blog"><LinkText>Writing</LinkText></Link>
      // <Link href="/experiments"><LinkText>Experiments</LinkText></Link>
      // <Link href="/showcase"><LinkText>Showcase</LinkText></Link>

export default Index
