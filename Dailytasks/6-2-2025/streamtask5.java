package stream;
import java.util.Arrays;
import java.util.List;
public class streamtask5 {
  public static void main(String[] args) {
    List < String > colors = Arrays.asList("pink", "blue", "orange", "yellow", "purple");
    System.out.println("Original list of colors: " + colors);
    char startingLetter = 'p';
    long ctr = colors.stream().filter(s -> s.startsWith(String.valueOf(startingLetter))).count();
    System.out.println("Colors starting with '" + startingLetter + "': " + ctr);
    char startingLetter1 = 'y';
    ctr = colors.stream().filter(s -> s.startsWith(String.valueOf(startingLetter1))).count();
    System.out.println("Colors starting with '" + startingLetter1 + "': " + ctr);
  }
}
