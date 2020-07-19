import { useState } from 'react'
import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import BottomMenuContainer from '../components/MenuBar'

const Showcase = () => {
    return (
        <Container>
          <BottomMenuContainer />
        </Container>
    )
}

const Container = s.div(tw`bg-blackL h-screen`)


export default Showcase
