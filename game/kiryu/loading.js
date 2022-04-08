//読み込み完了
window.addEventListener('load', function () {
	//中身を表示
	document.getElementById('bg').style.display = 'block';
	//ローディング画面消し
	var loading=document.getElementById('loading');
	loading.classList.add("show");
	loading.classList.remove("hide");
	//setTimeout(SetHide,1100);
	setTimeout(SetHide,50);
		
	//alert(document.getElementById('loading').classList);
	function SetHide(){
		loading=document.getElementById('is-loading');
		loading.classList.add("hide");
		//setTimeout(SetNone,1000);
		setTimeout(SetNone,50);
	}
	function SetNone(){
		document.getElementById('is-loading').style.display="none";
	}
});