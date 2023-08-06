import { createApi } from 'unsplash-js';

export const unsplashApi = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
});


// or use axios with base url of 'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY'

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


export const getAllMyImages = () => {
    const rawData = localStorage.getItem("images");
    const parsedData = JSON.parse(rawData);
    if (Array.isArray(parsedData) && parsedData.length > 0) {
        return parsedData;
    }
    return [];
}



export const addImageToStorage = async ({ data }) => {
    const storage = getAllMyImages();
    data.id = storage[storage.length - 1].id + 1;
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


export const removeFromStorage = (id) => {
    const storage = getAllMyImages();
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

