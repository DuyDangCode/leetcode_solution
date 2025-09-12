import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main {
    private static Set<Character> vowelsSet = new HashSet<>(Arrays.asList('e', 'u', 'o', 'a', 'i'));

    public boolean doesAliceWin(String s) {
        int countVowels = 0;
        for (char c : s.toCharArray()) {
            if (vowelsSet.contains(c)) {
                return true;
            }
        }
        return false;
    }
}