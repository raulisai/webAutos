const request = require('request');


module.exports = {

   chatConsultModel: async (req, res) => {
    const { message } = req.body;
    let token= process.env.API_KEY;

    try {
        var options = {
            'method': 'POST',
            'url': 'https://api.openai.com/v1/completions',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": message,
                "max_tokens": 400,
                "temperature": 0,
                "stop": "['\n']"
            })

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);


            let respuesta = response.body
            const json = JSON.parse(respuesta.replace(/\\/g, ''));

            let text = json.choices[0].text.replace(/\\n|n/g, "");
            console.log(json);
            res.status(200).json({ message: text });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
}



}