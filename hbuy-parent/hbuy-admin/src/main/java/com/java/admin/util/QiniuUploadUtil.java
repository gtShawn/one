package com.java.admin.util;

import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.util.Auth;
import org.junit.Test;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class QiniuUploadUtil {

    //设置好账号的ACCESS_KEY和SECRET_KEY;这两个登录七牛账号里面可以找到 
    static String ACCESS_KEY = "INNEnrGtoQSvqpeXDLDpd5tr77zExkICOoYXlr80";
    static String SECRET_KEY = "tk8n9siJsstbsvADm-Gx5TkjlF5u6XBw0cYY0_ZD";
    //要上传的空间;对应到七牛上（自己建文件夹 注意设置公开）  
    static String bucketname = "images";
    //访问上传文件的域名
    static String path = "http://pvr2u5exo.bkt.clouddn.com/";
    //密钥配置  
    static Auth auth = Auth.create(ACCESS_KEY, SECRET_KEY);
    //创建上传对象  
    static UploadManager uploadManager = new UploadManager(new Configuration(Zone.zone2()));
    //简单上传，使用默认策略，只需要设置上传的空间名就可以了  
    public static String getUpToken(){
        return auth.uploadToken(bucketname);  
    }  
  
    //普通上传  
    @Test
    public static Map<String,Object> upload(MultipartFile myFile) throws IOException{
      Map<String,Object> map = new HashMap<String, Object>();
      //上传到七牛后保存的文件名
      String key = UUID.randomUUID().toString().replace("-", "");
      try {  
        //调用put方法上传
        Response res = uploadManager.put(myFile.getBytes(),key,getUpToken());
        //打印返回的信息
        System.out.println(res.bodyString());
        //得到上传文件后的key值，目的得到新文件的访问路径
        String uuidKey = res.jsonToMap().map().get("key").toString();
        String newFilePath = path+uuidKey;
        map.put("code",0);
        map.put("newFilePath",newFilePath);
        } catch (QiniuException e) {
            Response r = e.response;
            // 请求失败时打印的异常的信息
            System.out.println(r.toString());
            map.put("code",200);
        }
        return map;
    }  

}  
	

