import React, { useState } from 'react';
import error_page from './img/error_page.jpg';


export function ErrorNotFound() {

    return (
        <div className='login'>
            <h1>ERROR 404</h1>
            <p/>
            <h1>PAGINA NO ENCONTRADA</h1>
            <img src={error_page} />
        </div>
    )
}
