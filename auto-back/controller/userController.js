
const SingUpService= require('../services/singup');


module.exports = {

    singUp: async (req,res) => {
        const id  = req.body.id;
        const username = req.body.username;
        const password = req.body.password;
        let respuesta= await SingUpService.SingUp(id,username,password);
        res.send(respuesta);
      }

}
