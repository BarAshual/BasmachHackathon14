app.controller('luzCtrl', function($scope) {
    $scope.DizingofCurrCount1 = 0;
    $scope.DizingofCurrCount2 = 0;
     $scope.DizingofCurrCount3 = 0;
     $scope.DizingofCurrCount4 = 0;
     $scope.DizingofCurrCount5 = 0;
    
    
    $scope.EvenCurrCount1 = 0;
     $scope.EvenCurrCount2 = 0;
     $scope.EvenCurrCount3 = 0;
     $scope.EvenCurrCount4 = 0;
     $scope.EvenCurrCount5 = 0;
    
    
    $scope.CharCurrCount1 = 0;
     $scope.CharCurrCount2 = 0;
     $scope.CharCurrCount3 = 0;
     $scope.CharCurrCount4 = 0;
     $scope.CharCurrCount5 = 0;
    
    
    $scope.KikarCurrCount1 = 0;
     $scope.KikarCurrCount2 = 0;
     $scope.KikarCurrCount3 = 0;
     $scope.KikarCurrCount4 = 0;
     $scope.KikarCurrCount5 = 0;
    
    
    $scope.UCurrCount1 = 0;
    $scope.UCurrCount2 = 0;
    $scope.UCurrCount3 = 0;
    $scope.UCurrCount4 = 0;
    $scope.UCurrCount5 = 0;
    
    $scope.DizingofMax = 30;
    $scope.EvenMax = 20;
    $scope.CharMax = 20;
    $scope.KikarMax = 25;
    $scope.UMax = 30;
    
    $scope.addDizingof = function(DizingofCurrCount){
        if(DizingofCurrCount + 1 < $scope.DizingofMax){
        
            switch(DizingofCurrCount) {
                case $scope.DizingofCurrCount1:
                    $scope.DizingofCurrCount1++;
                    alert("Success!!"); 
                    break;
                    
                case $scope.DizingofCurrCount2:
                    $scope.DizingofCurrCount2++;
                   alert("Success!!"); 
                    break;
                    
                case $scope.DizingofCurrCount3:
                    $scope.DizingofCurrCount3++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.DizingofCurrCount4:
                    $scope.DizingofCurrCount4++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.DizingofCurrCount5:
                    $scope.DizingofCurrCount5++;
                   alert("Success!!"); 
                    break;
            }
            
            
           
              
        } 
        else 
            {
                alert("error");
            }
    };
    
     $scope.addChar = function(CharCurrCount){
        if(CharCurrCount + 1< $scope.CharMax){
              
            switch(CharCurrCount) {
                case $scope.CharCurrCount1:
                    $scope.CharCurrCount1++;
                    alert("Success!!"); 
                    break;
                    
                case $scope.CharCurrCount2:
                    $scope.CharCurrCount2++;
                   alert("Success!!"); 
                    break;
                    
                case $scope.CharCurrCount3:
                    $scope.CharCurrCount3++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.CharCurrCount4:
                    $scope.CharCurrCount4++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.CharCurrCount5:
                    $scope.CharCurrCount5++;
                   alert("Success!!"); 
                    break;
            }
        } 
        else 
            {
                alert("error");
            }
    };
    
     $scope.addEven = function(EvenCurrCount){
        if(EvenCurrCount + 1 < $scope.CharMax){
               
            switch(EvenCurrCount) {
                case $scope.EvenCurrCount1:
                    $scope.EvenCurrCount1++;
                    alert("Success!!"); 
                    break;
                    
                case $scope.EvenCurrCount2:
                    $scope.EvenCurrCount2++;
                   alert("Success!!"); 
                    break;
                    
                case $scope.EvenCurrCount3:
                    $scope.EvenCurrCount3++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.EvenCurrCount4:
                    $scope.EvenCurrCount4++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.EvenCurrCount5:
                    $scope.EvenCurrCount5++;
                   alert("Success!!"); 
                    break;
            }
        } 
        else 
            {
                alert("error");
            }
    };
     $scope.addKikar = function(addKikar){
        if(addKikar + 1 < $scope.KikarMax){
           
            switch(addKikar) {
                case $scope.KikarCurrCount1:
                    $scope.KikarCurrCount1++;
                    alert("Success!!"); 
                    break;
                    
                case $scope.KikarCurrCount2:
                    $scope.KikarCurrCount2++;
                   alert("Success!!"); 
                    break;
                    
                case $scope.KikarCurrCount3:
                    $scope.KikarCurrCount3++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.KikarCurrCount4:
                    $scope.KikarCurrCount4++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.KikarCurrCount5:
                    $scope.KikarCurrCount5++;
                   alert("Success!!"); 
                    break;
            }
        } 
        else 
            {
                alert("error");
            }
    };
    
     $scope.addU = function(addU){
        if(addU + 1 < $scope.UMax){
            
            switch(addU) {
                case $scope.UCurrCount1:
                    $scope.UCurrCount1++;
                    alert("Success!!"); 
                    break;
                    
                case $scope.UCurrCount2:
                    $scope.UCurrCount2++;
                   alert("Success!!"); 
                    break;
                    
                case $scope.UCurrCount3:
                    $scope.UCurrCount3++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.UCurrCount4:
                    $scope.UCurrCount4++;
                   alert("Success!!"); 
                    break;
                    
                    case $scope.UCurrCount5:
                    $scope.UCurrCount5++;
                   alert("Success!!"); 
                    break;
            }
        } 
        else 
            {
                alert("error");
            }
    };
});