import { useState } from 'react'

export default function SocialLinks() {
  const media = ['viber', 'messenger', 'telegram']
  const [active, setActive] = useState('telegram')

  return (
    <div className="social-links flex-center mt-05">
      {media.map((link) => {
        return (
          <div
            className={`link ${link} ${active === link ? 'active' : ''}`}
            onClick={() => setActive(link)}
            key={link}
          ></div>
        )
      })}
    </div>
  )
}
