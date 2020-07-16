import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const InfoBar = ({infoStatus}) => {
    return (
        <InfoBarContainer>
          <InfoBarStatus>{infoStatus}</InfoBarStatus>
        </InfoBarContainer>
    )
}

const InfoBarContainer = s.div(tw`flex-initial items-center mb-px border-t border-grayD`)
const InfoBarStatus = s.span(tw`text-textColor text-sm pl-2 my-px font-mono`)


export default InfoBar
