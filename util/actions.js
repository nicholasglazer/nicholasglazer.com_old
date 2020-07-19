export const copyToClipboard = async (text, setInfoStatus) => {
    try {
        console.log('copied')
        await navigator.clipboard.writeText(text)
        setInfoStatus('Email is copied to the cilpboard')
    } catch (err) {
        setInfoStatus('Copying email failed')
    }
}

export const restartAnimation = (timeline, letters, animationFinished, setAnimationRestarted, setInfoStatus) => {
    if (animationFinished) {
        setAnimationRestarted(true)
        timeline.current.restart()
        letters.current.restart()
        setInfoStatus('Animation has been restarted')
    } else {
        setInfoStatus('Animation is still running. To restart the animation wait for it to finish')
    }
}

export const sendEmail = setInfoStatus => {
    // timeout needed here because window open blocks key handler event to unregister
    setTimeout(() => {
        window.open('mailto:glazer.nicholas@gmail.com')
    }, 100)
    setInfoStatus('Default email client has been opened')
}

export const openExternalLink = url => {
    // open ext link helper function, if no args call default
    url ? window.open(url) : window.open('http://github.com/nicholasglazer')
}
