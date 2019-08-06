package com.java.admin.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang.builder.ReflectionToStringBuilder;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * @author djin
 *    AdminUsers实体类
 * @date 2019-07-29 10:11:48
 */
public class AdminUsersEntity implements Serializable{

	  private static final long serialVersionUID = 1L;
	
      //主键
	  private Long id;
      //用户名
	  private String username;
      //密码
	  private String pwd;
      //1超级管理员，0普通管理员
	  private String isroot;
      //账号最新变动时间
      @JsonFormat(pattern="yyyy/MM/dd HH:mm:ss")
	  private Date updatetime;
      //用户头像
	  private String userHeader;

	 public String getUserHeader() {
		 return userHeader;
	 }

	 public void setUserHeader(String userHeader) {
		 this.userHeader = userHeader;
	 }

	/**
	   * 设置：主键
	   */
	  public void setId(Long id) {
		  this.id = id;
	  }
	  /**
	   * 获取：主键
	   */
	  public Long getId() {
	   	  return id;
	  }
	  /**
	   * 设置：用户名
	   */
	  public void setUsername(String username) {
		  this.username = username;
	  }
	  /**
	   * 获取：用户名
	   */
	  public String getUsername() {
	   	  return username;
	  }
	  /**
	   * 设置：密码
	   */
	  public void setPwd(String pwd) {
		  this.pwd = pwd;
	  }
	  /**
	   * 获取：密码
	   */
	  public String getPwd() {
	   	  return pwd;
	  }
	  /**
	   * 设置：1超级管理员，0普通管理员
	   */
	  public void setIsroot(String isroot) {
		  this.isroot = isroot;
	  }
	  /**
	   * 获取：1超级管理员，0普通管理员
	   */
	  public String getIsroot() {
	   	  return isroot;
	  }
	  /**
	   * 设置：账号最新变动时间
	   */
	  public void setUpdatetime(Date updatetime) {
		  this.updatetime = updatetime;
	  }
	  /**
	   * 获取：账号最新变动时间
	   */
	  public Date getUpdatetime() {
	   	  return updatetime;
	  }

	 
	  @Override
	  public String toString() {
		  return  ReflectionToStringBuilder.toString(this);
	  }

}
