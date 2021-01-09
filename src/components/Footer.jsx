import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='footer-col'>
              <h4>About Code The Change YYC</h4>
              <p>
                Welcome to a passionate club of engineers and makers. Code from day one, with
                impact.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-col middle'>
              <h4>Our Partner Chapters</h4>
              <ul className='list-unstyled li-space-lg'>
                <li className='media'>
                  <i className='fas fa-square' />
                  <div className='media-body'>
                    California{' '}
                    <a className='turquoise' href='http://codethechange.stanford.edu/#/'>
                      Code The Change Stanford
                    </a>
                  </div>
                </li>
                <li className='media'>
                  <i className='fas fa-square' />
                  <div className='media-body'>
                    British Columbia{' '}
                    <a className='turquoise' href='http://codethechange.ca/'>
                      Code The Change UBC
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-col last'>
              <h4>Social Media</h4>
              <span className='fa-stack'>
                <a href='https://www.facebook.com/CodeTheChangeYYC/'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-facebook-f fa-stack-1x' />
                </a>
              </span>
              <span className='fa-stack'>
                <a href='https://www.linkedin.com/company/code-the-change-yyc/'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-linkedin-in fa-stack-1x' />
                </a>
              </span>
              <span className='fa-stack'>
                <a href='https://www.instagram.com/codethechangeyyc/'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-instagram fa-stack-1x' />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='p-small'>
                Copyright © Code The Change YYC.
                <br />
                Web Page Template by <a href='https://inovatik.com'>Inovatik.</a> Icons from
                Flaticon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
