import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { logout } from "../features/userSlice"
import MaterialTable from "material-table";


function UserDetailsTable() {
    const [data, setdata] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:8080/api/user-details`)
        .then(res =>{
            console.log(res)
            setdata(res.data)
        }
        )
        
            return () => {
                
            }
        },[])

        const columns = [
            {
                title: "ID",
                field: "id",
              },
            {
              title: "Name",
              field: "name",
            },
            {
              title: "Age",
              field: "age",
            },
            {
              title: "Gender",
              field: "gender",
            },
            {
              title: "E-Mail",
              field: "email",
            },
            {
                title: "Phone Number",
                field: "phoneNo",
              },
          ];

        const dispatch = useDispatch();


        const handleLogout = (e) =>{
e.preventDefault();
dispatch(logout());
        }

    return (
        <div>
          <div className=" col row">
            <h1>Welcome Admin</h1>
            <button className="btn btn-primary" onClick={(e) => handleLogout(e)}>Logout</button>

            </div>
            <MaterialTable title="User Details (API Data)" data={data} columns={columns} />

        </div>
    )
}

export default UserDetailsTable
