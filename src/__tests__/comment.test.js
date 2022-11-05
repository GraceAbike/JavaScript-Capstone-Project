const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fZEB2tpIC45iiUMRjYli/comments?item_id=52855';

const commentJson = [
    {
        comment: 'Looks Good!',
        username: 'ZikaZaki',
        creation_date: '2022-09-17',
      },
      {
        creation_date: '2022-09-17',
        comment: 'zx',
        username: 'Bob',
      },
      {
        username: 'Dann',
        comment: 'Good stuff',
        creation_date: '2022-09-17',
      },
      {
        creation_date: '2022-09-17',
        comment: 'Love it',
        username: 'Wdhah',
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