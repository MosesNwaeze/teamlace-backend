const connection = require("../configurations/database_connection");

const addProduct = (req, res) => {
  try {
      
    const payload = req.body;
    
    const sql = `INSERT INTO product
    (product_name,category_id,category_name,unit_price,status,available_since) 
    VALUES(?,?,?,?,?,?)`;
    const values = [`${payload[0].productName}`, `${parseInt(payload[0].categoryId)}`,
    `${payload[0].categoryName}`, 
    `${parseInt(payload[0].unitPrice)}`,`${payload[0].status}`,`${payload[0].availableSince}`];

     connection.query(sql, values, (error, result) =>{
         if(error){
             console.log(error.message);
             return res.status(500).json({
                 status: "error",
                 data: "Internal Server Error"
             })
         }

         return res.status(200).json({
             status: "success",
             data: result.insertId
         })
     })
  } catch (error) {}
};

module.exports = addProduct;