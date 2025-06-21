import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category); //customHook

    return (
        <>
            {/* El nombre de la busqueda */}
            <h3>{category}</h3>

            {/* Loader */}
            {
                isLoading && (<h2>Un momentito...</h2>)
            }

            {/* Imagenes */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}// se envia todas las propiedades del image
                        />
                    ))
                }

            </div>

        </>
    )
}
