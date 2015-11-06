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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsiYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgdmFyIGNvbnRhaW5lcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtb25lXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIFwiY2FyZC13cmFwcGVyXCIgKVswXTs7XG4gIHZhciBmaXJzdENvbCA9IFNvcnRhYmxlLmNyZWF0ZShjb250YWluZXIxLCB7XG4gICAgYW5pbWF0aW9uOiAyMDAsXG4gICAgZHJhZ2dhYmxlOiBcIi5jYXJkLW91dGVyXCIsXG4gICAgY2hvc2VuQ2xhc3M6IFwiY2hvc2VuXCIsXG4gICAgZ2hvc3RDbGFzczogXCJnaG9zdFwiLFxuICAgIGdyb3VwOiB7XG4gICAgICBuYW1lOiAnbGlzdC1vbmUnLFxuICAgICAgcHVsbDogdHJ1ZSxcbiAgICAgIHB1dDogWydsaXN0LXR3bycsJ2xpc3QtdGhyZWUnXVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGNvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdHdvXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIFwiY2FyZC13cmFwcGVyXCIgKVswXTs7XG4gIFNvcnRhYmxlLmNyZWF0ZShjb250YWluZXIyLCB7XG4gICAgYW5pbWF0aW9uOiAyMDAsXG4gICAgZHJhZ2dhYmxlOiBcIi5jYXJkLW91dGVyXCIsXG4gICAgY2hvc2VuQ2xhc3M6IFwiY2hvc2VuXCIsXG4gICAgZ2hvc3RDbGFzczogXCJnaG9zdFwiLFxuICAgIGdyb3VwOiB7XG4gICAgICBuYW1lOiAnbGlzdC10d28nLFxuICAgICAgcHVsbDogdHJ1ZSxcbiAgICAgIHB1dDogWydsaXN0LW9uZScsJ2xpc3QtdGhyZWUnXVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGNvbnRhaW5lcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGhyZWVcIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggXCJjYXJkLXdyYXBwZXJcIiApWzBdOztcbiAgU29ydGFibGUuY3JlYXRlKGNvbnRhaW5lcjMsIHtcbiAgICBhbmltYXRpb246IDIwMCxcbiAgICBkcmFnZ2FibGU6IFwiLmNhcmQtb3V0ZXJcIixcbiAgICBjaG9zZW5DbGFzczogXCJjaG9zZW5cIixcbiAgICBnaG9zdENsYXNzOiBcImdob3N0XCIsXG4gICAgZ3JvdXA6IHtcbiAgICAgIG5hbWU6ICdsaXN0LXRocmVlJyxcbiAgICAgIHB1bGw6IHRydWUsXG4gICAgICBwdXQ6IFsnbGlzdC1vbmUnLCdsaXN0LXR3byddXG4gICAgfVxuICB9KTtcblxuICAkKCcuYWRkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgXHQkKCdib2R5JykuYWRkQ2xhc3MoXCJuZXctY2FyZFwiKVxuICAgICQoJyNjYXJkLXRleHQnKS5mb2N1cygpO1xuICB9KTtcblxuICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgaWYoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25ldy1jYXJkJyk7XG4gICAgfTtcbiAgfSlcblxuICAkKGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpXG4gIHtcbiAgICAgIHZhciBjb250YWluZXIgPSAkKFwiLm5ldy1jYXJkLXdyYXBwZXJcIik7XG5cbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ25ldy1jYXJkJykpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpIC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBjb250YWluZXIuLi5cbiAgICAgICAgICAgICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgLy8gLi4uIG5vciBhIGRlc2NlbmRhbnQgb2YgdGhlIGNvbnRhaW5lclxuICAgICAgICB7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25ldy1jYXJkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfSk7XG5cbiAgJCgnI25ldy1jYXJkJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdGV4dCA9ICQoJyNjYXJkLXRleHQnKS52YWwoKTtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc05hbWUgPSBcImNhcmQtb3V0ZXJcIjtcbiAgICBlbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNhcmRcIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPicgKyB0ZXh0ICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJtZW51XCI+PGRpdiBjbGFzcz1cImNvbG91ci1tZW51XCI+PGEgY2xhc3M9XCJjb2xvdXItYnRuXCI+PGkgY2xhc3M9XCJmYSBmYS1wYWludC1icnVzaFwiPjwvaT48L2E+PHVsIGNsYXNzPVwiY29sb3Vyc1wiPjxsaSBjbGFzcz1cImdyZWVuXCI+PGEgaHJlZj1cIiNcIiBpZD1cImdyZWVuLWNhcmRcIj48L2E+PC9saT48bGkgY2xhc3M9XCJibHVlXCI+PGEgaHJlZj1cIiNcIiBpZD1cImJsdWUtY2FyZFwiPjwvYT48L2xpPjxsaSBjbGFzcz1cInllbGxvd1wiPjxhIGhyZWY9XCIjXCIgaWQ9XCJ5ZWxsb3ctY2FyZFwiPjwvYT48L2xpPjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+JztcbiAgICBmaXJzdENvbC5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduZXctY2FyZCcpO1xuICAgICQoJyNjYXJkLXRleHQnKS52YWwoJycpO1xuICB9KTtcblxuXG5cblxuICAvLyBDb2xvdXIgTWVudVxuXG4gICQoJy5jb2xvdXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIFx0JCgndWwuY29sb3VycycpLnRvZ2dsZUNsYXNzKFwib3BlblwiKVxuICAgICQoJ2EuY29sb3VyLWJ0bicpLnRvZ2dsZUNsYXNzKFwiaGlkZVwiKVxuICB9KTtcblxuICAkKCcjZ3JlZW4tY2FyZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyM4REQ3Q0EnKTtcbiAgfSk7XG5cbiAgJCgnI2JsdWUtY2FyZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyM4QkM2RDYnKTtcbiAgfSk7XG5cbiAgJCgnI3llbGxvdy1jYXJkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI0Y3RjdBMScpO1xuICB9KTtcblxuXG5cblxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=