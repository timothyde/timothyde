import styled from 'styled-components'

export const Container = styled.div`
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
export const Title = styled.div`
  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    padding: 20px 0px 10px 0px;
    letter-spacing: -2px;

    line-height: 45px;
    font-size: 60px;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 70px;
    }

    @media (min-width: 960px) {
      font-size: 120px;
      line-height: 110px;
    }
  }

  h2 {
    margin: 0px;
    padding: 0px;

    color: #092545;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
    letter-spacing: -0.3px;
    transition: all 0.3s ease;
  }

  p > a {
    color: #2d6ae3;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
  }

  p a::after {
    width: 100%;
    height: 2px;
    background: #2d6ae3;
    content: '';
    left: 0;
    position: absolute;
    bottom: -1px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }

  body.dark & p {
    color: #f6faf5;
  }

  body.dark & h2 {
    color: #f6faf5;
  }

  body.dark & p > a {
    color: #d9b500;
  }

  body.dark & p a::after {
    background: #d9b500;
  }
`

export const Text = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    transition: all 0.3s ease;
  }

  p {
    transition: all 0.3s ease;
  }

  p > a {
    color: #2d6ae3;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
  }

  p a::after {
    width: 100%;
    height: 2px;
    background: #2d6ae3;
    content: '';
    left: 0;
    position: absolute;
    bottom: -1px;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  body.dark & h2 {
    color: #f6faf5;
  }

  body.dark & p {
    color: #f6faf5;
  }

  body.dark & p > a {
    color: #d9b500;
  }

  body.dark & p a::after {
    background: #d9b500;
  }
`
