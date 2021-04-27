import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleSendInvite } from 'redux/appReducer'
import DogsImg from 'images/dogs.svg'
import Stars from 'components/Stars'
import SocialLinks from 'components/SocialLinks'
import InviteButton from 'components/InviteButton'

export default function InviteScreen() {
  const invitesLeft = useSelector((state) => state.app.invitesLeft)
  const doneInviting = useSelector((state) => state.app.doneInviting)
  const [media, setMedia] = useState('')
  const inviteText = invitesLeft > 1 ? `${invitesLeft} друзям` : 'ще 1 другу'
  const dispatch = useDispatch()

  const selectMedia = (link) => {
    setMedia(link)
    console.log(link)
  }

  const sendInvite = () => {
    console.log('sending invite')
    dispatch(handleSendInvite())
  }

  return (
    <div className="card">
      <img className="card-image" src={DogsImg} alt="Friends Logo" />
      <div className="title-1 card-title-right mb-1">
        Запроси
        <br />
        друга
      </div>
      <div className={`card-info bold nowrap ${doneInviting ? 'hidden' : ''}`}>
        розкажи про нас {inviteText}
      </div>
      <div className="form flex-center">
        <div className="form-control w-100 space-around">
          {!doneInviting && (
            <div className="label mr-1">
              <SocialLinks onClick={selectMedia} activeLink={media} />
            </div>
          )}
          <InviteButton
            media={media}
            toGame={doneInviting}
            onClick={sendInvite}
          />
        </div>
      </div>
      <Stars />
    </div>
  )
}
