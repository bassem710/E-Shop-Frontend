import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import ViewProductsAdminHook from '../../Hook/admin/ViewProductsAdminHook'

const AdminAllProductsPage = () => {
    const [ products, pagination, onPress ] = ViewProductsAdminHook();

    if(pagination)
        var pageCount = pagination;
    else
        pageCount = 0
    
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>
                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={products}/>
                    {
                        pageCount > 1 && <Pagination pageCount={pageCount} onPress={onPress} />
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
