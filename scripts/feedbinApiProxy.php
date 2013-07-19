<?php
class FeedbinApiProxy {
	var $urlSubscription = "https://api.feedbin.me/v2/subscriptions.json";
	var $urlUnreadFeeds = "https://api.feedbin.me/v2/entries.json?read=false";

	function getSubscriptions(){
		$result = $this->curl($this->urlSubscription);
		$this->renderJSON($result);
		// $this->debug($result);
	}

	function getUnreadFeeds(){
		$result = $this->curl($this->urlUnreadFeeds);
		$this->renderJSON($result);
	}

	private function curl($url, $options = null){
		$ch = curl_init($url);

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		if($_GET['userpass'] != ''){
			curl_setopt($ch, CURLOPT_USERPWD, $_GET['userpass']);
		}

		$result = curl_exec($ch);

		$info = curl_getinfo($ch);

		print_r( curl_error($ch));
		curl_close($ch);

		if($info['http_code'] != '200'){
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

$proxy = new FeedbinApiProxy();
$proxy->$_GET['method']();

?>