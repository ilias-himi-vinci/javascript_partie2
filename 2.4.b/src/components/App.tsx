import type { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";

const App = () => {
  const title = "Welcome to My App";

  const users: User[] = [
    { name: "John Doe", age: 25, isOnline: true },
    { name: "Jane Doe", age: 22, isOnline: false },
    { name: "Foo Bar", age: 30, isOnline: true },
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      {users.map((user) => (
        <UserCard user={user} />
      ))}
      <Footer text={footerText} />
    </div>
  );
};

export default App;