import React from "react";
import { services } from "../mock/services";

const Services = () => {
  return (
    <div id="content" className="site-content">
      <div
        className="page-title-wrap text-left parallax"
        style={{ padding: "", backgroundAttachment: "fixed" }}
      >
        <div className="container">
          <h1 className="page-title display_none" style={{ color: "" }}>
            <span>Services</span>
          </h1>
        </div>
      </div>
      <div className="container ct-lv1">
        <div className="row">
          <div
            id="primary"
            className="content-area content-page col-xs-12 col-sm-12 col-md-12 col-lg-12"
          >
            <main id="main" className="site-main" role="main">
              <div
                id="post-8"
                className="post-8 page type-page status-publish hentry"
              >
                <div className="entry-content">
                  <div className="wpb-content-wrapper">
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="st-custom-heading-wraper st-custom-heading-layout2 text-default"
                              style={{ marginBottom: 50 }}
                            >
                              <h2
                                className="st-heading-title"
                                style={{ color: "" }}
                              >
                                <span> SERVICES</span>
                              </h2>
                              <hr
                                className="heading-line"
                                style={{ background: "" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid vc_custom_1448582553412">
                      {services.map((s, i) => (
                        <>
                          <div
                            className="wpb_column vc_column_container vc_col-sm-6"
                            style={{ marginTop: "15px" }}
                          >
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="st-feature-box-wraper st-feature-box-layout2 text-default">
                                  <div className="st-feature-box">
                                    <div className="st-feature-box-icon">
                                      <div className="feature-box-image">
                                        <img
                                          decoding="async"
                                          src={
                                            "../wp-content/uploads/2015/11/" +
                                            s.image
                                          }
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <h3>{s.name}</h3>
                                    <div className="feature-box-content">
                                      {s.description}
                                    </div>
                                    <div className="st-feature-box-button st-readmore">
                                      <a
                                        href="/#"
                                        className="primary-hover-color"
                                      >
                                        Contact Us
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>

                    <br />
                    <br />

                    <br />
                    <br />
                    <div className="vc_row-full-width vc_clearfix" />

                    <div className="vc_row-full-width vc_clearfix" />
                  </div>
                </div>
                {/* .entry-content */}
                <div className="page-edit" />
                {/* .entry-footer */}
              </div>
              {/* #post-## */}
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>
        {/* #row */}
      </div>
      {/* #container */}
    </div>
  );
};

export default Services;
