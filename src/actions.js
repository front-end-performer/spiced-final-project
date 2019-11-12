import axios from './axios';
// making axios requset to the server from where i get data, which then i store in users: data, and important to have type, then all data goes to reducer
export async function receiveFriendsWannabes() {
    const { data } = await axios.get('/friends-wannabes');
    return {
        type: 'RECEIVEFRIENDSWANNABES_USERS',
        users: data
    };    
}

export async function acceptFriendRequest(id) {
    await axios.post(`/accept-friend-request/${id}`);
    return {
        type: 'ACCEPT_USERS',
        id
    };    
}

export async function endFriendShip(id) {
    await axios.post(`/end-friendship/${id}`);
    return {
        type: 'UNFRIEND_USERS',
        id
    };    
}

// CHAT

export function chatMessages(msgs) {
    return {
        type: 'USERS_MESSAGES',
        msgs: msgs
    };    
}

export function chatMessage(msg) {
    console.log("actions chatMessage ", msg);
    return {
        type: 'USER_MESSAGE',
        msg: msg
    };    
}

export function chatMessageNotitification(msgNot) {
    console.log("msgNot.length", msgNot);
    return {
        type: 'MESSAGE_NOTIFICATION',
        msgNot: msgNot
    };    
}

export function onlineUsers(onlnUsr) {
    console.log("msgNot", onlnUsr);
    return {
        type: 'ONLINE_USERS',
        onlnUsr: onlnUsr
    };    
}

export async function totalUsers() {
    const { data } = await axios.get('/total-clients');
    return {
        type: 'TOTAL_CLIENTS',
        users: data
    };   
}

export async function totalPilatesUsers() {
    const { data } = await axios.get('/pilates-customers');
    return {
        type: 'PILATES_USERS',
        data: data
    };   
}

export async function removePilatesUser(id) {
    const { data } = await axios.post(`/pilates-customers/${id}`);
    return {
        type: 'REMOVE_USER'
    };    
}

export async function totalYogaUsers() {
    const { data } = await axios.get('/yin-customers');
    return {
        type: 'YOGA_USERS',
        yoga_users: data
    };   
}

export async function removeYogaUsers(id) {
    await axios.post(`/yin-customers/${id}`);
    return {
        type: 'REMOVEYOGA_USERS'
    };   
}


export async function register() {
    const { data } = await axios.get('/register-newuser');
    return {
        type: 'REGISTER_USERS',
        users: data
    };   
}

// export async function signUp(values) {
//     const { data } = axios.post('/register', values);
//     console.log("action", data);
    
//     return {
//         type: 'SIGNUP_FOR_CLASS',
//         data: data
//     };   
// }