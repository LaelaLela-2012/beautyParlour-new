import React from 'react'
import styled from 'styled-components'
import home from './../assets/home.png'
import play from './../assets/play.png'
import Navbar from './Navbar'

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Blossoms Parlour</h1>
          </div>
          <div className="subTitle">
            <p>At the Beauty Parlour, we believe in beauty with a conscience. 
              We have created a salon that offers the highest quality hair 
              services.</p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </div>
      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Parlour</strong>
            <p>Blossoms Academy</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>blossoms@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+62 85-777-62-4146</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Bogor, Indonesia</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Sparking</p>
            <p>SPA Cream</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>09:00 to 08:00</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 63%;
      color: rgb(255, 255, 255);
      gap: 1.2rem;
      margin-top: 8rem;
      padding: 0rem 0rem 3rem 8rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p{
          width: 53%;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 3rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
`;

export default Home