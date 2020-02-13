const url = 'http://localhost:3001';

function get(url, data = {}) {
    url = new URL(url);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {
        method: "GET",
    }).then(response => response.json())
}

function del(url, data = {}) {
    url = new URL(url);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {
        method: "DELETE",
    }).then(response => response.json())
}

function post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
}

function put(url, data) {
    return fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
}

export function getGoods(options) {
    return Promise.all([
        get(`${url}/goods`, options),
        get(`${url}/goods`)
    ])
        .then(values => {
            return {
                count: values[1].length,
                items: values[0]
            }
        });
}

export function getCategories() {
    return get(`${url}`)
}

export function addGood(item) {
    return post(`${url}/goods`, item)
}

export function getGood(id) {
    return get(`${url}/goods/${id}`)
}

export function delGood(id) {
    return del(`${url}/goods/${id}`)
}

export function editGood(id, item) {
    return put(`${url}/goods/${id}`, item)
}