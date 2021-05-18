import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import raf from 'raf'
import Particle from 'particle'

class SpaceBackground extends PureComponent {
  static propTypes = {
    numParticles: PropTypes.number,
    lineWidth: PropTypes.number,
    alphaFactor: PropTypes.number,
    depth: PropTypes.number,
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    style: PropTypes.object
  }

  static defaultProps = {
    numParticles: 600,
    alphaFactor: 1,
    lineWidth: 2,
    depth: 300,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: -1
    },
    size: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    this._reset(this.props)
    this._tick()
  }

  componentWillUnmount() {
    raf.cancel(this._tickRaf)
  }

  render() {
    const {
      numParticles,
      lineWidth,
      alphaFactor,
      depth,
      size,
      style,
      ...rest
    } = this.props

    return (
      <div id="space-bg" style={style} {...rest}>
        <canvas ref={this._canvasRef} width={size.width} height={size.height} />
      </div>
    )
  }

  _canvasRef = (ref) => {
    this._canvas = ref
  }

  _tick = () => {
    this._update()
    this._draw()

    this._tickRaf = raf(this._tick)
  }

  _update() {
    for (let i = 0; i < this._particles.length; ++i) {
      this._particles[i].update()
    }
  }

  _draw() {
    if (!this._canvas) return
    const ctx = this._canvas.getContext('2d')
    const { alphaFactor, lineWidth } = this.props

    ctx.save()
    ctx.translate(this._vp.x, this._vp.y)
    ctx.clearRect(
      -this._vp.x,
      -this._vp.y,
      this._bounds.width,
      this._bounds.height
    )
    ctx.lineWidth = lineWidth

    for (let i = 0; i < this._particles.length; ++i) {
      const p = this._particles[i]

      p.s = this._bounds.depth / (this._bounds.depth + p.z)
      p.sx = p.x * p.s
      p.sy = p.y * p.s
      p.alpha =
        (alphaFactor * (this._bounds.z.max - p.z)) / (this._bounds.z.max / 2)

      ctx.beginPath()
      ctx.moveTo(p.sx, p.sy)
      ctx.lineTo(p.osx, p.osy)
      ctx.strokeStyle =
        'hsla(' + p.hue + ', 100%, ' + p.lightness + '%, ' + p.alpha + ')'
      ctx.stroke()
    }

    ctx.restore()
  }

  _reset(props) {
    const { numParticles, depth, size } = props

    this._particles = []

    const vp = {
      x: size.width / 2,
      y: size.height / 2
    }

    this._vp = vp
    this._bounds = {
      depth,
      width: size.width,
      height: size.height,
      x: { min: -vp.x, max: size.width - vp.x },
      y: { min: -vp.y, max: size.height - vp.y },
      z: { min: -depth, max: 500 }
    }

    for (let i = 0; i < numParticles; ++i) {
      this._particles.push(new Particle(this._bounds))
    }
  }
}

export default SpaceBackground
