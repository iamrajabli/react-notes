import { useEffect, useState } from "react";
import FakeStore from '../../services/FakeStore'
const List = (props) => {
    const [products, setProducts] = useState([])
    const fakeStore = new FakeStore();
    const { select } = props;

    const onLoaded = () => {
        fakeStore.getProducts()
            .then(getDataForState)
    }

    const getDataForState = (data) => {
        setProducts(data);
    }

    useEffect(() => {
        onLoaded();
    }, [])

    const listItemArr = [];

    const allListItem = (item) => {
        listItemArr.push(item);
    }

    const added = (i) => {
        listItemArr[i].textContent = 'added'
    }

    const renderProducts = (data) => {
        return data.map((item, i) => {
            return (
                <div
                    key={item.id}
                    className="list__item">
                    <div className="list__item__left">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="list__item__right">
                        <h1>{item.title}</h1>
                        <p>{item.price}$</p>
                        <a
                            ref={allListItem}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                select(item.id);
                                added(i)
                            }}>add to cart</a>
                    </div>
                </div>
            )
        })
    }


    return (

        <div className="list__left">
            {renderProducts(products)}
        </div>
    )
}

export default List;