const Denuncias = require('../models/Denuncia')

//helpers

module.exports = class DenunciaController {

    static async register(req, res){

        const {name, options} = req.body

        const denuncia = new Denuncias({
            name,
            options,
        });

        try {
            await denuncia.save();  
        } catch (err) {
            res.status(500).json({ message: err });
        }
        
    }

    static async getAllComplaint(req, res)
    {
        try {
            const denuncias = await Denuncias.findAll();
            res.status(200).json(denuncias);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }

}