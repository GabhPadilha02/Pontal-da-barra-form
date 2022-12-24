import {
  ChatText,
  Envelope,
  FacebookLogo,
  IdentificationCard,
  InstagramLogo,
  Phone,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react'
import {
  InfosContainer,
  LogosContainer,
  MainContainer,
  SignUpContainer,
  SocialIconsContainer,
  TextAreaContainer,
  TextContainer,
  TitleContainer,
} from './style'

import Logo from '../../assets/Logo.svg'
import React, { FormEvent, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber(
    $nome: String!
    $email: String!
    $telefone: String!
    $mensagem: String
  ) {
    createUsuarioCadastrado(
      data: {
        nome: $nome
        email: $email
        telefone: $telefone
        mensagem: $mensagem
      }
    ) {
      id
    }
  }
`

export function MainForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  const handlePhone = (event: any) => {
    const input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value: any) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d)(\d{4})$/, '$1-$2')
    return value
  }

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault()
    const isInputEmailEmpty = email.length === 0
    const isInputNameEmpty = nome.length === 0
    const isInputTelEmpty = telefone.length === 0

    if (isInputEmailEmpty || isInputNameEmpty || isInputTelEmpty) {
      window.alert('Por favor, preencha os campos corretamente!')
    }

    await createSubscriber({
      variables: {
        nome,
        email,
        telefone,
        mensagem,
      },
    })
    window.location.replace('https://www.pontaldabarra.com.br')
  }

  return (
    <MainContainer>
      <InfosContainer>
        <LogosContainer>
          <img src={Logo} alt="" />
        </LogosContainer>
        <TitleContainer>
          {/* <SignIn size={120} /> */}
          <TextContainer>
            {/* <h1>
              Cadastre-se e garanta as <span>melhores</span> condições de{' '}
              <span>lançamento!</span>
            </h1>
            <p>
              Lançamento <span>RÔGGA</span>, Itapoa Beach Club.
            </p> */}
          </TextContainer>
        </TitleContainer>
      </InfosContainer>
      <SignUpContainer>
        <form onSubmit={handleSubscribe}>
          <h2>CADASTRE-SE</h2>
          <label htmlFor="">
            <IdentificationCard size={24} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite seu nome completo"
              onChange={(event) => setNome(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <Envelope size={24} />
            <input
              type="email"
              name=""
              id=""
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <Phone size={24} />
            <input
              type="tel"
              name=""
              id=""
              maxLength={15}
              onKeyUp={(event) => handlePhone(event)}
              placeholder="(99) 99999-9999"
              onChange={(event) => setTelefone(event.target.value)}
            />
          </label>
          <TextAreaContainer htmlFor="">
            <ChatText size={24} />
            <textarea
              name=""
              id=""
              cols={30}
              rows={1}
              placeholder="Deixe sua mensagem"
              onChange={(event) => setMensagem(event.target.value)}
            ></textarea>
          </TextAreaContainer>
          <button type="submit">Enviar</button>
          <SocialIconsContainer>
            <a
              href="https://www.instagram.com/pontal_da_barra_itapoa/"
              target={'_blank'}
              rel="noreferrer"
            >
              <InstagramLogo size={30} />
            </a>
            <a
              href="https://wa.me/5547999468662"
              target={'_blank'}
              rel="noreferrer"
            >
              <WhatsappLogo size={30} />
            </a>
          </SocialIconsContainer>
        </form>
      </SignUpContainer>
    </MainContainer>
  )
}
