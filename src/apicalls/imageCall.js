import { createApi } from 'unsplash-js';

export const unsplashApi = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
});


export const getSomeImages = async () => {
    return unsplashApi.search
        .getPhotos({ query: "cat", orientation: "landscape" })
        .then(result => {
            const data = result.response.results;
            return data;
        })
        .catch(err => {
            console.log(err);
            return;
        });
}


