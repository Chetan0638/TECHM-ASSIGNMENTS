package stream;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;
public class streamtask2 {
	public static void main(String args[]) {
		List<String> al=Arrays.asList("pink","blue","orange","red","purple");
		System.out.println("Orginal List is : "+al);
		List <String> uppercaseStr= al.stream().map(String::toUpperCase).collect(Collectors.toList());
		System.out.println("Uppercase strings are: "+uppercaseStr);
		
	}

}
