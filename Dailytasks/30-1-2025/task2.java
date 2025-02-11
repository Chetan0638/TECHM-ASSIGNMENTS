package org;
import java.util.Scanner;
public class task2 {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		String st_name;
		int sub1,sub2,sub3,avg=0,total_st;
		System.out.print("Enter total no. of sudents:");
		total_st=sc.nextInt();
		for(int i=0;i<total_st;i++) {
			System.out.println("enter the student"+ i+1 +"name");
			st_name=sc.next();
			System.out.println("Enter marks of student"+i+1+"for 3 subjects ");
			for(int j=0;j<3;j++) {
				sub1=sc.nextInt();
				sub2=sc.nextInt();
				sub3=sc.nextInt();
			}
		}
		
		
		
		
	}

}
