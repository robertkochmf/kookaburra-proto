$(document).ready(function(){

  var container1 = document.getElementById("list-one").getElementsByClassName( "card-wrapper" )[0];;
  var firstCol = Sortable.create(container1, {
    animation: 200,
    draggable: ".card-outer",
    chosenClass: "chosen",
    ghostClass: "ghost",
    group: {
      name: 'list-one',
      pull: true,
      put: ['list-two','list-three']
    }
  });

  var container2 = document.getElementById("list-two").getElementsByClassName( "card-wrapper" )[0];;
  Sortable.create(container2, {
    animation: 200,
    draggable: ".card-outer",
    chosenClass: "chosen",
    ghostClass: "ghost",
    group: {
      name: 'list-two',
      pull: true,
      put: ['list-one','list-three']
    }
  });

  var container3 = document.getElementById("list-three").getElementsByClassName( "card-wrapper" )[0];;
  Sortable.create(container3, {
    animation: 200,
    draggable: ".card-outer",
    chosenClass: "chosen",
    ghostClass: "ghost",
    group: {
      name: 'list-three',
      pull: true,
      put: ['list-one','list-two']
    }
  });

  $('.add-btn').on('click', function(event){
  	$('body').addClass("new-card")
    $('#card-text').focus();
  });

  $(document).keyup(function(e) {
    if(e.keyCode == 27) {
      $('body').removeClass('new-card');
    };
  })

  $(document).mousedown(function (e)
  {
      var container = $(".new-card-wrapper");

      if ($('body').hasClass('new-card')) {
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('body').removeClass('new-card');
        }
      }
  });

  $('#new-card').on('submit', function(e){
    e.preventDefault();
    var text = $('#card-text').val();
    var el = document.createElement('div');
    el.className = "card-outer";
    el.innerHTML = '<div class="card"><div class="content">' + text + '</div><div class="menu"><div class="colour-menu"><a class="colour-btn"><i class="fa fa-paint-brush"></i></a><ul class="colours"><li class="green"><a href="#" id="green-card"></a></li><li class="blue"><a href="#" id="blue-card"></a></li><li class="yellow"><a href="#" id="yellow-card"></a></li></ul></div></div></div>';
    firstCol.el.appendChild(el);
    $('body').removeClass('new-card');
    $('#card-text').val('');
  });




  // Colour Menu

  $('.colour-menu').on('click', function(){
  	$('ul.colours').toggleClass("open")
    $('a.colour-btn').toggleClass("hide")
  });

  $('#green-card').on('click', function(e){
    e.preventDefault();
  	$(this).closest('.card').css('background-color', '#8DD7CA');
  });

  $('#blue-card').on('click', function(e){
    e.preventDefault();
  	$(this).closest('.card').css('background-color', '#8BC6D6');
  });

  $('#yellow-card').on('click', function(e){
    e.preventDefault();
  	$(this).closest('.card').css('background-color', '#F7F7A1');
  });




});
