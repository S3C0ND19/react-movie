const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'e1b8a28f74423c775f16fc21d85f906b',
    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

}
export default apiConfig