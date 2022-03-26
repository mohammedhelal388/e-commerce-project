

const initialstate = [];

export default function handleCart (state = initialstate , action) {

    const product = action.payload
    switch(action.type)
    {
        case "ADDCART" :
            //Check if product is already exist
            const exists = state.find((val) => val.id === product.id)
            console.log(exists, "state")
            if(exists){
                //Increase the Quantity
                return state.map((val)=> val.id === product.id ? {...val, qty: val.qty + 1 } : val
                );
            }else {
                const product = action.payload
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        break;

        case "REMOVECART" :
            const exist1 = state.find((val) => val.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((val)=> val.id !== exist1.id) 
            }else {
                return state.map((val)=>
                    val.id === product.id ? {...val, qty : val.qty - 1} : val
                )
            }

            break;

        
        
        default:
            return state;
            break;    
    }
    

}