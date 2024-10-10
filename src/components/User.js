import React from "react";

export default function User() {

    const users = [{
        img: 'https://www.google.com/imgres?q=Salatiel%20Couto&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F3540770457%2F465c722a6549e78d15a8b0dd5636ce05_400x400.jpeg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fcoutosalat&docid=5iA8Cec9NCcIMM&tbnid=e5cKP4fAqo9d5M&vet=12ahUKEwiMyYGQ1YKJAxWkD7kGHZYXDYAQM3oECBUQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwiMyYGQ1YKJAxWkD7kGHZYXDYAQM3oECBUQAA',
        user: 'salat.couto',
        name: 'Salatiel Couto'
    }];

    return (
        <>
            {users.map((mapUser) =>
                <RenderUser key={mapUser.user} img={mapUser.img} user={mapUser.user} name={mapUser.name} />
            )}
        </>
    );
};

function RenderUser(props) {

    const [userName, setUserName] = React.useState(props.name);
    const [photo, setPhoto] = React.useState(props.img);


    function changeName() {
        let username = prompt('Digite o nome de Usuário:');
        setUserName(`${username ? username : props.name}`);
    };

    function changePhoto() {
        let photoUser = prompt('Adicione uma nova foto:');
        setPhoto(`${photoUser ? photoUser : props.img}`);
    };

    return (
        <div className="container-1">
            <img data-test="profile-image" onClick={changePhoto} src={photo} alt="img" />
            <div className="paragraphs">
                <a href="https://www.instagram.com/salatcouto/" target="_blank" rel="noreferrer">{props.user}</a>
                <div>
                    <p data-test="name">{userName}</p>
                    <ion-icon data-test="edit-name" onClick={changeName} name="pencil-outline"></ion-icon>
                </div>

            </div>
        </div>
    );
};
