package jdbcconnections;

import java.sql.*;
import java.util.Scanner;

public class task3 {
  public static void main(String args[]) throws SQLException, Exception {

    Scanner scan = new Scanner(System.in);

    Class.forName("com.mysql.cj.jdbc.Driver");

    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sqlconnection", "root", "tiger");

    System.out.println(
        "Choose from the following to delete respectively:\n 1.Employee ID \n 2.Employee Name \n 3.Employee Age");
    int choice = scan.nextInt();

    String colName = "";
    if (choice == 1) {
      colName += "empid";
    } else if (choice == 2) {
      colName += "emp_name";
    } else if (choice == 3) {
      colName += "emp_age";
    }

    PreparedStatement ps = con.prepareStatement("DELETE FROM emp WHERE " + colName + " = ?");

    System.out.print("\nEnter " + colName + " : ");
    if (choice == 1) {
      ps.setInt(1, scan.nextInt());
    } else {
      ps.setString(1, scan.next());
    }

    int value = ps.executeUpdate();
    System.out.println("\n" + value + " Row(s) deleted from the Table");

    scan.close();
    con.close();
  }
}