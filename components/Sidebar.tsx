import React from "react";
import styled from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import logo from 'public/small-logo.png'

const MdOutlineChevronRight = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdOutlineChevronRight))
const MdSearch = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdSearch))
const MdCashConnected = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdCastConnected))
const MdPermMedia = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdPermMedia))
const MdPlaylistPlay = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdPlaylistPlay))
const MdEditCalendar = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdEditCalendar))
const MdSetting = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdSettings))
const MdCategory = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdCategory))
const RiLayout = dynamic<any>(() => import('react-icons/ri').then(mod => mod.RiLayout5Fill))
const MdDashboard = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdDashboard))
const MdMenu = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdMenu))
const MdNotification = dynamic<any>(() => import('react-icons/md').then(mod => mod.MdNotifications))

const Aside = styled("aside")`
  position: relative;
  overflow: hidden;
  margin-block-end: 4rem;

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: ${props => props.theme.colors.blue900};
    padding: 1rem;
    transition: ${props => props.theme.transition.all05};
  }

  .navbar-header {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
  }

  .navbar-header .text {
    font-weight: ${props => props.theme.typography.weightMd};
    color: ${props => props.theme.colors.gray500};
    text-align: center;
    margin-block-end: 0;
  }

  .navbar-header .button {
    border: none;
    outline: none;
    width: max-content;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }

  .navbar-header .button:last-child {
    margin-inline-start: auto;
  }

  .navbar-header .icon {
    min-width: 26px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.typography.textXl};
    color: ${props => props.theme.colors.gray500};
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.colors.blue900};
    transition: ${props => props.theme.colors.blue900};
    z-index: 100;
    transform: translateX(-100%);
  }
`

const Sidebar: React.ComponentType = () => (
  <Aside aria-label="navigation-side-signage">
    <nav className="navbar">
      <header className="navbar-header">

        <button className="button btn-icon">
          <MdMenu className='icon'/>
        </button>

        <h1 className="text text-header">Dashboard</h1>

        <button className="button btn-icon">
          <MdSearch className='icon'/>
        </button>

      </header>
    </nav>

    <nav className="sidebar">

      <header>
        <div className="image-text">
          <span className="image">
            <Image src={logo} alt='small logo signage' priority/>
          </span>
          <div className="text logo-text">
            <span className="name">SIGNAGE</span>
          </div>
        </div>
        <MdOutlineChevronRight className='icon'/>
      </header>

      <div className="menu-bar">
        <div className="menu">

          <li className="search-box">
            <MdSearch className='icon' />
            <input type="text" placeholder="Quick Search" />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdDashboard className='icon' />
                  <span className="text text-nav">Dashboard</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdCashConnected className='icon' />
                  <span className="text text-nav">Screen</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdPermMedia className='icon' />
                  <span className="text text-nav">Media</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdPlaylistPlay className='icon' />
                  <span className="text text-nav">Playlist</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdEditCalendar className='icon' />
                  <span className="text text-nav">Campaign</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdCategory className='icon' />
                  <span className="text text-nav">Category</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <RiLayout className='icon' />
                  <span className="text text-nav">Layout</span>
                </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href='/'>
                <a>
                  <MdSetting className='icon' />
                  <span className="text text-nav">Setting</span>
                </a>
              </Link>
            </li>
          </ul>

        </div>

        <div className="bottom-content">
          <li>
            <button type="button">
              <MdNotification className='icon' />
              <span className="text text-nav">Notification</span>
              <MdOutlineChevronRight className='icon'/>
            </button>
          </li>

          <li>
            <button type="button">
              <div className="user-info">
                <span className="text text-nav">Sebastian Wijaya</span>
                <span className="text text-user-active">&#8226; Online</span>
              </div>
              <MdOutlineChevronRight className='icon'/>
            </button>
          </li>

          <p className="text text-footer">Signage by Interads Kreasi Indonesia</p>
        </div>
      </div>

    </nav>
  </Aside>
)

export default Sidebar