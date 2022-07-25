import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: 'auto',
  color: '#fff',
  lineHeight: 'auto',
  textAlign: 'center',
  background: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

const setCarousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="https://www.apartamentosturisticosgranada.info/templates/yootheme/cache/apartamentos_en_granada_centro_slide2-aca1659d.jpeg" alt="img" className='carouselImage'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://www.servebnb.es/wp-content/uploads/2018/06/Los_Abrigos_B_13-1080x675.jpg" alt="img" className='carouselImage'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://apartamentosleiva.com/wp-content/uploads/2018/09/Apartamento-3-Cocina-comedor-2.jpg" alt="img" className='carouselImage'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://santos.es/wp-content/uploads/2021/03/cocina-blanca-abierta-al-salon-comedor-santos.jpg" alt="img" className='carouselImage'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c0/e4/2b.jpg" alt="img" className='carouselImage'/></h3>
    </div>
  </Carousel>
);


export default setCarousel;