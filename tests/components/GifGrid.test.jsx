import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); //mook del hook

//! en la prueba no es necesario llamar al verdadero customHook, se supone con son unitarias y solo importa el componente como tal

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        }); //suponer que el hook Funciona y simular sus resultados


        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        


    });


});