import React from 'react';
import ScreenButton from '../ScreenButton/ScreenButton';

const ScreenSelector = () => {
    return (
        <div className='screenselector-container'>
            <img src="imgs/DIVISA_MARCA_1.png" alt="logo" className='logo'/>
            <div className='navigation'>
                <ScreenButton url='/' text='TIEMPO EN MADRID'></ScreenButton>
                <ScreenButton url='/parking' text='APARCAMIENTO'></ScreenButton>
                <ScreenButton url='crypto' text='CRIPTOMONEDAS'></ScreenButton>
            </div>
        </div>
    );
}

export default ScreenSelector;
