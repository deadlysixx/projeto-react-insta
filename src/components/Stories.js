export default function Stories() {

    const stories = [
        {
            link: "",
            img: "./assets/img/9gag.svg",
            user: "9gag"
        },
        {
            link: "",
            img: "./assets/img/meowed.svg",
            user: "meowed"
        },
        {
            link: "",
            img: "./assets/img/barked.svg",
            user: "barked"
        },
        {
            link: "",
            img: "./assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpyle..."
        },
        {
            link: "",
            img: "./assets/img/wawawicomics.svg",
            user: "wawawiwac..."
        },
        {
            link: "",
            img: "./assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            link: "",
            img: "./assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            link: "",
            img: "./assets/img/memeriagourmet.svg",
            user: "memeriagourmet"
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
