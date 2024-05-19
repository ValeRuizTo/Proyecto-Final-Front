import {Header, MyMain, MyRight} from '../index'
import '../Layout/Layout.css';

const MyLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <div className="main-right">
            <MyRight/>
            <MyMain/>
          </div>
        </div>
    )
}

export default MyLayout