import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from "../CustomCard";
import CustomTable from "../CustomTable";
import { get } from "../../utilities/apim";
import PaginationComponent from '../Pagination';

const totalItems = 100; //hardcoding here because don't have any way from the backend service which gives total count

const itemsPerPage = 10;

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage) {
      getOrders(currentPage);
    }
  }, [currentPage])

  const getOrders = async (pg) => {
    const data = await get(`/order-list?_page=${pg}&_limit=10`);
    if (data?.length) {
      setOrderData(data);
    }
  }

  return (
    <CustomCard
      component={(<>
        <CustomTable data={orderData} />
        <Row>
          <Col>
            <p>
        Showing 10 of 100 results
            </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <PaginationComponent
              itemsCount={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              alwaysShown={false}
            />
          </Col>
        </Row>
      </>
      )}
    />
  );
}

export default OrderList;