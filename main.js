$(document).on('ready', function() {

// variables that may or may not be in use::::::::::
   var goodX = 'Cannabis';
   var goodY = '4Runner';

   var wayne = 'Wayne';
   var garth = 'Garth';

   var wayneX = 8;
   var wayneY = 4;

   var garthX = 2;
   var garthY = 1;

   var compAdvWayneX=false;
   var compAdvWayneY=false;

   var compAdvGarthX=false;
   var compAdvGarthY=false;

   var wayneUpper=0;
   var wayneLower=0;

   var garthUpper=0;
   var garthlower=0;

   var postTradeTotalX=0;
   var postTradeTotalY=0;

   // var wayneAutarkyy = 'Wayne consumes ' + wayneX/2 + ' units of ' + goodX + ' and '+ wayneY/2 + ' of '+ goodY;
   // var garthAutarky = 'Garth consumes ' + garthX/2 + ' units of ' + goodX + ' and '+ garthY/2 + ' of '+ goodY;

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

      var printOut = 'The total amount of '+goodX+' in existence before trade was '+(wayneX/2+garthX/2)+' units. After trade and specialization there is ' + postTradeTotalX +' in existence.';
      return printOut;
   };

   console.log(compareTotals());

   // Terms of Trade:::::
   var termsOfTrade = function(){
      if(compAdvWayneX){
         wayneUpper = wayneX/wayneY;
         wayneLower = 
         var printOut = d;
      }
   };
   console.log(termsOfTrade());
});