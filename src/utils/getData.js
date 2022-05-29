 export const getData =  async () => {
    const response = await fetch(`https://reqres.in/api/products`);
    let { data } = await response.json();
    const response2 = await fetch(`https://reqres.in/api/products?page=2`);
    let  data2  =  await response2.json();

    let arr = data.concat(data2.data);
    return arr
 }
 export const getProduct = async (id) => {
   const response = await fetch(`https://reqres.in/api/product/${id}`);
   let { data } = await response.json();
   return data
 }
