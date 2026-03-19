import { Search } from "lucide-react"


const InputSearch = () => {
    return (
        <>
            <div className="header__search">
                <div className="header__search__box">
                    <Search color="#999898" size={20} />
                    <input type="search" placeholder="Search tasks..." />
                </div>
            </div>
        </>
    )
}

export default InputSearch;