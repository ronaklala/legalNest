import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-top-area">
        <div className="container footer-3-columns clearfix">
          <div className="row">
            <div
              id="footer-1"
              className="footer-1 col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column"
              role="complementary"
            >
              <aside id="text-1" className="widget widget_text">
                <div className="textwidget">
                  <div style={{ paddingTop: 90 }}>
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src="https://demo.themeamber.com/consultancy/wp-content/themes/consultancy/images/logo2.png"
                      alt=""
                    />
                    <noscript>
                      &lt;img class="lazyload"
                      src="wp-content/themes/consultancy/images/logo2.png"
                      alt=""&gt;
                    </noscript>
                  </div>
                </div>
              </aside>
            </div>
            <div
              id="footer-2"
              className="footer-2 col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column"
              role="complementary"
            >
              <aside id="nav_menu-1" className="widget widget_nav_menu">
                <h3 className="widget-title">Quick links</h3>
                <div className="menu-footer-menu-container">
                  <ul id="menu-footer-menu" className="menu">
                    <li
                      id="menu-item-528"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-526 current_page_item menu-item-528"
                    >
                      <a href="/" aria-current="page">
                        Home
                      </a>
                    </li>
                    <li
                      id="menu-item-544"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544"
                    >
                      <a href="#">&nbsp;</a>
                    </li>
                    <li
                      id="menu-item-527"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527"
                    >
                      <a href="/About">About Us</a>
                    </li>
                    <li
                      id="menu-item-544"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544"
                    >
                      <a href="#">&nbsp;</a>
                    </li>
                    <li
                      id="menu-item-527"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527"
                    >
                      <a href="/Services">Services</a>
                    </li>
                    <li
                      id="menu-item-544"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544"
                    >
                      <a href="#">&nbsp;</a>
                    </li>
                    <li
                      id="menu-item-527"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527"
                    >
                      <a href="/Team">Team</a>
                    </li>
                    <li
                      id="menu-item-544"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544"
                    >
                      <a href="#">&nbsp;</a>
                    </li>
                    <li
                      id="menu-item-527"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527"
                    >
                      <a href="/Contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div
              id="footer-3"
              className="footer-3 col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column"
              role="complementary"
            >
              <aside id="text-2" className="widget widget_text">
                <h3 className="widget-title">Socials</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      {" "}
                      <a
                        className="social-icons"
                        title="Facebook"
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a
                        className="social-icons"
                        title="Twitter"
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a
                        className="social-icons"
                        title="Youtube"
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-youtube" />
                      </a>{" "}
                      <a
                        className="social-icons"
                        title="Google +"
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                      <a
                        className="social-icons"
                        title="Instagram"
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <footer id="colophon" className="footer-bottom-area">
        <div className="container">
          <div className="st-copyright"> © 2024 Legalnest</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
