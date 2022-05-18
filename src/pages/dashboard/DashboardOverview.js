
import React, {useState} from "react";
import { Col, Row, Button, Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, SalesValueWidget} from "../../components/Widgets";
import { TableRegisters } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Custom hook
import useFetchDate from "../../hooks/useFetchDate";
import useFetchIndicatorsCounter from "../../hooks/useFetchIndicatorsCounter";
import useFetchGraphicWeekly from "../../hooks/useFetchGraphicWeekly";
import useFetchServiceAPIOnline from "../../hooks/useFetchServiceAPIOnline";

export default () => {

  var pathRoute = localStorage.getItem("pathBaseToCallAPI");
  var line = localStorage.getItem("line");

  console.log(pathRoute);

  const { data } = useFetchDate(`http://${pathRoute}/monitor/stator/date`);

  const listDate = data.map((date) =>
    `${date['date']}`
);
  const [filterAPI,setFilterAPI]=useState('weekly');
  const { indicatorsCount } = useFetchIndicatorsCounter(`http://${pathRoute}/monitor/stator/indicators?filter=${filterAPI}`);

  const { dataGraphicWeekly } = useFetchGraphicWeekly(`http://${pathRoute}/monitor/stator/graphic-week`);

  const listIndicators = indicatorsCount.map((indicator) => {
    console.log(indicator['icon'])
    return (
      <Col xs={12} sm={6} xl={4} className="mb-4">
        <CounterWidget
        category={indicator['category']}
        title={indicator['title']}
        period={indicator['period']}
        percentage={indicator['percent']}
        icon={indicator['icon']}
        iconColor="shape-secondary"
        range="semana pasada"
        />
      </Col>
    )
  })

  let totalTiempoReal = localStorage.getItem("TotalRealTime")
  let totals = dataGraphicWeekly.map( val =>{
     return val['value']
  } )

  let totalAp = totals[0]

  console.log(totalAp)

  const valueTotalAp = totalAp === undefined ? 0 : totalAp.reduceRight((anterior, actual) => {
    return anterior + actual
  })

  const [filter,setFilter]=useState('Línea 2');

  function isChangedLine(){
    localStorage.setItem("changedLine", true)
    var timerServices = localStorage.getItem("timerServices");
    var timerIndicator = localStorage.getItem("timerIndicators");
    var timerTable = localStorage.getItem("timerTable");
    var timerGraphicWeekly = localStorage.getItem("timerGraphicWeekly");
    var timerGraphic = localStorage.getItem("timerGraphic");
    var timerDate = localStorage.getItem("timerDate");
    clearTimeout(timerServices);
    clearTimeout(timerIndicator);
    clearTimeout(timerTable);
    clearTimeout(timerGraphicWeekly);
    clearTimeout(timerGraphic);
    clearTimeout(timerDate);
    localStorage.removeItem("timerServices");
    localStorage.removeItem("timerIndicators");
    localStorage.removeItem("timerTable");
    localStorage.removeItem("timerGraphicWeekly");
    localStorage.removeItem("timerGraphic");
    localStorage.removeItem("timerDate");
  }

  const { status } = useFetchServiceAPIOnline(`http://em10vs0009:9797/monitor/notification/`);
  

  function catchSelect(e){
     
    console.log(e);
    if(e == 'line-one'){
      setFilter('Línea 1')
      localStorage.setItem("line", "1")
      localStorage.setItem("pathBaseToCallAPI", "em10vs0009:9292")
      localStorage.setItem("pathBaseToCallAPINotification", "em10vs0009:9393")
      isChangedLine();
    }
    else if(e == 'line-two'){
      setFilter('Línea 2')
      localStorage.setItem("line", "2")
      localStorage.setItem("pathBaseToCallAPI", "em10vs0009:9898")
      localStorage.setItem("pathBaseToCallAPINotification", "em10vs0009:9797")
      isChangedLine();
    }
    else {
      setFilter('Línea 6')
      localStorage.setItem("line", "6")
      localStorage.setItem("pathBaseToCallAPI", "em10vs0009:9999")
      localStorage.setItem("pathBaseToCallAPINotification", "em10vs0009:9494")
      isChangedLine();
  }
}


  return (
    <>
    <div>
    <h3>Dashboard Estatores Línea {line}</h3>
    </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        
      <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2"
        onSelect={catchSelect}
        >
    <Button variant="primary">{filter}</Button>

    <Dropdown.Toggle split variant="primary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item  eventKey="line-one">Línea 1</Dropdown.Item>
    <Dropdown.Item  eventKey="line-two">Línea 2</Dropdown.Item> 
    <Dropdown.Item  eventKey="line-six">Línea 6</Dropdown.Item>
     
    </Dropdown.Menu>
      </Dropdown>
              
      

        <Button>
          {listDate}
        </Button>

        
      </div>

      <Row className="justify-content-md-center">
        {listIndicators}
      </Row>

      <Row>
        <Col xs={12} xl={12}>
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                <SalesValueWidget
                title="Desempeño en tiempo real (aprobados)"
                value={totalTiempoReal}
          />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Desempeño semanal"
                    value={valueTotalAp}
                    data={dataGraphicWeekly} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Col xs={12} className="mb-4 d-none d-sm-block">
      <TableRegisters />
          </Col>
    </>
  );
};
