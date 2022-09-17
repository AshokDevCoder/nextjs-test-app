import Link from "next/link";

const Users = ({ users }) => {
  // console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/${user.id}`}>
              <h1>{user.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

export async function getServerSideProps() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
