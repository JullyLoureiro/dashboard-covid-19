
const linkapi = 'https://coronavirus-19-api.herokuapp.com/'
const linkapi2 = 'https://coronavirus-tracker-api.herokuapp.com/v2/'

const _api = async (_url,link,_method, _body) => {
    var api
    if(link === 1) api = linkapi
    else if(link === 2) api = linkapi2

    const response = await fetch(api + _url, { 
        method: _method, 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(_body)
      })
    const json = await response.json()
    return json
  }

/**
 * Faz uma chamada na API
 */
export const api = {
    /**
     * Retorna uma Promisse de GET
     * @param {String} url Endereço do endpoint (Não inicie com "/" )
     * @param {JSON} body 
     */
    get: (url, link, body)=>_api(url, link, 'GET',body),

    /**
     * Retorna uma Promisse de POST
     * @param {String} url
     * @param {JSON} body 
     */
    post: (url, link, body)=>_api(url, link, 'POST',body),

     /**
     * Retorna uma Promisse de PUT
     * @param {String} url
     * @param {JSON} body 
     */
    put: (url, link, body)=>_api(url, link, 'PUT',body),

    /**
     * Retorna uma Promisse de DELETE
     * @param {String} url
     * @param {JSON} body 
     */
    delete: (url, link, body)=>_api(url, link, 'DELETE',body),
}