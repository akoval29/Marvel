import ErrorMSG from "../ErrorMSG/errorMSG"
import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <div>
      <ErrorMSG/>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Ой, а де це я ?</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Повернутись на головну сторінку</Link>
    </div>
  )
}