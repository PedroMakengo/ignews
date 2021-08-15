import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  
  const users = [
    {id: 1, name: 'Pedro'},
    {id: 1, name: 'Ivan'},
    {id: 1, name: 'Josy'},
  ];

  return response.json(users);
}