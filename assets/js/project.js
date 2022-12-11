{
  let addProject = $("#addProject");
  addProject.submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/addProject",
      data: addProject.serialize(),
    }).done((data) => {
      alert(data.message);
      $(":input", "#addProject").val("");
    });
  });
}
