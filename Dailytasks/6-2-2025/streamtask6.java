package stream;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
public class streamtask6 {
  public static void main(String[] args) {
    List < String > colors = Arrays.asList("pink", "black", "white", "gold", "silver");
    System.out.println("Original List of strings(colors): " + colors);
    List<String> alphabetical = colors.stream().sorted().collect(Collectors.toList());
    List < String > ascendingOrder = colors.stream().sorted().collect(Collectors.toList());
    List < String > descendingOrder = colors.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
    System.out.println("\nSorted in Alphabetical Order: " + alphabetical);
    System.out.println("\nSorted in Ascending Order: " + ascendingOrder);
    System.out.println("\nSorted in Descending Order: " + descendingOrder);
  }
}

