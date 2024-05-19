import {Header, NewMain, NewRight} from '../index'
import '../Layout/Layout.css';

const NewLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <div className="main-right">
            <NewRight/>
            <NewMain/>
          </div>
        </div>
    )
}

export default NewLayout