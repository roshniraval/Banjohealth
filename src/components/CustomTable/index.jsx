
import Table from 'react-bootstrap/Table';
import { getFormattedDate } from '../../utilities';

const CustomTable = ({data}) => {
  return (        
    <Table striped>
      <thead>
        <tr>
          <th>Team Member</th>
          <th>Priority</th>
          <th>Team</th>
          <th>Order Number</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.length && data.map((item, index) => (
          <tr key={index}>
            <td>{item.teamMemberName}</td>
            <td>{item.priority}</td>
            <td>{item.team}</td>
            <td>{item.orderNumber}</td>
            <td>{getFormattedDate(item.dueDate)}</td>
          </tr>
        ))}                
      </tbody>
    </Table>    
  );
}

export default CustomTable;