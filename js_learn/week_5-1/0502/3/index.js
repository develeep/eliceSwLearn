import API from "./api";

const requestUsers = () => {
  return API.fetchUsers().then((users) => {
    // 유저 정보를 변화하고, 필터링하는 코드를 작성해보세요.
    const userInfo = users.map(transUser)
    const result = userInfo.filter((user)=>user.age>=40)
    return result
  });
};
function transUser(user) {
  const email = user.email;
  const name = `${user.name.first} ${user.name.last}`;
  const pictureUrl = user.picture.large;
  const username = user.login.username;
  const location = `${user.location.country}, ${user.location.state}, ${user.location.city}`;
  const age = user.dob.age;
  return {email,name,pictureUrl,username,location,age}

}
export default requestUsers;