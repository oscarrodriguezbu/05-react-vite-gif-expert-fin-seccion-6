import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    /* 
    Se puede probar:
    - onAddCategory
    - Tomar el snapshoot
    - etc..  
    */
   
    test('should ', () => {
        
        render( <GifExpertApp /> );
        screen.debug();


    });


});