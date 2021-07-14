import React from "react"

const save = () =>
{
 alert("Saved..");
}
const cancel = () =>
{
    alert("Cancel..");
}
function Form()
{
    return(
        <form>
        <label> Account Name </label> <input type = "text" />  <br />    
        <label> Account Type </label> <input type = "text" />  <br />
        <label> Account Number </label> <input type = "text" /> <br />
        <label> Ext Id </label> <input type = "text" /> <br />
        <label> Subscription Id </label> <input type = "text" /> <br />
        <button onClick = {save}> Save </button>
        <button onClick = {cancel}> Cancel </button>
       </form>
    )
}
export default Form