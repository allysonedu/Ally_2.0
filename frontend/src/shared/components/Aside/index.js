import { Container, Content, NamePage, IconBars } from './styles'

import { IoEarth, IoAddOutline } from 'react-icons/io5'

import { PiUsersThreeFill } from 'react-icons/pi'

import { RiUserSearchFill } from 'react-icons/ri'
import { GrDocumentConfig } from 'react-icons/gr'
import { FaRegMoon } from 'react-icons/fa'

import { useState } from 'react'

export const Aside = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [isLeft, setIsRight] = useState(false)
  const toggleLeft = () => setIsRight(!isLeft)

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <Container
      style={{
        width: isOpen ? '250px' : '80px',
      }}
    >
      <Content
        style={{
          width: isOpen ? '250px' : '80px',
          backgroundColor: darkMode ? 'rgb(38, 50, 56)' : 'rgba(255, 255, 255)',
          color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
        }}
      >
        <NamePage>
          <h1 style={{ display: isOpen ? 'block' : 'none' }}>Ally</h1>
          <IconBars style={{ marginLeft: isOpen ? '120px' : '2px' }}>
            <IoEarth onClick={toggle} />
          </IconBars>
        </NamePage>
        <button
          style={{
            marginRight: isOpen ? '130px' : '10px',
            backgroundColor: darkMode
              ? 'rgba(0,0,0)'
              : 'rgba(39, 245, 238, 0.8)',
            color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
          }}
          className="ButtonNew"
        >
          <IoAddOutline className="Icon_button" />
          <span
            style={{ display: isOpen ? 'block' : 'none' }}
            className="text_button_new_assistid"
          >
            Novo Assistido
          </span>
        </button>
        <nav className="navegation">
          <ul>
            <li>
              <a href="/Assisteds">
                <div
                  className="Icon_menu"
                  style={{
                    marginLeft: isOpen ? '5px' : '15px',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  <PiUsersThreeFill size={20} />
                </div>
                <span
                  style={{
                    display: isOpen ? 'block' : 'none',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  {' '}
                  Criar Assistido
                </span>
              </a>
            </li>
            <li>
              <a href="/Assisteds">
                <div
                  className="Icon_menu"
                  style={{
                    marginLeft: isOpen ? '5px' : '15px',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  <RiUserSearchFill size={20} />
                </div>
                <span
                  style={{
                    display: isOpen ? 'block' : 'none',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  Pesquisar Assistido
                </span>
              </a>
            </li>
            <li>
              <a href="/Assisteds">
                <div
                  className="Icon_menu"
                  style={{
                    marginLeft: isOpen ? '5px' : '15px',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  <GrDocumentConfig size={20} />
                </div>
                <span
                  style={{
                    display: isOpen ? 'block' : 'none',
                    backgroundColor: darkMode ? '' : '',
                    color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
                  }}
                >
                  Configurações{' '}
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="linea"></div>

        <div className="mod-dark" style={{ width: isOpen ? '211px' : '43px' }}>
          <div className="info">
            <div
              className="Icon-dark"
              style={{
                marginLeft: isOpen ? '5px' : '15px',
                display: isOpen ? 'block' : 'none',
                backgroundColor: darkMode ? '' : '',
                color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
              }}
            >
              <FaRegMoon size={20} />
            </div>
            <span
              className="text-dark"
              style={{
                display: isOpen ? 'block' : 'none',
                backgroundColor: darkMode ? '' : '',
                color: darkMode ? 'rgba(39,245,238,1)' : 'rgba(0,0,0)',
              }}
            >
              Dark Mode
            </span>
          </div>
          <div className="switch" onClick={toggleLeft}>
            <div
              className="base"
              onClick={toggleDarkMode}
              style={{ width: isOpen ? '35px' : '35px' }}
            >
              <div
                className="circulo prendido"
                style={{
                  marginLeft: isLeft ? '1px' : '-13px ',
                  marginRight: setIsRight ? '1px' : '-13px',
                }}
                onClick={toggleLeft}
              ></div>
            </div>
          </div>
        </div>
      </Content>
      <main>{children}</main>
    </Container>
  )
}

export default Aside
