export default class RestoService {
    getData = async () => {
        const res = await fetch('http://localhost:3001/menu');
        return await res.json();
    }
    postData = async (data) => {
        const res = await fetch('http://localhost:3001/order', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await res.json();
    }
}