const appId = 'EWHznXDcFv4CmWkEcxM5';
const api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const saveBook = async ({
  id, title, type, author,
}) => {
  const response = await fetch(`${api}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id, title, author, category: type,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return response;
};

export const loadBooks = async () => {
  const response = await fetch(`${api}/books`).then((res) => res.json())
    .then((result) => result);
  const booksArr = Object.entries(response)
    .map(([id, book]) => ({ ...book[0], id: Number(id), type: book[0].category }));
  return booksArr;
};
export const removeBook = async (id) => {
  const response = await fetch(`${api}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return response;
};
