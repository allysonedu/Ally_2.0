import { Container, Sidebar, Header } from './styles';
import React, { useState } from 'react';
import planet from '../../../assets/logo.png';
import { FaVirus, FaRegMoon, FaRegSun } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';

import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineChevronRight, MdOutlineChevronLeft } from 'react-icons/md';
import { BiDonateHeart, BiMessageRoundedError, BiLogOut } from 'react-icons/bi';

export const Aside = ({ theme, toggleTheme }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const toggleAside = () => {
    setIsAsideOpen(prevIsAsideOpen => !prevIsAsideOpen);
  };
  return (
    <Container>
      <Sidebar
        className={`aside ${theme} `}
        style={{ width: isAsideOpen ? '250px' : '80px' }}
      >
        <Header>
          <div className="image-text">
            <span className="image">
              <img src={planet} alt="planeta" />
            </span>

            <div
              className="text header text"
              style={{ display: isAsideOpen ? 'block' : 'none' }}
            >
              <span className="name">Ally</span>
              <span className="profession">Aplication</span>
            </div>
          </div>

          {isAsideOpen ? (
            <MdOutlineChevronRight className="toggle" onClick={toggleAside} />
          ) : (
            <MdOutlineChevronLeft className="toggle" onClick={toggleAside} />
          )}
        </Header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="/home">
                  <HiOutlineHome
                    className="icon"
                    style={{ marginLeft: isAsideOpen ? '0px' : '-5px' }}
                  />
                  <span
                    className="text nav-text"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  >
                    Home
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/assistids">
                  <FiUserPlus
                    className="icon"
                    style={{ marginLeft: isAsideOpen ? '2px' : '-2px' }}
                  />
                  <span
                    className="text nav-text"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  >
                    Criar Assistido
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/">
                  <BiDonateHeart
                    className="icon"
                    style={{ marginLeft: isAsideOpen ? '0px' : '-4px' }}
                  />
                  <span
                    className="text nav-text"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  >
                    Doaçoes
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/">
                  <FaVirus
                    className="icon"
                    style={{ marginLeft: isAsideOpen ? '0px' : '-4px' }}
                  />
                  <span
                    className="text nav-text"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  >
                    Configuração
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/">
                  <BiMessageRoundedError
                    className="icon"
                    style={{ marginLeft: isAsideOpen ? '0px' : '-4px' }}
                  />
                  <span
                    className="text nav-text"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  >
                    Duvida
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="/">
                <BiLogOut
                  className="icon"
                  style={{ marginLeft: isAsideOpen ? '0px' : '-6px' }}
                />
                <span
                  className="text nav-text"
                  style={{ display: isAsideOpen ? 'block' : 'none' }}
                >
                  Sair
                </span>
              </a>
            </li>

            <li className="mode">
              <div className="moon-sun">
                {theme === 'light' ? (
                  <FaRegSun
                    className="icon sun"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  />
                ) : (
                  <FaRegMoon
                    className="icon moon"
                    style={{ display: isAsideOpen ? 'block' : 'none' }}
                  />
                )}
              </div>

              <span
                class="mode-text text"
                style={{ display: isAsideOpen ? 'block' : 'none' }}
              >
                Modo Escuro
              </span>

              <div class="toggle-switch" onClick={toggleTheme}>
                <span
                  class="switch"
                  style={{ marginLeft: isAsideOpen ? '0px' : '9px' }}
                ></span>
              </div>
            </li>
          </div>
        </div>
      </Sidebar>
    </Container>
  );
};

/**
 *  <li className="search-box">
              <IoSearchSharp
                className="icon"
                style={{ marginLeft: isAsideOpen ? '0px' : '-4px' }}
              />
              <input type="search" placeholder="Search..." />
            </li>
 */
