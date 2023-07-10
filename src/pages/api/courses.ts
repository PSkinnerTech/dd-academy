import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  return res.json([
    { id: 1, title: 'Fundraising' },
    { id: 2, title: 'Typescript' },
    { id: 3, title: 'Intro to AI' },
    { id: 4, title: 'Intro to Web3' },
  ]);
}
