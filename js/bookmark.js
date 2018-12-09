var keyMap = [
    [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'
    ],
    [
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'
    ],
    [
        'z', 'x', 'c', 'v', 'b', 'n', 'm'
    ]
];

var hash = {
    'b': 'baidu.com',
    'q': 'qq.com',
    'z': 'zhihu.com',
    'j': 'jd.com',
    't': 'taobao.com',
    'g': 'google.com',
    'l': 'lol.qq.com',
    'c': 'csdn.com'
};
var result = JSON.parse(localStorage.getItem('localSave'));
if (result !== null) {
    hash = result
}
console.log(hash);
window.onload = function () {
    var i = 0;
    var mainDiv = document.getElementById('mainDiv');
    while (i < keyMap.length) {
        var childDiv = document.createElement('div');
        mainDiv.appendChild(childDiv);
        var j = 0;
        while (j < keyMap[i].length) {
            var childKbd = document.createElement('kbd');
            childKbd.textContent = keyMap[i][j];
            var childBtn = document.createElement("button");
            childBtn.id = keyMap[i][j];
            childBtn.textContent = 'Edit';
            childBtn.onclick = function (editClickEvent) {
                console.log(editClickEvent);
                var hashKey = editClickEvent['target']['id'];
                var result = prompt('请输入映射网址');
                console.log(result);
                if (result !== null) {
                    hash[hashKey] = result;
                }
                localStorage.setItem('localSave', JSON.stringify(hash));

            };
            childKbd.appendChild(childBtn);
            childDiv.appendChild(childKbd);
            j++;
        }
        i = i + 1;
    }

    document.onkeypress = function (keyPressEvent) {
        var keyValue = hash[keyPressEvent.key];
        console.log(keyValue);
        if (keyValue !== undefined) {
            window.open('https://' + keyValue, '_blank');
        }
    }
};

