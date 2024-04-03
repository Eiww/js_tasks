const patients = [
  { id: 1, name: "максим" },
  { id: 2, name: "николай" },
  { id: 3, name: "ангелина" },
  { id: 4, name: "виталий" },
];

const orders = [3, 4, 1, 2];

function giveTalonsInOrder(patients, orders) {
  let sortedPatients = [];
  for (let orderId of orders) {
    let patient = patients.find((p) => p.id === orderId);
    if (patient) {
      sortedPatients.push(patient);
    }
  }
  return sortedPatients;
}

console.log(giveTalonsInOrder(patients, orders));
