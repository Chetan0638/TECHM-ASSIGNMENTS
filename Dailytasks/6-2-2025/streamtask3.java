package stream;
import java.util.Arrays;
import java.util.List;

public class streamtask3 {
  public static void main(String[] args) {
    List < Integer > numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    System.out.println("list of numbers: "+numbers);
    int evensum = numbers.stream().filter(num -> num % 2 == 0).mapToInt(Integer::intValue).sum();
    System.out.println("Even sum of numbers: " + evensum);
    int oddsum = numbers.stream().filter(num -> num % 2 != 0).mapToInt(Integer::intValue).sum();
    System.out.println("Odd sum of numbers: " + oddsum);
  }
}
