import React, {useState} from 'react';


const ItemCheckout = ({item, updateTotal, deleteItem}) => {

  function handleChange(event){
    const {name, value} = event.target;
    updateTotal(name, (value !== "") ? parseInt(value) : 0);
  }

  return(
    <div className="row">
      <div className="col-xs-2"><img className="img-responsive" src={item.image}/></div>
      <div className="col-xs-4">
        <h4 className="product-name"><strong>{name}</strong></h4><h4><small>{item.description}</small></h4>
      </div>

      <div className="col-xs-6">
        <div className="col-xs-6 text-right">
          <h6><strong>{item.price} <span className="text-muted">x</span></strong></h6>
        </div>
        <div className="col-xs-4">
          <input type="text" className="form-control input-sm" name={item.name} onChange={handleChange} defaultValue={item.count}/>
        </div>
        <div className="col-xs-2">
          <button type="button" className="btn btn-link btn-xs" onClick={event => deleteItem(item.name)}>
            <span className="glyphicon glyphicon-trash"> </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCheckout;
