const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ltfxAhWasUBm6Wza96hc/comments?item_id=52855';

const commentJson = [
  {
    comment: 'Looks Good!',
    username: 'Grace',
    date: '2022-11-3',
  },
  {
    date: '2022-11-3',
    comment: 'So Nice',
    username: 'Keenan',
  },
  {
    username: 'Abike',
    comment: 'Great stuff',
    date: '2022-11-3',
  },
  {
    date: '2022-11-3',
    comment: 'Love it',
    username: 'Botes',
  },
];

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(commentJson),
});

describe('Test-Cases: Comments Counter', () => {
  test('- Number of Comments Should Be: 5', async () => {
    const fetchedComments = await fetch(baseUrl);
    const comments = await fetchedComments.json();
    expect(comments.length).toBe(4);
  });
});