// Importer les modules du dépôt responsables de la gestion des opérations de données sur les tables
// const ItemRepository = require("./models/ItemRepository");
const ToysRepository = require("./models/ToysRepository");
const CartoonRepository = require("./models/CartoonRepository");

// Créer un objet vide pour contenir les dépôts de données pour différentes tables
const tables = {};

/* ************************************************************************* */
// Enregistrer les dépôts de données pour les tables
/* ************************************************************************* */

// Enregistrer chaque dépôt comme point d'accès aux données pour sa table
// tables.item = new ItemRepository();
tables.toys = new ToysRepository();
tables.cartoon = new CartoonRepository();

/* ************************************************************************* */

// Utiliser un Proxy pour personnaliser les messages d'erreur lors de l'accès à une table inexistante

// Exporter l'instance Proxy avec la gestion des erreurs personnalisée
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Vérifier si la propriété (table) existe dans l'objet tables
    if (prop in obj) return obj[prop];

    // Si la propriété (table) n'existe pas, lancer une ReferenceError avec un message d'erreur personnalisé
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
