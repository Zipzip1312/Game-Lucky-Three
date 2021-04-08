import { useState } from 'react'
import DogsImg from 'images/dogs.svg'
import Stars from 'components/Stars'
import SocialLinks from 'components/SocialLinks'
import SubmitInvite from 'components/SubmitInvite'

export default function InviteScreen() {
  const [doneInviting, setDoneInviting] = useState(false)
  const [invitesLeft, setInvitesLeft] = useState(2)
  const [media, setMedia] = useState('')
  const inviteText = invitesLeft > 1 ? `${invitesLeft} друзям` : 'ще 1 другу'

  const handleLinkClick = (link) => {
    setMedia(link)
    console.log(link)
  }
  const handleInvite = () => {
    setInvitesLeft(invitesLeft - 1)
    console.log('inviting')
    if (invitesLeft === 1) {
      console.log('DONE INVITING')
      setDoneInviting(true)
    }
  }

  return (
    <div className="card">
      <img className="card-image" src={DogsImg} alt="Friends Logo" />
      <div className="title-2 card-title-right">
        Запроси
        <br />
        друга
      </div>
      <div
        className={`card-info text-center bold mt-05 ${
          doneInviting ? 'hidden' : ''
        }`}
      >
        розкажи про нас {inviteText}
      </div>
      <div className="form flex-center">
        <div className="form-control">
          {!doneInviting && (
            <div className="label">
              <SocialLinks onClick={handleLinkClick} activeLink={media} />
            </div>
          )}
          <div className="form-submit invite">
            <SubmitInvite
              media={media}
              done={doneInviting}
              onClick={handleInvite}
            />
          </div>
        </div>
      </div>
      <Stars />
    </div>
  )
}
