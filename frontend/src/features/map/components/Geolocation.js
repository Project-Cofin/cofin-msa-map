import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { medPoints } from "../reducer/mapSlice";

const Geolocation = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(function(position) {
            const latlng = [position.coords.latitude, position.coords.longitude]
            dispatch(medPoints({'latitude': latlng[0], 'longitude': latlng[1]}))
            window.localStorage.setItem('sessionGeo', [...latlng])
            }, function(error) {
              console.error(error);
            }, {
              enableHighAccuracy: false,
              maximumAge: 0,
              timeout: Infinity
            });
          } else {
            alert('GPS를 지원하지 않습니다');
            window.localStorage.setItem('sessionGeo', ['37.49939596822029', '127.02902373805311'])
          }
    },[])
    return(<></>)
}

export default Geolocation