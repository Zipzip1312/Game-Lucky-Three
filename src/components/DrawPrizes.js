export default function DrawPrizes({ hide = false }) {
  const wrapperClasses = 'draw-prizes flex-center white bold'
  const prizeClasses = 'prize flex-center'
  const prizeAnimation = 'animate bounceInRight'
  const hideAnimation = 'animate hidden'

  return (
    <div className={`${wrapperClasses} ${hide ? hideAnimation : ''}`}>
      <div className={`${prizeClasses} ${prizeAnimation} delay-2`}>1000</div>
      <div className={`${prizeClasses} ${prizeAnimation} delay-1-5`}>500</div>
      <div className={`${prizeClasses} ${prizeAnimation} delay-1`}>250</div>
    </div>
  )
}
