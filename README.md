Request API [![Deps](https://david-dm.org/FGRibreau/request-api.png)](https://david-dm.org/FGRibreau/request-api) [![Version](http://badge.fury.io/js/request-api.png)](https://david-dm.org/FGRibreau/request-api)
===========

NodeJS request library as HTTP API.

Disclamer: **use it at your own risk, don't expose request-api publicly**.

# npm

```shell
npm install -g request-api
```

# usage

request-api only handle

```
PORT=8080 request-api
curl -XPOST --data '{"url":"http://api.randomuser.me/", "method":"POST"}' 127.0.0.1:8080/request --header "Content-Type:application/json"

{"results":[{"user":{"gender":"male","name":{"title":"mr","first":"benjamin","last":"hart"},"location":{"street":"5878 e north st","city":"shelby","state":"kentucky","zip":"52106"},"email":"benjamin.hart56@example.com","username":"heavyduck707","password":"benton","salt":"9gwJniMD","md5":"164db2866e7ba72e9565f823b436b937","sha1":"061eeba1b67a045db2775d7b6e6a490d94773401","sha256":"5815a1c202ea788ece71bb357548bbfd14bbeab9b89c85000bd7b6ad2e0f8808","registered":"1293406850","dob":"493419028","phone":"(151)-438-3143","cell":"(293)-761-3530","SSN":"374-91-9052","picture":{"large":"http://api.randomuser.me/portraits/men/54.jpg","medium":"http://api.randomuser.me/portraits/med/men/54.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/54.jpg"},"version":"0.4.1"},"seed":"8544253f9c754659"}]}
```

# but why ?

Because.

<p align="center">
<img style="width:100%" src="./docs/gif.gif"/>
</p>
