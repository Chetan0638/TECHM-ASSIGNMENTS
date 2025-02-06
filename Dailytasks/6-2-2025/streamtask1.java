package stream;
import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;
import java.util.stream.Collectors;
public class streamtask1 {
	public static void main(String args[]) {
		ArrayList<Integer> al=new ArrayList<>();
		for (int i=1;i<=10;i=i+3) {
			al.add(i);
			
		}
		System.out.println("Orginal arraylist: "+al);
		System.out.println("averege of arraylist: "+ al.stream().mapToInt(Integer::intValue).average());
		
	}

}
