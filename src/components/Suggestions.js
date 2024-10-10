export default function Suggestions() {

    const suggestions = [
        {
            link: "",
            img: "./assets/img/adorable_animals.svg",
            user: "adorableanimals",
            status: "Segue Você"
        },
        {
            link: "",
            img: "./assets/img/bad.vibes.memes.svg",
            user: "adorable_animals",
            status: "Segue Você"
        },
        {
            link: "",
            img: "./assets/img/chibidart.svg",
            user: "chibidart",
            status: "Segue Você"
        },
        {
            link: "",
            img: "./assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            status: "Segue Você"
        },
        {
            link: "",
            img: "./assets/img/smallcutecats.svg",
            user: "smallcutecats",
            status: "Segue Você"
        },
    ];

    return (
        <>
            <div className="paragraphs-second-session">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {suggestions.map((suggestion) =>
                <Sugestoes key={suggestion.user} link={suggestion.link} img={suggestion.img} user={suggestion.user} status={suggestion.status} />
            )}
        </>
    );
};

function Sugestoes(props) {
    return (
        <div className="third-session">
            <div className="img-1">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.img} alt="img" />
                </a>
                <div>
                    <a href={props.link} className="p-1" target="_blank" rel="noreferrer">{props.user}</a>
                    <p className="p-2">{props.status}</p>
                </div>
                <div>
                    <p>Seguir</p>
                </div>
            </div>
        </div>
    );
};
