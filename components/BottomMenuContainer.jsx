import s from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import MenuBarWrapper from '../components/MenuBar'
import InfoBarWrapper from '../components/InfoBar'
import StatusBarWrapper from '../components/StatusBar'

// FIXME figure out DRY way mb use context?
const BottomMenu =
      ({statusBarRef, verticalRef, circleRef, homePathRef, pathRef, progressRef, menuRef,
        animationFinished, setAnimationRestarted, animationProgress,
        timelineRef, lettersRef, infoStatus, setInfoStatus}) => (
          <BottomMenuContainer>
            <StatusBarWrapper
              statusBarRef={statusBarRef}
              verticalRef={verticalRef}
              circleRef={circleRef}
              homePathRef={homePathRef}
              pathRef={pathRef}
              progressRef={progressRef}
              menuRef={menuRef}
              animationFinished={animationFinished}
              animationProgress={animationProgress}
              setAnimationRestarted={setAnimationRestarted}
              setInfoStatus={setInfoStatus}
              timelineRef={timelineRef}
              lettersRef={lettersRef}
            />
            <MenuBarWrapper
              statusBarRef={statusBarRef}
              verticalRef={verticalRef}
              circleRef={circleRef}
              homePathRef={homePathRef}
              pathRef={pathRef}
              progressRef={progressRef}
              menuRef={menuRef}
              animationFinished={animationFinished}
              animationProgress={animationProgress}
              setAnimationRestarted={setAnimationRestarted}
              setInfoStatus={setInfoStatus}
              timelineRef={timelineRef}
              lettersRef={lettersRef}
            />
            <InfoBarWrapper infoStatus={infoStatus} />
          </BottomMenuContainer>
        )

// TODO figure out if i need this shit
const BottomMenuContainer = s.div(tw``)

export default BottomMenu
