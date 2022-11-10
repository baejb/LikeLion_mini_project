import{
    HeaderDiv,
    MenuDiv,
    HeaderLine,
    Menu,

} from './styledComponent';
import './App.css';
import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function Header(){
    

    return(
        <>
        <HeaderDiv>
            <img className="logo" alt="logo_image" src="img/Logo.png"></img>
        <MenuDiv>
            <img className="title" alt="title_image" src="img/headertitle.png"></img>
        <HeaderLine></HeaderLine>        
        <Menu>
        <Link to ="/likelion">
            <button  className="btn">멋쟁이사자처럼</button> 
        </Link>
        <Link to ="/plan">
            <button className="btn">연간 계획</button> 
        </Link>
        <Link to ="/curriculum">
            <button className="btn">커리큘럼</button> 
        </Link>
        </Menu>
        </MenuDiv>
        </HeaderDiv>
        </>
    );
};
export default Header