/*
1. HTTP ( Hypertext Transfer Protocol) 란?
	어떻게 Hypertext를 주고 받을지 규약한 프로토콜로
	클라이언트가 서버에 데이터를 request(요청)을 하고,
	서버가 해당 request에 따라 response(응답)을 클라이언트에 보내주는 방식입니다.
	Hypertext는 웹사이트에서 이용되는 하이퍼 링크나 리소스, 문서, 이미지 등을 모두 포함합니다.

2. AJAX ( Asynchronous JavaScript And XML) 이란?
	웹페이지에서 비동기 방식으로 서버에게 데이터를 request하고,
	서버의 response를 받아 동적으로 웹페이지를 갱신하는 프로그래밍 방식입니다.
	즉, 웹 페이지 전체를 다시 로딩하지 않고도 일부분만을 갱신 할 수 있습니다.
	대표적으로 XMLHttpRequest 방식과 Fetch Api 방식이 있습니다.

3. JSON ( JavaScript Object Notation ) 이란?
	JavaSctipt의 Object에 큰 영감을 받아 만들어진 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷입니다.
	장점은 다음과 같습니다.
		- 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷
		- 가벼운 텍스트를 기반
		- 가독성이 좋음
		- Key와 Value가 짝을 이루고 있음
		- 데이터를 서버와 주고 받을 때 직렬화(Serialization)[*1 참조]하기 위해 사용
		- 프로그래밍 언어나 플랫폼에 상관없이 사용 가능

	JSON.stringify( obj ) : Object를 JSON 포맷의 String으로 변환(Serializing)해주는 메소드
	JSON.parse( json ) : JSON 포맷의 String을 Object로 변환(Deserializing)해주는 메소드

// XML
<xml>
	<data>
		<id>56</id>
		<name>홍길동</name>
	</data>
</xml>

// json
{
	data: {
		id: 56
		,name: '홍길동'
	}
}
https://picsum.photos/
*/

// const MY_URL = "https://picsum.photos/v2/list?page=2&limit=5";
const BTN_API = document.querySelector('#btn-api'); // 버튼 객체 가져옴
BTN_API.addEventListener('click', my_fetch);


function my_fetch() {
	const INPUT_URL = document.querySelector('#input-url');

	fetch(INPUT_URL.value.trim())
	.then( response => {
		if( response.status >= 200 && response.status < 300) {
			return response.json();
		} else {
			throw new Error('에러');
		}
	})
	.then ( data => makeImg(data) )
	.catch( error => console.log(error));
}


function makeImg(data) {
	data.forEach( item => {
		const NEW_IMG = document.createElement('img');
		const DIV_IMG = document.querySelector('#div-img');

		NEW_IMG.setAttribute('src',item.download_url);
		NEW_IMG.style.width = '200px';
		NEW_IMG.style.height = '200px';
		DIV_IMG.appendChild(NEW_IMG);
	});
}

// 내가 한 방법

const DEL_BTN = document.getElementById("del-btn");
DEL_BTN.addEventListener('click',apiDelete);

function apiDelete(){
	const DIV_IMG = document.querySelector('#div-img');
	const DEL_API = DIV_IMG.querySelectorAll('img');
	DEL_API.forEach(DEL_API => {
		DEL_API.remove();
	});
}


const BTN_CLEAR = document.querySelector('#btn-clear');
BTN_CLEAR.addEventListener("click",imgClear);

function imgClear() {

	// 방법 1
	// const DIV_IMG = document.querySelectorAll('img');

	// for(let i = 0; i < DIV_IMG.length; i++) {
	// 	DIV_IMG[i].remove(); // 해당요소 삭제
	// }

	// 방법 2 : 재 호출이 안됨
	// const DIV_IMG = document.querySelector('#div-img');
	// DIV_IMG.remove();

	// 방법 3 : replacdChildren - 자식만 삭제 
	// const DIV_IMG = document.querySelector('#div-img');
	// DIV_IMG.replaceChildren();

	// 방법 4 
	const DIV_IMG = document.querySelector('#div-img');
	DIV_IMG.innerHTML = "";


}


 // fetch 2nd 아규먼트 셋팅

//  function  infinityLoop () {
// 	let apiUrl = "http://112.222.157.156:6001/03_insert.php"
// 	let init = {
// 		method: "POST"

// 		,body: {
// 			title: "아아"
// 			,content: "에에"
// 			,em_id: "2"
// 		}
		
// 	};

// 	fetch(apiUrl,init)
// 	.then( response => console.log(response) )
// 	.catch( error => console.log(error));
//  }
