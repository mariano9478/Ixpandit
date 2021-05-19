var axios = require('axios');
const getPokemons_recursive = async (url) => {
    let response = await axios.get(url)
    if(response.data.next){
        let nextResp = await getPokemons_recursive(response.data.next)
        response.data.results.push(...nextResp)
    }
    return response.data.results
}
module.exports = {getPokemons_recursive}