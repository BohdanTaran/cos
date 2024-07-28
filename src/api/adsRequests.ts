async function getAds  ( ) {
    return await axiosInstance.get('/ads/all');
}

