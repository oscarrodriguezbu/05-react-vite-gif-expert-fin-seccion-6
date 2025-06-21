import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el kook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );//renderHook para ejecutar y simular el hook
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor( //toca esperar que se carguen las imagenes porque en el original se hace un fetch
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
                
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});