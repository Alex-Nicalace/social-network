let state = {
    ProfilePage: {
        post_data: [
            {message: 'test', likeCount: '6', id_post: "1"},
            {message: 'how are you', likeCount: '5', id_post: "2"},
            {message: 'react', likeCount: '4', id_post: "3"},
            {message: 'boy', likeCount: '3', id_post: "4"},
            {message: 'girl', likeCount: '2', id_post: "5"}
        ],
    },
    DialogPage: {
        dialog_data: [
            {
                name_user: "Sasha",
                id_user: "1",
                url_ava: 'http://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'
            },
            {
                name_user: "Sveta",
                id_user: "2",
                url_ava: 'https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg'
            },
            {
                name_user: "Makar",
                id_user: "3",
                url_ava: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'
            },
            {name_user: "Ivan", id_user: "4", url_ava: 'https://download-cs.net/steam/avatars/3426.jpg'},
            {
                name_user: "Anna",
                id_user: "5",
                url_ava: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png'
            }
        ],
        message_data: [
            {message: "Hi", id_mes: "1", is_my: "1", id_user: "1"},
            {message: "How are you?", id_mes: "2", is_my: "0", id_user: "1"},
            {message: "Здравствуйте!", id_mes: "3", is_my: "1", id_user: "1"},
            {message: "Кто ты?", id_mes: "4", is_my: "1", id_user: "1"},
            {message: "Откуда ...!", id_mes: "5", is_my: "1", id_user: "1"},
            {message: "От верблюда", id_mes: "5", is_my: "0", id_user: "1"},
        ]
    }
}

export default state;
