import axios from '../nqn-apis/nqn-2210900048'
import React, { useState } from 'react'

export default function NqnFormTableName({renderNqnTableName}) {
    const [nqnId,setNqnId] = useState(renderNqnTableName.nqnId)
    const [nqnTbName,setNqnTbName] = useState(renderNqnTableName.nqnTbName)
    const [nqnTbEmail,setNqnTbEmail] = useState(renderNqnTableName.nqnTbEmail)
    const [nqnTbPhone,setNqnTbPhone] = useState(renderNqnTableName.nqnTbPhone)
    const [nqnTbStatus,setNqnTbStatus] = useState(renderNqnTableName.nqnTbStatus)
    
    const nqnHandleSumbit = (nqnEvent)=>{
        nqnEvent.preventDefault();
        const nqnObjTableName = {
            "nqnTbName": nqnTbName,
            "nqnTbEmail": nqnTbEmail,
            "nqnTbPhone": nqnTbPhone,
            "nqnTbStatus": nqnTbStatus,
            "nqnId": nqnId
        }
        console.log(nqnObjTableName)
        // thêm vao dự liệu trong api
        await axios.post("nqnTableName, nqnObjTableName")
    }
    return (
    <div>
        <h2> Form xử lý dữ liệu thêm mới</h2>
        <form>
        <div class="input-group mb-3">
            <span className="input-group-text" id="nqnId">nqnId</span>
            <input type="text" className="form-control" placeholder="nqnId" 
                name='nqnId'
                value={nqnId}
                onChange={(nqnEv)=>setNqnId(nqnEv.target.value)}
                aria-label="nqnId" 
                aria-describedby="nqnId"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="nqnTbName">nqnTbName</span>
            <input type="text" className="form-control" placeholder="nqnTbName" 
                name='nqnTbName'
                value={nqnTbName}
                onChange={(nqnEv)=>setNqnTbName(nqnEv.target.value)}
                aria-label="nqnTbName" 
                aria-describedby="nqnTbName"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="nqnTbEmail">nqnTbEmail</span>
            <input type="text" className="form-control" placeholder="nqnTbEmail" 
                name='nqnTbEmail'
                value={nqnTbEmail}
                onChange={(nqnEv)=>setNqnTbEmail(nqnEv.target.value)}
                aria-label="nqnTbEmail" 
                aria-describedby="nqnTbEmail"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="nqnTbPhone">nqnTbPhone</span>
            <input type="text" className="form-control" placeholder="nqnTbPhone" 
                name='nqnTbPhone'
                value={nqnTbPhone}
                onChange={(nqnEv)=>setNqnTbPhone(nqnEv.target.value)}
                aria-label="nqnTbPhone" 
                aria-describedby="nqnTbPhone"/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="nqnTbStatus">nqnTbStatus</span>
            <select name='nqnTbStatus' id='nqnTbStatus' className='form-control'
                name='nqnTbStatus'
                value={nqnTbStatus}
                >
                onChange={(nqnEv)=>setNqnTbPhone(nqnEv.target.value)}
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary m-3' name='btnNqnSave'>nqn: Save</button>
        </form>
    </div>
  )
}
