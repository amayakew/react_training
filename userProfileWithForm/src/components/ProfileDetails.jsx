export default function ProfileDetails({currentUserDetails}){
    const {firstName, lastName, age, gender} = currentUserDetails;
    return (
        <ul style={{listStyle: "none", textAlign: "left", padding: 0}}>
            <li><b>First Name: </b>{firstName}</li>
            <li><b>Second Name: </b>{lastName}</li>
            <li><b>Age: </b>{age}</li>
            <li><b>Gender: </b>{gender}</li>
        </ul>
    );
};