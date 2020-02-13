const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject)=> {
        if(!user || !message){
            console.log('[messageController] no hay datos');
            reject('los datos son incorrectos');
            return false;
        }
        const fullMesage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        store.add(fullMesage);

        resolve(fullMesage);
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages,
}