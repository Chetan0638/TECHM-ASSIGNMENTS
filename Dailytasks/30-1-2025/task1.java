package org;
import java.util.Scanner;

public class task1 {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int j=0;
		int arr[]= {1,2,3,4,5,6,7,8};
		int arr1[]= new int[arr.length];
    	for(int i=0;i<arr.length;i+=2) {
			System.arraycopy(arr, i, arr1, j++, 1);
		}
		for(int i = 0;i < arr1.length;i++) {
			if(arr1[i]==0) {
				break;
			}
			System.out.println(arr1[i]);
		}
		
			
		
	}
	

}
