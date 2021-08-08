import classes from './OutputScreen.module.css';

function OutputScreen(props){
    console.log(props.htmlElement)
    return(
        <iframe srcDoc={props.htmlElement}></iframe>
    )
}

export default OutputScreen;