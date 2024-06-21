const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/aenzbi-pos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection check
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const ordersRoute = require('./routes/orders');
const salesRoute = require('./routes/sales');
const tablesRoute = require('./routes/tables');
const usersRoute = require('./routes/users');
const configRoute = require('./routes/config');
const itemsRoute = require('./routes/items');
const stockRoute = require('./routes/stock');
const inventoryRoute = require('./routes/inventory');
const reportsRoute = require('./routes/reports');
const itemMenuRoute = require('./routes/itemMenu');
const accountingRoute = require('./routes/accounting');
const suppliersRoute = require('./routes/suppliers');
const customersRoute = require('./routes/customers');
const taxesRoute = require('./routes/taxes');
const retailRoute = require('./routes/retail');

// Use routes
app.use('/api/orders', ordersRoute);
app.use('/api/sales', salesRoute);
app.use('/api/tables', tablesRoute);
app.use('/api/users', usersRoute);
app.use('/api/config', configRoute);
app.use('/api/items', itemsRoute);
app.use('/api/stock', stockRoute);
app.use('/api/inventory', inventoryRoute);
app.use('/api/reports', reportsRoute);
app.use('/api/itemMenu', itemMenuRoute);
app.use('/api/accounting', accountingRoute);
app.use('/api/suppliers', suppliersRoute);
app.use('/api/customers', customersRoute);
app.use('/api/taxes', taxesRoute);
app.use('/api/retail', retailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
