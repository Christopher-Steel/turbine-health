import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useStore } from '../../store';
import TurbineStatus from '../TurbineStatus';

const TurbineGrid = () => {
    const { turbines } = useStore();
    return (
        <Row>
            {turbines.map((turbine) => (
                <Col key={turbine.id}>
                    <TurbineStatus id={turbine.id} warnings={turbine.warnings} criticals={turbine.criticals} />
                </Col>
            ))}
        </Row>
    );
};

export default TurbineGrid;