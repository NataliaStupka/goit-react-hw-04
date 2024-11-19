import axios from 'axios';
// client_id: '4ChXu6KVv4PUXCS3EHYT84bih5AEnfXc2g47UvjiLBY',

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchPhoto = async (query, page) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query,
      page,
      per_page: 20,
      orientation: 'landscape',
      client_id: '4ChXu6KVv4PUXCS3EHYT84bih5AEnfXc2g47UvjiLBY',
    },
  });

  return response.data; //[{},{},..,{}]
};

// const testHttp = 'https://api.unsplash.com/search/photos?client_id=4ChXu6KVv4PUXCS3EHYT84bih5AEnfXc2g47UvjiLBY&query=cat&page=1&per_page=2';

// ul:
// display: flex;
//     flex-wrap: wrap;
//     /* justify-content: space-between; */
//     align-items: center;
//     /* margin-left: -30px; */
//     /* padding-left: 15px; */
//     padding-right: 15px;
//     /* flex-direction: column;

//li:
// margin-top: 30px;
// margin-left: 30px;
// flex-basis: calc((100% - 60px) / 2);
