import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import {getAllAnuncios} from '../services/project.services'
const { Meta } = Card;



	//const [ title, setTitle ] = useState('');
	//const [ description, setDescription ] = useState('');
	//const [ image, setImage ] = useState();

    //const newAnuncio = { title, description, image };

		// Send the token through the request "Authorization" Headers

    const AnunciosComponent = () => {
        const [ title, setTitle ] = useState('');
	    const [ description, setDescription ] = useState('');
	    const [ image, setImage ] = useState();
        const [anunciosArr, setAnunciosArr] = useState([]);
        console.log(anunciosArr)

        const anuncios = async() => {
            try {
                const response = await getAllAnuncios();
                setAnunciosArr(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setImage(response.data.image)
            } catch (err) {
                console.log(err);
            }
        };  

        useEffect(() => {
            anuncios();
            // eslint-disable-next-line
        }, []);

        return (

		
            <>
    <div className='cards'>
    { anunciosArr?.map((anuncios) => {
        return (
            <Card
            style={{
            maxWidth: 300,
            maxHeight: 300
            }}
            cover={
              <img
                alt="example"
                src={anuncios.image}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={anuncios.title}
              description={anuncios.description}
            />
          </Card>)
    } )}
        

     </div>
     </>
          )};

          
          

export default AnunciosComponent;