package com.examples;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class itemBeanRunner {
    public static void main(String args[]) {
        ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
        ItemBean itemBean = (ItemBean) context.getBean("itemBean");
        itemBean.displayValues();
    }
}

