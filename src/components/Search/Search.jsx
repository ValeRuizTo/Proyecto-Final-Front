import './Search.css'

const Search = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="🔍︎" />
            <div className="btn-container">
                <button className="btn-all">All</button>
                <button className="btn-hashtag">#</button>
            </div>
        </div>
    )
}

export default Search