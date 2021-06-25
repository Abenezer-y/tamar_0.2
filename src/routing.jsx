const failure = (error) => {console.error("Error: " + error);}
const respond = (response) => {console.log(response);}

const backend_server = process.env.REACT_APP_BACKEND_URI

const uri_add_account = backend_server + 'add_account'
const uri_account = backend_server + 'account'
const uri_add_income = backend_server + 'add_income'
const uri_income = backend_server + 'income'
const uri_add_expense = backend_server + 'add_expense'
const uri_expense = backend_server + 'expense'

const uri_add_assignment = backend_server + 'add_assignment'
const uri_assignment = backend_server + 'assignment'
const uri_trip = backend_server + 'trip'
const uri_add_trip = backend_server + 'add_trip'


export { failure, respond, uri_add_account, uri_add_income, uri_assignment, uri_trip, uri_add_assignment, uri_add_trip, uri_add_expense,
         uri_account, uri_income, uri_expense}