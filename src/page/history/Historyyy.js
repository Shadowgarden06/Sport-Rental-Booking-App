import React from 'react';
import Header from '../../components/HeaderAndFooter/Header';
import Footer from '../../components/HeaderAndFooter/Footer';
import './Historyy.css'
import { Info } from '@mui/icons-material';

function Historyyy(props) {
  let { Infor, setInfor } = props
  console.log("data",Infor);
    return (
        <div>
             <Header></Header>
             <div className="col-md-6">
    <label htmlFor ="inputName" className="form-label customForm">Name: </label>
    <input type="text" className="form-control customForm" id="inputName" disabled  value={(Infor[Infor.length-1].fname ||"--") + (Infor[Infor.length-1].lname ||"--") }/>
  </div>
  <div className="col-md-6">
    <label for="inputAddess" className="form-label customForm">Address: </label>
    <input type="text" className="form-control customForm" id="inputAddess"disabled  value={(Infor[Infor.length-1].address ||"--")}/>
  </div>
  <div className="col-md-6">
    <label htmlFor ="inputMail" className="form-label customForm">Email: </label>
    <input type="text" className="form-control customForm" id="inputMail"disabled  value={(Infor[Infor.length-1].mail ||"--")}/>
  </div>
  <div className="col-md-6">
    <label for="inputNumber" className="form-label customForm">Number: </label>
    <input type="text" className="form-control customForm" id="inputNumber"disabled  value={0+(Infor[Infor.length-1].number )}/>
  </div>
  <div className="col-md-6">
    <label for="inputDate" className="form-label customForm">Signing Date:: </label>
    <input type="text" className="form-control customForm" id="inputDate"disabled value={(Infor[Infor.length-1].date)} />
  </div>
<Footer></Footer>
        </div>
    );
}

export default Historyyy;