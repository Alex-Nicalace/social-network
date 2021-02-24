let InitialState = {
    friends: [
        {friend_name: "Sasha", url_ava: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"},
        {friend_name: "Masha", url_ava: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
        {
            friend_name: "Anna",
            url_ava: "https://shutniki.club/wp-content/uploads/2019/12/0aeb27b230deae824f3d1bce090bc2e9.png"
        },
    ]
}

const sidebarReducer = (state = InitialState, action) => {
    return state;
}

export default sidebarReducer;