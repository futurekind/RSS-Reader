<?php
class FeedbinApiProxy {
	var $urlSubscription = "https://api.feedbin.me/v2/subscriptions.json";

	function getSubscriptions(){
		$result['data'] = $this->curl($this->urlSubscription);
		return $this->renderJSON($result);
	}

	private function curl($url, $options = null){
		$ch = curl_init($url);

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

		$result = curl_exec($ch);

		$info = curl_getinfo($ch);

		curl_close($ch);

		if($info['http_code'] != '200'){
			$result = $info;
		}

		return $result;
	}

	private function renderJSON($data) {
		header('Content-Type: application/json');
		echo json_encode($data);
	}

}

$proxy = new FeedbinApiProxy();
$proxy->$_GET['method']();

?>