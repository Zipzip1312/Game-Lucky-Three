export default function DrawPrizes() {
  const animation = 'animate bounceInRight'

  return (
    <div className="draw-prizes flex-center white bold">
      <div className={`prize flex-center ${animation} delay-2`}>1000</div>
      <div className={`prize flex-center ${animation} delay-1-5`}>500</div>
      <div className={`prize flex-center ${animation} delay-1`}>250</div>
    </div>
  )
}
