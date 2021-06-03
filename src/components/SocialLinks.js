import { useState } from 'react'

export default function SocialLinks({
  onClick,
  activeLink = '',
  disabled = false
}) {
  const media = ['viber', 'messenger', 'telegram']
  const [active, setActive] = useState(activeLink)
  const handleClick = (link) => {
    setActive(link)
    onClick(link)
  }

  return (
    <div className={`social-links flex-center ${disabled ? 'disabled' : ''}`}>
      {media.map((link) => {
        return (
          <div
            className={`link ${link} ${
              active === link ? 'active animate jello' : ''
            }`}
            onClick={() => !disabled && handleClick(link)}
            key={link}
          ></div>
        )
      })}
    </div>
  )
}
