import React from "react";

const Footer = props => {
  return (
    <footer className="site-footer">
      <div className="container pt-4">
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item pr-md-2">
                <a
                  href="http://lnkd.in/b8mRhgC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" /> LinkedIn profile
                </a>
              </li>
              <li className="list-inline-item pr-md-2">
                <a
                  href="http://goo.gl/Vcfz0V"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" /> Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="&#109;&#x61;&#x69;&#108;&#116;&#111;&#x3a;&#122;&#x68;&#97;&#111;&#x63;&#x6f;&#100;&#121;&#x40;&#x67;&#x6d;&#x61;&#x69;&#108;&#46;&#x63;&#111;&#109;">
                  <i className="fa fa-envelope" /> Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 text-right">
            © Copyright {new Date().getFullYear()}, all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
