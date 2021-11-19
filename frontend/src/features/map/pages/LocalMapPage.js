import React from "react";
import { Geolocation, LocalMap, LocalMapInfo, Options } from "..";

const LocalMapPage = () => {

  return (<>
    {/* <Geolocation/> */}
    <Options/>
    <LocalMap/>
    <LocalMapInfo/>
    </>);
};

export default LocalMapPage;