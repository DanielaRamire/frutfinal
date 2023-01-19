const accountSid = 'AC6187bff0407dec849c07e0e1c3fa69bf'; 
const authToken = '[9e358a4366daec4fe486156449c4daf0]'; 
const client = require('twilio')(accountSid, authToken); 
 
       const sendMessage = async (req, res) => {
        try {
            
            const { number, message } = req.body;
    
            const response = await client.messages.create({
                body: 'Bienvenido a nuestra tienda online', 
                from: 'whatsapp:+14155238886',      
               to: `whatsapp:${number}`
            });
    
            console.log(response);
    
            res.json({
                msg: 'Mensaje enviado correctamente'
            });
    
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Error al enviar mensaje'
            });
        }
    }
    
    module.exports = sendMessage;