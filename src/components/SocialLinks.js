import { useState } from 'react'

export default function SocialLinks({ onClick, activeLink = 'telegram' }) {
  const media = ['viber', 'messenger', 'telegram']
  const [active, setActive] = useState(activeLink)
  const handleClick = (link) => {
    setActive(link)
    onClick(link)
  }

  return (
    <div className="social-links flex-center">
      {media.map((link) => {
        return (
          <div
            className={`link ${link} ${
              active === link ? 'active animate jello' : ''
            }`}
            onClick={() => handleClick(link)}
            key={link}
          ></div>
        )
      })}
    </div>
  )
}
