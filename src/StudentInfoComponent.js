import React from 'react';
class StudentInfoComponent extends React.Component{
    constructor(props){
        super(props);
        this.liststudents =props.liststudents;
    }
    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.liststudents.map((student,index)=>
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>)}
                </tbody>
            </table>
        )
    }
}
export default StudentInfoComponent;