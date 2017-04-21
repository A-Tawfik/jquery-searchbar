function isInUser(val){
    return val.firstName.toLowerCase().includes($('#search').val().toLowerCase()) || val.lastName.toLowerCase().includes($('#search').val().toLowerCase()) || val.city.toLowerCase().includes($('#search').val().toLowerCase())
}


function updateField(e){
  $('.content').html('')
  var results = data.filter(isInUser)
  for (var i = 0; i < results.length; i++) {

    $('.content').append(`<li>${results[i].firstName}, ${results[i].lastName}, ${results[i].city}</li>`)

  }
}
