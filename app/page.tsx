import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  // const users = await queryBuilder
  //   .selectFrom('users')
  //   .select(['id', 'name', 'username', 'email'])
  //   .where('name', 'like', `%${search}%`)
  //   .execute();

  const users = [
    {
      id: 1,
      name: "Lee Robinson",
      username: "leerob",
      email: "lee@vercel.com"
    },
    {
      id: 2,
      name: "Leanne Graham",
      username: "leanne",
      email: "leanne@gmail.com"
    },
    {
      id: 3,
      name: "Ervin Howell",
      username: "ervin",
      email: "ervin@gmail.com"
    },
    {
      id: 4,
      name: "Clementine Bauch",
      username: "clementine",
      email: "clementine@gmail.com"
    },
    {
      id: 5,
      name: "Glenna Reichert",
      username: "glenna",
      email: "glenna@gmail.com"
    },
  ]

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
