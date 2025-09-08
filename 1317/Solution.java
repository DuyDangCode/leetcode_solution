import java.util.ArrayList;
import java.util.List;

class Solution {
  public int[] getNoZeroIntegers(int n) {
    int n1 = 0;
    int n2 = 0;
    int c = 1;
    while (n > 0) {
      int i = n % 10;
      n /= 10;
      if (i == 0) {
        n1 = n1 + 5 * c;
        n2 = n2 + 5 * c;
        n--;
      } else if (i == 1) {
        if (n != 0) {
          n1 = n1 + 9 * c;
          n2 = n2 + 2 * c;
          n--;
        } else {
          n1 = n1 + 1 * c;
        }
      } else {
        n1 = n1 + i / 2 * c;
        n2 = n2 + (i - i / 2) * c;
      }

      c *= 10;

    }
    return new int[] { n1, n2 };
  }
}
