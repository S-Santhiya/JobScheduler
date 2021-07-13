import React from "react"

function Form()
{
    return(
        <form>
        <label> Account Name </label> <input type = "text" />  <br />    
        <label> Account Type </label> <input type = "text" />  <br />
        <label> Account Number </label> <input type = "text" /> <br />
        <label> Ext Id </label> <input type = "text" /> <br />
        <label> Subscription Id </label> <input type = "text" /> <br />
        <button> Save </button>
        <button> Cancel </button>
       </form>
    )
}
export default Form