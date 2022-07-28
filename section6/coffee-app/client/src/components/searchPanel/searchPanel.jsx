import './searchPanel.scss';

const SearchPanel = () => {
    return(
        <div className='search_panel'>
            <label className='search_label' htmlFor='product_name'>Looking for</label>
            <input id='product_name' className='search_input' type="text" placeholder='start typing here...'/>
        </div>
    )
}

export default SearchPanel;