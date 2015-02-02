$( document ).ready(function() {
	var prepareTime=10000;
	var doTime=45000;
	var restTime=15000;
	var setRestTime=60000;
   var buttonStart = document.querySelector('.btn,.btn-start');
   var buttonPause = document.querySelector('.btn,.btn-pause');
   var timer=document.querySelector('.timer-current span');
   var intervalId=null;
   var elapsedTime=0;
<<<<<<< HEAD
   
   buttonStart.addEventListener('click',startsuperset,false);

   function startsuperset(){

   countdown(prepareTime);
	

   }
   function countdown(time){
		var startTime = (new Date()).getTime()+time;
=======
   buttonStart.addEventListener('click',startSuperSet,false);
 
   function startSuperSet(){
   	var startTime = (new Date()).getTime()+prepareTime;
	var status='prepareTime';
	var counter=0;
>>>>>>> origin/master
			intervalId = setInterval(function() {
				var ticTime = (new Date()).getTime();
				elapsedTime = (startTime-ticTime);
				drawTime(elapsedTime);
				console.log(elapsedTime);
				if(elapsedTime<=0) {
<<<<<<< HEAD
				clearInterval(intervalId);
				intervalId=null;
=======
				document.getElementById('sound1').play();
				if(status==='prepareTime'||status==='restTime'&&counter!==3){
					startTime = (new Date()).getTime()+doTime;
					status='doTime';
					counter+=1;
				}else if(status==='doTime'&&counter!==3){
					startTime = (new Date()).getTime()+restTime;
					status='restTime';
				}else{
					startTime = (new Date()).getTime()+setRestTime;
					status='restTime';
					counter=0;
				}
>>>>>>> origin/master
				}
			}, 100);

   }

   function drawTime(elapsedTime) {
   			var sec_num = parseInt(elapsedTime, 10);
		   	var minutes = Math.floor(parseInt(elapsedTime / 60000)) % 60;
			if (minutes < 1) minutes = 0;
			sec_num = parseInt(elapsedTime - minutes * 60000);
			if (minutes < 10) minutes = '0' + minutes;
         	var seconds =  Math.floor(parseInt(elapsedTime / 1000)) % 60;
			if (seconds < 1) seconds = 0;
			sec_num = parseInt(elapsedTime - seconds * 1000);
			if (seconds < 10) seconds = '0' + seconds;
			var time = minutes + ':' + seconds;
			timer.innerHTML = time;
	}
});

