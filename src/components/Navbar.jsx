import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import useScrollPosition from '../Hooks/ScrollPosition'

export default function Navbar() {
  const pos = useScrollPosition()

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${
        pos > 60 ? 'top-nav-collapse' : ''
      }`}>
      <AniLink
        paintDrip
        hex='#00bfd8'
        duration={0.8}
        className='navbar-brand logo-image'
        to='/#header'>
        <img src='/images/_logo.png' alt='alternative' />
      </AniLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExampleDefault'
        aria-controls='navbarsExampleDefault'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-awesome fas fa-bars' />
        <span className='navbar-toggler-awesome fas fa-times' />
      </button>

      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <AnchorLink className='nav-link page-scroll' to='/#header'>
              Home
            </AnchorLink>
          </li>
          <li className='nav-item'>
            <AnchorLink className='nav-link page-scroll' to='/#students'>
              Who is it for?
            </AnchorLink>
          </li>
          <li className='nav-item dropdown'>
            <AnchorLink
              className='nav-link dropdown-toggle page-scroll'
              to='/#information'
              aria-haspopup='true'
              aria-expanded='false'>
              Details
            </AnchorLink>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <AniLink fade duration={0.3} className='dropdown-item' to='/events'>
                <span className='item-text'>Events</span>
              </AniLink>
              <div className='dropdown-items-divide-hr' />
              <AniLink fade duration={0.3} className='dropdown-item' to='/projects'>
                <span className='item-text'>Projects</span>
              </AniLink>
              <div className='dropdown-items-divide-hr' />
              <AniLink fade duration={0.3} className='dropdown-item' to='/sponsors'>
                <span className='item-text'>Sponsors</span>
              </AniLink>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle page-scroll'
              href='#signup'
              aria-expanded='false'>
              Sign Up
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <AniLink fade duration={0.3} className='dropdown-item page-scroll' to='/members'>
                <span className='item-text'>Member Registration</span>
              </AniLink>
              <div className='dropdown-items-divide-hr' />
              <a
                className='dropdown-item'
                href='https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0'>
                <span className='item-text'>Cause Registration</span>
              </a>
            </div>
          </li>

          <li className='nav-item'>
            <AnchorLink className='nav-link' to='/#about'>
              About
            </AnchorLink>
          </li>
          <li className='nav-item'>
            <AnchorLink className='nav-link page-scroll' to='/#contact'>
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
