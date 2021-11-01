import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation (){
    return (<>
        <div class="navi">
            <ul>
                <li><Link to='/home'>메인 화면</Link></li>
                <li><Link to='/organ/chat'>챗봇 채팅창</Link></li>
                <li><Link to='/organ/local'>국내 지도</Link></li>
                <li><Link to='/organ/world'>세계 지도</Link></li>
            </ul>
        </div>
</>)
}
