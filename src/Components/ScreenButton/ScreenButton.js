import React from 'react';
import { Link } from 'react-router-dom';

const ScreenButton = (props) => {
    const { url, text } = props;
    return (
        <div className='screenbutton-container'>
            <Link to={url}>{text}</Link>
        </div>
    );
}

export default ScreenButton;
