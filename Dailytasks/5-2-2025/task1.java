package jdbcconnections;
import java.sql.*;
import java.util.Scanner;
public class task1 {
	public static void main(String args[]) throws ClassNotFoundException,SQLException{
		Scanner sc=new Scanner(System.in);
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sqlconnection","root","tiger");
		PreparedStatement ps=con.prepareStatement("insert into emp values(?,?,?)");
		while(true) {
			System.out.println("do you want to insert rows\n (Yes/No):");
			if(sc.next().contains("no")) {
				System.out.println("rows not inserted");
			}
			else {
				System.out.println("Enter Employee Id :");
				ps.setInt(1, sc.nextInt());
				System.out.println("Enter Employee Name :");
				ps.setString(2,sc.next());
				System.out.println("Enter Employee Age: ");
				ps.setInt(3, sc.nextInt());
				System.out.println("Successfully Inserted a row");
			}
		}
	}
	
}
