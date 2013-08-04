<?php
class FeedbinApiProxy {
	var $urlSubscription = "https://api.feedbin.me/v2/subscriptions.json";
	var $urlUnreadFeeds = "https://api.feedbin.me/v2/entries.json?read=false";

	function setSessionParameter(){
		$error = 2;

		if(isset($_POST['username']) && $_POST['username'] != "" ){
			$_SESSION['zappscription']['username'] = $_POST['username'];
			$error--;
		}

		if(isset($_POST['password']) && $_POST['password'] != "" ){
			$_SESSION['zappscription']['password'] = $_POST['password'];
			$error--;
		}

		if($error === 0) {
			header('Content-Type: text/plain');
			echo "success";
		} else {
			header('Content-Type: text/plain');
			echo "error";
		}
	}

	function deleteSession(){
		unset($_SESSION['zappscription']);
	}

	function getSubscriptions(){
		$result = $this->curl($this->urlSubscription);
		$this->renderJSON($result);
	}

	function getUnreadFeeds(){
		$result = $this->curl($this->urlUnreadFeeds);
		$this->renderJSON($result);
	}

	private function curl($url, $options = null){
		$ch = curl_init($url);

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		if(isset($_SESSION['zappscription'])){
			$userpass = $_SESSION['zappscription']['username'] . ':' . $_SESSION['zappscription']['password'];
			curl_setopt($ch, CURLOPT_USERPWD, $userpass);
		}


		$result = curl_exec($ch);

		$info = curl_getinfo($ch);

		curl_close($ch);

		if($info['http_code'] == '401'){
			$result = json_encode($info);
		}


		return $result;
	}

	private function renderJSON($data) {
		header('Content-Type: application/json');
		echo $data;
	}

	private function debug($data) {
		echo '<pre>';
		print_r($data);
		echo '</pre>';
	}

}
session_start();
$proxy = new FeedbinApiProxy();
$proxy->$_REQUEST['method']();
// print_r($_SESSION);
?>