### db_dict_split.exe 使用说明

## （都是对单一的数据库，中单一的用户（userEmail）操作的）

运行时携带4个参数 :（下面操作的数据表都 默认保存在localhost 下的名为：my_db 的数据库中）

1. 字典的表名
2. 语料数据的表名
3. 保存结果的表名
4. 用户的 userEmail

运行时携带5个参数 :

1. 数据库名
2. 字典的表名
3. 语料数据的表名
4. 保存结果的表名
5. 用户的 userEmail



5个参数的运行样例：

![image-20211111195710865](C:\Users\86136\AppData\Roaming\Typora\typora-user-images\image-20211111195710865.png)

### jiagu_train_model.exe使用说明

**ap.model**放在同级目录下（如果没有训练集数据的话）

运行时携带4个参数 :（下面操作的数据表都 默认保存在localhost 下的名为：my_db 的数据库中）

 	1.   训练集的表名
 	2.   语料数据的表名
 	3.   保存结果的表名
 	4.   用户的 userEmail

运行时携带5个参数 :

1. 数据库名
2. 训练集的表名
3. 语料数据的表名
4. 保存结果的表名
5. 用户的 userEmail



5个参数的运行样例：

![image-20211111200023433](C:\Users\86136\AppData\Roaming\Typora\typora-user-images\image-20211111200023433.png)



##### 预测结果的表的样式 只要有这个userEmail  和data键就好了  然后data是预测的结果的样式

![image-20211111195431420](C:\Users\86136\AppData\Roaming\Typora\typora-user-images\image-20211111195431420.png)

