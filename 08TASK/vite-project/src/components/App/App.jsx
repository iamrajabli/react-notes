import './App.css';
import List from '../List/List';
import Cart from '../Cart/Cart';
import { useState } from 'react';


const App = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const updateProductId = (id) => {
        setSelectedProduct(id)
    }

    return (
        <div className="container">
            <List select={updateProductId}/>
            <Cart id={selectedProduct} select={updateProductId}/>
        </div>
    )
}

export default App;