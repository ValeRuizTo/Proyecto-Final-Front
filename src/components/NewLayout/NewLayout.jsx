import {Footer, Header, NewMain, NewRight} from '../index'
import '../Layout/Layout.css';

const NewLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <NewRight/>
          <NewMain/>
          <Footer/>
        </div>
    )
}

export default NewLayout