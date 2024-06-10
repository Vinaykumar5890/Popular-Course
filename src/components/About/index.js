import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class About extends Component {
  state = {configuration: 'general'}
  general = () => {
    this.setState({configuration: 'general'})
  }
  display = () => {
    this.setState({configuration: 'display'})
  }
  advance = () => {
    this.setState({configuration: 'advance'})
  }
  rendered = () => {
    const {configuration} = this.state
    switch (configuration) {
      case 'general':
        return (
          <div>
            <h1 className="head">Chatbot Name</h1> 
            <input type="text" className="type"/>
            <h1 className="head">Welocome Message</h1> 
            <input type="text" className="type"/>
            <h1 className="head">Input Placeholder</h1> 
            <input type="text" className="type"/>

          </div>
        )
        break
      case 'display':
        return (
          <div>
            <h1>Display</h1>
          </div>
        )
        break
      case 'advance':
        return (
          <div>
            <h1>Advance</h1>
          </div>
        )
        break
      default:
        return null
    }
  }
  render() {
    const {configuration} = this.state
    console.log(configuration)
    return (
      <div>
        <div className="sidebar">
          <div>
            <div className="lamaImg">
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
              <a className="active">
                {' '}
                <div className="svg">2</div>{' '}
                <h1 className="headings">Widget Configuration </h1>
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
              <a className="active1">
                <div className="svg1">
                  <svg
                    width="24"
                    height="26"
                    viewBox="0 5 29 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.3102 20.03C13.2102 20.71 12.5902 21.25 11.8502 21.25H8.15023C7.41023 21.25 6.79023 20.71 6.70023 19.98L6.43023 18.09C6.16023 17.95 5.90023 17.8 5.64023 17.63L3.84023 18.35C3.14023 18.61 2.37023 18.32 2.03023 17.7L0.200234 14.53C-0.149766 13.87 0.000234306 13.09 0.560234 12.65L2.09023 11.46C2.08023 11.31 2.07023 11.16 2.07023 11C2.07023 10.85 2.08023 10.69 2.09023 10.54L0.570234 9.35001C-0.0197657 8.90001 -0.169766 8.09001 0.200234 7.47001L2.05023 4.28001C2.39023 3.66001 3.16023 3.38001 3.84023 3.65001L5.65023 4.38001C5.91023 4.21001 6.17023 4.06001 6.43023 3.92001L6.70023 2.01001C6.79023 1.31001 7.41023 0.76001 8.14023 0.76001H11.8402C12.5802 0.76001 13.2002 1.30001 13.2902 2.03001L13.5602 3.92001C13.8302 4.06001 14.0902 4.21001 14.3502 4.38001L16.1502 3.66001C16.8602 3.40001 17.6302 3.69001 17.9702 4.31001L19.8102 7.49001C20.1702 8.15001 20.0102 8.93001 19.4502 9.37001L17.9302 10.56C17.9402 10.71 17.9502 10.86 17.9502 11.02C17.9502 11.18 17.9402 11.33 17.9302 11.48L19.4502 12.67C20.0102 13.12 20.1702 13.9 19.8202 14.53L17.9602 17.75C17.6202 18.37 16.8502 18.65 16.1602 18.38L14.3602 17.66C14.1002 17.83 13.8402 17.98 13.5802 18.12L13.3102 20.03ZM8.62023 19.25H11.3802L11.7502 16.7L12.2802 16.48C12.7202 16.3 13.1602 16.04 13.6202 15.7L14.0702 15.36L16.4502 16.32L17.8302 13.92L15.8002 12.34L15.8702 11.78L15.8733 11.7531C15.9023 11.5027 15.9302 11.2607 15.9302 11C15.9302 10.73 15.9002 10.47 15.8702 10.22L15.8002 9.66001L17.8302 8.08001L16.4402 5.68001L14.0502 6.64001L13.6002 6.29001C13.1802 5.97001 12.7302 5.71001 12.2702 5.52001L11.7502 5.30001L11.3802 2.75001H8.62023L8.25023 5.30001L7.72023 5.51001C7.28023 5.70001 6.84023 5.95001 6.38023 6.30001L5.93023 6.63001L3.55023 5.68001L2.16023 8.07001L4.19023 9.65001L4.12023 10.21C4.09023 10.47 4.06023 10.74 4.06023 11C4.06023 11.26 4.08023 11.53 4.12023 11.78L4.19023 12.34L2.16023 13.92L3.54023 16.32L5.93023 15.36L6.38023 15.71C6.81023 16.04 7.24023 16.29 7.71023 16.48L8.24023 16.7L8.62023 19.25ZM13.5002 11C13.5002 12.933 11.9332 14.5 10.0002 14.5C8.06724 14.5 6.50023 12.933 6.50023 11C6.50023 9.06701 8.06724 7.50001 10.0002 7.50001C11.9332 7.50001 13.5002 9.06701 13.5002 11Z"
                      fill="#1D1B20"
                    />
                  </svg>
                </div>{' '}
                <h1 className="activeHeading">Setting</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className="content">
          <div className="upload-container">
            <nav className="navbar">
              <div className="nav1">
                <svg
                  width="34"
                  height="26"
                  viewBox="0 0 44 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0002 6.41159L32.8335 16.1616V33.0833H28.5002V20.0833H15.5002V33.0833H11.1668V16.1616L22.0002 6.41159ZM22.0002 0.583252L0.333496 20.0833H6.8335V37.4166H19.8335V24.4166H24.1668V37.4166H37.1668V20.0833H43.6668L22.0002 0.583252Z"
                    fill="#7E22CE"
                  />
                </svg>
                <h1 className="uploadProjectHeading">
                  {' '}
                  / Sample Project /{' '}
                  <span className="uploadProjectHeadingSpan">
                    {' '}
                    Widget Configuration
                  </span>
                </h1>
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
            </nav>
            <h2 className="uploadHeading">Configuration</h2>
            <div className="upload-options">
              <h1
                onClick={this.general}
                className={configuration == 'general' ? 'color' : 'nonColor'}
              >
                General
              </h1>
              <h1
                onClick={this.display}
                className={configuration == 'display' ? 'color' : 'nonColor'}
              >
                Display
              </h1>
              <h1
                onClick={this.advance}
                className={configuration == 'advance' ? 'color' : 'nonColor'}
              >
                Advanced
              </h1>
            </div>
            {this.rendered()}
          </div>
        </div>
      </div>
    )
  }
}
export default About
