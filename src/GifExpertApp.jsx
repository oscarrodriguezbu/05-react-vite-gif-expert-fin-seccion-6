import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mikasa Akerman']); //para este caso es necesario inicializar como un array
    
    //! el componente hijo manda un valor al padre para que el padre cambie el estado y renderice el categories en GifGrid
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //importante para mirar si existe o no para agregar
        setCategories([newCategory, ...categories]); //la nueva categoria siempre sera la primera en mostrarse
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                /* onNewCategory={(value) => onAddCategory(value)} */
                onNewCategory={onAddCategory} // version simplificada
            />

            {/* Listado de gifs */}
            {
                categories.map((category, index) => (
                    <GifGrid
                        key={category + index} //es necesario para listar elementos de arrays con map
                        category={category} />
                ))
            }
        </>
    )
}
