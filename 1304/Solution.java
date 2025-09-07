class Solution {
  public static int[] sumZero(int n) {
    int[] result = new int[n];
    int i = 0;
    int start = 0;

    if (n % 2 != 0) {
      result[i] = start;
      i++;
    }
    start++;
    for (; i < n; i = i + 2) {
      result[i] = start;
      result[i + 1] = -start;
      start++;
    }

    return result;
  }

  public static void main(String[] args) {
    var result = sumZero(5);
    System.out.println(result);
  }
}
