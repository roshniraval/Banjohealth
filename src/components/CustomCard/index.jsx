import Card from 'react-bootstrap/Card';

const CustomCard = ({title = "", subtitle = "", component}) => {
  return (
    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle 
        className="mb-2 text-muted"
        >
            {subtitle}
        </Card.Subtitle>
        <Card.Text>
          {component}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;