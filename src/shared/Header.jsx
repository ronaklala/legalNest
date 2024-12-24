import React from "react";

const Header = () => {
  return (
    <header id="masthead" className="site-header">
      <div className="top-menu-social clearfix">
        <div className="container">
          <div className="row">
            <div className="header-social col-xs-4 col-sm-5 col-md-6 col-lg-6">
              {" "}
              <a
                className="header-social-icons"
                title="Facebook"
                href="#"
                target="_blank"
              >
                <i className="icon-social-facebook icons" />
              </a>{" "}
              <a
                className="header-social-icons"
                title="Twitter"
                href="#"
                target="_blank"
              >
                <i className="icon-social-twitter icons" />
              </a>{" "}
              <a
                className="header-social-icons"
                title="Linkedin"
                href="#"
                target="_blank"
              >
                <i className="icon-social-linkedin icons" />
              </a>
            </div>
            <div className="top-menu text-right pull-right col-xs-8 col-sm-7 col-md-6 col-lg-6">
              <ul id="top-menu" className="menu">
                <li
                  id="menu-item-451"
                  className="icon-envelope-open icons menu-item menu-item-type-custom menu-item-object-custom menu-item-451"
                >
                  <a href="#">info@legalNest.co</a>
                </li>
                <li
                  id="menu-item-452"
                  className="icon-screen-smartphone icons menu-item menu-item-type-custom menu-item-object-custom menu-item-452"
                >
                  <a href="#">: 9076040468</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-header clearfix">
        <div className="container">
          <div className="site-branding pull-left">
            {" "}
            <a href="/" title="Consultancy" rel="home">
              {" "}
              <img
                src="wp-content/themes/consultancy/images/logo.png"
                alt=""
              />{" "}
            </a>
          </div>
          {/* .site-branding */}
          <div className="header-right pull-right">
            <div className="header-menu clearfix">
              <div
                id="site-navigation"
                className="main-navigation pull-right"
                role="navigation"
              >
                <nav
                  className="menu-toggle pull-right"
                  aria-controls="primary-menu"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars" />
                </nav>
                <ul id="primary-menu" className="menu nav-menu">
                  <li
                    id="menu-item-531"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-536"
                  >
                    <a href="/" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li
                    id="menu-item-536"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-536"
                  >
                    <a href="/About">About Us</a>
                  </li>

                  <li
                    id="menu-item-536"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-536"
                  >
                    <a href="/Team">Team</a>
                  </li>

                  <li
                    id="menu-item-533"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-533"
                  >
                    <a href="/Services">Services</a>
                  </li>
                  <li
                    id="menu-item-532"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-532"
                  >
                    <a href="/Contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* #site-navigation */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
