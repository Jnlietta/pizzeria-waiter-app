import { API_URL } from "../config";

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UBDATE_TABLES = createActionName('UBDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const ubdateTables = payload => ({ type: UBDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => dispatch(ubdateTables(tables)));
  }
};
export const editTableRequest = (newTable) => {
  const id = newTable.tableId;
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables/${id}`, options)
      .then(() => dispatch(editTable(newTable)))
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UBDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.tableId ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};
export default tablesReducer;