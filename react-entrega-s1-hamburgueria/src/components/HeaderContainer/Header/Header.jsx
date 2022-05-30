import './header.css'

const Header = ({children}) => {

  return(
    <header className='header'>
      {children}
    </header>
  )
}

export default Header;