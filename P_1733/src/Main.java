import java.util.*;

public class Main {
    public static int minimumTeachings(int n, int[][] languages, int[][] friendships) {
        Set<Integer> cannCom = new HashSet<>();

        for (int[] friend : friendships) {
            int user1 = friend[0] - 1;
            int user2 = friend[1] - 1;
            Set<Integer> langsUser1 = new HashSet<>();
            boolean comn = false;

            for (int langs : languages[user1]) {
                langsUser1.add(langs);
            }

            for (int langs : languages[user2]) {
                if (langsUser1.contains(langs)) {
                    comn = true;
                    break;
                }
            }

            if (!comn) {
                cannCom.add(user1);
                cannCom.add(user2);
            }

        }

        int maxFreq = 0;
        int[] cnt = new int[n + 1];

        for (int user : cannCom) {
            for (int lang : languages[user]) {
                cnt[lang]++;
                maxFreq = Math.max(cnt[lang], maxFreq);
            }
        }

        return cannCom.size() - maxFreq;
    }
}