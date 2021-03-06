import fb from '@/firebase';

export const userService = {
    createUpdate, login, getUserTokenFCM, getUserName
};

async function get(username) {
    return fb.firestore.collection("users").where("name", "==", username).limit(1).get()
        .then(snapshot => {
            if (snapshot.empty) {
                return {success: false, error: "No user(s)"};
            }  
            
            var id, content;
            snapshot.forEach(doc => {
                id = doc.id;
                content = doc.data();
            });

            return {success: true, id: id, data: content};
        }).catch(handleError);
}

async function createUpdate(uid, name, token, department) {
    var data = {
        name: name,
        token: token
    };
    return fb.firestore.collection("users-"+department).doc(uid).set(data)
        .then(function() {
            return {success: true};
        }).catch(handleError);
}

async function login(uid) {
    const now = new Date();
    var data = {
        loginAt: now
    }
    return fb.firestore.collection("online").doc(uid).set(data);
}

async function getUserTokenFCM(userId, department) {
    const user = await fb.firestore.collection("users-"+department).doc(userId).get();
    const data = user.data();
    return data.token;
}

async function getUserName(userId, department) {
    const user = await fb.firestore.collection("users-"+department).doc(userId).get();
    const data = user.data();
    return data.name;
}

function handleError(error) {
    console.log("Ops! " + error);
    return Promise.reject(error);
}