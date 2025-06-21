import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []); //si se coloca [] quiere decir que solo se va a ejecutar una sola vez cuando se renderice el componente



    return {
        images,
        isLoading
    }

}
