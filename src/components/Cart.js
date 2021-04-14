import React, {useState} from 'react';
import ItemCheckout from './ItemCheckout';
import items from '../items';
import Header from './Header';
import Footer from './Footer';


const Cart = () => {
  const [allItems, setAllItems] = useState(items);
  const [total, setTotal] = useState(calculateTotal(allItems));

  function calculateTotal(listItems) {
    let newTotal = 0;
    listItems.forEach(item => {
      newTotal += item.price * item.count;
    });

    return newTotal.toFixed(2);
  }

  function updateTotal(name, itemCount) {
    let newTotal = 0;
    allItems.forEach(item => {
      if(item.name === name){
        item.count = itemCount;
      }
      newTotal += item.price * item.count;
    });

    setTotal(newTotal.toFixed(2));
  }

  function deleteItem(itemName) {
    let newItemsList = allItems.filter(item => item.name !== itemName);
    setAllItems(newItemsList);
    setTotal(calculateTotal(newItemsList));
  }

  return(
    <div className="container">
    	<div className="row adjustment">
    		<div className="col-xs-8">
    			<div className="panel panel-info">
    				<Header />

    				<div className="panel-body">
              {allItems.map(item =>
                <ItemCheckout
                  key={item.key}
                  item={item}
                  updateTotal={updateTotal}
                  deleteItem={deleteItem}
              />)}
    				</div>

    				<Footer total={total}/>
    			</div>
    		</div>
      </div>
    </div>
  );
}

export default Cart;
