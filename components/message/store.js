const db = require('mongoose');
const Model = require('./model');

const uri = 'mongodb+srv://root:molusco23@mensajeria-inz6k.mongodb.net/Telegram?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('[db] Conectada con éxito')).catch(err => console.error('[db]', err));

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    // update
    // delete
};