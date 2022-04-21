import React,{useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import api from '../../../../api/api'


const ImageGallaryComponent= () =>{
    //Get carousel images
  const retrievecarousels = async()=>{
    const resp = await api.get('/carousels')
    return resp.data
  }
  const [carousels,setCarousels] = useState([]);

  useEffect(()=>{
    async function fetch(){
      const carouselsList = await retrievecarousels()
      setCarousels(carouselsList)
      console.log(carouselsList)
    }
    fetch()
    
  },[])
        return (
            <div style={{margin:'150px 0px 0px 0px'}}>
                <Carousel showArrows autoPlay interval="5000" transitionTime="2500" infiniteLoop width='100%' showThumbs={false}>
                {carousels.map((carousel)=>
                    <div>
                        <img src={"http://localhost:4000/"+carousel.image} alt="a"/>
                    </div>
                )}
                </Carousel>
            </div>
        )
        };

export default ImageGallaryComponent;