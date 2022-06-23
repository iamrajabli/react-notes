import { useState, useEffect } from 'react';
import FakeStore from '../../services/FakeStore'

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(null);
    const fakeStore = new FakeStore();
    const { id, select } = props;

    const onLoaded = (id) => {
        if (id === null) {
            return;
        }
        fakeStore.getProduct(id)
            .then(getDataForState)
    }

    const getDataForState = (data) => {
        setProducts(products => [...products, data]);
    }

    useEffect(() => {
        totalPrice(products)
    }, [products])

    useEffect(() => {
        onLoaded(id);

    }, [id])


    const totalPrice = (data) => {
        let count = 0;
        data.forEach(item => {
            count += item.price;
        });

        setTotal(count)
    }

    const leaveItem = (id) => {


        setProducts(products => products.filter(item => item.id !== id))
        select(null)
    }

    const renderProducts = (data) => {
        return data.map(item => {
            return (
                <div key={item.id} className="list__item">
                    <div className="list__item__left">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="list__item__right">
                        <h1>{item.title}</h1>
                        <p>{item.price}$</p>
                        <a
                            href="#"
                            onClick={(e) => {
                                
                                e.preventDefault();
                                leaveItem(item.id)
                            }}
                        >leave</a>
                    </div>
                </div>
            )
        })
    }


    const content = products ? renderProducts(products) : null;
    return (
        <div className="list__right">
            <div>
                {content}
            </div>


            <div className="total">
                <p>Total price {products ? `${total}$` : '0$'}</p>
            </div>
        </div>
    )
}

export default Cart;