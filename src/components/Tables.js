
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faQuestionCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Table} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import useFetchTableDashboard from "../hooks/useFetchTableDashboard";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};




export const TableRegisters = () => {

  var pathRoute = localStorage.getItem("pathBaseToCallAPI");
  

  const {tableDash} = useFetchTableDashboard(`http://${pathRoute}/monitor/stator/data/table-dash`);

  const listTableDash = tableDash.map((tablerow) => {
    console.log(tablerow)
  })

  const TableRow = (props) => {
    const { id, serial, fechaLectura, boolStatus } = props;
    const statusIcon = boolStatus == 0 ? faTimesCircle : boolStatus == 1 ?faCheckCircle : faQuestionCircle;
    const statusTxtColor = boolStatus <= 0 ? "text-danger" : "text-success";
    const status = boolStatus == 0 ? "No aprobado" : boolStatus == 1 ? 'Aprobado':"Indefinido";

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{serial}</td>
        <td>{fechaLectura}</td>
        <td>
          <FontAwesomeIcon icon={statusIcon} className={`${statusTxtColor} me-3`} />
          {status}
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Historial</h5>
          </Col>
          <Col className="text-end">
          <Link to="/dashboard/registro">
            <Button variant="secondary" size="sm">Ver todo</Button>
          </Link>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Modelo</th>
            <th scope="col">Fecha de lectura</th>
            <th scope="col">Estado</th> 
          </tr>
        </thead>
        <tbody>
          {tableDash.map(row => <TableRow key={`page-visit-${row.id}`} {...row} />)}
        </tbody>
      </Table>
    </Card>
  );
};