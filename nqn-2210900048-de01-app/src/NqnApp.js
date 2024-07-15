import React, { useEffect, useState } from 'react'
import NqnListTableName from './nqn-components/NqnListTableName'
import axios from './nqn-apis/nqn-2210900048'
import NqnFormTableName from './nqn-components/NqnFormTableName'

export default function NqnApp() {
  // đọc dữ liệu từ api
  const [nqnListTableName, setNqnListTableName] = useState([])
  const nqnGetTableName = async ()=>{
    let nqnResp = await axios.get("nqnTableName");
    console.log("App List:",nqnResp.data);
    setNqnListTableName(nqnResp.data);
  }
  useEffect(()=>{
  nqnGetTableName();
},[])
// hàm xóa
const nqnHandleDelete= async (nqnId)=>{
 let nqnRes = await axios.get("nqnTableName/"+nqnId);
 nqnGetTableName();
}
const nqnObjTableName = {
    "nqnTbName": "Nguyễn Quang Nam",
    "nqnTbEmail": "nam31804@gmail.com",
    "nqnTbPhone": "0707431804",
    "nqnTbStatus": true,
    "nqnId": "2210900048"
};
const [nqnTableName,setNqnTableName] = useState(nqnObjTableName);
  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Nguyễn Quang Nam : 2210900048 </h1>
      <hr/>
      <NqnListTableName renderNqnListTableName={nqnListTableName} onNqnDelete={nqnHandleDelete}/>
      <hr/>
      <NqnFormTableName renderNqnTableName={nqnTableName}/>
    </div>
  )
}
