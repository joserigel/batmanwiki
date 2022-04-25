import "./Wiki.css"


export function Wiki(props) {
    return (
        <div className="article">
        <h1>The Batman Wiki</h1>
        <hr/>
        <MainDescription 
            img="./images/batman.jpeg" 
            name="Bruce Wayne" 
            height="185cm" 
            eye="Blue" 
            hair="Black"
            actor="Robert Pattinson"
            male={true}/>
            {props.children}
        </div>
    );
}

function MainDescription (props) {
    let actorText = (props.male)? "Actor" : "Actress";
    return (
        <div className="mainDescription">
        <h2>The Batman</h2>
        <img src={props.img}/>
        <table cellSpacing={0}>
            <tbody>
            <tr>
                <td>Real Name </td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Height </td>
                <td>{props.height}</td>
            </tr>
            <tr>
                <td>Eye Color</td>
                <td>{props.eye}</td>
            </tr>
            <tr>
                <td>Hair Color</td>
                <td>{props.hair}</td>
            </tr>
            <tr>
                <td>{actorText}</td>
                <td>{props.actor}</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}

export function Article(props) {
    return(
        <article>
        <h2>{props.title}</h2>
        {props.children}
        </article>
    );
}