import styles from './SearchBox.module.css';


export default function SearchBox ({filter, onFilterChange}) {
const handleChange = event=>{
    onFilterChange(event.target.value)
}
return(
    <div className={styles.searchContainer}>
        <h2>Find contacts by name</h2>
        <input  
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={handleChange} />
    </div>
)
}
