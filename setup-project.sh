#!/bin/bash

# Create the backend project directory
mkdir -p aenzbi-restaurant-pos-backend
cd aenzbi-restaurant-pos-backend

# Initialize the project with npm
npm init -y

# Install necessary packages
npm install express mongoose body-parser cors

# Create the directory structure
mkdir -p src/{models,routes,controllers}

# Create the main server file
cat <<EOL > src/server.js
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
  console.log(\`Server is running on port \${port}\`);
});
EOL

# Create model files
for model in orders sales tables users config items stock inventory reports itemMenu accounting suppliers customers taxes retail; do
cat <<EOL > src/models/${model}.js
const mongoose = require('mongoose');

const ${model}Schema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('${model}', ${model}Schema);
EOL
done

# Create controller files
for controller in orders sales tables users config items stock inventory reports itemMenu accounting suppliers customers taxes retail; do
cat <<EOL > src/controllers/${controller}.js
const ${controller.charAt(0).toUpperCase() + controller.slice(1)} = require('../models/${controller}');

// Basic CRUD operations

// Create a new record
exports.create = async (req, res) => {
  const newRecord = new ${controller.charAt(0).toUpperCase() + controller.slice(1)}(req.body);
  try {
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all records
exports.getAll = async (req, res) => {
  try {
    const records = await ${controller.charAt(0).toUpperCase() + controller.slice(1)}.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single record
exports.getOne = async (req, res) => {
  try {
    const record = await ${controller.charAt(0).toUpperCase() + controller.slice(1)}.findById(req.params.id);
    if (record == null) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a record
exports.update = async (req, res) => {
  try {
    const updatedRecord = await ${controller.charAt(0).toUpperCase() + controller.slice(1)}.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedRecord == null) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a record
exports.delete = async (req, res) => {
  try {
    const record = await ${controller.charAt(0).toUpperCase() + controller.slice(1)}.findById(req.params.id);
    if (record == null) {
      return res.status(404).json({ message: 'Record not found' });
    }
    await record.remove();
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
EOL
done

# Create route files
for route in orders sales tables users config items stock inventory reports itemMenu accounting suppliers customers taxes retail; do
cat <<EOL > src/routes/${route}.js
const express = require('express');
const router = express.Router();
const ${route}Controller = require('../controllers/${route}');

// Define routes
router.post('/', ${route}Controller.create);
router.get('/', ${route}Controller.getAll);
router.get('/:id', ${route}Controller.getOne);
router.put('/:id', ${route}Controller.update);
router.delete('/:id', ${route}Controller.delete);

module.exports = router;
EOL
done

# Create a README file
cat <<EOL > README.md
# AENZBi Restaurant POS Backend

This is the backend for the AENZBi Restaurant POS system, built with Node.js, Express, and MongoDB.

## Setup

1. Ensure you have MongoDB installed and running.
2. Clone this repository or download the files.
3. Navigate to the project directory.
4. Install the dependencies:
   \`\`\`bash
   npm install
   \`\`\`
5. Start the server:
   \`\`\`bash
   npm start
   \`\`\`

## API Endpoints

The following endpoints are available:

- \`/api/orders\`
- \`/api/sales\`
- \`/api/tables\`
- \`/api/users\`
- \`/api/config\`
- \`/api/items\`
- \`/api/stock\`
- \`/api/inventory\`
- \`/api/reports\`
- \`/api/itemMenu\`
- \`/api/accounting\`
- \`/api/suppliers\`
- \`/api/customers\`
- \`/api/taxes\`
- \`/api/retail\`

Each endpoint supports the following operations:

- \`GET /\` - Retrieve all records
- \`GET /:id\` - Retrieve a single record by ID
- \`POST /\` - Create a new record
- \`PUT /:id\` - Update a record by ID
- \`DELETE /:id\` - Delete a record by ID
EOL

echo "Backend setup complete. Navigate to the aenzbi-restaurant-pos-backend directory and start the server using 'npm start'."