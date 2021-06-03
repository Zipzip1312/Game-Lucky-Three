import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setInviteLink, handleSendInvite } from 'redux/appReducer'
import DogsImg from 'images/dogs.svg'
import Stars from 'components/Stars'
import SocialLinks from 'components/SocialLinks'
import InviteButton from 'components/InviteButton'

export default function InviteScreen() {
  const { inviteLink, invitesLeft } = useSelector((state) => state.app)
  const [doneInviting, setDoneInviting] = useState(invitesLeft < 1)
  const inviteFriendsText = `розкажи про нас ${
    invitesLeft > 1 ? `${invitesLeft} друзям` : 'ще 1 другу'
  }`
  const dispatch = useDispatch()

  useEffect(() => {
    setDoneInviting(invitesLeft < 1)
    // ToDo: done inviting -> send link and state to api for update
  }, [invitesLeft])

  return (
    <div className="card mt-minus-2">
      <img className="card-image friends" src={DogsImg} alt="Friends Logo" />
      <div className="title-1 card-title-right mb-2">
        Запроси
        <br />
        друга
      </div>
      <div className={`card-info bold nowrap ${doneInviting ? 'hidden' : ''}`}>
        {inviteFriendsText}
      </div>
      <div className="form flex-center mt-2">
        <div className="form-control w-100 space-around">
          {!doneInviting && (
            <div className="label mr-1">
              <SocialLinks
                onClick={(link) => dispatch(setInviteLink(link))}
                activeLink={inviteLink}
              />
            </div>
          )}
          <InviteButton
            inviteLink={inviteLink}
            showToGameBtn={doneInviting}
            onClick={() => dispatch(handleSendInvite())}
          />
        </div>
      </div>
      <Stars />
    </div>
  )
}
