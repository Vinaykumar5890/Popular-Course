import './index.css'
import {Link} from 'react-router-dom'
const Setting = () => {
  return (
    <div>
      <div className="sidebar">
        <div>
          <div className="lamaImg">
            <svg
              width="90"
              height="90"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="projectImage"
            >
              <path
                d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                fill="#7E22CE"
              />
              <path
                opacity="0.4"
                d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                fill="#7E22CE"
              />
            </svg>
            <h1 className="projectHeading">LAMA.</h1>
          </div>
          <p className="podcastFlow">Podcast Upload Flow</p>
          <Link to="/project">
            <a className="active1">
              <div className="svg1">1</div>
              <h1 className="activeHeading">Projects</h1>
            </a>
          </Link>

          <Link to="/widget">
            <a className="active1">
              {' '}
              <div className="svg1">2</div>{' '}
              <h1 className="activeHeading">Widget Configuration </h1>
            </a>
          </Link>

          <Link to="/deploy">
            <a className="active1">
              {' '}
              <div className="svg1">3</div>{' '}
              <h1 className="activeHeading">Deployment</h1>
            </a>
          </Link>
          <Link to="/pricing">
            <a className="active1">
              {' '}
              <div className="svg1">4</div>{' '}
              <h1 className="activeHeading">Pricing </h1>
            </a>
          </Link>
          <hr />
        </div>
        <div>
          <hr />
          <Link to="/setting">
            <a className="active">
              <div className="svg">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 5 39 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.31 21.03C15.21 21.71 14.59 22.25 13.85 22.25H10.15C9.40999 22.25 8.78999 21.71 8.69999 20.98L8.42999 19.09C8.15999 18.95 7.89999 18.8 7.63999 18.63L5.83999 19.35C5.13999 19.61 4.36999 19.32 4.02999 18.7L2.19999 15.53C1.84999 14.87 1.99999 14.09 2.55999 13.65L4.08999 12.46C4.07999 12.31 4.06999 12.16 4.06999 12C4.06999 11.85 4.07999 11.69 4.08999 11.54L2.56999 10.35C1.97999 9.90001 1.82999 9.09001 2.19999 8.47001L4.04999 5.28001C4.38999 4.66001 5.15999 4.38001 5.83999 4.65001L7.64999 5.38001C7.90999 5.21001 8.16999 5.06001 8.42999 4.92001L8.69999 3.01001C8.78999 2.31001 9.40999 1.76001 10.14 1.76001H13.84C14.58 1.76001 15.2 2.30001 15.29 3.03001L15.56 4.92001C15.83 5.06001 16.09 5.21001 16.35 5.38001L18.15 4.66001C18.86 4.40001 19.63 4.69001 19.97 5.31001L21.81 8.49001C22.17 9.15001 22.01 9.93001 21.45 10.37L19.93 11.56C19.94 11.71 19.95 11.86 19.95 12.02C19.95 12.18 19.94 12.33 19.93 12.48L21.45 13.67C22.01 14.12 22.17 14.9 21.82 15.53L19.96 18.75C19.62 19.37 18.85 19.65 18.16 19.38L16.36 18.66C16.1 18.83 15.84 18.98 15.58 19.12L15.31 21.03ZM10.62 20.25H13.38L13.75 17.7L14.28 17.48C14.72 17.3 15.16 17.04 15.62 16.7L16.07 16.36L18.45 17.32L19.83 14.92L17.8 13.34L17.87 12.78L17.8731 12.7531C17.902 12.5027 17.93 12.2607 17.93 12C17.93 11.73 17.9 11.47 17.87 11.22L17.8 10.66L19.83 9.08001L18.44 6.68001L16.05 7.64001L15.6 7.29001C15.18 6.97001 14.73 6.71001 14.27 6.52001L13.75 6.30001L13.38 3.75001H10.62L10.25 6.30001L9.71999 6.51001C9.27999 6.70001 8.83999 6.95001 8.37999 7.30001L7.92999 7.63001L5.54999 6.68001L4.15999 9.07001L6.18999 10.65L6.11999 11.21C6.08999 11.47 6.05999 11.74 6.05999 12C6.05999 12.26 6.07999 12.53 6.11999 12.78L6.18999 13.34L4.15999 14.92L5.53999 17.32L7.92999 16.36L8.37999 16.71C8.80999 17.04 9.23999 17.29 9.70999 17.48L10.24 17.7L10.62 20.25ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.49999 13.933 8.49999 12C8.49999 10.067 10.067 8.50001 12 8.50001C13.933 8.50001 15.5 10.067 15.5 12Z"
                    fill="white"
                  />
                </svg>
              </div>{' '}
              <h1 className="heading">Setting</h1>
            </a>
          </Link>
        </div>
      </div>
      <div class="content">
        <div className="account-settings-container">
          <header className="header">
            <div className="dfb">
              <svg
                width="27"
                height="20"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9999 6.41159L32.8333 16.1616V33.0833H28.4999V20.0833H15.4999V33.0833H11.1666V16.1616L21.9999 6.41159ZM21.9999 0.583252L0.333252 20.0833H6.83325V37.4166H19.8333V24.4166H24.1666V37.4166H37.1666V20.0833H43.6666L21.9999 0.583252Z"
                  fill="#7E22CE"
                />
              </svg>
              <h1 className="accountSetting">/ Account Settings</h1>
            </div>

            <div className="notifications">
              <div className="language-selector">
                <select>
                  <option value="en">EN</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/61ba/d952/102357d8097692f48fbbb1903bb9299a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWkgVvJjnmI1PVyWtJw4KmOvv9Ur-olzfYioNoIL6lEtwoiEVfu0fKwNbMgU~i3GAXYHwW2khJCPgy9MENkvuQYoeRNk9bjTSi4BiQse5ofUdc8fCjel7hFAwegtURgmg6vGX9zKhYyTc4MNukfjx1qMXtVAgyTnv1kOg-O27M2--Mn7p0JH3LKRu~jIiz6J-P-3nRk~F7dUjHeKL7FYAAwTtnCwPeCi60tCDD1yepRO~mzeJMbRHy3S26NaJDpMCgmSlfsX-4pX9QyO3AbyLojyCTrWnyddiIrvEFLJvX5UULtQGA259N3pux1tLidi5y9Bz8nmL9s3ecHyx3gQpA__"
                className="country"
              />
              <svg
                width="34"
                height="34"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z"
                  fill="black"
                />
              </svg>
            </div>
          </header>

          <h2>Account Settings</h2>

          <div className="profile-section">
            <img
              src="https://s3-alpha-sig.figma.com/img/caa8/f4ed/231db19d5444bd9c07e6c0a7c6416b96?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OABr4s918CgghKIQEJhfyskMK0qPZ~aIrkk7oFAUzen7gdzxy9orwrWEoLCWnzdtCgxlphe6LPN3gZqkfq8SN9G5wFeKL90TjBmWJFwDWb1UfAX8alV7XWZmBTM-dgk7z3VPJGO3PXfc6BqjcVapAEv9~sW31q72tur~~BwHMtAegl-fQZEPQmRpMXOhdjbfRbvD7BCRlABeRmE61SDTMUtZuz0drSugIMlgXJGsUtbHPj0-Ue9qktrrSuMd~7nVx4sFTO0zgmnf4dPNuJZz21u6kZ16ApGHxpGQUwoIeASBFBN93TphS6BFP~iwy6FJ~l48QthpvTISDmEp5C-c~g__"
              alt="Profile"
              className="profile-image"
            />
            <div className="input-group">
              <label>User Name</label>
              <input type="text" defaultValue="alphauser" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" defaultValue="alphauser@gmail.com" />
            </div>
          </div>
          <h2>Subscriptions</h2>
          <div className="subscription-section">
            <p className="subscription-info">
              You are currently on the <strong>Ques AI Basic Plan!</strong>{' '}
              <button className="upgrade-button">Upgrade</button>
            </p>
          </div>
          <a className="cancel-link">Cancel Subscription</a>
        </div>
      </div>
    </div>
  )
}
export default Setting
