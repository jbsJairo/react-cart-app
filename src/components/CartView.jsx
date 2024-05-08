import { useEffect, useState } from "react";
import { calculateTotal } from "../helpers/productsService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ items, handlerDelete }) => {

    const navigate = useNavigate();

    const [ total, setTotal ] = useState(0);

    const onDeleteProduct = (id) => {
        handlerDelete(id);
    }
    
    useEffect( () => {
        setTotal(calculateTotal(items));
    }, [ items ])


    const onCatalog = () => {
        navigate("/catalog");
    }

    return(
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map ( item => (
                        <tr key={ item.product.id }>
                            <td>{ item.product.name }</td>
                            <td>{ item.product.price }</td>
                            <td>{ item.quantity }</td>
                            <td>{ item.product.price * item.quantity }</td>
                            <td><button
                                className="btn btn-danger"
                                onClick={ () => onDeleteProduct(item.product.id) } >eliminar</button></td>
                        </tr>
                     )) }
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text fw-bold">{ total }</td>
                    </tr>
                </tfoot>
            </table>   

            <button 
                className="btn btn-success" 
                onClick={ onCatalog }>
                    Seguir comprnado
            </button>         
        </>
    )
}