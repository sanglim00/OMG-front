import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './styles';

function Header(props) {

    const navigator = useNavigate();

    return (
        <style.Wrap>
            <style.Title>
                <img src={process.env.PUBLIC_URL + '/images/Header/backIcon.svg'}/>
                <span>{props.title}</span>
                {
                    props.title == '마이페이지' ?
                        <img src={process.env.PUBLIC_URL + '/images/Header/settingIcon.svg'} onClick={()=> navigator('/setting')}/>
                        : props.title == "글 작성하기" ?
                            <button onClick={props.onClick}> 확인 </button>
                        : props.title == "게시글" ? 
                        <img src={process.env.PUBLIC_URL + '/images/Header/Menu.svg'} onClick={props.onClick}/>
                        : null
                }
            </style.Title>
        </style.Wrap>
    );
}

export default Header;
