const baseURL = 'http://localhost:3001/'

async function getData(callback, endpoint) {
    try {

        let headers = {
            "Content-Type": "application/json",
        }

        if (localStorage.getItem("token")) {
            headers["Authorization"] = "Bearer " + localStorage.getItem("token");
        }

        let response = await fetch(baseURL + endpoint, {
            method: "GET",
            headers: headers,
        });

        callback(await response.json());
    } catch (error) {
        console.log(error);
        return ;
    }
}

async function postData(callback, endpoint, data) {
    try {

        let headers = {
            "Content-Type": "application/json",
        }

        if (localStorage.getItem("token")) {
            headers["Authorization"] = "Bearer " + localStorage.getItem("token");
        }

        let response = await fetch(baseURL + endpoint, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        callback(await response.json());

    } catch (error) {
        console.log(error);
        return ;
    }
}

export { getData, postData };
