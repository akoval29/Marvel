import {Link, NavLink} from 'react-router-dom'
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to='/'>
          {/* <span>Marvel</span> information portal  */}
          <span>Marvel information portal v.3: </span> Кастомні хуки
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li> <NavLink 
                end 
                style={({ isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})}
                to='/'>Characters</NavLink></li>
          /
          <li> <NavLink 
                end 
                style={({ isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})}
                to='/comics'>Comics</NavLink></li>
          /
          <li> <NavLink 
                end 
                style={({ isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})}
                to='/test'>Test</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;