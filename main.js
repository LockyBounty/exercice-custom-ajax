let getButton = document.querySelector("#getButton");
let postButton = document.querySelector("#postButton");
let putButton = document.querySelector("#updateButton");
let deleteButton = document.querySelector("#deleteButton");



let url = "https://watchmanager.herokuapp.com/student/";
let id = "";

let displayGET = () => {

    fetch(url)
        .then(response => response.json())
        .then(res => console.log(res))
        .catch((error) => console.warn(error))

}

let usePOST = () => {
    let getVal = document.querySelector("#idPOST").value;
    let data = {
        studentName:`${getVal}`
    }

    const init = {
        method: "POST", //choisir la methode
        body: JSON.stringify(data), //entrer la valeur qui va etre envoyee, ici, transformée en string "data"
        cache: "default",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        }

    };

    fetch(url, init)
        .then(resp => resp.json())
        .then(response => {
            console.log(response)

        })
        .catch(resp => {
            console.error(resp);
        })

}

let usePUT = () => {
    let getVal0 = document.querySelector("#idUPDATE0").value;
    let getVal1 = document.querySelector("#idUPDATE1").value;
    let getVal2 = document.querySelector("#idUPDATE2").value;

    let data0 = {
        id: `${getVal0}`,
        studentName: `${getVal1}`,
        nextWatchSubject: `${getVal2}`
    };

    const init = {
        method: "PUT", //choisir la methode GET, POST, PUT, DELETE
        body: JSON.stringify(data0),

        cache: "default",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        }

    };

    fetch(`${url}${getVal0}`, init)   //mettre l'id après l'url pour passer en parametres
        .then(resp => resp.json())
        .then(response => {
            console.log(response)

        })
        .catch(resp => {
            console.error(resp);
        })

}

let useDELETE = () => {
    let getVal = document.querySelector("#idDELETE").value;
    let data = {
        id: `${getVal}`
    }

    const init = {
        method: "DELETE"
         //choisir la methode
         //entrer la valeur qui va etre envoyee, ici, transformée en string "data"


    };

    fetch(`${url}${getVal}`, init)  //delete a mettre dans les parametres
        .then((resp) => resp.json())
        .then((response) => {
            console.log(response)

        })
        .catch((resp) => {
            console.error(resp);
        })

}




getButton.addEventListener("click", displayGET);
postButton.addEventListener("click", usePOST);
putButton.addEventListener("click", usePUT);
deleteButton.addEventListener("click", useDELETE);
