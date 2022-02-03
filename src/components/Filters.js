
function Filters({greasedFilter, greasedHogs, nameSortChange, weightSortChange}) {
    
    

    return (
        <div className="filters">
            <button onClick={greasedFilter}> {greasedHogs? 'Show All' : 'Show Greased Hogs'}</button>
            <div className="sort-list">
            <p>Sort: </p>
            <div>
            <label htmlFor="name">Name: </label>
            <input type="checkbox" id="name" onChange={nameSortChange}></input>
            </div>
            <div>
            <label htmlFor="weight">Weight: </label>
            <input type="checkbox" id="weight" onChange={weightSortChange}></input>
            </div>
            </div>
        </div>
    )
}

export default Filters;