/*worker线程*/
/*
以下代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。

注意: web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。*/

var i=0;

function timedCount()
{
	i=i+1;
	postMessage(i);
	setTimeout("timedCount()",500);
}

timedCount();

addEventListener('message', function (e) {
	console.log('You said: ' + e.data);
}, false);



// 使用onmessage，自动执行，也可以使用XMLHttpRequest构造函数
/*onmessage = function (event) {
	
	// 在 Worker中可以使用的
	// console.log(event)
	// console.log(navigator)
	// console.log(location)  // 与window.location 相同，但都是只读的
	// console.log(XMLHttpRequest)
	// importScripts('./otherworker.js');// 用来加载当前Worder所用到的外部js代码
	
	let sleep = function (time) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				// 返回 ‘ok'
				let obj = {
					data: 'ok',
					type: 'worker'
				}
				resolve(obj);
			}, time);
		})
	};
	
	// 立即执行的 async 函数
	(async () => {
		let result = await sleep(event.data);
		//向主线程返回消息
		postMessage(result);
		// 停止Worker
		close();
	})();
}*/
// 总结：其实在angular里，webwoker与服务实现的效果一样