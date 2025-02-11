package org;

import java.util.Scanner;

public class task9 {public static void main(String args[]) {
	Scanner sc=new Scanner(System.in);
	System.out.print("enter a string:");
    String str;
    str=sc.nextLine();
    char[] charArray=str.toCharArray();
    for(int i=1;i<charArray.length+1;i=i+2) {
    	System.out.print(charArray[i]);
    	
    	
    }
}

}
