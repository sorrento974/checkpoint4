const AbstractRepository = require("./AbstractRepository");

class CartoonRepository extends AbstractRepository {
  constructor() {
    super({ table: "cartoon" });
  }

  async create(cartoon) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [cartoon.name]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(id, cartoon) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [cartoon.name, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CartoonRepository;
