import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => { //onNewCategory es una funcion que viene del componente padre y espera recibir un value

    const [inputValue, setInputValue] = useState(''); //para que el input inicialice sin nada

    const onInputChange = ({ target }) => {
        setInputValue(target.value); //es el nuevo valor que se ingresa en el input
    }

    const onSubmit = (event) => {
        event.preventDefault(); //evita un refresh del navegador
        if (inputValue.trim().length <= 1) return; //para que se ejecute si hay algo de texto almenos 

        // setCategories( categories => [ inputValue, ...categories ]); //Esto se ejecuta en el padre
        setInputValue(''); // limpiar campos
        onNewCategory(inputValue.trim());//envia el valor al padre para que el padre lo procese en un callback y haga los cambios respectivos
    }

    return (
        <form onSubmit={onSubmit}>
            {/* onSubmit es para disparar el evento al oprimir enter */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} //obligatorio para asegurse de que cambie el value del input
            />
        </form>
    )
}
