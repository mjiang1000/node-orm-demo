##nodejs orm 学习小计
折腾了一段时间php+mysql，累觉不爱！！！
api实现的太糙了，用php做后端，routes，model 和controller这一部分搞的hin难看，没有选对的工具，有点悲剧。换用nodejs实现，routes和controller没啥好说的。重点是model这里，幸好node orm也有实现，sql不用担心。
改一改代码看起来舒服多了，用了global models。不知道怎么避免，可以随着req传递
but要多写n多行代码。


[http://docs.sequelizejs.com/](http://docs.sequelizejs.com/)
[mysql2](https://www.npmjs.com/package/mysql2)