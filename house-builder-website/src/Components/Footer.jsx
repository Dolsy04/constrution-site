function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="inner-footer-container">
          <div className="left-section">
            <h1>LOGO</h1>
          </div>
          <div className="right-section">
            <div className="nav-links">
              <ul>
                <li>
                  <button>Home</button>
                </li>
                <li>
                  <button>About</button>
                </li>
                <li>
                  <button>Testimonial</button>
                </li>
                <li>
                  <button>Services</button>
                </li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </div>
            <div className="policies-links">
              <ul>
                <li>
                  <button>Privacy</button>
                </li>
                <li>
                  <button>Policy</button>
                </li>
                <li>
                  <button>Terms & Condition</button>
                </li>
                <li>
                  <button>How we work</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p>&copy;{new Date().getFullYear()} All right reserved</p>
      </div>
    </>
  );
}

export default Footer;
