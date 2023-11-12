let getFilm = require('../../utils/fetchFilms')

const getTitle = async (req, res) =>{

    let title = req.query.title

    if(title){

        let details = JSON.stringify(await getFilm(title)) //transformar en string
        
        if(details != null){
            res.status(200).render('./ejercicio2/film',{
                detalles: details
            })
        }else{
            res.status(404).json({message :"Film not found"})
        }  
    } 
}

module.exports = {
    getTitle
}