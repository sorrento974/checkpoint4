import { Form, useLoaderData } from "react-router-dom";
import "../styles/AdminForm.css";

function AdminForm() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form className="form-add-name" method="put">
        <label className="label-add-name" htmlFor="name">
          Nom
        </label>
        <input
          className="input-add-name"
          type="text"
          id="name"
          name="name"
          defaultValue={loaderData.name}
        />
        <button className="button-delete-name" type="submit">
          Ajouter
        </button>
      </Form>

      <Form className="form-delete-name" method="delete">
        <label className="label-delete-name" htmlFor="name">
          Nom
        </label>
        <input
          className="input-delete-name"
          type="text"
          id="name"
          name="name"
          defaultValue={loaderData.name}
        />
        <button className="button-add-name" type="submit">
          Supprimer
        </button>
      </Form>
    </>
  );
}

export default AdminForm;
