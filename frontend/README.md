cor principal:  rgba(3, 89, 86, 1)

cor secundaria:  rgba(39, 245, 238, 1)

cor dos inputs:  rgba(39, 245, 238, 0.3)

cor dos textos:  #f0ffffde

 <a href="/Assisteds">
          <IoEarth size={20} />
          Criar Assistido
        </a>

        <a href="/">
          <IoEarth size={20} />
          Encontrar Assistido
        </a>

        <a href="/">
          <IoEarth size={20} />
          Configurações
        </a>



        export const Container = styled.div`
  grid-area: AS;
  display: flex;
  background: black;
  color: aliceblue;
  height: 100vh;
  width: 250px;
  transition: all 0.5s;

  .link {
    display: flex;
    margin-bottom: 5px;
    color: aliceblue;
    border: 2px solid aliceblue;
    align-items: center;
    list-style: none;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.06);
    }
  }
  .link:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    cursor: pointer;
  }

  .active {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    cursor: pointer;
  }

  .icon {
    align-items: center;
    font-size: 20px;
  }
  .link_text {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    background-color: rgba(39, 245, 238, 0.51);
    color: var(rgba(39, 245, 238, 1));
  }
`
export const NamePage = styled.span`
  display: flex;
  align-items: center;
  padding: 20px 15px;

  > span {
    font-size: 30px;
  }
`
export const IconBars = styled.div`
  font-size: 40px;
  display: flex;
  margin-left: 120px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.06);
  }
`

export const Content = styled.div``
///---> sumir  botton link
 <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
            >
