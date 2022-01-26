const ToDOInputs = ({type, id, value, func }) => {
    return ( 
        <div className="input-card">
            <span className="input-header">
                  {id}
            </span>
            <br/>
            <input type={type} id={id} className="input-field" placeholder={id} onChange={func} value={value} />
        </div>
     );
}
 
export default ToDOInputs;