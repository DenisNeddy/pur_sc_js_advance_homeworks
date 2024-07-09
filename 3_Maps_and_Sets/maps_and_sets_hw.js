let users = [
  {
    id: 1,
    name: "Вася",
  },
  {
    id: 2,
    name: "Петя",
  },
  {
    id: 1,
    name: "Вася",
  }
];

function getUniqueUsers (users = []) {
  const result = [];

  const uniqueIds = new Set(users.map(user => user.id));

  for (let value of uniqueIds) {
    result.push(users.find(user => value === user.id));
  }

  return result;
}

