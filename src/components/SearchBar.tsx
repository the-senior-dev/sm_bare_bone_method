export default function SearchBar({searchText,onChange,onClick}:SearchBarProps){
    return (
        <div>
            <input value={searchText} onChange={(e) => onChange(e.target.value)}></input>
            <button onClick={onClick}>Search</button>
        </div>
    )
}

interface SearchBarProps{
    searchText: string,
    onChange: (text: string) => void,
    onClick: () => void
}