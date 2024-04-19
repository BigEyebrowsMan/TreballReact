function Formulari() {
    return(
      <div className="formInicial">
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label type="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/><br/>
            <button type="submit" value="Submit">Submit</button><br/>
        </form>
      </div>  
    )
}

export default Formulari;