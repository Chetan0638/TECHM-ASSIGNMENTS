package org;
import java.util.Scanner;
import java.util.Arrays;
public class task5 {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.print("enter a string:");
        String str;
        str=sc.next();
        char[] charArray=str.toCharArray();
        for(int i=0;i<charArray.length;i=i+2) {
        	charArray[i]=Character.toUpperCase(charArray[i]);
        	
        	
        }
        for(int i=0;i<charArray.length;i++) {
        	System.out.print(charArray[i]);
        }
        
        
        
		
		
	}

}
