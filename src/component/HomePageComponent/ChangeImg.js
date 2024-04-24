import React from 'react';

function ChangeImg({setCount,count}) {
    return (
        <div>
            <ul className='d-flex justify-content-center'>
    <li onClick={()=>setCount(0)} className={count===0 ? "btn btn-warning btn-lg ":"btn btn-info btn-lg"}></li>
    <li onClick={()=>setCount(1)} className={count===1 ? "btn btn-warning btn-lg":"btn btn-info btn-lg"}></li>
    <li onClick={()=>setCount(2)} className={count===2 ? "btn btn-warning btn-lg":"btn btn-info btn-lg"}></li>
    <li onClick={()=>setCount(3)} className={count===3 ? "btn btn-warning btn-lg":"btn btn-info btn-lg"}></li>
</ul>
<div class="text-center">
    <button type="button" class="btn btn-outline-info btn-lg justify-content-md-center mx-sm-3">Open court hour</button>
<button type="button" class="btn btn-outline-info btn-lg justify-content-md-center">Find open club</button>
</div>



        </div>
    );
}

export default ChangeImg;