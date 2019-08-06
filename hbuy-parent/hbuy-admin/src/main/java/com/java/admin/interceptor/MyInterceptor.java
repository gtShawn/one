package com.java.admin.interceptor;

import com.java.admin.model.AdminUsersEntity;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class MyInterceptor implements HandlerInterceptor {

    //拦截器的核心法方法
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws ServletException, IOException {
        System.out.println("执行了preHandle方法");
        //得到session容器
        HttpSession session = request.getSession();
        //得到用户登录时的用户对象
        AdminUsersEntity loginUser = (AdminUsersEntity) session.getAttribute("loginUser");
        if (loginUser!=null){
            return true;    //拦截器放行
        }else {
            request.setAttribute("interceptorMsg",200);
            //去登陆器
            request.getRequestDispatcher("/").forward(request,response);
            return false;       //表示阻止请求继续向下执行，将此请求拦截
        }
    }

    //post请求的拦截方法
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
        System.out.println("执行了postHandle。。。");
    }

    //拦截之后调用的方法
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        System.out.println("执行了afterCompletion。。。");
    }
}
