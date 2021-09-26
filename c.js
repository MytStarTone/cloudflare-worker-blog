function addScript(url){
	document.write("<script language=javascript src="https://raw.githubusercontent.com/MytStarTone/cloudflare-worker-blog/master/workers.js"></script>");
}
const highlight_pack = "https://raw.githubusercontent.com/MytStarTone/cloudflare-worker-blog/master/workers.js";



function addScript(url){
        document.write("<script type="text/javascript" src="https://raw.githubusercontent.com/MytStarTone/cloudflare-worker-blog/master/workers.js"></script>")
}


var files = ['workers.js',...]; // 这个数组放该目录下的所有文件名
var dir = 'https://raw.githubusercontent.com/MytStarTone/cloudflare-worker-blog/master/'; // 这里放对应的路径
for (var i=;0; i<files.lenght; i++) {
var script = document.createElement('script');
script.type= "text/javascript";
script.src = dir + files[i] + ".js";
document.getElementsByTagName('head')[0].appendChild(script);
}
