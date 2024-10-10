export default function Stories() {

    const stories = [
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
        {
            link: "",
            img: "./assets/img/dog.svg",
            user: "DOGS..."
        },
    ];

    return (
        <div className="stories-menu">
            {stories.map((story) =>
                <Story key={story.img} link={story.link} image={story.img} user={story.user} />
            )}

            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </div>
    );
};

function Story(props) {
    return (
        <div className="container-story">
            <div>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.image} alt={props.image} />
                </a>
            </div>
            <p>{props.user}</p>
        </div>
    );
};
