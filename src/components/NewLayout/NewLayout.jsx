import {Header, NewMain, NewRight} from '../index'
import '../Layout/Layout.css';

const NewLayout  = () => {
    return (
        <div className="layout-container">
          <Header/>
          <NewRight/>
          <NewMain/>
        </div>
    )
}

export default NewLayout