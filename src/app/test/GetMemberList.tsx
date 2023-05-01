type Member = {
  id: number
  name: string
  email: string
}

const getMembers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const members: Member[] = await response.json()
  return members
}

const MembersList = async () => {
  const members = await getMembers()
  return (
    <>
      <h1>ユーザー一覧</h1>
      <ul>{members && members.map((member) => <li key={member.id}>{member.name}</li>)}</ul>
    </>
  )
}

export default MembersList
