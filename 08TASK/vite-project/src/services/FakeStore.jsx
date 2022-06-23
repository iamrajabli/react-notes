
class FakeStore {

    getResources = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }

        return await res.json();
    }

    getProducts = async () => {
        const res = await this.getResources('https://fakestoreapi.com/products');

        return res.map((item) => this.transformData(item))
    }

    getProduct = async (id) => {
        const res = await this.getResources(`https://fakestoreapi.com/products/${id}`);

        return this.transformData(res)
    }

    transformData = (data) => {
        return {
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image
        }
    }
}

export default FakeStore;