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
    
    $scope.addDizingof = function(DizingofCurrCountIndex){
        
            switch(DizingofCurrCountIndex) {
                case 1:
                    if($scope.DizingofCurrCount1 < $scope.DizingofMax){
                    $scope.DizingofCurrCount1++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    break;
                    
                case 2:
                     if($scope.DizingofCurrCount2 < $scope.DizingofMax){
                    $scope.DizingofCurrCount2++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    break;
                    
                case 3:
                     if($scope.DizingofCurrCount3 < $scope.DizingofMax){
                    $scope.DizingofCurrCount3++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    break;
                    
                    case 4:
                    if($scope.DizingofCurrCount4 < $scope.DizingofMax){
                    $scope.DizingofCurrCount4++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    break;
                    
                    case 5:
                     if($scope.DizingofCurrCount5 < $scope.DizingofMax){
                    $scope.DizingofCurrCount5++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    break;
            }
    };
    
     $scope.addChar = function(CharCurrCountIndex){
            switch(CharCurrCountIndex) {
                case 1:
                    if($scope.CharCurrCount1 < $scope.CharMax){
                        $scope.CharCurrCount1++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 2:
                    if($scope.CharCurrCount2 < $scope.CharMax){
                        $scope.CharCurrCount2++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 3:
                    if($scope.CharCurrCount3 < $scope.CharMax){
                        $scope.CharCurrCount3++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 4:
                    if($scope.CharCurrCount4 < $scope.CharMax){
                        $scope.CharCurrCount4++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 5:
                    if($scope.CharCurrCount5 < $scope.CharMax){
                        $scope.CharCurrCount5++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
            }
    };
    
     $scope.addEven = function(EvenCurrCountIndex){
            switch(EvenCurrCountIndex) {
                case 1:
                     if($scope.EvenCurrCount1 < $scope.EvenMax){
                        $scope.EvenCurrCount1++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 2:
                      if($scope.EvenCurrCount2 < $scope.EvenMax){
                        $scope.EvenCurrCount2++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 3:
                      if($scope.EvenCurrCount3 < $scope.EvenMax){
                        $scope.EvenCurrCount3++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 4:
                    if($scope.EvenCurrCount4 < $scope.EvenMax){
                        $scope.EvenCurrCount4++;
                alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 5:
                      if($scope.EvenCurrCount5 < $scope.EvenMax){
                        $scope.EvenCurrCount5++;
                 alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
            }
    };
     $scope.addKikar = function(KikarCurrCountIndex){
            switch(KikarCurrCountIndex) {
                case 1:
                       if($scope.KikarCurrCount1 < $scope.KikarMax){
                        $scope.KikarCurrCount1++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 2:
                       if($scope.KikarCurrCount2 < $scope.KikarMax){
                        $scope.KikarCurrCount2++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 3:
                        if($scope.KikarCurrCount3 < $scope.KikarMax){
                        $scope.KikarCurrCount3++;
                   alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 4:
                      if($scope.KikarCurrCount4 < $scope.KikarMax){
                        $scope.KikarCurrCount4++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 5:
                        if($scope.KikarCurrCount5 < $scope.KikarMax){
                        $scope.KikarCurrCount5++;
                    alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
            }
    };
    
     $scope.addU = function(UCurrCountIndex){
            switch(UCurrCountIndex) {
                case 1:
                     if($scope.UCurrCount1 < $scope.UMax){
                        $scope.UCurrCount1++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 2:
                        if($scope.UCurrCount2 < $scope.UMax){
                        $scope.UCurrCount2++;
                alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                case 3:
                       if($scope.UCurrCount3 < $scope.UMax){
                        $scope.UCurrCount3++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 4:
                        if($scope.UCurrCount4 < $scope.UMax){
                        $scope.UCurrCount4++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
                    
                    case 5:
                      if($scope.UCurrCount5 < $scope.UMax){
                        $scope.UCurrCount5++;
                  alertify.success("Success!!");
                    } else {
                      alertify.error("error!!");  
                    }
                    
                    break;
            }
    };
});