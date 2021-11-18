import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { medPoints } from "../reducer/mapSlice";

const Geolocation = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(function(position) {
            //   alert(position.coords.latitude + ' ' + position.coords.longitude);
            dispatch(medPoints({'latitude': position.coords.latitude, 'longitude': position.coords.longitude}))
            window.localStorage.setItem('sessionGeo', [position.coords.latitude, position.coords.longitude])
            }, function(error) {
              console.error(error);
            }, {
              enableHighAccuracy: false,
              maximumAge: 0,
              timeout: Infinity
            });
          } else {
            alert('GPS를 지원하지 않습니다');
          }
    },[])
    return(<></>)
}

export default Geolocation