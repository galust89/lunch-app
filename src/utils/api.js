import axios from 'axios';
const API_BASE = '/api';

function buildURL(endpoint) {
    return API_BASE + endpoint;
}

function buildAuthHeader(config = {}) {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        ...config,
    };
}

function parseJSON(response) {
    return response.data;
}

function get(url) {
    return axios.get(buildURL(url), buildAuthHeader()).then(parseJSON);
}

function post(url, data) {
    return axios.post(buildURL(url), data, buildAuthHeader()).then(parseJSON);
}

function deleteCall(url) {
    return axios.delete(buildURL(url), buildAuthHeader()).then(parseJSON);
}

function put(url, data) {
    return axios.put(buildURL(url), data, buildAuthHeader()).then(parseJSON);
}

const api = {
    orderItems: {
        load: listId => {
            return get(`/OrderItems/${listId}`);
        },
        update: data => {
            return put(`/OrderItems/update`, data);
        },
        create: data => {
            return post(`/OrderItems/create`, data);
        },
        remove: (id) => {
            return deleteCall(`/OrderItems/delete/${id}`);
        },
    },

    orderLists: {
        getAll: () => {
            return get(`/OrderLists`);
        },
        getTodays: () => {
            return get(`/OrderLists/todays`);
        },
        getSingle: id => {
            return put(`/OrderLists/${id}`);
        },
        update: data => {
            return put('/OrderLists/update', data);
        },
        create: data => {
            return post(`/OrderLists/create`, data);
        },
        remove: id => {
            return deleteCall(`/OrderLists/delete/${id}`);
        },
    },
    outdoorActivities: {
        getAll: () => {
            return get(`/OutdoorActivities`);
        },
        getTodays: () => {
            return get(`/OutdoorActivities/todays`);
        },
        getSingle: id => {
            return get(`/OutdoorActivities/${id}`);
        },
        attendees: id => {
            return get(`/OutdoorActivities/attendees/${id}`)
        },
        update: data => {
            return put('/OutdoorActivities/update', data);
        },
        create: data => {
            return post(`/OutdoorActivities/create`, data);
        },
        remove: id => {
            return deleteCall(`/OutdoorActivities/delete/${id}`);
        },
    },
    users: {
        getAll: () => {
            return get(`/Users`);
        },
        getSingle: id => {
            return get(`/Users/${id}`);
        },
        create: data => {
            return post(`/Users/create`, data);
        },
        remove: Id => {
            return deleteCall(`/Users/delete/${Id}`);
        },
        update: data => {
            return put(`/Users/update/`, data);
        },
    },

    roles: {
        load: () => {
            return get(`/user-management/roles`);
        },
    },
};

export default api;
