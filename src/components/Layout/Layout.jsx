import {Header, Main, Right} from '../index'
import './Layout.css';

const Layout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <div className="main-right">
            <Right/>
            <Main/>
          </div>
        </div>
    )
}

export default Layout