/**
 * 
 */

//게임 기본 변수

var count = 0;
var onoffB = false;
var onoffP = false;
var onoffT = false;

//재료에 대한 변수

var water = 0;
var milk = 0;

var sugar = 0;
var salt = 0;

var cocoa = 0;
var vanilla = 0;

var greentea = 0;
var shot = 0;

	function ooB(){ //베이스탭 on off를 위한 함수
		
		if(onoffB==false){
			document.getElementById('base').removeAttribute('class');
			onoffB=true; 
			}
		else if(onoffB==true){
			document.getElementById('base').setAttribute('class','active');
			onoffB=false;
		}	
	}
	
	function ooP(){ //파우더 탭 on off를 위한 함수
		
		if(onoffP==false){
			document.getElementById('powder').removeAttribute('class');
			onoffP=true; 
			}
		else if(onoffP==true){
			document.getElementById('powder').setAttribute('class','active');
			onoffP=false;
		}	
	}
	
	function ooT(){ //티 탭 on off를 위한 함수
		
		if(onoffT==false){
			document.getElementById('tea').removeAttribute('class');
			onoffT=true; 
			}
		else if(onoffT==true){
			document.getElementById('tea').setAttribute('class','active');
			onoffT=false;
		}	
	}

//재료 효과음 함수

	function wtsound(){
		var wts = new Audio('sound/wtsound.mp3');
		wts.play();
		
	}
	function pwsound(){
		var pws = new Audio('sound/pwsound.mp3');
		pws.play();
		
	}
	
	function door(){
		var drsound = new Audio('sound/door.mp3');
		drsound.play();
		document.getElementById('stt').setAttribute('class','active');
		document.getElementById('btn').removeAttribute('class');
	}
	
//재료 첨가하는 함수들

 	function wt() {
		wtsound();
		document.getElementById('comen').innerText='물을 넣습니다.'
		water++;
		count++;
		console.log('water:'+water);
		console.log('count:'+count);
		res();
	}
	function mk() {
		wtsound();
		document.getElementById('comen').innerText='우유를 넣었습니다.'
		milk++;
		count++;
		console.log('milk:'+milk);
		console.log('count:'+count);
		res();
	}
	function sg() {
		pwsound();
		document.getElementById('comen').innerText='설탕 한 스푼을 넣었습니다.'
		sugar++;
		count++;
		console.log('sugar:'+sugar);
		console.log('count:'+count);
		res();
	}
	function st() {
		pwsound();
		document.getElementById('comen').innerText='소금...? 한 스푼을 넣었습니다.'
		salt++;
		count++;
		console.log('salt:'+salt);
		console.log('count:'+count);
		res();
	}
	function cc() {
		pwsound();
		document.getElementById('comen').innerText='코코아 한 스푼을 넣었습니다.'
		cocoa++;
		count++;
		console.log('cocoa:'+cocoa);
		console.log('count:'+count);
		res();
	}
	function vn() {
		pwsound();
		document.getElementById('comen').innerText='바닐라 한 스푼을 넣었습니다.'
		vanilla++;
		count++;
		console.log('vanilla:'+vanilla);
		console.log('count:'+count);
		res();
	}
	function gr() {
		pwsound();
		document.getElementById('comen').innerText='그린티 한 스푼을 넣었습니다.'
		greentea++;
		count++;
		console.log('greentea:'+greentea);
		console.log('count:'+count);
		res();
	}
	function cf() {
		wtsound();
		document.getElementById('comen').innerText='샷 추가를 합니다.'
		shot++;
		count++;
		console.log('shot:'+shot);
		console.log('count:'+count);
		res();
	}
	
	function reset(){
		count = 0;
		
		water = 0;
		milk = 0;

		sugar = 0;
		salt = 0;

		cocoa = 0;
		vanilla = 0;

		greentea = 0;
		shot = 0;
		
		document.getElementById('result').style.backgroundImage='url("img/cup.gif")';
		document.getElementById('rs').setAttribute('class','active');
		document.getElementById('btn').removeAttribute('class');
		document.getElementById('comen').innerText='';
		
	}
	
		
//결과를 위한 함수		
		
	function res() {
			if(count==1){
				document.getElementById('result').style.backgroundImage='url("img/cup1.gif")';
			}
			else if(count==2){
				document.getElementById('result').style.backgroundImage='url("img/cup2.gif")';
			}
			else if(count>=3){	
				document.getElementById('base').setAttribute('class','active');
				document.getElementById('powder').setAttribute('class','active');
				document.getElementById('tea').setAttribute('class','active');
				
				document.getElementById('result').style.backgroundImage='url("img/cup3.gif")';
				document.getElementById('comen').innerText='어떤 음료가 완성될지...'
				setTimeout(function delay(){
					document.getElementById('btn').setAttribute('class','active');
				if(salt >= 1){ //소금을 눌렀을 경우
				document.getElementById('comen').innerText='짠 음료가 완성되었네요. 이거 드실 분?'
				document.getElementById('result').style.backgroundImage='url("img/salty.gif")';
				}
				else if(vanilla==1 && milk==1 && shot==1){ //바닐라 라떼
				document.getElementById('comen').innerText='바닐라 라떼네요. 단걸 좋아하게 되는 마법의 커피'
				document.getElementById('result').style.backgroundImage='url("img/vanilla.gif")';
				}
				else if(water==3){
				document.getElementById('comen').innerText='물...이네요? 다음엔 더 재밌는 음료를 기대할게요.'
				document.getElementById('result').style.backgroundImage='url("img/water.gif")';
				}
				else if(milk==3){
				document.getElementById('comen').innerText='성장기이신가요?'
				document.getElementById('result').style.backgroundImage='url("img/milk.gif")';
				}
				else if(cocoa==0 && greentea==0 && vanilla==0){ //커피
						if(shot >= 1 && water >= 1 && milk ==0){
						document.getElementById('comen').innerText='아메리카노가 완성되었습니다. 아메리카노는 연해야죠.'
						document.getElementById('result').style.backgroundImage='url("img/americano.gif")';
					}
					else if(shot >= 1 && milk >=1){
						document.getElementById('comen').innerText='카페라떼가 완성되었습니다. 뚭띠 최애죠.'
						document.getElementById('result').style.backgroundImage='url("img/latte.gif")';
					}
				
				}
				else if(cocoa == 0 && vanilla == 0 && shot == 0){
					if(greentea>=1 && water>=1 && milk == 0){
					document.getElementById('comen').innerText='녹차가 완성되었습니다. 씁슬한 맛이 최고!'
					document.getElementById('result').style.backgroundImage='url("img/tea.gif")';
					}
					else {
					document.getElementById('comen').innerText='녹차라떼네요. 맛있죠, 특히 뚭띠네 녹차라떼는.'
					document.getElementById('result').style.backgroundImage='url("img/greenlatte.gif")';
					}
				
				}
				else if(cocoa>=1 && milk>=1 && vanilla == 0 && shot == 0){
				document.getElementById('comen').innerText='겨울밤에 어울리는 코코아입니다.맛있겠다.'
				document.getElementById('result').style.backgroundImage='url("img/cocoa.gif")';
				}
				else{
				document.getElementById('comen').innerText='이도저도 아닌 음료 완성입니다! 축하드려요!'
				document.getElementById('result').style.backgroundImage='url("img/idojudo.gif")';
			}
				document.getElementById('rs').removeAttribute('class');	
				},2000);
				
				
				
				
				
}			
}
	