



const Nav = ({minimal, authToken}) => {

    



    return (
        <nav>
        <div>
            <img className="logo" src={minimal ? colorLogo : logo}/>

        </div>
        {!authToken && !minimal && <button className="nav-button">Log in</button>}
    
        </nav>
    )

}

export default Nav




