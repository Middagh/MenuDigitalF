import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import pruebaApi from '../../src/api/Api';
import ModalProduct from './ModalProductCreate';
import { DeleteProduct } from './DeleteButtonProduct';
import ModalProductEdit from './ModalProductEdit';

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

    // Función para actualizar la lista de productos después de eliminar
    const handleDeleteProduct = () => {
        bringProduct();
    };
    // Función para actualizar la lista de productos después de AGREGAR un nuevo producto
    const handleAddProduct = () => {
        bringProduct();
    };
    // Función para actualizar la lista de productos después de EDITAR un nuevo producto
    const handleEditProduct = () => {
        bringProduct();
    };
    return (
        <>
            {/* Modal para crear producto */}
            <ModalProduct onAddProduct={handleAddProduct} />

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
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
                                    <td>
                                        <ModalProductEdit onEditProduct={handleEditProduct} />
                                    </td>
                                    <td>
                                        <DeleteProduct productId={product._id} onDelete={handleDeleteProduct} /> {/* Button que elimina y actualiza pagina */}
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}