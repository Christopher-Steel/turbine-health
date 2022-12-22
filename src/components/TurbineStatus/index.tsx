import Card from 'react-bootstrap/Card';

type TurbineStatusProps = {
    id: string;
    warnings: number;
    criticals: number;
}

const TurbineStatus = ({id, warnings, criticals}: TurbineStatusProps) => {
    const CRITICAL = 'danger';
    const WARNING = 'secondary';
    const OK = 'success';

    let cardTheme = OK;
    if (criticals !== 0) {
        cardTheme = CRITICAL;
    } else if (warnings !== 0) {
        cardTheme = WARNING;
    }

    return (
        <Card bg={cardTheme} key='{id}' text='white' className="mb-2" style={{ width: '10rem' }}>
            <Card.Header>
                <Card.Title>{id}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {(cardTheme !== OK &&
                        <p>
                            {warnings} warnings<br/>
                            {criticals} critical failures
                        </p>
                    ) || (
                        <p><br/><br/></p>
                    )}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TurbineStatus;