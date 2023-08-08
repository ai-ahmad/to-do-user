// style 
import "./UserList.css"


const UserList = ({Users , deliUser}) => {

  return (
    <div className="userList">
        <div className="userList-container container">

            {Users.map((user) => {
                return(
                    <div className="card" key={user.id}>
                        <div className="card-inner">
                            <img src={user.image} alt="user" />
                            <h3>{user.firstName}  {user.lastName} {user.age} Age </h3>
                            <p>From: {user.from}</p>
                            <p>Job: {user.job}</p>
                            <p>Gender: {user.gender}</p>
                            <button onClick={() => deliUser(user.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default UserList