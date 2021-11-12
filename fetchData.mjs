/**
 * Fonction qui récupère des données de l'API
 * @param {"https://api.top-serveurs.net/v1/votes/last?server_token=:F2MQRFMGK4"}
 * @return {promise}
 * 
 */

export default function fetchData(url) {

    return new Promise((resolve, reject) => {

        //fetch les data

        fetch(url).then(function (response) {
            return response.json();
            //convertit le body du JSON et le convertit en un objet JS puis retourne une nouvelle promesse
        })
        .then(function (data) {
            resolve(data);
            //Placement du code ici
        })
        .catch(function (err) {
            resolve("impossible de récupérer les données");
            //si erreur, catch ici
        });
    });
}