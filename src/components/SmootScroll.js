import React from 'react';

export default function SmootScroll(props) {

    function scrollToElement(){
        const element = document.getElementById(props.elementId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a onClick={scrollToElement} className={props.cName} rel="nofollow">{props.txt}</a>
    );
};

