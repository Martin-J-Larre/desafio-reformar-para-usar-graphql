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
![alt text](https://github.com/Martin-J-Larre/desafio-16-heroku/blob/main/assets/heroku-1.JPG?raw=true)

- #### add Products
  - mutation{
	addProduct(data: {title: "TestD", price:"400", stock:10}){
    id
  }
}
![alt text](https://github.com/Martin-J-Larre/desafio-16-heroku/blob/main/assets/heroku-1.JPG?raw=true)