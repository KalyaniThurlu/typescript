function Detailes(id:number,name:string,
    price?:number):void
    {
        if(price){

            console.log(`id=${id}\nname=${name}\nprice=${price}`)
        }else{
            console.log(`id=${id}\nname=${name}`)
        }
       
        
        }
        function Addition(a:number,b:number):number{
            return a+b
    }
    Detailes(1,"tv")
    console.log("Addition="+Addition(20,30))
     function Exdetailes(id:number,name:string,price?:number):void{
        if(price){
            console.log(`name=${name}\nid=${id}\n${price}`)
        
        }else{
            console.log(`name=${name}\nid${id}`)
        }

     }
     Exdetailes(20,"prethi")

     function exxDetailes(...product:any[]):void
     {
        var [id,Name,price]=product;
        if(price){
            console.log(`id=${id}\nname=${Name}\nprice${price}`)

        }else{
            console.log(`id=${id}\nName`)
        }
     }
     exxDetailes(2,"mobile")

   
     