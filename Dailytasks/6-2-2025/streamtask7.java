package stream;
import java.util.Arrays;
import java.util.List;
public class streamtask7 {
  public static void main(String[] args) {
    List <Integer> nums = Arrays.asList(20,13,38,31,42,0,0);
    System.out.println("Original list of numbers: " + nums);  
  Integer maximumval = nums.stream().max(Integer::compare).orElse(null);
    Integer minimumval = nums.stream().min(Integer::compare).orElse(null);
    System.out.println("Maximum value of  list: " + maximumval);
    System.out.println("Minimum value of list: " + minimumval);
  }
}

