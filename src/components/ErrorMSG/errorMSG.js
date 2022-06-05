import img from './error.gif'

const ErrorMSG = () => {
    return (
        // <img src ={process.env.PUBLIC_URL + '/error.gif'}/>  //якби фотка лежала в папці public
        <img style ={{display: 'block', width: "356px", height: "200px", objectFit: 'contain', margin: '0 auto'}} src ={img}/>
    )
}
export default ErrorMSG;