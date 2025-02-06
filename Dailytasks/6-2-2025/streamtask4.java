package stream;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class streamtask4 {
  public static void main(String[] args) {
    List < Integer > numbers = Arrays.asList(1,2,3,2,3,4,1,5,4,6,7,4,5,8);
    System.out.println("Original List of numbers: " + numbers);
    List < Integer > uniquenums = numbers.stream().distinct().collect(Collectors.toList());
    System.out.println("After removing duplicates from the list: " + uniquenums);
  }
}
