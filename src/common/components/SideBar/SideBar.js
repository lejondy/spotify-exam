import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import config from '../../../config'
import { getToken, removeToken } from '../../../utils/index'
import SidebarOption from './SidebarOption'
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

// import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg'
import './_sidebar.scss'

// function renderSideBarOption(icon, text, { selected } = {}, handleClick) {
//   return (
//     <div
//       className={cx('sidebar__option', {
//         'sidebar__option--selected': selected,
//       })}
//     >
//       <FontAwesomeIcon icon={icon} />
//       <a href="/" onClick={handleClick}>
//         {text}
//       </a>
//     </div>
//   )
// }

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState('discover')
  const { authEndpoint, clientId, redirectUri } = config.api
  const profile = useSelector((state) => state.profile.data) || {}
  const hasProfile = typeof profile.display_name !== 'undefined'

  const handleNavClick = (name) => {
    setActiveMenu(name)
  }
  const handleLogout = () => {
    removeToken()
    window.location.reload()
  }

  return (
    <div className="sidebar">
      {!getToken() && (
        <div className="sidebar__option__login">
          <a
            className="sidebar__option__login__btn"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${config.scopes.join(
              '%20',
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        </div>
      )}
      {hasProfile && (
        <div className="sidebar__profile">
          <img
            src={profile.images[0].url}
            alt="avatar"
            className="sidebar__profile__avatar"
          />
          <p>{profile.display_name}</p>
        </div>
      )}

      <div className="sidebar__options">
        <SidebarOption
          icon={faHeadphonesAlt}
          text={'Discover'}
          selected={activeMenu === 'discover'}
          handleClick={(e) => {
            e.preventDefault()
            handleNavClick('discover')
          }}
        />
        <SidebarOption
          icon={faSearch}
          text={'Search'}
          selected={activeMenu === 'search'}
          handleClick={(e) => {
            e.preventDefault()
            handleNavClick('search')
          }}
        />
        <SidebarOption
          icon={faHeart}
          text={'Favourites'}
          selected={activeMenu === 'favourites'}
          handleClick={(e) => {
            e.preventDefault()
            handleNavClick('favourites')
          }}
        />
        <SidebarOption
          icon={faPlayCircle}
          text={'Playlists'}
          selected={activeMenu === 'playlists'}
          handleClick={(e) => {
            e.preventDefault()
            handleNavClick('playlists')
          }}
        />
        <SidebarOption
          icon={faStream}
          text={'Charts'}
          selected={activeMenu === 'charts'}
          handleClick={(e) => {
            e.preventDefault()
            handleNavClick('charts')
          }}
        />
        {hasProfile && (
          <SidebarOption
            icon={faSignOutAlt}
            text={'Logout'}
            selected={activeMenu === 'logout'}
            handleClick={(e) => {
              e.preventDefault()
              handleLogout()
            }}
          />
        )}
      </div>
    </div>
  )
}
