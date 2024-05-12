import profilePicture from "../assets/logo.png";

function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePicture}></img>
            <h2 className="card-title">Lucky Curve</h2>
            <p className="card-text">I learn rust and use it in my work</p>
        </div>
    );
}

export default Card;