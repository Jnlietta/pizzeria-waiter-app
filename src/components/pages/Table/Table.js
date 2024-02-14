import { useParams } from "react-router-dom";
import TableForm from "../../features/TableForm/TableForm";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";

const Table = () => {
  const {tableId} = useParams();
  const tableToEdit = useSelector(state => getTableById(state, tableId));

    return (
      <div>
        <h1>Table {tableId}</h1>
        <TableForm 
          tableId={tableId}
          {...tableToEdit}
        />
      </div>

    );
  };
  
  export default Table;