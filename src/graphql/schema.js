const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Product {
        id: Int,
        name: String,
        stock: Int
    }
    
    type Query {
        getProducts : [Product]
        getProductById(id:Int) : Product
    }
    type Mutation { 
        addProduct(name: String, stock: Int) : Product
        modifyProduct(id: Int, name: String, stock: Int) : Product
        deleteProduct(id: Int) : [Product]
    }
`);

module.exports = { schema }