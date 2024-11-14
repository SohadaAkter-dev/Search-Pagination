const productModel = require("../models/ProductModel");
exports.ProductSearchAndPagination = async (req,res)=>{
    try{
        let pageNumber = Number(req.params.pageNumber)
        let perPage = Number(req.params.perPage)
        let searchKeyword =req.params.searchKeyword
        let data;
        let skip =
        (pageNumber-1)*perPage
        if(searchKeyword !="null"){
        let searchRegex ={$regex: searchKeyword,$options:"i"}
        let query = {$or:[
        {title:searchRegex},
        {category:searchRegex},
        {brand:searchRegex},
        {price:searchRegex},
        {description:searchRegex},
        {image:searchRegex},
        {productCode:searchRegex},
        {remarks:searchRegex},]}
        data = await productModel.aggregate([
        {
            $facet : {
            total: [{$match:query},{$count:"total"}],
            rows:[{$match:query},{$skip:skip},{$limit:perPage}]
            }
        }
        ])
        }
        else{
            data = await productModel.aggregate([
        {
            $facet : {
            total: [{$count:"total"}],
            rows:[ {$skip:skip},{$limit:perPage}]
            }
        }
        ])
        }
        res.status(200).json({status:"success",data:data})
    }

    catch(err){
        res.status(200).json({status:"fail",data:err}) 
    }
}