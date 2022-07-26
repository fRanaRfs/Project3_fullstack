import { Layout } from 'antd';
import React from 'react';
import Carousel from './Carousel'
import '../App.css'
import '../index.css';



const { Sider, Content } = Layout;

const setAnunciosDetails = () => (

<Layout>
      <Sider width={800}><Carousel/></Sider>
      <Layout>
        <Content><h1>Bienvenido/a a Chollociones</h1>
        <h3>La mision de este portal, es recopilar "chollos" y ofertas de todo el territorio nacional para dejar tus vacaciones listas y a un precio espectacular!</h3>
        <p>También podrás registrar tus propios anuncios para que la gente contacte contigo y pueda disfrutar de tu inmueble segun disponibilidad y precio!</p>
        </Content>
      </Layout>
    </Layout>
  
);

export default setAnunciosDetails;