$(document).on('ready', function() {

// variables that may or may not be in use::::::::::
   var goodX = 'cannabis';
   var goodY = '4Runners';

   var wayne = 'Wayne';
   var garth = 'Garth';

   var wayneX = 8;
   var wayneY = 4;

   var garthX = 4;
   var garthY = 4;

   var compAdvWayneX=false;
   var compAdvWayneY=false;

   var compAdvGarthX=false;
   var compAdvGarthY=false;

   var wayneLeastAccepted=0;

   var garthLeastAccepted=0;

   var postTradeTotalX=0;
   var postTradeTotalY=0;


   // fill with sample values::::::::
   $('#sampleBtn').on('click', function(){
      // wayne='';
      // garth='';
      // wayneX='';
      // wayneY='';
      

      everything();
   });



   // USER INPUT::::::::::::
   
   
   $('#submit').on('click', function(event){
      event.preventDefault();
      wayne = $('#inputPerson1').val();
      garth = $('#inputPerson2').val();
      goodX = $('#inputGood1').val();
      goodY = $('#inputGood2').val();
      wayneX = $('#inputGood1Person1').val();
      wayneY = $('#inputGood2Person1').val();
      garthX = $('#inputGood1Person2').val();
      garthY = $('#inputGood2Person2').val();
      
      everything();
   });

   // var wayneAutarkyy = 'Wayne consumes ' + wayneX/2 + ' units of ' + goodX + ' and '+ wayneY/2 + ' of '+ goodY;
   // var garthAutarky = 'Garth consumes ' + garthX/2 + ' units of ' + goodX + ' and '+ garthY/2 + ' of '+ goodY;

   var everything = function(){
      var autarkyConsBundle = function(){
         var printOutWayne = wayne + ' consumes ' + wayneX/2 + ' units of ' + goodX + ' and '+ wayneY/2 + ' of '+ goodY+' before trade. ';
         var printOutGarth = garth + ' consumes ' + garthX/2 + ' units of ' + goodX + ' and '+ garthY/2 + ' of '+ goodY + ' before trade. ';
         return printOutWayne + printOutGarth;
      };

      console.log(autarkyConsBundle());

      var opportunityCost = function(){
         var printOutWayne = wayne+' must give up '+ wayneX/wayneY + ' units of ' + goodY + ' to produce a unit of ' + goodX+'. It follows that '+wayne+' must give up '+wayneY/wayneX+' units of '+ goodY + ' to produce another unit of ' + goodX;
         var printOutGarth = garth +' must give up '+ garthX/garthY + ' units of ' + goodY + ' to produce a unit of ' + goodX+'. It follows that '+garth+' must give up '+garthY/garthX+' units of '+ goodY + ' to produce another unit of ' + goodX;
         return printOutWayne + printOutGarth;
      };

      console.log(opportunityCost());

      // Calculate who has a comp adv in which good
      var comparativeAdv = function(){
         if(wayneX/wayneY === garthX/garthY){
            // case of equivalent ratios::::::::
            if(wayneX>wayneY && wayneX>garthX) {
               var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneX=true; 
               compAdvGarthY=true;
               return printOut;
            }
            else if(wayneY>wayneX && wayneY>garthY){
               var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneY=true;
               compAdvGarthX=true;
               return printOut;
            }
            else if(garthX>garthY && garthX>wayneX){
               var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneY=true;
               compAdvGarthX=true;
               return printOut;
            }
            else if(garthY>garthX && garthY>wayneY){
               var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneX=true; 
               compAdvGarthY=true;
               return printOut;
            }
         }
         else if (wayneX/wayneY > garthX/garthY){
            var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
            compAdvWayneX=true; 
            compAdvGarthY=true;
            return printOut;
         }
         else{
            var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
            compAdvWayneY=true;
            compAdvGarthX=true;
            return printOut;
         }
      };
      console.log(comparativeAdv());

      // compare Totals
      var compareTotals=function(){
         if(compAdvWayneX){
            postTradeTotalX= wayneX;
            postTradeTotalY= garthY;
         }
         else{
            postTradeTotalX=garthX;
            postTradeTotalY=wayneX;
         }

         var printOut = 'The total amount of '+goodX+' in existence before trade was '+(wayneX/2+garthX/2)+' units. After trade and specialization there are ' + postTradeTotalX +' in existence.';
         return printOut;
      };

      console.log(compareTotals());

      // Terms of Trade:::::
      var termsOfTrade = function(){
         if(compAdvWayneX){
            wayneLeastAccepted = wayneX/wayneY;
            garthLeastAccepted = garthY/garthX;
            var printOut = 'The least amount of '+goodY+' that '+wayne+' will accept for one unit of his/her '+goodX+' is '+wayneLeastAccepted+'. The least amount of '+goodX+' that '+garth+' will accept for one unit of his/her '+goodY+' is '+garthLeastAccepted+'.';
            return printOut;
         }
         else{
            wayneLeastAccepted = wayneY/wayneX;
            garthLeastAccepted = garthX/garthY;
            var printOut = 'The least amount of '+goodY+' that '+garth+' will accept for one unit of his/her '+goodX+' is '+garthLeastAccepted+'. The least amount of '+goodX+' that '+wayne+' will accept for one unit of his/her '+goodY+' is '+wayneLeastAccepted+'.';
            return printOut;
         }
      };
      console.log(termsOfTrade());


      // append sample case:::::::::::
      var introInfo = '<p>We live in a fictitious world with only two goods. They are ' +goodX+' and '+goodY+'. There are only two people; you, '+wayne+', and a potential trading partner, '+garth+'.';

      $('.sampleCase').prepend(introInfo);

      $('#goodX').append(goodX+' production per week if all time devoted to it');
      $('#goodY').append(goodY+' production per week if all time devoted to it');
      $('#person1').append('Person 1: '+wayne);
      $('#goodXperson1').append(wayneX);
      $('#goodXperson1opCost').append('1 unit of '+goodX+' for ' +wayneY/wayneX+' of '+goodY);
      $('#goodYperson1').append(wayneY);
      $('#goodYperson1opCost').append('1 unit of '+goodY+' for ' +wayneX/wayneY+' of '+goodX);

      $('#person2').append('Person 2: '+garth);
      $('#goodXperson2').append(garthX);
      $('#goodXperson2opCost').append('1 unit of '+goodX+' for ' +garthY/garthX+' of '+goodY);
      $('#goodYperson2').append(garthY);
      $('#goodYperson2opCost').append('1 unit of '+goodY+' for ' +garthX/garthY+' of '+goodX);

      
      // Table of Totals
      $('#goodXname').append(goodX);
      $('#goodYname').append(goodY);
      $('#totalXbefore').append(wayneX/2+garthX/2);
      $('#totalXafter').append(postTradeTotalX);
      $('#totalYbefore').append(wayneY/2+garthY/2);
      $('#totalYafter').append(postTradeTotalY);



   };
});