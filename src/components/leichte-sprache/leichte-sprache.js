import React from 'react'
import styled from 'styled-components'

let Section = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 3rem;
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

let Title = styled.div`
  width: 100%;

  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 40px 0px;
    letter-spacing: -2px;

    margin: 0 auto;
    width: 100%;

    line-height: 45px;
    font-size: 60px;

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 70px;
    }

    @media (min-width: 960px) {
      font-size: 120px;
      line-height: 110px;
    }
  }

  margin-bottom: 40px;
`

export default () => {
  return (
    <Section>
      <Container>
        <Title>
          <h1>
            Leichte
            <br />
            Sprache
          </h1>
          <h2>Über mich</h2>
          <p>Mein Name ist Timothy.</p>
          <p>Ich bin im Juli 1992 in Troisdorf geboren.</p>
          <p>Seit vielen Jahren lebe ich in Troisdorf.</p>
          <p>Nach der Schule habe ich Betriebs Wirtschaft studiert.</p>
          <p>
            Nach dem Studium bin ich 6 Monate gereist. Ich war in 10 Ländern.
          </p>
          <p>
            Danach habe ich eine Firma gegründet. Wir haben Computer Programme
            gemacht.
          </p>
          <p>
            Jetzt bin ich Angestellter bei einer Firma in Bonn. Wir machen auch
            Computer Programme.
          </p>
          <p>
            2019 bin ich Mitglied in der Partei Bündnis 90/Die Grünen (kurz: Die
            Grünen) geworden. Seitdem mache ich aktiv Politik.
          </p>
          <p>Ich setze mich für eine gerechte Gesellschaft ein.</p>
        </Title>
      </Container>
    </Section>
  )
}
