const myPromise = new Promise((resolve, reject) => {
    let connection = true;

    if (connection) {
        resolve('Connected')
    } else {
        reject("Not connected")
    }
})

myPromise.
    then(response => {
        console.log(response);
    }).
    catch(err => {
        console.log(err)
    })