const Details = ({ user }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  //   console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <i>{user.username}</i>
      <p>{user.email}</p>
    </div>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
}
