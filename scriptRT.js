            var startTime;
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var color = ["green","red","blue","black","pink"];
            var end;
            var total;

            
            function drawRect() {
            var color=["green","red","blue","black","pink"];
            var squareSide = Math.floor(Math.random()*100+100);
            //var canvas = document.getElementById("myCanvas");
            //var ctx = canvas.getContext("2d");
            ctx.fillStyle = color[Math.floor(Math.random()*4)];
            ctx.fillRect(Math.floor(Math.random()*300),Math.floor(Math.random()*300),squareSide,squareSide);

              
            }
            function drawCirc(){
            var color = ["green","red","blue","black","yellow"];
            //var canvas = document.getElementById("myCanvas");
            //var ctx = canvas.getContext("2d");
            ctx.fillStyle = color[Math.floor(Math.random()*4)];
            ctx.beginPath();
            ctx.arc(Math.floor(Math.random()*400), Math.floor(Math.random()*400), Math.floor(Math.random()*150+100), 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            
            }
      

            
            function makeShapeAppear() {
                startTime= new Date().getTime();
                var c = Math.random();    
                if (c > 0.5) {
                drawRect();
                    
                    
                } else {
                drawCirc();
                 
                }
                
            
            }
            
            function appearAfterDelay(){

                setTimeout(makeShapeAppear, Math.random() * 2000+2000);
                
            }

            
            function clear(){
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            end = new Date().getTime();
            total = end-startTime;
            total /=1000;
            }
            

            
            function start() {
            makeShapeAppear();
            

            document.getElementById("myCanvas").onclick = function(){
              clear();
             
              document.getElementById("timeTaken").innerHTML = total + "s.";
              
              appearAfterDelay();
            
              
            };
              
            
            }
            start();
            
            

            
            
            
            
            
