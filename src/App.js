import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import { fetchProducts } from './services/productService';
import useDebouncer from './hooks/useDebouncer';
import { AutoComplete } from './components/AutoComplete';

function App() {
  const [searchKey, setSearchKey] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  useDebouncer((value) => {
    if(value === '') {
      setFilteredList([]);
      return;
    }
    const list = products.filter((product) => {
      return (product.title.toLowerCase().includes(value));
    });
    setFilteredList(list);
  }, searchKey, 200);

  const onSearchInputChange = (event) => {
    setSearchKey(event.target.value);
  };

  const onSearchButtonSelected = () => {
    console.log(searchKey);
  };

  return (
    <div className="App">
      <span className="search-bar">
        <AutoComplete 
          uid="searchInput" 
          className="search-input"
          onInputChange={onSearchInputChange} 
          hints={filteredList}
          inputValue={searchKey}/>
        <Button 
          uid="searchButton" 
          className="search-button"
          onSearchClick={onSearchButtonSelected} 
          label="Search"/>
      </span>
    </div>
  );
}

export default App;
