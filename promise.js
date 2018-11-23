var isMomHappy = true;

const willIGetPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                make: 'Apple',
                model: 'iphone',
                series: 'x'
            }
            resolve(phone);
        } else {
            const reason = new Error("Mom isn't happy");
            reject(reason);
        }
    }
)

const showoff = function (phone) {
    const message = 'Hey i have a brand new ' + phone.model + ' ' + phone.series

    return Promise.resolve(message)
}

var askMom = function () {
    willIGetPhone
        .then(showoff)
        .then(function (success) {
            console.log(success);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}

askMom()