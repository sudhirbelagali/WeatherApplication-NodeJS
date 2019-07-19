var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Sudhir'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
};
getUser(31, (user) => {
    console.log(user);
});