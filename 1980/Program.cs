using System.Text;

public class Program
{
    public static string FindDifferentBinaryString(string[] nums)
    {
        var numsInt = nums.Select(num => Convert.ToInt32(num, 2)).ToArray();

        var numsSet = new HashSet<int>(numsInt);

        var sb = new StringBuilder(nums.Length);
        for (var i = 0; i < nums.Length; i++)
            sb.Append('1');

        var maxNumber = Convert.ToInt32(sb.ToString(), 2);
        for (var i = 0; i <= maxNumber; i++)
        {
            if (!numsSet.Contains(i))
            {
                var binaryNumber = Convert.ToString(i, 2);
                while (binaryNumber.Length < nums.Length)
                {
                    binaryNumber = 0 + binaryNumber;
                }
                return binaryNumber;
            }
        }
        return "";
    }

    public static void Main(string[] args)
    {
        var arr = new string[] { "111", "011", "001" };
        System.Console.WriteLine(FindDifferentBinaryString(arr));
    }
}
