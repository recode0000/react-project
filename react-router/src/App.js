import { PrimaryButton  } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import './style.css';

const user = {
  name: "テストネーム",
  image: "https://source.unsplash.com/N04FIfHhv_k",
  email: "1234@test.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

function App() {
  return (
    <>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user}/>
    </>
  );
}

export default App;
