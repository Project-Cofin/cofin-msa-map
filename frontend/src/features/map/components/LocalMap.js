import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, {useState} from "react";
import { useSelector } from 'react-redux';

function LocalMap() {
    const geoInfo = window.localStorage.getItem('sessionGeo').split(',')
    const [map, setMap] = useState()
    let points = useSelector(state => state.map.mapsState.map(
        x => {return {title: x.name,
                      latlng: {lat: x.latitude, lng:x.longitude}}}
    )) 

    return(<>
    <Map
          center={{
            lat: geoInfo[0],
            lng: geoInfo[1],
          }}
          style={{
            width: "1000px",
            height: "600px",
          }}
          level={5}
          onCreate={setMap}
        >
            <MapMarker
            position={{lat: geoInfo[0], lng:geoInfo[1]}}
            title='현재 위치'
            image={{
                // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95", 
                size: {
                  width: 45,
                  height: 45,
                }, 
                options: {
                  offset: {
                    x: 25,
                    y: 45,
                  }, 
                },
              }}
            />
          {points.map((position, index) => (
            <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng}
            title={position.title}
            image={{
              src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693879.png?token=exp=1637741898~hmac=59a8cfd836c546dab8091bb296ba21aa", 
              size: {
                width: 45,
                height: 45,
              }, 
              options: {
                offset: {
                  x: 25,
                  y: 45,
                }, 
              },
            }}
            />
      ))}
        </Map>
        
    </>);
}

export default LocalMap;
