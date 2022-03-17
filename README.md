### REFORMAR PARA USAR GRAPHQL
- #### Get All Products
  - `{
  getAllProducts {
    id
    title
    price
    stock
  }
}`

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-1.JPG?raw=true)

- #### Add Products
  - `mutation{
	addProduct(data: {title: " ", price:" ", stock:10}){
    id
  }
}`

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-1.JPG?raw=true)

- #### Update Products
  - `mutation{
    updateProduct(id: 1, data:{title: "TestUpdate3", price: "3000", stock: 30}) {
    title
    price
    stock
    id
  }
}`

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-3.JPG?raw=true)
- #### Delete Products
  - `mutation{
	deleteProduct(id: 9){
    id
  }
}
<<<<<<< HEAD
`
![alt text]()
=======

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-4.JPG?raw=true)
>>>>>>> 1a67a41c3b0846ca943a2e37898c1d3a9278f003
