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

![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-2.JPG?raw=true)

- #### Update Products
  - `mutation{
        updateProduct(id: 1, data:{title: " ", price: " ", stock: 30}) {
            title
            price
            stock
            id
        }
    }`
    
![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-3.JPG?raw=true)

- #### Delete Products
  - `mutation{
	    deleteProduct(id: 7){
        id
        }
    }`
    
![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-graphql/blob/main/assets/gr-4.JPG?raw=true)
