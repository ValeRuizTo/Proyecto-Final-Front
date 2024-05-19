import {Header, MyMain, MyRight} from '../index'
import '../Layout/Layout.css';

const MyLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <MyRight/>
          <MyMain/>
        </div>
    )
}

export default MyLayout