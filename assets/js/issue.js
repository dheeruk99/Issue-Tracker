{
         closeForm=()=>{
                $('#form').remove();
                createIssue.prop('disabled', false);
        }

    let createIssue = $("#createIssue");
    createIssue.click(function (e) {
      e.preventDefault();
        $('#issueForm').append(`
        <div id="form">
        <label for="Title">Title</label>
        <input type ="text" name="Title" placeholder="Title" required>

        <label for="Description">Description</label>
        <textarea name="Description" placeholder="Description" required></textarea>

        <label for="Author">Author</label>
        <input type ="text" name="Author" placeholder="Author" required>
        
        <label>Category</label>
        <div class="checkboxes">
                
                <div class="checkbox-container">
                        <div>
                                <label for="performanceBugs">Performance Bugs</label>
                                <input type="checkbox" name="Category" value="Performance Bugs">
                        </div>
                        

                        <div>
                                <label for="securityBugs">Security Bugs</label>
                                <input type="checkbox" name="Category" value="Security Bugs">
                        </div>
                       
                        <div>
                                <label for="UI">UI Improvement</label>
                                <input type="checkbox" name="Category" value="UI improvements">
                        </div>
                       
                        <div>
                                <label for="Enhancement">Enhancement</label>
                                <input type="checkbox" name="Category" value="Enhancement">
                        </div>
                       
                        <div>
                                <label for="Documentation">Documentation</label>
                                <input type="checkbox" name="Category" value="Documentation">
                        </div>

                        <div>
                                <label for="Other">Other</label>
                                <input type="checkbox" name="Category" value="Other">
                        </div>
                        
                </div>
               
        </div>

        <button id="addIssue" type="submit">Create Issue</button>
        <button id="close" onClick="closeForm()" >Close</button>
</div>
        `)
        createIssue.prop('disabled', true)
    }
    
    )



    let form = $("#issueForm");
    form.submit(function(e){
        e.preventDefault();
        $.ajax({
                type:"POST",
                url:"/addIssue",
                data:form.serialize(),
        }).done((data)=>{
                $('#form').remove();
                createIssue.prop('disabled', false);
                  $('#Issue-display').prepend(`
                  <div id=${data.data.issue._id}>
                  <div id="Issue" >
                  <p class="Issue-Title"><b>Title:</b> ${data.data.issue.Title}</p>
                  <p class="Issue-Author">Author: ${data.data.issue.Author}</p>
                  <p class="Issue-Description"><b>Description:</b> ${data.data.issue.Description}</p>
                  <div  class="Issue-Category">
                          <span>Category: </span>
                              <span>
                              ${data.data.issue.Category.map((value)=>`<span>${value}</span>`)}
                              </span> 
                  </div>
                  </div>
                  </div>
                  `)  

        })
    })


   
}
  