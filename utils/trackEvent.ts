import ym from 'react-yandex-metrika'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-59967703-20')


const trackEvent = (event: string) => {
  ym('reachGoal', event)
  ReactGA.event({
    category: 'lead',
    action: event
  })
}

const trackPage = (path: string) => {
  ym('hit', path)
  ReactGA.pageview(path)
}

export default trackEvent
export { trackPage }