//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UBDATE_TABLES = createActionName('UBDATE_TABLES');

// action creators
export const ubdateTables = payload => ({ type: UBDATE_TABLES, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UBDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;