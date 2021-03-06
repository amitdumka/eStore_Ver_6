export default function DateFormater(value){
    const datevalue=value+"";
    if(datevalue!=null){
        var curDate= new Date(datevalue);
         return curDate.toLocaleDateString();
        
    }
  }

  