import { createApi } from 'unsplash-js';

export const unsplashApi = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
});


// or use axios with base url of 'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY'



/* 
    Get dynamic pagination data from calling functions to get new queried images
*/
export const getSomeImages = async ({ query = "nature", page = 1, perPage = 14 }) => {
    return unsplashApi.search
        .getPhotos({
            query,
            page,
            perPage,
            orientation: "portrait",
            orderBy: "relevant"
        })
        .then(result => {
            if (result.response.results) {
                const data = result.response.results;
                return data;
            }
            return [];
        })
        .catch(err => {
            console.log(err);
            return;
        });
}




/* 
    Get all images from localstorage and returns parsed array of images
*/
export const getAllMyImages = () => {
    const rawData = localStorage.getItem("images");
    const parsedData = JSON.parse(rawData);
    if (Array.isArray(parsedData) && parsedData.length > 0) {
        return parsedData;
    }
    return [];
}




/* 
    Adding data to LocalStorage
    Needs an object of image: URL and title: String as parameters
*/
export const addImageToStorage = async ({ data }) => {
    const storage = getAllMyImages();
    data.id = storage[storage.length - 1]?.id + 1 || 0;
    storage.push(data);

    try {
        localStorage.setItem("images", JSON.stringify(storage));
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}




/* 
    Accepts an id of image created and stored in local storage
    Will delete the image data if exists 
*/
export const removeFromStorage = (id) => {
    const storage = getAllMyImages();
    // filter the particular image object and set new Storage
    const newStorage = storage.filter( st => st.id !== id );

    try {
        localStorage.setItem("images", JSON.stringify(newStorage));
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }

}

