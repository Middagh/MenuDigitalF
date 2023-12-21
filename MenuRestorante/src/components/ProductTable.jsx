import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import pruebaApi from '../../src/api/Api';
import ModalProduct from './ModalProduct';

export const ProductTable = () => {

    const [uploadProduct, setUploadProduct] = useState([]);  // almacenamiento de los productos en front
      

    // trae a los productos del DB
    const bringProduct = async () => {
        try {
            const resp = await pruebaApi.get("/admin/getproduct") // ruta de la db

            setUploadProduct(resp.data.product); // guarda los usuarios traidos del db a la consola en front
        } catch (error) {
            console.log(error)
        }
    };

    //carga los usuarios bien se ingresa a la page
    useEffect(() => {
        bringProduct();
    }, []);


    return (
        <>
           
            <ModalProduct />{/* Modal para crear producto */}

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        uploadProduct.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}