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
  - mutation{
	addProduct(data: {title: "TestD", price:"400", stock:10}){
    id
  }
}

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-2.JPG?raw=true)
