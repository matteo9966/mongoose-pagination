//pass a model to this function, in this wai it becomes reusable!
function paginateCollection(model){
 

   async function paginate(req,res,next) {
       console.log(req.query);

      const page=+req.query.page;
      const limit = +req.query.limit;
      const firstItemIndex=(page-1)*limit;
      const lastItemIndex =page*limit; 
      
      //intervaltipe is firstItem firstItemIndex <= [interval of values] < lastItemIndex

      const result = {};
      const itemsInCollection =await model.countDocuments();
      
      result.next={};
      result.previous={};
      
      if(page>1){
          const previouspage= {
              page:page-1,
              limit:limit
          }
          result.previous=previouspage;
       
      }
      if(lastItemIndex<itemsInCollection){
          const nextpage= {
              page:page+1,
              limit:limit

          }
          result.next=nextpage
         
      }
      result.data = await model.find({}).skip(firstItemIndex).limit(limit)
      result.totalItemCount=itemsInCollection;
      req.result=result;
      next();
    
    }
    return paginate

}

module.exports = paginateCollection