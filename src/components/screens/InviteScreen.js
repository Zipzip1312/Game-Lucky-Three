import { useState } from 'react'
import DogsImg from 'images/dogs.svg'
import Stars from 'components/Stars'
import SocialLinks from 'components/SocialLinks'
import InvitesCounter from 'components/InvitesCounter'

export default function InviteScreen() {
  const [invitesLeft, setInvitesLeft] = useState(5)

  return (
    <div className="card">
      <img className="card-image" src={DogsImg} alt="Friends Logo" />
      <div className="title-2 card-title-right">
        Запроси
        <br />
        друга
      </div>
      <div className="card-info text-center bold mt-05">
        розкажи про нас 5 друзям
      </div>
      <div className="flex-center mt-1" style={{ alignItems: 'end' }}>
        <SocialLinks />
        <InvitesCounter counter={invitesLeft} />
      </div>
      <Stars />
    </div>
  )
}
