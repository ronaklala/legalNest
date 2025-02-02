import React from "react";
import $ from "jquery";

const Header = () => {
  const openMenu = () => {
    if ($("#site-navigation").hasClass("toggled") === false) {
      $("#site-navigation").removeClass("main-navigation pull-right toggled");
      $("#site-navigation").addClass("main-navigation pull-right toggled");
    } else {
      $("#site-navigation").removeClass("toggled");
    }
  };

  return (
    <header id="masthead" className="site-header">
      <div className="top-menu-social clearfix">
        <div className="container">
          <div className="row">
            <div className="top-menu text-right pull-right col-xs-8 col-sm-7 col-md-6 col-lg-6">
              <ul id="top-menu" className="menu">
                <li
                  id="menu-item-451"
                  className="icon-envelope-open icons menu-item menu-item-type-custom menu-item-object-custom menu-item-451"
                >
                  <a href="/#">info@legalNest.co</a>
                </li>
                <li
                  id="menu-item-452"
                  className="icon-screen-smartphone icons menu-item menu-item-type-custom menu-item-object-custom menu-item-452"
                >
                  <a href="/#">
                    <i class="fa-solid fa-phone"></i> &nbsp;: +91 9076040468 |
                    +91 8860783250
                  </a>
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
              <img src="./web_logo.png" alt="" />{" "}
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
                  onClick={openMenu}
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
