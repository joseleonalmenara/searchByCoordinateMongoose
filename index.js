const mongoose = require('mongoose');
const Rest = require('./models/restaurant');

const mongoURI = 'mongodb://localhost:27017/vicente';
mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;


// Conexión a la db
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Mongoose connected with: ${mongoURI}`);

   Rest
        .find({ category: 'Japonesa', 'location.region': 'Santiago de Compostela' })
        .exec((err, restaurants) => {
            if (err) throw err;
            console.log(JSON.stringify(restaurants))
        });
}).catch((error) => {
    console.log(error.response.data);
});
 