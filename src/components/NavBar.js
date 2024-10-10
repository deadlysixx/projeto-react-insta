
export default function NavBar() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="tag-instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="border"></div>
                    <img className="img-instagram-desktop" src="./assets/img/name-instagram.webp" alt="logo-desktop" />
                </div>
                <img className="img-instagram-mobile" src="./assets/img/name-instagram.webp" alt="logo-desktop" />
                <div className="research-field">
                    <input type="text" id="text-area" value="Pesquisar" />
                </div>
                <div className="options-icons-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div className="options-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}