interface ICart {
    title: string
    price: number
    qty: number
}

import { _el } from "./helpers"

const CART: ICart[] = []

let editMode: boolean = false;
let editID: number | null = null;

function addToCart(){
  const title = (_el('prod_title') as HTMLInputElement).value;
  const qty = (_el('prod_qty') as HTMLInputElement).valueAsNumber;
  const price = (_el('prod_price') as HTMLInputElement).valueAsNumber;
  if (title === ""){
    //TODO: need to add toast function
      // toast.error('Enter title')
      return;
  }

  if (qty <= 0){
      // toast.error('Incorrerct quantity')
      return;
  }
  if (isNaN(qty)){
      // toast.error('Need to add quantity')
      return;
  }

  if(isNaN(price)){
      // toast.error('Enter price')
      return;
  }

  if (editMode){
      CART[editID as number] = {
          title,
          qty,
          price
      }
      // toast.success('Product updated');
      editMode = false;
      editID = null;
  } else {
      const prodIndex = CART.findIndex(prod => prod.title === title);
      if (prodIndex === -1){
          CART.push({
              title,
              qty,
              price
          })
      } else {
      CART[prodIndex].qty += qty;
  }
  // toast.success('Product successfully added');
  }
  

  

  
  (_el('prod_title') as HTMLInputElement).value = '';
  (_el('prod_qty') as HTMLInputElement).valueAsNumber = 1;
  (_el('prod_price') as HTMLInputElement).value = '';
  
}