import React from "react";

export default function Posts() {

    const posts = [
        {
            linkUser: "",
            imageUser: "./assets/img/meowed.svg",
            user: "meowed",
            imagePost: "./assets/img/gato-telefone.svg",
            linkFollower: "",
            imageFollower: "./assets/img/respondeai.svg",
            userFollower: " respondeai ",
            linkOthers: "",
            numberPeople: 892
        },
        {
            linkUser: "",
            imageUser: "./assets/img/barked.svg",
            user: "barked",
            imagePost: "./assets/img/dog.svg",
            linkFollower: "",
            imageFollower: "./assets/img/chibirdart.svg",
            userFollower: " chibirdart ",
            linkOthers: "",
            numberPeople: 133
        },
        {
            linkUser: "",
            imageUser: "./assets/img/meowed.svg",
            user: "meowed",
            imagePost: "./assets/img/dog.svg",
            linkFollower: "",
            imageFollower: "./assets/img/respondeai.svg",
            userFollower: " respondeai ",
            linkOthers: "",
            numberPeople: 441
        },
        {
            linkUser: "",
            imageUser: "./assets/img/meowed.svg",
            user: "meowed",
            imagePost: "./assets/img/dog.svg",
            linkFollower: "",
            imageFollower: "./assets/img/chibirdart.svg",
            userFollower: " chibirdart ",
            linkOthers: "",
            numberPeople: 13
        },
        {
            linkUser: "",
            imageUser: "./assets/img/meowed.svg",
            user: "meowed",
            imagePost: "./assets/img/dog.svg",
            linkFollower: "",
            imageFollower: "./assets/img/smallcutecats.svg",
            userFollower: " smallcutecats ",
            linkOthers: "",
            numberPeople: 55
        }
    ];


    return (
        <div className="news-feed">

            {posts.map((post) =>
                <Post key={post.imagePost} linkUser={post.linkUser} imageUser={post.imageUser} user={post.user} imagePost={post.imagePost} linkFollower={post.linkFollower} imageFollower={post.imageFollower} userFollower={post.userFollower} linkOthers={post.linkOthers} numberPeople={post.numberPeople} />
            )}

            <div className="bottom-bar-mobile">
                <div className="bottom-bar-container-mobile">
                    <div className="bottom-bar-options-icons-mobile">
                        <img src="./assets/img/home-outline.svg" alt="img" />
                        <ion-icon name="search-outline"></ion-icon>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Post(props) {

    const [bookmark, setbookmark] = React.useState(true);
    const [heart, setHeart] = React.useState('heart-outline');
    const [color, setColor] = React.useState('#000000');
    const [numberLike, setNumberLike] = React.useState(props.numberPeople);
    const [heartPost, setHeartPost] = React.useState('heartAnimation');

    function likePost(statusLike) {
        if (heart === 'heart-outline') {
            setHeartPost('heartAnimation like')
            setHeart('heart')
            setColor('#FF0000')
            setNumberLike(numberLike + 1)
            setTimeout(() => {
                setHeartPost('heartAnimation')
            }, 500)
        } else if (statusLike === true) {
            setHeart('heart-outline')
            setColor('#000000')
            setNumberLike(numberLike - 1)
        }
    }

    return (
        <div data-test="post" className="post">

            <div className="top-post">
                <div className="box-top-post">
                    <a href={props.linkUser} target="_blank" rel="noreferrer">
                        <img src={props.imageUser} alt={props.imageUser} />
                    </a>
                    <a href={props.linkUser} target="_blank" rel="noreferrer">
                        <p className="user-name">{props.user}</p>
                    </a>

                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div className="box-post">
                <img data-test="post-image" onDoubleClick={likePost} src={props.imagePost} alt={props.imagePost} />
                <ion-icon class={heartPost} name="heart"></ion-icon>
            </div>

            <div className="end-post">
                <div className="box-end-post">
                    <div className="box-icons">
                        <ion-icon data-test="like-post" name={heart} style={{ color: color }} onClick={() => { likePost(true) }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon class="mark" data-test="save-post" onClick={() => { setbookmark(!bookmark) }} name={(bookmark === true) ? "bookmark-outline" : "bookmark"}></ion-icon>
                </div>

                <div className="box-end-post-user">
                    <a href={props.linkFollower} target="_blank" rel="noreferrer">
                        <img src={props.imageFollower} alt={props.imageFollower} target="_blank" rel="noreferrer" />
                    </a>
                    <p> Curtido por <a href={props.linkFollower} target="_blank" rel="noreferrer"> {props.userFollower} </a> e
                        <a data-test="likes-number" href={props.linkOthers} target="_blank" rel="noreferrer"> {numberLike} pessoas</a>
                    </p>
                </div>
            </div>

        </div >
    );
};