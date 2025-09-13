internal class Program
{
    public static HashSet<char> vowelsSet = new HashSet<char>("ueoai");
    private static void Main(string[] args)
    {
    }
    public int MaxFreqSum(string s)
    {
        var dic = new Dictionary<char, int>();
        foreach (var c in s)
        {
            if (dic.ContainsKey(c))
            {
                dic[c] += 1;
            }
            else
            {
                dic.Add(c, 1);
            }
        }
        int vowelsFreqMax = 0, consonantsFreqMax = 0;
        foreach (var pair in dic)
        {
            if (vowelsSet.Contains(pair.Key))
            {
                vowelsFreqMax = Math.Max(vowelsFreqMax, pair.Value);
            }
            else
            {
                consonantsFreqMax = Math.Max(consonantsFreqMax, pair.Value);
            }
        }
        return vowelsFreqMax + consonantsFreqMax;
    }
}
