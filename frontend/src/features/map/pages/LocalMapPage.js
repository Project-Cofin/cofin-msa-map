import React from "react";
import { Geolocation, LocalMap, LocalMapInfo, Options } from "..";

const LocalMapPage = () => {

  return (<>
    <Options/>
    <LocalMap/>
    <LocalMapInfo/>
    <Geolocation/>
    </>);
};

export default LocalMapPage;