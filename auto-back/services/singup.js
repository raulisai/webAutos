const jwt = require('jsonwebtoken');

module.exports={

    SingUp: async (id, username, password) => {

        var resp= {msg: 'Error'};
        if (!id || !username || !password) {
            resp = { msg: 'Please include all fields' };
        } else {
    
            if (username == 'admin' && password == 'monroy') {
    
                await jwt.sign({ id, username, password }, 'secret_key', (err, token) => {
                    if (err) {
                        resp = { msg: 'Error' };
                    }
                    else {
                        resp = { msg: 'success', token: token };
                    }
                })
    
            } else {
                resp = { msg: 'Error Username or Password' }
            }
        }
        return resp;
    }

}
