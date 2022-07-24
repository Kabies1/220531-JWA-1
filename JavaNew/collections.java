import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;



public class collections {
    public static void main(String[] args) {



List<String> myArrayList = new ArrayList<>();

myArrayList.add("My name is Maurice kabeireho and this is my first listing");
myArrayList.add("John is a good man");
myArrayList.add("I am going to make it soon");

System.out.println(myArrayList.get(1));

for(String element: myArrayList) {
    System.out.println(element);

    //myArrayList.remove(1);
}


Map<Integer, String>myMap = new HashMap<>();

myMap.put(0, "Nyamayemje");
myMap.put(1, "Buyanja");
myMap.put(2, "Rwenkuraijo");
myMap.put(3, "Kafunjo");


System.out.println(myMap.values());
System.out.println(myMap.keySet());



List<Integer>age = new ArrayList<>();

age.add(20);
age.add(15);
age.add(35);
age.add(45);
System.out.println(age.get(1));


}
    }

    
    
}

