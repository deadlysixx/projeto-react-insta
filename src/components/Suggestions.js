export default function Suggestions() {

    const suggestions = [
        {
            link: "",
            img: "https://www.google.com/imgres?q=dogs&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA..i&w=3072&h=2048&hcb=2&itg=1&ved=2ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA",
            user: "dogs",
            status: "Segue Você"
        },
        {
            link: "",
            img: "https://www.google.com/imgres?q=dogs&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA..i&w=3072&h=2048&hcb=2&itg=1&ved=2ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA",
            user: "dogs",
            status: "Segue Você"
        },
        {
            link: "",
            img: "https://www.google.com/imgres?q=dogs&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA..i&w=3072&h=2048&hcb=2&itg=1&ved=2ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA",
            user: "dogs",
            status: "Segue Você"
        },
        {
            link: "",
            img: "https://www.google.com/imgres?q=dogs&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA..i&w=3072&h=2048&hcb=2&itg=1&ved=2ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA",
            user: "dogs",
            status: "Segue Você"
        },
        {
            link: "",
            img: "https://www.google.com/imgres?q=dogs&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA..i&w=3072&h=2048&hcb=2&itg=1&ved=2ahUKEwiCwZmh1IKJAxWpH7kGHd-yBpYQM3oFCIYBEAA",
            user: "dogs",
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
