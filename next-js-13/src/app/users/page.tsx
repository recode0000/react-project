import UserList from "./userlist"


const Page = async() => {
  return (
    <div>
      <h1>ユーザー一覧</h1>
      {/* @ts-expect-error Async Server Component */}
      <UserList />
    </div>
  )
}

export default Page