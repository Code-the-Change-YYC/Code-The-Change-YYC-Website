import React from "react"

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-col">
              <h4>About Code The Change YYC</h4>
              <p>
                Welcome to a passionate club of engineers and makers. Code from
                day one, with impact.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer-col middle">
              <h4>Our Partner Chapters</h4>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">
                    California{" "}
                    <a
                      class="turquoise"
                      href="http://codethechange.stanford.edu/#/"
                    >
                      Code The Change Stanford
                    </a>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">
                    British Columbia{" "}
                    <a class="turquoise" href="http://codethechange.ca/">
                      Code The Change UBC
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer-col last">
              <h4>Social Media</h4>
              <span class="fa-stack">
                <a href="https://www.facebook.com/CodeTheChangeYYC/">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="https://www.linkedin.com/company/code-the-change-yyc/">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-linkedin-in fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="https://www.instagram.com/codethechangeyyc/">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p class="p-small">
                Copyright © Code The Change YYC.
                <br />
                Web Page Template by{" "}
                <a href="https://inovatik.com">Inovatik.</a> Icons from
                Flaticon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
