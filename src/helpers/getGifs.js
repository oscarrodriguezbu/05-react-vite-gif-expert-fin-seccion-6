export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=XUWg9f7WklTnBFdi4gckyiMtdWCUc6XB&q=${ category }&limit=20`;
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=XUWg9f7WklTnBFdi4gckyiMtdWCUc6XB&tag=${ category }`;
    //!el random solo devuelve un solo gif
    
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // const gifs = {
    //     id: data.id,
    //     title: data.title,
    //     url: data.images.downsized_medium.url
    // };
    
    return gifs;
}