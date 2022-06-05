import img from './error.gif'

const ErrorMSG = () => {
    return (
        // <img src ={process.env.PUBLIC_URL + '/error.gif'}/>  //якби фотка лежала в папці public
        <img src ={process.env.PUBLIC_URL + '/error.gif'}/>
    )
}
export default ErrorMSG;