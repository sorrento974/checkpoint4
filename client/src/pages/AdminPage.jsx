import AdminForm from "../components/AdminForm";
import "../styles/AdminPage.css";

function AdminPage() {
  return (
    <ul className="admin-page-container">
      <li className="admin-page-content">
        <h1 className="title-adminpage">Admin Page</h1>
        <AdminForm />
      </li>
      <li className="admin-page-image">
        <img
          className="img-adminpage"
          src="./src/assets/images/banniere.jpg"
          alt="banniere"
        />
      </li>
    </ul>
  );
}

export default AdminPage;
