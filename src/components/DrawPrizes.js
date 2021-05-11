export default function DrawPrizes({ hide = false, delay = true }) {
  const wrapperClasses = 'draw-prizes flex-center white bold mt-2 mb-auto'
  const prizeClasses = 'prize flex-center'
  const prizeAnimation = 'animate bounceInRight'
  const hideAnimation = 'animate hidden'
  const delay1 = delay ? 'delay-2' : 'delay-0'
  const delay2 = delay ? 'delay-2-5' : 'delay-0-5'
  const delay3 = delay ? 'delay-3' : 'delay-1'

  return (
    <div className={`${wrapperClasses} ${hide ? hideAnimation : ''}`}>
      <div className={`${prizeClasses} ${prizeAnimation} ${delay3}`}>1000</div>
      <div className={`${prizeClasses} ${prizeAnimation} ${delay2}`}>500</div>
      <div className={`${prizeClasses} ${prizeAnimation} ${delay1}`}>250</div>
    </div>
  )
}
