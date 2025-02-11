package org;

class Employee{
	int empId;
	String empName;
	double sal;
	int exp;
	void getEmployeeDetails() {
		
	}
	void setEmployeeDetails(int empId,String empName,double sal,int exp) {
		this.empId = empId;
		this.empName = empName;
		this.sal = sal;
		this.exp = exp;
		
	}
	int getLoanEligibility() {
		if(exp > 5) {
			if(sal == 6) {
				return 2;
			}
			else if(sal >= 10 && sal < 15) {
				return 5;
			}
			else {
				return 7;
			}
		}
		else {
			return 0;
		}
	}
}


public class Task6 {
	public static void main(String[] args) {
		Employee emp = new Employee();
		emp.setEmployeeDetails(1,"Chethan",16.0,7);
		int loanAmount = emp.getLoanEligibility();
		if(loanAmount == 0) {
			System.out.println("Eligibility has Failed");
		}
		else {
			System.out.println(loanAmount+" Lakhs Loan has been granted");
		}
	}

}
