import styled from 'styled-components'
import BackgroundMain from '../../assets/fotoprincipal.jpeg'

export const MainContainer = styled.main`
  /* background-image: url(${BackgroundMain}); */

  /* background-image: url(${BackgroundMain}); */
  background-color: #b29057;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
  }
`
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-left: 5vw;

  img {
    filter: drop-shadow(0px 0px 2px #fff);
  }

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: space-between;
    img {
      width: 50vw;
    }
  }
`
export const LogosContainer = styled.div`
  width: 60vw;
  justify-content: center;
  padding-top: 5rem;
  display: flex;
  align-items: center;
`

export const TitleContainer = styled.div`
  /* background-color: rgba(0, 0, 0, 0.7); */
  width: 50vw;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(999, 999, 999, 0.3); */
  color: white;
  border-radius: 8px;
  padding: 10px;
  /* -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75); */

  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);

    span {
      font-weight: 700;
      text-shadow: 0px 0px 5px #fff;
      color: #4f287e;
    }
  }

  svg {
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.7));
  }
  @media (max-width: 1000px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
    svg {
      display: none;
    }
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.3rem;
    font-weight: 500;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    span {
      color: #c11d1e;
      text-shadow: 0px 0px 5px #fff;
      font-weight: 700;
    }
  }

  @media (max-width: 1000px) {
    width: 90vw;

    svg {
      display: none;
    }
  }
  @media (max-width: 500px) {
    p {
      font-size: 1rem;
    }
  }
`

export const MapPinContainer = styled.div`
  position: relative;
  top: 10vh;
  right: 2rem;
`

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  width: 30vw;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border-bottom: 1px solid #fff;
      input {
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        padding: 0.3rem;
        border: none;
        color: #fff;
        ::placeholder {
          color: #fff;
        }
      }
    }
  }
  button {
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: #b29057;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(1.2);
    }
  }
  @media (max-width: 1000px) {
    padding: 1rem;
    width: 60vw;
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`
export const TextAreaContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  textarea {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    padding: 0.3rem;
    ::placeholder {
      color: white;
    }
  }
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #b29057;
    }
  }
`
