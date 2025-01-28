import Users from "@/components/users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();

  //console.log(data.data);
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default HomePage;
