import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.primary_color};
  .dark .switch::before {
    left: 25px;
  }
`;

export const Sidebar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: ${({ theme }) => theme.sidebar_color};
  z-index: 100;
  transition: all 0.5s ease;

  .image {
    min-width: 60px;
    display: flex;
    align-items: center;
  }

  li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
  }

  li .icon {
    font-size: 23px;
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li .icon,
  li .text {
    color: ${({ theme }) => theme.text_color};
    transition: all 0.2s ease;
  }

  .image-text img {
    width: 50px;
    border-radius: 6px;
  }

  .search-box {
    border-radius: 8px;
    background: ${({ theme }) => theme.primay_color_light};
    border: 2px solid ${({ theme }) => theme.body_color};
  }
  .search-box input {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.primay_color_light};
    outline: none;
    border: none;
    border-radius: 10px;
  }
  li a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  li a:hover {
    background: ${({ theme }) => theme.primary_color};
  }

  li a:hover .icon,
  li a:hover .text {
    color: ${({ theme }) => theme.sidebar_color};
  }

  .menu-bar {
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-bar .mode {
    position: relative;
    border-radius: 8px;
    background: ${({ theme }) => theme.primay_color_light};
  }

  .menu-bar .mode .moon-sun {
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;
  }

  .menu-bar .mode i {
    position: absolute;
  }
  .menu-bar .mode i.sun {
    opacity: 0;
  }

  .menu-bar .mode .toggle-switch {
    position: absolute;
    right: 0px;
    display: flex;
    height: 100%;
    min-width: 60px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background: ${({ theme }) => theme.toggle_color};
  }

  .switch::before {
    content: '';
    position: absolute;

    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    transition: all 0.2s ease;

    background: ${({ theme }) => theme.sidebar_color};
  }

  .text {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_color};

    white-space: nowrap;
    opacity: 1;
    transition: 0.3s;
    white-space: nowrap;
  }
`;

export const Header = styled.div`
  position: relative;
  .text {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_color};
    white-space: nowrap;
  }
  .image {
    min-width: 60px;
    display: flex;
    align-items: center;
  }

  .image-text img {
    width: 50px;
    border-radius: 6px;
  }

  .image-text {
    display: flex;
    align-items: center;
  }

  .image-text .header-text {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-weight: 600;
    padding-right: 5px;
    color: ${({ theme }) => theme.color_name};
  }
  .profession {
    margin-top: -2px;
  }

  .toggle {
    position: absolute;
    top: 50%;
    right: -31px;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    background: ${({ theme }) => theme.primary_color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.sidebar_color};
  }
`;
