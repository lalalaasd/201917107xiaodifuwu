function requestData(par1,par2,callback) {
    // 1.js原生Ajax处理、负责去到后台数据
    var xhr = new XMLHttpRequest();
    // 2.配置请求信息
    xhr.open(par1, "https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/"+par2);
    // 3.发送给后端
    xhr.send();
    // 4.后端返回处理后的数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //一切正常后、取得后台数据
            console.log(xhr.response);
            var res = JSON.parse(xhr.responseText);
            callback(res);
        }
    }
}