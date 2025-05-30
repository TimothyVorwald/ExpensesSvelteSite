import axios from 'axios';

export function getStuff(){
    axios.get('https://localhost:7216/Purchase')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

export function getBankInfo() {
    axios.get('https://localhost:7216/Bank')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            //always executed
        });
}