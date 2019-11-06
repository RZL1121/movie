import {CHANGE_CAR} from "./const"

// cxt.commit(CHANGE_CAR,cars)

export default {
    
   
    seebooklist(ctx){
          let cars = getbook()
          ctx.commit(CHANGE_CAR,cars)
    },

    addInCars(ctx,res){
      setTimeout(() => {
        let cars = getbook()
    

        let have = function (cars){
          cars.some(item=>{
            if(item._id === res._id){
              item.num++
              return true
             
            }
         })
        }
        if(!have){
          item.num = 1
               cars.push(res)
        }
 
        
        console.log(cars)

    
     
       localStorage.book = JSON.stringify(res)
         
     
     
       ctx.commit(CHANGE_CAR,cars)

      }, 1000);
    }


}
//
function getbook(){
    return JSON.parse(localStorage.book?localStorage.book:'[]')
}

