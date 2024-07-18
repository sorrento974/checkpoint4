const AbstractRepository = require("./AbstractRepository");

class ToysRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "toys" });
  }

  // The C of CRUD - Create operation

  async create(toys) {
    // Execute the SQL INSERT query to add a new toy to the "toys" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name,image,release_date,manufacturer) values (?,?,?,?)`,
      [toys.name, toys.image, toys.release_date, toys.manufacturer]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific toys by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "toys" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of toys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(toys) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ToysRepository;
