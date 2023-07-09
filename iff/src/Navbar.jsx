import React from 'react';
import cssstyle from './index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
  return (
      <>
        <div className='top_nav'>
          <a className='icon'><FacebookIcon /></a>
          <a className='icon'><InstagramIcon/></a>
          <a className='icon'><TwitterIcon /></a>
          <a className='icon'><YouTubeIcon /></a>
        </div>
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src="https://www.indianfootballfoundation.org/img/logo.png" alt="Logo" width="230" height="70" className="d-inline-block align-text-top" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-about">
                        ABOUT US
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Vision</Dropdown.Item>
                        <Dropdown.Item href="#">Mission</Dropdown.Item>
                        <Dropdown.Item href="#">Scholarship Model</Dropdown.Item>
                        <Dropdown.Item href="#">Career</Dropdown.Item>
                        <Dropdown.Item href="#">Internship</Dropdown.Item>
                        <Dropdown.Item href="#">Financials</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-program">
                        WHAT WE DO
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Promoting the game</Dropdown.Item>
                        <Dropdown.Item href="#">Talent Identification & Nurturing</Dropdown.Item>
                        <Dropdown.Item href="#">Our Achievements</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-media">
                        CASE STUDIES
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">IFF-BBFS Scholarship Program</Dropdown.Item>
                        <Dropdown.Item href="#">IFF Coaches Development Program</Dropdown.Item>
                        <Dropdown.Item href="#">NGO Partnerships</Dropdown.Item>
                        <Dropdown.Item href="#">Medical Support</Dropdown.Item>
                        <Dropdown.Item href="#">Infrastructure Development</Dropdown.Item>
                        <Dropdown.Item href="#">Workshops with Real Madrid Foundation</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">TEAM</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </>
  );
}

export default Navbar;
