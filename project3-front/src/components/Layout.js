import { Layout } from 'antd';
import React from 'react';
import Carousel from './Carousel'
import '../App.css'
import '../index.css';
import giticon from '../images/githubicon.png'
import linkicon from '../images/linkeicon.png'


const { Footer, Sider, Content } = Layout;

const setLayout = () => (

<Layout>
      <Sider width={800}><Carousel/></Sider>
      <Layout>
        <Content><h1>Bienvenido/a a Chollociones</h1>
        <h3>La mision de este portal, es recopilar "chollos" y ofertas de todo el territorio nacional para dejar tus vacaciones listas y a un precio espectacular!</h3>
        <p>También podrás registrar tus propios anuncios para que la gente contacte contigo y pueda disfrutar de tu inmueble segun disponibilidad y precio!</p>
        </Content>
        <Footer className='layoutfooter'>
        <a href="https://github.com/fRanaRfs/" target="_blank" rel="noreferrer">
          Fran Rabassa Diaz
          <img src={giticon} alt="example" width={50} />
        </a>
        <a href="https://www.linkedin.com/in/franrabassadiaz/" target="_blank" rel="noreferrer">
            <img src={linkicon} alt="linkedinicon" width={50} />
        </a>
      
        <a href="https://github.com/danibachsl" target="_blank" rel="noreferrer">
          Daniel Bachs Lobo
          <img src={giticon} alt="example" width={50} />
        </a>
        <a href="https://www.linkedin.com/in/danielbachslobo/" target="_blank" rel="noreferrer">
            <img src={linkicon} alt="linkedinicon" width={50} />
        </a>
        </Footer>
      </Layout>
    </Layout>
  
);

export default setLayout;