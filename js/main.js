jQuery(document).ready(function( $ ) {

  // Smooth 
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        
       
 
        
        $("html, body").animate({ scrollTop: 0 }, "slow", function(){
          window.location.reload();
      
        }, 1500, 'easeInOutExpo');
      }
    }
 
  
  });


  


  // JavaScript 
  var doughnutData = [{
      value: 70,
      color: "#1abc9c"
   
  
    
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap 
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // java Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // linux Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
    
  
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("linux").getContext("2d")).Doughnut(doughnutData);





});
