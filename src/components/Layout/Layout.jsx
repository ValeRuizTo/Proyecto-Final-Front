import {Footer, Header, Main, Right} from '../index'
import './Layout.css';

const Layout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <Main/>
          <Right/>
          <Footer/>
        </div>
    )
}

export default Layout