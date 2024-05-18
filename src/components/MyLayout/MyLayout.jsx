import {Footer, Header, MyMain, MyRight} from '../index'
import '../Layout/Layout.css';

const MyLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <MyRight/>
          <MyMain/>
          <Footer/>
        </div>
    )
}

export default MyLayout