import MenuBarWrapper from '../components/MenuBar'
import InfoBarWrapper from '../components/InfoBar'
import StatusBarWrapper from '../components/StatusBar'

const BottomMenu = ({ animationFinished, setAnimationRestarted, animationProgress, timelineRef, lettersRef }) => (
  <>
    <StatusBarWrapper
      animationFinished={animationFinished}
      animationProgress={animationProgress}
      setAnimationRestarted={setAnimationRestarted}
      timelineRef={timelineRef}
      lettersRef={lettersRef}
    />
    <MenuBarWrapper
      animationFinished={animationFinished}
      animationProgress={animationProgress}
      setAnimationRestarted={setAnimationRestarted}
      timelineRef={timelineRef}
      lettersRef={lettersRef}
    />
    <InfoBarWrapper />
  </>
)


export default BottomMenu
