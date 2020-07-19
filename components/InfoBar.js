import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { useInfoStatus } from '../util/hooks'
import { useEffect } from 'react'

const InfoBar = () => {
    const [infoStatus, setInfoStatus] = useInfoStatus()
    // useEffect(() => {
    // }, [infoStatus, setInfoStatus]);
    //console.log('setinfostatus BAR', setInfoStatus)
    //useEffect(() => {
    console.log('infostatus BAR', infoStatus)
    //}, [infoStatus]);

    return (
        <InfoBarContainer>
          <InfoBarStatus>{infoStatus}</InfoBarStatus>
        </InfoBarContainer>
    )
}

const InfoBarContainer = s.div(tw`flex-initial items-center mb-px border-t border-grayD`)
const InfoBarStatus = s.span(tw`text-textColor text-sm pl-2 my-px font-mono`)


export default InfoBar
