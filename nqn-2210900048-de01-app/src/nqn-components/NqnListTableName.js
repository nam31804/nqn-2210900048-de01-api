import React from 'react'

export default function NqnListTableName({renderNqnListTableName, onNqnDelete}) {
    console.log("list:",renderNqnListTableName);
    // hiển thị dữ liệu
    const nqnElementTableName = renderNqnListTableName.map((nqnItem,nqnIndex)=>{
        return(
            <tr key={nqnIndex}>
                <td>{nqnItem.nqnId}</td>
                <td>{nqnItem.nqnTbName}</td>
                 <td>{nqnItem.nqnTbEmail}</td>
                <td>{nqnItem.nqnTbPhone}</td>
                <td>{nqnItem.nqnTbStatus?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success mr-2'>nqn-edit</button>
                    <button className='btn btn-danger'
                    onClick={(ev)=>nqnHandleDelete(nqnItem,nqnIndex)}>nqn-delete</button>

                </td>
            </tr>
        );
    })
    // sự kiên xóa
    const nqnHandleDelete = (nqnId)=>{
        if(window.confirm('Bạn có muốn xóa dữ liệu có nqnId=' + nqnId)){
            onNqnDelete(nqnId)
        }
        
    }
  return (
    <div>
        <h2>Danh sách thông tin...</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>nqnId</th>
                    <th>nqnTbName</th>
                    <th>nqnTbEmail</th>
                    <th>nqnTbPhone</th>
                    <th>nqnTbStatus</th>
                    <th>nqn: chức năng</th>
                    
                </tr>
            </thead>
            <tbody>
                {nqnElementTableName}
            </tbody>
        </table>
    </div>
  )
}
