let role='admin';
            switch(role){
                case 'admin' :
                console.log('yu have complete rights');
                break;
                case "subadmin" :
                    console.log('yu have limited rights');

                case 'tester' :
                console.log('yu have check tasks');
                break;
                default:
                    console.log('you are guest'); 
                    break;
            }
            

            let age = 34;

            let minimumAge=age>=25;

            if(age>25){
                console.log('eligible for marriage');
            }else('not eligible');

            let time=25;
            if (time < 10) {
                greeting1 = "Good morning";
                console.log( greeting1);
              } else if (time < 20) {
                greeting2 = "Good day";
                console.log( greeting2);
              } else {
                greeting3 = "Good evening";
                console.log( greeting3);
              }
              let marks=50;
              if(marks>30){

                  console.log('student is pass');
              }

              let player ='bowler';
              switch(player){}

              case 'batsmen' :
                  console.log('you have to bat throught innings');
                  break;

                  case 'bowler':

                  console.log('you have to bowl throught innings');
                  break;
                  
                    